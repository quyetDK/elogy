import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import error from '../page/error'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/error',
      name: 'error',
      component: error
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children : [

      ]
    }
  ]
})
