import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:"100px"}} className='px-5'>
        <>
          <h1 className='text-red-600 text-4xl font-bold'>WishList</h1>

          <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border shadow p-2'>
              <img style={{height:'200px', width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7o94CQVxy3SWj7Mygbij-o8JZCvZmgChyw&s" alt="" />
              <div className='text-center'>
                <h3 className='text-xl font-bold'>Title</h3>
                <div className='flex justify-evenly mt-3'>
                    <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                    <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-700'></i></button>
                </div>  
              </div>
            </div>
          </div>

        </>
      </div>
    </>
  )
}

export default Wishlist