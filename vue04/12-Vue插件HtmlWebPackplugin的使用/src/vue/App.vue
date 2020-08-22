<template>
	<div>
	<p class="title">{{name}}</p>
	<button>按钮</button>
	<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn'//如果在配置文件里面配置了扩展名省略写法那么这里可以不用写.vue
	export default{		
		name:'Vue',
		components:{
			Cpn
		},
	data(){
			 return { message:"hello world!", name:'张三'}
	},
	method:{
			 btnClick(){
				 console.log("btnClick...");
			 }
	},
	}
</script>

<style>
	.title{
		color: red;
	}
</style>
