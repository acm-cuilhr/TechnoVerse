import About from '@/components/about';
import Competitions from '@/components/competitions';
import Contact from '@/components/contact';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import Gallery from '@/components/gallery';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Leads from '@/components/leads';
import Schedule from '@/components/schedule';
import Sponsors from '@/components/sponsors';

export default function Home() {
  return (
    <main className="bg-navy">
      <Header />
      <Hero />
      <About />
      <Schedule />
      <Competitions />
      <Leads />
      <Gallery />
      <Sponsors />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
