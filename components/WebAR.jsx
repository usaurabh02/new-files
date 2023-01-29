import React from "react";
import Image from "next/image";
import AR from "../public/man2.jpg";
import Nasa from '../public/p1.jpg'

export const WebAR = () => {
  return (

    <div className="w-full h-screen  items-center ">
    <div className="text-3xl mt-10 italic ">
    <h5 className="text-center py-8 px-4 font-italic animate-pulse	 mx-auto text-black">
      
      Grab the best <span className="text-[#5b9e3c]">"WebAR"</span> solution
      for your Business
    </h5>
  </div>

      <div className="max-w-[1240px]  m-auto my-10 md:grid grid-cols-3 gap-20">
        <div class="card">
     <Image class="card" src={AR} alt="/" />
        </div>

        <div className="col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-4  place-items-start">
            What is WebXR?
          </h1>
          <p className="text-justify py-4">
            Web-based Augmented reality (AR) and Virtual reality (VR) is a simulated interactive
            experience of a real-world environment, viewable on any standard iOS
            or Android device camera. WebVR is an open specification that makes it possible to experience
            VR in your browser. The goal is to make it easier for everyone to get into VR experiences,
            no matter what device you have. Vamverse creates interactive 3D models of
            your products and integrate them in your website and allow user to
            view the contents in their own space with a brand-related
            experience. It give customers the ability to view products from
            every angle, zoom in and out, and even try on different outfits with
            a 360-degree view.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebAR;
