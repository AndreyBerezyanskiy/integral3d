import Link from "next/link";
import { Greeting } from "./components/Greeting";
import { RealEstate } from "./components/RealEstate";

export default function HomePage() {
  return (
    <div className="">
      <Greeting />
      <RealEstate />
    </div>
  );
}
