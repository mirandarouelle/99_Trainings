const script2 = require('./script2.js');

const a = 4;
const b = 6;

setTimeout(() => {
  console.log(a+b);
}, 3000);

console.log(__dirname);

console.log(script2.largeNumber);
