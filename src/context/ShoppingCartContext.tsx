import { createContext, useEffect, useState } from 'react'
import { Product, CartState, Order, Category } from '../types'
import { useFilters } from '../hooks/useFilters'

export const ShoppingCartContext = createContext<CartState>({} as CartState)

interface ProviderProps {
  children: JSX.Element | JSX.Element[]
}

const saveOders = (orders: Order[]) => {
  window.localStorage.setItem('e-commercer-orders', JSON.stringify(orders))
}

const loadOrdersFromStorage = () => {
  const storedOrders = localStorage.getItem('e-commercer-orders')
  return storedOrders ? JSON.parse(storedOrders) : []
}

const saveCart = (cart: Product[]) => {
  window.localStorage.setItem('e-commercer-cart', JSON.stringify(cart))
}

const loadCartProductsFromStorage = () => {
  const storedOrders = localStorage.getItem('e-commercer-cart')
  return storedOrders ? JSON.parse(storedOrders) : []
}

export const ShoppingCartProvider = ({ children }: ProviderProps) => {
  // filters
  const [category, setCategory] = useState<Category>(null)
  const [search, setSearch] = useState('')
  // products
  const { filteredProducts, error, loading } = useFilters({ category, search })

  // product detail open/close
  const [openDetail, setOpenDetail] = useState(false)
  const [openCheckout, setOpenCheckout] = useState(false)
  const openProductDetail = () => setOpenDetail(true)
  const closeProductDetail = () => setOpenDetail(false)
  // product detail
  const [productDetails, setProductDetails] = useState<Product | null>(null)
  // cart products
  const [cartProducts, setCartProducts] = useState<Product[]>(loadCartProductsFromStorage())
  // Order products
  const [orders, setOrders] = useState<Order[]>(loadOrdersFromStorage())

  useEffect(() => {
    saveOders(orders)
    saveCart(cartProducts)
  }, [orders, cartProducts])

  return (
    <ShoppingCartContext.Provider value={
     {
       error,
       loading,
       filteredProducts,
       openDetail,
       productDetails,
       cartProducts,
       openCheckout,
       orders,
       search,
       setCategory,
       setSearch,
       setOrders,
       setOpenCheckout,
       setCartProducts,
       openProductDetail,
       closeProductDetail,
       setProductDetails
     }
    }>
        { children }
    </ShoppingCartContext.Provider>
  )
}
