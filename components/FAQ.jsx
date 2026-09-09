"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaTruck, FaWhatsapp, FaRulerCombined } from "react-icons/fa";

const materials = [
  { id: "G5", name: "G5 Material", density: 1.9, use: "Road base" },
  { id: "G7", name: "G7 Material", density: 1.8, use: "Sub-base" },
  { id: "19mm", name: "19mm Aggregate", density: 1.5, use: "Concrete" },
  { id: "13mm", name: "13.2mm Aggregate", density: 1.45, use: "Concrete" },
  { id: "crusher", name: "Crusher Dust", density: 1.7, use: "Bedding" },
  { id: "ballast", name: "Railway Ballast", density: 1.6, use: "Rail / Drainage" },
  { id: "gabion", name: "Gabion Stone", density: 1.55, use: "Retaining walls" },
  { id: "riprap", name: "Rip Rap / Armour", density: 1.65, use: "Erosion control" },
];

export default function MaterialCalculator() {
  const [materialId, setMaterialId] = useState("G5");
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(6);
  const [thickness, setThickness] = useState(0.15);

  const material = materials.find((m) => m.id === materialId);
  const volume = length * width * thickness;
  const tons = volume * material.density;

  const phoneNumber = "27688379780";

  const handleQuote = () => {
    const msg = `Hello KBBQ, I need a quote:\nMaterial: ${material.name}\nSize: ${length}m x ${width}m x ${thickness}m\nVolume: ${volume.toFixed(2)} m³\nEst. Tons: ${tons.toFixed(2)} tons\nLocation: KwaBhejane, Nseleni area`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-28">
      {/* deco */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT - INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c77900]">
              Instant Estimator
            </span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
              How Much Material <span className="text-[#c77900]">Do You Need?</span>
            </h2>
            <p className="mt-4 text- leading-7 text-gray-600 sm:text-base">
              Don't guess. Calculate G1-G7, 19mm, crusher dust, gabion stone, ballast and rip rap in m³ and tons for roads, foundations, and civil projects. Used by contractors across Richards Bay & Empangeni.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <FaRulerCombined className="text-[#c77900]" />
                <p className="mt-3 text-sm font-bold text-gray-900">SANS Compliant</p>
                <p className="text-xs text-gray-500">Quality tested aggregates</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <FaTruck className="text-[#c77900]" />
                <p className="mt-3 text-sm font-bold text-gray-900">Bulk Delivery</p>
                <p className="text-xs text-gray-500">Across KZN</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <FaCalculator className="text-[#c77900]" />
                <p className="mt-3 text-sm font-bold text-gray-900">60+ Jobs</p>
                <p className="text-xs text-gray-500">Community driven</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#111111] px-6 py-5">
              <p className="text-sm font-semibold text-white">
                KBBQ Process: <span className="font-normal text-gray-400">Identification → Extraction → Crushing → Screening → QC → Stockpiling → Delivery</span>
              </p>
            </div>
          </motion.div>

          {/* RIGHT - CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded- border border-gray-100 bg-white p-6 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.2)] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-[#c77900]">
                <FaCalculator />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Material Calculator</h3>
            </div>

            {/* Material Select */}
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Material</label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-2">
                {materials.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMaterialId(m.id)}
                    className={`rounded-xl border px-3 py-3 text-left transition-all ${
                      materialId === m.id
                       ? "border-[#c77900] bg-[#c77900]/5"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <p className="text- font-bold text-gray-900">{m.name}</p>
                    <p className="text- text-gray-500">{m.use}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-600">Length (m)</label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-3 text-sm font-bold outline-none focus:border-[#c77900]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600">Width (m)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-3 text-sm font-bold outline-none focus:border-[#c77900]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600">Thick (m)</label>
                <input
                  type="number"
                  step="0.05"
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-3 text-sm font-bold outline-none focus:border-[#c77900]"
                />
              </div>
            </div>

            {/* Result */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-gray-900 px-5 py-4">
                <p className="text- uppercase tracking-widest text-gray-400">Volume</p>
                <p className="mt-1 text-2xl font-black text-white">{volume.toFixed(2)} <span className="text-sm font-bold text-yellow-400">m³</span></p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 px-5 py-4">
                <p className="text- uppercase tracking-widest text-black/70">Est. Tons</p>
                <p className="mt-1 text-2xl font-black text-black">{tons.toFixed(2)} <span className="text-sm">tons</span></p>
              </div>
            </div>

            <p className="mt-3 text-center text- text-gray-400">
              *Estimate using {material.name} density {material.density} t/m³. Final qty confirmed on site.
            </p>

            <button
              onClick={handleQuote}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] py-4 text- font-bold text-white transition hover:scale-[1.02]"
            >
              <FaWhatsapp size={20} className="text-yellow-400" />
              Get Quote for {tons.toFixed(1)} Tons
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">
              Delivering to Nseleni • Richards Bay • Empangeni • Mtunzini • eSikhaleni
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}