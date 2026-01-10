// src/data/projects.ts

// Imports
import tram from '../assets/images/yellow-tram-thumbnail.png';
import girl from '../assets/images/girl-thumbnail.png';
import ballerinas from '../assets/images/balerinas-thumbnail.png';
import clouds from '../assets/images/clouds-thumbnail.png';

import tramVideo from '../assets/videos/Yellow Tram.mp4';
import girlVideo from '../assets/videos/Girl.mp4';
import ballerinaVideo from '../assets/videos/Ballerinas.mp4';
import cloudsVideo from '../assets/videos/Clouds.mp4';

export const projects = [
  {
    id: 1,
    slug: 'budapest-echoes',
    title: 'Budapest Echoes', // Добавих заглавието, липсваше
    category: 'Urban / Travel',
    client: 'National Geographic',
    year: '2024',
    description:
      'A cinematic journey through the historic streets of Budapest, capturing the interplay of light, shadow, and urban rhythm. The project explores the silence within the noise.',
    image: tram,
    videoSrc: tramVideo,
    credits: {
      director: 'Alex Yordanov',
      dop: 'Sarah Smith',
      editor: 'John Doe',
      colorist: 'Studio A',
    },
    // НОВО: Case Study Детайли
    details: {
      challenge:
        'The main objective was to capture the soul of Budapest without the usual tourist clichés. We needed to find the silence within the noise of a bustling metropolis and convey the feeling of nostalgia.',
      approach:
        "We chose to shoot during the 'blue hour' to mix natural and artificial light. Using a handheld approach allowed us to react spontaneously to the movement of the trams and the people, creating an immersive, documentary-style experience.",
    },
    tech: [
      'Arri Alexa Mini',
      'Cooke S4/i Lenses',
      'DaVinci Resolve',
      'Natural Light',
    ],
  },
  {
    id: 2,
    slug: 'phantom-stage',
    title: 'Phantom Stage',
    category: 'Performance Art',
    client: 'Royal Opera House',
    year: '2023',
    description:
      'An experimental performance art piece capturing the raw emotion of ballet dancers in an abandoned theater.',
    image: ballerinas,
    videoSrc: ballerinaVideo,
    credits: {
      director: 'Alex Yordanov',
      dop: 'Mike Ross',
      editor: 'Jane Doe',
    },
    details: {
      challenge:
        'To translate the physical strain and elegance of ballet onto a screen without losing the intimacy of a live performance. The lighting had to be dramatic yet revealing of the muscle tension.',
      approach:
        "We utilized high-speed cinematography (120fps) to slow down the dancers' movements, revealing details that remain unseen to the naked eye. A single spotlight source was used to create high-contrast silhouettes against the dark background.",
    },
    tech: ['RED V-Raptor', 'Angenieux Optimo', 'Phantom Flex', 'Haze Machine'],
  },
  {
    id: 3,
    slug: 'noir-peaks',
    title: 'Noir Peaks',
    category: 'Cinematography',
    client: 'Patagonia',
    year: '2023',
    description:
      'A black and white study of mountain textures and atmospheric conditions at high altitudes.',
    image: girl,
    videoSrc: girlVideo,
    credits: {
      director: 'Alex Yordanov',
      dop: 'Team Alpha',
    },
    details: {
      challenge:
        'Shooting in harsh conditions with rapidly changing weather. The goal was to strip away color to focus entirely on texture, light, and form, creating a timeless aesthetic.',
      approach:
        'We used high-contrast monochrome monitoring on set to ensure the lighting ratios were perfect for black and white conversion. The focus was on extreme close-ups of textures combined with wide shots to create a sense of scale and isolation.',
    },
    tech: ['Sony FX6', 'Sony G Master Lenses', 'B&W LUTs', 'Gimbal Work'],
  },
  {
    id: 4,
    slug: 'misty-dawn',
    title: 'Misty Dawn',
    category: 'Documentary',
    client: 'BBC Earth',
    year: '2024',
    description:
      'Documentation of the morning fog rolling over the ancient hills, shot entirely in natural light.',
    image: clouds,
    videoSrc: cloudsVideo,
    credits: {
      director: 'Alex Yordanov',
      dop: 'Team Beta',
    },
    details: {
      challenge:
        'Capturing the ephemeral nature of morning mist which lasts only for a few minutes before the sun burns it off. Timing and positioning were critical.',
      approach:
        'We camped on location to be ready before sunrise. Long lenses were used to compress the landscape, making the layers of fog appear denser and more painterly, emphasizing the dreamlike quality of the dawn.',
    },
    tech: ['Canon C70', 'RF 70-200mm', 'Tripod', 'ND Filters'],
  },
];
