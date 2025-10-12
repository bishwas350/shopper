import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Button } from './ui/button'
import exclusive_image from '@/assets/exclusive_image.png'

const Offers = () => {
  return (
    <div>
      <Container>
        <Flex>
            <div className="offer w-full flex mx-auto px-[140px] mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)]">
                <div className="offer-left flex flex-col justify-center">
                    <h1 className='text-[#171717] text-5xl font-semibold'>Exclusive</h1>
                    <h1 className='text-[#171717] text-5xl font-semibold'>Offer For You</h1>
                    <p className='text-[#171717] font-semibold text-2xl '>ONLY ON BEST SELLER PRODUCTS</p>
                    <Button className={'cursor-pointer mt-[30px]'}>Check Now</Button>
                </div>
                <div className="offer-right flex ml-auto justify-end items-center pt-[50px]">
                    <img src={exclusive_image} alt="" />
                </div>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Offers