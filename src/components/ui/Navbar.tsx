import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const links = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    name: string
  ) => {
    e.preventDefault();

    setActiveLink(name);

    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setActiveLink(null);
      window.location.href = href;
    }, 400);
  };

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full px-6 transition-all duration-500 ease-in-out md:px-12 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-cinema-black/90 py-4 backdrop-blur-md'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            to="/"
            className="relative z-50 cursor-pointer font-heading text-xl font-bold uppercase tracking-tighter text-white md:text-2xl"
          >
            Digital<span className="text-red-600">.Illumination</span>
          </Link>

          {/* DESKTOP LINKS (Без промяна) */}
          <div className="hidden space-x-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="group relative text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-gray-300"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* MOBILE BURGER BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="z-50 p-2 text-white focus:outline-none md:hidden"
          >
            <div className="relative flex h-6 w-8 flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
              ></span>
              <span
                className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`block h-[2px] w-full bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-cinema-black transition-all duration-500 ${isMobileMenuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'}`}
      >
        <div className="flex flex-col space-y-8 text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleMobileLinkClick(e, link.path, link.name)} // Тук викаме новата функция
              className={`relative font-heading text-4xl uppercase tracking-wider text-white transition-colors ${activeLink === link.name ? 'text-red-600' : 'hover:text-gray-300'}`}
            >
              {link.name}

              {/* w-0 по подразбиране. Ако activeLink съвпада с името -> w-full */}
              <span
                className={`absolute -bottom-2 left-0 h-[2px] bg-red-600 transition-all duration-300 ease-out ${activeLink === link.name ? 'w-full' : 'w-0'}`}
              ></span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-10 text-xs uppercase tracking-widest text-gray-500">
          Based in Sofia, BG
        </div>
      </div>
    </>
  );
};

export default Navbar;
