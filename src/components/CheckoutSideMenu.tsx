import './styles/styles.css'
import { Close, Cart } from './Icons'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { OrderCard } from './OrderCard'
import { totalPrice } from '../utils'
import { Link } from 'react-router-dom'

export function CheckoutSideMenu () {
  const { openCheckout, cartProducts, orders, setOpenCheckout, closeProductDetail, setCartProducts, setOrders } = useContext(ShoppingCartContext)
  const handleOpenCheckout = () => {
    closeProductDetail()
    setOpenCheckout(!openCheckout)
  }
  const handleDelete = (id: number) => {
    // const index = cartProducts.findIndex(p => p.id === id)
    // const newCartProducts = [...cartProducts]
    // newCartProducts.splice(index, 1)
    // setCartProducts(newCartProducts)
    const newCartProducts = cartProducts.filter(p => p.id !== id)
    setCartProducts(newCartProducts)
  }

  const handleCheckout = () => {
    const newOrder = {
      id: crypto.randomUUID(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
      date: new Date().toLocaleDateString()
    }
    setOrders([...orders, newOrder])
    setCartProducts([])
  }

  return (
        <aside
        className={ `${openCheckout ? 'flex' : 'hidden'} sm:w-[350px] side-bar flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <section className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl flex gap-2 items-center'> <Cart/> Cart</h2>
                <i className='cursor-pointer' onClick={handleOpenCheckout }>
                <Close/>
                </i>
            </section>
            <ul className='flex flex-col gap-4 p-4 overflow-y-scroll flex-1 items-center'>
                {
                   cartProducts.map(item => (
                    <OrderCard handleDelete={handleDelete} key={item.id} {...item}/>
                   ))
                }
            </ul>
           {
            cartProducts.length > 0
              ? <div className='w-full h-28 flex flex-col items-center justify-center gap-4 mb-2 px-4'>
            <span className='w-full flex justify-between text-xl text-gray-800'>
              Total:<strong>{totalPrice(cartProducts)}</strong>
            </span>
              <Link className='w-full' to='/my-orders/last'>
              <button onClick={handleCheckout} className='h-10 bg-slate-700 w-full rounded-lg border text-slate-300 border-black'>Checkout</button>
              </Link>
          </div>
              : <span className='mx-auto font-bold text-gray-800 text-xl flex-1'>Empty</span>
           }
        </aside>
  )
}
