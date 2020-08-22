<template>
	<div><!-- 在模板里面必须要一个根标签 -->
	<h1>我是Cpn组件</h1>
	<h2>{{name}}</h2>
	</div>
</template>

<script>
	export default{
		name:'Cpn',
		data(){
			return {name:'Cpn组件name'}
		}
	}
</script>

<style>
</style>
