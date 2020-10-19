<template>
  <div id="app">
    <h1>我是App组件</h1>
       <router-link to="/Home"  replace >首页</router-link>
       <router-link to="/About"  replace>关于</router-link>
    <!--   <router-link :to="{
         path: '/User/'+1123,
         query: {name: '张三' , age: 18}
         }">用户</router-link>  router-link方式实现 -->

         <a href="javascript:void()" @click="toUser()">用户</a>    <!-- js实现 -->
       <router-view></router-view><!-- router-view相当于是占位符一样的作用会将组件内容显示在这  -->


  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    toUser(){
      this.$router.push({
        path: '/User/'+1123,
        query: {name: '张三', age: 18}
      })
    }
  }
}
</script>

<style>
    .active{
      color: #f00;
    }
</style>
