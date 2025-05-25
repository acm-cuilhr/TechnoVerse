import FAQ from '@/components/faq';
import Contact from '@/components/home/contact';
import EventHighlights from '@/components/home/event-highlights';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/hero';
import Schedule from '@/components/home/schedule';
import SponsorsSection from '@/components/home/sponsors';
import Venue from '@/components/home/venue';

export default function Home() {
  return (
    <main>
      <Hero />
      <EventHighlights />
      <Schedule />
      <SponsorsSection />
      {/* <PreviousSponsors
        sponsors={previousSponsorsData}
        title="Our Esteemed Alumni Supporters"
        className="pt-10 pb-20"
        logoHeightClass="h-32"
        gridCols={{
          base: 'grid-cols-3',
        }}
      /> */}
      <Gallery />
      <FAQ />
      <Contact />
      <Venue />
    </main>
  );
}
