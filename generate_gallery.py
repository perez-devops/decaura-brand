
import random

images = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
]

projects = [
    "Villa Serenity", "Urban Loft", "Seaside Retreat", "Mountain Cabin",
    "Modern Penthouse", "Historic Manor", "Eco Residence", "Minimalist Studio"
]

print('<section class="gallery-grid">')
print('  <div class="gallery-header">')
print('  </div>')
print('  <div class="gallery-container">')

for i in range(32):
    img = images[i % len(images)]
    name = f"{projects[i % len(projects)]} {i//len(projects) + 1}"
    
    print(f'    <div class="gallery-item">')
    print(f'      <div class="gallery-image-wrapper">')
    print(f'        <img src="{img}" alt="{name}" loading="lazy"/>')
    print(f'      </div>')
    print(f'      <a href="portfolio.html" class="service-link gallery-btn">')
    print(f'        <span class="link-text">{name}</span>')
    print(f'        <span class="link-spacer"></span>')
    print(f'        <span class="arrow">')
    print(f'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">')
    print(f'            <path d="M7 17L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>')
    print(f'            <path d="M7 7H17V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>')
    print(f'          </svg>')
    print(f'        </span>')
    print(f'      </a>')
    print(f'    </div>')

print('  </div>')
print('</section>')
