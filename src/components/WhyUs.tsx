import { CheckCircle2, Droplets, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Clock,
    title: 'Dispatched 24/7',
    description: 'Plumbing disasters don\'t wait for dawn. Our fleet is actively roaming and ready for dispatch.'
  },
  {
    icon: ShieldCheck,
    title: 'Master Craftsmen',
    description: 'Every expert is extensively vetted, insured, and licensed for complex residential restorations.'
  },
  {
    icon: Droplets,
    title: 'Holistic Approach',
    description: 'We respect the architectural integrity of your home, using sustainable and non-destructive methods.'
  },
  {
    icon: CheckCircle2,
    title: 'Enduring Quality',
    description: 'We believe in doing it right the first time. We stand behind our installations with lifetime guarantees.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden border border-[#CAD2C5]">
              <img 
                src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Master plumber inspecting installation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#354F52]/20 mix-blend-overlay"></div>
            </div>
            {/* Design Line Graphic */}
            <div className="absolute -bottom-10 left-10 w-64 h-[1px] bg-[#354F52] transform -rotate-45 opacity-20"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-[#52796F] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center gap-4">
              <div className="w-8 h-[1px] bg-[#CAD2C5]"></div>
              Heritage & Approach
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#354F52] mb-8 tracking-tight leading-[1.1]">
              The Premium Choice <br />
              <span className="italic font-light text-[#84A59D]">for Your Home.</span>
            </h3>
            <p className="text-lg text-[#52796F] mb-12 font-light leading-relaxed">
              We don't just fix pipes; we elevate the standard of home service. Experience the difference of true professionals who respect your time and your property.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col gap-5 relative">
                  <div className="w-8 h-[1px] bg-[#CAD2C5] absolute -top-4 left-0"></div>
                  <div>
                    <h4 className="text-xl font-serif text-[#354F52] mb-2">{feature.title}</h4>
                    <p className="text-[#52796F] leading-relaxed font-light text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
