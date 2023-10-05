import { Category } from '../types'
import { API_URL_PRODUCTS } from '../utils'
import { useFetch } from './useFetch'

interface Props {
    category: Category
    search: string
}

export const useFilters = ({ category, search }: Props) => {
  const { items, loading, error } = useFetch({ url: API_URL_PRODUCTS })
  const filteredProducts = items.filter(producto => {
    if (category && search) {
      return producto.category === category && producto.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    } else if (category) {
      return producto.category === category
    } else if (search) {
      return producto.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }
    return true // Si no se proporcionan criterios de filtro, se incluyen todos los productos.
  })
  return { filteredProducts, loading, error }
}
