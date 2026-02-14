import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "../../constants/company";
import { IMAGES } from "../../assets/images";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      {/* Main Footer */}
      <div className="container-custom py-16 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="relative w-30 h-30">
              <Image
                src={IMAGES.LOGO_PRIMARY}
                alt={COMPANY.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-semibold text-lg text-white">
              {COMPANY.name}
            </h3>

          </div>

          <p className="text-sm text-gray-400 mb-4">
            {COMPANY.tagline}
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm shadow transition"
          >
            Chat on WhatsApp
          </a>

        </div>


        {/* Quick Links */}
        <div>

          <h4 className="font-semibold mb-4 text-white">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* Contact Info */}
        <div>

          <h4 className="font-semibold mb-4 text-white">
            Contact Info
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              📍 {COMPANY.address.street}
            </li>

            <li>
              {COMPANY.address.city}, {COMPANY.address.state} -{" "}
              {COMPANY.address.pincode}
            </li>

            <li>
              📞{" "}
              <a
                href={`tel:${COMPANY.phone}`}
                className="hover:text-white transition"
              >
                {COMPANY.phone}
              </a>
            </li>

            <li>
              ✉️{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover:text-white transition"
              >
                {COMPANY.email}
              </a>
            </li>

          </ul>

        </div>


        {/* Business Info */}
        <div>

          <h4 className="font-semibold mb-4 text-white">
            Business Info
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">

            <li>
              GST: {COMPANY.gst}
            </li>

            <li>
              UDYAM: {COMPANY.udyam}
            </li>

            <li>
              MSME Registered
            </li>

            <li>
              Serving Prayagraj & Nearby Areas
            </li>

          </ul>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <div>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </div>

          <div className="flex gap-6">

            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
