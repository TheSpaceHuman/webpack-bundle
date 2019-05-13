// JS - ./js/index.js
import './js/'
// SCSS
import './scss/main.scss'
// CSS (example)
import './css/main.css'

// Bootstrap grid
// import BootstrapGrid from 'bootstrap/dist/css/bootstrap-grid.css'


window.Vue = require('vue')

// Components
Vue.component('the-header', require('./components/TheHeader.vue').default)
Vue.component('the-footer', require('./components/TheFooter.vue').default)

// Plugins

const app = new Vue({
  el: '#app'
})
