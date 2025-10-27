const fs = require('fs');
const path = require('path');

const themes = require('../src/theme-builder.js');

// Build all themes
Object.entries(themes).forEach(([themeName, variants]) => {
  const darkPath = path.join(__dirname, `../themes/${themeName}-dark-theme.json`);
  const lightPath = path.join(__dirname, `../themes/${themeName}-light-theme.json`);

  fs.writeFileSync(darkPath, JSON.stringify(variants.dark, null, 2));
  fs.writeFileSync(lightPath, JSON.stringify(variants.light, null, 2));

  console.log(`✓ ${themeName} dark compiled to themes/${themeName}-dark-theme.json`);
  console.log(`✓ ${themeName} light compiled to themes/${themeName}-light-theme.json`);
});
