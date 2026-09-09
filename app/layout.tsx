import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://kwabhejanebricksandquarry.co.za"
  ),

  title: {
    default:
      "Kwabhejane Bricks & Quarry | Aggregate & Quarry Materials",
    template: "%s | Kwabhejane Bricks & Quarry",
  },

  description:
    "Kwabhejane Bricks & Quarry (KBBQ) is a proudly South African quarrying and aggregate production company based in KwaBhejane, Nseleni, near Richards Bay and Empangeni, KwaZulu-Natal. We supply quality aggregate materials for construction, civil engineering, infrastructure, mining and industrial projects.",

  keywords: [
    "Kwabhejane Bricks & Quarry",
    "Kwabhejane Quarry",
    "KBBQ",
    "quarry KwaZulu-Natal",
    "quarry Richards Bay",
    "quarry Empangeni",
    "aggregate supplier Richards Bay",
    "aggregate supplier KwaZulu-Natal",
    "crushed stone",
    "G1 material",
    "G2 material",
    "G3 material",
    "G4 material",
    "G5 material",
    "G6 material",
    "G7 material",
    "crusher dust",
    "quarry sand",
    "building stone",
    "road base material",
    "railway ballast",
    "gabion stone",
    "rip rap rock",
    "armour rock",
    "construction materials South Africa",
    "mining materials South Africa",
    "civil engineering materials",
  ],

  authors: [
    {
      name: "Kwabhejane Bricks & Quarry",
      url: "https://kwabhejanebricksandquarry.co.za",
    },
  ],

  creator: "Kwabhejane Bricks & Quarry",
  publisher: "Kwabhejane Bricks & Quarry",

  applicationName: "Kwabhejane Bricks & Quarry",

  category: "business",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "en_ZA",

    url: "https://kwabhejanebricksandquarry.co.za",

    siteName: "Kwabhejane Bricks & Quarry",

    title:
      "Kwabhejane Bricks & Quarry | Aggregate & Quarry Materials",

    description:
      "Quality aggregate materials for construction, civil engineering, infrastructure, mining and industrial projects across KwaZulu-Natal.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwabhejane Bricks & Quarry",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kwabhejane Bricks & Quarry | Aggregate & Quarry Materials",

    description:
      "Quality quarry and aggregate materials for construction, infrastructure, mining and industrial projects.",

    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#111111] text-white antialiased">
        {children}
      </body>
    </html>
  );
}