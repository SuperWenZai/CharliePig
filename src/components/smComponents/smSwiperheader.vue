<!-- 滚动导航 smSwiperheader.vue -->

<template  lang="html">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide :class="[id == index ? 'active' : '']" 
                    v-for="(item,index) in headerSwiper" 
                    :key="index">
                    
        <router-link :to="item.url">
          <span :data-id="index" @click="getHeaderId">{{item.text}}</span>
        </router-link>

    </swiper-slide>

  </swiper>
</template>
  
<script>

/**
 * @param {Array} headerSwiper 滚动导航参数
 * @author GuiYun.Fun
 */

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "smSwiperheader",
  data() {
    return {
      id: 0, // 默认的选项
      swiperOption: {
        // headerSwiper配置
        debugger: true,
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: "auto"
      }
    };
  },
  props: {
    headerSwiper: {
      // index页面传过来的导航栏data
      default: [],
      type: Array
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    getHeaderId(e) {

      console.log(123)
      let id = e.target.dataset.id;

      this.id = id;
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-container {
  max-width: 640px;
  height: 2.5rem;
  .swiper-wrapper {
    padding: 0 1rem;
    box-sizing: border-box;
  }
}
.swiper-slide {
  position: relative;
  padding: 0 0.5rem;
  margin-right: 0.8rem;
  letter-spacing: 2px;
  width: auto !important;
  text-align: center;
  a {
    display: flex !important;
    justify-content: center;
    align-items: center;
    height: 100%;
    display: block;
    font-size: 1.2rem;
    color: #333333;
    line-height: 1.2rem;
  }
}

.swiper-slide:last-child {
  margin-right: 2rem;
}

.swiper-slide.active a {
  font-size: 1.2rem;
  color: #d9232e;
}

.swiper-slide.active::after {
  content: "";
  height: 0.143333rem;
  background-color: #d9232e;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
