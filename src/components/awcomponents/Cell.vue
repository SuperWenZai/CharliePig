<template>
    <div class="cell">
      <a class="cell_main bottomyy" v-for="(item,index) in newitems" @click="$parent.selectID = index">
        <div class="cell_main_left">
          <div class="cell_img" v-if="iscellimgleft"><img src="../../../static/images/left_img.jpg"/></div>
          <div class="cell_text">
            <p class="cell_text_top cell_text_tb">{{ item.toptittle }}</p>
            <p class="cell_text_bottom cell_text_tb" v-if="iscellbottom">{{ item.bottomtittle }}</p>
          </div>
        </div>
        <div class="cell_main_right">
          <p class="cell_text_tb cell_main_right_center" v-if="iscellright">
            {{ item.righttittle }}
          </p>
          <div class="cell_main_right_logo" v-if="iscellrightlogo"></div>
        </div>
      </a>
    </div>
</template>

<script>
  /**
   * cell
   * @module components/Cell
   * @desc 列表
   *
   * @param {boolean} [iscellimgleft = false] - 是否显示左边的图标
   * @param {boolean} [iscellbottom = false] - 是否显示标题下面的文字
   * @param {boolean} [iscellright = false] - 是否显示右边的图标
   * @param {boolean} [iscellrightlogo = false] - 是否显示右边的图标
   * @param {array} [newitems =  [
                                    {toptittle : '标题内容one'},
                                    {toptittle : '标题内容twe'},
                                    {toptittle : '标题内容three'},
                                  ]
   * ] - 传入cell的数据
   *
   * @example
   * <m-cell :iscellimgleft='true' :iscellbottom='true' :iscellright='true' :iscellrightlogo='true' :newitems='items'></m-cell>
   * 建议注册组件时采用m-xxxxx 形式定义 （xxxx表示组件name）
   */

    export default {
        name: 'cell',
        props : {
          iscellimgleft : {
            type : Boolean,
            default : false
          },
          iscellbottom : {
            type : Boolean,
            default : false
          },
          iscellright : {
            type : Boolean,
            default : false
          },
          iscellrightlogo : {
            type : Boolean,
            default : true
          },
          newitems : {
            type :Array,
            default : function () {
              return [
                {toptittle : '标题内容one'},
                {toptittle : '标题内容twe'},
                {toptittle : '标题内容three'},
              ]
            }
          }
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../assets/css/awui.less";
  .cell{
    .bottomyy;
    .scrollNo;
    height: 100%;
    width: 100%;
    background-color: @white;
    color: @fontcolor;
    font-size: 1.5rem;
    .cell_main{
      .rel;
      .flex;
      .bsbb;
      align-items: center;
      padding: .3rem .5rem;
      height: 4rem;
      width: 100%;
      background-color: @white;
      .cell_main_left{
        .flex;
        align-items: center;
        justify-content: flex-start;
        width: 65%;
        height: 100%;
        .cell_img{
          .flex;
          justify-content: center;
          align-items: center;
          width: 2.5rem;
          height: 2.5rem;
          margin-right: .5rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .cell_text{
          .flex;
          .scrollNo;
          flex: 5;
          flex-wrap: wrap;
          .cell_text_top{
            font-size: 1.5rem;
            width: 100%;
          }
          .cell_text_bottom{
            font-size: 1rem;
            color: @gray-9;
            width: 100%;
          }
        }
      }
      .cell_main_right{
        .flex;
        align-items: center;
        justify-content: flex-end;
        width: 35%;
        height: 100%;
        .cell_main_right_center{
          text-align: right;
          flex: 5;
        }
        .cell_main_right_logo{
          .rel;
          margin-left: 1rem;
          height: 100%;
          &:after{
            border: .15rem solid @gray-9;
            border-bottom-width: 0;
            border-left-width: 0;
            content: " ";
            top: 50%;
            right: .2rem;
            position: absolute;
            width: .5rem;
            height: .5rem;
            -webkit-transform: translateY(-50%) rotate(45deg);
            transform: translateY(-50%) rotate(45deg);
          }
        }
      }
      .cell_text_tb{
        .scrollNo;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
</style>
