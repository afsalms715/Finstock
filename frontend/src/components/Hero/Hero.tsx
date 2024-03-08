import React from "react";
import heroImage from './istockphoto.png'

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="md:mx-20">
      <div className="flex flex-wrap">
        <div className="w-full md:w-[50%] p-5 md:p-20 ">
          <h1 className="pl-[10%] lg:pl-[23%] font-bold text-[40px] pt-5 leading-10">
            Financial Data
            <br />
            with no News
          </h1>
          <p className="pl-[10%] lg:pl-[23%] pt-4 text-gray-500">
            Search relevent financial documents
            <br />
            without fear mongering and fake
            <br />
            news.
          </p>
          <a
            href="#"
            className="ml-[10%] lg:ml-[23%] mt-6 inline-block text-sm px-5 py-3 leading-none border rounded text-white border-white hover:border-transparent bg-teal-500 mt-0"
          >
            Get Started
          </a>
        </div>
        <div className="w-full md:w-[50%] flex md:mt-10">
            <img src={heroImage} className="w-[600px] w-[600px] justify-center my-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
