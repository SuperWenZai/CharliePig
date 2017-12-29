<template>
   <div class="header" :class="{ 'fixlongbg' : isfixlongbg }">
      <div class="header_main">
        <div class="header_main_left">
          <slot name="left">
            <i class="img_logo" v-if="isleftimg"><img src="../../../static/images/left.png"/></i>
            <span class="text" v-if="isleftext">{{ leftetx }}</span>
          </slot>
        </div>
        <div class="header_main_center">
          <slot name="center">
            <span class="text" v-if="incentertext">
              {{ centertext }}
            </span>
          </slot>
        </div>
        <div class="header_main_right">
          <slot name="right">
            <span class="text">
              {{ rightext }}
            </span>
          </slot>
        </div>
      </div>
   </div>
</template>

<script>
  /**
   * header
   * @module components/Header
   * @desc 头部
   *
   * @param {boolean} [isfixlongbg = true] - 头部是否需要适应页面的长背景
   * @param {boolean} [isleftimg = true] - 是否需要头部左边图标/logo
   * @param {boolean} [isleftext = true] - 是否需要头部左边图标旁边显示文字
   * @param {boolean} [incentertext = true] - 是否需要头部中间显示标题
   * @param {string} [leftetx = '返回'] - 头部左边需要显示的文字（需要数据传入）
   * @param {string} [centertext = '标题内容'] - 头部中间需要显示的文字（需要数据传入）
   * @param {string} [rightext  = '刷新'] - 头部右边需要显示的文字（需要数据传入）
   * @param {slot} - 当对组件本身定义的不满意时-可更改
   *
   * @example
   * <m-header :isfixlongbg='false' :isleftimg='false' :isleftext='false' :incentertext='false' :leftetx='0000' :centertext='0000' :rightext='0000'></m-header>
   * 建议注册组件时采用m-xxxxx 形式定义 （xxxx表示组件name）
   */

  export default {
    name: 'header',
    props : {
      leftetx : {
        type : String,
        default : ' 返回'
      },
      centertext : {
        type : String,
        default : '标题内容'
      },
      rightext : {
        type : String,
        default : ' 刷新'
      },
      isleftext : {
        type : Boolean,
        default : true
      },
      isleftimg : {
        type : Boolean,
        default : true
      },
      incentertext : {
        type : Boolean,
        default : true
      },
      isfixlongbg : {
        type : Boolean,
        default : true
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../assets/css/awui.less";
  .header{
    .bmyy;
    background-color: @danger;
    width: 100%;
    min-width: 320px;
    height: 4rem;
    font-size: 1.5rem;
    color: @white;
    .header_main{
      .bsbb;
      .flex;
      max-width: 640px;
      height: 100%;
      margin: 0 auto;
      padding: .5rem 1rem;
      .header_main_left{
        .flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        flex: 2;
        img{
          width: 1.5rem;
          height: 1.5rem;
        }
        span{
          flex: 1;
        }
      }
      .header_main_center{
        .flex;
        .scrollNo;
        justify-content: center;
        align-items: center;
        flex:6;
      }
      .header_main_right{
        .flex;
        .scrollNo;
        justify-content: flex-end;
        align-items: center;
        flex:2;
      }
    }
  }
  .fixlongbg{
    .fix;
    top:0;
    left:0;
    right: 0;
  }
  .text{
    .scrollNo;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .img_logo{
    .dib;
    margin-right: .4rem;
    line-height: 1rem;
  }
</style>
