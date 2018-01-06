import Vue from 'vue'
import App from './App.vue'
import VueScroller from 'vue-scroller'
import router from './router'
import store from "./store"
import './mock/mockServer'
import svgImage from './components/svg/svg_image.vue'
Vue.use(VueScroller)
Vue.component('svgImage', svgImage)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
