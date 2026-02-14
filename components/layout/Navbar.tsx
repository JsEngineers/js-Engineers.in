"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IMAGES } from "../../assets/images";
import { COMPANY } from "../../constants/company";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappLink = `https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`;


  // Scroll detection
  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/10 backdrop-blur-md border-b border-white/20"
      }`}
    >

      <div className="container-custom flex items-center justify-between h-16">


        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          {/* FIXED LOGO SIZE */}
          <div className="relative w-30 h-30 md:w-30 md:h-30">

            <Image
              src={IMAGES.LOGO_PRIMARY}
              alt={COMPANY.name}
              fill
              className="object-contain"
              priority
            />

          </div>


          {/* Company Name */}
          <span
            className={`font-semibold text-base transition-colors
            ${isScrolled ? "text-gray-800" : "text-white"}`}
          >
            {COMPANY.name}
          </span>

        </Link>



        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => {

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-500"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {link.name}
              </Link>
            );

          })}



          {/* WhatsApp CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-5 py-2 rounded-lg shadow-md transition"
          >
            WhatsApp
          </a>


        </nav>



        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl transition-colors
          ${isScrolled ? "text-gray-800" : "text-white"}`}
        >
          {isOpen ? "✕" : "☰"}
        </button>


      </div>



      {/* Mobile Menu */}
      {isOpen && (

        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">

          <div className="container-custom flex flex-col py-4 gap-4">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </Link>

            ))}


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-center px-4 py-2 rounded-lg"
            >
              WhatsApp
            </a>

          </div>

        </div>

      )}

    </header>
  );

}
