import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

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
                <div className="absolute inset-0 w-full h-full z-0">
                    <div className="absolute inset-0 bg-[#050914]"></div>
                    <img
                        src="/led-van-advertising.png"
                        alt="LED van advertising campaign in city street"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${heroImageLoaded ? 'opacity-[0.65]' : 'opacity-0'}`}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onLoad={() => setHeroImageLoaded(true)}
                    />
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
            
            {/* SECTION 1: What is LED Van Advertising */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">What is LED Van Advertising?</h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
                                <p>
                                    LED van advertising (also called mobile LED van or LED video van advertising) is a form of outdoor advertising where a vehicle fitted with large, bright LED display screens drives through targeted locations. The LED screen plays your video ads, images, or animated content, attracting attention from pedestrians and motorists alike — day or night.
                                </p>
                                <p>
                                    Unlike fixed hoardings or billboards, an LED mobile van is completely mobile. You choose the route, the timing, and the areas you want to cover. This gives you precise control over who sees your advertisement and when. For businesses in Kerala looking for maximum visibility at an affordable cost, LED van advertising Kerala is one of the most powerful tools available.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Campaign Gallery Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900 mb-6"
                        >
                            Our LED Van Fleet
                        </motion.h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Experience the visual impact of our high-resolution LED advertising vans on the streets of Kerala.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg border border-slate-200 group"
                        >
                            <div className="aspect-video relative overflow-hidden bg-slate-100">
                                <img 
                                    src="/led-van-gallery-1.png" 
                                    alt="LED Van displaying ad" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">High Brightness Displays</h3>
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
                            <div className="aspect-video relative overflow-hidden bg-slate-100">
                                <img 
                                    src="/led-van-gallery-2.png" 
                                    alt="LED Van advertising at night" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">Night Campaigns</h3>
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
                            <div className="aspect-video relative overflow-hidden bg-slate-100">
                                <img 
                                    src="/led-van-gallery-3.png" 
                                    alt="LED Van on city street" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-white font-bold text-xl">City Wide Reach</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Use Cases */}
            <section className="py-20 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900"
                        >
                            Who Uses LED Van Advertising in Kerala?
                        </motion.h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Product Launches & Store Openings</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Launching a new product or opening a new store? Our LED van for product launch Thrissur campaigns cover key markets and shopping zones across the city and beyond — displaying your product video and offer details to thousands of potential customers on launch day.
                            </p>
                        </motion.div>
                        {/* Card 2 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Election Campaigns</h3>
                            <p className="text-slate-600 leading-relaxed">
                                An LED van for election campaign Kerala is one of the most powerful tools for political outreach. We offer LED vans on rent for political campaigns across constituencies, with custom route planning to maximise voter outreach at ward level and beyond.
                            </p>
                        </motion.div>
                        {/* Card 3 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Onam & Festival Promotions</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Kerala's festival season is the most competitive time for local businesses. Our LED mobile vans help you cut through the noise during Onam, Vishu, Christmas, and Eid — reaching shoppers in busy markets and residential areas when purchase intent is highest.
                            </p>
                        </motion.div>
                        {/* Card 4 */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Real Estate & Housing Projects</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Building awareness for a new housing project or apartment launch? Our LED van advertising drives through target residential areas and commercial corridors, putting your project in front of potential buyers exactly where they live and commute.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Coverage Area */}
            <section className="py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">LED Van Advertising Across Kerala</h2>
                            <p className="text-lg text-slate-600 leading-relaxed text-left md:text-center">
                                We provide comprehensive mobile LED van Kerala services across all major districts including Thrissur, Kochi (Ernakulam), Palakkad, Kozhikode, Malappuram, Kannur, Kollam, Thiruvananthapuram, Kottayam, and Alappuzha. We also cover smaller towns and taluk-level locations on request. Whether you need a single-city campaign or a statewide roadshow, B2P International has the fleet and the network to deliver.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        <FaqItem 
                            question="How much does LED van advertising cost in Kerala?" 
                            answer="The cost depends on the number of days, area coverage, and route length. We offer flexible packages for single-day campaigns, weekly campaigns, and long-term roadshows. Contact B2P International for a customised quote based on your requirements to get the best LED van advertising cost Kerala." 
                        />
                        <FaqItem 
                            question="Can I hire an LED van for just one day in Thrissur?" 
                            answer="Yes. We offer an LED video van on rent for a single day, a weekend, or longer campaign periods. Whether you need an LED mobile van Thrissur for a quick local promotion or a longer campaign, we work with businesses of all sizes — from local shops to large corporate brands." 
                        />
                        <FaqItem 
                            question="What areas do you cover beyond Thrissur?" 
                            answer="We cover all major districts in Kerala including Kochi, Palakkad, Kozhikode, Malappuram, Ernakulam, Kannur, Kollam, and Thiruvananthapuram. We also cover taluk-level towns on request." 
                        />
                        <FaqItem 
                            question="Is LED van advertising effective for small businesses?" 
                            answer="Absolutely. LED van advertising is one of the most cost-effective outdoor formats for small and medium businesses in Kerala. It delivers high visibility at a fraction of the cost of hoardings or print advertising, and you only pay for the areas and days you need." 
                        />
                        <FaqItem 
                            question="Do you provide the advertisement content or do we?" 
                            answer="We can work both ways. If you have ready video or image content, we display it on our LED screens. If you need help creating your advertisement content, our team can assist with basic creative production. Contact us to discuss your requirements." 
                        />
                    </div>
                </div>
            </section>
            
            <LocalSEO />
        </div>
        </>
    );
};

export default LedVanAdvertising;
