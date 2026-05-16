import { useInView } from '../hooks/useScrollParallax';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia Laurent',
    role: 'Fashion Editor',
    quote:
      "Lumière is the only place I trust with my skin. The signature facial transformed my complexion in just three sessions. Absolute perfection.",
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Margaux Delacroix',
    role: 'Entrepreneur',
    quote:
      "I've visited salons across Paris, London, and New York. Nothing compares to the level of care and expertise at Lumière. It's my ritual.",
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Elena Vasquez',
    role: 'Creative Director',
    quote:
      "The team here understands that beauty is deeply personal. They took the time to understand my needs and exceeded every expectation.",
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section id="testimonials" className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 to-stone-900/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-amber-400 text-xs tracking-[0.4em] uppercase mb-4">Client Stories</p>
          <h2 className="text-white text-5xl md:text-6xl font-thin tracking-tight mb-6">
            Words of Elegance
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/8 hover:border-amber-400/30 transition-all duration-700 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <Quote size={32} className="text-amber-400/40 mb-6 group-hover:text-amber-400/60 transition-colors duration-300" />
      <p className="text-stone-300 font-light leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border border-amber-400/30"
        />
        <div>
          <p className="text-white font-light tracking-wide">{testimonial.name}</p>
          <p className="text-amber-400/70 text-xs tracking-widest uppercase">{testimonial.role}</p>
        </div>
      </div>
      {/* Accent corner */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-400/20 group-hover:border-amber-400/50 transition-colors duration-300" />
    </div>
  );
}
