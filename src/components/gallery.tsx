'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  '/assets/images/gallery/1.png',
  '/assets/images/gallery/2.png',
  '/assets/images/gallery/3.png',
  '/assets/images/gallery/4.png',
  '/assets/images/gallery/5.png',
  '/assets/images/gallery/6.png',
  '/assets/images/gallery/7.png',
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? galleryImages.length - 1 : prev - 1
  //   );
  // };

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Check our gallery from the recent events</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${
                  index === 2
                    ? 'col-span-1 md:col-span-3 border-4 border-turquoise rounded-lg'
                    : 'col-span-1'
                }`}
              >
                <Image
                  src={image || '/placeholder.svg'}
                  alt={`Gallery image ${index + 1}`}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg cursor-pointer"
                  onClick={() => openLightbox(image)}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? 'bg-turquoise' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={lightboxImage || '/placeholder.svg'}
              alt="Lightbox image"
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto"
            />
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
