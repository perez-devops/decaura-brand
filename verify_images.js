const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function getImageUrls(dir) {
    const files = fs.readdirSync(dir);
    let urls = new Set();
    
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const content = fs.readFileSync(path.join(dir, file), 'utf8');
            const regex = /src=["'](https?:\/\/[^"']+)["']/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                urls.add(match[1]);
            }
            const regexPoster = /poster=["'](https?:\/\/[^"']+)["']/g;
            while ((match = regexPoster.exec(content)) !== null) {
                urls.add(match[1]);
            }
        }
    });
    return Array.from(urls);
}

function checkUrl(url) {
    return new Promise((resolve) => {
        const protocol = url.startsWith('https') ? https : http;
        const req = protocol.request(url, { method: 'HEAD' }, (res) => {
            if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
                resolve({ url, status: res.statusCode });
            } else {
                resolve({ url, status: res.statusCode, broken: true });
            }
        });
        req.on('error', (e) => {
            resolve({ url, error: e.message, broken: true });
        });
        req.end();
    });
}

async function main() {
    console.log("Scanning directory...");
    const urls = getImageUrls('.');
    console.log(`Found ${urls.length} unique URLs.`);
    
    const results = await Promise.all(urls.map(checkUrl));
    const broken = results.filter(r => r.broken);
    
    if (broken.length === 0) {
        console.log("All image URLs are valid!");
    } else {
        console.log(`Found ${broken.length} broken URLs:`);
        broken.forEach(b => console.log(`${b.url} (Status: ${b.status || b.error})`));
    }
}

main();
