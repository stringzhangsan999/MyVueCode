<template>
  <div>
    <h2>我是关于</h2>
    <h3>我是关于内容，哈哈哈哈</h3>
  </div>
</template>

<script>
  //将这个vue组件导出
  export default {
    name: 'about',
     //这个是生命周期函数但是这个生命周期函数这样不灵活不易维护
		created (){

        console.log("About created");
		}
  }
</script>
<style>
</style>
