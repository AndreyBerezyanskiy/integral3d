"use client";

import { IServiceSectionProps } from "@/types/types";
import { ServiceSection } from "./ServiceSection";
import { animated, useSpring, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const sections: IServiceSectionProps[] = [
  {
    id: 1,
    description:
      "Intergal Group has been a key player in the Ukrainian real estate market since 2003. Our expertise in property development spans residential, commercial, and mixed-use projects, transforming landscapes and creating vibrant communities. With a commitment to innovation and quality, we aim that every development meets the highest standards of excellence and sustainability. Discover our portfolio and experience the difference with Intergal Group.",
    header: "PROPERTY DEVELOPMENT",
    imgAlt: "service_1",
    imgSrc: "/images/service_1.webp",
  },
  {
    id: 2,
    description:
      "At Intergal Group, we understand the importance of both functionality and aesthetics in creating a comfortable living space. That's why we offer our customers four exclusive interior design options as a complimentary basic fit-out service. Each design is meticulously crafted to enhance the beauty and utility of your apartment, ensuring that your new home not only looks stunning but also meets your practical needs.",
    header: "FUNCTIONAL AND AESTHETIC FITOUT",
    imgAlt: "service_2",
    imgSrc: "/images/service_2.webp",
  },
  {
    id: 3,
    description:
      "Intergal Group offers comprehensive property management services to help investors maximize their returns. Our expert team will find a reliable contractor who handles every aspect of renting out your apartment, from marketing and tenant screening to maintenance and rent collection. We ensure your investment is well-managed, providing you with peace of mind and consistent rental income.",
    header: "PROPERTY MANAGEMENT",
    imgAlt: "service_3",
    imgSrc: "/images/service_3.webp",
  },
];

export const OurServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0%)" : "translateY(50px)",
    config: config.gentle,
  });
  return (
    <animated.div style={fadeInProps} ref={ref} className="pl-default-x">
      <h2 className="mb-8 text-dark-grey text-8xl font-bold uppercase text-wrap">
        our <span className="text-secondary">services</span>
      </h2>
      {sections.map((section) => (
        <ServiceSection
          key={section.id}
          id={section.id}
          header={section.header}
          description={section.description}
          imgAlt={section.imgAlt}
          imgSrc={section.imgSrc}
        />
      ))}
    </animated.div>
  );
};
