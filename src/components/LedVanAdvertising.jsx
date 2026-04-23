import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import LocalSEO from './LocalSEO';
import TrustBar from './TrustBar';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildServiceSchema, buildWebPageSchema, localBusinessSchema } from '../lib/seo';

const LED_SERVICE_TITLE = 'LED Advertising & Rentals in Thrissur, Kerala | B2P International';
const LED_SERVICE_DESCRIPTION =
    'Book mobile LED van advertising, LED lookwalkers, normal look walkers, and LED wall rentals in Thrissur and Kerala for launches, exhibitions, roadshows, and retail promotions.';

const LedVanAdvertising = () => {
    const [heroImageLoaded, setHeroImageLoaded] = useState(false);

    useEffect(() => {
        const heroImage = new Image();
        heroImage.src = "/led-van-advertising.png";
        heroImage.onload = () => setHeroImageLoaded(true);
    }, []);

    return (
        <>
        <Seo
            title={LED_SERVICE_TITLE}
            description={LED_SERVICE_DESCRIPTION}
            keywords="LED lookwalker, normal look walker, LED wall rentals, mobile LED van advertising Thrissur, LED advertising Kerala"
            path="/led-van-advertising"
            schema={[
                localBusinessSchema,
                buildWebPageSchema({
                    name: LED_SERVICE_TITLE,
                    description: LED_SERVICE_DESCRIPTION,
                    path: '/led-van-advertising',
                    type: 'WebPage',
                }),
                buildServiceSchema({
                    name: 'LED Advertising & Rentals in Thrissur and Kerala',
                    description: LED_SERVICE_DESCRIPTION,
                    path: '/led-van-advertising',
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'LED Van Advertising', path: '/led-van-advertising' },
                ]),
            ]}
        />
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section for Service Page */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                {/* Background Image/Video */}
                <div className="absolute inset-0 w-full h-full z-0 opacity-40">
                    <div className="absolute inset-0 bg-[#08111f]"></div>
                    <img
                        src="/led-van-advertising.png"
                        alt="LED van advertising campaign in city street"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${heroImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onLoad={() => setHeroImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-[#050914]/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-[#050914]/80"></div>
                </div>
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles size={16} className="text-brand-secondary" />
                        <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Premium Outdoor Marketing</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">LED Advertising & Rentals</span> Services for Events & Promotions
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Capture attention effortlessly. Our LED vans, LED lookwalkers, normal look walkers, and LED wall rentals offer unmatched visibility for your brand's events and promotions.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300">
                            Book an LED Van
                            <ArrowRight size={20} />
                        </a>
                        <a href="#details" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                            View Advertising Solutions
                        </a>
                    </motion.div>
                </div>
            </section>
            
            <TrustBar />
            
            <div id="details">
                <WhyChooseUs />
            </div>
            
            <LocalSEO />
        </div>
        </>
    );
};

export default LedVanAdvertising;
