const fs = require("fs");

if (fs.existsSync('./src/styles')) {
  if (!fs.existsSync('./build/styles')) fs.mkdirSync('./build/styles');
  fs.readdirSync('./src/styles').forEach(file => {
    fs.copyFileSync('./src/styles/' + file, './build/styles/' + file);
  });
}