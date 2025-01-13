import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-'></i> Daily Cart </Link>
      <ul className='flex-1 text-right'>
        <li className='list-none inline-block px-5'><input type="text" placeholder='Search products here...'/></li>
        <li className='list-none inline-block px-5'> <Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist<span className='bg-black text-white'>20</span></Link></li>
        <li className='list-none inline-block px-5'> <Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-700'></i>Cart<span className='bg-black text-white'>0</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header