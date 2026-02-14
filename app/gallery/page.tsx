import Section from "../../components/ui/Section";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { IMAGES } from "../../assets/images";

export default function GalleryPage() {
  const galleryItems = [
    {
      src: IMAGES.WORK_PANEL,
      title: "Electrical Panel Installation",
      category: "Electrical",
    },
    {
      src: IMAGES.WORK_CABLE,
      title: "Cable Management Setup",
      category: "Electrical",
    },
    {
      src: IMAGES.WORK_AC,
      title: "AC Service & Maintenance",
      category: "Electrical",
    },
    {
      src: IMAGES.WORK_TELECOM,
      title: "Telecom Network Site Work",
      category: "Telecom",
    },
    {
      src: IMAGES.WORK_SAT,
      title: "Satellite Dish Installation",
      category: "Satellite",
    },
  ];

  return (
    <>
      {/* HERO HEADER */}
      <section className="relative pt-32 pb-20 text-center overflow-hidden">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 -z-10"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <Section>

          <h1 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-poppins)] mb-4">
            Our Work Gallery
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Explore our recent engineering projects across Electrical,
            Telecom, and Satellite services in Prayagraj.
          </p>

        </Section>

      </section>


      {/* STATS STRIP */}
      <Section className="py-10">

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
            <div className="text-sm text-gray-600">Service Support</div>
          </div>

        </div>

      </Section>


      {/* GALLERY SECTION */}
      <Section className="pb-20">

        {/* Section heading */}
        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold font-[var(--font-poppins)] mb-3">
            Project Showcase
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Real work from real projects delivered with precision and
            professional engineering standards.
          </p>

        </div>

        {/* Gallery Grid */}
        <GalleryGrid items={galleryItems} />

      </Section>

    </>
  );
}
