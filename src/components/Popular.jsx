import React from "react";
import data_product from "@/assets/data";
import Container from "./Container";
import Flex from "./Flex";
import Item from "./Item";

const Popular = () => {
  return (
    <div className="py-8 md:py-0">
      <Container>
        <Flex>
          <div className="popular flex-col justify-center items-center h-auto md:h-[90vh] mt-8 md:mt-14 px-4 md:px-0">
            <div className="justify-center flex flex-col items-center gap-2">
                <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-5xl font-semibold text-center">POPULER IN WOMEN</h1>
            <hr className="w-[120px] sm:w-[160px] md:w-[200px] h-1.5 rounded-[10px] bg-[#252525]"/>
            </div>
            <div className="popular-item mt-6 md:mt-12 flex flex-wrap md:flex-nowrap gap-4 md:gap-[20px] justify-center">
              {data_product.map((item, i) => {
                return  <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_Price={item.new_price}
                  old_Price={item.old_price}
                />;
               
              })}
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Popular;
