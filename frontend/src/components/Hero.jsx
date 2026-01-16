import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-background pt-44 pb-16">
            {/* Sophisticated Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            {/* Subtle Radial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-screen-xl mx-auto px-6 w-full relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-sm mb-8 group hover:bg-foreground/10 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-bold text-foreground/60 uppercase tracking-[0.2em]">Institutional Marketplace</span>
                        <TrendingUp size={12} className="text-emerald-400" />
                    </div>

                    {/* Main Heading - Eye-catching but Professional */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[1.1] tracking-tight uppercase">
                        <span className="block">Trade Digital Assets</span>
                        <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent block">With Confidence</span>
                    </h1>

                    {/* Refined Subheading */}
                    <p className="text-base md:text-lg text-foreground/50 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Secure marketplace for premium gaming accounts, in-game currencies, and professional services. Trusted by thousands worldwide.
                    </p>

                    {/* Clean CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 text-sm uppercase tracking-wider flex items-center gap-2">
                            Browse Marketplace
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-foreground/5 hover:bg-foreground/10 text-foreground font-bold py-4 px-8 rounded-xl transition-all border border-foreground/10 backdrop-blur-sm text-sm uppercase tracking-wider">
                            Learn More
                        </button>
                    </div>

                    {/* Trust Indicators - Professional Touch */}
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-black text-foreground">$2.4M+</div>
                            <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Total Volume</div>
                        </div>
                        <div className="w-[1px] h-12 bg-foreground/10" />
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-black text-foreground">15K+</div>
                            <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Active Users</div>
                        </div>
                        <div className="w-[1px] h-12 bg-foreground/10" />
                        <div className="flex flex-col gap-1">
                            <div className="text-2xl font-black text-foreground">99.8%</div>
                            <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Success Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
