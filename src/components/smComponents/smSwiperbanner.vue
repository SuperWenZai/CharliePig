<!-- banner图 smSwiperbanner.vue -->

<template>
    <swiper :options="swiperOption" ref="mySwiper">

        <swiper-slide v-for="(item,index) in imgUrl" :key="index">
            <router-link to="#">
                <img :src="item.pic">
            </router-link>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>

/**
 * @param {Array} imgUrl banner图参数
 * @author GuiYun.Fun
 */

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "smSwiperbanner",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        // loop : true,
        pagination: {
          el: ".swiper-pagination"
        },
      }
    };
  },
  props: {
    imgUrl: {
      default: [],
      type: Array
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
  }
};
</script>

<style lang="less">
.swiper-pagination-bullet {
  width: 7px !important;
  height: 7px !important;
  background-color: #ffffff !important;
  opacity: 0.8 !important;
}
.swiper-pagination-bullet-active {
  border: none;
  background-color: #d9232e !important;
}
.swiper-slide {
  a {
    display: block;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>

