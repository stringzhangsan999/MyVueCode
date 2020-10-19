<template>
  <div>
    <h2>我是首页</h2>
    <h3>我是首页内容，哈哈哈哈</h3>
    <router-link to="/Home/News">新闻</router-link>
     <router-link to="/Home/Message">消息</router-link>
     <router-view></router-view>
  </div>
</template>

<script>
  //将这个vue组件导出
  export default {
    name: 'home',
     //这个是生命周期函数但是这个生命周期函数这样不灵活不易维护
      created (){

        console.log("Home created");
    },
    data(){
      return {
         path: ''
      }
    },
    activated(){//记录活跃时的操作
      console.log('activated')
      this.$router.push(this.path)
    },
   beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }

  }
</script>

<style>
</style>
