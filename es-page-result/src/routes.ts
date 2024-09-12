import home from './views/home.vue'
import list from './views/list.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./views/error.vue')
  }
]

export default routes
