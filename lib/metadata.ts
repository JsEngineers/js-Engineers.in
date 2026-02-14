import { Metadata } from "next";
import { COMPANY } from "../constants/company";

const baseUrl = "https://jsengineers.in"; 

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: `${COMPANY.name} | Engineering Services in Prayagraj`,
    template: `%s | ${COMPANY.name}`,
  },

  description:
    "Professional Electrical, Telecom and Satellite engineering services in Prayagraj. MSME & GST registered. Reliable project execution and maintenance support.",

  keywords: [
    "Electrical services Prayagraj",
    "Telecom maintenance Prayagraj",
    "Satellite installation Prayagraj",
    "Engineering consultant Prayagraj",
    "Panel wiring Prayagraj",
  ],

  openGraph: {
    title: `${COMPANY.name} | Engineering Services in Prayagraj`,
    description:
      "Reliable Electrical, Telecom and Satellite solutions in Prayagraj for residential and commercial needs.",
    url: baseUrl,
    siteName: COMPANY.name,
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};