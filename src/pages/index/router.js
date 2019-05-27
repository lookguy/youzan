import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/Test1.vue'

Vue.use(Router)

const NotFound = { template: `<p>404 Not Found</p>` }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/test',
      component: Test1,
      props: {msg : "haha"}
    }
  ]
})
