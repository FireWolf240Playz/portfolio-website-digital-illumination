// src/pages/Work.tsx
import React, { useEffect, useState } from 'react';
import { projects } from '../../data/projects.ts';
import ProjectCard from '../ui/ProjectCard.tsx';

const Work: React.FC = () => {
  // 1. Състояние за активния филтър (по подразбиране 'all')
  const [filter, setFilter] = useState('all');

  // 2. Списък с бутоните за филтриране
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'reels', label: 'Reels' },
    { id: '3d', label: '3D & Motion' },
    { id: 'product', label: 'Product' },
  ];

  // 3. Логика: Ако е 'all', покажи всичко, иначе филтрирай по type
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.type === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cinema-black px-6 pb-20 pt-32 md:px-20 md:pt-40">
      {/* HEADER */}
      <div className="mb-16 flex flex-col justify-between border-b border-white/10 pb-8 md:mb-24 md:flex-row md:items-end">
        <h1 className="font-heading text-5xl uppercase leading-[0.9] tracking-tighter text-white md:text-8xl">
          Work <br /> <span className="text-gray-600">Archive</span>
        </h1>
        <p className="mt-6 max-w-sm text-sm font-light text-gray-400 md:mt-0 md:text-base">
          A collection of our finest moments. Filter by category to find exactly
          what you are looking for.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="mb-16 flex flex-wrap gap-4 md:gap-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`relative text-sm uppercase tracking-widest transition-all duration-300 md:text-base ${filter === f.id ? 'text-white' : 'text-gray-600 hover:text-gray-300'} `}
          >
            {f.label}
            {/* Черта под активния бутон */}
            <span
              className={`absolute -bottom-2 left-0 h-[1px] bg-red-600 transition-all duration-300 ${filter === f.id ? 'w-full' : 'w-0'}`}
            ></span>
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      {/* Използваме key={filter}, за да рестартираме анимацията при смяна */}
      <div className="animate-fade-in grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              videoSrc={project.videoSrc}
              className="md:mt-0" // Тук махаме разместването, за да е по-подредено в архива
            />
          ))
        ) : (
          /* Ако няма проекти в тази категория */
          <div className="col-span-full py-20 text-center">
            <p className="-rotate-2 font-hand text-4xl text-gray-700">
              Coming Soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
