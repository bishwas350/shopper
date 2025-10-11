import { ShoppingCart, Menu as MenuIcon, X } from "lucide-react";
import logo from "../assets/logo.png";
import Container from "./Container";
import Flex from "./Flex";
import Menu from "./Menu";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Shop", path: "/", key: "shop" },
    { name: "Mens", path: "/men", key: "men" },
    { name: "Womens", path: "/women", key: "women" },
    { name: "Kids", path: "/kids", key: "kids" },
  ];

  const NavItem = ({ item, isMobile = false }) => (
    <li
      onClick={() => {
        setMenu(item.key);
        if (isMobile) setIsOpen(false);
      }}
      className={`hover:text-black cursor-pointer ${isMobile ? 'py-4 border-b border-gray-200 last:border-b-0' : ''}`}
    >
      <Link to={item.path} className={isMobile ? 'block text-lg' : ''}>
        {item.name}
      </Link>
      {menu === item.key && (
        <hr className="left-0 -bottom-1 w-full h-[2px] bg-red-500 transition-all duration-500" />
      )}
    </li>
  );

  return (
    <div className="navbar p-4 shadow-[0_1px_3px_-2px_black] sticky top-0 bg-white z-50">
      <Container>
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <Link to="/" className="nav-logo flex items-center gap-2.5">
            <img src={logo} alt="Logo" className="h-8" />
            <p className="text-[#171717] font-semibold text-xl sm:text-2xl">BISWAS</p>
          </Link>

          {/* Mobile Cart and Menu */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link to={'/cart'}>
              <button className="cursor-pointer relative p-2">
                <ShoppingCart size={20} />
                <span className="nav-cart-count absolute -top-1 -right-1 bg-[#121212] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </Link>

            {/* Mobile Menu Sheet */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <MenuIcon size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2.5">
                      <img src={logo} alt="Logo" className="h-6" />
                      <p className="text-[#171717] font-semibold text-xl">BISWAS</p>
                    </div>
                  </div>

                  {/* Mobile Menu Items */}
                  <nav className=" flex ">
                    <Menu className="ml-4 text-[#626262] flex-col font-medium ">
                      {navItems.map((item) => (
                        <NavItem key={item.key} item={item} isMobile={true} />
                      ))}
                    </Menu>
                  </nav>

                  {/* Mobile Login Button */}
                  <div className="pt-6 border-t transform translate-[20%] border-gray-200">
                    <Link to={"/login"} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={"outline"}
                        className="w-1/2 rounded-md cursor-pointer py-3"
                      >
                        Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Layout */}
        <Flex className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="nav-logo flex items-center gap-2.5">
            <img src={logo} alt="Logo" className="h-8" />
            <p className="text-[#171717] font-semibold text-2xl lg:text-3xl">BISWAS</p>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-menu">
            <Menu className="text-lg lg:text-xl text-[#626262] font-medium">
              {navItems.map((item) => (
                <NavItem key={item.key} item={item} />
              ))}
            </Menu>
          </div>

          {/* Desktop Login and Cart */}
          <div className="nav-login-cart gap-4 flex items-center">
            <Link to={"/login"}>
              <Button
                variant={"outline"}
                className="rounded-md cursor-pointer px-6 lg:px-9 py-3 lg:py-4 active:bg-[#626262]"
              >
                Login
              </Button>
            </Link>
            <Link to={'/cart'}>
              <button className="cursor-pointer relative p-2">
                <ShoppingCart size={24} />
                <span className="nav-cart-count absolute -top-2 -right-2 bg-[#121212] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
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
