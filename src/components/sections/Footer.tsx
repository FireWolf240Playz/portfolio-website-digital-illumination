// src/components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', href: '#' },
    { name: 'Vimeo', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Behance', href: '#' },
  ];

  const footerLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-cinema-black pt-20 text-white">
      <div className="px-6 md:px-20">
        {/* --- 1. BIG CALL TO ACTION --- */}
        <div className="mb-20 flex flex-col justify-between md:mb-32 md:flex-row md:items-end">
          <h2 className="font-heading text-6xl uppercase leading-[0.8] tracking-tighter md:text-[8rem]">
            Let's Create <br />
            <span className="text-gray-500">The Unseen.</span>
          </h2>

          <a
            href="mailto:hello@levector.clone"
            className="group mt-10 inline-flex cursor-pointer items-center gap-4 md:mt-0"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <svg
                className="h-6 w-6 -rotate-45 transform transition-transform duration-300 group-hover:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
            <span className="font-heading text-xl uppercase tracking-widest">
              Start a Project
            </span>
          </a>
        </div>

        {/* --- 2. MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-20 md:grid-cols-12">
          {/* NEWSLETTER (Заема 5 колони) */}
          <div className="md:col-span-5">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">
              Newsletter
            </h3>
            <p className="mb-8 max-w-sm text-xl font-light">
              Subscribe to our newsletter to receive news and updates about our
              latest projects.
            </p>
            <form className="flex items-end gap-4 border-b border-white/30 pb-4 transition-colors duration-300 focus-within:border-white">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-sm uppercase tracking-widest text-white placeholder-gray-600 outline-none"
              />
              <button
                type="submit"
                className="text-xs font-bold uppercase transition-colors hover:text-red-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* CONTACT INFO (Заема 3 колони) */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">
              Contact
            </h3>
            <div className="space-y-4 font-light text-gray-200">
              <p>
                <span className="mb-1 block text-xs uppercase text-gray-500">
                  Address
                </span>
                1000 Sofia, Bulgaria <br /> Vitosha Blvd. 12, fl. 3
              </p>
              <p>
                <span className="mb-1 block text-xs uppercase text-gray-500">
                  Phone
                </span>
                <a
                  href="tel:+359888123456"
                  className="transition-colors hover:text-white"
                >
                  +359 888 123 456
                </a>
              </p>
              <p>
                <span className="mb-1 block text-xs uppercase text-gray-500">
                  Email
                </span>
                <a
                  href="mailto:hello@levector.clone"
                  className="transition-colors hover:text-white"
                >
                  hello@levector.clone
                </a>
              </p>
            </div>
          </div>

          {/* SOCIALS & LINKS (Заема 3 колони) */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-8">
              {/* SITEMAP */}
              <div>
                <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">
                  Sitemap
                </h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm uppercase tracking-wider text-gray-300 decoration-red-600 underline-offset-4 transition-all hover:text-white hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SOCIALS */}
              <div>
                <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-gray-400">
                  Socials
                </h3>
                <ul className="space-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm uppercase tracking-wider text-gray-300 decoration-red-600 underline-offset-4 transition-all hover:text-white hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- 3. COPYRIGHT --- */}
        <div className="flex flex-col items-center justify-between py-8 text-[10px] uppercase tracking-widest text-gray-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Digital Illumination. All Rights
            Reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
