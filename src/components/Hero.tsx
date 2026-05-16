import { useScrollY } from '../hooks/useScrollParallax';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollY = useScrollY();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury beauty salon"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-200/10 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-rose-200/10 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-amber-300 text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Premium Beauty Experience
        </p>
        <h1
          className="text-white font-thin text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          Your Beauty,
          <br />
          <span className="font-extralight italic text-amber-100">Elevated.</span>
        </h1>
        <p
          className="text-stone-300 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Indulge in artisanal beauty treatments crafted for the modern woman. Where science meets luxury.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-amber-400 text-stone-900 text-sm tracking-widest uppercase font-medium hover:bg-amber-300 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5"
          >
            Reserve Your Seat
          </a>
          <a
            href="#services"
            className="px-10 py-4 border border-white/40 text-white text-sm tracking-widest uppercase font-light hover:border-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
