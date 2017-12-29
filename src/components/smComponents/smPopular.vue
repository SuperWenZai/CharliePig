<!-- 人气推荐 smPopular.vue -->

<template>
  <div class="sm-popular">
    <ul class="contain clearfix">
      <li class="item" v-for="(item,index) in hotgoods" :key="index">
        <router-link to="#" class="clearfix">

          <div class="pic">
            <div>
              <img alt="item.product_name" :src="item.image_default">
            </div>
          </div>

          <div class="info">
            <div class="tag">
              <span v-for="(item,index) in item.tags" :key="index" :style="{ color: item.tag_fgcolor, backgroundColor: item.tag_bgcolor }" v-if="item.tags.length > 0">{{item.tag_name}}</span>
            </div>
            <p class="name">{{item.product_name}}</p>
            <p class="brief">{{item.brief}}</p>
            <p class="price"><span>¥{{item.price}}</span></p>
          </div>

          <!-- <span class="tags" v-if="item.default_image_tag != ''">{{item.default_image_tag}}</span> -->
          
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

/**
 * @param {Array} hotgoods 人气推荐参数
 * @author GuiYun.Fun
 */

export default {
  name: "smPopular",
  data() {
    return {};
  },
  props : {
    hotgoods : {
      default : [],
      type : Array
    }
  }
};
</script>


<style lang="less">
.sm-popular {
  width: 100%;
  overflow: hidden;
  .contain {
    overflow: hidden;
    width: 100%;
    .item {
      display: block;
      box-sizing: border-box;
      padding: 0 0.8rem 0.8rem;
      a {
        display: flex;
        box-sizing: border-box;
        padding: 0.8rem 0.5rem;
        border: 1px solid #ccc;
        position: relative;
        .tags {
          position: absolute;
          top: .2rem;
          left: .4rem;
          width: 1.2rem;
          text-align: center;
          border: 1px solid #cea47d;
          color: #cea47d;
          padding: .2rem 0;
          font-size: .6rem;
        }
        .pic {
          position: relative;
          width: 10rem;
          float: left;
          & > div {
            padding-bottom: 100%;
            position: relative;
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
            }
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          margin-left: 2rem;
          overflow: hidden;
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.8rem;
          }
          .tag {
            display: flex;
            justify-content: flex-start;
            padding-bottom: 0.8rem;
            span {
              display: inline-block;
              background-color: #e2b260;
              color: #fff;
              padding: 0 0.2rem;
              height: 1.2rem;
              line-height: 1.2rem;
              font-size: 1rem;
              margin-right: 0.5rem;
            }
          }
          .name {
            font-size: 1.2rem;
            color: #333333;
          }
          .brief {
            font-size: 1.2rem;
            color: #7f7f7f;
          }
          .price {
            font-size: 1.4rem;
            padding-top: 0.6rem;
            color: #d9232e;
          }
        }
      }
    }
  }
  .clearfix {
    zoom: 1;
  }
}
</style>

