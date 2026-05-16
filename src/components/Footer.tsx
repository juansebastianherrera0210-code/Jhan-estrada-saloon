import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Scissors size={18} className="text-amber-400" />
              <span className="text-white text-xl font-light tracking-[0.25em] uppercase">Lumière</span>
            </div>
            <p className="font-light leading-relaxed max-w-xs mb-6 text-stone-500">
              Where beauty becomes an experience. A sanctuary of elegance and expertise in the heart of the city.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-stone-700 flex items-center justify-center text-stone-500 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white text-xs tracking-widest uppercase mb-6">Services</p>
            <ul className="space-y-3">
              {['Signature Facials', 'Hair Care', 'Laser Treatments', 'Body Sculpting', 'Nail Artistry'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-stone-500 text-sm font-light hover:text-amber-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white text-xs tracking-widest uppercase mb-6">Visit Us</p>
            <ul className="space-y-3 text-stone-500 text-sm font-light">
              <li>24 Rue de la Paix</li>
              <li>Paris, France</li>
              <li className="pt-2">Mon – Sat: 9AM – 7PM</li>
              <li>Sun: 10AM – 5PM</li>
              <li className="pt-2 text-amber-400/80">+1 (800) 555-0199</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Lumière Beauty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-stone-600 text-xs tracking-wide hover:text-stone-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-600 text-xs tracking-wide hover:text-stone-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
