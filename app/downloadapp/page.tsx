"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import {
  FaGooglePlay,
  FaApple,
  FaQrcode,
  FaStar,
  FaShieldAlt,
  FaMobileAlt,
  FaDownload,
} from "react-icons/fa";
import { SiHuawei, SiSamsung } from "react-icons/si";

export default function DownloadAppPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-purple-50 to-purple-100 py-20 px-6 min-h-screen">

        <div className="max-w-6xl mx-auto">

          {/* HERO */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#010a33] mb-6">
                Download the <span className="text-[#d41ed3]">Inqothovu App</span>
              </h1>

              <p className="text-gray-700 text-lg mb-6">
                Experience luxury fragrances at your fingertips. Shop perfumes,
                car diffusers and roll-ons directly from your mobile device.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <span className="text-gray-700 font-semibold">
                  4.9 Rating • 10K+ Downloads
                </span>
              </div>

              {/* Download Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <a
                  href="/downloads/inqothovu.apk"
                  className="flex items-center justify-center gap-3 bg-green-600 text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:bg-green-700 transition"
                >
                  <FaGooglePlay size={20} />
                  Android APK
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:bg-blue-700 transition"
                >
                  <FaApple size={20} />
                  iOS App Store
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-red-600 text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:bg-red-700 transition"
                >
                  <SiHuawei size={20} />
                  Huawei AppGallery
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-black text-white font-semibold px-6 py-4 rounded-xl shadow-md hover:bg-gray-800 transition"
                >
                  <SiSamsung size={20} />
                  Samsung Store
                </a>

              </div>

              <p className="text-gray-500 text-sm mt-6">
                Android users may need to enable <b>Install from Unknown Sources</b>.
              </p>

            </div>

            {/* APP IMAGE + QR */}
            <div className="flex flex-col items-center">

              <img
                src="/app-preview.png"
                alt="Inqothovu App"
                className="w-72 rounded-3xl shadow-xl mb-6"
              />

              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <FaQrcode size={40} className="mx-auto mb-3 text-[#d41ed3]" />
                <p className="text-gray-700 text-sm">
                  Scan to download the app
                </p>

                <img
                  src="/qr-download.png"
                  alt="Download QR"
                  className="w-32 mx-auto mt-3"
                />
              </div>

            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-24 text-center">

            <h2 className="text-3xl font-bold text-[#010a33] mb-12">
              Why Use Our App
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <FaMobileAlt className="text-[#d41ed3] text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">
                  Easy Mobile Shopping
                </h3>
                <p className="text-gray-600 text-sm">
                  Browse and order fragrances easily from your phone.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <FaDownload className="text-[#d41ed3] text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">
                  Fast Checkout
                </h3>
                <p className="text-gray-600 text-sm">
                  Quick ordering with secure payments and fast delivery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md">
                <FaShieldAlt className="text-[#d41ed3] text-3xl mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">
                  Secure & Safe
                </h3>
                <p className="text-gray-600 text-sm">
                  Your personal information and payments are fully protected.
                </p>
              </div>

            </div>

          </div>

          {/* SCREENSHOTS */}
          <div className="mt-24">

            <h2 className="text-3xl font-bold text-center text-[#010a33] mb-10">
              App Screenshots
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-6">

              <img src="/screens/screen1.png" className="w-60 rounded-xl shadow-md"/>
              <img src="/screens/screen2.png" className="w-60 rounded-xl shadow-md"/>
              <img src="/screens/screen3.png" className="w-60 rounded-xl shadow-md"/>
              <img src="/screens/screen4.png" className="w-60 rounded-xl shadow-md"/>

            </div>

          </div>

          {/* APP DETAILS */}
          <div className="mt-24 bg-white p-10 rounded-3xl shadow-md">

            <h2 className="text-2xl font-bold text-[#010a33] mb-8 text-center">
              App Information
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">

              <div>
                <h4 className="text-gray-500 text-sm">Version</h4>
                <p className="font-semibold">1.0.0</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Size</h4>
                <p className="font-semibold">25 MB</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Category</h4>
                <p className="font-semibold">Shopping</p>
              </div>

              <div>
                <h4 className="text-gray-500 text-sm">Updated</h4>
                <p className="font-semibold">2026</p>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}