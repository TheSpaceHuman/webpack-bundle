// JS - ./js/index.js
import './js/'
// CSS
import './css/main.css'
// SCSS
import './scss/main.scss'

// Sprite
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context('./icon', true, /\.svg$/));

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
import Col from 'element-ui/lib/col'
import Row from 'element-ui/lib/row'
Vue.use(Row)
Vue.use(Col)


const app = new Vue({
  el: '#app'
})
