// src/components/sections/Portfolio.tsx
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects'; // <--- Импортираме данните

const Portfolio: React.FC = () => {
  return (
    <section
      id="work"
      className="relative z-10 w-full bg-cinema-black px-6 py-20 md:px-20"
    >
      {/* ... (Header частта си остава същата) ... */}
      <div className="mb-16 flex flex-col items-end justify-between border-b border-white/10 pb-8 md:mb-32 md:flex-row">
        <h2 className="font-heading text-5xl uppercase text-white md:text-7xl">
          Selected <br /> Works
        </h2>
        <p className="mt-4 max-w-xs font-sans text-sm text-gray-400 md:mt-0 md:text-base">
          A curated selection of cinematic moments...
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 md:gap-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            slug={project.slug}
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
