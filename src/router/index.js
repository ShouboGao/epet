import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home/home.vue'
import classify from '../pages/classify/classify.vue'
import sort from '../pages/classify/sort.vue'
import brand from '../pages/classify/brand.vue'
import myepet from '../pages/myepet/myepet.vue'
import shopcart from '../pages/shopcart/shopcart.vue'
import cloth from '../pages/home/cloth/cloth.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: '/home/cloth',
          component: cloth
        }
      ]
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {path: '/classify/sort', component: sort},
        {path: '/classify/brand', component: brand},
        {path: '/classify', redirect: '/classify/sort'},
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/myepet',
      component: myepet
    }
  ]
})
