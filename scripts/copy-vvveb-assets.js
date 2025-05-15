const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, '../vvveb-assets');
const targetDir = path.join(__dirname, '../public');

// Ensure target directory exists
fs.ensureDirSync(targetDir);

// Copy CSS files
fs.copySync(
  path.join(sourceDir, 'css'),
  path.join(targetDir, 'css'),
  { overwrite: true }
);

// Copy JS files
fs.copySync(
  path.join(sourceDir, 'js'),
  path.join(targetDir, 'js'),
  { overwrite: true }
);

// Copy other assets
fs.copySync(
  path.join(sourceDir, 'libs'),
  path.join(targetDir, 'libs'),
  { overwrite: true }
);

console.log('VVVEb assets copied successfully!'); 