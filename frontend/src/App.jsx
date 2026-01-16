import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingTape from './components/TrendingTape';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-20 -mt-8 mb-24">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="bg-[#0a3d3d] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="px-8 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Live Market Trends</span>
                </div>
                <div className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Updated Just Now</div>
              </div>
              <TrendingTape />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
