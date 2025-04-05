// src/components/sponsors/sponsor-logo.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Sponsor } from '@/data/sponsors'; // Assuming type is defined here or imported

interface SponsorLogoProps {
  sponsor: Sponsor;
  heightClass: string; // e.g., "h-24"
  className?: string; // For additional container styling
}

export function SponsorLogo({
  sponsor,
  heightClass,
  className = '',
}: SponsorLogoProps) {
  const content = (
    <div
      className={`relative w-full ${heightClass} flex items-center justify-center ${className}`}
    >
      <Image
        src={sponsor.logoUrl}
        alt={`${sponsor.name} logo`}
        fill
        className="object-contain" // Ensures logo fits within dimensions
        sizes="(max-width: 768px) 25vw, (max-width: 1200px) 20vw, 15vw" // Generic sizes
      />
    </div>
  );

  // Make clickable only if websiteUrl exists
  if (sponsor.websiteUrl && sponsor.websiteUrl !== '#') {
    return (
      <Link
        href={sponsor.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
        aria-label={`Visit ${sponsor.name}`}
      >
        {content}
      </Link>
    );
  }

  // Render just the image container if no link
  return <div className="p-2">{content}</div>;
}
