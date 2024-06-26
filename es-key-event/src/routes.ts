import home from './views/home'
import setup from './views/setup'
import error from './views/error'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/setup',
    name: 'setup',
    component: setup
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]

export default routes
