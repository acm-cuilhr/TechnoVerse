// src/components/home/event-highlights.tsx (New suggested file name)
'use client';

import {
  Award,
  BrainCircuit,
  Clock4,
  Code,
  Component,
  MicVocal,
  Network,
  Users,
} from 'lucide-react';
// Added more icons
import CountUp from 'react-countup'; // Import react-countup

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// --- Event Stats Data (Replace with realistic estimates for 2025 event) ---
const eventStats = [
  { icon: Award, value: 650, suffix: 'K+', label: 'Prize Pool (PKR)' },
  { icon: Component, value: 11, suffix: '', label: 'Competitions' },
  { icon: Users, value: 1, suffix: 'K+', label: 'Participants Expected' },
  { icon: Clock4, value: 48, suffix: '+', label: 'Hours of Tech & Fun' },
];

// --- Highlight Items Data (Same as before) ---
const highlights = [
  {
    icon: Code,
    title: 'Intense Competitions',
    description:
      'Push your limits in diverse coding, design, gaming, and strategy challenges with attractive prizes.',
  },
  {
    icon: MicVocal,
    title: 'Insightful Talks & Workshops',
    description:
      'Learn from industry experts, gain new skills, and get inspired by the latest tech trends.',
  },
  {
    icon: Network,
    title: 'Networking Hub',
    description:
      'Connect with fellow tech enthusiasts, mentors, potential employers, and future collaborators.',
  },
  {
    icon: BrainCircuit,
    title: 'Innovation Showcase',
    description:
      'Witness creative projects and cutting-edge ideas brought to life by talented participants.',
  },
];
// --- End Data ---

export default function EventHighlights() {
  return (
    <section id="event-highlights" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 section-header">
          <h2>Experience TechnoVerse 4.0</h2>
          <p>
            Dive into Pakistan&rsquo;s premier student tech event – a launchpad
            for innovation, learning, and connection.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-card border-border shadow-md">
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {eventStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <stat.icon
                      className="h-8 w-8 md:h-10 md:w-10 text-secondary mb-2"
                      strokeWidth={1.5}
                    />
                    <p className="text-2xl md:text-4xl font-bold text-primary tracking-tighter">
                      <CountUp
                        end={stat.value}
                        duration={2.75} // Animation duration
                        enableScrollSpy // Start animation when scrolled into view
                        scrollSpyDelay={300} // Delay after scrolling into view
                      />
                      {stat.suffix}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separator or just space */}
        {/* <Separator className="my-16 max-w-xs mx-auto bg-border/50" /> */}

        {/* Highlights Grid (Why Attend?) */}
        <div className="text-center mb-12 md:mb-16">
          {' '}
          {/* Optional sub-header */}
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
            What Awaits You?
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border text-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
            >
              <CardHeader className="flex flex-col items-center p-0 mb-4">
                <div className="mb-3 bg-primary/10 text-primary p-3 rounded-full inline-flex">
                  <item.icon strokeWidth={1.5} size={32} />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
