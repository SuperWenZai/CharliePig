<!-- 专题精选 smSpecial.vue -->

<template>
  <div class="smSpecial">
      <router-link to="#">
            <img :src="topicList.litpic" alt="">
            <div class="info">
                <div class="line1">
                    <h4>{{topicList.title}}</h4>
                    <p class="price">¥<span>{{topicList.starting_fare}}</span>起</p>
                </div>
                <div class="desc">{{topicList.description}}</div>
            </div>
      </router-link>
  </div>
</template>

<style lang="less">
.smSpecial {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 1rem;
  a {
    display: block;
    img {
      width: 100%;
    }
    .info {
      padding: .8rem 1rem;
      .line1 {
        display: flex;
        justify-content: space-between;
        h4 {
          width: 18rem;
          font-size: 1.6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .price {
          font-size: 1.6rem;
          color: #d9232e;
        }
        p {
          line-height: 1.8rem;
        }
      }
      .desc {
        font-size: 1.2rem;
        color: #7f7f7f;
        line-height: 1.8rem;
      }
    }
  }
}
</style>

<script>

/**
 * @param {Array} topicList 专题精选参数
 * @author GuiYun.Fun
 */

export default {
  name: "smSpecial",
  data() {
    return {};
  },
  props : {
    topicList : {
      default : {},
      type : Object
    }
  }
};
</script>
