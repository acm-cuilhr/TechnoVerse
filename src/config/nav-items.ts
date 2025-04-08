export interface NavItem {
  label: string;
  href: string;
  type: 'page' | 'hash';
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', type: 'page' },
  { label: 'About', href: '/about', type: 'page' },
  { label: 'Competitions', href: '/competitions', type: 'page' },
  // { label: 'Schedule', href: '/schedule', type: 'page' }, // Add if you create a schedule page
  { label: 'Sponsors', href: '/sponsors', type: 'page' },
  { label: 'Team', href: '/team', type: 'page' },
  { label: 'Contact', href: '/#contact', type: 'hash' },
];
