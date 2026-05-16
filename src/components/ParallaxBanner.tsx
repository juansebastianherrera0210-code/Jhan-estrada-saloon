import { useScrollY } from '../hooks/useScrollParallax';

export default function ParallaxBanner() {
  const scrollY = useScrollY();

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${(scrollY - 1800) * 0.3}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury treatment"
          className="w-full h-full object-cover scale-125"
        />
        <div className="absolute inset-0 bg-stone-900/60" />
      </div>

      <div className="relative z-10 text-center px-6">
        <p className="text-amber-300 text-xs tracking-[0.5em] uppercase mb-4">Limited Availability</p>
        <h2 className="text-white text-4xl md:text-6xl font-thin mb-6 leading-tight">
          Experience the
          <br />
          <span className="italic font-extralight text-amber-100">Lumière Effect</span>
        </h2>
        <p className="text-stone-300 font-light max-w-md mx-auto mb-10">
          Reserve your exclusive session today. First-time clients enjoy a complimentary consultation.
        </p>
        <a
          href="#contact"
          className="inline-block px-12 py-4 bg-amber-400 text-stone-900 text-sm tracking-widest uppercase font-medium hover:bg-amber-300 transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/30 hover:-translate-y-0.5"
        >
          Book Your Experience
        </a>
      </div>
    </section>
  );
}
