import { MoveRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({ product }) => {
  const category = product?.category;
  const categoryPath = category === 'kid' ? 'kids' : (category || '');

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/">Home</Link>
        </li>
        <MoveRight className="h-4 w-4" />
        <li>
          <Link to="/">Shop</Link>
        </li>
        {categoryPath && (
          <>
            <MoveRight className="h-4 w-4" />
            <li>
              <Link to={`/${categoryPath}`}>{category}</Link>
            </li>
          </>
        )}
        {product?.name && (
          <>
            <MoveRight className="h-4 w-4" />
            <li>{product.name}</li>
          </>
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
