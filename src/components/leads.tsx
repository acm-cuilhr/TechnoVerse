import Image from 'next/image';

interface Lead {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const leads: Lead[] = [
  {
    name: 'Mohsin Mehdi',
    role: 'Faculty Advisor',
    image: '/assets/images/leads/mohsin-mehdi.png',
    linkedin: '#',
  },
  {
    name: 'Amna Hussain',
    role: 'Lead TechnoVerse',
    image: '/assets/images/leads/Amna.png',
    linkedin: 'https://www.linkedin.com/in/amna-hussain-549426251/',
  },
  {
    name: 'Khansa Rahim',
    role: 'Co-Lead TechnoVerse',
    image: '/assets/images/leads/khansa-rahim.png',
    linkedin: 'https://www.linkedin.com/in/khansarahim/',
  },
  {
    name: 'Amina Iftikhar',
    role: 'Treasurer',
    image: '/assets/images/leads/amna-ifthikhar.png',
    linkedin: 'https://www.linkedin.com/in/amina-iftikhar-717612281/',
  },
];

export default function Leads() {
  return (
    <section id="leads" className="py-16 px-4 bg-lightgray">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Leads</h2>
          <p>The event leads of TechnoVerse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <Image
                src={lead.image || '/placeholder.svg'}
                alt={lead.name}
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <div className="details">
                <h3>{lead.name}</h3>
                <p>{lead.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
