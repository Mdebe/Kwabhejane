"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaTimes, FaTrash, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Product = {
  id: string;
  name: string;
  spec: string;
  use: string;
  img: string;
};

const products: Product[] = [
  { id: "G5", name: "G5 Material", spec: "Road Base Material - SANS Compliant", use: "Road construction, heavy duty base", img: "/images/quarry1.jpg" },
  { id: "G7", name: "G7 Material", spec: "Sub-base Material", use: "Sub-base for roads & platforms", img: "/images/quarry2.jpg" },
  { id: "G1", name: "G1 Crushed Stone", spec: "High-quality crushed stone", use: "Premium base for highways", img: "/images/quarry3.jpg" },
  { id: "19mm", name: "19mm Aggregate", spec: "19mm Stone", use: "Concrete & structural work", img: "/images/quarry-about.jpg" },
  { id: "13mm", name: "13.2mm Aggregate", spec: "13.2mm Stone", use: "Concrete, precast, asphalt", img: "/images/quarry1.jpg" },
  { id: "9mm", name: "9.5mm Aggregate", spec: "9.5mm Stone", use: "Fine concrete, surface dressing", img: "/images/quarry2.jpg" },
  { id: "crusher", name: "Crusher Dust", spec: "Fine crushed material", use: "Bedding, filling, concrete mix", img: "/images/quarry3.jpg" },
  { id: "quarry-sand", name: "Quarry Sand", spec: "Quarry Sand / Grit", use: "Plaster, building, bedding", img: "/images/quarry1.jpg" },
  { id: "gabion", name: "Gabion Stone", spec: "75mm - 150mm", use: "Gabion baskets, retaining walls", img: "/images/quarry2.jpg" },
  { id: "riprap", name: "Rip Rap / Armour Rock", spec: "300mm - 1000mm+", use: "Erosion control, shoreline protection", img: "/images/quarry3.jpg" },
  { id: "ballast", name: "Railway Ballast", spec: "28mm - 50mm", use: "Railway track support & drainage", img: "/images/quarry-about.jpg" },
  { id: "37mm", name: "37mm Aggregate", spec: "Large aggregate", use: "Heavy concrete, mass foundations", img: "/images/quarry1.jpg" },
];

export default function ProductsPage() {
  const [quoteList, setQuoteList] = useState<Product[]>([]);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const addToQuote = (product: Product) => {
    if (!quoteList.find((p) => p.id === product.id)) {
      setQuoteList([...quoteList, product]);
    }
    setQuoteOpen(true);
  };

  const removeFromQuote = (id: string) => {
    setQuoteList(quoteList.filter((p) => p.id !== id));
  };

  const handleCheckout = () => {
    const phoneNumber = "27688379780";
    const orderList = quoteList.map((item) => `- ${item.name} (${item.spec})`).join("\n");
    const message = `Hello KBBQ, I would like a quote for the following materials:\n${orderList}\n\nDelivery to: [Please add location]\nTons / m³ needed: [Please add]`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h- w-full items-center justify-center bg-[#0b0b0b] px-6 text-center">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/quarry1.jpg" alt="Quarry Products" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-amber-500" />

        <div className="relative max-w-3xl text-white">
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
            20+ Aggregate Products
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Our Products</h1>
          <p className="mt-3 text-sm leading-6 text-gray-300 sm:text-base">
            G1-G7, 37mm to 9.5mm aggregates, crusher dust, gabion stone, rip rap, armour rock and railway ballast — SANS compliant, lab tested.
          </p>
        </div>

        {/* Quote Icon */}
        <button
          onClick={() => setQuoteOpen(true)}
          className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg"
        >
          <FaShoppingCart />
          {quoteList.length > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-black text-black">
              {quoteList.length}
            </span>
          )}
        </button>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded- border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={product.img} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute left-3 top-3 rounded-full bg-[#111111] px-3 py-1 text- font-bold uppercase tracking-widest text-yellow-400">
                  {product.id}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-gray-900">{product.name}</h3>
                <p className="mt-1 text-xs font-semibold text-[#c77900]">{product.spec}</p>
                <p className="mt-2 flex gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="mt-1 shrink-0 text-[#c77900] text-xs" />
                  {product.use}
                </p>
                <button
                  onClick={() => addToQuote(product)}
                  className="mt-5 w-full rounded-full bg-[#111111] py-3 text-sm font-bold text-white transition hover:bg-black"
                >
                  Add to Quote List
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE SIDEBAR */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 sm:w-96 ${
          quoteOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <h2 className="text-xl font-black">Quote List</h2>
          <button onClick={() => setQuoteOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
            <FaTimes />
          </button>
        </div>

        <div className="h-[60%] space-y-4 overflow-y-auto p-6">
          {quoteList.length === 0 && <p className="text-sm text-gray-500">Your quote list is empty. Add materials to request a price.</p>}
          {quoteList.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="text-sm font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.spec}</p>
              </div>
              <button onClick={() => removeFromQuote(item.id)} className="text-red-500">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 w-full border-t border-gray-100 bg-white p-6">
          <p className="text-sm font-semibold text-gray-900">{quoteList.length} Materials selected</p>
          <p className="mt-1 text-xs text-gray-500">We will send you competitive pricing & delivery rate</p>
          <button
            onClick={handleCheckout}
            disabled={quoteList.length === 0}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-50"
          >
            <FaWhatsapp size={18} />
            Request Quote via WhatsApp
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}