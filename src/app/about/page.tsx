'use client';

import {
  Code,
  Group,
  History,
  Info,
  Instagram,
  Linkedin,
  Link as LinkIcon,
  Rocket,
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
        {/* Event Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary flex items-center">
              <Info size={28} className="mr-3 opacity-90" /> Event Overview
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>TechnoVerse 5.0</strong>, the fifth edition of our tech
              fest, aims to inspire through competitive challenges and expert
              insights, with a projected footfall of{' '}
              <strong>3000+ talented participants</strong> and tech attendees
              from <strong>all over Pakistan</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This two-day fest features <strong>13 competitions</strong> (8
              tech, 5 non-tech) supported by a <strong>750K prize pool</strong>,
              alongside industry-led <strong>workshops</strong> and{' '}
              <strong>interactive sessions</strong>. The venue will be split
              into two main zones:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>
                Food &amp; commercial stalls to support visitor flow and
                engagement.
              </li>
              <li>
                Software houses &amp; startups offering showcases, meet-ups, and
                hiring opportunities.
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A key addition this year is <strong>walk-in interviews</strong>,
              allowing participants to submit resumes, interact with HR teams,
              and explore <strong>internship or job</strong> openings on the
              spot.
            </p>
          </div>
          <ImagePlaceholder
            src="/assets/images/gallery/20.jpg"
            alt="TechnoVerse event concept"
            className="aspect-video"
          />
        </div>
        <Separator className="bg-border/50" />

        {/* Building Momentum: The TechnoVerse Legacy */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-4 flex items-center justify-center">
            <History size={28} className="mr-3 opacity-90" /> Building Momentum:
            The TechnoVerse Legacy
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From a small intra-university event to a national-level tech fest,
            TechnoVerse has grown with every iteration.
          </p>
          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"
              aria-hidden="true"
            ></div>

            <div className="space-y-16">
              {/* TechnoVerse 1.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Code size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:ml-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
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
                    Launched successfully within CUI Lahore (150 participants).
                  </CardContent>
                </Card>
              </div>

              {/* TechnoVerse 2.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Trophy size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:mr-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
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
                    Expanded inter-university reach (200 participants),
                    introduced panel talks &amp; secured sponsors.
                  </CardContent>
                </Card>
              </div>

              {/* TechnoVerse 3.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <UsersIcon size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:ml-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
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
                    Engaged 300+ CUI Lahore students during Student Week,
                    refining our event model.
                  </CardContent>
                </Card>
              </div>

              {/* TechnoVerse 4.0 */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Rocket size={16} className="text-secondary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:mr-auto relative z-10 shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground flex items-center">
                      <span className="md:hidden mr-2">
                        <Rocket size={16} className="text-secondary" />
                      </span>
                      TechnoVerse 4.0
                    </CardTitle>
                    <CardDescription>Scaling Up</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    Expanded inter-university reach (600+ participants),
                    introduced panel talks, our dinner &amp; secured new
                    sponsors.
                  </CardContent>
                </Card>
              </div>

              {/* TechnoVerse 5.0 - Current */}
              <div className="relative group">
                <div className="md:absolute left-1/2 top-4 -translate-x-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center ring-4 ring-background hidden md:flex">
                  <Target size={16} className="text-primary-foreground" />
                </div>
                <Card className="md:w-[calc(50%-2rem)] md:ml-auto relative z-10 border-primary shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <span className="md:hidden mr-2">
                        <Target size={16} className="text-primary" />
                      </span>
                      TechnoVerse 5.0
                    </CardTitle>
                    <CardDescription>The Future is Now</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    3000+ projected participants. 13 competitions, 750K prize
                    pool, walk-in interviews, workshops, software house stalls,
                    and two unforgettable days of innovation. 2nd - 3rd May,
                    2026.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-border/50" />

        {/* Prize Pool Distribution */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-12 flex items-center justify-center">
            <Trophy size={28} className="mr-3 opacity-90" /> Prize Pool
            Distribution
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary/30">
                  <th className="text-left py-3 px-4 font-semibold text-card-foreground border-b border-border">
                    Competition Name
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground border-b border-border">
                    Winner
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground border-b border-border">
                    Runner Up
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-card-foreground border-b border-border">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Coding Spree',
                    winner: 70000,
                    runner: 30000,
                    total: 100000,
                  },
                  {
                    name: 'Web-a-Thon',
                    winner: 70000,
                    runner: 30000,
                    total: 100000,
                  },
                  {
                    name: 'App Dev',
                    winner: 70000,
                    runner: 30000,
                    total: 100000,
                  },
                  {
                    name: 'Project Exhibition',
                    winner: 60000,
                    runner: 30000,
                    total: 90000,
                  },
                  {
                    name: 'Query Master',
                    winner: 40000,
                    runner: 20000,
                    total: 60000,
                  },
                  {
                    name: 'Machine Learning',
                    winner: 40000,
                    runner: 20000,
                    total: 60000,
                  },
                  {
                    name: 'Think Tank',
                    winner: 30000,
                    runner: 15000,
                    total: 45000,
                  },
                  {
                    name: 'UI/UX Competition',
                    winner: 30000,
                    runner: 15000,
                    total: 45000,
                  },
                  {
                    name: 'Tekken',
                    winner: 20000,
                    runner: 10000,
                    total: 30000,
                  },
                  { name: 'FIFA', winner: 20000, runner: 10000, total: 30000 },
                  { name: 'PUBG', winner: 20000, runner: 10000, total: 30000 },
                  {
                    name: 'Student of the Year',
                    winner: 30000,
                    runner: 0,
                    total: 30000,
                  },
                  {
                    name: 'Reel Competition',
                    winner: 15000,
                    runner: 7000,
                    total: 22000,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 px-4 text-right text-muted-foreground">
                      {row.winner.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-muted-foreground">
                      {row.runner > 0 ? row.runner.toLocaleString() : '--'}
                    </td>
                    <td className="py-3 px-4 text-right text-foreground font-semibold">
                      {row.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="bg-primary/10 font-bold">
                  <td className="py-3 px-4 text-primary">Total</td>
                  <td className="py-3 px-4 text-right text-primary">515,000</td>
                  <td className="py-3 px-4 text-right text-primary">227,000</td>
                  <td className="py-3 px-4 text-right text-primary">742,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Separator className="bg-border/50" />

        {/* About ACM CUI LHR */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder
            src="/assets/images/gallery/21.jpg"
            alt="ACM CUI Lahore community"
            className="aspect-video"
          />
          <div className="space-y-4">
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

        {/* Connect With Us */}
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
