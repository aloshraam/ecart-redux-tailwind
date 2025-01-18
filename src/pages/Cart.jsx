import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {decrementQuantity, incrementQuantity, removeCartItem, emptyCart} from '../redux/slices/cartSlice'


const Cart = () => {
  const navigate = useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])

  const handleCheckout = () => {
    dispatch(emptyCart())
    alert("Order Comformed, Thank You for Purchasing.....")
    //redirect to Home
    navigate('/')
  }


  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='px-5'>
        {
          userCart?.length ?
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
                    {
                      userCart?.map((product,index)=>(
                        <tr>
                          <td>{index+1}</td>
                          <td>{product?.title}</td>
                          <td><img style={{width:'70px', height:'70px'}} src={product?.thumbnail} alt="" /></td>
                          <td>
                            <div className='flex'>
                              <button onClick={()=>dispatch(decrementQuantity(product?.id))} className='font-bold'>-</button>
                              <input type="text" style={{width:'40px'}} className='border p-1 rounded mx-2' value={product?.quantity} readOnly/>
                              <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                            </div>
                          </td>
                          <td>{product.totalPrice}</td>
                          <td><button onClick={()=>dispatch(removeCartItem(product?.id))}><i className='fa-solid fa-trash'></i></button></td>
                        </tr>
                      )) 
                    }
                  </tbody>
                </table>

                <div className='mt-5 flex justify-end'>
                  <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'> Empty Cart</button>
                  <Link to={'/'} className='bg-blue-600 ms-3 rounded text-white p-2'>Shop more...</Link>
                </div>

              </div>
              <div className='col-span-1 border rounded p-5 shadow'>
                  <div className='bordee rounded p-5'>
                    <h2 className='text-2xl font-bold my-4'>Total Amount: <span className='text-red-600' >${cartTotal}</span></h2>
                    <hr />
                  </div>
                  <button onClick={handleCheckout} className='bg-green-600 p-2 text-white w-full mt-4'> Check Out</button>
              </div>
            </div>
            </>
          :
            <div className='text-purple-600 flex flex-col justify-center items-center'>
              <img className='w-100 h-80' src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
              <h3 className='text-2xl font-bold' >No Items Added to Cart Yet!!!</h3>
            </div>
        }
      </div>
    </>
  )
}

export default Cart