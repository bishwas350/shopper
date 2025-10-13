
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCatagory from "./pages/ShopCatagory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSinup from "./pages/LoginSinup";
import Footer from "./components/Footer";
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'
function App() {


  return (
    <>
      <div className="">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCatagory banner={men_banner} catagory="men" />} />
            <Route path="/women" element={<ShopCatagory banner={women_banner} catagory="women" />} />
            <Route path="/kids" element={<ShopCatagory banner={kids_banner} catagory="kids" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSinup />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
