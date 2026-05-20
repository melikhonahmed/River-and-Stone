import { Menu, X, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#F9F7F2]/90 backdrop-blur-xl border-b border-[#CAD2C5]/30 py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Premium Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#84A59D] rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#84A59D]/10"></div>
                <Droplets className="w-5 h-5 text-[#354F52]" strokeWidth={1.5} />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#354F52]">
              RIVER<span className="font-sans font-light text-xl mx-2 text-[#84A59D]">&amp;</span>STONE
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#services" className="text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:text-[#84A59D] transition-colors">Services</a>
            <a href="#why-us" className="text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:text-[#84A59D] transition-colors">Heritage</a>
            <a href="#testimonials" className="text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:text-[#84A59D] transition-colors">Testimonials</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#contact" className="border border-[#354F52] text-[#354F52] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#354F52] hover:text-[#F9F7F2] transition-colors">
              Book Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#354F52]">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F9F7F2] border-t border-[#CAD2C5]/30 px-4 pt-4 pb-6 space-y-2 absolute w-full left-0 top-full shadow-2xl">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:bg-[#CAD2C5]/20 transition-colors">Services</a>
          <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:bg-[#CAD2C5]/20 transition-colors">Heritage</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 text-xs uppercase tracking-widest font-semibold text-[#354F52] hover:bg-[#CAD2C5]/20 transition-colors">Testimonials</a>
          <div className="pt-4 mt-2 border-t border-[#CAD2C5]/30">
            <a href="tel:5551234567" className="block px-4 py-3 text-xs uppercase tracking-widest font-bold text-[#F9F7F2] bg-[#354F52] text-center transition-colors">
              Call (555) 012-8844
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
