import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
            <img style={{width:'550px', height:'350px', objectFit:'cover', padding:'20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7o94CQVxy3SWj7Mygbij-o8JZCvZmgChyw&s" alt="" />

            <div>
                <h3 className='font-bold'>PID : 2</h3>
                <h1 className='font-bold text-5xl'>Product Name</h1>
                <h4 className='font-bold text-red-600 text-2xl'>$240</h4>
                <h4>Brand : </h4>
                <h4>Category : </h4>
                <p>
                    <span className='font-bold'>Discription : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel corporis ipsam impedit repellat harum iste dicta ipsa quasi eaque architecto!</span>
                </p>

                <div className='flex justify-left gap-5 mt-5'>
                    <button className='bg-blue-600 text-white rounded p-2'>Add to wishlist</button>
                    <button className='bg-green-700 text-white rounded p-2'>Add to Cart</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default View