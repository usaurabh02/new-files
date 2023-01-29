import React from 'react'
import Image from "next/image";
import aws from "../public/aws.png";
import adobe from "../public/adobe.png";
import react from "../public/react.png";
import node from "../public/node.png";
import python from "../public/python.png";
import tensor from "../public/tensor.png";
import unity from "../public/unity.png";
import unreal from "../public/unreal.png";
import blender from "../public/blender.png";
import figma from "../public/figma.png";
import wall from "../public/wall12.png";
import three from "../public/three1.png";
import spark from "../public/spark.png";
import aframe from "../public/aframe.png";
import next from "../public/next.png";
import google from "../public/google.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

export const Tech = () => {
  return (
    <div className="justify-center text-center content-center py-20 w-full">
   
        <h5 className="text-[#40BA77] lg:text-3xl mt-[50px] font-semibold md:text-2xl sm:text-x font-semiboldl">
          TECHNOLOGY
        </h5>

        <p className="lg:text-xl text-center text-[12px] mx-4 pt-4 lg:mt-4">
          8TH WALL, A-FRAME, THREE.JS, REACT, NODE.JS, NEXT.JS, META SPARK, PYTHON, TENSORFLOW, UNITY, UNREAL,
          BLENDER, AWS, GOOGLE CLOUD
        </p>
    
      <div className="max-w-[80%] m-auto mt-16">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={5}
          freeMode={true}
          pagination={false}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Image
              src={wall}
              alt="/"
              className="lg:w-[130px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
          {" "}
          <Image
            src={aframe}
            alt="/"
            className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
          />
        </SwiperSlide>

          <SwiperSlide>
            {" "}
            <Image
              src={react}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={node}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={blender}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={unity}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={unreal}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={tensor}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={adobe}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={python}
              alt="/"
              className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
            />
          </SwiperSlide>
          <SwiperSlide>
          {" "}
          <Image
            src={three}
            alt="/"
            className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
          />
        </SwiperSlide>
      <SwiperSlide>
      {" "}
      <Image
        src={spark}
        alt="/"
        className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
      />
    </SwiperSlide>
    <SwiperSlide>
    {" "}
    <Image
      src={aws}
      alt="/"
      className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
    />
  </SwiperSlide>
    <SwiperSlide>
    {" "}
    <Image
      src={next}
      alt="/"
      className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
    />
  </SwiperSlide>
<SwiperSlide>
{" "}
<Image
  src={google}
  alt="/"
  className="lg:w-[150px] lg:h-[100px] w-[70px] h-[80px]"
/>
</SwiperSlide>
<SwiperSlide>
{" "}
<Image
  src={figma}
  alt="/"
  className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]"
/>
</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Tech;
