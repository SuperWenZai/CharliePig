<!-- 页面头部 smHeader.vue -->

<template>
    <div class="sm-header">
        <div class="sm-headerMain">
            <div class="sm-headerFix">

                <div class="sm-search">

                    <router-link to="/home" class="logo">
                        <img src="../../assets/images/logo.png" alt="名创优选">
                    </router-link>

                    <router-link to="/#" class="search">
                        <i class="searchPic">
                            <img src="../../assets/images/icon-search.png" alt="搜索">
                        </i>
                        <span>名创优品自营</span>
                    </router-link>
                    
                </div>

                <div class="swiperHeader">
                    <sm-swiperheader :headerSwiper="headerSwiper"></sm-swiperheader>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

/**
 * @param {Array} headerSwiper 滚动导航参数
 * @author GuiYun.Fun
 */

import smSwiperheader from '../smComponents/smSwiperheader'
    export default {
        name : 'smHeader',
        data () {
            return {
                
            }
        },
        props : {
            headerSwiper : {
                default : [],
                type : Array
            }
        },
        components: {
            smSwiperheader
        }
    }
</script>


<style lang="less">
.sm-header {
    height: 6rem;
    z-index: 100;
    .sm-headerMain {
        position: fixed;
        top: 0;
        left: 0;
        height: 6rem;
        width: 100%;
        background-color: #ffffff;
        color: #333333;
        border-bottom: 1px solid #d9d9d9;
        z-index: 100;
        .sm-headerFix {
            background-color: #ffffff;
            position: relative;
            .sm-search {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding: .6rem 1rem;
                a {
                    display: inline-block;
                }
                .logo {
                    height: 2.2rem;
                    width: 5.4rem;
                    margin-right: 1rem;
                }
                .search {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 1;
                    height: 2.4rem;
                    background-color: #ededed;
                    border-radius: .2rem;
                    .searchPic {
                        height: 1.4rem;
                        width: 1.4rem;
                        margin-right: .2rem;
                    }
                    span {
                        font-size: 1.2rem;
                        color: #7f7f7f;
                    }
                }
            }
            .swiperHeader{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 2.5rem;
            }
        }
    }
}
</style>

