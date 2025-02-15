import Link from "next/link";
import { Greeting } from "./components/Greeting";
import { RealEstate } from "./components/RealEstate";
import { OurServices } from "./components/OurServices";
import { ForeignProject } from "./components/ForeignProject";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-36">
      <Greeting />
      <RealEstate />
      <OurServices />
      <ForeignProject />
    </div>
  );
}
