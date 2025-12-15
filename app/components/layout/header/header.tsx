"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm fixed top-0 right-0 left-0 bg-white z-50">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center ">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
   <Image
  src="/images/Desktop-Logo.png"
  alt="لوگو"
  width={120}
  height={80}
/>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-gray-700 mx-4">
          <li><Link href="#features">صفحه اصلی</Link></li>
          <li><Link href="#about">درباره هم خوان</Link></li>
         
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}
