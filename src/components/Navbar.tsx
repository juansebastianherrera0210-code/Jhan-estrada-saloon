import { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import { useScrollY } from '../hooks/useScrollParallax';

const links = ['Services', 'About', 'Gallery', 'Testimonials', 'Contact'];

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrollY > 60;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className={`transition-colors duration-500 ${solid ? 'text-stone-800' : 'text-white'}`}>
            <Scissors size={22} className="group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className={`text-xl font-light tracking-[0.25em] uppercase transition-colors duration-500 ${solid ? 'text-stone-800' : 'text-white'}`}>
            Lumière
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-60 ${
                solid ? 'text-stone-700' : 'text-white'
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-sm tracking-widest uppercase px-6 py-2.5 border transition-all duration-300 ${
              solid
                ? 'border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-800'
            }`}
          >
            Book Now
          </a>
        </div>

        <button
          className={`md:hidden transition-colors duration-500 ${solid ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-stone-100 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-stone-700 hover:text-stone-400 transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-widest uppercase border border-stone-800 text-stone-800 px-6 py-3 text-center hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
