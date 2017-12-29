<!-- 推荐页 index.vue -->

<template>
  <div class="sm-contain sm-contain-recommend">

    <!-- banner轮播图 开始 -->
    <div class="sm-banner">
        <sm-swiperbanner :imgUrl="imgUrl"></sm-swiperbanner>
    </div>
    <!-- banner轮播图 结束 -->

    <!-- 首页规则介绍 开始 -->
      <div class="sm-floor">
        <div class="sm-content">
          <a href="#" class="item"><i class="sm-icon sm-icon-pix"></i><span>名创优品自营</span></a>
          <a href="#" class="item"><i class="sm-icon sm-icon-pix"></i><span>30天无忧退货</span></a>
          <a href="#" class="item"><i class="sm-icon sm-icon-pix"></i><span>48小时快速退款</span></a>
        </div>
      </div>
    <!-- 首页规则介绍 结束 -->

    <!-- 品牌甄选 开始-->
    <div class="sm-floor">
      <sm-pack :tittle="tittle">
        <sm-pack-contain :brand="brand"></sm-pack-contain>
      </sm-pack>
    </div>
    <!-- 品牌甄选 结束-->

    <!-- 新品首发 开始-->
    <div class="sm-floor">
      <sm-pack :tittle="'新品首发'" :isHide="true">
        <sm-swiperbox :newgoods="newgoods"></sm-swiperbox>
      </sm-pack>
    </div>
    <!-- 新品首发 结束-->
    
    <!-- 人气推荐 开始-->
    <div class="sm-floor">
      <sm-pack :tittle="'人气推荐'" :isHide="true">
        <sm-popular :hotgoods="hotgoods"></sm-popular>
      </sm-pack>
    </div>
    <!-- 人气推荐 结束-->

    <!-- 人气推荐 开始-->
    <div class="sm-floor">
      <sm-pack :tittle="'专题精选'" :isHide="true">
        <sm-special :topicList="topicList"></sm-special>
      </sm-pack>
    </div>
    <!-- 人气推荐 结束-->

    <!-- 猜你喜欢 开始-->
    <div class="sm-floor">
      <sm-pack :tittle="'猜你喜欢'">
        <sm-list :guessUlike="guessUlike"></sm-list>
      </sm-pack>
    </div>
    <!-- 猜你喜欢 结束-->
  </div>
</template>

<script src="./index.js">
</script>
<style lang="less" src="./index.css">
</style>


