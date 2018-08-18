import Vue from 'vue'
import Router from 'vue-router'
import TT from '@/components/TT'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TT.vue',
      component: TT
    }
    
  ]
})
