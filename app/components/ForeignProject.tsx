"use client";

import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Slide } from "./Slide";

export const ForeignProject = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(50px)",
    config: config.gentle,
  });

  const swiperRef = useRef<any>(null);

  return (
    <animated.div style={fadeInProps} ref={ref} className="py-default-y pl-default-x grid grid-cols-12 text-dark-grey">
      <div className="col-span-3 flex flex-col gap-4 items-start justify-end">
        <div className="flex gap-8">
          <button
            className="transition-colors duration-200 group"
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <span className="sr-only">Prev</span>
            <svg
              className="fill-current text-gray-700 transition-colors duration-200 group-hover:text-red-500"
              height="35"
              viewBox="0 0 53 35"
              width="53"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.85032 19.625L52.8848 19.625L52.8848 15.625L7.85032 15.625L20.521 3.44165L17.7485 0.558321L-0.000781267 17.625L17.7485 34.6916L20.521 31.8083L7.85032 19.625Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            className="transition-colors duration-200 group"
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <span className="sr-only">Next</span>
            <svg
              className="fill-current text-gray-700 transition-colors duration-200 group-hover:text-red-500"
              height="35"
              viewBox="0 0 53 35"
              width="53"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M45.0344 19.625L-6.58585e-07 19.625L-8.3343e-07 15.625L45.0344 15.625L32.3638 3.44165L35.1362 0.558321L52.8855 17.625L35.1362 34.6916L32.3638 31.8083L45.0344 19.625Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <p className="text-lg">
          Intergal Group is a top property development company with more than 20 years experience. Our portfolio
          consists of more than 4.6 mln sq m of completed residential and commercial property projects. Intergal Group
          has become an ally for people who dream of owning their comfortable home or starting their own business.
        </p>
        <Button />
      </div>
      <div className="col-start-5 col-end-13 flex flex-col gap-6">
        <h2 className="text-8xl font-bold uppercase text-wrap">
          Foreign <br /> <span className="text-secondary text-wrap">projects</span>
        </h2>
        <div className="relative">
          <Swiper
            slidesPerView={2}
            loop
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
            <SwiperSlide>
              <Slide city="Holosiivskiy" imgAlt="city 1" imgSrc="/images/slide_1.webp" flatQuantity={344} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide city="Intargal city" imgAlt="city 1" imgSrc="/images/slide_2.webp" flatQuantity={222} />
            </SwiperSlide>
            <SwiperSlide>
              <Slide city="sky avenue" imgAlt="city 1" imgSrc="/images/slide_3.webp" flatQuantity={456} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </animated.div>
  );
};
