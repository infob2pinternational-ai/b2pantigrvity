import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, Monitor, Calendar, Briefcase, Award, MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';
import Seo from './Seo';
import { buildWebPageSchema } from '../lib/seo';

import servicesHero from '../assets/images/services-hero.png';
import van1 from '../assets/images/van1.jpg';
import van2 from '../assets/images/van2.jpg';

const CompanyProfile = () => {
    useEffect(() => {
        // Optional: Add specific print body class if needed, though standard CSS handles it.
        // We ensure the background prints correctly if browsers allow it.
        const style = document.createElement('style');
        style.innerHTML = `
            @media print {
                body {
                    -webkit-print-color-adjust: exact !important;
                    print-color-adjust: exact !important;
                    background-color: white !important;
                }
                nav, footer, .float-buttons, .no-print {
                    display: none !important;
                }
                .print-break-inside-avoid {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }
                .print-page-break {
                    page-break-before: always;
                    break-before: page;
                }
                * {
                    color: black !important;
                    text-shadow: none !important;
                    box-shadow: none !important;
                }
                .text-brand-primary, .text-brand-secondary {
                    color: #e11d48 !important; /* Force a solid red for brand colors in print */
                }
                .bg-brand-primary {
                    background-color: #e11d48 !important;
                }
                .bg-slate-900, .bg-[#0B0F19] {
                    background-color: transparent !important;
                }
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const features = [
        "Strategic Route Planning",
        "High-Definition Technology",
        "Comprehensive Execution",
        "Audio-Visual Impact",
        "Measurable Reach"
    ];

    const services = [
        {
            title: "Mobile LED Advertising",
            icon: <Truck size={32} className="text-brand-primary" />,
            desc: "Dynamic moving billboards ensuring high visibility in high-footfall areas.",
            image: van1
        },
        {
            title: "LED Wall Displays",
            icon: <Monitor size={32} className="text-brand-secondary" />,
            desc: "High-resolution screens perfect for corporate events and launches.",
            image: van2
        },
        {
            title: "Event & Promo Marketing",
            icon: <Calendar size={32} className="text-brand-primary" />,
            desc: "Visually stunning setups during major local events and roadshows."
        },
        {
            title: "Corporate Branding",
            icon: <Briefcase size={32} className="text-brand-secondary" />,
            desc: "Strategic brand development and reputation management."
        }
    ];

    return (
        <div className="bg-[#0B0F19] min-h-screen text-slate-300 print:bg-white print:text-black">
            <Seo
                title="Company Profile - Digital Brochure | B2P International"
                description="View our comprehensive company profile. Discover how B2P International drives brand success across Kerala with advanced LED van advertising and marketing solutions."
                path="/company-profile"
                schema={[
                    buildWebPageSchema({
                        name: "B2P International Company Profile",
                        description: "Complete overview of B2P International's advertising services, geographic reach, and core philosophy.",
                        path: "/company-profile"
                    })
                ]}
            />

            {/* Print Header (Only visible when printing) */}
            <div className="hidden print:block text-center py-8 border-b-4 border-brand-primary mb-8">
                <img src="/B2P_logo_trimmed.png" alt="B2P Logo" className="h-24 mx-auto mb-4" />
                <h1 className="text-4xl font-black text-black uppercase tracking-widest">Company Profile</h1>
                <p className="text-lg text-slate-600 mt-2">Pioneering Mobile LED Advertising in Kerala</p>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden no-print">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-[#0B0F19] to-[#0B0F19] -z-10"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/B2P_logo_trimmed.png" alt="B2P Logo" className="h-28 mx-auto mb-8 drop-shadow-2xl" />
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Company Profile</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                            Kerala’s premier advertising and marketing agency, specializing in high-impact LED Van Advertising, Mobile LED Marketing, and Large LED Wall Displays.
                        </p>
                        <button 
                            onClick={() => window.print()}
                            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] transform hover:-translate-y-1"
                        >
                            Download PDF Brochure
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Executive Summary & Who We Are */}
            <section className="py-20 bg-slate-900/50 print:py-8 print:bg-white print-break-inside-avoid">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6 print:hidden">
                                <Award size={18} className="text-brand-primary" />
                                <span className="text-sm font-bold text-brand-primary uppercase tracking-widest">Who We Are</span>
                            </div>
                            <h2 className="text-4xl font-black text-white mb-8 print:text-black">Breaking Through The Noise</h2>
                            <p className="text-lg text-slate-400 mb-6 leading-relaxed print:text-black">
                                Founded in 2012 and headquartered in Thrissur, B2P International helps brands capture attention in crowded markets. We believe that static advertising is no longer enough to engage modern consumers. 
                            </p>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed print:text-black">
                                We are pioneers in mobile and dynamic outdoor advertising, transforming the way brands connect with their audiences by combining state-of-the-art visual technology with hyper-targeted geographical routing.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border-l-2 border-brand-primary pl-4">
                                    <p className="text-3xl font-black text-white print:text-brand-primary">2012</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-widest mt-1 print:text-black">Established</p>
                                </div>
                                <div className="border-l-2 border-brand-secondary pl-4">
                                    <p className="text-3xl font-black text-white print:text-brand-primary">100%</p>
                                    <p className="text-sm text-slate-500 uppercase tracking-widest mt-1 print:text-black">Kerala Coverage</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative no-print"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl transform rotate-3 opacity-30 blur-xl"></div>
                            <img src={servicesHero} alt="B2P Services" className="relative z-10 rounded-3xl w-full object-cover shadow-2xl border border-white/10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 print:py-8 print-page-break">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 print:text-black">Our Core Services</h2>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto print:text-black">A comprehensive suite of advertising and branding solutions tailored to elevate brand presence across all channels.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#131B2C] border border-white/5 p-8 rounded-3xl hover:border-brand-primary/50 transition-all duration-300 print:border-gray-300 print:bg-white print-break-inside-avoid"
                            >
                                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 print:bg-gray-100">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 print:text-black">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-6 print:text-black">{service.desc}</p>
                                {service.image && (
                                    <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-xl mt-auto no-print" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Geographic Reach & Why Choose Us */}
            <section className="py-24 bg-slate-900/50 print:py-8 print-page-break">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Reach */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-black text-white mb-8 print:text-black">Our Geographic Reach</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed print:text-black">
                                Headquartered in Thrissur, our fleet and operations span the entirety of Kerala. We specialize in planning hyper-local campaigns that resonate with distinct regional demographics.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { city: "Thrissur", desc: "Our home base, ideal for festival campaigns and central Kerala outreach." },
                                    { city: "Kochi", desc: "Dominating the commercial capital with routes covering MG Road, Edappally, and Infopark." },
                                    { city: "Kozhikode", desc: "Targeting the vibrant Malabar region, focusing on SM Street and local trade hubs." },
                                    { city: "Trivandrum", desc: "Premium exposure in the state capital, catering to IT corridors and government districts." }
                                ].map((loc, idx) => (
                                    <li key={idx} className="flex gap-4 items-start print-break-inside-avoid">
                                        <div className="mt-1 bg-brand-primary/20 p-2 rounded-full text-brand-primary print:bg-transparent print:p-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white print:text-black">{loc.city}</h4>
                                            <p className="text-slate-400 mt-1 print:text-black">{loc.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Why Choose Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 border border-brand-primary/30 p-10 rounded-3xl print:border-gray-300 print:bg-gray-50"
                        >
                            <h2 className="text-3xl font-black text-white mb-8 print:text-brand-primary">The B2P Advantage</h2>
                            <p className="text-lg text-slate-300 italic mb-8 print:text-black">"We don't just rent out screens; we architect end-to-end campaigns."</p>
                            
                            <div className="space-y-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-primary shrink-0" />
                                        <span className="text-lg text-white font-medium print:text-black">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10 print:border-gray-300 print:bg-white">
                                <h4 className="text-xl font-bold text-white mb-4 print:text-black">Target Audience</h4>
                                <p className="text-slate-400 print:text-black">Retail & Hypermarkets • Real Estate & Builders • Jewelry & Fashion Brands • Corporate & Educational Institutions • Political & Mass Communication Campaigns</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Footer */}
            <section className="py-20 border-t border-white/10 print:py-8 print-page-break">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl font-black text-white mb-10 print:text-black">Ready to put your brand in motion?</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#131B2C] p-8 rounded-2xl border border-white/5 print:border-gray-300 print:bg-white">
                            <Phone className="mx-auto mb-4 text-brand-primary" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2 print:text-black">Call Us</h4>
                            <p className="text-slate-400 print:text-black">+91 89899 09034</p>
                        </div>
                        <div className="bg-[#131B2C] p-8 rounded-2xl border border-white/5 print:border-gray-300 print:bg-white">
                            <Mail className="mx-auto mb-4 text-brand-secondary" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2 print:text-black">Email Us</h4>
                            <p className="text-slate-400 print:text-black">info@b2pinternational.com</p>
                        </div>
                        <div className="bg-[#131B2C] p-8 rounded-2xl border border-white/5 print:border-gray-300 print:bg-white">
                            <Globe className="mx-auto mb-4 text-brand-primary" size={32} />
                            <h4 className="text-lg font-bold text-white mb-2 print:text-black">Website</h4>
                            <p className="text-slate-400 print:text-black">www.b2pinternational.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CompanyProfile;
