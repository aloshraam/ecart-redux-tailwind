import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {

  const userCart = useSelector(state=>state.cartReducer)

  const userWishlist = useSelector(state => state.wishlistReducer)

  const dispatch =  useDispatch() //for deleting the item

  const handleCart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id == product.id)
    if(existingProduct){
      alert("Product Quantiy Incremented")
    }else{
      alert("Produc added to Cart")
    }
  }

  return (
    <>
      <Header/>
      <div style={{paddingTop:"100px"}} className='px-5'>
        {
          userWishlist?.length >0 ?
            <>
              <h1 className='text-red-600 text-4xl font-bold'>WishList</h1>

              <div className='grid grid-cols-4 gap-4'>
                {
                  userWishlist?.map(product=>(
                    <div key={product.id} className='rounded border shadow p-2'>
                      <img style={{height:'200px', width:'100%'}} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                        <div className='flex justify-evenly mt-3'>
                            <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                            <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-700'></i></button>
                        </div>  
                      </div>
                    </div>
                  ))
                }
              </div>

            </>
          :
          <div className='text-purple-600 flex flex-col justify-center items-center'>
            <img className='w-100 h-80' src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
            <h3 className='text-2xl font-bold' >No Items Added to Wishlist Yet!!!</h3>
          </div>
        }
      </div>
    </>
  )
}

export default Wishlist