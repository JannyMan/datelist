import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chakan from '@/components/chakan/chakan'
import createlist from '@/components/createlist/createlist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chakan',
      name: 'chakan',
      component: chakan
    },
    {
      path: '/createlist',
      name: 'createlist',
      component: createlist
    }
  ]
})
