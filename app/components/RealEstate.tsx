"use client";

import Image from "next/image";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export const RealEstate = () => {
  const [scrollY, setScrollY] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxProps = useSpring({
    transform: `translate3d(-160px, ${scrollY * 0.1}px, 0)`,
    config: config.gentle,
  });
  const fadeInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(50px)",
    config: config.gentle,
  });

  return (
    <animated.div style={fadeInProps} ref={ref} className="py-default-y pl-default-x grid grid-cols-12 text-dark-grey">
      <div className="col-span-3 flex flex-col gap-4 items-start justify-end">
        <p className="text-lg">
          Intergal Group is a top property development company with more than 20 years experience. Our portfolio
          consists of more than 4.6 mln sq m of completed residential and commercial property projects. Intergal Group
          has become an ally for people who dream of owning their comfortable home or starting their own business.
        </p>
        <Button />
      </div>
      <div className="col-start-5 col-end-13 flex flex-col gap-6">
        <h2 className="text-8xl font-bold uppercase text-wrap">
          Quality real estate <br /> <span className="text-secondary text-wrap">development in Budapest</span>
        </h2>
        <div className="relative">
          <animated.div style={parallaxProps} className="absolute">
            <Image
              src={
                "https://quadroom.fra1.cdn.digitaloceanspaces.com/intergal-group/decor1-1ca4873a-7fb1-4407-8638-86c57c680bf7.webp"
              }
              alt="defense"
              width={400}
              height={400}
            />
          </animated.div>
          <Image className="w-full" src="/images/table_stone.webp" alt="table stone" width={1200} height={1200} />
        </div>
      </div>
    </animated.div>
  );
};
