import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                        ? 'py-4 bg-white/80 backdrop-blur-md border-b border-black/5 shadow-sm'
                        : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
                    <a href="#" className="text-2xl font-black text-slate-900 tracking-wide">
                        B2P <span className="text-brand-primary font-normal text-xl">INTERNATIONAL</span>
                    </a>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#home" className="text-slate-900 font-medium hover:text-brand-primary transition-colors">Home</a>
                        <a href="#about" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">About Us</a>
                        <a href="#services" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Services</a>
                        <a href="#gallery" className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Gallery</a>
                        <a href="#contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:-translate-y-0.5 shadow-lg shadow-brand-primary/30 transition-all">Contact Us</a>
                    </div>

                    <button
                        className="md:hidden flex flex-col gap-1.5 z-50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-slate-900 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-slate-50 z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900">About Us</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900">Services</a>
                <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900">Gallery</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold text-brand-primary">Contact Us</a>
            </div>
        </>
    );
};

export default Navbar;
