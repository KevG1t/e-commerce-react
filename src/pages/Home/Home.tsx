import { Card } from '../../components/Card'
import { Layout } from '../../components/Layout'
import { ProductDetail } from '../../components/ProductDetail'
import { useContext, useEffect } from 'react'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { useParams } from 'react-router-dom'
import { categories } from '../../utils'
// types
function Home () {
  const { filteredProducts: items, error, loading, setSearch, search, setCategory } = useContext(ShoppingCartContext)
  const { category } = useParams()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setSearch('')
  }, [category])

  useEffect(() => {
    if (category !== undefined) {
      setCategory(categories[category])
    } else {
      setCategory(null)
    }
  }, [category])

  return (
      <Layout>
          <h1 className='font-medium text-xl mb-6'>Products</h1>
          <input value={search} onChange={(e) => handleChange(e)} className='mb-6 border border-gray-800 text-sky-700 placeholder-sky-200 w-3/5 max-w-md p-3 rounded-lg font-bold focus:outline-none'
           type="text" placeholder='Search product'/>
          {loading && <strong>Loading...</strong>}
          {!loading && error && <strong>Something went wrong!</strong>}
          {!loading && !error && items.length === 0 && <strong>No products found!</strong>}
          <ul className='gap-10 w-4/5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]'>
          {
            !loading && !error && items.length > 0 &&
              items.map(item => (
             <li className='grid place-items-center' key={item.id}>
                 <Card
                {...item}
              />
             </li>
              ))
          }
          </ul>
          <ProductDetail />
      </Layout>
  )
}

export default Home
