'use client';

import { useEffect, useState } from 'react';

import { FlipClock } from './flip-clock';

export default function Hero() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasEnded: false,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const eventDate = new Date('2024-05-18T00:00:00+05:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasEnded: true,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        days,
        hours,
        minutes,
        seconds,
        hasEnded: false,
      });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen bg-[url('/assets/images/hero-bg.jpg')] bg-center bg-cover overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-navy/70"></div>

      <div className="absolute bottom-0 left-0 top-[90px] right-0 flex justify-center items-center flex-col text-center px-4 z-10">
        <h1 className="text-white font-raleway text-4xl md:text-6xl lg:text-7xl font-semibold uppercase mb-4 pb-0">
          Techno<span className="text-turquoise">Verse</span>
        </h1>

        <p className="text-white text-xl md:text-3xl mb-8">
          <span className="font-medium">EMPOWER,</span>{' '}
          <span className="text-turquoise font-medium">INOVATIVE,</span>{' '}
          <span className="font-medium">CONNECT</span>
        </p>

        <p className="text-white font-medium text-lg md:text-xl mb-8">
          18-19 May, COMSATS University Islamabad, Lahore Campus
        </p>

        <div className="mx-5 w-full max-w-3xl">
          {timeRemaining.hasEnded ? (
            <div className="tick-onended-message">
              <p className="text-xl text-turquoise italic">
                Event has started!
              </p>
            </div>
          ) : (
            <FlipClock
              days={timeRemaining.days}
              hours={timeRemaining.hours}
              minutes={timeRemaining.minutes}
              seconds={timeRemaining.seconds}
            />
          )}
        </div>
      </div>
    </section>
  );
}
