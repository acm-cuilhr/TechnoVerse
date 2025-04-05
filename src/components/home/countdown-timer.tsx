// src/components/countdown-timer.tsx (or similar path)
'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card'; // Import Shadcn Card

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnitProps {
  value: number;
  label: string;
  isEnding?: boolean; // Optional prop for styling when close to end
}

// Refined TimeUnit with theme colors
function TimeUnit({ value, label, isEnding }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center mx-2 sm:mx-3 text-center w-16 sm:w-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={cn(
            // Use theme colors: bg-primary/80 or bg-destructive for emphasis near end
            'text-primary-foreground text-3xl sm:text-4xl font-bold px-2 py-2 rounded-lg shadow-md w-full mb-2',
            isEnding ? 'bg-destructive/80' : 'bg-primary/80' // Example: highlight seconds near end
          )}
        >
          {value.toString().padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
      <span className="mt-1 text-xs text-primary-foreground/70 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // Calculate immediately on mount

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        // Check if time is actually past targetDate before setting ended state
        if (targetDate.getTime() - new Date().getTime() < 0) {
          setHasEnded(true);
          clearInterval(timer);
        }
      }
    }, 1000);

    // Clear timer on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (hasEnded) {
    return (
      // Use Shadcn Card for the ended message
      <Card className="bg-card/90 border-border/50 shadow-lg text-center p-6 max-w-md mx-auto backdrop-blur-sm">
        <CardContent className="p-0">
          {' '}
          {/* Remove default CardContent padding */}
          <p className="text-card-foreground text-2xl font-bold mb-2">
            Event is Live!
          </p>
          <p className="text-muted-foreground text-lg">
            Join us from{' '}
            <span className="font-semibold text-secondary">
              May 24th - 25th, 2025
            </span>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  // Determine if seconds should be highlighted (e.g., last 10 seconds of a minute)
  const highlightSeconds =
    timeLeft.seconds <= 10 &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0;

  return (
    // Use Card for styling the countdown container - slightly transparent
    <Card className="bg-transparent border-0 shadow-lg backdrop-blur-xs">
      <CardContent className="flex justify-center items-start p-4 sm:p-6">
        {' '}
        {/* Use CardContent for padding */}
        <TimeUnit
          value={timeLeft.days}
          label={timeLeft.days === 1 ? 'Day' : 'Days'}
        />
        <TimeUnit
          value={timeLeft.hours}
          label={timeLeft.hours === 1 ? 'Hour' : 'Hours'}
        />
        <TimeUnit
          value={timeLeft.minutes}
          label={timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
        />
        <TimeUnit
          value={timeLeft.seconds}
          label={timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
          isEnding={highlightSeconds}
        />
      </CardContent>
    </Card>
  );
}
