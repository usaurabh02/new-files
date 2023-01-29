import React from "react";
import Image from "next/image";
import filter from "../public/filter.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";


export const Filter = () => {
  return (
    <div className="w-full h-screen">
    <div className="text-3xl mt-10 italic ">
    <h5 className="text-center py-8 px-4 font-italic animate-pulse	 mx-auto text-black">
      
    Build The Next Generation of
    <span className="text-[#00df9a] px-2 ">AR</span>
    </h5>
  </div>
      <div className={"max-w-[1240px] mx-auto my-6"}>
        <p
          className={
            "max-w-[1220px] mx-auto text-black font-semibold text-justify px-4"
          }
        >
          Instagram, Facebook, and Snapchat are best known for their lenses and
          AR filters. A growing number of users interact with filters daily.
          Companies are investing millions of dollars in marketing in such a
          platform. To keep up with this rapid evolution of marketing, we help
          brands and businesses to reach more customers and provide better user
          experiences
        </p>

        <div
          className={
            "w-fit px-7 pt-3 flex flex-col md:flex-row justify-center my-10 gap-12 col-span-5 "
          }
        >
          <Image src={filter} alt="/" class="rounded-lg w-[300px] object-contain" />

        <div className={" max-w-[600px] mx-auto my-2  flex flex-wrap gap-2 "}>
        <div className="max-w-[100%] m-auto mt-16">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          pagination={false}
          loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
        <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden col-span-5  shadow-lg mx-auto my-8">

          <div class="px-6 py-2">
            <div class="font-bold text-xl mb-2">Utility AR filter</div>
              <p class="text-black text-base">
              Build AR experiences that solve problems like virtual try-on.
              </p>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              #product-display
                </span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              #product-try-on
                </span>
                <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
              #teaching
                </span>
            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden col-span-5  shadow-lg mx-auto my-8">

                  <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">Shopping Filter</div>
                      <p class="text-black text-base">
                      Build AR for shopping, fashion, and beauty.
                      </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #clothing
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #jewelry
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #branding
                        </span>
                    </div>
                  </div>
          </SwiperSlide>

          <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden col-span-5  shadow-lg mx-auto my-8">
                  <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">Entertainment filter</div>
                      <p class="text-black text-base">Build AR for art, music, film, and culture.
                      
                      </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #dance
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #music
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #artstudio
                        </span>
                    </div>
                  </div>
          </SwiperSlide>

          <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden col-span-5  shadow-lg mx-auto my-8">

                  <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">Self-Expression Lenses</div>
                      <p class="text-black text-base">
                      Build AR for more creative communication.
                      </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #photography
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #travel
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #selfie
                        </span>
                    </div>
                  </div>
          </SwiperSlide>

          <SwiperSlide>

        <div class="max-w-sm rounded overflow-hidden col-span-5  shadow-lg mx-auto my-8">

                  <div class="px-6 py-2">
                    <div class="font-bold text-xl mb-2">Education Lenses</div>
                      <p class="text-black text-base">
                      We built AR filters and lenses for events, marketing, campaigns, and functions.
                      </p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #learning
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                      #promotions
                        </span>
                        <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                      #events
                        </span>
                    </div>
                  </div>
          </SwiperSlide>
          </Swiper>

          
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Filter;
