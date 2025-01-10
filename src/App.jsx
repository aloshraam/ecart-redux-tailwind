import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Home from './pages/Wishlist'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/:id/view' element={<View/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
     </Routes>
    </>
  )
}

export default App
