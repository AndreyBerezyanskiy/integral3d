"use client";

import { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useNavStore } from "../store/store";
import Link from "next/link";

export const Greeting = () => {
  const [loading, setLoading] = useState(true);
  const { setNavVisible } = useNavStore();
  const DELAY = 0;

  const backgroundLeftAnimation = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: loading ? "translateX(0%)" : "translateX(-100%)" },
    config: { tension: 210, friction: 20 },
    onRest: () => {
      if (!loading) {
        setNavVisible(true);
      }
    },
  });
  const backgroundRightAnimation = useSpring({
    from: { transform: "translateX(0%)" },
    to: { transform: loading ? "translateX(0%)" : "translateX(100%)" },
    config: { tension: 210, friction: 20 },
  });
  const textLeftAnimation = useSpring({
    from: { transform: "translateX(30%)" },
    to: { transform: loading ? "translateX(30%)" : "translateX(0%)" },
    config: { tension: 210, friction: 20 },
  });
  const textRightAnimation = useSpring({
    from: { transform: "translateX(-30%)" },
    to: { transform: loading ? "translateX(-30%)" : "translateX(0%)" },
    config: { tension: 210, friction: 20 },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen py-default-y px-default-x flex flex-col items-stretch justify-between overflow-hidden">
      <animated.div
        style={backgroundLeftAnimation}
        className="absolute top-0 bottom-0 left-0 h-screen bg-red-600 z-20 w-1/2"
      />
      <animated.div
        style={backgroundRightAnimation}
        className="absolute top-0 bottom-0 right-0 h-screen bg-red-600 z-20 w-1/2"
      />
      <video muted autoPlay loop className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-75">
        <source
          src="https://quadroom.fra1.cdn.digitaloceanspaces.com/intergal-group/-8d34-4c43-8afd-d06411a3113e-26ce5f20-283e-4f8a-89fa-ca89f5a22485.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="">Just for align items</div>
      <div className="relative z-30 w-full  flex flex-col  text-white text-9xl uppercase font-bold">
        <animated.p style={textLeftAnimation}>Hometown</animated.p>
        <animated.p style={textRightAnimation} className="self-end">
          Builders
        </animated.p>
      </div>
      <div className="relative z-1 pt-4  flex justify-between items-center border-t border-gray-400">
        <p className="font-bold text-xl w-1/3">
          Choose an ideal home from a reliable developer with the best commercial conditions
        </p>
        <Link
          href={"/"}
          className="py-2 px-5 bg-gray-100 text-black hover:text-white hover:bg-dark-grey transition-colors duration-300"
        >
          See our projects &rarr;
        </Link>
      </div>
    </div>
  );
};
