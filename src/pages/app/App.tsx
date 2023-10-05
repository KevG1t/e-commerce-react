import { Navbar } from '../../components/Navbar.tsx'
import Home from '../Home/Home.tsx'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/404'
import SignIn from '../SignIn/SignIn'
import { useRoutes } from 'react-router-dom'

import { CheckoutSideMenu } from '../../components/CheckoutSideMenu'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:category', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '*', element: <NotFound/> }
  ])

  return routes
}

function App () {
  return (<>
    <AppRoutes />
    <Navbar/>
    <CheckoutSideMenu/>
  </>
  )
}

export default App
