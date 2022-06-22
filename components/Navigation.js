import Link from "next/link";
import Image from "next/image";
import mypic from "../styles/images/logo2.png";

function Navigation() {
  return (
    <div className="w-full md:max-w-4xl mx-auto flex items-center justify-between mt-0 py-3 pt-10 pb-20">
      <Link href="/">
        <a className="text-grey-900 no-underline hover:no-underline">
          <Image src={mypic} alt="Logo" height="100%" width="300px"></Image>
        </a>
      </Link>
      <nav className="flex gap-x-8 text-lg font-semibold">
        <Link href="/">
          <a className="">Doodles</a>
        </Link>
        <Link href="/about">
          <a className="">About</a>
        </Link>
        <Link href="/">
          <a className="">Dark Mode(soon)</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
