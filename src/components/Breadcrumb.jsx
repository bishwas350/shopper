import { ChevronRight, MoveRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({ product }) => {
  const category = product?.category;
  const categoryPath = category === 'kid' ? 'kids' : (category || '');

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm m-[60px, 170px] capitalize text-[#5e5e5e]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li>
          <Link to="/">Shop</Link>
        </li>
        {categoryPath && (
          <>
            <ChevronRight  className="h-4 w-4" />
            <li>
              <Link to={`/${categoryPath}`}>{category}</Link>
            </li>
          </>
        )}
        {product?.name && (
          <>
          <ChevronRight  className="h-4 w-4" />
            <li>{product.name}</li>
          </>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
