const fs = require('fs');
// process.argv[2]
let countLines = fs.readFileSync(process.argv[2]).toString().split('\n').length;
console.log(countLines - 1);
