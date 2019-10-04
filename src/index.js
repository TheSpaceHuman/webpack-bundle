// JS
import './js/index'
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
import { Slide as MobileMenu } from 'vue-burger-menu'
import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel)
Vue.component('MobileMenu', MobileMenu)
Vue.component('TheModal', require('./components/TheModal.vue').default)
Vue.component('TheInput', require('./components/TheInput.vue').default)
Vue.component('TheInputNumber', require('./components/TheInputNumber.vue').default)
Vue.component('TheSelect', require('./components/TheSelect.vue').default)



// Plugins
// VueTheMask
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
// VueScrollTo
import vueScrollTo from 'vue-scroll-to';
Vue.use(vueScrollTo);
// VueLazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {lazyComponent: true})
// element-ui
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
locale.use(lang)

import Input from 'element-ui/lib/input'
import InputNumber from 'element-ui/lib/input-number'
import Select from 'element-ui/lib/select'
import Option from 'element-ui/lib/option'
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)


const app = new Vue({
  el: '#app',
})
