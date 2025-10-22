import React, { useState } from "react";
import Container from "./Container";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { Button } from "./ui/button";

const ProductDisplay = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const images = [product?.image, product?.image, product?.image, product?.image].filter(Boolean);

  return (
    <div>
      <Container className="px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 flex gap-3 md:flex-col md:w-24">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${product?.name || "product"} thumbnail ${idx + 1}`}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-md border bg-white object-contain p-1"
                />
              ))}
            </div>
            {/* Main image */}
            <div className="order-1 md:order-2 flex-1">
              <img
                className="w-full max-h-[500px] rounded-lg border bg-white object-contain p-3"
                src={product?.image}
                alt={product?.name || "product"}
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <h1 className="text-[#3d3d3d] text-2xl md:text-4xl font-semibold">{product?.name}</h1>

            <div className="flex items-center mt-3 gap-1.5 text-base text-[#1c1c1c]">
              {Array.from({ length: 4 }).map((_, i) => (
                <img key={`s-${i}`} src={star_icon} alt="star" className="h-5 w-5" />
              ))}
              <img src={star_dull_icon} alt="star outline" className="h-5 w-5" />
              <p className="ml-1 text-sm text-gray-500">(122)</p>
            </div>

            <div className="mt-6 flex items-baseline gap-6">
              <div className="text-[#818181] line-through text-xl">${product?.old_price}</div>
              <div className="text-[#ff4141] text-2xl font-semibold">${product?.new_price}</div>
            </div>

            <div className="mt-6 text-sm leading-6 text-[#1c1c1c]/80">
              <p>
                Meet your new wardrobe essential. Crafted from buttery-soft, 100% organic combed cotton,
                this tee offers a relaxed yet refined fit that feels as good as it looks. The ribbed crewneck
                and double-stitched hem provide lasting structure, while the breathable fabric ensures all-day comfort.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-base md:text-lg text-[#656565] font-semibold">Select Size</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`rounded-md border px-4 py-2 text-sm transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-white text-gray-800 hover:border-gray-500"
                    }`}
                    aria-pressed={selectedSize === sz}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <Button className="mt-6 w-full md:w-auto">ADD TO CART</Button>

            <p className="mt-6 text-sm text-gray-600">
              <span className="font-semibold text-[#1c1c1c]">Category:</span> Women, T-shirt, Crop Top
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <span className="font-semibold text-[#1c1c1c]">Tags:</span> Modern, Latest
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDisplay;
