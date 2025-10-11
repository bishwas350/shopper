import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import handIcon from "../assets/hand_icon.png";
import { Button } from "./ui/button";
import { ArrowUpRightFromSquareIcon, MoveRight } from "lucide-react";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero bg-[linear-gradient(180deg,#fde1ff,#e1ffea_60%)]">
      <Container>
        <Flex className={'justify-center items-center'}>
          <div className="hero-left flex flex-col justify-center gap-5 leading-1 pl-16">
            <h2 className="text-[#090909] text-2xl font-medium">NEW ARRIVALS ONLY</h2>
          <div 
          className="hand-hand-icon flex items-center gap-3">
            <p className="text-[#171717] text-7xl font-medium">New</p>
            <img className="w-[100px]" src={handIcon} alt="" />
          </div>
            <p className="text-[#171717] text-7xl font-medium">collections</p>
            <p className="text-[#171717] text-7xl font-medium pb-2">for everyone</p>
          <div className="my-8">
            <Button className={'py-5 rounded-3xl'} >latest collection <span><MoveRight/></span></Button>
          </div>
          </div>
          <div className="hero-right flex justify-center pl-16">
            <img src={hero_image} alt="" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero;
