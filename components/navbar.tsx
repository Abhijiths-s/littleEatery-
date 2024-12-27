"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-gray-200 bg-white relative z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto py-6 px-4 md:py-10">
        {/* Logo and Restaurant Name */}
        <div className="flex items-center font-poppins font-bold text-xl md:text-[26px] relative px-8 md:p-0 md:ml-0 ml-6">
          <div className="absolute left-[-20px] md:left-[-50px] -top-[13px]">
            <Image
              src="/images/logo 2.png"
              alt="Logo"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
          <div>The Little Eatery</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-[17.5px] font-inter">
          <Link href="/" className="hover:text-[#EA6D27]">
            About
          </Link>
          <Link href="/" className="hover:text-[#EA6D27]">
            Gallery
          </Link>
          <Link href="/" className="hover:text-[#EA6D27]">
            Delivery
          </Link>
          <Link href="/" className="hover:text-[#EA6D27]">
            Contact
          </Link>
        </div>

        {/* Desktop Menu Button */}
        <button className="hidden md:block">
          <div className="w-[117px] h-[45px] bg-[#EA6D27] rounded-tl-lg rounded-br-lg text-white font-davidLibre flex items-center justify-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg">
            MENU
          </div>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 ml-auto"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col items-center py-4 space-y-4 font-inter">
            <Link href="/" className="hover:text-[#EA6D27]">
              About
            </Link>
            <Link href="/" className="hover:text-[#EA6D27]">
              Gallery
            </Link>
            <Link href="/" className="hover:text-[#EA6D27]">
              Delivery
            </Link>
            <Link href="/" className="hover:text-[#EA6D27]">
              Contact
            </Link>
            <button className="w-[117px] h-[45px] bg-[#EA6D27] rounded-tl-lg rounded-br-lg text-white font-davidLibre flex items-center justify-center text-[15.5px] hover:bg-[#df631b] drop-shadow-lg">
              MENU
            </button>
          </div>
        </div>
      )}

      {/* Background Circles */}
      <div className="absolute -z-20 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[353.58px] -left-[399.69px]"></div>
      <div
        className="absolute h-[750px] w-[750px] border border-[#101A2433] rounded-full -z-20 -top-[316.35px] -left-[483px]"
        style={{ transform: "rotate(17.41deg)" }}
      ></div>
      <div className="absolute -z-20 h-[750px] w-[750px] border border-[#101A2433] rounded-full -top-[326.58px] -left-[368.69px]"></div>
    </nav>
  );
};

export default Navbar;
