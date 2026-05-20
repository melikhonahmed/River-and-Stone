import { Droplets, Thermometer, PenTool, LayoutGrid, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Water Systems',
    description: 'Precision engineering for residential water flow, purification, and pressure regulation.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Droplets
  },
  {
    title: 'Thermal Dynamics',
    description: 'Advanced water heating solutions, featuring high-efficiency tankless integrations.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: Thermometer
  },
  {
    title: 'Architectural Rough-ins',
    description: 'Collaborative plumbing design for custom builds, additions, and historical renovations.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: PenTool
  },
  {
    title: 'Fixture Curation',
    description: 'Precise installation of luxury brassware and sanitary fittings for refined interiors.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    icon: LayoutGrid
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F9F7F2] relative z-20 border-t border-[#CAD2C5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[#52796F] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#CAD2C5]"></div>
            Our Capabilities
            <div className="w-8 h-[1px] bg-[#CAD2C5]"></div>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F3E46] mb-6 tracking-tight">Comprehensive Solutions</h3>
          <p className="text-lg text-[#52796F] font-light">
            From emergency repairs to intricate installations, our master plumbers deliver long-lasting, premium results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#CAD2C5]/50 group"
            >
              <div className="h-64 sm:h-80 overflow-hidden relative border-b border-[#CAD2C5]/50">
                <div className="absolute inset-0 bg-[#354F52]/10 group-hover:bg-transparent transition-colors z-10 duration-700 mix-blend-overlay"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1]" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center z-20 shadow-sm">
                  <service.icon className="w-5 h-5 text-[#354F52]" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="p-8 sm:p-10 flex flex-col items-start bg-[#F9F7F2]">
                <h4 className="text-3xl font-serif text-[#354F52] mb-4 group-hover:text-[#84A59D] transition-colors">{service.title}</h4>
                <p className="text-[#52796F] mb-8 font-light leading-relaxed">
                  {service.description}
                </p>
                <a href="#contact" className="mt-auto inline-flex items-center text-[#354F52] font-bold text-[10px] uppercase tracking-widest hover:text-[#84A59D] transition-colors group/link pb-1 border-b border-[#354F52] hover:border-[#84A59D]">
                  Explore Service
                  <ArrowRight className="w-3 h-3 ml-2 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
