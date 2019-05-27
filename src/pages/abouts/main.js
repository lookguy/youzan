import Vue from 'vue'
import Abouts from './About.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Abouts)
}).$mount('#app')