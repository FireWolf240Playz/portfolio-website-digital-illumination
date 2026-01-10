// src/components/sections/Hero.tsx
// src/components/sections/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import showreelVideo from '../../assets/videos/Showreel.mp4';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-cinema-black text-white">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Тъмен слой (Overlay) - махаме го леко или го правим градиент, за да се вижда видеото по-добре */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={showreelVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 flex h-full flex-col items-start justify-end px-4 pb-20 text-left md:px-20 md:pb-32">
        <div ref={textRef} className="max-w-4xl">
          {/* Заглавие */}
          <h1 className="font-heading mb-6 text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-white md:text-8xl lg:text-9xl">
            Digital <br /> Illumination
          </h1>

          {/* Подзаглавие / Описание */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-300 md:text-lg">
              Producing The Unseen
            </p>

            {/* Декоративна черта */}
            <div className="hidden h-[1px] w-12 bg-white/50 md:block"></div>

            <p className="max-w-xs font-sans text-xs text-gray-400 md:text-sm">
              Based in Varna. <br /> Available Worldwide.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden animate-bounce items-center gap-2 px-6 pb-24 md:flex md:px-20 md:pb-32">
        <span className="text-md font-bold uppercase tracking-widest text-white/70">
          Scroll Down
        </span>
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
