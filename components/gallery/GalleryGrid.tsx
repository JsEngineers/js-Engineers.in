import Image from "next/image";

interface GalleryItem {
  src: string;
  title: string;
  category?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

      {items.map((item, index) => (

        <div
          key={index}
          className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
        >

          {/* Image container */}
          <div className="relative w-full h-64 overflow-hidden">

            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

            {/* Category badge */}
            {item.category && (
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium rounded-full shadow">
                {item.category}
              </div>
            )}

            {/* Hover title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition duration-300">

              <div className="bg-white/95 backdrop-blur rounded-lg p-3 shadow">

                <h3 className="font-semibold text-sm text-gray-800">
                  {item.title}
                </h3>

              </div>

            </div>

          </div>


          {/* Default title (visible when not hovering) */}
          <div className="p-4 group-hover:opacity-0 transition duration-300">

            <h3 className="font-medium text-sm text-gray-800">
              {item.title}
            </h3>

            {item.category && (
              <p className="text-xs text-gray-500 mt-1">
                {item.category}
              </p>
            )}

          </div>

        </div>

      ))}

    </div>
  );
}
