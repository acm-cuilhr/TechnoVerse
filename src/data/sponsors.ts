// src/data/sponsors.ts (Example file path)

export type SponsorCategory =
  | 'Platinum'
  | 'Gold'
  | 'Silver'
  | 'Media'
  | 'Community'
  | 'Technical';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  category: SponsorCategory;
  description?: string; // Optional: Short description for Platinum/Gold?
}

// --- EXAMPLE SPONSOR DATA ---
// Replace with your actual sponsors
export const allSponsorsData: Sponsor[] = [
  // Platinum
  {
    id: 'p1',
    name: 'Forestudio',
    logoUrl: '/assets/images/sponsors/forestudio.png',
    category: 'Platinum',
    websiteUrl: '#',
    description: 'Leading creative digital agency.',
  },

  // Gold
  {
    id: 'g1',
    name: 'Notion',
    logoUrl: '/assets/images/sponsors/notion.png',
    category: 'Gold',
    websiteUrl: '#',
  },
  {
    id: 'g2',
    name: 'W3PAK',
    logoUrl: '/assets/images/sponsors/w3pak.png',
    category: 'Gold',
    websiteUrl: '#',
  },
  {
    id: 'g3',
    name: 'Gold Sponsor 3',
    logoUrl: '/assets/images/sponsors/gold3.png',
    category: 'Gold',
    websiteUrl: '#',
  },

  // Silver
  {
    id: 's1',
    name: 'Silver Sponsor 1',
    logoUrl: '/assets/images/sponsors/silver1.png',
    category: 'Silver',
    websiteUrl: '#',
  },
  {
    id: 's2',
    name: 'Silver Sponsor 2',
    logoUrl: '/assets/images/sponsors/silver2.png',
    category: 'Silver',
    websiteUrl: '#',
  },
  {
    id: 's3',
    name: 'Silver Sponsor 3',
    logoUrl: '/assets/images/sponsors/silver3.png',
    category: 'Silver',
    websiteUrl: '#',
  },

  // Media Partners
  {
    id: 'm1',
    name: 'Media Partner 1',
    logoUrl: '/assets/images/partners/media1.png',
    category: 'Media',
    websiteUrl: '#',
  },
  {
    id: 'm2',
    name: 'Media Partner 2',
    logoUrl: '/assets/images/partners/media2.png',
    category: 'Media',
    websiteUrl: '#',
  },

  // Community Partners
  {
    id: 'c1',
    name: 'Community Partner 1',
    logoUrl: '/assets/images/partners/comm1.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c2',
    name: 'Community Partner 2',
    logoUrl: '/assets/images/partners/comm2.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c3',
    name: 'Community Partner 3',
    logoUrl: '/assets/images/partners/comm3.png',
    category: 'Community',
    websiteUrl: '#',
  },

  // Technical Collaborators
  {
    id: 't1',
    name: 'Tech Collaborator 1',
    logoUrl: '/assets/images/partners/tech1.png',
    category: 'Technical',
    websiteUrl: '#',
  },
];
// --- END OF EXAMPLE DATA ---

// Define display order and styling for categories
export const categoryOrder: SponsorCategory[] = [
  'Platinum',
  'Gold',
  'Silver',
  'Media',
  'Community',
  'Technical',
];

export const categoryStyles: Record<
  SponsorCategory,
  { title: string; gridCols: string; logoHeight: string; cardStyle?: boolean }
> = {
  Platinum: {
    title: 'Platinum Sponsors',
    gridCols: 'grid-cols-1 md:grid-cols-2',
    logoHeight: 'h-28 md:h-36',
    cardStyle: true,
  },
  Gold: {
    title: 'Gold Sponsors',
    gridCols: 'grid-cols-2 md:grid-cols-3',
    logoHeight: 'h-24 md:h-28',
    cardStyle: true,
  },
  Silver: {
    title: 'Silver Sponsors',
    gridCols: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    logoHeight: 'h-20 md:h-24',
  },
  Media: {
    title: 'Media Partners',
    gridCols: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5',
    logoHeight: 'h-16',
  },
  Community: {
    title: 'Community Partners',
    gridCols: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5',
    logoHeight: 'h-16',
  },
  Technical: {
    title: 'Technical Collaborators',
    gridCols: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5',
    logoHeight: 'h-16',
  },
};
