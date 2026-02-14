import Section from "../../components/ui/Section";
import ServiceCard from "../../components/services/ServiceCard";
import Button from "../../components/ui/Button";
import { SERVICES } from "../../constants/services";
import { COMPANY } from "../../constants/company";

export default function ServicesPage() {
  return (
    <>
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-10"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <Section>

          <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-poppins)] mb-4">
            Our Engineering Services
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Reliable Electrical, Telecom and Satellite engineering
            services delivered with precision and professional expertise.
          </p>

        </Section>

      </section>


      {/* SERVICES SECTION */}
      <Section className="py-20">

        {/* Section intro */}
        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold font-[var(--font-poppins)] mb-3">
            What We Offer
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Comprehensive engineering solutions tailored for residential,
            commercial, and industrial needs.
          </p>

        </div>


        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              shortDescription={service.description}
              image={service.image}
              features={service.features}
              showFeatures={true}
            />
          ))}

        </div>

      </Section>


      {/* CTA SECTION */}
      <section className="relative py-20 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 -z-10"></div>

        <Section>

          <div className="text-center text-white">

            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-poppins)] mb-4">
              Ready to Start Your Project?
            </h2>

            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Contact us today for reliable engineering solutions and
              professional service support in Prayagraj.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <Button
                href="/contact"
                className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-lg shadow-lg"
              >
                Request Service
              </Button>

              <Button
                href={`https://wa.me/${COMPANY.phone.replace(/\D/g, "")}`}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow-lg"
              >
                WhatsApp Now
              </Button>

            </div>

          </div>

        </Section>

      </section>

    </>
  );
}
