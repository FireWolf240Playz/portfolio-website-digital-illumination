// src/pages/ProjectDetail.tsx
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

// --- SWIPER IMPORTS ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-40 text-center text-white">Project not found</div>
    );
  }

  // Проверяваме дали има галерия
  const hasGallery = project.gallery && project.gallery.length > 0;

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

      {/* 2. MAIN VISUAL STAGE (Video OR Gallery) */}
      <div className="mb-16 md:mb-24">
        {hasGallery ? (
          // --- ВАРИАНТ А: АКО ИМА ГАЛЕРИЯ (Показваме Слайдера) ---
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1} // Мобилно: 1 и малко
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5, // По-големи снимки на десктоп
                  spaceBetween: 40,
                },
              }}
              className="h-[300px] w-full md:h-[550px]" // Увеличих височината за десктоп
            >
              {project.gallery!.map((imgSrc, index) => (
                <SwiperSlide
                  key={index}
                  className="group relative cursor-grab overflow-hidden rounded-lg active:cursor-grabbing"
                >
                  <img
                    src={imgSrc}
                    alt={`Gallery shot ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // --- ВАРИАНТ Б: АКО НЯМА ГАЛЕРИЯ (Показваме Видеото) ---
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-900 shadow-2xl shadow-red-900/5">
            <video
              src={project.videoSrc}
              controls
              autoPlay
              muted
              loop
              className="h-full w-full object-cover"
            ></video>
          </div>
        )}
      </div>

      {/* 3. PROJECT DETAILS GRID (Tech & Text) */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-20">
        {/* LEFT COLUMN: Credits & Tech */}
        <div className="order-2 space-y-12 md:order-1 md:col-span-4">
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
              {Object.entries(project.credits).map(([role, name]) => (
                <li key={role} className="flex justify-between">
                  <span className="capitalize text-gray-400">{role}</span>
                  <span className="text-white">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Specs */}
          {project.tech && (
            <div>
              <h3 className="mb-6 border-b border-white/10 pb-2 font-mono text-xs uppercase tracking-widest text-gray-500">
                Technical Specs
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem, index) => (
                  <span
                    key={index}
                    className="cursor-default rounded-full border border-white/10 px-3 py-1 text-xs uppercase text-gray-300 transition-colors hover:border-red-600 hover:text-white"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: The Story */}
        <div className="order-1 md:order-2 md:col-span-8 md:pl-10">
          <p className="mb-16 text-xl font-light leading-relaxed text-white md:text-3xl">
            {project.description}
          </p>

          {project.details && (
            <div className="grid grid-cols-1 gap-12">
              <div className="group">
                <h3 className="mb-4 font-heading text-2xl uppercase text-white transition-colors group-hover:text-red-600">
                  The Challenge
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-400">
                  {project.details.challenge}
                </p>
              </div>
              <div className="group">
                <h3 className="mb-4 font-heading text-2xl uppercase text-white transition-colors group-hover:text-red-600">
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
          to="/work"
          className="font-heading text-xl uppercase tracking-widest transition-colors hover:text-red-600"
        >
          ← Back to the full Catalog
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
