// src/data/sponsors.ts

// Define the new, more descriptive sponsor categories
export type SponsorCategory =
  | 'Exclusive'
  | 'CoEvent'
  | 'Premium' // For > 50k sponsors (excluding the top two)
  | 'Standard' // For <= 50k sponsors
  | 'Community'
  | 'Technical';

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
  category: SponsorCategory;
  description?: string; // Can be used for top-tier descriptions
}

// --- UPDATED SPONSOR DATA ---
export const allSponsorsData: Sponsor[] = [
  // Exclusive Sponsor (3 Lac)
  {
    id: 'ex1',
    name: 'InvoZone',
    logoUrl: '/assets/images/sponsors/present/invozone-logo.svg',
    category: 'Exclusive',
    websiteUrl: '#',
    description: 'Our Exclusive Partner Powering the Event.',
  },

  // Co-Event Sponsor (80k)
  {
    id: 'co1',
    name: 'FirstPassAI',
    logoUrl: '/assets/images/sponsors/present/firstpassai-logo.jpg',
    category: 'CoEvent',
    websiteUrl: '#',
    description: 'Our Valued Co-Event Partner.',
  },

  // Premium Sponsor (> 50k - Assuming Lordevs fits here)
  {
    id: 'pr1',
    name: 'Lordevs',
    logoUrl: '/assets/images/sponsors/present/lordevs-logo.png',
    category: 'Premium',
    websiteUrl: '#',
  },

  // Standard Sponsors (<= 50k - Assuming Silver fits here)
  {
    id: 'st1',
    name: 'Winnors',
    logoUrl: '/assets/images/sponsors/present/winnors-logo.jpg', // Updated extension
    category: 'Standard',
    websiteUrl: '#',
  },
  {
    id: 'st2',
    name: 'Alikhidmat',
    logoUrl: '/assets/images/sponsors/present/alikhidmat-logo.png',
    category: 'Standard',
    websiteUrl: '#',
  },

  // Community Partners
  {
    id: 'c1',
    name: 'ACM Superior University',
    logoUrl: '/assets/images/community-partners/acm-sup.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c2',
    name: 'AWS Cloud Community',
    logoUrl: '/assets/images/community-partners/aws.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c3',
    name: 'Codemo',
    logoUrl: '/assets/images/community-partners/codemo.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c4',
    name: 'Cofiniti NCBA&C',
    logoUrl: '/assets/images/community-partners/cofiniti-ncba.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c5',
    name: 'Decentral Developers',
    logoUrl: '/assets/images/community-partners/dd.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c6',
    name: 'Dr. Coders',
    logoUrl: '/assets/images/community-partners/dr-coders.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c7',
    name: 'Freelancers Guild',
    logoUrl: '/assets/images/community-partners/freelancers-guild.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c8',
    name: 'GDGoC Bahria University',
    logoUrl: '/assets/images/community-partners/gdgoc-bahria.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c9',
    name: 'GDGoC BNU',
    logoUrl: '/assets/images/community-partners/gdgoc-bnu.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c10',
    name: 'IEEE UMT',
    logoUrl: '/assets/images/community-partners/ieee-umt.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c11',
    name: 'MLSA UCP',
    logoUrl: '/assets/images/community-partners/mlsa-ucp.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c12',
    name: 'MUL Seekers Club',
    logoUrl: '/assets/images/community-partners/mul-seekers.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c13',
    name: 'PuCon',
    logoUrl: '/assets/images/community-partners/pucon.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c14',
    name: 'Riphah',
    logoUrl: '/assets/images/community-partners/riphah.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c15',
    name: 'SCI-Tech',
    logoUrl: '/assets/images/community-partners/sci-tech.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c16',
    name: 'Skill Sprint',
    logoUrl: '/assets/images/community-partners/skillsprint.png',
    category: 'Community',
    websiteUrl: '#',
  },
  {
    id: 'c17',
    name: 'Tech Hierarchy',
    logoUrl: '/assets/images/community-partners/tech-hierarchy.png',
    category: 'Community',
    websiteUrl: '#',
  },

  // Technical Collaborators
  {
    id: 't1',
    name: 'GDGoC COMSATS',
    logoUrl: '/assets/images/collaborators/gdgoc-cui-logo.png',
    category: 'Technical',
    websiteUrl: '#',
  },
  {
    id: 't2',
    name: 'MLSA COMSATS',
    logoUrl: '/assets/images/collaborators/mlsa-cui-logo.png',
    category: 'Technical',
    websiteUrl: '#',
  },
];
// --- END OF UPDATED DATA ---

// Define the new display order (Media removed)
export const categoryOrder: SponsorCategory[] = [
  'Exclusive',
  'CoEvent', // We'll handle combining this with Premium during render
  'Premium',
  'Standard',
  'Community',
  'Technical',
];

// Define new display styles for these categories
export const categoryStyles: Record<
  SponsorCategory,
  { title: string; gridCols: string; logoHeight: string; cardStyle?: boolean }
> = {
  Exclusive: {
    title: '💎 Exclusive Sponsor',
    gridCols: 'grid-cols-1', // Only one column, centered
    logoHeight: 'h-36 md:h-44',
    cardStyle: true,
  },
  CoEvent: {
    title: '🤝 Co-Event Sponsor', // This title might not be used if combined
    gridCols: 'grid-cols-1 md:grid-cols-2', // Base style if not combined
    logoHeight: 'h-32 md:h-40',
    cardStyle: true,
  },
  Premium: {
    title: '🥇 Premium Sponsors', // This title might not be used if combined
    gridCols: 'grid-cols-1 md:grid-cols-2',
    logoHeight: 'h-28 md:h-32',
    cardStyle: true,
  },
  Standard: {
    title: '🥈 Standard Sponsors',
    gridCols: 'grid-cols-1 md:grid-cols-2',
    logoHeight: 'h-24 md:h-28',
    cardStyle: true, // Changed to false for better hierarchy (simple box)
  },
  Community: {
    title: '🌐 Community Partners',
    gridCols: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6',
    logoHeight: 'h-20 md:h-28',
    cardStyle: true,
  },
  Technical: {
    title: '⚙️ Technical Collaborators',
    gridCols: 'grid-cols-2',
    logoHeight: 'h-16 md:h-32',
    cardStyle: true,
  },
};
