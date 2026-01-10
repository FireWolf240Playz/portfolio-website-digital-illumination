// src/pages/About.tsx
import React, { useEffect } from 'react';

const teamImages = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=500&q=80',
];

const About: React.FC = () => {
  const marqueeImages = [...teamImages, ...teamImages];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-cinema-black pb-20 pt-32 text-white md:pt-40">
      {/* --- 1. CONTENT SECTION --- */}
      <div className="mb-24 px-6 md:mb-40 md:px-20">
        {/* HERO TITLE */}
        <div className="relative mb-24 md:mb-40">
          <h2 className="font-heading relative z-10 text-5xl uppercase leading-[0.85] tracking-tighter md:text-8xl">
            We Don't Just Shoot. <br />
            <span className="text-gray-500">We </span>
            {/* Думата с петното вътре */}
            <span className="font-hand relative inline-block translate-y-2 -rotate-6 transform text-6xl lowercase text-red-600 md:translate-y-4 md:text-9xl">
              <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 blur-3xl md:h-48 md:w-48"></div>
              architect
            </span>
            <span className="text-gray-500"> Light.</span>
          </h2>
        </div>

        {/* TEXT BLOCKS
            Mobile: Grid (едно под друго)
            Desktop: Flex (едно до друго)
        */}
        <div className="grid grid-cols-1 gap-20 md:flex md:flex-row md:justify-between">
          {/* BLOCK 1 (Left) */}
          <div className="relative pt-10 md:w-1/2 md:pr-10">
            <span className="font-hand absolute -left-4 -top-24 select-none text-[10rem] leading-none text-white/20 md:-left-10 md:text-[13rem]">
              01
            </span>

            <h3 className="font-heading relative z-10 mb-6 flex items-center gap-3 text-2xl uppercase text-white">
              <span className="h-[2px] w-8 bg-red-600"></span>
              The Philosophy
            </h3>
            <p className="relative z-10 text-lg font-light leading-relaxed text-gray-400 md:text-xl">
              Based in Varna, Digital Illumination was born from a simple{' '}
              <span className="font-hand text-2xl text-white">obsession</span>:
              the space between reality and imagination. We believe that every
              frame must earn its place on the screen. Our approach is not just
              about capturing what is in front of the lens, but interpreting it.
            </p>
          </div>

          {/* BLOCK 2 (Right & Pushed Down) */}
          <div className="relative pt-10 md:mt-32 md:w-1/2 md:pl-10">
            <span className="font-hand absolute -top-24 left-0 select-none text-[10rem] leading-none text-white/20 md:-left-6 md:text-[13rem]">
              02
            </span>

            <h3 className="font-heading relative z-10 mb-6 flex items-center gap-3 text-2xl uppercase text-white">
              <span className="h-[2px] w-8 bg-red-600"></span>
              The Method
            </h3>
            <p className="relative z-10 text-lg font-light leading-relaxed text-gray-400 md:text-xl">
              We operate at the intersection of technical precision and{' '}
              <span className="font-hand text-2xl text-red-600">
                creative chaos
              </span>
              . We treat light as a physical material—molding it, breaking it,
              and reshaping it. We don't follow trends; we study the physics of
              motion to construct visual experiences that linger.
            </p>
          </div>
        </div>
      </div>

      {/* --- 2. INFINITE MARQUEE --- */}
      <div className="relative w-full overflow-hidden border-t border-white/10 pt-20">
        <div className="font-hand absolute left-1/2 top-8 -translate-x-1/2 rotate-2 transform text-xl tracking-widest text-gray-600 opacity-50">
          behind the scenes
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-cinema-black to-transparent md:w-32"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-cinema-black to-transparent md:w-32"></div>

        <div className="animate-marquee mt-6 flex w-max space-x-6 md:space-x-10">
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="group relative h-[250px] w-[200px] flex-shrink-0 cursor-pointer overflow-hidden grayscale transition-all duration-500 hover:grayscale-0 md:h-[450px] md:w-[350px]"
            >
              <img
                src={src}
                alt="Team member"
                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
