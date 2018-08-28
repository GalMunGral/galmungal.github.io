const fs = require('fs');
const { exec } = require('child_process');
const fileId = process.argv[2].split('.')[0];
const meta = JSON.parse(fs.readFileSync('meta.json'));
meta.push({ id: fileId });
fs.writeFileSync('meta.json', JSON.stringify(meta));
