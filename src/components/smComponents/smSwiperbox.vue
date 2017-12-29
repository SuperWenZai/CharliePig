<!-- 新品首发 smSwiperbox.vue -->

<template>
  <div class="smSwiperbox">
    <swiper :options="swiperOption" ref="mySwiper">

      <swiper-slide v-for="(item,index) in newgoods" :key="index">
          <router-link to="#">

              <div class="pic">
                <div>
                  <img :src="item.image_default" alt="">
                </div>
              </div>

              <div class="info">
                <div class="tag">
                  <span v-for="(item,index) in item.tags" :key="index" :style="{ color: item.tag_fgcolor, backgroundColor: item.tag_bgcolor }">{{item.tag_name}}</span>
                </div>

                <p class="name">{{item.product_name}}</p>
                <p class="desc">{{item.brief}}</p>
                <p class="price">
                  <span>¥{{item.price}}</span>
                </p>
              </div>

          </router-link>
      </swiper-slide>

      <swiper-slide>
          <router-link to="#">

            <div class="pic">
              <div>
                <div class="link_text">
                  查看全部
                </div>
              </div>
            </div>
            
          </router-link>
      </swiper-slide>

    </swiper>
  </div>
</template>

<style lang="less">
.smSwiperbox {
  overflow: hidden;
  display: flex;
  height: 100%;
  .pic {
    display: inline-block;
    background: #f4f4f4;
    position: relative;
    z-index: 0;
    width: 11rem;
    & > div {
      padding-bottom: 100%;
      position: relative;
      width: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .link_text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        color: #7f7f7f;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .info {
    display: inline-block;
    position: relative;
    z-index: 0;
    width: 11rem;
    .tag {
      span {
        display: inline-block;
        font-size: 0.42222rem;
        color: #fff;
        background-color: #c4061a;
        padding: 0 0.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        margin-top: 0.6rem;
        margin-right: .4rem;
      }
    }
    p {
      line-height: 2rem;
    }
    .name {
      font-size: 1.2rem;
      color: #333333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: .2rem;
    }
    .desc {
      font-size: 1rem;
      color: #7f7f7f;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2rem;
    }
    .price {
      font-size: 1.2rem;
      color: #d9232e;
      span{
        font-size: 1.2rem;
      }
    }
  }
  .swiper-slide {
    width: auto;
    margin-left: 1.2rem;
    margin-bottom: 1.2rem;
    a {
      display: flex;
      flex-direction: column;
    }
  }

  .swiper-slide:last-child {
    margin-right: 1.2rem;
  }
}
</style>

<script>

/**
 * @param {Array} newgoods 新品首发参数
 * @author GuiYun.Fun
 */

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "smSwiperbox",
  data() {
    return {
      swiperOption: {
        debugger: true,
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: "auto"
      }
    };
  },
  props : {
    newgoods : {
      default : [],
      type : Array
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
  }
};
</script>


