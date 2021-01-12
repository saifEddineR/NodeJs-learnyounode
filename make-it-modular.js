const myModule = require('./mymodule');
var dirName = process.argv[2];
var fileExt = process.argv[3];
myModule(dirName, fileExt, (err, files) => {
  files.map((file) => console.log(file));
});
