// src/data/previous-sponsors.ts (Example file)

export interface PreviousSponsor {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string; // Required for linking
  year?: number;
}

// --- EXAMPLE PREVIOUS SPONSOR DATA ---
export const previousSponsorsData: PreviousSponsor[] = [
  {
    id: '1',
    name: 'Remoteen',
    logoUrl: '/assets/images/sponsors/past/remoteen.png',
    websiteUrl: 'https://www.linkedin.com/company/remoteen/',
    year: 2024,
  },
  {
    id: '2',
    name: 'Notion',
    logoUrl: '/assets/images/sponsors/past/notion-2.png',
    websiteUrl: 'https://www.linkedin.com/company/notionhq/',
    year: 2024,
  },
  {
    id: '3',
    name: 'Alkhidmat',
    logoUrl: '/assets/images/sponsors/past/alkhidmat.png',
    websiteUrl: 'https://www.linkedin.com/company/alkhidmat-foundation-lahore/',
    year: 2024,
  },
  {
    id: '4',
    name: 'NY212 Pizza',
    logoUrl: '/assets/images/sponsors/past/ny212.png',
    websiteUrl: 'https://www.linkedin.com/company/ny212/',
    year: 2024,
  },
  {
    id: '5',
    name: 'GenZ Gaming',
    logoUrl: '/assets/images/sponsors/past/genz.png',
    websiteUrl: 'https://www.instagram.com/genz._.gaming_/',
    year: 2024,
  },
  {
    id: '6',
    name: 'Taco Bite',
    logoUrl: '/assets/images/sponsors/past/taco.png',
    websiteUrl: 'https://www.instagram.com/tacobite.lhr/',
    year: 2024,
  },
];
