<template>
  <div>
   <h2>我是用户 </h2>
   <h3>我是用户页面的内容，嘿嘿嘿</h3>
   <h3>params: {{$route.params}}</h3>
   <h3>name: {{$route.query.name}}</h3>
   <h3>age: {{$route.query.age}}</h3>
  </div>
</template>

<script>
  export default{
    name: 'User',
    //这个是生命周期函数但是这个生命周期函数这样不灵活不易维护
    created() {

        console.log("User created");
    }
  }
</script>


<style>
</style>
