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
 
 //使用Vue进行开发
 import Vue from 'vue'
 
 // 组件化抽取
 // const App={
	//  template: `	 <div>
	//  <p>{{name}}</p>
	//  <button>按钮</button>
	//  </div>`,
	//  data(){
	// 	 return { message:"hello world!", name:'张三'}
	//  },
	//  method:{
	// 	 btnClick(){
	// 		 console.log("btnClick...");
	// 	 }
	//  }
 // }
 //import App from './vue/app.js' 我们以js模块化导入对象，其实这里我们导入的换一种说法就是导入的一个组件
 import App from './vue/App.vue' //我们真正的使用vue组件去导入这个功能 实现了template、css和js代码的抽离
 
 new Vue({
	 el:'#app',
	 template:`<App/>`,/* template会替换掉里面的el挂载里面的内容 */
	 components:{
		 App    //对象升级写法，默认会将这个变量名作为Key和Value
	 }
 })
