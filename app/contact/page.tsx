import Section from "../../components/ui/Section";
import ContactForm from "../../components/contact/ContactForm";
import Button from "../../components/ui/Button";
import { COMPANY } from "../../constants/company";

export default function ContactPage() {
  return (
    <>
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">

        <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-800 -z-10"></div>
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <Section>

          <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-poppins)] mb-4">
            Contact Us
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Get in touch with {COMPANY.name} for professional electrical,
            telecom and satellite engineering services in Prayagraj.
          </p>

        </Section>

      </section>


      {/* CONTACT SECTION */}
      <Section className="py-16">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Contact Info */}
          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-lg p-6 border">

              <h2 className="text-2xl font-semibold mb-4 font-[var(--font-poppins)]">
                Contact Information
              </h2>

              <div className="space-y-3 text-gray-600">

                <p>
                  📍 {COMPANY.address.street}
                </p>

                <p>
                  {COMPANY.address.city}, {COMPANY.address.state} -{" "}
                  {COMPANY.address.pincode}
                </p>

                {/* ✅ Mobile */}
                <p>
                  📱{" "}
                  <a
                    href={`tel:${COMPANY.phones.mobile}`}
                    className="hover:text-blue-600 font-medium"
                  >
                    {COMPANY.displayPhones.mobile}
                  </a>
                </p>

                {/* ✅ Landline */}
                <p>
                  ☎️{" "}
                  <a
                    href={`tel:${COMPANY.phones.landline}`}
                    className="hover:text-blue-600 font-medium"
                  >
                    {COMPANY.displayPhones.landline}
                  </a>
                </p>

                {/* ✅ Emails */}
                {COMPANY.emails.map((email) => (
                  <p key={email}>
                    ✉️{" "}
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-blue-600 font-medium"
                    >
                      {email}
                    </a>
                  </p>
                ))}

              </div>

            </div>


            {/* WhatsApp CTA Card */}
            <div className="bg-green-500 text-white rounded-2xl shadow-lg p-6">

              <h3 className="text-xl font-semibold mb-2">
                Need Quick Help?
              </h3>

              <p className="mb-4 text-green-100">
                Chat directly on WhatsApp for fast support and service requests.
              </p>

              <Button
                href={`https://wa.me/${COMPANY.phones.mobile.replace(/\D/g, "")}`}
                className="bg-blue-1000 text-green-600 hover:bg-gray-500 font-medium px-6 py-3 rounded-lg"
              >
                Chat on WhatsApp
              </Button>

            </div>

          </div>


          {/* RIGHT: Contact Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border">

            <h2 className="text-2xl font-semibold mb-6 font-[var(--font-poppins)]">
              Send a Message
            </h2>

            <ContactForm />

          </div>

        </div>

      </Section>


      {/* MAP SECTION */}
      <Section className="pb-20">

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-semibold font-[var(--font-poppins)]">
              Our Location
            </h2>

            <p className="text-gray-600 text-sm">
              Visit our office in Prayagraj
            </p>

          </div>

          <div className="w-full h-[400px]">

            <iframe
              src="https://www.google.com/maps?q=Prayagraj&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </Section>

    </>
  );
}
