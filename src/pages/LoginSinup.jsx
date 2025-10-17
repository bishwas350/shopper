import React, { useState } from "react";
import Container from "../components/Container";
import { Button } from "../components/ui/button";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="bg-[#fce3fe] pt-16 md:pt-24 w-full min-h-[80vh] py-10">
      <Container>
        <div className="loginsignup-container bg-white mx-auto w-full max-w-[480px] md:max-w-[580px] my-5 p-6 md:p-10 rounded-2xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          
          <div className="loginsignup-fields flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
            {!isLogin && (
              <input 
                type="text" 
                placeholder="Your Name" 
                className="h-14 md:h-16 bg-transparent border border-gray-300 rounded-lg pl-4 md:pl-5 text-base md:text-lg focus:outline-none focus:border-[#ff4141] transition-colors"
              />
            )}
            <input 
              type="email" 
              placeholder="Email Address" 
              className="h-14 md:h-16 bg-transparent border border-gray-300 rounded-lg pl-4 md:pl-5 text-base md:text-lg focus:outline-none focus:border-[#ff4141] transition-colors"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="h-14 md:h-16 bg-transparent border border-gray-300 rounded-lg pl-4 md:pl-5 text-base md:text-lg focus:outline-none focus:border-[#ff4141] transition-colors"
            />
          </div>

          <Button className="w-full h-14 md:h-16 text-base md:text-lg font-medium bg-[#ff4141] text-white border-none rounded-lg cursor-pointer mt-6 md:mt-7 hover:bg-[#ff4141]/90 transition-colors">
            {isLogin ? "Login" : "Continue"}
          </Button>

          <p className="text-gray-500 text-base md:text-lg font-medium mt-4 md:mt-5 text-center">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className="text-[#ff4141] font-semibold cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up here" : "Login here"}
            </span>
          </p>

          {!isLogin && (
            <div className="loginsignup-agree flex items-start mt-4 md:mt-5 gap-3 text-gray-500 text-sm md:text-base font-medium">
              <input 
                type="checkbox" 
                className="w-4 h-4 md:w-5 md:h-5 cursor-pointer mt-1"
              />
              <p>By continuing, I agree to the terms and conditions</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LoginSignup;