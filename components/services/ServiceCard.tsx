import Image from "next/image";
import Button from "../ui/Button";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  image: string;
  features?: string[];
  showFeatures?: boolean;
  ctaLink?: string;
}

export default function ServiceCard({
  title,
  shortDescription,
  image,
  features,
  showFeatures = false,
  ctaLink,
}: ServiceCardProps) {

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-gray-100">


      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60" />

      </div>



      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 font-[var(--font-poppins)] text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>


        {/* Description */}
        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {shortDescription}
        </p>



        {/* Features */}
        {showFeatures && features && (

          <ul className="mb-6 space-y-2 text-sm">

            {features.map((feature, index) => (

              <li key={index} className="flex items-start gap-2 text-gray-700">

                <span className="text-green-500 mt-[2px]">
                  ✓
                </span>

                <span>
                  {feature}
                </span>

              </li>

            ))}

          </ul>

        )}



        {/* CTA */}
        {ctaLink && (

          <Button
            href={ctaLink}
            className="w-full py-2.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
          >
            Learn More
          </Button>

        )}

      </div>

    </div>
  );

}
