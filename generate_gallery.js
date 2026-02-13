
const images = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
];

const projects = [
    "Villa Serenity", "Urban Loft", "Seaside Retreat", "Mountain Cabin",
    "Modern Penthouse", "Historic Manor", "Eco Residence", "Minimalist Studio"
];

let html = '<section class="gallery-grid">\n';
html += '  <div class="gallery-header">\n';
html += '  </div>\n';
html += '  <div class="gallery-container">\n';

for (let i = 0; i < 32; i++) {
    const img = images[i % images.length];
    const name = `${projects[i % projects.length]} ${Math.floor(i / projects.length) + 1}`;
    
    html += '    <div class="gallery-item">\n';
    html += '      <div class="gallery-image-wrapper">\n';
    html += `        <img src="${img}" alt="${name}" loading="lazy"/>\n`;
    html += '      </div>\n';
    html += '      <a href="portfolio.html" class="service-link gallery-btn">\n';
    html += `        <span class="link-text">${name}</span>\n`;
    html += '        <span class="link-spacer"></span>\n';
    html += '        <span class="arrow">\n';
    html += '          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n';
    html += '            <path d="M7 17L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n';
    html += '            <path d="M7 7H17V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n';
    html += '          </svg>\n';
    html += '        </span>\n';
    html += '      </a>\n';
    html += '    </div>\n';
}

html += '  </div>\n';
html += '</section>';

console.log(html);
