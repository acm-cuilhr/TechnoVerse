// src/components/home/gallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import { cn } from '@/lib/utils';

import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

const baseImages = [
  { src: '/assets/images/gallery/4.png', alt: 'Gallery image 4' },
  { src: '/assets/images/gallery/11.JPG', alt: 'Gallery image 11' },
  { src: '/assets/images/gallery/6.png', alt: 'Gallery image 6' },
  { src: '/assets/images/gallery/8.png', alt: 'Gallery image 8' },
  { src: '/assets/images/gallery/9.JPG', alt: 'Gallery image 9' },
  { src: '/assets/images/gallery/10.JPG', alt: 'Gallery image 10' },
  { src: '/assets/images/gallery/12.JPG', alt: 'Gallery image 12' },
  { src: '/assets/images/gallery/5.png', alt: 'Gallery image 5' },
  { src: '/assets/images/gallery/16.JPG', alt: 'Gallery image 16' },
  { src: '/assets/images/gallery/19.JPG', alt: 'Gallery image 19' },
  { src: '/assets/images/gallery/13.JPG', alt: 'Gallery image 13' },
  { src: '/assets/images/gallery/18.JPG', alt: 'Gallery image 18' },
  { src: '/assets/images/gallery/1.png', alt: 'Gallery image 1' },
  { src: '/assets/images/gallery/3.png', alt: 'Gallery image 3' },
  { src: '/assets/images/gallery/2.png', alt: 'Gallery image 2' },
  { src: '/assets/images/gallery/7.png', alt: 'Gallery image 7' },
  { src: '/assets/images/gallery/14.JPG', alt: 'Gallery image 14' },
  { src: '/assets/images/gallery/15.JPG', alt: 'Gallery image 15' },
  { src: '/assets/images/gallery/17.JPG', alt: 'Gallery image 17' },
  { src: '/assets/images/gallery/20.JPG', alt: 'Gallery image 20' },
];

// Create a longer array by repeating the base images and adding unique IDs
const galleryImages = [
  ...baseImages.map((img, i) => ({ ...img, id: `img-set1-${i}` })),
];

// Layout classes remain the same
const layoutClasses = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  'md:row-span-2',
  '',
  '',
  'md:row-span-2',
  'md:row-span-2',
  '',
  '',
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const slides = galleryImages.map((img) => ({ src: img.src, alt: img.alt }));

  return (
    <section id="gallery" className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 section-header">
          <h2>Event Gallery</h2>
          <p>
            A glimpse into the energy and excitement of past TechnoVerse events.
          </p>
        </div>

        {/* Responsive Collage/Bento Grid */}
        {/* ADD grid-auto-flow-dense HERE */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 grid-auto-flow-dense">
          {galleryImages.map((image, index) => (
            <div
              key={image.id} // Use the unique ID for the key
              className={cn(
                'relative overflow-hidden rounded-lg group cursor-pointer shadow-sm border border-border/50',
                // Apply layout class based on index, cycling through the layout patterns
                layoutClasses[index % layoutClasses.length]
              )}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                priority={index < 8} // Prioritize loading images visible above the fold (adjust number as needed)
              />
              {/* Subtle overlay/icon on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                <Maximize className="text-white h-6 w-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Optional Carousel - code omitted for brevity */}
      </div>

      {/* Render the Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={closeLightbox}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        styles={{ container: { backgroundColor: 'rgba(10, 10, 10, .9)' } }}
        zoom={{ maxZoomPixelRatio: 3 }}
        thumbnails={{ position: 'bottom', height: 80, gap: 4 }}
      />
    </section>
  );
}
