import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  videoSrc?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  videoSrc,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    const video = videoRef.current;

    const applyParallax = (element: HTMLElement | null) => {
      if (element && container) {
        gsap.fromTo(
          element,
          { y: '-15%' },
          {
            y: '15%',
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    };

    applyParallax(img);
    if (video) applyParallax(video);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`group relative w-full cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="relative h-[300px] w-full overflow-hidden bg-cinema-black md:h-[650px]"
      >
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <img
            ref={imageRef}
            src={image}
            alt={title}
            className={`absolute left-0 top-0 h-[150%] w-full object-cover transition-opacity duration-500 will-change-transform ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {videoSrc && (
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              className={`absolute inset-0 h-[150%] w-full object-cover transition-opacity duration-500 will-change-transform ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
        </div>

        {/* 3. OVERLAY  */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 transition-all duration-500 group-hover:bg-black/20"></div>
      </div>

      {/* --- INFO SECTION --- */}
      <div className="mt-6 flex flex-col border-t border-white/20 pt-4 transition-all duration-300 group-hover:border-white/60">
        <div className="flex items-baseline justify-between">
          <h3 className="font-heading text-3xl uppercase leading-none text-white transition-colors duration-300 group-hover:text-red-600 md:text-4xl">
            {title}
          </h3>

          <span className="rounded-full border border-white/20 px-2 py-1 font-mono text-xs uppercase tracking-widest text-gray-400">
            {category}
          </span>
        </div>

        <div className="mt-2 flex h-0 items-center justify-between overflow-hidden transition-all duration-300 group-hover:h-6">
          <span className="text-xs uppercase text-gray-500">
            Client: {title} Brand
          </span>
          <span className="text-xs font-bold uppercase text-white underline decoration-red-600 underline-offset-4">
            View Project
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
