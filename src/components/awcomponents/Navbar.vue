<template>
  <div class="box">
    <div :class="['navbar',{'fixlongbg' : isfixlongbg}]">
      <div class="navbar_main">
        <a class="item" v-for="(item,index) in newitems" @click="selectID = index"><!--$parent.selectID = index-->
          <span :class="['item_main',{'action' : selectID == index}]">
              {{ item.text }}
          </span>
        </a>
      </div>
    </div>
    <div class="box_main" v-for="(main,mainID) in mains" v-if="mainID == selectID">
      <h3>{{ main.cention }}</h3>
    </div>
  </div>
</template>
<script>
  /**
   * box
   * @module components/Navbar
   * @desc 菜单栏
   *
   * @param {boolean} [isfixlongbg = true] - 菜单栏是否需要适应页面的长背景
   * @param {array} [newitems = [
                            {text : '标题one'},{text : '标题twe'},{text : '标题three'},{text : '标题four'}]
                                ] - 传入标题数据内容
   *
   * @example
   * <m-navber :isfixlongbg='false' :newitems='items'></m-navber> ----items 是标题的数据
   * 建议注册组件时采用m-xxxxx 形式定义 （xxxx表示组件name）
   */

  export default {
    name: 'navbar',
    props : {
      isfixlongbg : {
        type : Boolean,
        default : true
      },
      newitems : {
        type : Array,
        default : function () {
          return [
            {text : '标题one'},{text : '标题twe'},{text : '标题three'},{text : '标题four'}
          ]
        }
      }
    },
    data() {
      return {
        selectID : 0,
        mains : [
          {cention : '这是板块one!'},{cention : '这是板块twe!'},{cention : '这是板块three!'},{cention : '这是板块four!'}
        ]
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @import "../../assets/css/awui";
.box{
  .rel;
  .scrollNo;
  .bsbb;
  padding-top: 3rem;
  font-size: 1.5rem;
  height: 100%;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  .navbar{
    .bmyy;
    .scrollNo;
    width: 100%;
    min-width: 320px;
    height: 3rem;
    color: @fontcolor;
    background-color: @white;
    .navbar_main{
      .bsbb;
      .flex;
      .scrollNo;
      max-width: 640px;
      height: 100%;
      margin: 0 auto;
      padding: 0 .5rem;
    }
    .item{
      .flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      width: 25%;
      .item_main{
        .dib;
        padding: 0 .4rem;
        text-align: center;
        line-height: 3rem;
        width: auto;
        height: 100%;
      }
    }
    /*action下划线*/
    .action{
      .rel;
      color: @red;
      &:after{
        position: absolute;
        content: ' ';
        bottom: 0;
        width: 100%;
        height: .2rem;
        left: 0;
        background-color: @red;
      }
    }
    &.fixlongbg{
      .fix;
      top:0;
      left:0;
      right: 0;
    }
  }
  .box_main{
    .scrollNo;
    width:100%;
    height: 100%;
    background-color: @white;
    h3{
      margin: 0 auto;
    }
  }
}



</style>


