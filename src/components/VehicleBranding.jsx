import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, Car, ShieldCheck, Palette, TrendingUp } from 'lucide-react';
import LocalSEO from './LocalSEO';
import TrustBar from './TrustBar';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildWebPageSchema, buildFaqSchema, buildServiceSchema, localBusinessSchema } from '../lib/seo';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
                <span className="font-bold text-slate-900">{question}</span>
                <ChevronDown className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div
                    className="px-6 pb-4 text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </div>
    );
};

const TITLE = 'Vehicle Branding Kerala | Car & Fleet Wrap Advertising | B2P International';
const DESCRIPTION = 'B2P International offers vehicle branding and wrap advertising for cars, autos, taxis, and commercial fleets across Kerala. Turn your vehicles into moving billboards with professional vinyl wraps. Call now for a quote.';

const VehicleBranding = () => {

    const features = [
        {
            title: 'Full & Partial Vehicle Wraps',
            desc: 'We offer both full-body vehicle wraps and partial branding solutions for cars, vans, autos, and commercial fleets. Whether you want complete brand coverage or a targeted door/bonnet design, our team delivers a precise, professional finish.',
            icon: <Car size={32} className="text-brand-primary" />,
        },
        {
            title: 'Durable Weatherproof Vinyl',
            desc: 'We use premium-grade vinyl that withstands Kerala\'s heat, humidity, and monsoon rains without fading, peeling, or cracking. Your branding stays sharp and vibrant for years while protecting your vehicle\'s original paint underneath.',
            icon: <ShieldCheck size={32} className="text-brand-secondary" />,
        },
        {
            title: 'Custom Design & Print',
            desc: 'Our in-house design team creates eye-catching vehicle graphics tailored to your brand identity. From logo placement to full creative wraps, we handle design, high-resolution printing, and precision application.',
            icon: <Palette size={32} className="text-brand-primary" />,
        },
        {
            title: 'Maximum Daily Impressions',
            desc: 'A branded vehicle driving through Kerala\'s cities and highways generates thousands of impressions every single day — far more cost-effective per impression than static billboards. Your brand travels wherever the vehicle goes.',
            icon: <TrendingUp size={32} className="text-brand-secondary" />,
        },
    ];

    const useCases = [
        {
            title: 'Corporate Fleet Branding',
            desc: 'Brand your entire delivery fleet, company cars, or service vehicles with consistent corporate identity. Ideal for logistics companies, FMCG distributors, and service businesses operating across Kerala with multiple vehicles on the road daily.',
        },
        {
            title: 'Taxi & Auto-Rickshaw Advertising',
            desc: 'Reach commuters and pedestrians through branded taxis and auto-rickshaws across Thrissur, Kochi, and other Kerala cities. A high-frequency, low-cost way to build local brand recall in dense urban traffic.',
        },
        {
            title: 'Promotional Campaign Vehicles',
            desc: 'Wrap a dedicated vehicle for a short-term product launch, election campaign, or event promotion. Combine with our LED van and lookwalker services for a complete on-ground advertising package across Kerala.',
        },
        {
            title: 'Personal & Business Car Branding',
            desc: 'Small business owners, real estate agents, and professionals use branded personal vehicles to build local visibility wherever they drive — at client meetings, parking lots, and daily commutes across the district.',
        },
    ];

    const faqItems = [
        {
            question: 'What is vehicle branding?',
            answer: 'Vehicle branding (also called vehicle wrap advertising) is the process of applying vinyl graphics, logos, and promotional designs onto cars, vans, autos, or commercial fleet vehicles. It turns your vehicle into a moving advertisement that generates brand visibility wherever it travels.',
        },
        {
            question: 'How long does a vehicle wrap last?',
            answer: 'A professionally installed vehicle wrap using premium vinyl typically lasts 3 to 5 years with proper care, even in Kerala\'s hot and humid climate. The vinyl is weatherproof and UV-resistant to prevent fading.',
        },
        {
            question: 'Does vehicle branding damage the original paint?',
            answer: 'No. Vehicle wrap vinyl is designed to protect the original paint underneath. When removed by a professional, the paint surface remains in good condition, often better protected from UV exposure and minor scratches than an unwrapped vehicle.',
        },
        {
            question: 'Can you brand a single vehicle or only fleets?',
            answer: 'We handle both. Whether you need a single car branded for a personal business or an entire fleet of 20+ delivery vehicles, B2P International can design and execute the project at scale across Kerala.',
        },
        {
            question: 'What is the cost of vehicle branding in Kerala?',
            answer: 'Cost depends on vehicle size, wrap coverage (full vs partial), and design complexity. Contact B2P International at +91 85899 09034 for a customised quote based on your vehicle type and branding requirements.',
        },
    ];

    const districts = [
        'Thrissur', 'Ernakulam', 'Kozhikode', 'Malappuram',
        'Palakkad', 'Kannur', 'Kottayam', 'Alappuzha',
        'Thiruvananthapuram', 'Kollam', 'Pathanamthitta',
        'Idukki', 'Wayanad', 'Kasaragod',
    ];

    return (
        <>
            <Seo
                title={TITLE}
                description={DESCRIPTION}
                keywords="vehicle branding Kerala, car wrap advertising Kerala, fleet branding Thrissur, vehicle wrap Kerala, auto rickshaw advertising Kerala, taxi branding Kerala, van branding Kerala"
                path="/vehicle-branding"
                schema={[
                    localBusinessSchema,
                    buildWebPageSchema({
                        name: TITLE,
                        description: DESCRIPTION,
                        path: '/vehicle-branding',
                        type: 'WebPage',
                    }),
                    buildServiceSchema({
                        name: 'Vehicle Branding Kerala',
                        description: 'Vehicle branding and wrap advertising for cars, autos, taxis, and commercial fleets across all 14 districts of Kerala.',
                        path: '/vehicle-branding',
                        serviceType: 'Vehicle Branding',
                        areaServed: ['Thrissur', 'Kochi', 'Kozhikode', 'Malappuram', 'Kerala'],
                    }),
                    buildFaqSchema(faqItems),
                    buildBreadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Vehicle Branding', path: '/vehicle-branding' },
                    ]),
                ]}
            />

            <div className="bg-slate-50 min-h-screen">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--brand-primary-rgb),0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_40%)]" />

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8"
                        >
                            <Sparkles size={16} className="text-brand-secondary" />
                            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Vehicle Branding Kerala</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                        >
                            Turn Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Vehicle</span> Into a Moving Billboard
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                        >
                            B2P International provides professional vehicle branding and wrap advertising for cars, autos, taxis, and commercial fleets across all 14 districts of Kerala. High-quality vinyl, custom design, and expert installation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300"
                            >
                                Get a Free Quote
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                            >
                                View Our Services
                            </a>
                        </motion.div>
                    </div>
                </section>

                <TrustBar />

                {/* Why Vehicle Branding Works */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why Vehicle Branding Works in Kerala</h2>
                                <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
                                    <p>
                                        Kerala's dense urban traffic and high vehicle density make vehicle branding one of the most cost-effective advertising formats available. A single branded vehicle generates thousands of impressions daily as it moves through busy roads, parking areas, and traffic signals across Thrissur, Kochi, Kozhikode, and beyond.
                                    </p>
                                    <p>
                                        Unlike static billboards that reach the same fixed location repeatedly, a branded vehicle reaches new audiences every single trip — covering markets, residential areas, highways, and commercial districts all in one campaign.
                                    </p>
                                    <p>
                                        B2P International combines vehicle branding with our other outdoor advertising services — LED van advertising, lookwalkers, and LED wall rentals — to create complete, multi-format campaigns for brands across Kerala.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Feature Cards */}
                <section className="py-24 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What We Offer</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group shadow-sm"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200"
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">How It Works</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        { step: '01', text: 'Share your vehicle type, quantity, and branding goals' },
                                        { step: '02', text: 'Our design team creates a custom wrap design for approval' },
                                        { step: '03', text: 'High-resolution vinyl is printed using premium materials' },
                                        { step: '04', text: 'Professional installation by our trained application team' },
                                        { step: '05', text: 'Quality check and final inspection before handover' },
                                        { step: '06', text: 'Your branded vehicle is ready to hit the road' },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-sm font-black text-brand-primary">{item.step}</span>
                                            </div>
                                            <span className="text-slate-700 leading-relaxed pt-1.5">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
                            >
                                Who Uses Our Vehicle Branding Service
                            </motion.h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                From single cars to full commercial fleets — vehicle branding works for every type of business in Kerala.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {useCases.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coverage Area */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Coverage Across All 14 Kerala Districts</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                    Our vehicle branding service is available across every district in Kerala. Whether it's a single vehicle or a state-wide fleet, we have the design and installation capability to deliver.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {districts.map((district, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.04 }}
                                            className="bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-slate-700 font-medium text-sm hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all duration-200"
                                        >
                                            {district}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqItems.map((item, idx) => (
                                <FaqItem key={idx} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-[#050914] text-center">
                    <div className="container mx-auto px-6 max-w-3xl relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Brand Your Vehicle?</h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            Contact B2P International today for vehicle branding and wrap advertising across Kerala. WhatsApp us for instant pricing or call our Thrissur office to discuss your fleet requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="https://wa.me/918589909034"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300"
                            >
                                WhatsApp Us Now
                            </a>
                            <a
                                href="tel:+918589909034"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </section>

                <LocalSEO />
            </div>
        </>
    );
};

export default VehicleBranding;
