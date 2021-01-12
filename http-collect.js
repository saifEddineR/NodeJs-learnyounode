const { stdout } = require('process');
const http = require('http');
const bl = require('bl');

const url = process.argv[2];
http.get(url, (res) => {
  // res.pipe(
  //   bl((data) => {
  //     console.log(data);
  //   })
  // );
  let line = '';
  res.on('data', (data) => {
    line += data.toString();
  });
  res.on('end', (end) => {
    console.log(line.length);
    console.log(line);
  });
});
