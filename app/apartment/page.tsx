import Image from "next/image";

export default function EmptyPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <Image className="w-full h-full object-cover" src="/images/under-construction.webp" width={800} height={800} alt="page under construction" />
    </div>
  );
}