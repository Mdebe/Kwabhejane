"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const phoneNumber = "27688379780";

  const handleWhatsAppQuote = () => {
    const message =
      "Hello, I would like to request a quotation from Kwabhejane Bricks & Quarry.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex min-h-28 max-w- items-center justify-between px-6 lg:min-h-32 lg:px-10">
        {/* LOGO - BIG SIZE RETURNED */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center mr-8 lg:mr-10"
        >
          <Image
            src="/logo.png"
            alt="Kwabhejane Bricks & Quarry"
            width={600}
            height={220}
            priority
            className="h-20 w-auto max-w- object-contain transition-transform duration-300 hover:scale-105 sm:h-24 sm:max-w- md:h-28 lg:h-32 lg:max-w- xl:h-36"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center ml-auto gap-7 xl:gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text- font-semibold tracking-wide text-gray-900 transition-colors hover:text-[#c77900] xl:text-"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h- w-0 bg-[#c77900] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <button
            type="button"
            onClick={handleWhatsAppQuote}
            className="ml-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 xl:px-7"
          >
            <FaWhatsapp size={21} className="text-yellow-400" />
            Request Quote
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900 text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          mobileMenuOpen? "max-h- opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMobileMenu}
              className="rounded-xl px-4 py-3 text- font-medium text-gray-800 hover:bg-gray-50 hover:text-[#c77900]"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              handleWhatsAppQuote();
              closeMobileMenu();
            }}
            className="mt-4 flex items-center justify-center gap-3 rounded-full bg-[#111111] py-4 font-bold text-white"
          >
            <FaWhatsapp size={21} className="text-yellow-400" />
            Request Quote
          </button>
        </nav>
      </div>
    </header>
  );
}