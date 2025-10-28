const fs = require('fs');
const path = require('path');

const themes = require('../src/theme-builder.js');

// Build all themes
Object.entries(themes).forEach(([themeName, variants]) => {
  // Convert camelCase to kebab-case for filenames
  const fileName = themeName.replace(/([A-Z])/g, '-$1').toLowerCase();

  const darkPath = path.join(__dirname, `../themes/beach-condo-${fileName}-dark.json`);
  const lightPath = path.join(__dirname, `../themes/beach-condo-${fileName}-light.json`);

  fs.writeFileSync(darkPath, JSON.stringify(variants.dark, null, 2));
  fs.writeFileSync(lightPath, JSON.stringify(variants.light, null, 2));

  console.log(`✓ ${themeName} dark compiled to themes/beach-condo-${fileName}-dark.json`);
  console.log(`✓ ${themeName} light compiled to themes/beach-condo-${fileName}-light.json`);
});
