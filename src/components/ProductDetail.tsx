import './styles/styles.css'
import { Close } from './Icons'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

export function ProductDetail () {
  const { openDetail, productDetails, closeProductDetail } = useContext(ShoppingCartContext)

  return (
        <aside
        className={`${openDetail ? 'flex' : 'hidden'} side-bar sm:w-[350px] flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <section className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <i className='cursor-pointer' onClick={closeProductDetail}>
                <Close/>
                </i>
            </section>
            <figure className='p-10 flex flex-col gap-4'>
              <img className='w-full h-60 object-contain' src={productDetails?.image} alt={productDetails?.title} />
              <p className="flex justify-between gap-4">
                <span className="text-sm font-light">{productDetails?.title}</span>
                <span className="text-lg font-medium">{productDetails?.price?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}</span>
            </p>
            <span className='text-xs text-ellipsis font-medium'>{productDetails?.description}</span>
            </figure>
        </aside>
  )
}
