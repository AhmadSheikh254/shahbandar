import React from 'react';
import { Twitter, Instagram, Youtube, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background text-foreground pt-16 pb-8 border-t border-foreground/5 relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                {/* Top Section: Compact Brand & CTA */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-12 border-b border-foreground/5 mb-12">
                    <div className="max-w-lg">
                        <a href="#" className="flex items-center gap-3 mb-4 group">
                            <div className="relative">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <img src="/logo.png" alt="S" className="w-full h-full object-contain rounded-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tight text-foreground leading-none group-hover:text-primary transition-colors">
                                    SHAHBANDAR
                                </span>
                                <span className="text-[8px] font-semibold text-primary/90 uppercase tracking-widest">Premium Marketplace</span>
                            </div>
                        </a>
                        <p className="text-sm leading-relaxed font-medium text-muted-foreground/80">
                            The world's most secure and professional marketplace for institutional-grade digital assets and gaming services.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-gradient-to-r from-primary to-emerald-400 text-primary-foreground font-black py-3 px-8 rounded-xl text-xs hover:shadow-md transition-all shadow-sm uppercase tracking-widest">
                            Start Trading
                        </button>
                        <button className="bg-foreground/5 text-foreground font-black py-3 px-8 rounded-xl text-xs border border-foreground/10 hover:bg-foreground/10 transition-all uppercase tracking-widest">
                            Support
                        </button>
                    </div>
                </div>

                {/* Main Footer Links - Compact */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div>
                        <h4 className="text-foreground font-black mb-6 text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                            <div className="w-3 h-[2px] bg-gradient-to-r from-emerald-400 to-primary" /> Social
                        </h4>
                        <div className="flex gap-2">
                            {[Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/40 flex items-center justify-center text-primary hover:text-primary/80 hover:bg-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-110">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Marketplace</h4>
                        <ul className="space-y-3 text-[12px] font-semibold">
                            {['Game Accounts', 'In-Game Assets', 'Services', 'Premium'].map((item) => (
                                <li key={item}><a href="#" className="text-muted-foreground/70 hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Resources</h4>
                        <ul className="space-y-3 text-[12px] font-semibold">
                            {['Trading Guide', 'Security', 'FAQ', 'Support'].map((item) => (
                                <li key={item}><a href="#" className="text-muted-foreground/70 hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Company</h4>
                        <ul className="space-y-3 text-[12px] font-semibold">
                            {['About Us', 'Careers', 'Privacy', 'Terms'].map((item) => (
                                <li key={item}><a href="#" className="text-muted-foreground/70 hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-black mb-6 text-[10px] uppercase tracking-[0.3em]">Community</h4>
                        <ul className="space-y-3 text-[12px] font-semibold">
                            {['Contact', 'Developers', 'Partners', 'Affiliates'].map((item) => (
                                <li key={item}><a href="#" className="text-muted-foreground/70 hover:text-primary transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Compact */}
                <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-8 hover:scale-105 transition-all duration-700">
                        <span className="text-base font-black italic text-foreground tracking-tighter">VISA</span>
                        <span className="text-base font-black italic text-foreground tracking-tighter">mastercard</span>
                        <span className="text-base font-black text-foreground tracking-tighter">G Pay</span>
                        <span className="text-base font-black text-foreground tracking-tighter"> Pay</span>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-[11px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                            © 2026 Shahbandar. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                            <a href="#" className="hover:text-primary transition-colors">Status</a>
                            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
