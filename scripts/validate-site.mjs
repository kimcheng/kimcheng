import { readFileSync, statSync } from 'node:fs';
for (const file of ['index.html', 'src/styles.css']) {
  statSync(file);
  const content = readFileSync(file, 'utf8');
  if (!content.trim()) throw new Error(`${file} is empty`);
}
const html = readFileSync('index.html', 'utf8');
for (const token of ['瑞驰自行车', 'PRODUCT SERIES', 'CORE TECHNOLOGY', 'BRAND STORY']) {
  if (!html.includes(token)) throw new Error(`Missing expected content: ${token}`);
}
console.log('Static site validation passed.');
