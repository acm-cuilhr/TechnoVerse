// src/components/home/sponsors-section.tsx (New name for the home section component)
'use client';

import { allSponsorsData, categoryOrder } from '@/data/sponsors';
import { Handshake } from 'lucide-react';

import { SponsorsDisplay } from '@/components/sponsors/sponsors-display'; // Import the reusable component

// Removed Link and Button imports if not needed here anymore

export default function SponsorsSection() {
  // Optional: Define slightly different styles for home if needed
  // const homeCategoryStyles = {
  //    ...categoryStyles,
  //    Silver: { ...categoryStyles.Silver, gridCols: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5' } // Example: Denser grid for Silver on home
  // };

  return (
    <section id="sponsors" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3 flex items-center justify-center">
            <Handshake size={28} className="mr-3 opacity-90" /> Our Valued
            Supporters
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are proud to partner with leading organizations in the industry.
          </p>
        </div>

        {/* Use the reusable component */}
        <SponsorsDisplay
          sponsorsData={allSponsorsData}
          categoryOrder={categoryOrder}
          // categoryStyles={homeCategoryStyles} // Pass overrides if defined
          useMarqueeFor="Community" // Specify marquee for this category
          showSeparators={true} // Or set to false if you want fewer lines on home
        />

        {/* Removed "View All" button */}
      </div>
    </section>
  );
}
