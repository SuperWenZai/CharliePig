import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from "vue-awesome-swiper"
import '@/assets/css/public_styles.less'
require("swiper/dist/css/swiper.css")
    // import './flex.js' 网络上的rem适配计算
    // import './flex0.js' wap端miniso Ren适配计算

Vue.config.productionTip = false;
Vue.use("VueAwesomeSwiper");

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App },
});