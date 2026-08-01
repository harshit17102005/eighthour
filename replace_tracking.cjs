const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(directory);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  content = content.replace(/tracking-\[0\.25em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.3em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.2em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.15em\]/g, 'tracking-widest');
  content = content.replace(/tracking-\[0\.1em\]/g, 'tracking-wider');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated tracking in ${file}`);
  }
});
console.log('Done.');
