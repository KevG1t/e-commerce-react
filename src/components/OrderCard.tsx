import { Product } from '../types'
import { Close } from './Icons'

interface Props extends Product {
  handleDelete?: (id: number) => void
}

export function OrderCard ({ handleDelete, ...item }: Props) {
  return (
       <article className='flex relative justify-between items-center border border-black rounded-lg p-4 w-4/5 gap-3'>
        <section className='flex items-center gap-2'>
            <figure className='w-auto h-full'>
                <img className='w-full h-full rounded-lg object-contain' src={item.image} alt={item.title} />
            </figure>
            <p className=' text-xs font-light w-auto'>{item.title}</p>
        </section>
        <section className='flex items-center gap-2'>
            <p className='text-md font-medium'>{item.price.toLocaleString('en-US', {
              currency: 'USD',
              style: 'currency'
            })}</p>
          {handleDelete && <div onClick={() => handleDelete(item.id)} className='h-6 w-6 text-black cursor-pointer absolute top-0 -right-0 m-2'>
           <Close />
           </div>}
        </section>
       </article>
  )
}
