// src/data/competitions.ts (Example file location)

export interface Competition {
  id: string; // Unique identifier
  name: string;
  description: string; // Short description for the card
  longDescription: string; // More detailed description for the modal
  image: string;
  prizeWinner?: string; // Prize money as string (e.g., "PKR 50,000")
  prizeRunnerUp?: string; // Prize money as string (e.g., "PKR 25,000")
  detailsPdfUrl?: string; // Optional path to the detailed PDF guide
  registrationFee: string;
  teamSize: string;
}

export const competitionsData: Competition[] = [
  {
    id: 'coding-spree',
    name: 'Coding Spree',
    description: 'Solve problems under pressure.',
    longDescription:
      'Put your problem-solving and programming skills to the ultimate test. Compete against the clock and fellow coders to solve algorithmic challenges ranging in difficulty. Speed, accuracy, and efficiency are key!',
    image: '/assets/images/competitions/coding-spree.jpg',
    // prizeWinner: 'PKR 30,000',
    // prizeRunnerUp: 'PKR 15,000',
    registrationFee: 'Rs. 3000',
    teamSize: '1-3',
    detailsPdfUrl: '/files/coding-spree.pdf',
  },
  {
    id: 'web-e-thon',
    name: 'Web-e-Thon',
    description: 'Build stunning web experiences.',
    longDescription:
      'A playground for web developers and designers. Teams will design and develop a functional and visually appealing website based on a given theme within the time limit. Focus on creativity, UX, and technical execution.',
    image: '/assets/images/competitions/web-e-thon.jpg',
    // prizeWinner: 'PKR 40,000',
    // prizeRunnerUp: 'PKR 20,000',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/web-e-thon.pdf',
  },
  {
    id: 'app-dev',
    name: 'App Development',
    description: 'Create innovative mobile apps.',
    longDescription:
      'Develop a mobile application that addresses a specific problem or enhances user experience. Teams will be judged on creativity, functionality, and user interface design.',
    image: '/assets/images/competitions/app-dev.jpg',
    // prizeWinner: 'PKR 35,000',
    // prizeRunnerUp: 'PKR 17,500',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/app-development.pdf',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning Challenge',
    description: 'Unleash the power of AI.',
    longDescription:
      'Dive into the world of machine learning! Participants will be given a dataset and tasked with building a predictive model. Creativity in feature engineering and model selection will be key to success.',
    image: '/assets/images/competitions/machine-learning.jpg',
    // prizeWinner: 'PKR 35,000',
    // prizeRunnerUp: 'PKR 17,500',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/machine-learning.pdf',
  },
  {
    id: 'query-master',
    name: 'Query Master',
    description: 'Master the art of SQL.',
    longDescription:
      'Test your SQL skills in this challenge! Participants will be given a database and a set of queries to solve. The fastest and most accurate solutions will win.',
    image: '/assets/images/competitions/query-master.jpg',
    // prizeWinner: 'PKR 35,000',
    // prizeRunnerUp: 'PKR 17,500',
    registrationFee: 'Rs. 1500',
    teamSize: '1-2',
    detailsPdfUrl: '/assets/files/competitions/query-master.pdf',
  },
  {
    id: 'think-tank',
    name: 'Think Tank',
    description: 'Innovate and solve real-world problems.',
    longDescription:
      'Join us for a brainstorming session where teams will tackle real-world problems. Participants will present their innovative solutions, and the best ideas will be recognized.',
    image: '/assets/images/competitions/think-tank.jpg',
    // prizeWinner: 'PKR 35,000',
    // prizeRunnerUp: 'PKR 17,500',
    registrationFee: 'Rs. 1200',
    teamSize: '2-4',
    detailsPdfUrl: '/assets/files/competitions/think-tank.pdf',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design Challenge',
    description: 'Design user-friendly interfaces.',
    longDescription:
      'Create a user-friendly and visually appealing interface for a given application. Participants will be judged on creativity, usability, and design principles.',
    image: '/assets/images/competitions/poster.png',
    // prizeWinner: 'PKR 8,000',
    // prizeRunnerUp: 'PKR 4,000',
    registrationFee: 'Rs. 1500',
    teamSize: '1-2',
    detailsPdfUrl: '/assets/files/competitions/ui-ux.pdf',
  },
  {
    id: 'reel-competition',
    name: 'Best Reel Competition',
    description: 'Capture the TechnoVerse vibe.',
    longDescription:
      'Create a short, engaging video reel showcasing the energy and highlights of the TechnoVerse event. Capture key moments, interviews, or creative interpretations. Judged on creativity, editing, and impact.',
    image: '/assets/images/competitions/reel.jpg',
    // prizeWinner: 'PKR 10,000',
    // prizeRunnerUp: 'PKR 5,000',
    registrationFee: 'Rs. 800',
    teamSize: '1',
    detailsPdfUrl: '/files/reel.pdf',
  },
  {
    id: 'scavenger-hunt',
    name: 'Scavenger Hunt',
    description: 'An exciting tech treasure hunt.',
    longDescription:
      'Embark on a thrilling scavenger hunt across the campus! Solve cryptic clues, tackle technical challenges, and race against other teams to find the hidden treasure. Requires teamwork, logic, and quick thinking.',
    image: '/assets/images/competitions/techno-hunt.jpg',
    // prizeWinner: 'Team Goodies Basket',
    // prizeRunnerUp: 'Runner-up Basket',
    registrationFee: 'Rs. 2000',
    teamSize: '1-5',
    detailsPdfUrl: '/assets/files/competitions/scavenger-hunt.pdf',
  },
  {
    id: 'tekken',
    name: 'Tekken Tournament',
    description: 'Battle it out in the Iron Fist.',
    longDescription:
      'The King of Iron Fist Tournament awaits! Compete in intense 1v1 matches in the latest Tekken installment. Prove your mastery of combos, defense, and character knowledge to claim victory.',
    image: '/assets/images/competitions/tekken.jpg',
    // prizeWinner: 'PKR 10,000 + Gaming Gear',
    // prizeRunnerUp: 'PKR 5,000',
    registrationFee: 'Rs. 1000',
    teamSize: '1',
    detailsPdfUrl: '/assets/files/competitions/tekken.pdf',
  },
  {
    id: 'fifa',
    name: 'FIFA Championship',
    description: 'Score goals and claim glory.',
    longDescription:
      'Showcase your virtual football skills in our FIFA tournament. Compete head-to-head, manage your team, and execute flawless plays to become the TechnoVerse FIFA Champion.',
    image: '/assets/images/competitions/fifa.jpg',
    // prizeWinner: 'PKR 10,000 + Gaming Gear',
    // prizeRunnerUp: 'PKR 5,000',
    registrationFee: 'Rs. 1000',
    teamSize: '1',
    detailsPdfUrl: '/assets/files/competitions/fifa.pdf',
  },
];
