import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

import Category from '../views/Category.vue'
import Pin from '../views/Pin.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User.vue'
import Product from '../views/product.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:
   [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/pin',
    name: 'pin',
    component: Pin
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/login/',
    name: 'login',
    component: login
  },

]


})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {

	// 匹配 /user下面所有的路径 
	if(/^\/user/.test(to.path)) {
		
		// 判断登录状态，未登录直接进入登录页面
		if(store.state.login) {
			next();
		} else {
			next('/login');
		}
	}

	// 要去哪里？
	console.log(to);
	// 从哪里来？
	console.log(from);
	next();
	//		 next(false);
});

export default router