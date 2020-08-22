//1.引入js
const info=require('./js/info.js');

console.log('Hello webpack');
console.log(info.name);
console.log(info.age);
console.log(info.height);
//2.引入css
//require('./css/normal.css')

//3.引入less
require('./css/special.less')