import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, MonitorPlay, Sun, Maximize, Wrench } from 'lucide-react';
import LocalSEO from './LocalSEO';
import TrustBar from './TrustBar';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildServiceSchema, buildWebPageSchema, buildFaqSchema, localBusinessSchema } from '../lib/seo';

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
            <div 
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div 
                    className="px-6 pb-4 text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></div>
            </div>
        </div>
    );
};

const TITLE = 'LED Wall Rental in Kerala | LED Video Wall for Events | B2P International';
const DESCRIPTION = 'Rent LED walls and LED video walls for weddings, events, concerts & political gatherings in Kerala. B2P International offers P3 & P4 LED screen rental across Thrissur, Kochi and Kerala.';

const LedWall = () => {
    const [heroImageLoaded, setHeroImageLoaded] = useState(false);
    const [currentBgIndex, setCurrentBgIndex] = useState(0);

    const bgImages = [
        "/led-wall-image2.webp",
        "/led-wall-image1.jfif",
        "/led-wall-image3.webp"
    ];

    useEffect(() => {
        // Preload first image
        const heroImage = new Image();
        heroImage.src = bgImages[0];
        heroImage.onload = () => setHeroImageLoaded(true);

        // Rotate images every 4 seconds
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const reasons = [
        {
            title: "Indoor & Outdoor LED Walls",
            desc: "We offer LED walls for both indoor and outdoor events across Kerala. Our indoor P3 LED walls deliver sharp, close-up visuals perfect for conferences, weddings, and corporate events. Our outdoor P4 LED walls are high-brightness panels built to perform in direct sunlight at concerts, political rallies, and large public gatherings.",
            icon: <MonitorPlay size={32} className="text-brand-primary" />
        },
        {
            title: "P3 & P4 Pixel Pitch Options",
            desc: "Pixel pitch determines image sharpness. Our P3 LED walls are ideal for indoor events where the audience is within 3-10 metres of the screen — delivering razor-sharp visuals for presentations and live feeds. Our P4 LED walls are built for outdoor use where higher brightness matters more than pixel density, making them perfect for stages, rallies, and open-air events.",
            icon: <Sun size={32} className="text-brand-secondary" />
        },
        {
            title: "Any Size, Any Venue",
            desc: "Our modular LED panels connect together to create any screen size you need. From a compact 4x3 metre wall for a small corporate event to a massive 12x6 metre outdoor screen for a political rally or concert — we configure the right size for your venue and audience. No venue is too big or too small.",
            icon: <Maximize size={32} className="text-brand-primary" />
        },
        {
            title: "Full Setup & Support Included",
            desc: "Every LED wall rental from B2P International includes professional on-site installation, a trained technician to operate the screen during your event, and full dismantling after the event ends. You do not need to worry about any technical aspect — just focus on your event and we handle everything else.",
            icon: <Wrench size={32} className="text-brand-secondary" />
        }
    ];

    const faqItems = [
        {
            question: "What is the LED wall rental price in Kerala?",
            answer: "LED wall rental price in Kerala depends on screen size, pixel pitch (P3 or P4), event duration, and location. Contact B2P International for a free quote tailored to your specific event and venue."
        },
        {
            question: "What is the difference between P3 and P4 LED wall?",
            answer: "P3 refers to a 3mm pixel pitch — used for indoor events where the audience is close to the screen, delivering very sharp images. P4 refers to a 4mm pixel pitch — used for outdoor events where higher brightness is more important than pixel density. Our team will recommend the right option for your event."
        },
        {
            question: "Can I rent an LED wall for a single day in Thrissur?",
            answer: "Yes. We offer LED screen rental in Thrissur and across Kerala for single-day events as well as multi-day campaigns and long-term installations. Call or WhatsApp us to check availability for your event date."
        },
        {
            question: "Do you provide setup, operator, and dismantling?",
            answer: "Yes. Every rental includes professional installation before your event, a trained on-site technician during the event, and full dismantling after it ends. No technical knowledge is required from your side."
        },
        {
            question: "What is the minimum LED wall size available?",
            answer: "Our smallest configuration starts at approximately 3x2 metres, suitable for small indoor events and corporate meetings. We scale up to 12x6 metres and beyond for large outdoor events and political gatherings. Contact us with your venue dimensions for a recommendation."
        }
    ];

    return (
        <>
        <Seo
            title={TITLE}
            description={DESCRIPTION}
            path="/led-wall"
            schema={[
                localBusinessSchema,
                buildWebPageSchema({
                    name: TITLE,
                    description: DESCRIPTION,
                    path: '/led-wall',
                    type: 'WebPage',
                }),
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "LED Wall Rental in Kerala",
                    "description": "LED wall and LED video wall rental for weddings, corporate events, concerts, and political gatherings across Thrissur, Kochi, and Kerala. P3 indoor and P4 outdoor LED screens available.",
                    "serviceType": "LED Wall Rental",
                    "url": "https://www.b2pinternational.com/led-wall",
                    "provider": {
                      "@type": "LocalBusiness",
                      "name": "B2P International",
                      "url": "https://www.b2pinternational.com"
                    },
                    "areaServed": [
                      {"@type": "City", "name": "Thrissur"},
                      {"@type": "City", "name": "Kochi"},
                      {"@type": "City", "name": "Palakkad"},
                      {"@type": "City", "name": "Kozhikode"},
                      {"@type": "State", "name": "Kerala"}
                    ]
                },
                buildFaqSchema(faqItems),
                buildBreadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'LED Wall', path: '/led-wall' },
                ]),
            ]}
        />
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                <div className="absolute inset-0 w-full h-full z-0">
                    <div className="absolute inset-0 bg-[#050914]"></div>
                    {bgImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`LED Wall Rental in Kerala ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${heroImageLoaded && currentBgIndex === index ? 'opacity-60' : 'opacity-0'}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            decoding="async"
                            onLoad={index === 0 ? () => setHeroImageLoaded(true) : undefined}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-[#050914]/60"></div>
                    <div className="absolute inset-0 bg-[#050914]/40 mix-blend-overlay"></div>
                </div>
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles size={16} className="text-brand-secondary" />
                        <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">LED Wall & Video Wall Rental</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">LED Wall Rental in Kerala</span> — Stunning Displays for Every Event
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        B2P International offers LED wall rental and LED video wall hire across Kerala for all types of events. Whether you need an indoor LED wall for a corporate conference or an outdoor LED screen for a stage event, festival, or political gathering, we have the right solution for you. Our LED display walls deliver sharp, vibrant visuals that captivate audiences even in bright daylight.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300">
                            Get a Free Quote
                            <ArrowRight size={20} />
                        </a>
                        <a href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                            View Our Services
                        </a>
                    </motion.div>
                </div>
            </section>
            
            <TrustBar />
            
            {/* What is an LED Wall Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">What is an LED Wall?</h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
                                <p>
                                    An LED wall (also called an LED video wall or LED display wall) is a large modular screen made up of individual LED panels joined together. These screens can be configured in any size and are used to display live video feeds, presentations, brand videos, event graphics, and more.
                                </p>
                                <p>
                                    LED walls are brighter, sharper, and more durable than traditional projection screens. They work perfectly in both indoor and outdoor settings — delivering crystal-clear visuals even in direct sunlight. With no projector and no screen dependency, an LED wall is the most reliable and visually impressive display solution for any event in Kerala.
                                </p>
                                <p>
                                    At B2P International, we offer P3 pixel pitch LED walls for indoor events and P4 pixel pitch LED walls for outdoor events — covering everything from intimate corporate meetings to large-scale public gatherings.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light">{reason.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">LED Wall Technical Specifications</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Indoor pixel pitch:</strong> P3 (ideal for audiences within 3-10m)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Outdoor pixel pitch:</strong> P4 (high brightness for sunlight use)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Modular panels:</strong> configure any screen size required</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Brightness:</strong> high-brightness panels visible in direct sunlight</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Content compatibility:</strong> Full HD and 4K video</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Audio:</strong> compatible with event PA systems</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Setup:</strong> professional installation by trained technicians</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Support:</strong> on-site technician throughout your event</span>
                                </li>
                                <li className="flex items-start gap-3 md:col-span-2">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center mt-1 shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                                    </div>
                                    <span className="text-slate-700 leading-relaxed"><strong>Rental:</strong> daily, weekly, and long-term rental available</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Event Gallery Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900 mb-6"
                        >
                            Our Recent LED Wall Setups
                        </motion.h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Take a look at some of our recent LED wall installations for corporate events and outdoor stage shows across Kerala.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 group"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img 
                                    src="/led-wall-image1.jfif" 
                                    alt="Outdoor Stage LED Wall Setup in Kerala" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Outdoor Stage Show</h3>
                                        <p className="text-slate-200 text-sm">High-brightness P4 LED Wall</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 group"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img 
                                    src="/led-wall-image2.webp" 
                                    alt="Corporate Event LED Video Wall in Kerala" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Corporate Event</h3>
                                        <p className="text-slate-200 text-sm">Ultra-sharp P3 Indoor LED Wall</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 group"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img 
                                    src="/led-wall-image3.webp" 
                                    alt="Live Stage Performance LED Wall in Kerala" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Live Performances</h3>
                                        <p className="text-slate-200 text-sm">High-refresh rate display panels</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Weddings & Receptions</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Add a spectacular visual centrepiece to your Kerala wedding with an LED video wall from B2P International. Display live camera feeds so every guest sees the ceremony clearly, run beautiful photo slideshows during dinner, or screen cinematic wedding films. Our LED wall rental for weddings in Kerala is available across all districts — from intimate indoor receptions to grand outdoor celebrations.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Corporate Events & Conferences</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Make your product launch, annual day, or corporate conference unforgettable with a professional LED video wall. Display presentations, live demos, brand videos, and speaker feeds in stunning high definition. Our corporate LED screen rental service covers Thrissur, Kochi, Ernakulam, and all major business hubs across Kerala.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Political Rallies & Public Meetings</h3>
                            <p className="text-slate-600 leading-relaxed">
                                LED walls are essential for large political gatherings and public meetings in Kerala. Ensure your candidate's message reaches every corner of the crowd with our high-brightness outdoor LED screens. We offer LED wall hire for political events and election rallies across all constituencies and districts in Kerala, with fast setup and reliable on-site technical support.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Concerts, Stage Shows & Cultural Events</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Elevate the audience experience at concerts, cultural festivals, Onam celebrations, and entertainment events with our large-format outdoor LED display walls. Our screens deliver vibrant, lag-free visuals that make every performance more impressive — visible clearly from the front row to the back of the largest venues in Kerala.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Coverage Area Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">LED Wall Rental Across Kerala</h2>
                            <p className="text-lg text-slate-600 leading-relaxed text-left md:text-center">
                                We provide LED wall rental and LED video wall hire across Thrissur, Kochi, Ernakulam, Palakkad, Kozhikode, Malappuram, Kannur, Kollam, Kottayam, Thiruvananthapuram, and all major towns and venues across Kerala. Contact us early to check availability for your event date — especially during peak wedding and election seasons.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white border-b border-slate-200">
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

            {/* Closing CTA */}
            <section className="py-20 bg-[#050914] text-center">
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Need an LED Wall for Your Next Event?</h2>
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                        Contact B2P International today for LED wall rental in Thrissur, Kochi, or anywhere across Kerala. WhatsApp us for instant pricing or call our Thrissur office to discuss your event requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="https://wa.me/918589909034" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300">
                            WhatsApp Us Now
                        </a>
                        <a href="tel:+918989909034" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
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

export default LedWall;
