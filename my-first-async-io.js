const fs = require('fs');
// process.argv[2]
let countLines = fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log('error', err);
  }
  console.log(data.toString().split('\n').length - 1);
});
// .toString().split('\n').length;
// console.log(countLines - 1);
