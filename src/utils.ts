import { Product } from './types'

export function totalPrice (products: Product[]) {
  return products.reduce((acc, currentValue) => {
    return acc + currentValue.price
  }, 0).toLocaleString('en-US', {
    currency: 'USD',
    style: 'currency'
  })
}

export const API_URL_PRODUCTS = 'https://fakestoreapi.com/products'

export const categories:{ [key: string]: string } = {
  electronics: 'electronics',
  jewelery: 'jewelery',
  menClothin: "men's clothing",
  womenClothin: "women's clothing"
}
