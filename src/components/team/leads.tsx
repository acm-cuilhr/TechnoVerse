import Image from 'next/image';

interface Lead {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const leads: Lead[] = [
  {
    name: 'Imran Raz',
    role: 'Faculty Advisor',
    image: '/assets/images/leads/imran-raza.png',
    linkedin: 'https://www.linkedin.com/in/imran-raza-35a3b0234/',
  },
  {
    name: 'Saadaan Hassan',
    role: 'Lead TechnoVerse',
    image: '/assets/images/leads/saadaan-hassan.png',
    linkedin: 'https://www.linkedin.com/in/saadaan-hassan/',
  },
  {
    name: 'Shafin-Uz-Zaman',
    role: 'Co-Lead TechnoVerse',
    image: '/assets/images/leads/shafin-uz-zaman.png',
    linkedin: 'https://www.linkedin.com/in/shafin-zaman/',
  },
  {
    name: 'Aimen Munir',
    role: 'Media Coordinator',
    image: '/assets/images/leads/aimen-munir.png',
    linkedin: 'https://www.linkedin.com/in/aimen-munir-70134529b/',
  },
  {
    name: 'Waqas-ul-Hassan',
    role: 'Competitions Coordinator',
    image: '/assets/images/leads/waqas-ul-hassan.png',
    linkedin: 'https://www.linkedin.com/in/waqasuh/',
  },
  {
    name: 'Sufyan Ahmed',
    role: 'Marketing Coordinator',
    image: '/assets/images/leads/sufyan-ahmed.png',
    linkedin: 'https://www.linkedin.com/in/sufy-expert/',
  },
];

export default function Leads() {
  return (
    <section id="leads" className="py-16 px-4 bg-lightgray">
      <div className="container mx-auto" data-aos="fade-up">
        {/* <div className="section-header">
          <h2>Event Leads</h2>
          <p>The event leads of TechnoVerse</p>
        </div> */}

        <div className="flex flex-wrap items-center justify-center gap-8">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="card shadow-lg"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <a href={lead.linkedin} target="_blank" rel="noopener noreferrer">
                <Image
                  src={lead.image || '/placeholder.svg'}
                  alt={lead.name}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </a>
              {/* Optionally, you can uncomment the following section for additional details */}
              {/* <div className="details">
                <h3>{lead.name}</h3>
                <p>{lead.role}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
