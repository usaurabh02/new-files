import React from "react";
import Image from "next/image";
import AR from "../public/man2.jpg";
import {FaHeart} from 'react-icons/fa'

export const WebAR = () => {
  return (
    <div className="w-full items-center ">
      <div className="text-3xl mt-5 italic ">
        <h5 className="text-center py-8 px-4 font-italic animate-pulse	 mx-auto text-black">
          Grab the best <span className="text-[#5b9e3c]">"WebAR"</span> solution
          for your Business
        </h5>
      </div>

      <div class="container mt-5 mx-auto p-4 md:p-0">
      <div class="shadow-lg  flex flex-wrap w-full lg:w-4/5 mx-auto">
      <div class="bg-cover  bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"><Image alt="/" src={AR} />
      <div class="absolute top-[-10%] text-xl">
      <i class="fa fa-heart text-white hover:text-pink-400 ml-4 mt-4 cursor-pointer"><FaHeart size={30} /></i>
      </div>
      </div>
      <div class="bg-white w-full md:w-2/3">
      <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
      <div class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
      <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>What is WebXR?</h3>
            <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden"></hr>
          </div>
          <div class="w-full lg:w-3/5 lg:px-3">
            <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
            Web-based Augmented reality (AR) and Virtual reality (VR) is a simulated interactivebexperience of a real-world environment, viewable on any standard iOS or Android device camera. WebVR is an open specification that makes it possible to experienceVR in your browser. The goal is to make it easier for everyone to get into VR experiences, no matter what device you have. Vamverse creates interactive 3D models of your products and integrate them in your website and allow user to view the contents in their own space with a brand-related experience. It give customers the ability to view products from every angle, zoom in and out, and even try on different outfits witha 360-degree view.
            </p>
          </div>
          </div>
          </div>
          </div>


      </div>
      </div>
    </div>
  );
};

export default WebAR;
