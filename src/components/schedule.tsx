'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ScheduleItem {
  time: string;
  title: string;
  subtitle?: string;
}

const dayOneSchedule: ScheduleItem[] = [
  { time: '12:00 PM', title: 'Gathering of Teams' },
  { time: '1:30 PM - 2:00 PM', title: 'Opening Ceremony/ Ribbon Cutting' },
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

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('day-1');

  return (
    <section id="schedule" className="py-16 px-4 bg-lightgray">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Schedule</h2>
          <p>Here is our event schedule</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('day-1')}
              className={cn(
                activeTab === 'day-1' ? 'schedule-tab' : 'schedule-tab-inactive'
              )}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveTab('day-2')}
              className={cn(
                activeTab === 'day-2' ? 'schedule-tab' : 'schedule-tab-inactive'
              )}
            >
              Day 2
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 italic mb-8">
          *Click on the tabs to view the schedule of the respective day
        </p>

        <div className="mx-auto max-w-3xl bg-white rounded-lg overflow-hidden">
          {activeTab === 'day-1'
            ? dayOneSchedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="md:w-1/3 mb-2 md:mb-0 text-navy font-medium">
                    {item.time}
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-1 text-navy">
                      {item.title}
                      {item.subtitle && (
                        <span className="font-normal text-base italic text-navy/70 ml-2">
                          {item.subtitle}
                        </span>
                      )}
                    </h4>
                  </div>
                </div>
              ))
            : dayTwoSchedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="md:w-1/3 mb-2 md:mb-0 text-navy font-medium">
                    {item.time}
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-semibold mb-1 text-navy">
                      {item.title}
                      {item.subtitle && (
                        <span className="font-normal text-base italic text-navy/70 ml-2">
                          {item.subtitle}
                        </span>
                      )}
                    </h4>
                  </div>
                </div>
              ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/files/TechnoVerse-Document.pdf"
            className="competition-guide-btn"
            download
          >
            Download Competition Guide
          </a>
        </div>
      </div>
    </section>
  );
}
