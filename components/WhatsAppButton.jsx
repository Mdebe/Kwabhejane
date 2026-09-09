"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "27688379780";
  const message =
    "Hello! I would like to request a quote for bricks, sand, gravel, or quarry materials from Kwabhejane Bricks & Quarry.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kwabhejane Bricks & Quarry on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        p-4
        rounded-full
        shadow-xl
        flex items-center justify-center
        hover:bg-green-600
        hover:scale-110
        transition-all
        duration-300
        z-50
      "
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}