import { Layout } from '../../components/Layout'
import { OrdersCard } from '../../components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

function MyOrders () {
  const { orders } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <section className='flex items-center justify-center relative mb-4'>
              <h1 className='font-medium text-xl'>My Orders</h1>
      </section>
      <ul className='flex flex-col items-center gap-4 w-full px-6'>
      {
      orders.map((order, index) => (
        <Link className='sm:w-80 w-full' key={index} to={`/my-orders/${index}`}>
          <OrdersCard {...order}/>
        </Link>
      ))
     }
      </ul>
  </Layout>
  )
}

export default MyOrders
