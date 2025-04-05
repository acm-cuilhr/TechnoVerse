// src/components/schedule.tsx (or similar path)
'use client';

import { useState } from 'react';
import { CalendarDays, Download } from 'lucide-react'; // Import icons

import { Button } from '@/components/ui/button'; // Import Shadcn Button
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // Import Shadcn Tabs

interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
}

// Schedule data remains the same
const dayOneSchedule: ScheduleItem[] = [
  { time: '12:00 PM', title: 'Gathering of Teams' },
  { time: '1:30 PM - 2:00 PM', title: 'Opening Ceremony / Ribbon Cutting' },
  { time: '2:00 PM - 7:00 PM', title: 'Fifa / Tekken', subtitle: 'Round 1' },
  { time: '2:30 PM - 4:00 PM', title: 'Panel / Speaker Talks' },
  { time: '04:00 PM - 06:00 PM', title: 'Poster Design' },
  { time: '07:00 PM', title: 'Palestine Solidarity Activity' },
];

const dayTwoSchedule: ScheduleItem[] = [
  { time: '10:00 AM - 3:00 PM', title: 'Web-e-Thon' },
  { time: '10:00 AM - 3:00 PM', title: 'Fifa / Tekken', subtitle: 'Round 2' },
  { time: '10:30 AM - 12:00 PM', title: 'Coding Spree', subtitle: 'Round 1' },
  { time: '01:00 PM - 03:00 PM', title: 'Coding Spree', subtitle: 'Round 2' },
  { time: '01:00 PM - 03:00 PM', title: 'Notion Template Design' },
  { time: '03:00 PM - 06:00 PM', title: 'Techno Hunt' },
  { time: '07:00 PM', title: 'Closing Ceremony / Exclusive Dinner' },
];

// Reusable component for displaying schedule rows
const ScheduleRow = ({ item }: { item: ScheduleItem }) => (
  <div className="flex flex-col md:flex-row border-b border-border last:border-b-0 py-4 px-4 hover:bg-muted/50 transition-colors duration-200">
    <div className="md:w-1/4 mb-2 md:mb-0 text-sm font-medium text-muted-foreground">
      {item.time}
    </div>
    <div className="md:w-3/4">
      <h4 className="text-base sm:text-lg font-semibold mb-0 text-foreground">
        {' '}
        {/* Adjusted text size */}
        {item.title}
        {item.subtitle && (
          <span className="block sm:inline font-normal text-sm sm:text-base italic text-muted-foreground sm:ml-2">
            {' '}
            {/* Adjusted text size */}({item.subtitle}){' '}
            {/* Changed format slightly */}
          </span>
        )}
      </h4>
    </div>
  </div>
);

export default function Schedule() {
  // Default active tab based on current date? Or just Day 1.
  // For simplicity, let's keep Day 1 as default.
  const [activeTab, setActiveTab] = useState('day-1');

  return (
    // Use theme background (muted for slight contrast) and padding
    <section id="schedule" className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header using theme colors */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3 flex items-center justify-center">
            <CalendarDays size={28} className="mr-3 opacity-90" /> Event
            Schedule
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Plan your participation across the two days.
          </p>
        </div>

        {/* Shadcn Tabs for Day 1 / Day 2 */}
        <Tabs
          defaultValue="day-1"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-2 h-12 mb-8">
            {' '}
            {/* Use grid for equal width */}
            <TabsTrigger
              value="day-1"
              className="text-base h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {' '}
              {/* Style active tab */}
              Day 1 <span className="hidden sm:inline ml-1"> (May 24th)</span>
            </TabsTrigger>
            <TabsTrigger
              value="day-2"
              className="text-base h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Day 2 <span className="hidden sm:inline ml-1"> (May 25th)</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent
            value="day-1"
            className="bg-card rounded-lg border border-border shadow-sm overflow-hidden"
          >
            {dayOneSchedule.map((item, index) => (
              <ScheduleRow key={`day1-${index}`} item={item} />
            ))}
          </TabsContent>
          <TabsContent
            value="day-2"
            className="bg-card rounded-lg border border-border shadow-sm overflow-hidden"
          >
            {dayTwoSchedule.map((item, index) => (
              <ScheduleRow key={`day2-${index}`} item={item} />
            ))}
          </TabsContent>
        </Tabs>

        {/* Download Button using Shadcn Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="secondary">
            <a href="/files/TechnoVerse-Document.pdf" download>
              {' '}
              {/* Ensure this path is correct */}
              <Download className="mr-2 h-5 w-5" />
              Download Competition Guide
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
