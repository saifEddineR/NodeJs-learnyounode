var fs = require('fs');
module.exports = function (dirName, Fileext, callback) {
  fs.readdir(dirName, (err, list) => {
    let fileList = [];
    if (err) {
      return callback(err);
    } else {
      list.map((file) => {
        file.split('.')[1] === Fileext ? fileList.push(file) : file;
      });
    }
    return callback(null, fileList);
  });
};
//
