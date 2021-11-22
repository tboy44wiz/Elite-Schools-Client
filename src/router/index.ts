import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home_Page.vue'
import SchoolList_Page from "@/views/SchoolList_Page.vue";
import SchoolDetails_Page from "@/views/SchoolDetails_Page.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home_Page',
    component: Home
  },
  {
    path: '/about',
    name: 'About_Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About_Page.vue')
  },
  {
    path: '/school_list',
    name: 'SchoolList_Comp',
    component: SchoolList_Page
  },
  {
    path: '/school_details',
    name: 'SchoolDetails_Page',
    component: SchoolDetails_Page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
