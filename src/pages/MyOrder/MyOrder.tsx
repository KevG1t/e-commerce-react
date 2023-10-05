import { useContext } from 'react'
import { Layout } from '../../components/Layout'
import { OrderCard } from '../../components/OrderCard'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import { LeftArrow } from '../../components/Icons'
import { Order } from '../../types'

const getIndex = (orders: Order[]) => {
  const path = window.location.pathname

  const pathIndex: string | number = path.split('/').splice(-1)[0]

  if (pathIndex === 'last') return orders.length - 1

  return +pathIndex
}

function MyOrder () {
  const { orders } = useContext(ShoppingCartContext)
  const index = getIndex(orders)
  return (
    <Layout>
     <section className='mb-6'>
        <Link className='flex items-center w-80 justify-center gap-4' to={'/my-orders'}>
              <i className='h-6 w-6 text-black cursor-pointer'>
                <LeftArrow />
              </i>
              <h1 className='font-medium text-xl' >My Order</h1>
        </Link>
      </section>
    <ul className='flex flex-col items-center sm:w-[350px] gap-4'>
                {
                   orders?.[index]?.products.map(item => (
                    <OrderCard key={item.id} {...item}/>
                   ))
                }
            </ul>
  </Layout>
  )
}

export default MyOrder
