import { Droplets, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1D262A] text-[#CAD2C5] py-20 lg:py-32 border-t border-[#354F52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F9F7F2] mb-6 leading-tight">Elevating the standard of <span className="italic font-light text-[#84A59D]">your home</span>.</h2>
            <p className="text-[#84A59D] font-light text-lg">Premium artisanal plumbing, reserved for distinctive properties.</p>
          </div>
          <div className="shrink-0 lg:pb-4">
            <a href="#contact" className="inline-flex items-center gap-4 text-[#F9F7F2] border-b border-[#F9F7F2] pb-2 hover:text-[#84A59D] hover:border-[#84A59D] transition-all uppercase tracking-widest text-xs font-bold group">
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-[#354F52] mb-20 opacity-50"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-20 mb-20">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#84A59D] rounded-full flex items-center justify-center">
                 <Droplets className="w-6 h-6 text-[#84A59D]" strokeWidth={1.5} />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight text-[#F9F7F2]">
                RIVER<span className="font-sans font-light text-2xl mx-2 text-[#84A59D]">&amp;</span>STONE
              </span>
            </div>
            <p className="text-sm leading-relaxed font-light opacity-70 max-w-sm">
              Artisanal care for modern plumbing. We provide sustainable, and swift services for distinct residential and commercial properties globally.
            </p>
          </div>

          <div>
            <h4 className="text-[#F9F7F2] font-bold mb-8 tracking-[0.2em] uppercase text-[10px]">Navigation</h4>
            <ul className="space-y-5 text-xs tracking-widest uppercase font-light">
              <li><a href="#" className="hover:text-[#F9F7F2] transition-colors relative group"><span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#84A59D]">.</span>Home</a></li>
              <li><a href="#services" className="hover:text-[#F9F7F2] transition-colors relative group"><span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#84A59D]">.</span>Services</a></li>
              <li><a href="#why-us" className="hover:text-[#F9F7F2] transition-colors relative group"><span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#84A59D]">.</span>Heritage</a></li>
              <li><a href="#testimonials" className="hover:text-[#F9F7F2] transition-colors relative group"><span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#84A59D]">.</span>Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F9F7F2] font-bold mb-8 tracking-[0.2em] uppercase text-[10px]">Connect</h4>
            <ul className="space-y-5 text-xs tracking-widest uppercase font-light">
              <li><a href="tel:5550128844" className="hover:text-[#F9F7F2] transition-colors">(555) 012-8844</a></li>
              <li><a href="mailto:hello@riverandstone.com" className="hover:text-[#F9F7F2] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F9F7F2] transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-[#F9F7F2] transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-[#354F52] border-opacity-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-light opacity-50">
          <p>&copy; {new Date().getFullYear()} River & Stone Plumbing.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#F9F7F2] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F9F7F2] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
