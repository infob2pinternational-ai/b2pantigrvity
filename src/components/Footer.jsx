import React from 'react';
import { Facebook, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 bg-white border-t border-slate-100 mt-auto">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center mb-5">
                            <img
                                src="/B2P_logo_trimmed.png"
                                alt="B2P International - LED Van Advertising and Mobile LED Marketing Agency"
                                className="h-20 md:h-24 w-auto object-contain drop-shadow-sm"
                            />
                        </Link>
                        <p className="text-slate-600 max-w-sm leading-relaxed">
                            Our company specializes in LED Van Advertising, mobile LED marketing, and large LED wall displays designed to help brands capture attention in crowded markets. With advanced LED technology and strategic campaign planning, we deliver advertising solutions that drive real results.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-slate-600 hover:text-brand-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-slate-600 hover:text-brand-primary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-slate-600 hover:text-brand-primary transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="text-slate-600 hover:text-brand-primary transition-colors">Gallery</Link></li>
                            <li><Link to="/blog" className="text-slate-600 hover:text-brand-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 relative inline-block">
                            Follow Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                        </h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/b2pinternational" target="_blank" rel="noreferrer" aria-label="Visit B2P International on Facebook" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Facebook size={18} aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/b2p_international/" target="_blank" rel="noreferrer" aria-label="Visit B2P International on Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-secondary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Instagram size={18} aria-hidden="true" />
                            </a>
                            <a href="https://www.b2pinternational.com" target="_blank" rel="noreferrer" aria-label="Visit the B2P International website" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm border border-slate-100">
                                <Globe size={18} aria-hidden="true" />
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
