import Hero from "../components/home/Hero";
import Section from "../components/ui/Section";
import ServiceCard from "../components/services/ServiceCard";
import Button from "../components/ui/Button";
import { SERVICES } from "../constants/services";
import { COMPANY } from "../constants/company";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />


      {/* STATS SECTION */}
      <Section className="py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-2xl font-bold text-blue-600">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-2xl font-bold text-blue-600">300+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>

        </div>

      </Section>


      {/* SERVICES PREVIEW */}
      <Section id="services" className="py-20">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-poppins)] mb-4">
            Our Services
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional engineering solutions tailored to residential,
            commercial and industrial needs.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              shortDescription={service.shortDescription}
              image={service.image}
              ctaLink="/services"
            />
          ))}

        </div>

        {/* View all services */}
        <div className="text-center mt-12">

          <Button href="/services" variant="primary">
            View All Services
          </Button>

        </div>

      </Section>


      {/* WHY CHOOSE US */}
      <Section className="py-20 bg-gray-50">

        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-poppins)] mb-4">
            Why Choose {COMPANY.name}
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Trusted engineering partner delivering reliable and
            professional services in Prayagraj.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg">
              MSME & GST Registered
            </h3>

            <p className="text-gray-600 text-sm">
              Fully certified and compliant engineering service provider.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg">
              Experienced Project Handling
            </h3>

            <p className="text-gray-600 text-sm">
              Professional execution with safety, quality and precision.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-lg">
              Fast Local Support
            </h3>

            <p className="text-gray-600 text-sm">
              Quick response and reliable on-site engineering support.
            </p>
          </div>

        </div>

      </Section>


      {/* FINAL CTA */}
      <section className="relative py-20 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 -z-10"></div>

        <Section>

          <div className="text-center text-white">

            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-poppins)] mb-4">
              Need Reliable Engineering Support?
            </h2>

            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Contact us today for professional engineering services
              and fast project support.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <Button
                href="/contact"
                className="px-8 py-3 bg-green-500 text-blue-700 hover:bg-green-600 rounded-lg shadow-lg"
              >
                Request Service
              </Button>

              <Button
                href={`https://wa.me/${COMPANY.phones.mobile.replace(/\D/g, "")}`}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg"
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
