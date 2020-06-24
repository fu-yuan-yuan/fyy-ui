// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import FyyButton from './components/button.vue'
import './assets/fonts/style.css'

Vue.config.productionTip = false
Vue.component(FyyButton.name, FyyButton)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})