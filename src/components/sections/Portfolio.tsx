import React from 'react';
import ProjectCard from '../ui/ProjectCard';

import yelloTram from '../../assets/videos/Yellow Tram.mp4';
import ballerinas from '../../assets/videos/Ballerinas.mp4';
import clouds from '../../assets/videos/Clouds.mp4';
import girl from '../../assets/videos/Girl.mp4';

import yellowTrampThumbnail from '../../assets/images/yellow-tram-thumbnail.png';
import ballerinasThumbnail from '../../assets/images/balerinas-thumbnail.png';
import cloudsThumbnail from '../../assets/images/clouds-thumbnail.png';
import girlThumbnail from '../../assets/images/girl-thumbnail.png';

const projects = [
  {
    id: 1,
    title: 'Budapest Echoes',
    category: 'Urban / Travel',

    image: yellowTrampThumbnail,
    videoSrc: yelloTram,
  },
  {
    id: 2,
    title: 'Phantom Stage',
    category: 'Performance Art',
    image: ballerinasThumbnail,
    videoSrc: ballerinas,
  },
  {
    id: 3,
    title: 'Noir Peaks',
    category: 'Cinematography',
    image: girlThumbnail,
    videoSrc: girl,
  },
  {
    id: 4,
    title: 'Misty Dawn',
    category: 'Documentary',
    image: cloudsThumbnail,
    videoSrc: clouds,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 w-full bg-cinema-black px-6 py-20 md:px-20"
    >
      <div className="mb-16 flex flex-col items-end justify-between border-b border-white/10 pb-8 md:mb-32 md:flex-row">
        <h2 className="font-heading text-5xl uppercase text-white md:text-7xl">
          Selected <br /> Works
        </h2>
        <p className="mt-4 max-w-xs font-sans text-sm text-gray-400 md:mt-0 md:text-base">
          A curated selection of cinematic moments, capturing the essence of
          motion and emotion.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            videoSrc={project.videoSrc}
            className={index % 2 !== 0 ? 'md:mt-32' : ''}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
