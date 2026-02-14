import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { defaultMetadata } from "../lib/metadata";
import { generateLocalBusinessSchema } from "../lib/schema";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="font-[var(--font-inter)] bg-white text-gray-900 antialiased">

        {/* Structured Data (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen flex flex-col">

          {children}

        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
