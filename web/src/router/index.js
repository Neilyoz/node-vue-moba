import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {path: '', name: 'main', component: Home}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
