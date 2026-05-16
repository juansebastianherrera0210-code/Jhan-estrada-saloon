import { useState } from 'react';
import { useInView } from '../hooks/useScrollParallax';
import { supabase } from '../lib/supabase';
import { CheckCircle, Loader } from 'lucide-react';

const services = [
  'Signature Facial',
  'Hydration Therapy',
  'Luxury Hair Care',
  'Laser Treatment',
  'Body Sculpting',
  'Nail Artistry',
  'Consultation',
];

const times = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

const today = new Date().toISOString().split('T')[0];

export default function BookingForm() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', time: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.date || !form.time) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from('bookings').insert([form]);
    setLoading(false);
    if (dbError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSuccess(true);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4">Reserve</p>
            <h2 className="text-stone-800 text-5xl font-thin tracking-tight mb-6 leading-tight">
              Begin Your
              <br />
              <span className="italic font-extralight text-stone-500">Journey</span>
            </h2>
            <div className="w-12 h-px bg-amber-400 mb-8" />
            <p className="text-stone-500 font-light leading-relaxed mb-12 max-w-sm">
              Book your appointment and let our specialists craft a personalized beauty experience just for you. We'll confirm within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Address', value: '24 Rue de la Paix, Paris' },
                { label: 'Hours', value: 'Mon-Sat: 9AM – 7PM' },
                { label: 'Phone', value: '+1 (800) 555-0199' },
                { label: 'Email', value: 'hello@lumiere.salon' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-amber-500 text-xs tracking-widest uppercase w-16 mt-0.5 flex-shrink-0">{label}</span>
                  <span className="text-stone-600 font-light">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 relative">
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon reception"
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-amber-200 -z-10" />
            </div>
          </div>

          {/* Right form */}
          <div
            className={`bg-stone-50 p-10 border border-stone-100 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle size={48} className="text-amber-500 mb-6" />
                <h3 className="text-stone-800 text-2xl font-light mb-3 tracking-wide">Booking Confirmed</h3>
                <p className="text-stone-500 font-light leading-relaxed max-w-xs">
                  Thank you, {form.name}. We'll reach out to you at {form.email} to confirm your appointment.
                </p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' }); }}
                  className="mt-8 text-xs tracking-widest uppercase text-amber-600 hover:text-amber-500 transition-colors"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-stone-800 text-xl font-light tracking-wide mb-8">Reserve Your Appointment</h3>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                  <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (000) 000" type="tel" />
                </div>

                <Field label="Email *" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" type="email" />

                <div className="space-y-1.5">
                  <label className="text-stone-500 text-xs tracking-widest uppercase">Service *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-700 text-sm font-light focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-stone-500 text-xs tracking-widest uppercase">Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      min={today}
                      onChange={handleChange}
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-700 text-sm font-light focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-stone-500 text-xs tracking-widest uppercase">Time *</label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-700 text-sm font-light focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                    >
                      <option value="">Select time</option>
                      {times.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-stone-500 text-xs tracking-widest uppercase">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special requests or notes..."
                    className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-700 text-sm font-light focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-rose-500 text-sm font-light">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-stone-800 text-white text-sm tracking-widest uppercase py-4 hover:bg-stone-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {loading ? <Loader size={16} className="animate-spin" /> : null}
                  {loading ? 'Booking...' : 'Reserve Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = 'text',
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-stone-500 text-xs tracking-widest uppercase">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-stone-200 bg-white px-4 py-3 text-stone-700 text-sm font-light focus:outline-none focus:border-amber-400 transition-colors"
      />
    </div>
  );
}
