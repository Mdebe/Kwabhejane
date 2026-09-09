"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    title: ["Quarry", "Extraction"],
    desc: "Safe and controlled extraction of granite rock, blue stone and quarry rock in KwaBhejane, Nseleni.",
    img: "/images/quarry-about.jpg",
  },
  {
    title: ["Crushing &", "Screening"],
    desc: "Primary and secondary crushing to produce G1-G7, 37mm, 26mm, 19mm, 13.2mm and 9.5mm aggregates.",
    img: "/images/quarry1.jpg",
  },
  {
    title: ["Aggregate", "Supply"],
    desc: "Reliable supply of G1-G7, crusher dust, quarry sand, gabion stone, rip rap, ballast and road base.",
    img: "/images/quarry2.jpg",
  },
  {
    title: ["Bulk Material", "Supply"],
    desc: "Bulk supply, material loading and coordinated delivery for roads, mining and infrastructure projects.",
    img: "/images/quarry3.jpg",
  },
];

function ServiceCard({ service }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleMouseMove(e) {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const primary = "#c77900";
  const accent = "#ffd000";
  const secondary = "#6b7280";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isDesktop? { rotateX, rotateY } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      className="group relative h-full"
    >
      <div
        className="absolute -inset-0.5 rounded- opacity-0 blur-xl transition duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${primary}, ${accent})`,
        }}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded- bg-white border border-gray-100 shadow-xl">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={service.img}
            alt={service.title.join(" ")}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-7 text-center sm:text-left">
          <h4 className="text-2xl font-bold leading-tight">
            <span style={{ color: primary }}>{service.title[0]}</span>{" "}
            <span style={{ color: accent }}>{service.title[1]}</span>
          </h4>

          <p className="mt-3 flex-1 text- leading-6" style={{ color: secondary }}>
            {service.desc}
          </p>

          <div
            className="mt-6 h-1 w-10 rounded-full transition-all duration-500 group-hover:w-16"
            style={{
              background: `linear-gradient(90deg, ${primary}, ${accent})`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const primary = "#c77900";
  const secondary = "#6b7280";

  return (
    <section id="services" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c77900]">
            What We Do
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-black sm:text-5xl lg:text-6xl">
            Our <span style={{ color: primary }}>Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg" style={{ color: secondary }}>
            KBBQ specializes in extraction, crushing, screening and supply of aggregate materials for construction, civil engineering, mining and infrastructure projects in KZN.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-7 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title.join(" ")} service={service} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl rounded-2xl bg-[#111111] px-6 py-5 text-center">
          <p className="text-sm font-semibold text-gray-300">
            <span className="text-yellow-400">7-Step Process:</span> Resource Identification → Extraction → Crushing → Screening → Quality Control → Stockpiling → Delivery
          </p>
        </div>
      </div>
    </section>
  );
}