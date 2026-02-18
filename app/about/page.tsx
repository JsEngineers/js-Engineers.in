import Image from "next/image";
import Section from "../../components/ui/Section";
import { COMPANY } from "../../constants/company";
import { IMAGES } from "../../assets/images";

export default function AboutPage() {

  return (
    <>

      {/* HERO HEADER */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-10" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        <Section containerSize="narrow">

          <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-poppins)] mb-4">
            About {COMPANY.name}
          </h1>

          <p className="text-gray-200 text-lg">
            Trusted engineering partner delivering professional Electrical,
            Telecom and Satellite services in Prayagraj and nearby areas.
          </p>

        </Section>

      </section>



      {/* COMPANY OVERVIEW */}
      <Section spacing="large">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h2 className="text-3xl font-bold mb-6 font-[var(--font-poppins)]">
              Company Overview
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Established in 2025, {COMPANY.name} is a professional engineering
              firm based in Prayagraj, providing reliable Electrical, Telecom,
              and Satellite services for residential, commercial, and industrial projects.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We focus on safety, quality, and compliance, ensuring every project
              is executed with precision, professionalism, and long-term reliability.
            </p>

            {/* ✅ PDF Download Button (Added Only This) */}
            <div className="mt-6">
              <a
                href="/assets/AboutCompany.Pdf"
                download
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition font-medium"
              >
                Download Company Profile
              </a>
            </div>


            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-blue-600 text-xl">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Projects Completed
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="font-bold text-blue-600 text-xl">
                  MSME
                </div>
                <div className="text-sm text-gray-600">
                  Registered Business
                </div>
              </div>

            </div>

          </div>


          {/* Right image */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">

            <Image
              src={IMAGES.ABOUT_FOUNDER}
              alt={COMPANY.owner.name}
              fill
              className="object-cover"
            />

          </div>

        </div>

      </Section>



      {/* LEADERSHIP */}
      <Section background="bg-gray-50" spacing="large">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 font-[var(--font-poppins)]">
            Leadership
          </h2>

          <div className="bg-white p-8 rounded-2xl shadow-md">

            <div className="text-xl font-semibold mb-2">
              {COMPANY.owner.name}
            </div>

            <div className="text-blue-600 mb-4">
              {COMPANY.owner.role}
            </div>

            <p className="text-gray-600 leading-relaxed">
              With strong technical expertise and leadership, our management ensures
              every engineering project is delivered with quality, safety, and
              professional excellence.
            </p>

          </div>

        </div>

      </Section>



      {/* MISSION & VISION */}
      <Section spacing="large">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold font-[var(--font-poppins)]">
            Our Mission & Vision
          </h2>

        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h3 className="text-xl font-semibold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To deliver safe, reliable, and high-quality engineering services
              with professionalism, technical expertise, and commitment to client satisfaction.
            </p>

          </div>


          <div className="bg-white p-8 rounded-2xl shadow-md">

            <h3 className="text-xl font-semibold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a trusted and recognized engineering service provider
              across Uttar Pradesh through quality work and professional excellence.
            </p>

          </div>

        </div>

      </Section>



      {/* REGISTRATIONS */}
      <Section background="bg-gray-50" spacing="large">

        <div className="text-center">

          <h2 className="text-3xl font-bold mb-8 font-[var(--font-poppins)]">
            Business Registrations
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

            <div className="bg-white p-6 rounded-xl shadow-md">

              <div className="text-sm text-gray-500">
                GST Number
              </div>

              <div className="font-semibold text-lg">
                {COMPANY.gst}
              </div>

            </div>


            <div className="bg-white p-6 rounded-xl shadow-md">

              <div className="text-sm text-gray-500">
                UDYAM Registration
              </div>

              <div className="font-semibold text-lg">
                {COMPANY.udyam}
              </div>

            </div>

          </div>

        </div>

      </Section>

    </>
  );

}
