import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Cart = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
        <>
          <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <div className='col-span-2 border rounded p-5 shadow'>
              <table className='table-auto w-full'>
                <thead>
                    <tr>
                      <td className='font-semibold'>#</td>
                      <td className='font-semibold'>Name</td>
                      <td className='font-semibold'>Image</td>
                      <td className='font-semibold'>Quantity</td>
                      <td className='font-semibold'>Price</td>
                      <td className='font-semibold'>...</td>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Product Name</td>
                    <td><img style={{width:'70px', height:'70px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7o94CQVxy3SWj7Mygbij-o8JZCvZmgChyw&s" alt="" /></td>
                    <td>
                      <div className='flex'>
                        <button className='font-bold'>-</button>
                        <input type="text" style={{width:'40px'}} className='border p-1 rounded mx-2' value={12} readOnly/>
                        <button className='font-bold'>+</button>
                      </div>
                    </td>
                    <td><button><i className='fa-solid fa-trash'></i></button></td>
                  </tr>
                </tbody>
              </table>

              <div className='flex-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white'> Empty Cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded text-white p-2'>Shop more...</Link>
              </div>

            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Cart