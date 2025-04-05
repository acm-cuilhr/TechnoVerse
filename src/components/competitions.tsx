import Image from 'next/image';

interface Competition {
  name: string;
  description: string;
  image: string;
}

const competitions: Competition[] = [
  {
    name: 'Coding Spree',
    description: 'Get ready for the coding competition',
    image: '/images/competitions/coding-spree.jpg',
  },
  {
    name: 'Web-e-Thon',
    description: 'Design your own website',
    image: '/images/competitions/web-e-thon.jpg',
  },
  {
    name: 'Game-e-Thon',
    description: 'Built your own game',
    image: '/images/competitions/game-e-thon.jpg',
  },
  {
    name: 'Techno Hunt',
    description: 'Get ready for the hunt',
    image: '/images/competitions/techno-hunt.jpg',
  },
  {
    name: 'Tekken',
    description: 'Get ready for the fight',
    image: '/images/competitions/tekken.jpg',
  },
  {
    name: 'Fifa',
    description: 'Show your gaming skills in the Fifa competition',
    image: '/images/competitions/fifa.jpg',
  },
  {
    name: 'Notion Template Design',
    description: 'Design your own notion template',
    image: '/images/competitions/notion.png',
  },
  {
    name: 'Poster Design',
    description: 'Design your own poster',
    image: '/images/competitions/poster.png',
  },
  {
    name: 'Best Reel Competition',
    description: 'Design your own reel',
    image: '/images/competitions/reel.jpg',
  },
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-16 px-4 bg-white">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-header">
          <h2>Competitions</h2>
          <p>Get ready for the competitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="card overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={((index % 3) + 1) * 100}
            >
              <Image
                src={competition.image || '/placeholder.svg'}
                alt={competition.name}
                width={500}
                height={300}
                className="w-full h-auto"
              />
              <div className="details">
                <h3>{competition.name}</h3>
                <p>{competition.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
