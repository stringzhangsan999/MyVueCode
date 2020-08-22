//1.引入js
const info=require('./js/info.js');

console.log('Hello webpack');
console.log(info.name);
console.log(info.age);
console.log(info.height);
//2.引入css 4.在css中引入图片资源
 require('./css/normal.css');

//3.引入less
 //require('./css/special.less')
 
 import Vue from 'vue'
 
 new Vue({
	 el:'#app',
	 template:`
	 <div>
	 <p>{{name}}</p>
	 <button>按钮</button>
	 </div>
	 `,/* template会替换掉里面的el挂载里面的内容 */
	 data:{
		 message:"hello world!",
		 name:'张三'
	 }
 })
