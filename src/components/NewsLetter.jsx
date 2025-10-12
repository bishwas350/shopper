import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Button } from "./ui/button";

const NewsLetter = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#fde1ff,#e1ffea_60%)] py-8 sm:py-12 md:py-16 lg:py-20 mt-8 md:mt-12 relative z-10">
      <Container>
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-[140px]">
          <div className="newsletter text-center max-w-xs sm:max-w-sm md:max-w-2xl mx-auto w-full">
            {/* Responsive Heading */}
            <h1 className="text-[#454545] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-3 sm:mb-4 md:mb-6 leading-tight">
              Get Exclusive Offers On Your Email
            </h1>
            
            {/* Responsive Subtitle */}
            <p className="text-[#454545] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 sm:px-0">
              Subscribe to our newsletter and stay updated
            </p>
            
            {/* Responsive Form */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 bg-white rounded-lg border border-[#e3e3e3] p-1.5 sm:p-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-sm">
              <input 
                type="email" 
                placeholder="Your Email id" 
                className="outline-none px-3 sm:px-4 py-2.5 sm:py-2 md:py-3 flex-1 rounded-md sm:rounded-none text-sm sm:text-base bg-transparent placeholder:text-gray-400 focus:placeholder:text-gray-300 transition-all"
              />
              <Button className="px-4 sm:px-6 py-2.5 sm:py-2 md:py-3 rounded-md text-sm sm:text-base font-medium hover:scale-105 transition-all duration-200">
                Subscribe
              </Button>
            </div>
            
            {/* Optional: Privacy notice for mobile */}
            <p className="text-xs sm:text-sm text-[#666] mt-3 sm:mt-4 px-4 sm:px-0">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
