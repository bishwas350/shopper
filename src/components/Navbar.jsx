import { CarTaxiFront, ShoppingCart } from 'lucide-react'
import logo from '../assets/logo.png'
import Container from './Container'
import Flex from './Flex'
import Menu from './Menu'
import { Button } from './ui/button'

function Navbar() {
  return (
    <div className="navbar p-[16px] shadow-[0_1px_3px_-2px_black] ">
      <Container>
        <Flex className={"items-center justify-center gap-6"}>
        <div className="nav-logo flex items-center gap-2.5 justify-center">
        <img src={logo} alt="" />
        <p className='text-[#171717] font-semibold text-3xl'>BISWAS</p>
      </div>
      <div className="nav-menu">
        <Menu className={'text-xl text-[#626262] font-medium  '}>
            <li className='hover:text-black cursor-pointer'>Shop</li>
            <li className='hover:text-black cursor-pointer'>Men</li>
            <li className='hover:text-black cursor-pointer'>Women</li>
            <li className='hover:text-black cursor-pointer'>Kids</li>
        </Menu>
      </div>
      <div className="nav-login-cart gap-4 flex items-center justify-center">
        <Button variant={'outline'}>login</Button>
        <button>
            <ShoppingCart/>
        </button>
      </div>
      </Flex>
      </Container>
    </div>
  )
}

export default Navbar
