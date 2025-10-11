import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import handIcon from "../assets/hand_icon.png";
import { Button } from "./ui/button";
import { ArrowUpRightFromSquareIcon, MoveRight } from "lucide-react";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero bg-[linear-gradient(180deg,#fde1ff,#e1ffea_60%)] py-8 md:py-0">
      <Container>
        <Flex className={'justify-center items-center flex-col md:flex-row'}>
          <div className="hero-left flex flex-col justify-center gap-3 md:gap-5 leading-1 pl-4 md:pl-16 text-center md:text-left">
            <h2 className="text-[#090909] text-lg md:text-2xl font-medium">NEW ARRIVALS ONLY</h2>
          <div 
          className="hand-hand-icon flex items-center gap-2 md:gap-3 justify-center md:justify-start">
            <p className="text-[#171717] text-4xl sm:text-5xl md:text-7xl font-medium">New</p>
            <img className="w-[60px] sm:w-[80px] md:w-[100px]" src={handIcon} alt="" />
          </div>
            <p className="text-[#171717] text-4xl sm:text-5xl md:text-7xl font-medium">collections</p>
            <p className="text-[#171717] text-4xl sm:text-5xl md:text-7xl font-medium pb-2">for everyone</p>
          <div className="my-4 md:my-8">
            <Button className={'py-3 md:py-5 px-4 md:px-6 rounded-3xl text-sm md:text-base'} >
              latest collection 
              <span className="ml-1 md:ml-2"><MoveRight className="w-4 h-4 md:w-5 md:h-5"/></span>
            </Button>
          </div>
          </div>
          <div className="hero-right flex justify-center pl-4 md:pl-16 mt-6 md:mt-0">
            <img 
              src={hero_image} 
              alt="Hero" 
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-auto"
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero;
