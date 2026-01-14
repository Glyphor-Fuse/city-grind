import React from 'react';
import { motion } from 'framer-motion';
import { LuArrowDown, LuInstagram, LuTwitter } from 'react-icons/lu';
import { Reveal } from '../components/motion/Reveal';
import { SignatureEffect } from '../components/effects/SignatureEffect';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-[#e6e6e6] font-sans selection:bg-orange-900 selection:text-white overflow-x-hidden cursor-crosshair">
      {/* Global Styles for Fonts and specific overrides */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&family=Syne:wght@400;700;800&display=swap');
        
        :root {
          --charcoal: #121212;
          --concrete: #2a2a2a;
          --vapor: #e6e6e6;
          --timber: #A05A2C;
        }
        
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        h1, h2, h3, .display-font {
          font-family: 'Syne', sans-serif;
        }

        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: var(--charcoal);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--concrete);
        }
      `}</style>

      {/* Noise Texture */}
      <SignatureEffect effect="grain" />

      {/* Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-20 opacity-30">
        <div className="w-px h-full bg-white/10"></div>
        <div className="w-px h-full bg-white/10 hidden md:block"></div>
        <div className="w-px h-full bg-white/10"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="text-sm tracking-widest uppercase font-bold">E1 / LNDN</div>
        <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase">
          <a href="#" className="hover:text-gray-400 transition-colors">Space</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Menu</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Journal</a>
        </div>
        <button className="border border-white/30 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Book Table
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center z-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
            alt="Abstract shadow of coffee plant on concrete"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
        </div>

        <div className="z-20 text-center relative w-full px-4 flex flex-col items-center">
          <Reveal delay={0} width="100%">
            <p className="text-xs md:text-sm uppercase tracking-[0.5em] mb-4 text-gray-400 text-center">
              Est. 2024 — Shoreditch
            </p>
          </Reveal>
          
          <Reveal delay={0.1} width="100%">
            <h1 className="text-[clamp(4rem,12vw,14rem)] leading-[0.85] tracking-[-0.04em] font-extrabold uppercase mix-blend-exclusion text-white text-center">
              RITUAL<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
                FORM
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} width="100%">
            <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center items-center">
              <p className="max-w-xs text-sm text-gray-400 leading-relaxed text-left">
                We serve precision. A brutalist approach to caffeine in the heart of East London. No syrup. Just chemistry.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 animate-pulse flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <LuArrowDown className="w-3 h-3" />
        </div>
      </header>

      {/* Editorial / Image Overlap Section */}
      <section className="relative py-32 px-6 md:px-20 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative group">
            <div className="absolute -inset-4 border border-white/10 z-0 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="overflow-hidden relative z-10 aspect-[4/5]">
              <motion.img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
                alt="Brutalist Coffee Shop Interior" 
                className="w-full h-full object-cover grayscale"
                whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-5xl md:text-7xl mb-8 leading-none font-bold">
                CONCRETE<br/>
                <span className="italic font-light text-gray-500">& BEAN</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-400 leading-relaxed mb-8 font-light">
                Our flagship store on Redchurch Street is an ode to industrialism. Stripped back walls, polished concrete, and the rhythmic sound of the La Marzocco KB90. It is not just coffee; it is an interruption to the chaos of the city.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="#" className="inline-block text-xs uppercase tracking-[0.2em] border-b border-white pb-1 w-max hover:text-[#A05A2C] hover:border-[#A05A2C] transition-colors">
                Read Our Philosophy
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-32 bg-[#161616] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal width="100%">
              <span className="text-[#A05A2C] text-xs font-bold uppercase tracking-widest block mb-4">Selection</span>
              <h3 className="text-4xl md:text-6xl font-bold">THE BLACK LIST</h3>
            </Reveal>
          </div>

          <div className="space-y-8">
            {[ 
              { name: "Espresso (Double)", desc: "Single Origin — Ethiopia Guji", price: "£3.20" },
              { name: "Flat White", desc: "Estate Blend — Oat / Dairy", price: "£3.80" },
              { name: "Long Black", desc: "Washed Process — Notes of Jasmine", price: "£3.40" },
              { name: "Batch Brew", desc: "Rotating Daily Selection", price: "£3.00" },
              { name: "Cortado", desc: "1:1 Ratio — Rich & Texture", price: "£3.50" }
            ].map((item, index) => (
              <Reveal key={index} delay={index * 0.05} width="100%">
                <div className="group flex justify-between items-baseline py-4 border-bottom border-b border-white/10 hover:border-[#A05A2C] hover:pl-5 transition-all duration-300 cursor-pointer">
                  <div>
                    <h4 className="text-xl md:text-2xl font-medium">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 font-mono">{item.desc}</p>
                  </div>
                  <span className="text-xl font-mono group-hover:text-[#A05A2C] transition-colors">{item.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Marquee / Vibe */}
      <section className="w-full overflow-hidden py-20">
        <SignatureInteraction type="marquee" speed={40} className="opacity-80">
          <div className="flex gap-4 pr-4">
            {[ 
              "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="w-64 h-80 md:w-96 md:h-[30rem] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={src} className="w-full h-full object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </SignatureInteraction>
      </section>

      {/* Find Us Section */}
      <section className="py-32 px-6 md:px-20 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <h2 className="text-6xl md:text-8xl font-bold uppercase mb-12">Find<br/>Us</h2>
            </Reveal>
            <div className="space-y-8 text-lg font-light">
              <Reveal delay={0.1}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</p>
                  <p>142 Bethnal Green Rd,<br/>London E2 6DG</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Hours</p>
                  <p>Mon - Fri: 07:00 — 18:00<br/>Sat - Sun: 09:00 — 17:00</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Contact</p>
                  <a href="mailto:hello@e1brew.com" className="hover:text-[#A05A2C] transition-colors">hello@e1brew.com</a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative h-[500px] bg-[#222] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700" 
              alt="London Street Texture"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-black px-8 py-4 uppercase font-bold tracking-widest text-xs hover:bg-[#A05A2C] hover:text-white transition-colors cursor-pointer">
                Open Map
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-end border-t border-white/5 text-gray-600 text-xs uppercase tracking-widest">
        <div className="mb-4 md:mb-0">
           2024 E1 Brew Lab.<br/>All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <LuInstagram className="w-4 h-4" /> Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            <LuTwitter className="w-4 h-4" /> Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
