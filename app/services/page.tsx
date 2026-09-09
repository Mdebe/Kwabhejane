"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaMountain, FaIndustry, FaTruck, FaCogs, FaLeaf, FaHardHat, FaCube } from "react-icons/fa";

const services = [
  {
    icon: <FaMountain />,
    title: "Quarry Extraction",
    desc: "Safe and controlled extraction of granite rock, blue stone and quarry rock in KwaBhejane, Nseleni using modern drilling and blasting methods.",
    img: "/images/quarry1.jpg",
    points: ["Geological assessment", "Drilling & blasting", "Safety compliance"],
  },
  {
    icon: <FaCogs />,
    title: "Crushing & Screening",
    desc: "Primary and secondary crushing to produce G1-G7, 37mm, 26mm, 19mm, 13.2mm and 9.5mm aggregates with precise screening.",
    img: "/images/quarry2.jpg",
    points: ["Primary crushing", "Secondary crushing", "Grade screening"],
  },
  {
    icon: <FaCube />,
    title: "Aggregate Supply",
    desc: "Reliable supply of G1-G7, crusher dust, quarry sand, gabion stone, rip rap, armour rock, ballast and road base materials.",
    img: "/images/quarry3.jpg",
    points: ["SANS compliant", "Lab tested", "Consistent quality"],
  },
  {
    icon: <FaTruck />,
    title: "Bulk Material Supply & Delivery",
    desc: "Bulk supply, material loading and coordinated delivery for roads, mining and infrastructure projects across KZN.",
    img: "/images/quarry1.jpg",
    points: ["Fleet coordination", "On-time delivery", "Bulk discounts"],
  },
  {
    icon: <FaHardHat />,
    title: "Mining & Civil Support",
    desc: "Material supply for Richards Bay mining operations, industrial developments, logistics hubs and municipal infrastructure.",
    img: "/images/quarry2.jpg",
    points: ["Mining supply", "Road construction", "Infrastructure"],
  },
  {
    icon: <FaLeaf />,
    title: "Environmental Management",
    desc: "Environmental responsibility including dust suppression, water management, rehabilitation planning and regulatory compliance.",
    img: "/images/quarry3.jpg",
    points: ["Dust suppression", "Rehabilitation", "DMRE compliance"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative flex h- items-center justify-center bg-[#0b0b0b] px-6 text-center">
          <div className="absolute inset-0 opacity-30">
            <Image src="/images/quarry2.jpg" alt="Services" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500" />
          <div className="relative max-w-3xl text-white">
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              What We Do
            </span>
            <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">
              Extraction, crushing, screening and supply of premium aggregates for construction, civil engineering, mining and infrastructure projects in KwaZulu-Natal.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded- border border-gray-100 bg-white shadow-sm hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-yellow-400">
                    {service.icon}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-black text-gray-900">{service.title}</h3>
                  <p className="mt-3 text- leading-6 text-gray-600">{service.desc}</p>
                  <div className="mt-4 space-y-2">
                    {service.points.map((p) => (
                      <p key={p} className="flex items-center gap-2 text-xs text-gray-500">
                        <FaCheckCircle className="text-[#c77900]" /> {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7-STEP PROCESS */}
        <section className="bg-gray-50 px-5 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-black sm:text-4xl">Our <span className="text-[#c77900]">7-Step Process</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">Quality and safety at every stage from resource to delivery</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {[
                { step: "01", name: "Resource Identification" },
                { step: "02", name: "Extraction" },
                { step: "03", name: "Crushing" },
                { step: "04", name: "Screening" },
                { step: "05", name: "Quality Control" },
                { step: "06", name: "Stockpiling" },
                { step: "07", name: "Delivery" },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-black tracking-widest text-[#c77900]">{s.step}</p>
                  <p className="mt-2 text-sm font-bold text-gray-900">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded- bg-[#111111] p-8">
              <FaIndustry className="text-2xl text-yellow-400" />
              <h3 className="mt-4 text-lg font-bold text-white">Richards Bay Industrial Hub</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">Located in one of SA&apos;s fastest-growing industrial hubs driven by mining, construction, manufacturing, logistics and port activities.</p>
            </div>
            <div className="rounded- border border-gray-100 bg-white p-8 shadow-sm">
              <FaMountain className="text-2xl text-[#c77900]" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">Quality Assurance</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">SANS specifications, lab testing, advanced equipment and skilled personnel ensure superior products.</p>
            </div>
            <div className="rounded- border border-gray-100 bg-white p-8 shadow-sm">
              <FaTruck className="text-2xl text-[#c77900]" />
              <h3 className="mt-4 text-lg font-bold text-gray-900">60+ Community Jobs</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">Creating sustainable employment for Nseleni and surrounding communities while supporting infrastructure development.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111111] px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Need Quarry Materials in KZN?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Contact KBBQ today for G1-G7, crusher dust, gabion stone, rip rap and bulk aggregates delivered to your site.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black hover:bg-gray-100">Request a Quote</Link>
            <Link href="/products" className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-bold text-white hover:bg-white hover:text-black">View Products</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}