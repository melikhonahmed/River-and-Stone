import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block py-1.5 px-4 bg-[#E9EDC9]/50 border border-[#CAD2C5] text-[#52796F] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Premium Residential Plumbing
              </span>
              
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif text-[#2F3E46] leading-[1.05] tracking-tight mb-8">
                Restoring the <br/>
                <span className="italic text-[#84A59D] font-light">natural flow</span> <br/>
                of your home.
              </h1>
              
              <p className="text-lg sm:text-xl text-[#52796F] mb-12 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Artisanal care for modern systems. We specialize in sustainable plumbing solutions that respect your space and the environment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12 text-xs tracking-widest uppercase font-bold">
                <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-[#354F52] hover:bg-[#2F3E46] text-[#F9F7F2] transition-all flex items-center justify-center gap-3 group border border-[#354F52]">
                  Schedule Inspection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="tel:5550128844" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-[#CAD2C5] hover:border-[#354F52] text-[#354F52] transition-colors flex items-center justify-center">
                  (555) 012-8844
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[650px]">
            {/* Abstract Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E9EDC9] rounded-full blur-[100px] -z-10 opacity-40"></div>
            
            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 right-4 lg:right-0 top-10 lg:top-0 rounded-bl-[80px] rounded-tr-[80px] overflow-hidden border border-[#CAD2C5] shadow-2xl shadow-[#354F52]/10"
            >
              <div className="absolute inset-0 bg-[#354F52]/10 z-10 mix-blend-overlay"></div>
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" 
                alt="Elegant minimalist bathroom" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-6 bg-[#F9F7F2]/90 backdrop-blur-xl p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-xl border border-[#CAD2C5]/50 z-20"
            >
              <p className="text-[10px] text-[#84A59D] font-bold uppercase tracking-widest mb-1">Legacy of Excellence</p>
              <p className="text-5xl font-serif text-[#354F52]">28+ <span className="text-xl italic font-light text-[#52796F]">Years</span></p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
