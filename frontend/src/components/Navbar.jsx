import React, { useState, useEffect } from 'react';
import {
    Search, LayoutGrid, Sun, Moon, Globe, ChevronDown,
    User, Package, Zap, Trophy, Coins, Box, Flame,
    Gamepad2, ShieldCheck, CreditCard, Gift, ShoppingCart,
    Layers, Menu, X
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('English');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const currencies = [
        { code: 'USD', symbol: '$', name: 'US Dollar' },
        { code: 'RUB', symbol: '₽', name: 'Russian Ruble' },
        { code: 'EUR', symbol: '€', name: 'Euro' },
        { code: 'UAH', symbol: '₴', name: 'Ukrainian Hryvnia' }
    ];

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const categories = [
        { name: 'All', icon: <Layers size={20} strokeWidth={1.5} />, href: '#all', count: 'View All' },
        { name: 'Currency', icon: <Coins size={20} strokeWidth={1.5} />, href: '#currency', count: '2.4k Offers', badge: 'Hot' },
        { name: 'Items', icon: <Box size={20} strokeWidth={1.5} />, href: '#items', count: '15k+ Items' },
        { name: 'Boosting', icon: <Flame size={20} strokeWidth={1.5} />, href: '#boosting', count: '850 Active', badge: 'Popular' },
        { name: 'Coach', icon: <Gamepad2 size={20} strokeWidth={1.5} />, href: '#coach', count: '120 Coaches' },
        { name: 'Accounts', icon: <ShieldCheck size={20} strokeWidth={1.5} />, href: '#accounts', count: '5k+ Accts' },
        { name: 'Top Up', icon: <CreditCard size={20} strokeWidth={1.5} />, href: '#topup', count: 'Instant' },
        { name: 'Gift Cards', icon: <Gift size={20} strokeWidth={1.5} />, href: '#giftcards', count: 'Global', badge: 'New' },
        { name: 'Sell', icon: <ShoppingCart size={20} strokeWidth={1.5} />, href: '#sell', count: 'Start Selling' }
    ];

    return (
        <header className="w-full fixed top-0 z-50 shadow-md">
            {/* Top Bar - Simplified */}
            <div className={cn("w-full border-b backdrop-blur-sm relative z-50 hidden md:block", theme === 'dark' ? 'bg-[#0a0e1a]/95 border-white/5' : 'bg-white/95 border-slate-200')}>
                <div className="w-full px-6 py-1.5 flex justify-between items-center">
                    {/* Left Side - Simple Links */}
                    <div className={cn("flex items-center gap-6 text-sm font-medium", theme === 'dark' ? 'text-slate-400' : 'text-slate-500')}>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Buyers</a>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Sellers</a>
                        <a href="#" className="hover:text-[#1db88e] transition-colors">Affiliates</a>
                    </div>

                    {/* Right Side - Advanced Options */}
                    <div className={cn("flex items-center gap-5 text-sm font-medium", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')}>
                        <div className="relative">
                            <button
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className="flex items-center gap-2 hover:text-[#1db88e] transition-colors group"
                            >
                                <span className="font-bold tracking-wide">{currency}</span>
                                <span className={cn("w-1 h-1 rounded-full", theme === 'dark' ? 'bg-slate-600' : 'bg-slate-300')} />
                                <span className="font-bold tracking-wide">{language}</span>
                                <Globe size={18} className={cn("transition-colors group-hover:text-[#1db88e]", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')} />
                            </button>

                            {/* Settings Dropdown */}
                            {isSettingsOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setIsSettingsOpen(false)} />
                                    <div className={cn(
                                        "absolute top-full right-0 mt-2 w-[320px] border rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 z-50",
                                        theme === 'dark' ? 'bg-[#0b1120] border-[#1e293b]' : 'bg-white/98 border-slate-100'
                                    )}>
                                        <div className="flex">
                                            {/* Currency Column */}
                                            <div className="flex-1 p-2">
                                                <div className="px-3 py-2 mb-1">
                                                    <span className={cn("text-xs font-bold uppercase tracking-wider", theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>Currency</span>
                                                </div>
                                                <div className="space-y-1">
                                                    {currencies.map((curr) => (
                                                        <button
                                                            key={curr.code}
                                                            onClick={() => {
                                                                setCurrency(curr.code);
                                                            }}
                                                            className={cn(
                                                                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                                                currency === curr.code
                                                                    ? (theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900')
                                                                    : (theme === 'dark' ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700')
                                                            )}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className={cn(
                                                                    "w-6 h-6 flex items-center justify-center rounded bg-slate-100 text-slate-600 text-xs",
                                                                    theme === 'dark' && "bg-slate-700 text-slate-300"
                                                                )}>{curr.symbol}</span>
                                                                <span>{curr.code}</span>
                                                            </div>
                                                            {currency === curr.code && (
                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1db88e]" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className={cn("w-px my-2", theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100')} />

                                            {/* Language Column */}
                                            <div className="flex-1 p-2">
                                                <div className="px-3 py-2 mb-1">
                                                    <span className={cn("text-xs font-bold uppercase tracking-wider", theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>Language</span>
                                                </div>
                                                <div className="space-y-1">
                                                    {languages.map((lang) => (
                                                        <button
                                                            key={lang.code}
                                                            onClick={() => setLanguage(lang.name)}
                                                            className={cn(
                                                                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold transition-all",
                                                                language === lang.name
                                                                    ? (theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900')
                                                                    : (theme === 'dark' ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700')
                                                            )}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-lg leading-none">{lang.flag}</span>
                                                                <span>{lang.name}</span>
                                                            </div>
                                                            {language === lang.name && (
                                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1db88e]" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

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
            <nav className={cn("w-full py-3.5 backdrop-blur-sm border-b relative z-40", theme === 'dark' ? 'bg-[#0f1419]/95 border-white/5 shadow-lg' : 'bg-[#0f1419] border-white/5 shadow-lg')}>
                <div className="w-full px-4 md:px-6 flex flex-wrap md:flex-nowrap items-center gap-4">
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 -ml-2 text-slate-400 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Logo - Improved Design */}
                    <a href="#" className="flex items-center gap-2.5 shrink-0 mr-auto md:mr-0">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="#1db88e" strokeWidth="4" fill="none" />
                                <path d="M50 15 L85 50 L50 85 L15 50 Z" stroke="#1db88e" strokeWidth="2" fill="none" opacity="0.5" />
                                <text x="50" y="65" textAnchor="middle" fill="#1db88e" fontSize="45" fontFamily="'Nunito', sans-serif" fontWeight="900" fontStyle="italic">S</text>
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl text-white leading-none italic" style={{ fontFamily: '"Nunito", sans-serif', fontWeight: 900 }}>
                                SHAHBANDAR
                            </span>
                        </div>
                    </a>

                    {/* Catalog Button - Next to Logo (Hidden on small mobile if needed, or kept) */}
                    <div className="relative hidden md:block">
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
                            <ChevronDown size={16} className={cn("transition-transform duration-200", isCategoriesOpen && "rotate-180")} />
                        </button>

                        {/* Dropdown Content - Simplified & Premium */}
                        {isCategoriesOpen && (
                            <>
                                <div className="fixed inset-0 z-[-1]" onClick={() => setIsCategoriesOpen(false)} />
                                <div className={cn(
                                    "absolute top-full left-0 mt-2 w-[500px] border rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-200",
                                    theme === 'dark' ? 'bg-[#0b1120] border-[#1e293b]' : 'bg-white/98 border-slate-100'
                                )}>
                                    {/* Header */}
                                    <div className="px-5 py-3 pb-2 border-b border-dashed border-slate-200/10">
                                        <h3 className={cn("text-[10px] font-bold uppercase tracking-wider", theme === 'dark' ? 'text-slate-400' : 'text-[#546b81]')}>Select Category</h3>
                                    </div>

                                    {/* Grid */}
                                    <div className="p-4 grid grid-cols-5 gap-2">
                                        {categories.map((cat) => (
                                            <a
                                                key={cat.name}
                                                href={cat.href}
                                                className="group flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-200"
                                                onClick={() => setIsCategoriesOpen(false)}
                                            >
                                                <div className="relative w-full aspect-square">
                                                    {cat.badge && (
                                                        <div className={cn(
                                                            "absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wide z-10",
                                                            theme === 'dark'
                                                                ? "bg-slate-700 text-slate-200"
                                                                : "bg-slate-200 text-slate-600"
                                                        )}>
                                                            {cat.badge}
                                                        </div>
                                                    )}
                                                    <div className={cn(
                                                        "w-full h-full flex items-center justify-center rounded-xl transition-colors duration-200",
                                                        theme === 'dark'
                                                            ? 'bg-slate-800/30 text-slate-400 group-hover:bg-slate-800 group-hover:text-slate-200'
                                                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'
                                                    )}>
                                                        {cat.icon}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center gap-0.5">
                                                    <span className={cn(
                                                        "text-xs font-bold text-center transition-colors duration-200",
                                                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                                    )}>
                                                        {cat.name}
                                                    </span>
                                                    <span className={cn("text-[9px] font-medium opacity-60", theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>
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
                    <div className="w-full md:flex-1 relative group order-last md:order-none mt-2 md:mt-0">
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

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className={cn(
                        "md:hidden absolute top-full left-0 w-full border-t shadow-xl animate-in slide-in-from-top-5 duration-200",
                        theme === 'dark' ? 'bg-[#0f1419] border-white/5' : 'bg-white border-slate-200'
                    )}>
                        <div className="p-4 flex flex-col gap-4">
                            {/* Mobile Links */}
                            <div className="flex flex-col gap-2">
                                <a href="#" className={cn("py-2 text-sm font-bold", theme === 'dark' ? 'text-slate-300' : 'text-slate-700')}>Buyers</a>
                                <a href="#" className={cn("py-2 text-sm font-bold", theme === 'dark' ? 'text-slate-300' : 'text-slate-700')}>Sellers</a>
                                <a href="#" className={cn("py-2 text-sm font-bold", theme === 'dark' ? 'text-slate-300' : 'text-slate-700')}>Affiliates</a>
                            </div>

                            <div className={cn("h-px w-full", theme === 'dark' ? 'bg-white/10' : 'bg-slate-200')} />

                            {/* Mobile Settings */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={toggleTheme}
                                        className={cn("p-2 rounded-full", theme === 'dark' ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700')}
                                    >
                                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <select
                                            value={currency}
                                            onChange={(e) => setCurrency(e.target.value)}
                                            className={cn("bg-transparent text-sm font-bold focus:outline-none", theme === 'dark' ? 'text-white' : 'text-slate-900')}
                                        >
                                            {currencies.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                                        </select>
                                        <select
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                            className={cn("bg-transparent text-sm font-bold focus:outline-none", theme === 'dark' ? 'text-white' : 'text-slate-900')}
                                        >
                                            {languages.map(l => <option key={l.code} value={l.name}>{l.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Catalog Grid */}
                            <div className="pt-2">
                                <h3 className={cn("text-xs font-bold uppercase tracking-wider mb-3", theme === 'dark' ? 'text-slate-500' : 'text-slate-400')}>Categories</h3>
                                <div className="grid grid-cols-4 gap-2">
                                    {categories.map((cat) => (
                                        <a key={cat.name} href={cat.href} className="flex flex-col items-center gap-1">
                                            <div className={cn(
                                                "w-10 h-10 flex items-center justify-center rounded-lg",
                                                theme === 'dark' ? 'bg-slate-800/50 text-slate-400' : 'bg-slate-100 text-slate-600'
                                            )}>
                                                {React.cloneElement(cat.icon, { size: 16 })}
                                            </div>
                                            <span className={cn("text-[10px] font-medium", theme === 'dark' ? 'text-slate-400' : 'text-slate-600')}>{cat.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
