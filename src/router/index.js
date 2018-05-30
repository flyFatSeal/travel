import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    },{
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    },{
      path: '/detali/:id',
      name: 'Detali',
      component: () => import('@/pages/detali/Detali')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
 }
})
