import Vue from 'vue'
import Abouts from './About.vue'

Vue.config.productionTip = false
let msg = {data:"sdfwefas"}

new Vue({
  data: msg,
  render: h => h(Abouts)
}).$mount('#app')