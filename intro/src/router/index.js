import Vue from 'vue'
import VueRouter from 'vue-router'
import BillView from '../views/BillView.vue'

Vue.use(VueRouter)

const routes = [{
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
    component: () => import( /* webpackChunkName: "about" */ '../views/CartView.vue')
  },
  {
    path: '/signinview',
    name: 'SignInView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/SignInView.vue')
  },
  {
    path: '/signupview',
    name: 'SignUpView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/sliderview',
    name: 'SliderView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/SliderView.vue')
  },
  {
    path: '/headerview',
    name: 'HeaderView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/HeaderView.vue')
  },
  {
    path: '/productsView',
    name: 'ProductsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/menuview',
    name: 'MenuView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/MenuView.vue')
  },
  {
    path: '/productview',
    name: 'ProductView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/navbarview',
    name: 'NavbarView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/NavbarView.vue')
  },
  {
    path: '/hooperslideview',
    name: 'HooperSlideView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/HooperSlideView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router