import React from 'react';
import { GraduationCap, Handshake, Trophy, UserCheck } from 'lucide-react';

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
    id: 'chair',
    name: 'Sufyan Ahmad',
    position: 'Chairperson',
    email: 'sufyexpert@gmail.com',
    phone: '+92 303 6135450',
    icon: UserCheck,
  },
  {
    id: 'vice-chair',
    name: 'Hadeeq Ahmad',
    position: 'Vice Chairperson',
    email: 'hadeeqahmed404@gmail.com',
    phone: '+92 304 5101263',
    icon: Trophy,
  },
  {
    id: 'chapter',
    name: 'ACM CUI Lahore',
    position: 'Chapter Contact',
    email: 'acmchapter@cuilahore.com',
    icon: Handshake,
  },
  {
    id: 'advisor',
    name: 'Imran Raza',
    position: 'Faculty Advisor',
    email: 'iraza@cuilahore.edu.pk',
    icon: GraduationCap,
  },
];
