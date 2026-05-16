import { useInView, useScrollY } from '../hooks/useScrollParallax';

const images = [
  {
    src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'col-span-2 row-span-2',
    label: 'Body Treatment',
  },
  {
    src: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: '',
    label: 'Skincare',
  },
  {
    src: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: '',
    label: 'Hair Care',
  },
  {
    src: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: '',
    label: 'Nail Art',
  },
  {
    src: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: '',
    label: 'Facial',
  },
  {
    src: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=600',
    span: '',
    label: 'Laser',
  },
];

export default function Gallery() {
  const scrollY = useScrollY();
  const [ref, inView] = useInView();

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Our Work</p>
          <h2 className="text-stone-800 text-5xl md:text-6xl font-thin tracking-tight mb-6">
            Beauty in Motion
          </h2>
          <div className="w-16 h-px bg-amber-400 mx-auto" />
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[700px]">
          {images.map((img, i) => (
            <GalleryItem key={img.src} img={img} index={i} scrollY={scrollY} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  img,
  index,
  scrollY,
}: {
  img: typeof images[0];
  index: number;
  scrollY: number;
}) {
  const [ref, inView] = useInView(0.05);
  const parallaxFactor = index % 2 === 0 ? 0.06 : -0.04;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${img.span} transition-all duration-1000 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img
        src={img.src}
        alt={img.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        style={{
          transform: `translateY(${scrollY * parallaxFactor}px) scale(1.1)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-500" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-white text-xs tracking-[0.3em] uppercase border border-white/60 px-4 py-2">
          {img.label}
        </span>
      </div>
    </div>
  );
}
