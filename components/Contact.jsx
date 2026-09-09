"use client";

import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaTruck, FaCheckCircle } from "react-icons/fa";

export default function ContactForm() {
  const phoneNumber = "27688379780";
  const phone2 = "27688379780";

  const handleWhatsApp = (text) => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#111111] px-5 py-20 sm:px-6 sm:py-28">
      {/* Yellow accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Supply Coverage
            </span>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Ready to Supply Your <span className="text-yellow-400">Next Project?</span>
            </h2>
            <p className="mt-4 max-w-xl text- leading-7 text-gray-400">
              Kwabhejane Bricks & Quarry is strategically located in KwaBhejane, Nseleni between Richards Bay & Empangeni. We supply G1-G7, 19mm, ballast, gabion, rip rap and crusher dust across KZN.
            </p>

            {/* Coverage */}
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Delivery Zones</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Richards Bay","Empangeni","Nseleni","eSikhaleni","Mtunzini","KwaMbonambi","Mhlathuze","Felixton"].map((zone) => (
                  <span key={zone} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
                    <FaCheckCircle className="text-yellow-400 text-xs" /> {zone}
                  </span>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">In Stock</p>
                <p className="mt-1 text-sm font-bold text-white">G1-G7 Materials</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">In Stock</p>
                <p className="mt-1 text-sm font-bold text-white">19mm / 13mm / 9.5mm</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs text-gray-500">In Stock</p>
                <p className="mt-1 text-sm font-bold text-white">Gabion / Rip Rap / Ballast</p>
              </div>
            </div>
          </div>

          {/* RIGHT - CONTACT HUB */}
          <div className="rounded- bg-white p-6 shadow-2xl sm:p-8">
            <h3 className="text-xl font-black text-gray-900">Rapid Contact Hub</h3>
            <p className="mt-2 text-sm text-gray-600">Get a quote in under 5 minutes. No forms, direct to our team.</p>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => handleWhatsApp("Hello KBBQ, I need a quote for G5/G7 and aggregates. My project is in: ")}
                className="flex w-full items-center gap-4 rounded-2xl bg-[#25D366] p-4 text-left transition hover:scale-[1.02]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <FaWhatsapp className="text-xl text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">WhatsApp Us - Fastest</p>
                  <p className="text-xs text-white/80">+27 68 837 9780 • Online now</p>
                </div>
              </button>

              <a
                href={`tel:+${phoneNumber}`}
                className="flex w-full items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left transition hover:bg-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-yellow-400">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Call Office</p>
                  <p className="text-xs text-gray-600">+27 68 837 9780</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <FaMapMarkerAlt className="text-[#c77900]" />
                  <p className="mt-2 text-xs font-bold text-gray-900">Quarry Location</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">KwaBhejane Area, Nseleni, Richards Bay, 3900</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <FaClock className="text-[#c77900]" />
                  <p className="mt-2 text-xs font-bold text-gray-900">Working Hours</p>
                  <p className="mt-1 text-xs leading-5 text-gray-600">Mon - Sat: 07:00 - 17:00<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#111111] px-5 py-4">
              <div className="flex items-center gap-2 text-yellow-400">
                <FaTruck />
                <p className="text-xs font-bold uppercase tracking-widest">Bulk Orders</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Minimum bulk order from 10m³ / 15 tons. Coordinated transport for 60+ ton projects. Request truck rate for your site.
              </p>
            </div>

            <p className="mt-4 text-center text- text-gray-400">
              Kwabhejane Bricks & Quarry (Pty) Ltd • Crushing Rocks into Stones, Building Communities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
