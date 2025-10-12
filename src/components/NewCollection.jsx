import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import new_collections from "@/assets/new_collections";
import Item from "./Item";

const NewCollection = () => {
  return (
    <section className="w-full py-8 md:py-12 mb-8 md:mb-12 relative z-20">
      <Container>
        <div className="flex flex-col justify-center items-center min-h-auto px-4 md:px-0">
          <div className="new-collections justify-center flex flex-col items-center gap-2 w-full">
            <h1 className="text-[#171717] text-2xl sm:text-3xl md:text-5xl font-semibold text-center">NEW COLLECTION</h1>
            <hr className="w-[120px] sm:w-[160px] md:w-[200px] h-1.5 rounded-[10px] bg-[#252525]"/>
            <div className="collections mt-6 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[20px] justify-items-center w-full">
              {new_collections.map((item, i) => {
                return (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_Price={item.new_price}
                    old_Price={item.old_price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewCollection;
