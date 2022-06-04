import AddAddress from '../pages/address/AddAddress'
import ListAddress from '../pages/address/ListAddress'

const allRoutes = [
  {
    title: 'Home Page',
    path: '/',
    component: <ListAddress />
  },
  {
    title: 'Manage Address',
    path: '/manage-address',
    component: <AddAddress />
  }
]

export default allRoutes
