// projectData.js
import RabbitFlixThumb from './rabbitflix-new-thumb.jpg';
import PawPickerThumb from './pawpicker-thumb.jpg';
import CarrotCrossroadsThumb from './carrot-crossroads-thumb.jpg';
import DicesNRabbitsThumb from './dicesnrtabbits.png';

const projectData = [
  {
    id: 1,
    title: 'Dices&Rabbits',
    url: 'http://dicesandrabbits.rabbitwiz.com',
    img: DicesNRabbitsThumb,
    desc: "A Dices&Fold game clone on browser using React.",
    technologies: ['React', 'Redux', 'Styled Components'],
    features: [
      'Browse and search for movies',
      'User authentication',
      'Responsive design',
    ],
    challenges: [
      'Implementing infinite scrolling',
      'Optimizing API requests',
    ],
    github: 'https://github.com/uluutku/rabbitflix',
    screenshots: [
      './rabbitflix-new-thumb.jpg',
      './rabbitflix-new-thumb.jpg',
    ],
  },
  {
    id: 2,
    title: 'RabbitFlix',
    url: 'http://rabbitflix.vercel.app',
    img: RabbitFlixThumb,
    desc: "A Netflix inspired project with our wizard rabbit's touch.",
    technologies: ['React', 'Redux', 'Styled Components'],
    features: [
      'Browse and search for movies',
      'User authentication',
      'Responsive design',
    ],
    challenges: [
      'Implementing infinite scrolling',
      'Optimizing API requests',
    ],
    github: 'https://github.com/yourprofile/rabbitflix',
    screenshots: [
      './rabbitflix-new-thumb.jpg',
      './rabbitflix-new-thumb.jpg',
    ],
  },
  {
    id: 3,
    title: 'Carrot Crossroads',
    url: 'http://carrot-crossroads.vercel.app',
    img: CarrotCrossroadsThumb,
    desc: 'Decision-based life simulation game with a rabbit twist.',
    technologies: ['Unity', 'C#', 'Illustrator'],
    features: [
      'Interactive storytelling',
      'Multiple endings',
      'Custom character design',
    ],
    challenges: [
      'Creating engaging narratives',
      'Optimizing game performance',
    ],
    github: 'https://github.com/yourprofile/carrot-crossroads',
    screenshots: [
      './rabbitflix-new-thumb.jpg',
      './rabbitflix-new-thumb.jpg',
    ],
  },
  {
    id: 4,
    title: 'PawPicker',
    url: 'http://pawpicker.vercel.app',
    img: PawPickerThumb,
    desc: 'Modern A/B testing tool for selecting the best from multiple images.',
    technologies: ['Vue.js', 'Firebase', 'CSS Grid'],
    features: [
      'Real-time voting',
      'Analytics dashboard',
      'User authentication',
    ],
    challenges: [
      'Ensuring real-time updates',
      'Scalable database design',
    ],
    github: 'https://github.com/yourprofile/pawpicker',
    screenshots: [
      './rabbitflix-new-thumb.jpg',
      './rabbitflix-new-thumb.jpg',
    ],
  },
];

export default projectData;
