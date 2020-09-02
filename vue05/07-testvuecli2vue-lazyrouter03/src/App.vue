<template>
  <div id="app">
    <h1>我是App组件</h1>
     <!-- active-class修改点击之后会添加的class的名称 缺点就是需要一个一个添加名称，解决使用router配置属性linkActiveClass来修改所有的名称 -->
<!--    <router-link to="/Home" tag="button" replace active-class="active">首页</router-link>
     <router-link to="/About" tag="button" replace active-class="active">关于</router-link> -->

<!--     <router-link to="/Home" tag="button" replace >首页</router-link>
      <router-link to="/About" tag="button" replace>关于</router-link> -->

<!-- 使用代码的方式而不是属性进行路由跳转 -->
<!--      <button @click="homeClick">首页</button>
       <button @click="aboutClick">关于</button> -->


       <router-link to="/Home"  replace >首页</router-link>
       <router-link to="/About"  replace>关于</router-link>
       <router-link :to="'/User/'+userId"  replace>用户</router-link><!-- :相当于v-bind 语法糖的写法 -->
     <router-view></router-view><!-- router-view相当于是占位符一样的作用会将组件内容显示在这  -->

     <!--   <h3>{{$route.params.Id}}</h3> --><!-- 这里的参数名称Id一定是和你动态路由中的:xxx 与xxx对应，而这里的产生就是动态路由后面的路径名称 -->
     <h3>{{id}}</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId : '张三'
      }
    },
  methods:{
  homeClick(){
   // this.$router.push('/Home') ===>对应to属性
   this.$router.replace('/Home') //===>对应replace属性
    console.log('homeClick');
  },
  aboutClick(){
    //this.$router.push('/About')
      this.$router.replace('/About')
    console.log('aboutClick');
  }
  },
  computed:{//计算属性
    id(){
      return this.$route.params.Id
    }
  }
}
</script>

<style>
/*  .router-link-active{
    color: red;
    } */
    .active{
      color: #f00;
    }
</style>
