import Link from "next/link";

export const Button = ({}) => {
  return (
    <Link
      href={"/"}
      className="py-3 px-5 bg-secondary hover:bg-dark-grey hover:text-white transition-colors duration-200"
    >
      Requested a call &rarr;
    </Link>
  );
};
