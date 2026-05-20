import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#354F52] text-[#F9F7F2] relative overflow-hidden z-0">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-[#52796F] rounded-full blur-[150px] opacity-30 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[#CAD2C5] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#84A59D]"></div>
            Get in Touch
            <div className="w-8 h-[1px] bg-[#84A59D]"></div>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight text-[#F9F7F2]">Ready to Restore.</h3>
          <p className="text-lg text-[#CAD2C5] font-light">
            Fill out the form below for a fast estimate, or call us directly for immediate service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <h4 className="text-3xl font-serif mb-12 text-[#F9F7F2]">Contact Information</h4>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="bg-[#52796F]/40 p-4 rounded-full transition-colors border border-[#84A59D]/30 group-hover:border-[#84A59D]">
                  <Phone className="w-5 h-5 text-[#CAD2C5]" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[10px] uppercase tracking-widest text-[#84A59D] mb-2">Call Us 24/7</h5>
                  <p className="text-[#CAD2C5] mb-2 font-light text-sm">We answer every call.</p>
                  <a href="tel:5550128844" className="text-3xl font-serif text-[#F9F7F2] hover:text-[#CAD2C5] transition-colors">(555) 012-8844</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#52796F]/40 p-4 rounded-full transition-colors border border-[#84A59D]/30 group-hover:border-[#84A59D]">
                  <MapPin className="w-5 h-5 text-[#CAD2C5]" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[10px] uppercase tracking-widest text-[#84A59D] mb-2">Our Location</h5>
                  <p className="text-[#F9F7F2] leading-relaxed font-serif text-xl">
                    1234 Plumber Way, Suite 100<br />
                    Metro City, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-[#52796F]/40 p-4 rounded-full transition-colors border border-[#84A59D]/30 group-hover:border-[#84A59D]">
                  <Clock className="w-5 h-5 text-[#CAD2C5]" strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-bold text-[10px] uppercase tracking-widest text-[#84A59D] mb-2">Operating Hours</h5>
                  <p className="text-[#CAD2C5] font-light text-sm">
                    <span className="block mb-2">Monday - Friday: 8:00 AM - 6:00 PM</span>
                    <span className="block mb-3">Saturday - Sunday: Emergency Only</span>
                    <span className="inline-block border border-[#D4A373]/50 text-[#D4A373] font-bold px-3 py-1 rounded-full text-[10px] uppercase tracking-widest">
                      24/7 Dispatch
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 bg-[#F9F7F2] rounded-[40px] p-10 lg:p-14 text-[#2F3E46] shadow-xl"
          >
            <h4 className="text-3xl font-serif mb-10 text-[#354F52]">Request Service</h4>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">First Name</label>
                  <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all rounded-none placeholder-[#CAD2C5] font-serif text-xl" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">Last Name</label>
                  <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all rounded-none placeholder-[#CAD2C5] font-serif text-xl" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">Phone Number</label>
                  <input type="tel" className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all rounded-none placeholder-[#CAD2C5] font-serif text-xl" placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">Email Address</label>
                  <input type="email" className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all rounded-none placeholder-[#CAD2C5] font-serif text-xl" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">Service Needed</label>
                <select className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all rounded-none font-serif text-xl text-[#2F3E46]">
                  <option>Emergency Service</option>
                  <option>Diagnostic / Leak</option>
                  <option>Drain Cleaning</option>
                  <option>Water Heater</option>
                  <option>Renovation / Install</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-[#52796F] mb-3">Message</label>
                <textarea rows={3} className="w-full px-0 py-3 bg-transparent border-b border-[#CAD2C5] focus:ring-0 focus:border-[#354F52] outline-none transition-all resize-none rounded-none placeholder-[#CAD2C5] font-serif text-xl" placeholder="Briefly describe the issue..."></textarea>
              </div>

              <button className="w-full bg-[#354F52] text-[#F9F7F2] font-bold text-[10px] tracking-widest uppercase py-5 rounded-full hover:bg-[#2F3E46] transition-colors mt-8">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
