import os
import re
import requests
from concurrent.futures import ThreadPoolExecutor

def get_image_urls(directory):
    urls = set()
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find src="..."
                    matches = re.findall(r'src=["\'](http[^"\']+)["\']', content)
                    urls.update(matches)
                    # Find poster="..."
                    matches = re.findall(r'poster=["\'](http[^"\']+)["\']', content)
                    urls.update(matches)
    return list(urls)

def check_url(url):
    try:
        response = requests.head(url, timeout=5)
        if response.status_code != 200:
            return url, response.status_code
    except Exception as e:
        return url, str(e)
    return url, 200

def main():
    directory = "."
    print(f"Scanning {directory} for HTML files...")
    urls = get_image_urls(directory)
    print(f"Found {len(urls)} unique image URLs.")
    
    broken_urls = []
    with ThreadPoolExecutor(max_workers=10) as executor:
        results = executor.map(check_url, urls)
        for url, status in results:
            if status != 200:
                print(f"BROKEN: {url} (Status: {status})")
                broken_urls.append(url)
            else:
                pass # print(f"OK: {url}")

    if not broken_urls:
        print("All image URLs are valid!")
    else:
        print(f"Found {len(broken_urls)} broken URLs.")

if __name__ == "__main__":
    main()
