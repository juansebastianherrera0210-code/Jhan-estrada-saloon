import { Sparkles, Droplets, Star, Zap, Heart, Sun } from 'lucide-react';
import { useInView } from '../hooks/useScrollParallax';

const services = [
  {
    icon: Sparkles,
    title: 'Signature Facials',
    desc: 'Personalized skin treatments using cutting-edge serums and techniques tailored to your unique complexion.',
    price: 'From $120',
    img: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Droplets,
    title: 'Hydration Therapy',
    desc: 'Deep moisture infusion treatments that restore radiance and elasticity for a dewy, youthful glow.',
    price: 'From $95',
    img: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Star,
    title: 'Luxury Hair Care',
    desc: 'Bespoke hair treatments including color, cut, and conditioning rituals performed by master stylists.',
    price: 'From $150',
    img: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Zap,
    title: 'Laser Treatments',
    desc: 'Advanced laser technology for hair removal, skin resurfacing, and age-defying rejuvenation.',
    price: 'From $200',
    img: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Heart,
    title: 'Body Sculpting',
    desc: 'Contouring massage and wrapping therapies designed to tone, firm, and refresh the entire body.',
    price: 'From $180',
    img: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Sun,
    title: 'Nail Artistry',
    desc: 'From classic manicures to intricate nail art, our technicians transform nails into wearable masterpieces.',
    price: 'From $65',
    img: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, inView] = useInView(0.1);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-white border border-stone-100 transition-all duration-700 hover:shadow-2xl hover:shadow-stone-200/80 hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-amber-300 text-xs tracking-widest uppercase font-medium">{service.price}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
            <Icon size={14} className="text-amber-600" />
          </div>
          <h3 className="text-stone-800 font-light text-lg tracking-wide">{service.title}</h3>
        </div>
        <p className="text-stone-500 text-sm leading-relaxed">{service.desc}</p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center text-xs tracking-widest uppercase text-amber-600 hover:text-amber-500 transition-colors gap-2 group/link"
        >
          Book Now
          <span className="w-6 h-px bg-amber-600 group-hover/link:w-10 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">What We Offer</p>
          <h2 className="text-stone-800 text-5xl md:text-6xl font-thin tracking-tight mb-6">
            Curated Services
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto mb-6" />
          <p className="text-stone-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Every service is a ritual — designed to restore, renew, and reveal your most radiant self.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
