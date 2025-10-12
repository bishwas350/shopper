import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Item = (props) => {
  return (
    <div>
      <Container>
        <Flex>
            <div className="item hover:scale-105 hover:transition-[0.6s]">
                <img src={props.image} alt="" />
                <p className='m-1.5'>{props.name}</p>
            </div>
            <div className="item-prices flex gap-3">
                <div className="item-price-new text-[#374151] text-xl font-semibold">
                    {props.newPrice}
                </div>
                <div className="item-old-price text-[#8c8c8c] text-xl font-medium line-through">
                    {props.oldPrice}
                </div>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Item
