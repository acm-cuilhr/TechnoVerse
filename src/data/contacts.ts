import React from 'react';
import { Handshake, Trophy, UserCheck, Users } from 'lucide-react';

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
    name: 'Syed Asfar Ahmad Bukhari',
    position: 'Registration Lead',
    email: 'syedasfar27@gmail.com',
    phone: '+923184318539',
    icon: UserCheck,
  },
  {
    id: 'comp',
    name: 'Ahmad Raza',
    position: 'Competitions Lead',
    email: 'competitions.technoverse@example.com',

    icon: Trophy,
  },
  {
    id: 'spons',
    name: 'Fatima Khan',
    position: 'Sponsorship Lead',
    email: 'sponsorship.technoverse@example.com',

    icon: Handshake,
  },
  {
    id: 'amb',
    name: 'Bilal Ahmed',
    position: 'Ambassador Program Lead',
    email: 'ambassadors.technoverse@example.com',

    icon: Users,
  },
];
