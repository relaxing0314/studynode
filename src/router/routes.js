import NotFound from '../views/notFound/notFound'
import Flex from '../views/flex/flex'
import VueLearn from '../views/vueLearn/vueLearn'

const routes = [
  {
    path: '/404',
    name: '404',
    component: NotFound,
    hidden: true
  },
  {
    path: '/',
    name: 'Flex',
    component: Flex,
    hidden: false
  },
  {
    path: '/vue',
    name: 'Vue',
    component: VueLearn,
    hidden: false
  },
  {
    path: '*',
    name: 'all',
    redirect: { path: '/404' },
    hidden: true
  }
]
export default routes
