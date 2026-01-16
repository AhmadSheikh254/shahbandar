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
        { name: 'All', icon: <Layers size={20} />, href: '#all', count: 'View All' },
        { name: 'Currency', icon: <Coins size={20} />, href: '#currency', count: '2.4k Offers', badge: 'Hot' },
        { name: 'Items', icon: <Box size={20} />, href: '#items', count: '15k+ Items' },
        { name: 'Boosting', icon: <Flame size={20} />, href: '#boosting', count: '850 Active', badge: 'Popular' },
        { name: 'Coach', icon: <Gamepad2 size={20} />, href: '#coach', count: '120 Coaches' },
        { name: 'Accounts', icon: <ShieldCheck size={20} />, href: '#accounts', count: '5k+ Accts' },
        { name: 'Top Up', icon: <CreditCard size={20} />, href: '#topup', count: 'Instant' },
        { name: 'Gift Cards', icon: <Gift size={20} />, href: '#giftcards', count: 'Global', badge: 'New' },
        { name: 'Sell', icon: <ShoppingCart size={20} />, href: '#sell', count: 'Start Selling' }
    ];

    return (
        <header className="w-full fixed top-0 z-50">
            {/* Top Bar - Clean & Professional */}
            <div className="w-full bg-white border-b border-slate-200 py-2">
                <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
                    {/* Left Side - Quick Links */}
                    <div className="flex items-center gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-primary transition-colors">Buyers</a>
                        <a href="#" className="hover:text-primary transition-colors">Sellers</a>
                        <a href="#" className="hover:text-primary transition-colors">Partners</a>
                    </div>

                    {/* Right Side - Preferences & Theme */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
                            <button className="hover:text-primary transition-colors">USD</button>
                            <span className="text-slate-300">•</span>
                            <button className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                <span>English</span>
                                <Globe size={14} className="opacity-60" />
                            </button>
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-all"
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Header - Logo on Far Left */}
            <nav className={cn(
                "w-full transition-all duration-300 bg-[#0b111b] py-3.5",
                scrolled && "shadow-md border-b border-white/5"
            )}>
                <div className="w-full px-8 flex items-center gap-10">
                    {/* Logo - Moved to Far Left of the space */}
                    <a href="#" className="flex items-center gap-4 shrink-0">
                        <div className="w-11 h-11 bg-[#1a1f26] border border-white/10 rounded-xl flex items-center justify-center shadow-md">
                            <img src="/logo.png" alt="Logo" className="w-7 h-7 object-contain" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-black tracking-[0.2em] text-white uppercase leading-none">
                                SHAHBANDAR
                            </span>
                            <span className="text-[9px] font-bold text-primary tracking-[0.5em] uppercase mt-1.5 opacity-90">
                                Marketplace
                            </span>
                        </div>
                    </a>

                    {/* Search Bar - Flexible Space */}
                    <div className="flex-1 relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search size={18} className="text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for products, accounts, or services..."
                            className="w-full bg-white border-none rounded-xl py-3 pl-12 pr-24 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                        />
                        <div className="absolute inset-y-1.5 right-1.5 flex items-center">
                            <button className="h-full px-5 bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Catalog Button - Clean & Solid */}
                    <div className="relative">
                        <button
                            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                            className={cn(
                                "flex items-center gap-3 px-6 py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all shrink-0",
                                isCategoriesOpen
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-[#1a1f26] border border-white/5 text-white/90 hover:bg-[#242933] hover:text-white"
                            )}
                        >
                            <LayoutGrid size={18} />
                            <span className="hidden lg:block">Catalog</span>
                            <ChevronDown size={16} className={cn("transition-transform duration-300", isCategoriesOpen && "rotate-180")} />
                        </button>

                        {/* Dropdown Content - High-End Professional Grid */}
                        {isCategoriesOpen && (
                            <>
                                <div className="fixed inset-0 z-[-1]" onClick={() => setIsCategoriesOpen(false)} />
                                <div className="absolute top-full right-0 mt-4 w-[680px] bg-[#0b111b] border border-white/10 rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in-up">
                                    {/* Header Section */}
                                    <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-[#0d141f]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                                            <h3 className="text-[11px] font-black text-white/90 uppercase tracking-[0.2em]">Select Category</h3>
                                        </div>
                                        <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                                            <span>Filter by:</span>
                                            <span className="text-white">All Services</span>
                                        </div>
                                    </div>

                                    {/* Grid Section */}
                                    <div className="p-8 grid grid-cols-5 gap-y-8 gap-x-4 bg-[#0b111b]">
                                        {categories.map((cat, index) => (
                                            <a
                                                key={cat.name}
                                                href={cat.href}
                                                className="group flex flex-col items-center gap-3 transition-all duration-300 relative"
                                                onClick={() => setIsCategoriesOpen(false)}
                                            >
                                                <div className="relative w-full aspect-square flex items-center justify-center">
                                                    {/* Badge */}
                                                    {cat.badge && (
                                                        <div className={cn(
                                                            "absolute -top-2 -right-2 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider z-20 border border-[#0b111b]",
                                                            cat.badge === 'Hot' ? "bg-rose-500 text-white" :
                                                                cat.badge === 'New' ? "bg-emerald-500 text-white" :
                                                                    "bg-primary text-white"
                                                        )}>
                                                            {cat.badge}
                                                        </div>
                                                    )}

                                                    {/* Icon Box */}
                                                    <div className="w-full h-full flex items-center justify-center bg-[#161b22] border border-white/5 border-t-white/10 rounded-2xl group-hover:bg-[#1c232d] group-hover:border-primary/50 transition-all duration-300 shadow-lg group-hover:shadow-primary/10 relative overflow-hidden">
                                                        <div className="text-slate-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                                                            {cat.icon}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-center gap-0.5">
                                                    <span className="text-[10px] font-black text-slate-300 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-[0.1em]">
                                                        {cat.name}
                                                    </span>
                                                    <span className="text-[9px] font-bold text-slate-600 group-hover:text-primary/80 transition-colors duration-300">
                                                        {cat.count}
                                                    </span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Footer Section */}
                                    <div className="px-8 py-4 bg-[#0d141f] border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                                            Need help? <a href="#" className="text-primary hover:underline">Contact Support</a>
                                        </span>
                                        <button className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em] flex items-center gap-2 group">
                                            <span>Full Catalog</span>
                                            <div className="w-4 h-px bg-slate-700 group-hover:bg-white transition-all" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
