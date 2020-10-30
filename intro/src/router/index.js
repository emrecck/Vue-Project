import Vue from 'vue'
import VueRouter from 'vue-router'
import BillView from '../views/BillView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BillView',
    component: BillView
  },
   {
     path: '/cartview',
    name: 'CartView',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
   }
  ]

const router = new VueRouter({
  routes
})

export default router
