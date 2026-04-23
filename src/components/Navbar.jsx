import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/'
                    ? 'py-3 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm'
                    : 'py-4 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                    <Link to="/" className="flex items-center shrink-0">
                        <img
                            src="/B2P_logo_trimmed.png"
                            alt="B2P International"
                            className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        <Link to="/" className={`font-medium transition-colors ${location.pathname === '/' ? 'text-brand-primary' : 'text-slate-900 hover:text-brand-primary'}`}>Home</Link>
                        <Link to="/about" className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-900'}`}>About Us</Link>
                        <Link to="/services" className={`font-medium transition-colors ${location.pathname === '/services' ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-900'}`}>Services</Link>
                        <Link to="/led-van-advertising" className={`font-medium transition-colors ${location.pathname === '/led-van-advertising' ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-900'}`}>LED Vans</Link>
                        <Link to="/gallery" className={`font-medium transition-colors ${location.pathname === '/gallery' ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-900'}`}>Gallery</Link>
                        <Link to="/blog" className={`font-medium transition-colors ${location.pathname === '/blog' ? 'text-brand-primary' : 'text-slate-600 hover:text-slate-900'}`}>Blog</Link>
                        <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:-translate-y-0.5 shadow-lg shadow-brand-primary/30 transition-all">Contact Us</a>
                    </div>

                    <button
                        className="md:hidden flex flex-col gap-1.5 z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        type="button"
                        aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation-menu"
                    >
                        <span className={`w-6 h-0.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2 !bg-slate-900' : ''}`}></span>
                        <span className={`w-6 h-0.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 transition-all ${scrolled || location.pathname !== '/' ? 'bg-slate-900' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2 !bg-slate-900' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                id="mobile-navigation-menu"
                className={`fixed inset-0 bg-slate-50 z-40 flex flex-col justify-center items-center gap-6 px-6 text-center transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <Link to="/" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/' ? 'text-brand-primary' : 'text-slate-900'}`}>Home</Link>
                <Link to="/about" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/about' ? 'text-brand-primary' : 'text-slate-900'}`}>About Us</Link>
                <Link to="/services" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/services' ? 'text-brand-primary' : 'text-slate-900'}`}>Services</Link>
                <Link to="/led-van-advertising" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/led-van-advertising' ? 'text-brand-primary' : 'text-slate-900'}`}>LED Vans</Link>
                <Link to="/gallery" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/gallery' ? 'text-brand-primary' : 'text-slate-900'}`}>Gallery</Link>
                <Link to="/blog" className={`text-2xl sm:text-3xl font-bold ${location.pathname === '/blog' ? 'text-brand-primary' : 'text-slate-900'}`}>Blog</Link>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl sm:text-3xl font-bold text-brand-primary">Contact Us</a>
            </div>
        </>
    );
};

export default Navbar;
