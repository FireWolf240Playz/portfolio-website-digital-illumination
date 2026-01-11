// src/data/projects.ts

// ... (импортите са си същите) ...
import tram from '../assets/images/yellow-tram-thumbnail.png';
import girl from '../assets/images/girl-thumbnail.png';
import ballerinas from '../assets/images/balerinas-thumbnail.png';
import clouds from '../assets/images/clouds-thumbnail.png';

import smallRobotThumbnail from '../assets/images/Small_Robot_Thumbnail.png';
import cubicWorldThumbnail from '../assets/images/Cubic_World_Thumbnail.png';
import carVideoThumbnail from '../assets/images/Car_Animation_Thumbnail.png';
import fishbotThumbnail from '../assets/images/Fishbot Thumbnail.png';
import highPollyCarModelPhoto1 from '../assets/images/Car - Mountain - Front_Racingpng.png';
import highPollyCarModelPhoto2 from '../assets/images/Car - Mountain - Venice.png';
import highPollyCarModelPhoto3 from '../assets/images/Car_Mountain_Back_Image.png';

import tramVideo from '../assets/videos/Yellow Tram.mp4';
import girlVideo from '../assets/videos/Girl.mp4';
import ballerinaVideo from '../assets/videos/Ballerinas.mp4';
import cloudsVideo from '../assets/videos/Clouds.mp4';
import carVideo from '../assets/videos/Car Animation.mp4';
import smallRobotVideo from '../assets/videos/Small Robot.mp4';
import fishRobotVideo from '../assets/videos/Fish Bot.mp4';
import cubicWorldVideo from '../assets/videos/Cubic World Scene.mp4';

export const projects = [
  {
    id: 1,
    featured: true,
    slug: 'budapest-echoes',
    title: 'Budapest Echoes',
    category: 'Urban / Travel',
    type: 'commercial',
    client: 'National Geographic',
    year: '2024',
    description:
      'A cinematic journey through the historic streets of Budapest...',
    image: tram,
    videoSrc: tramVideo,
    credits: {
      director: 'Alex Yordanov',
      dop: 'Sarah Smith',
      editor: 'John Doe',
      colorist: 'Studio A',
    },
    details: { challenge: '...', approach: '...' },
    tech: ['Arri Alexa Mini', 'Cooke S4/i', 'DaVinci Resolve'],
  },
  {
    id: 2,
    featured: true,
    slug: 'phantom-stage',
    title: 'Phantom Stage',
    category: 'Performance Art',
    type: 'reels',
    client: 'Royal Opera House',
    year: '2023',
    description: 'An experimental performance art piece...',
    image: ballerinas,
    videoSrc: ballerinaVideo,
    credits: { director: 'Alex Yordanov', dop: 'Mike Ross' },
    details: { challenge: '...', approach: '...' },
    tech: ['RED V-Raptor', 'Phantom Flex', 'Haze Machine'],
  },
  {
    id: 3,
    featured: true,
    slug: 'noir-peaks',
    title: 'Noir Peaks',
    category: 'Cinematography',
    type: 'commercial',
    client: 'Patagonia',
    year: '2023',
    description: 'A black and white study of mountain textures...',
    image: girl,
    videoSrc: girlVideo,
    credits: { director: 'Alex Yordanov', dop: 'Team Alpha' },
    details: { challenge: '...', approach: '...' },
    tech: ['Sony FX6', 'B&W LUTs', 'Gimbal Work'],
  },
  {
    id: 4,
    featured: true,
    slug: 'misty-dawn',
    title: 'Misty Dawn',
    category: 'Documentary',
    type: 'commercial',
    client: 'BBC Earth',
    year: '2024',
    description: 'Documentation of the morning fog...',
    image: clouds,
    videoSrc: cloudsVideo,
    credits: { director: 'Alex Yordanov', dop: 'Team Beta' },
    details: { challenge: '...', approach: '...' },
    tech: ['Canon C70', 'RF 70-200mm', 'ND Filters'],
  },

  {
    id: 5,
    featured: false,
    slug: 'velocity-noir',
    title: 'Velocity Noir',
    category: 'Automotive / CGI',
    type: '3d',
    client: 'Personal Project',
    year: '2024',
    description: 'A photorealistic automotive visualization...',
    image: carVideoThumbnail,
    videoSrc: carVideo,
    credits: { director: 'Alex Yordanov', cgi: 'Alex Yordanov' },
    details: { challenge: '...', approach: '...' },
    tech: ['Blender 4.0', 'Cycles', 'After Effects'],
  },
  {
    id: 6,
    featured: false,
    slug: 'mech-unit-01',
    title: 'Mech Unit 01',
    category: 'Character Design / 3D',
    type: '3d',
    client: 'Concept Art',
    year: '2024',
    description: 'A study in hard-surface modeling...',
    image: smallRobotThumbnail,
    videoSrc: smallRobotVideo,
    credits: { director: 'Alex Yordanov', cgi: 'Alex Yordanov' },
    details: { challenge: '...', approach: '...' },
    tech: ['Blender', 'Rigging', 'Animation'],
  },
  {
    id: 7,
    featured: false,
    slug: 'aquatic-explorer',
    title: 'Aquatic Explorer',
    category: 'Biomimicry / 3D',
    type: '3d',
    client: 'R&D Project',
    year: '2024',
    description: 'A simulation of underwater biomimetic robotics...',
    image: fishbotThumbnail,
    videoSrc: fishRobotVideo,
    credits: { director: 'Alex Yordanov', cgi: 'Alex Yordanov' },
    details: { challenge: '...', approach: '...' },
    tech: ['Blender', 'Fluid Sim', 'Animation'],
  },

  {
    id: 8,
    featured: false,
    slug: 'cubic_world',
    title: 'Cubic World',
    category: 'Biomimicry / 3D',
    type: '3d',
    client: 'R&D Project',
    year: '2024',
    description: 'Cubic World Noir',
    image: cubicWorldThumbnail,
    videoSrc: cubicWorldVideo,
    credits: { director: 'Alex Yordanov', cgi: 'Alex Yordanov' },
    details: { challenge: '...', approach: '...' },
    tech: ['Blender', 'Fluid Sim', 'Animation'],
  },

  {
    id: 9,
    featured: false,
    slug: 'julietta-car-model',
    title: 'Concept Car Model',
    category: 'Concept Art / Hard surface Modeling / 3D',
    type: '3d',
    client: 'R&D Project',
    year: '2024',
    description: 'Julietta Car model',
    image: highPollyCarModelPhoto1,
    gallery: [
      highPollyCarModelPhoto1,
      highPollyCarModelPhoto2,
      highPollyCarModelPhoto3,
    ],
    credits: { director: 'Alex Yordanov', cgi: 'Alex Yordanov' },
    details: { challenge: '...', approach: '...' },
    tech: ['Blender', 'Fluid Sim', 'Animation'],
  },
];
