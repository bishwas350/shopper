import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Button } from './ui/button'
import exclusive_image from '@/assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="py-8 md:py-0">
      <Container>
        <Flex>
            <div className="offer w-full flex flex-col md:flex-row mx-auto px-4 sm:px-8 md:px-[140px] mb-8 sm:mb-16 md:mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)] py-6 md:py-0">
                <div className="offer-left flex flex-col justify-center text-center md:text-left">
                    <h1 className='text-[#171717] text-3xl sm:text-4xl md:text-5xl font-semibold'>Exclusive</h1>
                    <h1 className='text-[#171717] text-3xl sm:text-4xl md:text-5xl font-semibold'>Offer For You</h1>
                    <p className='text-[#171717] font-semibold text-lg sm:text-xl md:text-2xl mt-2 md:mt-0'>ONLY ON BEST SELLER PRODUCTS</p>
                    <Button className={'cursor-pointer mt-4 md:mt-[30px] mx-auto md:mx-0 w-fit'}>Check Now</Button>
                </div>
                <div className="offer-right flex ml-auto justify-center md:justify-end items-center pt-4 md:pt-[50px] mt-4 md:mt-0">
                    <img 
                        src={exclusive_image} 
                        alt="Exclusive offer" 
                        className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-none h-auto"
                    />
                </div>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Offers