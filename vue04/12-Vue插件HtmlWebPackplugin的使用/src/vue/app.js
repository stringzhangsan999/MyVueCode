export default{
	 template: `	 <div>
	 <p>{{name}}</p>
	 <button>按钮</button>
	 </div>`,
	 data(){
		 return { message:"hello world!", name:'张三'}
	 },
	 method:{
		 btnClick(){
			 console.log("btnClick...");
		 }
	 }
 }