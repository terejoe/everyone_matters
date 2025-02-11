"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <>
      <div className="flex justify-between lg:px-40 px-6 py-3 bg-[#FAFAFA]">
        {/* <Link href="/"><Image src={devendLogo} alt='Logo of Devend'/></Link> */}
        <div className="hidden md:flex space-x-10 text-sm font-normal py-4 text-[#111111]">
          <Link href="/" className={`${pathname === "/" ? "underline underline-offset-8 decoration-[#2E2878]" : "no-underline"}`}>Home</Link>
          <Link href="/about" className={`${pathname === "/about" ? "underline underline-offset-8 decoration-[#2E2878]" : "no-underline"}`}>About Us</Link>
          <Link href="/whatwedo" className={`${pathname === "/whatwedo" ? "underline underline-offset-8 decoration-[#2E2878]" : "no-underline"}`}>What We Do</Link>
          <Link href="/getinvolved" className={`${pathname === "/getinvolved" ? "underline underline-offset-8 decoration-[#2E2878]" : "no-underline"}`}>Get Involved</Link>
        </div>

        <div className="">
            <button className='px-8 py-3 text-white bg-[#2E2878] text-sm'>
              Join Our Community
            </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <div
            onClick={handleClick}
            className="md:hidden relative cursor-pointer z-50"
          >
            {!nav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#111111"
                width={40}
                height={40}
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width={40}
                height={40}
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            )}
          </div>

          {/* Mobile Menu Items */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#2E2878] flex flex-col justify-center items-center text-white z-10"
            }
          >
            <li className="py-4 text-2xl">
              <Link href="/" onClick={handleClick}>Home</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/about" onClick={handleClick}>About Us</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/whatwedo" onClick={handleClick}>What We Do</Link>
            </li>

            <li className="py-4 text-2xl">
              <Link href="/getinvolved" onClick={handleClick}>Get Involved</Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );

}


