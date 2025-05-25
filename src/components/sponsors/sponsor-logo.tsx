// src/components/sponsors/sponsor-logo.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Sponsor } from '@/data/sponsors';

interface SponsorLogoProps {
  sponsor: Sponsor;
  heightClass: string; // e.g., "h-24"
  className?: string; // For additional container styling (like padding)
}

export function SponsorLogo({
  sponsor,
  heightClass,
  className = '',
}: SponsorLogoProps) {
  const content = (
    <div
      // Use w-full to fill parent, heightClass sets the height.
      className={`relative w-64 md:w-96 ${heightClass} group-hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}
    >
      <Image
        src={sponsor.logoUrl}
        alt={`${sponsor.name} logo`}
        fill // Requires parent to be relative and have dimensions.
        className="object-contain"
        sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 15vw"
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
        className="block p-2 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
        aria-label={`Visit ${sponsor.name}`}
      >
        {content}
      </Link>
    );
  }

  // Render just the image container if no link (still add padding)
  return <div className="block p-2">{content}</div>;
}
