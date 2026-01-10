// src/pages/ProjectDetail.tsx
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Скролва най-горе при зареждане (React Router понякога помни скрола)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-40 text-center text-white">Project not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-cinema-black px-6 pb-20 pt-24 text-white md:px-20 md:pt-32">
      {/* 1. HEADER SECTION */}
      <div className="mb-10 border-b border-white/10 pb-8 md:mb-16">
        <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-red-600">
          {project.category} — {project.year}
        </span>
        <h1 className="font-heading text-5xl uppercase leading-[0.9] tracking-tighter md:text-8xl">
          {project.title}
        </h1>
      </div>

      {/* 2. VIDEO PLAYER (MAIN STAGE) */}
      <div className="mb-16 aspect-video w-full bg-neutral-900 shadow-2xl shadow-red-900/5 md:mb-24">
        <video
          src={project.videoSrc}
          controls
          autoPlay
          muted={false} // Тук може да е true, ако искаш да не гърми звук веднага
          className="h-full w-full object-cover"
        ></video>
      </div>

      {/* 3. PROJECT DETAILS GRID */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
        {/* LEFT COLUMN: Credits & Tech (Sticky) */}
        <div className="space-y-12 md:col-span-4">
          {/* Credits */}
          <div>
            <h3 className="mb-6 border-b border-white/10 pb-2 font-mono text-xs uppercase tracking-widest text-gray-500">
              Credits
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-400">Client</span>
                <span className="font-bold text-white">{project.client}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Director</span>
                <span className="text-white">{project.credits.director}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">DOP</span>
                <span className="text-white">{project.credits.dop}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Editor</span>
                <span className="text-white">{project.credits.editor}</span>
              </li>
            </ul>
          </div>

          {/* Tech Specs (New!) */}
          {project.tech && (
            <div>
              <h3 className="mb-6 border-b border-white/10 pb-2 font-mono text-xs uppercase tracking-widest text-gray-500">
                Technical Specs
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-gray-300"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: The Story (Case Study) */}
        <div className="md:col-span-8 md:pl-10">
          {/* Introduction */}
          <p className="mb-16 text-xl font-light leading-relaxed text-white md:text-3xl">
            {project.description}
          </p>

          {/* The Challenge & Approach */}
          {project.details && (
            <div className="grid grid-cols-1 gap-12">
              <div className="group">
                <h3 className="font-heading mb-4 text-2xl uppercase text-white transition-colors group-hover:text-red-600">
                  The Challenge
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-400">
                  {project.details.challenge}
                </p>
              </div>

              <div className="group">
                <h3 className="font-heading mb-4 text-2xl uppercase text-white transition-colors group-hover:text-red-600">
                  The Approach
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-400">
                  {project.details.approach}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. BACK BUTTON */}
      <div className="mt-20 flex justify-center border-t border-white/10 pt-10 md:mt-32">
        <Link
          to="/"
          className="font-heading text-xl uppercase tracking-widest transition-colors hover:text-red-600"
        >
          ← Back to Works
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
