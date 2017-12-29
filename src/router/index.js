import Vue from 'vue'
import Router from 'vue-router'
import home from '../../pages/home/index.vue'
import Error from '../../src/components/smError/Error.vue'
import recommend from '../../pages/recommend/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      alias: '/',
      redirect: '/home/recommend',
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: recommend
        }
      ]
    }, {
      path: '*',
      name: Error,
      component: Error
    }
  ]
})
