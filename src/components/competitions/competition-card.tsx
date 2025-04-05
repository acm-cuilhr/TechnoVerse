// src/components/competition-card.tsx (Example standalone component file)
'use client';

import Image from 'next/image';
import type { Competition } from '@/data/competitions'; // Import the type
import { Info } from 'lucide-react';

import { Card } from '@/components/ui/card'; // Only need Card component here

interface CompetitionCardProps {
  competition: Competition;
  onOpenDetails: (competition: Competition) => void; // Callback to open dialog
}

export function CompetitionCard({
  competition,
  onOpenDetails,
}: CompetitionCardProps) {
  return (
    <Card
      className="relative overflow-hidden rounded-lg bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer pt-0"
      onClick={() => onOpenDetails(competition)} // Trigger dialog on card click
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video">
        {' '}
        {/* Fixed aspect ratio */}
        <Image
          src={competition.image || '/placeholder.svg'}
          alt={competition.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Details Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-card/90 backdrop-blur-sm transition-opacity duration-300">
        {/* Using h3 and p similar to original structure, styled with theme variables */}
        <h3 className="text-lg font-semibold text-card-foreground mb-1 truncate">
          {' '}
          {/* Truncate long names */}
          {competition.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {competition.description}
        </p>
        {/* Optional: Add subtle hint again if needed */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-primary/80 flex items-center bg-card/80 px-1 py-0.5 rounded-sm">
          <Info size={12} className="mr-1" /> Details
        </div>
      </div>
    </Card>
  );
}
