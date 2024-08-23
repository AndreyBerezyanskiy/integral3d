import Image from "next/image";

interface ISlide {
  city: string;
  imgSrc: string;
  imgAlt: string;
  flatQuantity: number;
}

export const Slide = ({ city, imgSrc, imgAlt, flatQuantity }: ISlide) => {
  return (
    <div className="px-default-x flex flex-col gap-4 text-4xl text-dark-grey border-l border-gray-300">
      <div className="relative h-72 w-full overflow-hidden">
        <span className="absolute top-2 left-2 z-10 py-1 px-2 text-xs text-white uppercase font-bold bg-secondary">
          {flatQuantity} appartments
        </span>
        <Image
          className="hover:scale-110 transition-transform duration-200 object-cover"
          src={imgSrc}
          layout="fill"
          alt={imgAlt}
        />
      </div>
      <h3 className="tex-4xl uppercase">{city}</h3>
    </div>
  );
};
