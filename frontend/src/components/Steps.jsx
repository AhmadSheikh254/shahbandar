import React from 'react';
import { ShieldCheck, Zap, Lock, TrendingUp } from 'lucide-react';

const Steps = () => {
    return (
        <section className="bg-background py-32 relative overflow-hidden border-y border-border">
            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                {/* Top: Heading Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-400/10 border border-primary/20 text-primary text-[10px] font-black mb-8 tracking-[0.3em] uppercase shadow-md">
                        <Lock size={12} className="text-emerald-400" strokeWidth={2.5} />
                        Trust & Security
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] text-foreground">
                        Safe and <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Seamless</span> Trading
                    </h2>
                </div>

                {/* Bottom: Image Left, Text Right */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Visual Dashboard Mockup */}
                    <div className="relative">
                        <div className="relative glass-card p-1.5 rounded-[2rem] border border-border shadow-2xl overflow-hidden group hover:border-primary/20 transition-all duration-700">
                            <div className="w-full bg-gradient-to-br from-card to-card/50 rounded-[1.75rem] p-8 relative overflow-hidden aspect-[4/3]">
                                {/* Top Navigation Bar */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-gradient-to-br from-primary to-emerald-400 rounded-lg flex items-center justify-center shadow-lg">
                                            <span className="text-primary-foreground font-black text-lg">S</span>
                                        </div>
                                        <span className="text-lg font-black text-foreground tracking-tight">SHAHBANDAR</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 animate-pulse" />
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-border p-6">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="bg-gradient-to-br from-primary/20 to-emerald-400/10 rounded-xl p-4 border border-primary/20">
                                            <div className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-1">Volume</div>
                                            <div className="text-xl font-black text-foreground mb-0.5">$1.2M</div>
                                            <div className="text-[8px] font-bold text-emerald-400 flex items-center gap-1">
                                                <TrendingUp size={10} /> +12.5%
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-xl p-4 border border-border">
                                            <div className="text-[9px] font-black text-foreground/60 uppercase tracking-widest mb-1">Trades</div>
                                            <div className="text-xl font-black text-foreground mb-0.5">8.4K</div>
                                            <div className="text-[8px] font-bold text-foreground/40">Today</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-xl p-4 border border-border">
                                            <div className="text-[9px] font-black text-foreground/60 uppercase tracking-widest mb-1">Users</div>
                                            <div className="text-xl font-black text-foreground mb-0.5">2.4K</div>
                                            <div className="text-[8px] font-bold text-foreground/40 flex items-center gap-1">
                                                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Online
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Activity Feed */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-border hover:bg-foreground/10 transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-primary-foreground text-[10px] font-black">
                                                    GT
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-foreground">GTA V Account</div>
                                                    <div className="text-[9px] text-foreground/40">Just listed</div>
                                                </div>
                                            </div>
                                            <div className="text-xs font-black text-emerald-400">$249</div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 rounded-lg bg-foreground/5 border border-border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-black">
                                                    FN
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-foreground">Fortnite OG</div>
                                                    <div className="text-[9px] text-foreground/40">2m ago</div>
                                                </div>
                                            </div>
                                            <div className="text-xs font-black text-foreground/60">$399</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-emerald-400 shadow-md border border-white/20">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck size={14} className="text-white" strokeWidth={2.5} />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Secure Platform</span>
                                    </div>
                                </div>

                                {/* Decorative corner accents */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-bl-[3rem]" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-[3rem]" />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <p className="text-lg text-muted-foreground/60 font-medium leading-relaxed mb-12">
                            Experience institutional-grade security with every transaction. Our advanced TradeShield technology ensures complete protection.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    number: "01",
                                    icon: ShieldCheck,
                                    title: "Verified Sellers",
                                    description: "All traders undergo strict verification. Multi-layer authentication ensures only legitimate sellers access our platform."
                                },
                                {
                                    number: "02",
                                    icon: Zap,
                                    title: "Instant Delivery",
                                    description: "Automated systems deliver your assets within seconds of payment confirmation. No waiting, no delays."
                                },
                                {
                                    number: "03",
                                    icon: Lock,
                                    title: "24/7 Protection",
                                    description: "Our TradeShield technology monitors every transaction in real-time, providing complete protection and peace of mind."
                                }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-5 group">
                                    {/* Icon badge */}
                                    <div className="flex-shrink-0 relative">
                                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-400/10 flex items-center justify-center border border-primary/30 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-emerald-400 transition-all duration-500 shadow-lg">
                                            <step.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={2.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h4 className="text-xl font-black text-foreground tracking-tight uppercase">{step.title}</h4>
                                            <div className="text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]">{step.number}</div>
                                        </div>
                                        <p className="text-[15px] text-muted-foreground/60 font-medium leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-12">
                            <button className="bg-gradient-to-r from-primary to-emerald-400 text-primary-foreground font-black py-4 px-10 rounded-xl text-sm hover:shadow-md transition-all shadow-sm hover:-translate-y-1 uppercase tracking-widest relative overflow-hidden group">
                                <span className="relative z-10">Start Trading Securely</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
