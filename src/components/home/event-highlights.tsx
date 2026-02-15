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
  { icon: Award, value: 750, suffix: 'K+', label: 'Prize Pool (PKR)' },
  { icon: Component, value: 13, suffix: '', label: 'Competitions' },
  { icon: Users, value: 3, suffix: 'K+', label: 'Participants Expected' },
  { icon: Clock4, value: 48, suffix: '+', label: 'Hours of Tech & Fun' },
];

// --- Highlight Items Data (Same as before) ---
const highlights = [
  {
    icon: Code,
    title: '13 Competitions',
    description:
      '8 tech and 5 non-tech competitions — from coding and ML to gaming and reels — with over 750K in prizes.',
  },
  {
    icon: MicVocal,
    title: 'Workshops & Panel Talks',
    description:
      'Industry-led workshops and interactive sessions to sharpen your skills and broaden your perspective.',
  },
  {
    icon: Network,
    title: 'Walk-in Interviews',
    description:
      'Submit resumes, interact with HR teams, and explore internship or job openings on the spot.',
  },
  {
    icon: BrainCircuit,
    title: 'Innovation & Exhibition',
    description:
      'Showcase projects, explore software house stalls, and connect with startups offering real opportunities.',
  },
];
// --- End Data ---

export default function EventHighlights() {
  return (
    <section id="event-highlights" className="py-16 md:py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 section-header">
          <h2>Experience TechnoVerse 5.0</h2>
          <p>
            Dive into Pakistan&rsquo;s premier student tech event — 13
            competitions, workshops, walk-in interviews, and two unforgettable
            days of innovation.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          {/* Decorative glow behind stats */}
          <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 via-primary/10 to-secondary/20 rounded-2xl blur-xl opacity-60" />
          <Card className="relative bg-card border-border shadow-md overflow-hidden">
            {/* Top gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {eventStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="mb-2 p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                      <stat.icon
                        className="h-8 w-8 md:h-10 md:w-10 text-secondary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-2xl md:text-4xl font-bold text-primary tracking-tighter">
                      <CountUp
                        end={stat.value}
                        duration={2.75}
                        enableScrollSpy
                        scrollSpyDelay={300}
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
              className="bg-card border-border text-center p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative overflow-hidden"
            >
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />
              <CardHeader className="flex flex-col items-center p-0 mb-4">
                <div className="mb-3 bg-primary/10 text-primary p-3 rounded-full inline-flex group-hover:bg-primary/15 group-hover:text-primary transition-colors duration-300">
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
