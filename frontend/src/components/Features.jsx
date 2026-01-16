import React from 'react';
import { Search, Sparkles, ArrowUpRight, ShieldCheck, Zap, Trophy, Star, User, Lock, TrendingUp } from 'lucide-react';

const CategorySection = ({ title, items, index }) => (
    <div className="relative group h-full">
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-card/80 to-card/40 border border-border p-10 md:p-12 rounded-[2rem] transition-all duration-500 group-hover:border-primary/30 group-hover:translate-y-[-6px] shadow-xl h-full flex flex-col min-h-[600px] overflow-hidden">

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem] opacity-50" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-emerald-400/5 to-transparent rounded-tr-[4rem] opacity-50" />

            {/* Header */}
            <div className="flex items-start justify-between mb-12 relative z-10">
                <div className="flex items-start gap-5">
                    {/* Icon container with premium styling */}
                    <div className="relative">
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-400/10 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-emerald-400 group-hover:text-primary-foreground transition-all duration-500 shadow-lg">
                            {index === 0 ? <User size={28} strokeWidth={2.5} /> : index === 1 ? <Zap size={28} strokeWidth={2.5} /> : index === 2 ? <Trophy size={28} strokeWidth={2.5} /> : <Star size={28} strokeWidth={2.5} />}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl font-black text-foreground tracking-tight uppercase leading-none bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">{title}</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[9px] font-black text-emerald-400/90 uppercase tracking-[0.25em]">Verified & Secure</span>
                        </div>
                    </div>
                </div>

                {/* Action button */}
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-foreground/30 group-hover:text-emerald-400 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {items.map((item, idx) => (
                    <div key={idx} className="relative group/item">
                        {/* Item card */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-foreground/[0.02] border border-border hover:bg-foreground/[0.05] hover:border-emerald-400/20 transition-all duration-300 cursor-pointer">
                            {/* Icon */}
                            <div className="relative">
                                <div className="relative w-14 h-14 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg flex items-center justify-center border border-border group-hover/item:border-emerald-400/30 group-hover/item:scale-110 transition-all duration-300 shadow-md">
                                    <span className="text-3xl filter grayscale-[0.2] group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-300">{item.icon}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-1.5 flex-1">
                                <span className="text-sm font-black text-foreground/80 group-hover/item:text-foreground transition-colors tracking-wide">{item.name}</span>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1.5">
                                        <ShieldCheck size={11} className="text-emerald-400/70" strokeWidth={2.5} />
                                        <span className="text-[8px] text-emerald-400/60 font-black uppercase tracking-widest">Escrow Protected</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trending indicator */}
                            <div className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                                <TrendingUp size={14} className="text-emerald-400" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Features = () => {
    const categories = [
        {
            title: "Premium Accounts",
            items: [
                { name: "Grand Theft Auto V", icon: "🚗" },
                { name: "Fortnite OG", icon: "🔫" },
                { name: "Valorant Radiant", icon: "🎯" },
                { name: "Rainbow Six Siege", icon: "🛡️" },
                { name: "Roblox Limiteds", icon: "🧱" },
                { name: "Old School RuneScape", icon: "⚔️" },
                { name: "Minecraft Premium", icon: "⛏️" },
                { name: "League of Legends", icon: "🏆" },
            ]
        },
        {
            title: "Global Currencies",
            items: [
                { name: "OSRS Gold", icon: "💰" },
                { name: "Roblox Robux", icon: "💎" },
                { name: "FC 25 Coins", icon: "⚽" },
                { name: "WoW Gold", icon: "⚔️" },
                { name: "POE 2 Divine Orbs", icon: "🔮" },
                { name: "EVE ISK", icon: "🚀" },
            ]
        },
        {
            title: "Professional Services",
            items: [
                { name: "Rank Boosting", icon: "📈" },
                { name: "Coaching", icon: "🎓" },
                { name: "Power Leveling", icon: "⚡" },
                { name: "Quest Completion", icon: "📜" },
            ]
        },
        {
            title: "Exclusive Items",
            items: [
                { name: "Premium Assets", icon: "💎" },
                { name: "Rare Skins", icon: "🎭" },
                { name: "Legacy Items", icon: "🏺" },
                { name: "Limited Edition", icon: "✨" },
            ]
        }
    ];

    return (
        <section className="bg-background py-40 relative overflow-hidden">
            {/* Subtle Mesh */}
            <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`, backgroundSize: '64px 64px' }} />

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-5xl mx-auto mb-32">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-emerald-400/10 border border-primary/20 text-primary text-[10px] font-black mb-8 tracking-[0.3em] uppercase shadow-md">
                        <Sparkles size={14} className="text-emerald-400" />
                        Institutional Marketplace
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter uppercase leading-none mb-10 whitespace-nowrap">
                        Premium <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Marketplace</span>
                    </h2>
                    <p className="text-muted-foreground/50 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                        The world's most secure destination for trading high-value digital assets and professional gaming services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
                    {categories.map((cat, idx) => (
                        <CategorySection key={idx} title={cat.title} items={cat.items} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
