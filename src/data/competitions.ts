// src/data/competitions.ts

export interface Competition {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  prizeWinner?: string;
  prizeRunnerUp?: string;
  detailsPdfUrl?: string;
  registrationFee: string;
  teamSize: string;
  category: 'tech' | 'non-tech';
}

export const competitionsData: Competition[] = [
  // ── Tech Competitions ──
  {
    id: 'coding-spree',
    name: 'Coding Spree',
    description: 'Solve problems under intense time pressure.',
    longDescription:
      'A timed challenge where participants solve programming problems in languages of their choice. Accuracy and efficiency are key.',
    image: '/assets/images/competitions/coding-spree.jpg',
    prizeWinner: 'PKR 70,000',
    prizeRunnerUp: 'PKR 30,000',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/coding-spree.pdf',
    category: 'tech',
  },
  {
    id: 'web-a-thon',
    name: 'Web-a-Thon',
    description: 'Build responsive and functional websites.',
    longDescription:
      'Participants will build responsive and functional websites based on provided themes. Judging will focus on UI/UX, responsiveness, and performance.',
    image: '/assets/images/competitions/web-e-thon.jpg',
    prizeWinner: 'PKR 70,000',
    prizeRunnerUp: 'PKR 30,000',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/web-a-thon.pdf',
    category: 'tech',
  },
  {
    id: 'app-dev',
    name: 'App Development',
    description: 'Create apps solving real-world problems.',
    longDescription:
      'Create a mobile or desktop app to solve real-world problems. Teams will be judged on innovation, design, and functionality.',
    image: '/assets/images/competitions/app-dev.jpg',
    prizeWinner: 'PKR 70,000',
    prizeRunnerUp: 'PKR 30,000',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/app-development.pdf',
    category: 'tech',
  },
  {
    id: 'project-exhibition',
    name: 'Project Exhibition',
    description: 'Showcase innovative software or hardware projects.',
    longDescription:
      'Participants will showcase innovative software or hardware projects, highlighting creativity, development process, and real-world applicability. Judging will focus on originality, technical depth, and practical impact.',
    image: '/assets/images/competitions/poster.png',
    prizeWinner: 'PKR 60,000',
    prizeRunnerUp: 'PKR 30,000',
    registrationFee: 'Rs. 2000',
    teamSize: '1-4',
    detailsPdfUrl: '/assets/files/competitions/project-exhibition.pdf',
    category: 'tech',
  },
  {
    id: 'query-master',
    name: 'Query Master',
    description: 'Master complex SQL challenges.',
    longDescription:
      'A database-based challenge where participants write SQL queries to solve complex problems. Speed and accuracy are essential.',
    image: '/assets/images/competitions/query-master.jpg',
    prizeWinner: 'PKR 40,000',
    prizeRunnerUp: 'PKR 20,000',
    registrationFee: 'Rs. 1500',
    teamSize: '1-2',
    detailsPdfUrl: '/assets/files/competitions/query-master.pdf',
    category: 'tech',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'Build intelligent models from datasets.',
    longDescription:
      'Participants will work with datasets to build intelligent models. Evaluation is based on accuracy and model performance.',
    image: '/assets/images/competitions/machine-learning.jpg',
    prizeWinner: 'PKR 40,000',
    prizeRunnerUp: 'PKR 20,000',
    registrationFee: 'Rs. 2500',
    teamSize: '1-3',
    detailsPdfUrl: '/assets/files/competitions/machine-learning.pdf',
    category: 'tech',
  },
  {
    id: 'think-tank',
    name: 'Think Tank',
    description: 'Pitch your startup ideas to judges.',
    longDescription:
      'Similar to Shark Tank, students will pitch their innovative startup ideas or products to a panel of judges and potential investors.',
    image: '/assets/images/competitions/think-tank.jpg',
    prizeWinner: 'PKR 30,000',
    prizeRunnerUp: 'PKR 15,000',
    registrationFee: 'Rs. 1200',
    teamSize: '2-4',
    detailsPdfUrl: '/assets/files/competitions/think-tank.pdf',
    category: 'tech',
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Competition',
    description: 'Design sleek, user-friendly interfaces.',
    longDescription:
      'Design sleek and user-friendly interfaces for web or mobile platforms. Creativity and usability are major judging factors.',
    image: '/assets/images/competitions/poster.png',
    prizeWinner: 'PKR 30,000',
    prizeRunnerUp: 'PKR 15,000',
    registrationFee: 'Rs. 1500',
    teamSize: '1-2',
    detailsPdfUrl: '/assets/files/competitions/ui-ux.pdf',
    category: 'tech',
  },
  // ── Non-Tech Competitions ──
  {
    id: 'reel-competition',
    name: 'Reel Competition',
    description: 'Create engaging tech-related Instagram Reels.',
    longDescription:
      'Create engaging, tech-related Instagram Reels. Judging will be based on creativity, message, and presentation.',
    image: '/assets/images/competitions/reel.jpg',
    prizeWinner: 'PKR 15,000',
    prizeRunnerUp: 'PKR 7,000',
    registrationFee: 'Rs. 800',
    teamSize: '1',
    detailsPdfUrl: '/assets/files/competitions/reel.pdf',
    category: 'non-tech',
  },
  {
    id: 'tekken',
    name: 'Tekken',
    description: 'Battle it out with fast combos and fierce fights.',
    longDescription:
      'Battle it out in Tekken with fast combos and fierce competition. Let the best fighter win!',
    image: '/assets/images/competitions/tekken.jpg',
    prizeWinner: 'PKR 20,000',
    prizeRunnerUp: 'PKR 10,000',
    registrationFee: 'Rs. 1000',
    teamSize: '1',
    detailsPdfUrl: '/assets/files/competitions/tekken.pdf',
    category: 'non-tech',
  },
  {
    id: 'student-of-the-year',
    name: 'Student of the Year',
    description: 'A fun, campus-wide 2-Day challenge.',
    longDescription:
      'A fun and challenging campus-wide 2-Day game. Follow clues, solve riddles, and complete tasks to top the leaderboard and win the game.',
    image: '/assets/images/competitions/techno-hunt.jpg',
    prizeWinner: 'PKR 30,000',
    registrationFee: 'Rs. 2000',
    teamSize: '1-5',
    detailsPdfUrl: '/assets/files/competitions/student-of-the-year.pdf',
    category: 'non-tech',
  },
  {
    id: 'fifa',
    name: 'FIFA Competition',
    description: 'Virtual football skills in the ultimate face-off.',
    longDescription:
      'Showcase your virtual football skills in the ultimate FIFA face-off. Fast-paced and thrilling for e-sports lovers.',
    image: '/assets/images/competitions/fifa.jpg',
    prizeWinner: 'PKR 20,000',
    prizeRunnerUp: 'PKR 10,000',
    registrationFee: 'Rs. 1000',
    teamSize: '1',
    detailsPdfUrl: '/assets/files/competitions/fifa.pdf',
    category: 'non-tech',
  },
  {
    id: 'pubg',
    name: 'PUBG',
    description: 'Competitive battleground showdown.',
    longDescription:
      'Experience the battleground rush in a competitive PUBG showdown. Test aim, strategy, and survival instincts in intense squad-based combat.',
    image: '/assets/images/competitions/poster.png',
    prizeWinner: 'PKR 20,000',
    prizeRunnerUp: 'PKR 10,000',
    registrationFee: 'Rs. 1000',
    teamSize: '4',
    detailsPdfUrl: '/assets/files/competitions/pubg.pdf',
    category: 'non-tech',
  },
];
