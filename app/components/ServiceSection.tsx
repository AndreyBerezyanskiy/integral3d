"use client";

import Image from "next/image";
import { IServiceSectionProps } from "@/types/types";

export const ServiceSection = ({ id, header, description, imgSrc, imgAlt }: IServiceSectionProps) => {
  return (
    <div className="sticky top-24">
      <div className="z-10 flex items-center bg-white">
        <div className="py-10 grid grid-cols-12 text-dark-grey border-t border-gray-300">
          <div className="col-span-4 flex">
            <span className="text-4xl text-secondary">{id}</span>/3
          </div>
          <div className="col-span-8 flex flex-col">
            <div className="mb-4 pr-default-x flex gap-16">
              <h3 className="flex-1 uppercase text-4xl">{header}</h3>
              <p className="flex-1 text-lg">{description}</p>
            </div>
            <div>
              <Image className="w-full" src={imgSrc} width={1200} height={1200} alt={imgAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
