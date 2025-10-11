import logo from '../assets/logo.png'
import Flex from './Flex'
import Menu from './Menu'

function Navbar() {
  return (
    <div className="navbar">
      <Flex className={"items-center justify-center gap-6"}>
        <div className="nav-logo flex items-center gap-2 justify-center">
        <img src={logo} alt="" />
        <p>BISWAS-SHOP</p>
      </div>
      <div className="nav-menu">
        <Menu>
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </Menu>
      </div>
      <div className="nav-login-cart">
        
      </div>
      </Flex>
    </div>
  )
}

export default Navbar
