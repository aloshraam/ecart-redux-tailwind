import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className='w-full flex flex-row bg-violet-600 gap-5 justify-between p-5'>
          
          {/* introduction */}
          <div className='w-72'>
            <h2 className='text-lg'>E-cart</h2>
            <p className='text-white'>designed and build with all the love on the world by the luminar team with the help of our contributors.</p>
            <p className='text-white'>Code liscensed Luminar,Doc CC by 3.0.</p>
            <p className='text-white'>Currenky v5.3.2.</p>
          </div>
        {/* Links */}

          <div className='flex flex-col'>
            <h2 className='text-lg'>Links</h2>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/'} >Home Page</Link>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/cart'} >Cart Page</Link>
            <Link style={{textDecoration:'none', color: 'white'}} to={'/wishlist'} >Wishlist Page</Link>
          </div>

        {/* Guides */}
          <div className='flex flex-col '>
              <h2 className='text-lg'>Guides</h2>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://react.dev/">React</a>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
              <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React router DOM</a>
          </div>

        {/* Contact */}
          <div className='flex flex-col'>
            <h2 className='text-lg'>Contact</h2>
            <div className='flex justify-between'>
                <input type="text" placeholder='Email...' className='form-control me-2 p-2 rounded'/>
                <button className='btn btn-info'> <i className="fa-solid fa-arrow-right"></i> </button>
            </div>
                <div className='flex justify-evenly mt-3'>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://x.com/?lang=en"> <i className="fa-brands fa-twitter"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.instagram.com/"> <i className="fa-brands fa-instagram"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://discord.com/"> <i className="fa-brands fa-discord"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://www.youtube.com/"> <i className="fa-brands fa-youtube"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href="https://core.telegram.org/blackberry/login"> <i className="fa-brands fa-telegram"></i> </a>
                    <a style={{textDecoration:'none', color: 'white'}} target='_blank' href=""> <i className="fa-brands fa-soundcloud"></i> </a>
                </div>
          </div>
      </div>

    </>
  )
}

export default Footer