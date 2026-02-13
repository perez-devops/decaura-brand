
const fs = require('fs');

const projects = [
  "Modern Villa", "Urban Loft", "Seaside Retreat", "Mountain Cabin",
  "Luxury Penthouse", "Historic Manor", "Eco Residence", "Minimalist Studio",
  "Country Estate", "City Apartment", "Beach House", "Desert Oasis"
];

// Unsplash IDs for interior/architecture
const imageIds = [
  "1600210492486-724fe5c67fb0", "1600607687939-ce8a6c25118c", "1600585154340-be6161a56a0c",
  "1600566753086-00f18fb6b3ea", "1600573472592-401b489a3cdc", "1600607687644-c7171b42498b",
  "1600566753190-17f0baa2a6c3", "1600585154526-990dced4db0d", "1618221195710-dd6b41faaea6",
  "1556228453-efd6c1ff04f6", "1502005229766-c3522933fac5", "1545324418-cc1a3fa10c00"
];

let html = '<section class="projects-section">\n';
html += '  <div class="projects-header">\n';
html += '    <div class="header-left">\n';
html += '      <h2>Our Projects</h2>\n';
html += '      <p class="section-description">Explore our diverse portfolio of residential and commercial spaces.</p>\n';
html += '    </div>\n';
html += '    <a href="projects.html" class="view-all-btn service-link">View All Projects <span class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7H17V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a>\n';
// Note: using service-link class for View All button to inherit some styles, but might need override
html += '  </div>\n';
html += '  <div class="projects-grid">\n';

for (let i = 0; i < 12; i++) {
  const title = projects[i];
  const imgId = imageIds[i % imageIds.length];
  const imgUrl = `https://images.unsplash.com/photo-${imgId}?w=800&q=80`;

  html += '    <div class="gallery-item">\n'; // Reusing gallery-item class for card style
  html += '      <div class="gallery-image-wrapper">\n';
  html += `        <img src="${imgUrl}" alt="${title}" loading="lazy" />\n`;
  html += '      </div>\n';
  html += '      <a href="project-details.html" class="service-link gallery-btn">\n';
  html += `        <span class="link-text">${title}</span>\n`;
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

fs.writeFileSync('projects_snippet.html', html);
console.log('Projects snippet generated.');
