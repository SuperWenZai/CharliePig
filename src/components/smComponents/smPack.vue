<!-- floor标题框架 smPack.vue -->

<template>
    <div class="sm-pack">

        <div class="sm-tittle">
            <a href="#">
            <span>{{tittle}}</span>
            </a>

            <i class="sm-icon sm-icon-circular-right" v-if="isHide"></i>
        </div>

        <slot></slot>
        
    </div>
</template>

<style lang="less">
.sm-pack {
  box-sizing: border-box;
  overflow: hidden;
  .sm-tittle {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0;
    box-sizing: border-box;
    vertical-align: middle;
    a {
      vertical-align: middle;
      span {
        color: #333333;
        font-size: 1.4rem;
        height: 1.4rem;
        line-height: 1.4rem;
      }
    }
    .sm-icon-circular-right {
      background-image: url("../../../static/smImages/right.png");
    }
    .sm-icon {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: inline-block;
      height: 1.4rem;
      width: 1.4rem;
      margin-left: .2rem;
      vertical-align: middle;
    }
  }
}
</style>

<script>

/**
 * @param {Array} tittle floor title参数
 * @param {Array} isHide 控制图标显隐 默认是隐藏false
 * @author GuiYun.Fun
 */

export default {
  name: "smPack",
  data() {
    return {};
  },
  props: {
    tittle: {
      default: "",
      type: String
    },
    isHide : {
      default : false,
      type : Boolean
    }
  }
};
</script>


