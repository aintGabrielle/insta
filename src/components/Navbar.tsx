import { Raleway } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Router, useRouter } from "next/router";
import { usePathname } from "next/navigation";
import path from "path";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

const raleway = Raleway({ subsets: ["latin"] });
const Navbar = () => {
  const [status, setStatus] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    {
      url: "/",
      title: "HOME",
    },
    {
      url: "about",
      title: "ABOUT US",
    },
    {
      url: "work",
      title: "WORK",
    },
    {
      url: "contact",
      title: "CONTACT US",
    },
  ];
  return (
    <nav className="w-full ">
      {/* Laptop - Larger Screen Navbar */}
      <div className="items-center justify-evenly w-full px-5  flex ">
        <div className="relative hidden md:flex md:w-20 md:h-20 items-center ">
          <Image
            src={"/logo.png"}
            className="object-cover rounded-full"
            fill
            alt="Logo"
          />
        </div>
        <div
          className={`hidden md:flex gap-3 text-lg duration-300 transition-all ease-out`}
        >
          <Link
            href={"/"}
            className={`${
              router.pathname == "/" ? "text-red-950" : "text-red-500"
            } font-semibold font-${raleway}`}
          >
            HOME
          </Link>
          <Link
            href={"about"}
            className={`${
              router.pathname == "/about" ? "text-red-950" : "text-red-500"
            } font-semibold font-${raleway}`}
          >
            ABOUT US
          </Link>
          <Link
            href={"work"}
            className={`${
              router.pathname == "/work" ? "text-red-950" : "text-red-500"
            } font-semibold font-${raleway}`}
          >
            WORK
          </Link>
          <Link
            href={"contact"}
            className={`${
              router.pathname == "/contact" ? "text-red-950" : "text-red-500"
            } font-semibold font-${raleway}`}
          >
            CONTACT US
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="w-full flex md:hidden justify-between px-4 py-3 items-center">
        <div className="relative w-20 h-20 items-center ">
          <Image
            src={"/logo.png"}
            className="object-cover rounded-full"
            fill
            alt="Logo"
          />
        </div>
        <div onClick={() => setStatus(!status)}>
          <IoMenu size={45} className="text-red-500" />
        </div>
        <div
          onClick={() => setStatus(!status)}
          className={
            status
              ? "bg-gray-800/50 w-full h-screen opacity-90 absolute top-0 left-0 z-10"
              : "hidden"
          }
        ></div>
        <div
          className={
            status
              ? "w-[50%] h-screen fixed top-0 right-0 z-20 bg-white px-2 sm:px-4 flex flex-col items-center py-5 ease-out duration-300 transition-all"
              : "w-[50%] h-screen fixed top-0 right-[-500px] z-20 bg-white flex flex-col items-center px-2 sm:px-4 py-5 ease-in duration-500 transition-all"
          }
        >
          <div className="flex flex-col w-full h-screen justify-center text-red-500 gap-3 sm:text-lg">
            {links.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                onClick={() => setStatus(!status)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div onClick={() => setStatus(!status)} className="text-red-500">
            <IoCloseSharp size={50} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
