import React from 'react';

const TrendingTape = () => {
    const trendingItems = [
        { name: "FORTNITE OG RENEGADE", price: "$899", change: "+5%", icon: "🎮" },
        { name: "VALORANT RADIANT PEAK", price: "$249", change: "+8%", icon: "🎯" },
        { name: "OSRS 100M GOLD", price: "$45", change: "-2%", icon: "💰" },
        { name: "ROBLOX LIMITED VALK", price: "$1,200", change: "+15%", icon: "🧱" },
        { name: "GTA V MODDED ACCOUNT", price: "$129", change: "+12%", icon: "🚗" },
        { name: "LEAGUE CHALLENGER S14", price: "$350", change: "+3%", icon: "🏆" },
        { name: "CS2 DRAGON LORE", price: "$12,400", change: "+1%", icon: "🔫" },
        { name: "MINECRAFT OG NAME", price: "$450", change: "+20%", icon: "⛏️" },
    ];

    // Duplicate items for seamless loop
    const displayItems = [...trendingItems, ...trendingItems];

    return (
        <div className="w-full bg-white/[0.02] border-y border-white/10 py-3 overflow-hidden relative">
            <div className="flex animate-scroll whitespace-nowrap">
                {displayItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="inline-flex items-center gap-4 px-6 border-r border-white/10 last:border-r-0"
                    >
                        <span className="text-xl opacity-60">{item.icon}</span>
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide">{item.name}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-[9px] font-bold text-emerald-400/80">{item.price}</span>
                                <span className={`text-[8px] font-bold ${item.change.startsWith('+') ? 'text-emerald-400/70' : 'text-red-400/70'}`}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a3d3d] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a3d3d] to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default TrendingTape;
