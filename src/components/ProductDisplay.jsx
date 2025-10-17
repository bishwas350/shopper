import React from 'react'
import Container from './Container'

const ProductDisplay = (props) => {
    const { product } = props;
  return (
    <div>
      <Container>
        <div className="product-display-left">
            <div className="productdisply-img-list">
                <img src={product?.image} alt={product?.name || 'product'} />
            </div>
        </div>
        <div className="product-display-right"></div>
      </Container>
    </div>
  )
}

export default ProductDisplay
