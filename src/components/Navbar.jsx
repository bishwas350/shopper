import { CarTaxiFront, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";
import Container from "./Container";
import Flex from "./Flex";
import Menu from "./Menu";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar p-[16px] shadow-[0_1px_3px_-2px_black] ">
      <Container>
        <Flex className={"items-center justify-center gap-6"}>
          <div className="nav-logo flex items-center gap-2.5 justify-center">
            <img src={logo} alt="" />
            <p className="text-[#171717] font-semibold text-3xl">BISWAS</p>
          </div>
          <div className="nav-menu">
            <Menu className={"text-xl text-[#626262] font-medium  "}>
              <li
                onClick={() => {
                  setMenu("shop");
                }}
                className="hover:text-black  cursor-pointer"
              >
                <Link to={"/"}>Shop</Link>
                {menu === "shop" ? (
                  <hr className="left-0 -bottom-1 w-full h-[3px] bg-red-500 transition-all duration-500 group-hover:w-full" />
                ) : (
                  <></>
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("men");
                }}
                className="hover:text-black  cursor-pointer"
              >
                <Link to={"/men"}>Mens</Link>
                {menu === "men" ? (
                  <hr className="left-0 -bottom-1 w-full h-[3px] bg-red-500 transition-all duration-500 group-hover:w-full" />
                ) : (
                  <></>
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("women");
                }}
                className="hover:text-black  cursor-pointer"
              >
                <Link to={"/women"}>Womens</Link>
                {menu === "women" ? (
                  <hr className="left-0 -bottom-1 w-full h-[3px] bg-red-500 transition-all duration-500 group-hover:w-full" />
                ) : (
                  <></>
                )}
              </li>
              <li
                onClick={() => {
                  setMenu("kids");
                }}
                className="hover:text-black  cursor-pointer"
              >
                <Link to={"/kids"}>Kids</Link>
                {menu === "kids" ? (
                  <hr className="left-0 -bottom-1 w-full h-[3px] bg-red-500 transition-all duration-500 group-hover:w-full" />
                ) : (
                  <></>
                )}
              </li>
            </Menu>
          </div>
          <div className="nav-login-cart gap-4 flex items-center justify-center">
            <Link to={"/login"}>
              <Button
                variant={"outline"}
                className={
                  "rounded-md cursor-pointer px-9 py-4 active:bg-[#626262]"
                }
              >
                login
              </Button>
            </Link>
                  <Link to={'/cart'}>
                  <button className="cursor-pointer relative">
              <ShoppingCart />

              <span className="nav-cart-count absolute -top-2 -right-2 bg-[#121212] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
                  </Link>
            
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Navbar;
