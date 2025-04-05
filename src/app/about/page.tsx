'use client';

// Shadcn UI Components
// Icons
import {
  Code,
  Group,
  History,
  Info,
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Target,
  Trophy,
  Users as UsersIcon,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import HeroSection from '@/components/hero-section';
import { ImagePlaceholder } from '@/components/image-placeholder';

export default function AboutPage() {
  const iconProps = { size: 20, className: 'text-primary' };

  return (
    <section className="min-h-screen text-foreground">
      <HeroSection
        src="/assets/images/2.jpg"
        title="About TechnoVerse"
        description="Celebrating technology, innovation, and the bright minds shaping the future."
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {' '}
        {/* Increased spacing */}
        {/* 2. Overview Section - Text + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary flex items-center">
              <Info size={28} className="mr-3 opacity-90" /> Event Overview
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              TechnoVerse 4.0 is the fourth iteration of our flagship annual
              technology and innovation extravaganza. We bring together
              students, tech enthusiasts, industry leaders, and innovators for a
              dynamic exchange of ideas through competitions, workshops, talks,
              and exhibitions.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Join us to engage with the brightest minds, witness cutting-edge
              projects, and connect with the next generation of tech talent.
            </p>
          </div>
          <ImagePlaceholder
            src="/assets/images/gallery/20.jpg"
            alt="TechnoVerse event concept"
            className="aspect-video"
          />
        </div>
        <Separator className="bg-border/50" />
        {/* 3. Our Journey Section - Timeline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-12 flex items-center justify-center">
            <History size={28} className="mr-3 opacity-90" /> Our Journey So Far
          </h2>
          <div className="relative max-w-3xl mx-auto">
            {/* The Timeline Line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            ></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1: TechnoVerse 1.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Code size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:ml-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                  {' '}
                  {/* Right side on desktop */}
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground flex items-center">
                      <span className="md:hidden mr-2">
                        <Code size={16} className="text-secondary" />
                      </span>
                      TechnoVerse 1.0
                    </CardTitle>
                    <CardDescription>The Genesis</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Our inaugural event, exclusive to COMSATS Lahore students.
                    Featured 3 competitions (Coding Spree, Web-e-Thon, Treasure
                    Hunt) and attracted 250 participants, sparking creativity
                    and innovation.
                  </CardContent>
                </Card>
              </div>

              {/* Item 2: TechnoVerse 2.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Trophy size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:mr-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                  {' '}
                  {/* Left side on desktop */}
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground flex items-center">
                      <span className="md:hidden mr-2">
                        <Trophy size={16} className="text-secondary" />
                      </span>
                      TechnoVerse 2.0
                    </CardTitle>
                    <CardDescription>Expanding Horizons</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Opened doors to multiple universities, welcoming 500
                    participants. Expanded to 7 competitions including design
                    and eSports (FIFA, Tekken), plus an insightful Panel Talk
                    with industry experts.
                  </CardContent>
                </Card>
              </div>

              {/* Item 3: TechnoVerse 3.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <UsersIcon size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:ml-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                  {' '}
                  {/* Right side on desktop */}
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground flex items-center">
                      <span className="md:hidden mr-2">
                        <UsersIcon size={16} className="text-secondary" />
                      </span>
                      TechnoVerse 3.0
                    </CardTitle>
                    <CardDescription>Student Week Edition</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Part of CUI Lahore&rsquo;s Student Week (500+ participants).
                    Featured Chess, Coding Spree, Scavenger Hunt, Web-e-Thon,
                    and eSports (Tekken 8, FIFA 25), fostering a vibrant campus
                    atmosphere.
                  </CardContent>
                </Card>
              </div>

              {/* Item 4: TechnoVerse 4.0 - Current */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Target size={16} className="text-primary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:mr-auto relative z-10 border-primary shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  {' '}
                  {/* Left side on desktop, Highlighted */}
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      {' '}
                      {/* Highlight title */}
                      <span className="md:hidden mr-2">
                        <Target size={16} className="text-primary" />
                      </span>
                      TechnoVerse 4.0
                    </CardTitle>
                    <CardDescription>The Future is Now</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Building on past successes, this edition promises to be
                    bigger and better, bringing even more opportunities for
                    learning, competition, and networking. Stay tuned for
                    details!
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-border/50" />
        {/* 4. About ACM CUI LHR Section - Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder
            src="/assets/images/gallery/21.jpg"
            alt="ACM CUI Lahore community"
            className="aspect-video"
          />
          <div className="space-y-4">
            {' '}
            {/* Text on the left */}
            <h2 className="text-3xl md:text-4xl font-semibold text-primary flex items-center">
              <Group size={28} className="mr-3 opacity-90" /> About ACM CUI LHR
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The ACM Student Chapter at CUI Lahore is a dedicated community
              fostering excellence in computing and technology. As part of the
              globally recognized Association for Computing Machinery (ACM), we
              provide invaluable resources for professional development and
              networking.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our mission is to empower students and tech enthusiasts to
              innovate, excel, and forge meaningful connections within the
              industry.
            </p>
          </div>
        </div>
        <Separator className="bg-border/50" />
        {/* 5. Connect With Us Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8 flex items-center justify-center">
            <LinkIcon size={28} className="mr-3 opacity-90" /> Connect With Us
          </h2>
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
            <a
              href="https://instagram.com/acm.cuilhr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-lg"
            >
              <Instagram
                {...iconProps}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="group-hover:underline">ACM Instagram</span>
            </a>
            <a
              href="https://linkedin.com/company/acmcuilhr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-lg"
            >
              <Linkedin
                {...iconProps}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="group-hover:underline">ACM LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/technoverse_cuilahore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-lg"
            >
              <Instagram
                {...iconProps}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="group-hover:underline">
                TechnoVerse Instagram
              </span>
            </a>
            <a
              href="https://linkedin.com/company/technoverse-cui-lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-lg"
            >
              <Linkedin
                {...iconProps}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="group-hover:underline">
                TechnoVerse LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
