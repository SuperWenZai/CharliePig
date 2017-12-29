<!-- 页面脚部 smFooter.vue -->

<template>
<div class="sm-footer">
  <div class="sm-footerMain">

      <router-link    v-for="(item,index) in footerItem" 
                      :to="item.url" 
                      :key="index" 
                      :data-id="index"
                      :class="[itemId == index ? 'active' : '']"
                      @click="active">

                        <i class="item" @click="active" :data-id="index">
                            <img :src="item.pic" alt="/*\" @click="active" :data-id="index">
                        </i>
                        
                        <span @click="active" :data-id="index">{{item.text}}</span>

      </router-link>

  </div>
</div>
</template>

<script>

/**
 * @param {Array} footerItem 页脚参数
 * @author GuiYun.Fun
 */

export default {
  name: "smFooter",
  data() {
    return {
      itemId: 0
    };
  },
  props: {
    footerItem: {
      default: [],
      type: Array
    }
  },
  methods: {
    active(e) {
      this.itemId = e.target.dataset.id;
    }
  }
};
</script>


<style lang="less">
.sm-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 4.5rem;
  width: 100%;
  background-color: #ffffff;
  color: #ffffff;
  box-sizing: border-box;
  z-index: 100;
  .sm-footerMain {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d9d9d9;
    z-index: 100;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      box-sizing: border-box;
      padding-top: 0.8rem;
      .item {
        height: 1.6rem;
        width: 1.6rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      span {
        margin-top: 0.2rem;
        font-size: 1rem;
        color: #333333;
        text-align: center;
      }
    }
    .active span {
      color: #d9232e !important;
    }
  }
}
</style>
