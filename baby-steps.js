const process = require('process');
let total = 0;
// console.log(process.argv);
process.argv.map((el) => {
  !isNaN(el) ? (total += parseInt(el)) : el;
});
console.log(total);
