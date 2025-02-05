import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-'></i> Daily Cart </Link>
      <ul className='flex-1 text-right'>
        {
          insideHome&&
          <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='p-1 rounded text-black' type="text" placeholder='Search products here...'/></li>
        }
        <li className='list-none inline-block px-5'> <Link to={'/wishlist'}><i className='fa-solid fa-heart text-red-600 p-1'></i>Wishlist<span className='bg-black text-white px-1 ml-1 rounded'>{userWishlist?.length}</span></Link></li>
        <li className='list-none inline-block px-5'> <Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-700 p-1'></i>Cart<span className='bg-black text-white px-1 ml-1 rounded'>{userCart?.length}</span></Link></li>
      </ul>
    </nav>
  )
}

export default Header