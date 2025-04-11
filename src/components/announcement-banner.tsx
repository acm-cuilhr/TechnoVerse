'use client';

import React, { useEffect, useState } from 'react';
import { Announcement } from '@/data/announcements';

import { cn } from '@/lib/utils';

interface AnnouncementBannerProps {
  announcements: Announcement[];
  /** Duration (in ms) to display each announcement (default: 5000ms) */
  duration?: number;
  /** Duration (in ms) of the drop animation (default: 500ms) */
  animationDuration?: number;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  announcements,
  duration = 5000,
  animationDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through announcements if there is more than one.
  useEffect(() => {
    if (!announcements || announcements.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, duration);
    return () => clearInterval(timer);
  }, [announcements, duration]);

  const currentAnnouncement = announcements[currentIndex];

  // Create an object that holds either dangerouslySetInnerHTML or children,
  // but not both.
  const contentProps =
    typeof currentAnnouncement.message === 'string'
      ? { dangerouslySetInnerHTML: { __html: currentAnnouncement.message } }
      : { children: currentAnnouncement.message };

  return (
    <div
      className={cn(
        'fixed',
        'left-0',
        'top-16',
        'right-0',
        'z-50',
        'flex',
        'justify-center'
      )}
    >
      <div
        className={cn('py-1', 'w-full', 'bg-primary', 'text-center')}
        style={{
          backgroundColor: currentAnnouncement.backgroundColor,
          color: currentAnnouncement.textColor || '#ffffff',
        }}
      >
        {/* The key on the span makes sure that React re-mounts the element for a new announcement */}
        <span
          key={currentIndex}
          className={cn('text-xs', 'font-medium', 'inline-block')}
          style={{ animation: `dropIn ${animationDuration}ms ease-out` }}
          {...contentProps}
        />
      </div>
      <style jsx>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(AnnouncementBanner);
