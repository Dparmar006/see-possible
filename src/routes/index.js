import AddAddress from '../pages/address/AddAddress'
import ListAddress from '../pages/address/ListAddress'
import Login from '../pages/authentication/Login'
import PageNotFound from '../pages/authentication/PageNotFound'

const allRoutes = [
  {
    title: 'Home Page',
    path: '/',
    component: <ListAddress />
  },
  {
    title: 'Manage Address',
    path: '/manage-address/',
    component: <AddAddress />
  },
  {
    title: 'Manage Address',
    path: '/manage-address/:id',
    component: <AddAddress />
  },
  {
    title: 'Signup',
    path: '/signup',
    component: <AddAddress />
  },
  {
    title: 'SignIn',
    path: '/signin',
    component: <Login />
  },
  {
    title: 'Page not found',
    path: '/page-not-found',
    component: <PageNotFound />
  }
]

export default allRoutes
