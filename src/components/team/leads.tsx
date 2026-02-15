import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface Lead {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

interface Contributor {
  name: string;
  role: string;
}

const leads: Lead[] = [
  {
    name: 'Imran Raza',
    role: 'Faculty Advisor',
    image: '/assets/images/leads/imran-raza.png',
    linkedin: 'https://www.linkedin.com/in/imran-raza-35a3b0234/',
  },
  {
    name: 'Sufyan Ahmad',
    role: 'Lead TechnoVerse',
    image: '/assets/images/leads/sufyan-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/sufy-expert/',
  },
  {
    name: 'Aimen Munir',
    role: 'Co-Lead TechnoVerse',
    image: '/assets/images/leads/aimen-munir.png',
    linkedin: 'https://www.linkedin.com/in/aimen-munir-70134529b/',
  },
  {
    name: 'Hadeeq Ahmad',
    role: 'Co-Lead TechnoVerse',
    image: '/assets/images/leads/hadeeq-ahmad.png',
    linkedin: 'https://www.linkedin.com/in/hadeeq-ahmed/',
  },
];

const contributors: Contributor[] = [
  { name: 'Contributor A', role: 'Logistics' },
  { name: 'Contributor B', role: 'Competitions' },
  { name: 'Contributor C', role: 'Media' },
  { name: 'Contributor D', role: 'Sponsorship' },
  { name: 'Contributor E', role: 'Design' },
  { name: 'Contributor F', role: 'Marketing' },
  { name: 'Contributor G', role: 'Operations' },
];

/* Placeholder SVG for contributors without photos */
function ContributorAvatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" rx="12" className="fill-muted" />
      {/* Abstract geometric person silhouette */}
      <circle cx="100" cy="72" r="28" className="fill-secondary/30" />
      <path
        d="M55 170 C55 130 75 115 100 115 C125 115 145 130 145 170"
        className="fill-secondary/20"
      />
      {/* Decorative circuit lines */}
      <line
        x1="20"
        y1="20"
        x2="50"
        y2="20"
        className="stroke-secondary/15"
        strokeWidth="1"
      />
      <line
        x1="20"
        y1="20"
        x2="20"
        y2="50"
        className="stroke-secondary/15"
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="2" className="fill-secondary/25" />
      <line
        x1="180"
        y1="180"
        x2="150"
        y2="180"
        className="stroke-secondary/15"
        strokeWidth="1"
      />
      <line
        x1="180"
        y1="180"
        x2="180"
        y2="150"
        className="stroke-secondary/15"
        strokeWidth="1"
      />
      <circle cx="180" cy="180" r="2" className="fill-secondary/25" />
    </svg>
  );
}

export default function Leads() {
  return (
    <>
      {/* Core Team */}
      <section id="leads" className="py-16 px-4">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="section-header">
            <h2>Core Team</h2>
            <p>The leadership behind TechnoVerse 5.0</p>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-8">
            {leads.map((lead, index) => (
              <div
                key={index}
                className="group relative w-[220px] rounded-lg overflow-hidden shadow-lg border border-border/50 hover:border-secondary/40 transition-all duration-300 hover:shadow-secondary/10 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <a
                  href={lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={lead.image || '/placeholder.svg'}
                    alt={lead.name}
                    width={220}
                    height={220}
                    className="w-full h-auto object-cover"
                  />
                </a>
                <div className="bg-card/95 backdrop-blur-sm p-3 text-center border-t border-border/30">
                  <h3 className="text-white text-base font-semibold mb-0.5">
                    {lead.name}
                  </h3>
                  <p className="text-secondary text-xs font-medium tracking-wide uppercase mb-2">
                    {lead.role}
                  </p>
                  <a
                    href={lead.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section id="contributors" className="py-16 px-4">
        <div className="container mx-auto" data-aos="fade-up">
          <div className="section-header">
            <h2>Contributors</h2>
            <p>The dedicated team members who make it all possible</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 50}
              >
                <div className="w-28 h-28 rounded-lg overflow-hidden border border-border/50 group-hover:border-secondary/40 transition-all duration-300 mb-3 shadow-sm group-hover:shadow-secondary/10 group-hover:shadow-md">
                  <ContributorAvatar />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-0.5">
                  {contributor.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {contributor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
