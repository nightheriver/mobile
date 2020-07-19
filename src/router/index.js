import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
const  About = ()=> import('@views/About.vue')
const  Login = ()=> import('@views/login/Login.vue')
const  ProductInfo = ()=> import('@views/productInfo/ProductInfo.vue')
const  User = ()=> import('@views/user/User.vue')
const  Cart = ()=> import('@views/cart/Cart.vue')
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/productInfo',
    name: 'ProductInfo',
    component:ProductInfo
  },
  {
    path: '/productInfo',
    name: 'ProductInfo',
    component:ProductInfo
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart,
    meta:{
      needlogin:true
    }
  },
  {
    path: '/user',
    name: 'User',
    component:User
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.meta.needlogin){
    if(to.path === '/login'&&sessionStorage.getItem('token')){
      next(from.path)
    }
    //  if(!sessionStorage.getItem('token')) {
    //   console.log(111);
    //   next('/login')
    //  }
    
  }
  next()
})

export default router
