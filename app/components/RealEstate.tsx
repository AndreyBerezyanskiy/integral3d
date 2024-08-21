import Image from "next/image";
import { Button } from "./Button";

export const RealEstate = () => {
  return (
    <div className="py-default-y pl-default-x grid grid-cols-12 gap-x-30 text-dark-grey">
      <div className="col-span-3 flex-col gap-4 justify-center">
        <p className="text-lg">
          Intergal Group is a top property development company with more than 20 years experience. Our portfolio
          consists of more than 4.6 mln sq m of completed residential and commercial property projects. Intergal Group
          has become an ally for people who dream of owning their comfortable home or starting their own business.
        </p>
        <Button />
      </div>
      <div className="col-span-9 flex flex-col">
        <h2 className="text-8xl font-bold uppercase text-wrap">
          Quality real estate <br /> <span className="text-secondary">development in Budapest</span>
        </h2>
        <div>
          <Image className="" src="/images/table_stone.webp" alt="table stone" width={1200} height={1200} />
        </div>
      </div>
    </div>
  );
};
