<template>
  <div id="app">
    <!-- <div class="app_main">
        <router-link to="/">parentRouter</router-link> |
        <router-link to="/parentRouter/childerRoutertwe/188/wen">childerRoutertwe</router-link> |
        <router-link to="/ceshi/000/asd">ceshi</router-link> |
        <router-link to="/home">home</router-link> |
        <router-link to="/vue_directive">vue_directive</router-link> | 
        <router-link to="/sortsort">sortsort</router-link> | 
        <router-link to="/cmshuju">cmshuju</router-link>
    </div> -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>  
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return{
    }
  }
}
</script>
<style lang="less" type="text/less">
  #app{
    .app_main{
      text-align: center;
    }
    
    .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      transition: opacity .2s;
    }

    .fade-leave {
      opacity: 1;
    }

    .fade-leave-active {
      opacity: 0;
      transition: opacity .2s;
    }

  }
</style>
