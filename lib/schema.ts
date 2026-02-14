import { COMPANY } from "../constants/company";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: COMPANY.logo,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Prayagraj",
    },
    description:
      "Professional Electrical, Telecom and Satellite engineering services in Prayagraj.",
    sameAs: [], // add social links later if available
  };
}