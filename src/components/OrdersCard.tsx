import { Order } from '../types'
import { RightArrow } from './Icons'

export function OrdersCard ({ ...order }: Order) {
  return (
     <section className='flex justify-between items-center mb-3 border border-black p-4 rounded-lg'>
        <article className='flex w-full justify-between items-center'>
            <section className='flex flex-col'>
               <span className='font-light'>{order.date}</span>
               <span className='font-light'>{order.totalProducts} articles</span>
            </section>
            <span className='font-medium text-2xl'>{order.totalPrice}</span>
            <RightArrow />
        </article>
     </section>
  )
}
