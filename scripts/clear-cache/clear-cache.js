// "postinstall": "rmdir /s /q .\\node_modules\\.cache" // only windows

// Remove build cache

const fs = require('fs');
const path = require('path');

const cacheDir = path.join(__dirname, '..', '..', 'node_modules/.cache');
const cache = path.resolve(__dirname, '..', '..', 'node_modules', '.cache');
// console.log(cacheDir);
// console.log(cache);

try {
    // fs.rmdirSync(cacheDir);
    // https://stackoverflow.com/questions/18052762/remove-directory-which-is-not-empty
    fs.rmSync(cacheDir, { recursive: true, force: true });
} catch (e) {
    console.log(e);
}

// node ./scripts/clear-cache/clear-cache.js
