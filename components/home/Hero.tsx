import Image from "next/image";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { IMAGES } from "../../assets/images";
import { COMPANY } from "../../constants/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src={IMAGES.HERO}
        alt="Engineering Services"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Gradient Overlay (better than plain black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />

      {/* Subtle highlight glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />


      {/* Content */}
      <Section className="relative z-10 pt-28 pb-20">

        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm mb-5 border border-white/20 shadow">
            Trusted Engineering Services in Prayagraj
          </div>


          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">

            Reliable Engineering
            <span className="block text-blue-400">
              Solutions You Can Trust
            </span>

          </h1>


          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-xl">

            Professional Electrical, Telecom, and Satellite engineering
            services for residential, commercial, and industrial projects.

          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <Button
              href="/contact"
              className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-lg transition"
            >
              Request Service
            </Button>


            <Button
              href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
              className="px-8 py-3 text-lg bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 rounded-lg transition"
            >
              Chat on WhatsApp
            </Button>

          </div>


          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-300">

            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              MSME Registered
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Experienced Engineers
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Fast Local Support
            </div>

          </div>

        </div>

      </Section>

    </section>
  );
}
