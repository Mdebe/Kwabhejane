"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaIndustry,
  FaMountain,
  FaTruck,
} from "react-icons/fa";

const slides = [
  {
    image: "/images/quarry1.jpg",
    title: "Building South Africa's Future",
    subtitle: "Premium Quarry & Aggregate Solutions",
  },
  {
    image: "/images/quarry2.jpg",
    title: "Crushing Rocks Into Stones",
    subtitle: "Building Communities Through Quality Materials",
  },
  {
    image: "/images/quarry3.jpg",
    title: "Trusted Infrastructure Partner",
    subtitle: "Supplying Roads, Mining & Construction Projects",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-8rem)] w-full overflow-hidden bg-[#0b0b0b]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration- ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
        </div>
      ))}

      <div className="relative z-20 flex min-h-[calc(100svh-7rem)] lg:min-h-[calc(100svh-8rem)] items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-12">
          <div className="max-w-3xl text-center lg:text-left">
            {/* BADGE */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text- font-semibold uppercase tracking-widest text-yellow-400 backdrop-blur-md sm:text-xs">
                <FaIndustry className="shrink-0" />
                KwaZulu-Natal&apos;s Trusted Quarry Partner
              </span>
            </div>

            {/* HEADING - FIXED SIZE */}
            <h1 className="mt-6 font-black tracking-tight text-white">
              <span className="block text- leading-[1.1] sm:text-4xl md:text- lg:text- xl:text-">
                {slides[current].title}
              </span>
              <span className="mt-3 block text- font-bold leading-[1.25] text-yellow-400 sm:text-xl md:text- lg:text-">
                {slides[current].subtitle}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-5 max-w-2xl text- leading-6 text-gray-300 sm:text- sm:leading-7 lg:mx-0 lg:text-">
              Kwabhejane Bricks & Quarry supplies premium aggregates, crushed stone, G1–G7 materials, railway ballast, gabion stone, rip rap rock and construction materials supporting mining, infrastructure, industrial and civil engineering projects throughout KwaZulu-Natal.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center lg:justify-start sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-7 py-3.5 text- font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-"
              >
                Request Quote
                <FaArrowRight className="text-sm" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text- font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:px-8 sm:py-4 sm:text-"
              >
                View Products
              </Link>
            </div>

            {/* STATISTICS */}
            <div className="mx-auto mt-9 grid max-w-2xl grid-cols-3 gap-3 sm:mt-10 sm:gap-6 lg:mx-0 lg:mt-12 lg:gap-10">
              <div className="border-l border-yellow-500/40 pl-3 sm:pl-5">
                <h2 className="text-xl font-black text-yellow-400 sm:text-2xl lg:text-3xl">60+</h2>
                <p className="mt-1 text- leading-tight text-gray-300 sm:text-xs">Employment Opportunities</p>
              </div>
              <div className="border-l border-yellow-500/40 pl-3 sm:pl-5">
                <h2 className="text-xl font-black text-yellow-400 sm:text-2xl lg:text-3xl">20+</h2>
                <p className="mt-1 text- leading-tight text-gray-300 sm:text-xs">Aggregate Products</p>
              </div>
              <div className="border-l border-yellow-500/40 pl-3 sm:pl-5">
                <h2 className="text-xl font-black text-yellow-400 sm:text-2xl lg:text-3xl">100%</h2>
                <p className="mt-1 text- leading-tight text-gray-300 sm:text-xs">Quality Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP FLOATING CARD - hidden below 2xl */}
      <div className="absolute bottom-20 right-6 z-20 hidden 2xl:block xl:right-10">
        <div className="w- rounded-3xl border border-yellow-500/20 bg-[#111111]/85 p-6 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white">Why Choose KBBQ?</h3>
          <div className="mt-6 space-y-5">
            <div className="flex gap-4">
              <FaMountain className="mt-1 shrink-0 text-xl text-yellow-400" />
              <div>
                <h4 className="text- font-semibold text-white">Premium Aggregates</h4>
                <p className="mt-1 text- leading-5 text-gray-400">G1–G7, crusher dust, ballast, gabion stone, rip rap and road base.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaTruck className="mt-1 shrink-0 text-xl text-yellow-400" />
              <div>
                <h4 className="text- font-semibold text-white">Bulk Supply</h4>
                <p className="mt-1 text- leading-5 text-gray-400">Reliable transportation and deliveries across KZN.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaIndustry className="mt-1 shrink-0 text-xl text-yellow-400" />
              <div>
                <h4 className="text- font-semibold text-white">Community Driven</h4>
                <p className="mt-1 text- leading-5 text-gray-400">Creating jobs and supporting infrastructure development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER NAV */}
      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 sm:bottom-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? "w-8 bg-yellow-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" />
    </section>
  );
}