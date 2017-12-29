<template>
  <form>
    <div class="Search nolong">
        <div class="Search_img">
          <div class="img">
            <img src="../../../static/images/search.png"/></div>
        </div>
        <div class="Search_input" @click="xs = true">
          <input placeholder="搜索" v-model="msg" autofocus/>
        </div>
        <div class="Search_close" v-if="xs" @click="closekb">
          <a>取消</a>
        </div>
    </div>
  </form>
</template>

<style lang="less" type="text/less" scoped>
  @import "../../assets/css/awui";
  .Search{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3.5rem;
    margin: 0 auto;
    padding: .5rem 1rem;
    box-sizing: border-box;
    display: flex;
    background-color: @red;
    .Search_img{
      width: 2.6rem;
      height: 2.5rem;
      background-color: @white;
      border-radius: .2rem 0 0 .2rem;
      border: 0 solid transparent;
      box-sizing: border-box;
      padding: .3rem 0 .3rem .6rem;
      .img{
        width: 1.9rem;
        height: 1.9rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .Search_input{
      position: relative;
      flex: 1;
      box-sizing: border-box;
      padding: .25rem 0;
      border-radius: 0 .2rem .2rem 0;
      border: 0 solid transparent;
      background-color: @white;
      input{
        box-sizing: border-box;
        padding-right: 1rem;
        border: 0 solid transparent;
        height: 100%;
        width: 100%;
        outline:none;
        font-size: 1.5rem;
        color: @fontcolor;
      }
    }
    .Search_close{
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding-left: 1rem;
      width: auto;
      height: 100%;
      a{
        color: @white;
        font-size: 1.5rem;
      }
    }
    &.nolong{
      max-width: 640px;
    }
  }
</style>

<script>
    export default {
        name: 'Search',
        data() {
            return {
              xs : false,
              msg : null
            }
        },
      methods : {
        closekb(){
          this.msg = '';
          this.xs = false;
        }
      }
    }
</script>
