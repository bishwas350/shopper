import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCatagory from './pages/ShopCatagory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSinup from './pages/LoginSinup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Shop/>}/>
          <Route path='/men'element={<ShopCatagory catagory="men"/>}/>
          <Route path='/women'element={<ShopCatagory catagory="women"/>}/>
          <Route path='/kids'element={<ShopCatagory catagory="kids"/>}/>
          <Route path='/product'element={<Product/>}>
          <Route path=':productId'element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSinup/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
