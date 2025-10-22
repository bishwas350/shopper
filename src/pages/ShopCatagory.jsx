import Container from "@/components/Container";
import { ShopContext } from "@/context/ShopContext";
import React, { useContext } from "react";
import dropdown_icon from "@/assets/dropdown_icon.png";

import Item from "@/components/Item";
const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  // Accept both 'category' and misspelled 'catagory' props; normalize 'kids' -> 'kid'
  const rawCategory = props.category ?? props.catagory;
  const currentCategory = rawCategory === "kids" ? "kid" : rawCategory;
  return (
    <div>
      <Container>
        <div className="shop-catagory">
          <img
            className="w-full h-auto object-cover"
            src={props.banner}
            alt=""
          />
          <div className="shop-catagory-indexShort flex flex-col gap-3 sm:flex-row items-start sm:items-center justify-between mx-4 md:mx-20 lg:mx-[170px] mt-4">
            <p>
              <span className="font-semibold">Showing 1-12</span> out of 36
              products
            </p>
            <div className="shopcatagory-sort rounded-full border border-gray-400 flex items-center gap-2 px-3 py-2 text-sm sm:text-base cursor-pointer select-none">
              sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="shopcatagory-products mx-4 md:mx-20 lg:mx-[170px] my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-y-20">
            {all_product
              .filter(
                (item) => !currentCategory || item.category === currentCategory
              )
              .map((item, i) => (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_Price={item.new_price}
                  old_Price={item.old_price}
                />
              ))}
          </div>
          <div className="shopcategory-lodemore flex justify-center items-center mx-auto my-9 w-[233px] h-[50px] rounded-[75px] bg-black text-white text-lg font-medium cursor-pointer hover:bg-gray-700 transition-colors">
            Explore More
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopCatagory;
