// src/components/sections/Portfolio.tsx
import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  //todo: import only the featured - not all
  const featuredProjects = projects.filter((project) => project.featured);

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
        {featuredProjects.map((project, index) => (
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

      <div className="mt-20 flex justify-center md:mt-32">
        <Link
          to="/work"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-red-600"
        >
          View Full Catalog
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
