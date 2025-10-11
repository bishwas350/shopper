import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import handIcon from "../assets/hand_icon.png";
import { Button } from "./ui/button";
import { ArrowUpRightFromSquareIcon, MoveRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Flex>
          <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
          <div 
          className="hand-hand-icon">
            <p>New</p>
            <img src={handIcon} alt="" />
          </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <Button className={'rounded-2xl'}>latest collection <span><MoveRight/></span></Button>
          <div className="hero-right"></div>
        </Flex>
      </Container>
    </div>
  );
};

export default Hero;
