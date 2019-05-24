// JS - ./js/index.js
import './js/'
// SCSS
import './scss/main.scss'
// CSS (example)
import './css/main.css'

// import 'vue'
// import Vue from 'vue'
// import store from './store'
window.Vue = require('vue')

// Components
Vue.component('Carousel', require('./components/vue-carousel/Carousel.vue').default)
Vue.component('Slide', require('./components/vue-carousel/Slide.vue').default)
Vue.component('SweetModal', require('./components/sweet-modal-vue/components/SweetModal.vue').default)

// Plugins
// element-ui
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
locale.use(lang)
import Col from 'element-ui/packages/col/index.js';
import Row from 'element-ui/packages/row/index.js';
Vue.use(Row)
Vue.use(Col)
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/col.css'

const app = new Vue({
  el: '#app'
})
