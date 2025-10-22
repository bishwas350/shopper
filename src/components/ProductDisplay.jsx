import React from "react";
import Container from "./Container";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { Button } from "./ui/button";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div>
      <Container className={"flex"}>
        <div className="product-display-left flex gap-4">
          <div className="productdisply-img-list flex flex-col gap-4">
            {/* <img src={product?.image} alt={product?.name || 'product'} /> */}
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-main-img h-40">
            <img className="w-[700px] h-[500px]" src={product.image} alt="" />
          </div>
        </div>
        <div className="product-display-right m-[0px, 70px] flex-col">
          <h1 className="text-[#3d3d3d] text-4xl font-semibold">
            {product.name}
          </h1>
          <div className="product-display-right-star flex items-center mt-[13px] gap-1.5 text-[16px] text-[#1c1c1c]">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-price flex m-[40px, 0px] gap-7 text-2xl font-semibold:">
            <div className="product-display-old-price text-[#818181] line-through">
              ${product.old_price}
            </div>
            <div className="product-display-new-price">
              ${product.new_price}
            </div>
            <div className="product-display-right-discription">
              <p>
                Meet your new wardrobe essential. Crafted from buttery-soft,
                100% organic combed cotton, this tee offers a relaxed yet
                refined fit that feels as good as it looks. The ribbed crewneck
                and double-stitched hem provide lasting structure, while the
                breathable fabric ensures all-day comfort.
              </p>
            </div>
            <div className="product-display-right-size">
              <h1>Select Size </h1>
              <div className="product-display-size-list">
                <div className=""></div>
                <div className="">S</div>
                <div className="">M</div>
                <div className="">L</div>
                <div className="XL"></div>
                <div className="XXL"></div>
              </div>
            </div>
            <Button>ADD TO CART</Button>
            <p>
              <span>Category :</span>Women , T-shirt,Crop Top
            </p>
            <p>
              <span>Tags :</span>Modern , Letest
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDisplay;
