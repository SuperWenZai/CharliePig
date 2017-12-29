<!-- 商品列表 smList.vue -->

<template>
  <div class="smList">
      <div class="item" v-for="(item,index) in guessUlike" :key="index">
        <router-link to="#" class="sm-product">
            
          <div class="sm-product-item">

            <div class="pic">
              <img :src="item.image_default" alt="">
            </div>

            <div class="info">
              <p class="desc">{{item.brief}}</p>

              <div class="tag">
                <span v-for="(item,index) in item.tags" :key="index" :style="{ color: item.tag_fgcolor, backgroundColor: item.tag_bgcolor }" v-if="item.tags.length > 0">{{item.tag_name}}</span>
              </div>

              <p class="name">{{item.product_name}}</p>
              
              <p class="price">
                <span>¥{{item.price}}</span>
              </p>

            </div>

          </div>

        </router-link>
      </div>
      
  </div>
</template>

<script>

/**
 * @param {Array} guessUlike 商品列表参数
 * @author GuiYun.Fun
 */

  export default {
    name: "smList",
    data() {
      return {};
    },
    props : {
      guessUlike : {
        default : [],
        type : Array
      }
    }
  };
</script>

<style lang="less">
  .smList {
    overflow: hidden;
    width: 100%;
    .item {
      box-sizing: border-box;
      display: inline-block;
      width: 47%;
      margin-bottom: 4%;
      .sm-product {
        position: relative;
        display: block;
        .sm-product-item {
          .pic {
            position: relative;
            padding-bottom: 100%;
            background: #f4f4f4;
            vertical-align: middle;
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              vertical-align: middle;
            }
          }
          .info {
            overflow: hidden;
            width: 100%;
            .desc {
              background: #eaeaea;
              color: #7f7f7f;
              font-size: 1rem;
              padding: 0.6rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
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
                margin-right: 0.4rem;
              }
            }
            p {
              line-height: 1.8rem;
            }
            .name {
              font-size: 1.2rem;
              color: #333333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin-top: 0.2rem;
            }
            .price {
              font-size: 1.4rem;
              color: #d9232e;
              span {
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }
    .item:nth-child(even) {
      float: right;
      margin-left: 1%;
      margin-right: 2%;
    }
    .item:nth-child(odd) {
      float: left;
      margin-right: 1%;
      margin-left: 2%;
    }
  }
</style>

