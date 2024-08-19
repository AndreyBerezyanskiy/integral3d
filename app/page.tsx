import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
      <h1>This is home page</h1>
      <Link href={"/scene"}>Go to 3d scene</Link>
    </div>
  );
}
