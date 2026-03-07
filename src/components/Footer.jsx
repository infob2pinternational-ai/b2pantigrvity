import React from 'react';
import { Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <a href="#" className="text-2xl font-black text-slate-900 tracking-wide block mb-6">
                            B2P <span className="text-brand-primary font-normal text-xl">INTERNATIONAL</span>
                        </a>
                        <p className="text-slate-600 max-w-sm leading-relaxed">
                            Elevating brands through strategic marketing, dynamic events, and innovative digital solutions globally.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-slate-600 hover:text-brand-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="text-slate-600 hover:text-brand-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-slate-600 hover:text-brand-primary transition-colors">Services</a></li>
                            <li><a href="#gallery" className="text-slate-600 hover:text-brand-primary transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
                            Follow Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                        </h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/b2pinternational" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/b2p_international/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-secondary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.b2pinternational.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Globe size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="text-center pt-8 border-t border-slate-100">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} B2P International. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
