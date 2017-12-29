<!-- 品牌甄选 smPackContain.vue -->

<template>
    <div class="sm-pack-contain">

          <router-link to="#" class="item" v-for="(item,index) in brand" :key="index">
            <div class="dec">
                <p class="comname">{{item.name}}</p>
                <p class="pric"><span>{{item.min_price}}</span>元起</p>
                <span class="tab">{{item.tag}}</span>
            </div>
            
            <div class="pic">
              <img :src="item.link" alt="">
            </div>
          </router-link>
    
        </div>
</template>

<style lang="less">
        .sm-pack-contain {
            box-sizing: border-box;
            padding: 0 .6rem .4rem .6rem;
            .item {
                position: relative;
                display: inline-block;
                padding-bottom: 9.4rem;
                width: 49%;
                vertical-align: middle;
                overflow: hidden;
                background-color:#f4f4f4;
                .pic {
                    position: absolute;
                    top: 0;
                    left: 0;
                    img {
                        width: 100%;
                        vertical-align: middle;
                    }
                }
                .dec {
                    position: absolute;
                    top: 0;
                    left: 0;
                    box-sizing: border-box;
                    padding: 1.2rem .8rem;
                    z-index: 2;
                    p {
                        color: #333333;
                        font-size: 1rem;
                        width: 10rem;
                        height: 1.6rem;
                        line-height: 1.6rem;
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        span {
                            color: #333333;
                            font-size: 1.4rem;
                        }
                    }
                    .tab {
                        margin-top: .4rem;
                        height: 1.4rem;
                        font-size: .23333rem;
                        line-height: 1.2rem;
                        display: inline-block;
                        padding: 0 .2rem;
                        box-sizing: border-box;
                        border: 1px solid #cea47d;
                        color: #cea47d;
                    }
                }
            }
            .item:nth-child(even) {
                margin-bottom: 1%;
            }
            .item:nth-child(odd) {
                margin-right: 1%;
                margin-bottom: 1%;
            }
        }
</style>

<script>

/**
 * @param {Array} brand 品牌甄选参数
 * @author GuiYun.Fun
 */

export default {
  name : "smPackContain",
  data(){
      return{}
  },
  props : {
      brand : {
          default : [],
          type : Array
      }
  }
}
</script>

