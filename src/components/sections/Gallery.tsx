import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/assets/images/placeholder1.jpg',
      alt: 'Gallery Image 1',
      title: 'Project One',
      description: 'Description for Project One',
    },
    {
      src: '/assets/images/placeholder2.jpg',
      alt: 'Gallery Image 2',
      title: 'Project Two',
      description: 'Description for Project Two',
    },
    {
      src: '/assets/images/placeholder3.jpg',
      alt: 'Gallery Image 3',
      title: 'Project Three',
      description: 'Description for Project Three',
    },
    {
      src: '/assets/images/placeholder4.jpg',
      alt: 'Gallery Image 4',
      title: 'Project Four',
      description: 'Description for Project Four',
    },
    {
      src: '/assets/images/placeholder5.jpg',
      alt: 'Gallery Image 5',
      title: 'Project Five',
      description: 'Description for Project Five',
    },
    {
      src: '/assets/images/placeholder6.jpg',
      alt: 'Gallery Image 6',
      title: 'Project Six',
      description: 'Description for Project Six',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Gallery"
          subtitle="Check out our latest projects and achievements"
        />

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Selected gallery image"
              className="max-h-[90vh] w-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 