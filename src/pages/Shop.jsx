import Hero from '@/components/Hero'
import NewCollection from '@/components/NewCollection'
import NewsLetter from '@/components/NewsLetter'
import Offers from '@/components/Offers'
import Popular from '@/components/Popular'
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
