// src/components/hero.tsx
'use client';

import { Button } from '../ui/button';
import { CountdownTimer } from './countdown-timer';

export default function Hero() {
  const eventDate = new Date('2026-05-02T09:00:00+05:00');

  return (
    <section
      id="hero"
      className="w-full h-screen bg-background overflow-hidden relative"
    >
      {/* Background image with heavy dark overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.jpg')] bg-center bg-cover opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

      {/* Grid pattern with cross markers */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="crossGrid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="30"
                y1="26"
                x2="30"
                y2="34"
                stroke="currentColor"
                strokeWidth="0.4"
                className="text-primary/30"
              />
              <line
                x1="26"
                y1="30"
                x2="34"
                y2="30"
                stroke="currentColor"
                strokeWidth="0.4"
                className="text-primary/30"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#crossGrid)"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Large red metallic fluid blob - LEFT side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[400px] h-[500px] z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-[60%_40%_50%_70%] blur-xl"></div>
        <div className="absolute inset-8 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-[50%_60%_40%_65%] blur-lg"></div>
        <div className="absolute inset-16 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-[55%_45%_55%_50%] blur-md"></div>
      </div>

      {/* Large red metallic fluid blob - RIGHT side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[500px] z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/40 via-primary/20 to-transparent rounded-[40%_60%_70%_50%] blur-xl"></div>
        <div className="absolute inset-8 bg-gradient-to-tl from-primary/30 via-primary/10 to-transparent rounded-[60%_50%_65%_40%] blur-lg"></div>
        <div className="absolute inset-16 bg-gradient-to-l from-primary/20 via-transparent to-transparent rounded-[45%_55%_50%_55%] blur-md"></div>
      </div>

      {/* Smaller accent blobs */}
      <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-primary/15 rounded-full blur-2xl z-[2]"></div>
      <div className="absolute bottom-[15%] right-[20%] w-24 h-24 bg-primary/10 rounded-full blur-xl z-[2]"></div>

      {/* HUD-style corner brackets - top left */}
      <svg
        className="absolute top-6 left-6 w-20 h-20 text-primary/25 z-[3]"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M2 25 L2 2 L25 2" />
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
      </svg>

      {/* HUD corner brackets - top right */}
      <svg
        className="absolute top-6 right-6 w-20 h-20 text-primary/25 z-[3]"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M55 2 L78 2 L78 25" />
        <circle cx="78" cy="2" r="1.5" fill="currentColor" />
      </svg>

      {/* HUD corner brackets - bottom left */}
      <svg
        className="absolute bottom-6 left-6 w-20 h-20 text-primary/25 z-[3]"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M2 55 L2 78 L25 78" />
        <circle cx="2" cy="78" r="1.5" fill="currentColor" />
      </svg>

      {/* HUD corner brackets - bottom right */}
      <svg
        className="absolute bottom-6 right-6 w-20 h-20 text-primary/25 z-[3]"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M78 55 L78 78 L55 78" />
        <circle cx="78" cy="78" r="1.5" fill="currentColor" />
      </svg>

      {/* HUD data readout - left side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-[3] hidden lg:flex flex-col gap-3 text-primary/30 font-mono text-[10px] tracking-widest">
        <span>SYS.INIT</span>
        <span>01:00:25</span>
        <div className="w-12 h-[1px] bg-primary/20"></div>
        <span>NODE.04</span>
        <span>ACTIVE</span>
      </div>

      {/* HUD data readout - right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-[3] hidden lg:flex flex-col gap-3 text-primary/30 font-mono text-[10px] tracking-widest text-right">
        <span>VER 5.0</span>
        <span>3K+ USR</span>
        <div className="w-12 h-[1px] bg-primary/20 ml-auto"></div>
        <span>750K PKR</span>
        <span>ONLINE</span>
      </div>

      {/* Triple chevron accents */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 z-[3]">
        <svg
          className="w-8 h-5 text-primary/50"
          viewBox="0 0 40 20"
          fill="currentColor"
        >
          <polygon points="0,0 6,10 0,20 3,20 9,10 3,0" />
          <polygon points="10,0 16,10 10,20 13,20 19,10 13,0" />
          <polygon points="20,0 26,10 20,20 23,20 29,10 23,0" />
        </svg>
      </div>

      {/* Horizontal scan lines */}
      <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent z-[2]"></div>
      <div className="absolute bottom-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent z-[2]"></div>

      {/* Circuit nodes - scattered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <svg
          className="absolute top-[20%] left-[10%] w-28 h-28 text-primary/10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            stroke="currentColor"
            strokeWidth="0.3"
          />
          <circle cx="50" cy="10" r="2" fill="currentColor" />
          <circle cx="90" cy="50" r="2" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-[20%] right-[10%] w-32 h-32 text-primary/8"
          viewBox="0 0 100 100"
          fill="none"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="4"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="2"
            stroke="currentColor"
            strokeWidth="0.3"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="90" cy="90" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-16">
        {/* ACM badge */}
        <div className="mb-4 px-4 py-1.5 border border-primary/30 rounded-full text-primary/70 text-xs md:text-sm font-mono tracking-[0.2em] uppercase">
          ACM CUI Lahore Chapter
        </div>

        <h1 className="text-foreground font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mb-2 tracking-tighter leading-none">
          TECHNO<span className="text-primary">VERSE</span>
        </h1>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-primary/60"></div>
          <span className="text-primary font-bold text-2xl md:text-4xl tracking-[0.3em]">
            5.0
          </span>
          <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-primary/60"></div>
        </div>

        <p className="text-foreground/80 text-lg md:text-2xl mb-2 tracking-[0.15em] font-light uppercase">
          <span>Empower</span>
          <span className="mx-2 text-primary">&#x2022;</span>
          <span className="text-primary font-medium">Innovate</span>
          <span className="mx-2 text-primary">&#x2022;</span>
          <span>Connect</span>
        </p>

        <p className="text-muted-foreground font-mono text-sm md:text-base mb-8 tracking-wider">
          2nd - 3rd May, 2026 &mdash; COMSATS University Lahore
        </p>

        <CountdownTimer targetDate={eventDate} />

        <Button
          size="lg"
          asChild
          className="text-white mt-8 w-52 md:w-60 font-semibold tracking-wider uppercase text-sm bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
        >
          <a
            href={process.env.NEXT_PUBLIC_REGISTRATION_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </Button>

        {/* Bottom chevron indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary/40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
