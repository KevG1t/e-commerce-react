import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'
import { Cart, Bars } from './Icons'

export function Navbar () {
  const { cartProducts, setOpenCheckout, openCheckout } = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'
  return (
        <nav className='flex justify-between items-center fixed z-10 px-8 text-sm font-light top-0 w-full h-[68px] bg-white'>
             <div className='font-semibold  text-lg mr-4'>
                    <NavLink to={'/'}
                    >
                        Shopi
                    </NavLink>
                </div>
            <input type="checkbox" id='check' hidden/>
           <section className='menu z-10 p-6 lg:p-0 top-full h-screen lg:h-auto right-[-100%] w-full sm:w-[350px] lg:w-full flex flex-col lg:flex-row items-center lg:justify-between absolute lg:static bg-white border border-black lg:border-none rounded-lg lg:rounded-none transition-all duration-300 lg:transition-none'>

            <ul className='flex flex-col my-8 lg:my-0 gap-8 lg:gap-6 items-center lg:flex-row text-xl lg:text-sm font-medium uppercase lg:normal-case lg:font-thin'>
                <li>
                    <NavLink to={'/'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                       All
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/jewelery'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/electronics'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/menClothing'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        Men's clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/womenClothin'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        Women's clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex flex-col gap-8 lg:gap-6 items-center lg:flex-row text-xl lg:text-sm font-medium uppercase lg:normal-case lg:font-thin'>

                <li className='text-black/60 order-4 lg:order-none'>
                   user@example.com
                </li>
                <li>
                    <NavLink to={'/my-orders'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/my-account'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/sign-in'}
                    className = {({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign in
                    </NavLink>
                </li>
            </ul>
           </section>
           <section className='flex gap-6'>
           <div onClick={() => setOpenCheckout(!openCheckout)} className='flex justify-center items-center gap-2 ml-6'>
                    <Cart/>
                    <strong className='border border-black rounded-full h-5 w-5 flex justify-center items-center'>
                    {cartProducts.length}
                    </strong>
                </div>
            <label htmlFor='check' className='lg:hidden cursor-pointer'>
                <Bars/>
            </label>
           </section>

        </nav>
  )
}
