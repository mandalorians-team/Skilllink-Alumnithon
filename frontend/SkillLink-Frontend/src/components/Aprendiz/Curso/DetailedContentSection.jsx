import React from "react";
import { BookOpen } from "lucide-react";

const DetailedContentSection = React.forwardRef(({ module }, ref) => {
  if (!module || !module.content) {
    return null;
  }

  const { title, content } = module;
  const { text, image } = content;

  return (
    <section
      ref={ref}
      className="bg-gray-800 text-white p-6 rounded-lg mt-8 scroll-mt-20">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
        <BookOpen />
        {title}
      </h3>
      <div className="prose prose-invert max-w-none text-gray-300">
        <p>{text}</p>
        {image && (
          <img
            src={image}
            alt={`Ilustración para ${title}`}
            className="w-full h-auto object-cover rounded-lg mt-4"
          />
        )}
      </div>
    </section>
  );
});

export default DetailedContentSection;
