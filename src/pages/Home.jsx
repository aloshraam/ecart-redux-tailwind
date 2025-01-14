import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
      <Header insideHome = {true}/>
      <div className='container px-4' style={{paddingTop:'100px'}}> 
      {/* mx-auto */}
        <div className='grid grid-cols-4 gap-4'>
          <div className='rounded border shadow p-2'>
            <img style={{height:'200px', width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7o94CQVxy3SWj7Mygbij-o8JZCvZmgChyw&s" alt="" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>Title</h3>
              <Link to={'./id/view'} className='bg-violet-600 p-2 text-white inline-block rounded'>View Details...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home