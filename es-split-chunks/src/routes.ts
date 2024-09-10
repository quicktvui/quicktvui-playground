import home from './views/home'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./views/error')
  }
]

export default routes