// src/components/sponsors/previous-sponsors-grid.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { PreviousSponsor } from '@/data/previous-sponsors'; // Adjust import path

import { cn } from '@/lib/utils';

interface PreviousSponsorsGridProps {
  sponsors: PreviousSponsor[];
  title?: string; // Optional title for the section
  // Control logo height (e.g., "h-12", "h-16") - affects density
  logoHeightClass?: string;
  // Control grid columns for responsiveness
  gridCols?: {
    base: string; // e.g., 'grid-cols-2'
    sm?: string; // e.g., 'sm:grid-cols-3'
    md?: string; // e.g., 'md:grid-cols-4'
    lg?: string; // e.g., 'lg:grid-cols-5'
    xl?: string; // e.g., 'xl:grid-cols-6'
  };
  className?: string; // Optional class for the main section container
  titleClassName?: string; // Optional class for the title
}

// Sensible defaults for grid columns
const defaultGridCols = {
  base: 'grid-cols-3',
  sm: 'sm:grid-cols-4',
  md: 'md:grid-cols-5',
  lg: 'lg:grid-cols-6',
};

export function PreviousSponsors({
  sponsors,
  title = 'With Gratitude to Our Past Supporters', // Default title
  logoHeightClass = 'h-14', // Default logo height
  gridCols = defaultGridCols, // Use defaults if not provided
  className = '',
  titleClassName = '',
}: PreviousSponsorsGridProps) {
  // Don't render anything if there are no sponsors
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  // Construct grid classes string from prop
  const gridClasses = cn(
    'grid gap-6  items-center justify-items-center',
    gridCols.base,
    gridCols.sm,
    gridCols.md,
    gridCols.lg,
    gridCols.xl
  );

  return (
    <section className={cn('py-12 md:py-16', className)}>
      {' '}
      {/* Section padding */}
      <div className="container mx-auto section-header">
        {/* Section Title */}
        {title && (
          <h2
            className={cn(
              'mb-8 md:mb-10 text-3xl md:text-4xl font-semibold text-primary flex justify-center items-center gap-2',
              titleClassName
            )}
          >
            {title}
          </h2>
        )}

        {/* Sponsor Grid */}
        <div className={gridClasses}>
          {sponsors.map((sponsor) => (
            <Link
              key={sponsor.id}
              href={sponsor.websiteUrl} // Required field
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 filter hover:filter-none transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md flex justify-center items-center w-full" // Ensure link fills grid cell area
              aria-label={`Visit ${sponsor.name}`}
              title={sponsor.name} // Tooltip on hover
            >
              <div
                className={cn('relative w-full max-w-[150px]', logoHeightClass)}
              >
                {' '}
                {/* Control size primarily via height, add max-width */}
                <Image
                  src={sponsor.logoUrl}
                  alt={`${sponsor.name} logo`}
                  // Provide layout hint - fill is suitable here if parent has fixed height
                  fill
                  className="object-contain" // Use contain to prevent cropping
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 15vw" // Approximate sizes
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
