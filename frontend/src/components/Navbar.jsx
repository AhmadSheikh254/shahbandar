import React, { useState, useEffect } from 'react';
import {
    Search, LayoutGrid, Sun, Moon, Globe, ChevronDown,
    User, Package, Zap, Trophy, Coins, Box, Flame,
    Gamepad2, ShieldCheck, CreditCard, Gift, ShoppingCart,
    Layers
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'All', icon: <Layers size={24} strokeWidth={1.5} />, href: '#all', count: 'View All', color: '#94a3b8' },
        { name: 'Currency', icon: <Coins size={24} strokeWidth={1.5} />, href: '#currency', count: '2.4k Offers', badge: 'Hot', color: '#fbbf24' },
        { name: 'Items', icon: <Box size={24} strokeWidth={1.5} />, href: '#items', count: '15k+ Items', color: '#60a5fa' },
        { name: 'Boosting', icon: <Flame size={24} strokeWidth={1.5} />, href: '#boosting', count: '850 Active', badge: 'Popular', color: '#f87171' },
        { name: 'Coach', icon: <Gamepad2 size={24} strokeWidth={1.5} />, href: '#coach', count: '120 Coaches', color: '#a78bfa' },
        { name: 'Accounts', icon: <ShieldCheck size={24} strokeWidth={1.5} />, href: '#accounts', count: '5k+ Accts', color: '#34d399' },
        { name: 'Top Up', icon: <CreditCard size={24} strokeWidth={1.5} />, href: '#topup', count: 'Instant', color: '#22d3ee' },
        { name: 'Gift Cards', icon: <Gift size={24} strokeWidth={1.5} />, href: '#giftcards', count: 'Global', badge: 'New', color: '#f472b6' },
        { name: 'Sell', icon: <ShoppingCart size={24} strokeWidth={1.5} />, href: '#sell', count: 'Start Selling', color: '#1db88e' }
    ];

    return (
        <header className="w-full fixed top-0 z-50 shadow-md">
            {/* Top Bar - Simplified */}
            <div className={cn("w-full border-b backdrop-blur-sm", theme === 'dark' ? 'bg-[#0a0e1a]/95 border-white/5' : 'bg-white/95 border-slate-200')}>
                <div className="w-full px-6 py-1.5 flex justify-between items-center">
                    {/* Left Side - Simple Links */}
                    <div className={cn("flex items-center gap-6 text-sm font-medium", theme === 'dark' ? 'text-slate-400' : 'text-slate-500')}>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Buyers</a>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Sellers</a>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Affiliates</a>
                    </div>

                    {/* Right Side - Simple Options */}
                    {/* Right Side - Advanced Options */}
                    <div className={cn("flex items-center gap-5 text-sm font-medium", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')}>
                        <button className="hover:text-[#1db88e] transition-colors font-bold tracking-wide">USD</button>
                        <button className="flex items-center gap-2 hover:text-[#1db88e] transition-colors group">
                            <span className="font-bold tracking-wide">English</span>
                            <Globe size={18} className={cn("transition-colors group-hover:text-[#1db88e]", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')} />
                        </button>
                        <div className={cn("w-px h-4 mx-1", theme === 'dark' ? 'bg-slate-800' : 'bg-[#546b81]/20')} />
                        <button
                            onClick={toggleTheme}
                            className={cn(
                                "p-1.5 rounded-full transition-all duration-300 active:scale-95",
                                theme === 'dark' ? 'hover:bg-white/10 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-[#546b81] hover:text-[#1db88e]'
                            )}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header - Plati Style */}
            <nav className={cn("w-full py-3.5 backdrop-blur-sm border-b", theme === 'dark' ? 'bg-[#0f1419]/95 border-white/5 shadow-lg' : 'bg-[#0f1419] border-white/5 shadow-lg')}>
                <div className="w-full px-6 flex items-center gap-4">
                    {/* Logo - Improved Design */}
                    <a href="#" className="flex items-center gap-2.5 shrink-0">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="#1db88e" strokeWidth="4" fill="none" />
                                <path d="M50 15 L85 50 L50 85 L15 50 Z" stroke="#1db88e" strokeWidth="2" fill="none" opacity="0.5" />
                                <text x="50" y="65" textAnchor="middle" fill="#1db88e" fontSize="45" fontFamily="'Nunito', sans-serif" fontWeight="900" fontStyle="italic">S</text>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl text-white leading-none italic" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: 900 }}>
                                SHAHBANDAR
                            </span>
                        </div>
                    </a>

                    {/* Catalog Button - Next to Logo */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm hover:shadow-md active:scale-95",
                                isCategoriesOpen
                                    ? "bg-[#1db88e] text-white"
                                    : "bg-[#1db88e] text-white hover:bg-[#1aa87e]"
                            )}
                        >
                            <LayoutGrid size={18} />
                            <span>Catalog</span>
                            <ChevronDown size={16} className={cn("transition-transform", isCategoriesOpen && "rotate-180")} />
                        </button>

                        {/* Dropdown Content - Simplified */}
                        {isCategoriesOpen && (
                            <>
                                <div className="fixed inset-0 z-[-1]" onClick={() => setIsCategoriesOpen(false)} />
                                <div className={cn(
                                    "absolute top-full left-0 mt-2 w-[650px] border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200",
                                    theme === 'dark' ? 'bg-[#0b1120] border-[#1e293b]' : 'bg-white/98 border-slate-100'
                                )}>
                                    {/* Header */}
                                    <div className="px-6 py-4 pb-2">
                                        <h3 className={cn("text-xs font-bold uppercase tracking-wider", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')}>Select Category</h3>
                                    </div>

                                    {/* Grid */}
                                    <div className="p-6 grid grid-cols-5 gap-4">
                                        {categories.map((cat) => (
                                            <a
                                                key={cat.name}
                                                href={cat.href}
                                                className="group flex flex-col items-center gap-2"
                                                onClick={() => setIsCategoriesOpen(false)}
                                            >
                                                <div className="relative w-full aspect-square">
                                                    {cat.badge && (
                                                        <div className={cn(
                                                            "absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded text-[9px] font-bold uppercase shadow-sm z-10 tracking-wide",
                                                            cat.badge === 'Hot' ? "bg-[#ff4757] text-white" :
                                                                cat.badge === 'Popular' ? "bg-[#1db88e] text-white" :
                                                                    "bg-[#2ed573] text-white"
                                                        )}>
                                                            {cat.badge}
                                                        </div>
                                                    )}
                                                    <div className={cn(
                                                        "w-full h-full flex items-center justify-center border rounded-2xl transition-all duration-300 group-hover:-translate-y-1",
                                                        theme === 'dark'
                                                            ? 'bg-[#151b2b] border-[#1e293b] group-hover:border-[var(--active-color)] group-hover:shadow-[0_0_20px_var(--active-shadow)]'
                                                            : 'bg-white border-slate-200 group-hover:border-[var(--active-color)]/30 group-hover:shadow-lg'
                                                    )}
                                                        style={{
                                                            '--active-color': cat.color,
                                                            '--active-shadow': `${cat.color}20`
                                                        }}
                                                    >
                                                        <div className="transition-colors duration-300" style={{ color: cat.color }}>
                                                            {cat.icon}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className={cn(
                                                        "text-sm font-bold transition-colors text-center",
                                                        theme === 'dark' ? 'text-slate-200 group-hover:text-white' : 'text-[#2d3436] group-hover:text-[#1db88e]'
                                                    )}>
                                                        {cat.name}
                                                    </span>
                                                    <span className={cn("text-[11px] font-medium", theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>
                                                        {cat.count}
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Search Bar - Large Center */}
                    <div className="flex-1 relative group">
                        <input
                            type="text"
                            placeholder="Product search"
                            className={cn(
                                "w-full rounded-md py-2.5 pl-4 pr-12 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#1db88e] transition-all shadow-sm h-[42px]",
                                theme === 'dark' ? 'bg-white text-slate-900 placeholder:text-slate-400' : 'bg-white text-slate-900 placeholder:text-slate-400'
                            )}
                        />
                        <button className={cn(
                            "absolute inset-y-1 right-1 px-3 rounded-md transition-all flex items-center justify-center",
                            theme === 'dark' ? 'hover:bg-slate-100 text-slate-400 hover:text-[#1db88e]' : 'hover:bg-slate-100 text-slate-400 hover:text-[#1db88e]'
                        )}>
                            <Search size={20} />
                        </button>
                    </div>


                </div>
            </nav>
        </header>
    );
};

export default Navbar;
