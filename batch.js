const fs = require('fs');
const exec = require('child_process').execFile;
const INPUT_PATH = './input';
const OUTPUT_PATH = './output';
const CONFIG_PATH = './config.txt';
const YABBER_PATH = fs.readFileSync(CONFIG_PATH, 'utf-8');
const FILES = fs.readdirSync(INPUT_PATH);

FILES.forEach(file => {
	exec(YABBER_PATH, [`${INPUT_PATH}/${file}`]);
});