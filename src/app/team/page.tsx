'use client';

import HeroSection from '@/components/hero-section';
import Leads from '@/components/team/leads';

export default function TeamPage() {
  return (
    <section className="min-h-screen text-foreground">
      <HeroSection
        src="/assets/images/2.jpg"
        title="Meet the Team"
        description="
          Meet the dedicated team members who work tirelessly to make TechnoVerse 4.0 a reality. Their passion and commitment are the backbone of this event."
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <Leads />
      </div>
    </section>
  );
}
