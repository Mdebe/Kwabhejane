"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "27688379780";
  const whatsappMessage = "Hello KBBQ, I would like to request a quotation for aggregates.";

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="w-full px-5 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/logo.png"
                alt="Kwabhejane Bricks & Quarry"
                width={300}
                height={110}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text- leading-6 text-gray-600">
              Proudly South African quarrying and aggregate production company in KwaBhejane, Nseleni between Richards Bay & Empangeni.
            </p>
          </div>

          {/* Navigation - Only 5 main links */}
          <div>
            <h4 className="text- font-bold uppercase tracking-widest text-gray-900">Company</h4>
            <ul className="mt-5 space-y-3 text- text-gray-600">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/about" className="hover:text-black">About</Link></li>
              <li><Link href="/products" className="hover:text-black">Products</Link></li>
              <li><Link href="/services" className="hover:text-black">Services</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text- font-bold uppercase tracking-widest text-gray-900">Products</h4>
            <ul className="mt-5 space-y-2 text- text-gray-600">
              <li>G1 - G7 Materials</li>
              <li>19mm / 13.2mm / 9.5mm Aggregate</li>
              <li>Crusher Dust & Quarry Sand</li>
              <li>Gabion Stone & Rip Rap</li>
              <li>Armour Rock & Ballast</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text- font-bold uppercase tracking-widest text-gray-900">Contact</h4>
            <div className="mt-5 space-y-3 text- text-gray-600">
              <p className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-gray-900" />
                <span>KwaBhejane Area, Nseleni,<br/>Richards Bay, 3900</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-gray-900" />
                <span>+27 68 837 9780</span>
              </p>
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" className="flex items-center gap-3 font-medium text-gray-900 hover:text-black">
                <FaWhatsapp className="text-[#25D366]" />
                +27 68 837 9780
              </a>
              <div className="space-y-2 pt-2">
                <a href="mailto:info@kwabhejanebricksandquarry.co.za" className="flex items-center gap-3 hover:text-black">
                  <FaEnvelope className="shrink-0" />
                  info@kwabhejanebricksandquarry.co.za
                </a>
                <a href="mailto:sales@kwabhejanebricksandquarry.co.za" className="flex items-center gap-3 hover:text-black">
                  <FaEnvelope className="shrink-0" />
                  sales@kwabhejanebricksandquarry.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - No developer credit */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text- text-gray-500">
              © {new Date().getFullYear()} Kwabhejane Bricks & Quarry (Pty) Ltd. All rights reserved.
            </p>
            <p className="text- text-gray-500">
              www.kwabhejanebricksandquarry.co.za
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}