import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const speakers: Speaker[] = [
  {
    name: 'Usman ur Rehman',
    role: 'Vice President Systems Limited',
    image: '/images/speakers/usman-ur-rehman.png',
    linkedin: 'https://www.linkedin.com/in/usmanurrehmanahmed/',
  },
  {
    name: 'Amnan Hussain',
    role: 'Digital Growth Manager, Devsinc',
    image: '/images/speakers/amnan-hussain.png',
    linkedin: 'https://www.linkedin.com/in/amnan-hussain/?originalSubdomain=pk',
  },
  {
    name: 'Ahmad Manzoor',
    role: 'Founder Pakistan Blockchain Institute',
    image: '/images/speakers/ahmad-manzoor.png',
    linkedin:
      'https://www.linkedin.com/in/ahmadmanzoorahmad/?originalSubdomain=pk',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Event Speakers</h2>
          <p>The speakers on TechnoVerse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="card"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <Image
                src={speaker.image || '/placeholder.svg'}
                alt={speaker.name}
                width={500}
                height={500}
                className="w-full h-auto"
              />
              <div className="details">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
                <div className="social">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
