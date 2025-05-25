// src/components/home/sponsors-section.tsx
'use client';

import { allSponsorsData, categoryOrder } from '@/data/sponsors';

import { SponsorsDisplay } from '@/components/sponsors/sponsors-display';

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="py-20 md:py-28 px-4 bg-muted/40 border-t border-b border-border/30" // Added border-b
    >
      <div className="container mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 flex items-center justify-center gap-x-3 tracking-tight">
            Our Valued Supporters
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We extend our heartfelt gratitude to the sponsors and partners whose
            generous support makes this event possible and drives innovation
            forward.
          </p>
        </div>

        <SponsorsDisplay
          sponsorsData={allSponsorsData}
          categoryOrder={categoryOrder}
          useMarqueeFor="Community" // Example: Marquee for Community
          showSeparators={true}
        />
      </div>
    </section>
  );
}
