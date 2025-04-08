// src/components/hero.tsx (or similar path)
'use client';

import { CountdownTimer } from './countdown-timer'; // Assuming countdown-timer is in the same folder

export default function Hero() {
  // Set event date according to current year - May 24, 2025 (Pakistan Standard Time)
  const eventDate = new Date('2025-05-24T09:00:00+05:00'); // Start time 9 AM PST

  return (
    <section
      id="hero"
      className="w-full h-screen bg-[url('/assets/images/hero-bg.jpg')] bg-center bg-cover overflow-hidden relative"
    >
      {/* Use theme primary color for overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>{' '}
      {/* Increased opacity slightly */}
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        {/* Use theme foreground/secondary colors and default font (font-sans) */}
        <h1 className="text-primary-foreground font-semibold text-5xl md:text-7xl uppercase mb-4 tracking-tight">
          Techno<span className="text-secondary">Verse 4.0</span>{' '}
          {/* Added version */}
        </h1>
        <p className="text-primary-foreground/90 text-xl md:text-3xl mb-6">
          <span className="font-medium">EMPOWER</span>,{' '}
          <span className="text-secondary font-medium">INNOVATE</span>,{' '}
          <span className="font-medium">CONNECT</span>
        </p>
        <p className="text-primary-foreground/80 font-medium text-lg md:text-xl mb-8">
          May 24th - 25th, 2025 | COMSATS University Islamabad, Lahore Campus
        </p>
        {/* Render the updated Countdown Timer */}
        <CountdownTimer targetDate={eventDate} />
      </div>
    </section>
  );
}
