import React from 'react';
import { ShieldCheck, Headset } from 'lucide-react';

const Pricing = () => {
    return (
        <section className="bg-background py-24 relative">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Money-Back Guarantee */}
                    <div className="glass-card p-12 flex flex-col md:flex-row items-center gap-10 group hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                        {/* Decorative blur removed */}
                        <div className="w-28 h-28 bg-accent/10 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-accent group-hover:text-background transition-all duration-500 relative z-10">
                            <ShieldCheck size={64} className="text-accent group-hover:text-inherit" />
                        </div>
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">Purchase Protection</h3>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">
                                Receive your assets as described or get a full refund. Your security is our absolute priority.
                            </p>
                            <button className="bg-accent/10 hover:bg-accent text-accent hover:text-background font-black py-3 px-10 rounded-xl text-sm transition-all border border-accent/20 uppercase tracking-widest">
                                View Policy
                            </button>
                        </div>
                    </div>

                    {/* 24/7 Live Support */}
                    <div className="glass-card p-12 flex flex-col md:flex-row items-center gap-10 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                        {/* Decorative blur removed */}
                        <div className="w-28 h-28 bg-primary/10 rounded-3xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                            <Headset size={64} className="text-primary group-hover:text-inherit" />
                        </div>
                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">Expert Support</h3>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">
                                Our dedicated Shahbandar support team is available 24/7 to assist you with any inquiries.
                            </p>
                            <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white font-black py-3 px-10 rounded-xl text-sm transition-all border border-primary/20 uppercase tracking-widest">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
