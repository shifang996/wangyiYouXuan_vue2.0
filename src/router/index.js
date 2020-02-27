import Vue from 'vue'
import VueRouter from 'vue-router'
import mainAdmin from '../views/mainAdmin'

//子路由，即分类路由
import mineRouter from './mine/index.js';
import indexRouter from './index/index.js';
import classifyRouter from './classify/index.js';
import shopcarRouter from './shopcar/index.js';
import worthbuyRouter from './worthbuy/index.js';
import detailsRouter from './details';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: mainAdmin,
    // redirect:"/index",
    children: [
      {...mineRouter},
      {...indexRouter},
      {...classifyRouter},
      {...shopcarRouter},
      {...worthbuyRouter},
      {...detailsRouter},
    ]
  },
]




const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router


 // {
 //    path: '/about',
 //    name: 'about',
 //    // route level code-splitting
 //    // this generates a separate chunk (about.[hash].js) for this route
 //    // which is lazy-loaded when the route is visited.
 //    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
 //  }
