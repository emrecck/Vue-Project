import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
//import Cart from '../views/Cart.vue'
=======
import BillView from '../views/BillView.vue'
>>>>>>> 39368673888717d1b0fea344aa090a044866d0e6

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
=======
    name: 'BillView',
    component: BillView
>>>>>>> 39368673888717d1b0fea344aa090a044866d0e6
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
