import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '@/components/Breadcrumb';
import Container from '@/components/Container';
import ProductDisplay from '@/components/ProductDisplay';
import { ShopContext } from '@/context/ShopContext';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product?.find((e) => e.id === Number(productId));

  if (!product) return null;

  return (
    <div>
      <Container>
        <div className="mt-5">
          <Breadcrumb product={product} />
          <ProductDisplay product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
