"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const services = [
  "G5 / G7 Road Base Material",
  "G1-G3 Crushed Stone",
  "19mm / 13.2mm / 9.5mm Aggregate",
  "37mm / 26mm Aggregate",
  "Crusher Dust / Quarry Sand",
  "Filling Sand & Bedding",
  "Gabion Stone",
  "Rip Rap / Armour Rock",
  "Railway Ballast",
  "Bulk Delivery - 60+ Tons",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "27688379780";

  const sendWhatsApp = () => {
    const text = `Hello KBBQ Team,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nDelivery Location: ${location}\n\nMessage: ${message}\n\nPlease send me a quote for ${service}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0b0b0b] px-6 py-14 text-center">
        <h1 className="text-4xl font-black text-white sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 sm:text-base">
          Request a quote for G1-G7, aggregates, gabion stone, rip rap and ballast. Delivery across Richards Bay, Empangeni & KZN.
        </p>
        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500" />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT: DETAILS - NEW INFO */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Kwabhejane Bricks & Quarry <span className="text-[#c77900]">(Pty) Ltd</span>
            </h2>
            <p className="mt-4 text- leading-7 text-gray-600">
              Strategically located in KwaBhejane Area, Nseleni between Richards Bay & Empangeni — supplying mining, industrial, construction and infrastructure projects.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <FaMapMarkerAlt className="mt-1 text-[#c77900]" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Quarry Location</p>
                  <p className="mt-1 text-sm text-gray-600">KwaBhejane Area, Nseleni,<br/>Richards Bay, 3900, KwaZulu-Natal, South Africa</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <FaPhoneAlt className="mt-1 text-[#c77900]" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Phone</p>
                  <p className="mt-1 text-sm text-gray-600">+27 68 837 9780</p>
                  <p className="mt-1 text-sm text-gray-600">+27 78 493 5142</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                <FaEnvelope className="mt-1 text-[#c77900]" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Company Emails</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <a href="mailto:info@kwabhejanebricksandquarry.co.za" className="block hover:text-[#c77900]">info@kwabhejanebricksandquarry.co.za</a>
                    <a href="mailto:sales@kwabhejanebricksandquarry.co.za" className="block hover:text-[#c77900]">sales@kwabhejanebricksandquarry.co.za</a>
                    <a href="mailto:accounts@kwabhejanebricksandquarry.co.za" className="block hover:text-[#c77900]">accounts@kwabhejanebricksandquarry.co.za</a>
                    <a href="mailto:admin@kwabhejanebricksandquarry.co.za" className="block hover:text-[#c77900]">admin@kwabhejanebricksandquarry.co.za</a>
                    <p className="pt-1 text-xs text-gray-400">www.kwabhejanebricksandquarry.co.za</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <FaClock className="text-[#c77900]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">Hours</p>
                  <p className="mt-1 text-sm text-gray-700">Mon - Sat: 07:00 - 17:00<br/>Sun: Closed</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <FaCheckCircle className="text-[#c77900]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-500">Delivery</p>
                  <p className="mt-1 text-sm text-gray-700">Richards Bay, Empangeni, Mtunzini, Felixton, eSikhaleni + KZN</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="rounded- border border-gray-100 bg-white p-6 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] sm:p-8">
            <h3 className="text-xl font-black text-gray-900">Request a Quote</h3>
            <p className="mt-2 text-sm text-gray-600">Fill in your project details — we respond via WhatsApp in minutes.</p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#c77900] focus:ring-2 focus:ring-[#c77900]/20"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#c77900] focus:ring-2 focus:ring-[#c77900]/20"
                />
              </div>

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#c77900] focus:ring-2 focus:ring-[#c77900]/20"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Delivery Location / Site *"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#c77900] focus:ring-2 focus:ring-[#c77900]/20"
              />

              <textarea
                placeholder="Tons / m³ needed and project details"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-32 w-full resize-none rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none focus:border-[#c77900] focus:ring-2 focus:ring-[#c77900]/20"
              />

              <button
                onClick={sendWhatsApp}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] py-4 text-sm font-bold text-white transition hover:scale-[1.02]"
              >
                <FaWhatsapp size={20} className="text-yellow-400" />
                Send Quote Request via WhatsApp
              </button>

              <p className="text-center text- text-gray-400">
                By sending, you agree to be contacted about aggregates and bulk delivery rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
