"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaCheckCircle, FaMountain, FaUsers, FaRoad, FaAward } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-900">
        {/* HERO - White corporate like homepage */}
        <section className="relative overflow-hidden bg-[#0b0b0b] py-20 sm:py-28">
          <div className="absolute inset-0 opacity-40">
            <Image src="/images/quarry1.jpg" alt="Quarry" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                KwaBhejane • Nseleni • Richards Bay
              </span>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                About <span className="text-yellow-400">Kwabhejane Bricks & Quarry</span>
              </h1>
              <p className="mt-5 text- leading-7 text-gray-300 sm:text-lg">
                A proudly South African quarrying and aggregate production company strategically located between Richards Bay and Empangeni — driving infrastructure, mining, construction and community empowerment in KwaZulu-Natal.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h- overflow-hidden rounded-"
            >
              <Image src="/images/quarry1.jpg" alt="Kwabhejane Quarry" fill className="object-cover" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Strategic Location</p>
                <p className="mt-1 text-sm font-bold text-gray-900">Between Richards Bay & Empangeni</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                More Than a Quarry — <span className="text-[#c77900]">A Community Development Initiative</span>
              </h2>
              <p className="mt-5 text- leading-7 text-gray-600">
                The Richards Bay region is one of South Africa&apos;s fastest-growing industrial hubs driven by mining, construction, manufacturing, logistics and port activities. KBBQ was established to meet this demand with high-quality aggregates while creating meaningful socio-economic benefits.
              </p>
              <p className="mt-4 text- leading-7 text-gray-600">
                At KBBQ, quality is the measure of success. We deliver superior products at competitive prices while maintaining the highest standards of safety, environmental responsibility and customer satisfaction.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <FaUsers className="mt-1 text-[#c77900]" />
                  <div><p className="text-sm font-bold">60+ Jobs</p><p className="text-xs text-gray-500">Direct employment</p></div>
                </div>
                <div className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <FaMountain className="mt-1 text-[#c77900]" />
                  <div><p className="text-sm font-bold">20+ Products</p><p className="text-xs text-gray-500">G1-G7, ballast, gabion</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="bg-gray-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded- bg-[#111111] p-8 sm:p-10">
                <h3 className="text-2xl font-black text-white">Our Vision</h3>
                <p className="mt-4 text- leading-7 text-gray-300">
                  To become the leading community-driven quarry and aggregate supplier in South Africa, recognized for quality products, operational excellence and meaningful community development.
                </p>
                <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
              </div>
              <div className="rounded- border border-gray-200 bg-white p-8 sm:p-10">
                <h3 className="text-2xl font-black text-gray-900">Our Mission</h3>
                <ul className="mt-5 space-y-3 text- leading-6 text-gray-600">
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Produce high-quality aggregates at competitive prices</li>
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Create sustainable employment for local communities</li>
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Support infrastructure development across KZN</li>
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Maintain environmentally responsible mining practices</li>
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Empower communities through education & skills development</li>
                  <li className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-[#c77900]" /> Build partnerships with clients, government & traditional leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="text-center text-3xl font-black sm:text-4xl">Our <span className="text-[#c77900]">7-Step Process</span></h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600">Strict quality and safety standards from identification to delivery</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {[
              { n: "01", t: "Resource Identification", d: "Geological assessment" },
              { n: "02", t: "Extraction", d: "Safe controlled extraction" },
              { n: "03", t: "Crushing", d: "Primary & secondary" },
              { n: "04", t: "Screening", d: "Grade separation" },
              { n: "05", t: "Quality Control", d: "Lab testing" },
              { n: "06", t: "Stockpiling", d: "Safe storage" },
              { n: "07", t: "Delivery", d: "Coordinated logistics" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="text-xs font-black tracking-widest text-[#c77900]">{s.n}</p>
                <p className="mt-2 text-sm font-bold text-gray-900">{s.t}</p>
                <p className="mt-1 text-xs text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GOALS & CTA */}
        <section className="bg-gray-50 px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
            <div className="rounded- bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-[#c77900]">Short-Term Goals</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Fully operational quarry</li>
                <li>• 60 direct employment opportunities</li>
                <li>• Long-term supply agreements</li>
                <li>• Stakeholder relationships</li>
              </ul>
            </div>
            <div className="rounded- bg-white p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-widest text-[#c77900]">Medium-Term Goals</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Increase production capacity</li>
                <li>• Expand across KwaZulu-Natal</li>
                <li>• Advanced quarry technologies</li>
                <li>• Supplier development programs</li>
              </ul>
            </div>
            <div className="rounded- bg-[#111111] p-7">
              <p className="text-xs font-black uppercase tracking-widest text-yellow-400">Long-Term Goals</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>• Leading aggregate supplier in SA</li>
                <li>• Multiple quarry operations</li>
                <li>• Diversify mining materials</li>
                <li>• Recognized industry leader</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded- bg-gradient-to-r from-[#111111] to-black p-8 text-center sm:p-12">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Building Roads, Communities & Futures</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400">
              Kwabhejane Bricks & Quarry is committed to transforming natural resources into lasting value for clients, communities and stakeholders.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link href="/contact" className="rounded-full bg-white px-7 py-3 text-sm font-bold text-black hover:bg-gray-100">
                Request Quote
              </Link>
              <a href="/Kwabhejane-Business-Profile.pdf" download className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white hover:bg-white hover:text-black">
                Download Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}