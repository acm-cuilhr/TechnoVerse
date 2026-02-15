// src/components/sponsors/sponsors-display.tsx
'use client';

import type { Sponsor, SponsorCategory } from '@/data/sponsors';
import { categoryStyles } from '@/data/sponsors';
import Marquee from 'react-fast-marquee';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  CrownIcon,
  DiamondIcon,
  GearCircuitIcon,
  GlobeNetworkIcon,
  HandshakeIcon,
  MedalIcon,
} from '@/components/icons/sponsor-icons';

import { SponsorLogo } from './sponsor-logo';

const categoryIcons: Record<
  SponsorCategory,
  React.FC<{ className?: string }>
> = {
  Exclusive: DiamondIcon,
  CoEvent: HandshakeIcon,
  Premium: CrownIcon,
  Standard: MedalIcon,
  Community: GlobeNetworkIcon,
  Technical: GearCircuitIcon,
};

interface SponsorsDisplayProps {
  sponsorsData: Sponsor[];
  categoryOrder: SponsorCategory[];
  useMarqueeFor?: SponsorCategory;
  categoryStyleOverrides?: Partial<typeof categoryStyles>;
  className?: string;
  titleClassName?: string;
  showSeparators?: boolean;
}

export function SponsorsDisplay({
  sponsorsData,
  categoryOrder,
  useMarqueeFor,
  categoryStyleOverrides,
  className = '',
  titleClassName = '',
  showSeparators = true,
}: SponsorsDisplayProps) {
  const styles = { ...categoryStyles, ...categoryStyleOverrides };

  const groupedSponsors = sponsorsData.reduce(
    (acc, sponsor) => {
      (acc[sponsor.category] = acc[sponsor.category] || []).push(sponsor);
      return acc;
    },
    {} as Record<Sponsor['category'], Sponsor[]>
  );

  // Filter out categories that won't be rendered directly (like Premium if combined)
  const renderOrder = categoryOrder.filter((category) => {
    if (category === 'Premium' && groupedSponsors['CoEvent']?.length > 0) {
      return false; // Skip Premium if CoEvent exists (will be combined)
    }
    return true;
  });

  return (
    <div className={`space-y-16 md:space-y-20 ${className}`}>
      {renderOrder.map((category, index) => {
        const sponsors = groupedSponsors[category];
        if (!sponsors || sponsors.length === 0) return null; // Skip empty categories

        let sponsorsToRender = [...sponsors];
        const currentStyle = styles[category];
        let currentTitle = currentStyle.title;
        let currentGridCols = currentStyle.gridCols;
        let sectionKey = category;

        // --- COMBINE CoEvent and Premium ---
        if (category === 'CoEvent') {
          const premiumSponsors = groupedSponsors['Premium'] || [];
          if (premiumSponsors.length > 0) {
            sponsorsToRender = [...sponsors, ...premiumSponsors];
            currentTitle = 'Co-Event & Premium Sponsors';
            // Adjust grid based on combined count - e.g., max 3 wide
            currentGridCols = `grid-cols-1 md:grid-cols-${Math.min(sponsorsToRender.length, 3)}`;
            sectionKey = 'CoEvent';
          }
        }
        // ------------------------------------

        const isMarquee = useMarqueeFor === category;

        // Determine title color based on the *original* category or the combined one
        const titleColor =
          category === 'Exclusive'
            ? 'text-amber-500'
            : category === 'CoEvent' // Catches the combined group too
              ? 'text-yellow-600'
              : 'text-primary';

        return (
          <section key={sectionKey}>
            {showSeparators && index > 0 && (
              <Separator className="my-12 md:my-16 bg-border/60" />
            )}

            <h3
              className={`text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 flex items-center justify-center gap-3 ${titleColor} ${titleClassName}`}
            >
              {(() => {
                const IconComp = categoryIcons[category];
                return IconComp ? (
                  <IconComp className="w-8 h-8 md:w-10 md:h-10 inline-block" />
                ) : null;
              })()}
              {currentTitle}
            </h3>

            {isMarquee ? (
              <Marquee /* ... Marquee props ... */>
                {sponsorsToRender.map((sponsor) => {
                  const sponsorStyle = styles[sponsor.category]; // Get original style
                  return (
                    <div
                      key={sponsor.id}
                      className="mx-6 md:mx-10 w-48 md:w-56 flex items-center justify-center py-4"
                    >
                      <SponsorLogo
                        sponsor={sponsor}
                        heightClass={sponsorStyle.logoHeight} // Use its own height
                      />
                    </div>
                  );
                })}
                <div className="w-6 md:w-10"></div>
              </Marquee>
            ) : (
              <div
                className={`grid ${currentGridCols} gap-6 md:gap-8 items-stretch justify-items-center`} // Use items-stretch & justify-items-center
              >
                {sponsorsToRender.map((sponsor) => {
                  // Get the original style for *this specific sponsor*
                  const sponsorStyle = styles[sponsor.category];
                  return sponsorStyle.cardStyle ? ( // Render based on its *own* style
                    <Card
                      key={sponsor.id}
                      className="bg-card border border-border/70 shadow-lg h-full w-full flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group"
                    >
                      <CardContent className="p-6 md:p-8 w-full flex-grow flex items-center justify-center">
                        <SponsorLogo
                          sponsor={sponsor}
                          heightClass={sponsorStyle.logoHeight}
                        />
                      </CardContent>
                      {/* <CardFooter className="p-4 text-center border-t border-border w-full bg-muted/40">
                        <p className="text-base font-semibold text-card-foreground truncate">
                          {sponsor.name}
                        </p>
                      </CardFooter> */}
                    </Card>
                  ) : (
                    <div
                      key={sponsor.id}
                      className="h-full w-full flex items-center justify-center p-4 md:p-5 bg-background border border-border/50 rounded-lg transition-all duration-200 hover:shadow-lg hover:border-border group"
                    >
                      <SponsorLogo
                        sponsor={sponsor}
                        heightClass={sponsorStyle.logoHeight}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
