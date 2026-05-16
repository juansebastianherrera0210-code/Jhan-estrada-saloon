import { useInView, useScrollY } from '../hooks/useScrollParallax';
import { Award, Users, Clock, Gem } from 'lucide-react';

const stats = [
  { icon: Award, value: '12+', label: 'Years of Excellence' },
  { icon: Users, value: '8,500+', label: 'Happy Clients' },
  { icon: Clock, value: '30+', label: 'Expert Specialists' },
  { icon: Gem, value: '50+', label: 'Premium Services' },
];

export default function About() {
  const scrollY = useScrollY();
  const [ref, inView] = useInView();
  const [textRef, textInView] = useInView();

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-stone-50">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with 3D parallax card effect */}
          <div
            ref={ref}
            className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${(scrollY - 600) * 0.01}deg) rotateX(${(scrollY - 600) * -0.005}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon interior"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/20 to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl border border-stone-100 w-52">
              <p className="text-amber-500 text-xs tracking-widest uppercase mb-1">Est.</p>
              <p className="text-stone-800 text-4xl font-thin">2012</p>
              <p className="text-stone-400 text-xs mt-1 tracking-wide">Redefining beauty</p>
            </div>

            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-amber-400" />
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`transition-all duration-1000 delay-200 ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h2 className="text-stone-800 text-5xl font-thin tracking-tight mb-6 leading-tight">
              Where Artistry
              <br />
              <span className="italic font-extralight text-stone-500">Meets Science</span>
            </h2>
            <div className="w-12 h-px bg-amber-400 mb-8" />
            <p className="text-stone-500 leading-relaxed mb-6 font-light">
              Founded in the heart of the city, Lumière has been a sanctuary of beauty for over a decade. We believe that true beauty is not just skin deep — it is a feeling, an experience, a ritual.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10 font-light">
              Our team of award-winning specialists combines the latest clinical innovations with time-honored techniques, creating transformative experiences tailored exclusively to you.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-stone-800 text-2xl font-light">{value}</p>
                    <p className="text-stone-400 text-xs tracking-wide">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
