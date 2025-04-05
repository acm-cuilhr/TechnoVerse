// src/app/sponsors/page.tsx
'use client';

import { previousSponsorsData } from '@/data/previous-sponsors';

import HeroSection from '@/components/hero-section';
import { PreviousSponsors } from '@/components/sponsors/previous-sponsors';

export default function SponsorsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        src="/assets/images/2.jpg"
        title="Sponsors & Partners"
        // description="We are grateful to our sponsors and partners for their support in making TechnoVerse 4.0 a success!"
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Use the reusable component */}
        {/* <SponsorsDisplay
          sponsorsData={allSponsorsData}
          categoryOrder={categoryOrder}
          // categoryStyles can be omitted if defaults are okay, or pass custom ones
          // useMarqueeFor is omitted (no marquee on this page)
          showSeparators={true} // Explicitly show separators
        /> */}

        <PreviousSponsors
          sponsors={previousSponsorsData}
          title="Our Esteemed Alumni Supporters"
          className="pt-10 pb-20"
          logoHeightClass="h-32"
          gridCols={{
            base: 'grid-cols-3',
          }}
        />
      </div>
    </div>
  );
}
