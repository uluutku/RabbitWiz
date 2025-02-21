// src/Components/projectData.js

// Main thumbnail imports
import RabbitFlixThumb from './rabbitflix-new-thumb.jpg';
import PawPickerThumb from './pawpicker-thumb.jpg';
import CarrotCrossroadsThumb from './carrot-crossroads.png';
import DicesNRabbitsThumb from './dicesnrtabbits.png';

// Screenshot imports for Dices&Rabbits
import DicesNRabbitsScreen1 from './dicesnrtabbits.png';
import DicesNRabbitsScreen2 from './dicesnrtabbits.png';

// Screenshot imports for RabbitFlix
import RabbitFlixScreen1 from './rabbitflix-new-thumb.jpg';
import RabbitFlixScreen2 from './rabbitflix-new-thumb.jpg';

// Screenshot imports for Carrot Crossroads
import CarrotCrossroadsScreen1 from './carrot-crossroads.png';
import CarrotCrossroadsScreen2 from './carrot-crossroads.png';

// Screenshot imports for PawPicker
import PawPickerScreen1 from './pawpicker-thumb.jpg';
import PawPickerScreen2 from './pawpicker-thumb.jpg';

const projectData = [
  {
    id: 1,
    title: 'Carrot Crossroads',
    url: 'http://carrotcrossroads.rabbitwiz.com',
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
    github: 'https://github.com/uluutku/carrot-crossroads',
    screenshots: [
      CarrotCrossroadsScreen1,
      CarrotCrossroadsScreen2,
    ],
  },
  {
    id: 2,
    title: 'RabbitFlix',
    url: 'http://rabbitflix.rabbitwiz.com',
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
    github: 'https://github.com/uluutku/rabbitflix',
    screenshots: [
      RabbitFlixScreen1,
      RabbitFlixScreen2,
    ],
  },
  {
    id: 3,
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
      DicesNRabbitsScreen1,
      DicesNRabbitsScreen2,
    ],
  },
  {
    id: 4,
    title: 'PawPicker',
    url: 'http://pawpicker.rabbitwiz.com',
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
    github: 'https://github.com/uluutku/pawpicker',
    screenshots: [
      PawPickerScreen1,
      PawPickerScreen2,
    ],
  },
];

export default projectData;
