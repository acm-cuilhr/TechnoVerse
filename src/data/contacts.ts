import React from 'react';
import { Handshake, Trophy, UserCheck } from 'lucide-react';

export interface ContactPerson {
  id: string;
  name: string;
  position: string;
  email?: string;
  phone?: string;
  icon: React.ElementType;
}

export const contactLeadsData: ContactPerson[] = [
  {
    id: 'reg',
    name: 'Shafin-uz-Zaman',
    position: 'Registrations Lead',
    email: 'shafinzaman42@gmail.com',
    phone: '+923124414587',
    icon: UserCheck,
  },
  {
    id: 'comp',
    name: 'Waqas-ul-Hassan',
    position: 'Competitions Coordinator',
    email: 'competitions.technoverse@example.com',
    phone: '+923281189011',
    icon: Trophy,
  },
  {
    id: 'spons',
    name: 'Ali Hamza',
    position: 'Sponsorship Lead',
    email: ' hamzaiftikhhar@gmail.com',
    phone: '+923114564233',
    icon: Handshake,
  },
  // {
  //   id: 'amb',
  //   name: 'Bilal Ahmed',
  //   position: 'Ambassador Program Lead',
  //   email: 'ambassadors.technoverse@example.com',

  //   icon: Users,
  // },
];
