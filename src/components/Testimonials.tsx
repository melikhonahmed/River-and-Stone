import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Metro City",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Absolutely fantastic service. A pipe burst in our kitchen at 2 AM on a Sunday. The team was here within 45 minutes and handled it with absolute class.",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "West End",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Extremely professional and upfront about the pricing. They replaced our old water heater seamlessly. Polite, clean, and highly efficient craftsmanship.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    location: "Northside",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "It is hard to find honest contractors these days. RIVER & STONE is definitely exceptional. They respectfully located and repaired a complex hidden leak.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#E9EDC9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[#52796F] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#84A59D]"></div>
            Client Testimonials
            <div className="w-8 h-[1px] bg-[#84A59D]"></div>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#354F52] mb-6 tracking-tight">Stories of Satisfaction</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="bg-[#F9F7F2] rounded-[2rem] p-10 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-8 right-8 text-[#CAD2C5] text-8xl font-serif leading-none italic select-none">"</div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>
              <p className="text-[#354F52] mb-10 flex-grow text-lg font-serif leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-[#CAD2C5]/30 pt-6 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[10px] uppercase tracking-widest text-[#354F52]">{testimonial.name}</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#84A59D] mt-1">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
