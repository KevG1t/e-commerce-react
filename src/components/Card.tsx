import { type Product } from '../types'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Plus, Check } from './Icons'

export function Card (item: Product) {
  const { cartProducts, openProductDetail, closeProductDetail, setCartProducts, setOpenCheckout, setProductDetails } = useContext(ShoppingCartContext)

  const RenderIcon = () => {
    const isProductInCart = cartProducts.find(p => p.id === item.id)

    return isProductInCart
      ? <div className='absolute top-0 right-0 flex justify-center items-center bg-green-400 w-6 h-6 rounded-full m-2 p-1'><Check/></div>
      : <div onClick={(e) => handleAddToCart(e)} className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'><Plus/></div>
  }

  const handleAddToCart = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    const isProductInCart = cartProducts.find(p => p.id === item.id)
    if (isProductInCart) return

    setCartProducts([
      ...cartProducts,
      item
    ])
    closeProductDetail()
    setOpenCheckout(true)
  }

  const showProduct = () => {
    setProductDetails(item)
    setOpenCheckout(false)
    openProductDetail()
  }

  return (
      <div onClick={showProduct} className="bg-white cursor-pointer w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={item.image} alt={item.title} />
                <RenderIcon />
            </figure>
            <p className="flex justify-between gap-4">
                <span className="text-sm font-light">{item.title}</span>
                <span className="text-lg font-medium">{item.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}</span>
            </p>
        </div>
  )
}
