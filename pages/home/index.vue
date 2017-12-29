<!-- 首页 index.vue -->

<template lang="html">
    <div class="sm-contain sm-contain-index">
        <div class="sm-mainItem">

            <!--头部 开始-->
            <div class="smHeader">
                <sm-header :headerSwiper="headerSwiper"></sm-header>
            </div>
            <!--头部 结束-->
            
            <!--内容 开始-->
            <div class="sm-content">
                
                <router-view></router-view>

            </div>
            <!--内容 结束-->

            <!--底部 开始-->
            <div class="smFooter">
                <sm-footer :footerItem="footerItem"></sm-footer>
            </div>
            <!--底部 结束-->

        </div>
    </div>
</template>

<style lang="less" src="./index.less"></style>
<script type="text/javascript" src="./index.js"></script>
