export default function SEO() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kwabhejane Bricks & Quarry",
    image: "https://kwabhejanebricksandquarry.co.za/logo.png",
    url: "https://kwabhejanebricksandquarry.co.za",
    telephone: "+27 68 837 9780",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richards Bay",
      addressRegion: "KwaZulu-Natal",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -28.780727,
      longitude: 32.038285,
    },
    openingHours: "Mo-Sa 07:00-17:00",
    priceRange: "$$",
    sameAs: [
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}