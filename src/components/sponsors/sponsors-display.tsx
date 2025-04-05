// src/components/sponsors/sponsors-display.tsx
'use client';

import type { Sponsor, SponsorCategory } from '@/data/sponsors'; // Import types
import { categoryStyles } from '@/data/sponsors'; // Import styles config
import Marquee from 'react-fast-marquee';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { SponsorLogo } from './sponsor-logo'; // Import the logo component

interface SponsorsDisplayProps {
  sponsorsData: Sponsor[];
  categoryOrder: SponsorCategory[];
  // Optional: Specify which category should use marquee (e.g., "Community")
  useMarqueeFor?: SponsorCategory;
  // Optional: Override default styles if needed for a specific context
  categoryStyleOverrides?: Partial<typeof categoryStyles>;
  className?: string; // Optional class for the main container div
  titleClassName?: string; // Optional class for category titles
  showSeparators?: boolean; // Control if separators are shown
}

export function SponsorsDisplay({
  sponsorsData,
  categoryOrder,
  useMarqueeFor,
  categoryStyleOverrides,
  className = '',
  titleClassName = '',
  showSeparators = true, // Default to showing separators
}: SponsorsDisplayProps) {
  // Merge base styles with overrides if provided
  const styles = { ...categoryStyles, ...categoryStyleOverrides };

  // Group sponsors by category
  const groupedSponsors = sponsorsData.reduce(
    (acc, sponsor) => {
      (acc[sponsor.category] = acc[sponsor.category] || []).push(sponsor);
      return acc;
    },
    {} as Record<Sponsor['category'], Sponsor[]>
  );

  return (
    <div className={`space-y-12 md:space-y-16 ${className}`}>
      {categoryOrder.map((category, index) => {
        const sponsors = groupedSponsors[category];
        const categoryStyle = styles[category]; // Use potentially merged styles
        if (!sponsors || sponsors.length === 0) return null; // Skip empty categories

        const isMarquee = useMarqueeFor === category;

        return (
          <section key={category}>
            {/* Add separator before all but the first category if enabled */}
            {showSeparators && index > 0 && (
              <Separator className="my-10 md:my-12 bg-border/60" />
            )}

            {/* Category Title */}
            <h3
              className={`text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 text-${category === 'Platinum' ? 'secondary' : 'primary'} ${titleClassName}`}
            >
              {categoryStyle.title}
            </h3>

            {/* Conditional Rendering: Marquee or Grid */}
            {isMarquee ? (
              <Marquee
                pauseOnHover={true}
                gradient={true}
                gradientColor="hsl(var(--background))" // Use theme bg for gradient
                gradientWidth={50}
                speed={40}
              >
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="mx-5 flex items-center justify-center py-2"
                  >
                    {' '}
                    {/* Padding for marquee items */}
                    <SponsorLogo
                      sponsor={sponsor}
                      heightClass={categoryStyle.logoHeight}
                      className="w-auto"
                    />
                  </div>
                ))}
                <div className="w-5"></div> {/* Extra space at end */}
              </Marquee>
            ) : (
              // Render Grid
              <div
                className={`grid ${categoryStyle.gridCols} gap-6 md:gap-8 items-center justify-center`}
              >
                {sponsors.map((sponsor) =>
                  // Use Card for specific categories based on style config
                  categoryStyle.cardStyle ? (
                    <Card
                      key={sponsor.id}
                      className="bg-card border-border shadow-sm h-full flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-0 w-full flex-grow flex items-center justify-center">
                        <SponsorLogo
                          sponsor={sponsor}
                          heightClass={categoryStyle.logoHeight}
                          className="w-full p-2"
                        />
                      </CardContent>
                      {/* Optional: Add text content within card if needed */}
                      {/*
                      <div className="p-2 text-center border-t border-border w-full">
                         <p className="text-sm font-medium text-card-foreground truncate">{sponsor.name}</p>
                      </div>
                      */}
                    </Card>
                  ) : (
                    // Simpler display (e.g., for partners)
                    <div
                      key={sponsor.id}
                      className="flex items-center justify-center p-2 bg-card/30 border border-border/30 rounded-lg"
                    >
                      <SponsorLogo
                        sponsor={sponsor}
                        heightClass={categoryStyle.logoHeight}
                        className="w-auto"
                      />
                    </div>
                  )
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
