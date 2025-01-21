import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()
  const {allProducts,loading, errorMsg} = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex = currentPage*productsPerPage //8, 16, 24
  const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  // pagination function for navigation
  const navigateToNextPage = () =>{
    if(currentPage != totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage = () =>{
    if(currentPage != 1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome = {true}/>
      <div className=' px-4 mb-5' style={{paddingTop:'100px'}}> 
      {/* mx-auto */}
        {
          loading?
          <div className='flex flex-col justify-evenly items-center text-2xl mr-12'>
            <img width={'110px'} height={'110px'} className='text-purple-600' src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-25.jpg" alt="" />
            <h3 className='text-purple-600 ml-5'>Loading...</h3>
          </div>
          :
          <>
              <div className='grid grid-cols-4 gap-4'>
                {
                  allProducts?.length>0 ?
                  visibleAllProducts?.map(product => (
                    <div key={product.id} className='rounded border shadow p-2'>
                      <img style={{height:'200px', width:'100%'}} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                        <Link to={`./${product?.id}/view`} className='bg-violet-600 p-2 text-white inline-block rounded'>View Details...</Link>
                      </div>
                    </div>
                  ))

                  :
                  <div className='text-bold flex justify-center items-center text-purple-600 text-xl'>
                    Products not Found!!!
                  </div>
                }
              </div>
          </>
        }
      </div>
      {/* Pagenation */}
      <div className='text-xl text-center m-10'>
        <span onClick={navigateToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5'></i></span>
        <span>{currentPage} of {totalPages}</span>
        <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
      </div>
    </>
  )
}

export default Home