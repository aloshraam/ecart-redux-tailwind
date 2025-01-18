import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const View = () => {

  const userCart = useSelector(state=>state.cartReducer) // for cart value data access

  const dispatch = useDispatch() //for adding to wishlist
  const userWishlist = useSelector(state => state.wishlistReducer)

  const [product,setProduct] = useState({})

  console.log("product herer",product);

  const {id} = useParams()
  console.log(id);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts.find(item=>item.id == id))
      setProduct(allProducts.find(item=>item.id == id))
    }
  },[])

  const handleWishlist = () =>{
    const existingProduct = userWishlist?.find(item=>item.id == id)
    if(existingProduct){
      alert("Product already Exist in Wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
      alert("Product added to Wishlist")
    }
  }

  const handleCart = () =>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id == id)
    if(existingProduct){
      alert("Product Quantity Incremented!!!")
    }else{
      dispatch(addToWishlist(product))
      alert("Product added to Cart")
    }
  }

  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <div>
            <img style={{width:'550px', height:'350px', objectFit:'cover', padding:'20px'}} src={product.thumbnail} alt="" />
            <div className='flex justify-left gap-5 mt-5'>
                <button onClick={handleWishlist} className='bg-blue-600 text-white rounded p-2'>Add to wishlist</button>
                <button onClick={handleCart} className='bg-green-700 text-white rounded p-2'>Add to Cart</button>
            </div>
          </div>

            <div>
                <h3 className='font-bold'>PID : {product.id}</h3>
                <h1 className='font-bold text-5xl'>{product.title}</h1>
                <h4 className='font-bold text-red-600 text-2xl'>${product.price}</h4>
                <h4>Brand : {product.brand}</h4>
                <h4>Category : {product.category}</h4>
                <p>
                    <span className='font-bold'>{product.description}</span>
                </p>

                <div>
                  <h3 className='text-bold mt-4'>Client Reviews</h3>
                    
                    {
                      product?.reviews?.length?
                      product?.reviews?.map((item,index)=>(
                        <div key={index} className='shadow border rounded p-2'>
                            <h5>
                                <span className='text-bold'>{item.reviewerName}</span> : <span>{item.comment}</span>
                            </h5>
                            <p className='p-2'>Rating : {item.rating} <i className="fa-solid fa-star text-yellow-400"></i> </p>
                        </div>
                      ))
                      :
                      <div className='font-bold p-2'>No Reviews...</div>
                    }

                </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default View