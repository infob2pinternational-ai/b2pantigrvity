import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, Eye, Sun, MapPin, DollarSign } from 'lucide-react';
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

const TITLE = 'Lookwalker Advertising in Kerala | LED iWalker on Rent | B2P International';
const DESCRIPTION = 'B2P International offers LED lookwalker advertising across Kerala. Hire iWalkers for product launches, mall activations & brand promotions in Thrissur, Kochi & Kerala.';

const Lookwalker = () => {
    const [heroImageLoaded, setHeroImageLoaded] = useState(false);

    useEffect(() => {
        const heroImage = new Image();
        heroImage.src = "/led-van-advertising.png";
        heroImage.onload = () => setHeroImageLoaded(true);
    }, []);

    const reasons = [
        {
            title: "Eye-Level Brand Impact",
            desc: "A lookwalker places your brand advertisement directly at eye level in the middle of a crowd. Unlike hoardings that people look past, a lookwalker promoter walks right into your target audience — creating unavoidable, memorable brand contact that drives significantly higher recall than static outdoor formats.",
            icon: <Eye size={32} className="text-brand-primary" />
        },
        {
            title: "Works Day & Night",
            desc: "Our LED lookwalker boards are bright enough to stand out in full daylight and even more eye-catching after dark. Battery-operated with 6+ hours of backup, they are perfect for early morning market activations, afternoon mall deployments, and evening street campaigns across Thrissur and Kerala.",
            icon: <Sun size={32} className="text-brand-secondary" />
        },
        {
            title: "Hyperlocal Targeting",
            desc: "Deploy lookwalkers in the exact streets, markets, or neighbourhoods where your customers are. From Swaraj Round in Thrissur to Lulu Mall in Kochi, we plan strategic routes and deployment zones to ensure every impression counts — zero wasted reach, maximum local impact.",
            icon: <MapPin size={32} className="text-brand-primary" />
        },
        {
            title: "Most Affordable BTL Format",
            desc: "Lookwalker advertising delivers high-visibility brand contact at a fraction of the cost of LED vans, hoardings, or digital advertising. It is the ideal format for small and medium businesses in Kerala looking for maximum impact from a limited campaign budget — with no minimum campaign duration.",
            icon: <DollarSign size={32} className="text-brand-secondary" />
        }
    ];

    const faqItems = [
        {
            question: "What is a lookwalker and how does it work?",
            answer: "A lookwalker is a wearable LED advertising board carried by a trained brand promoter. The promoter walks through high-footfall areas displaying your brand's content on a bright LED screen. It is also known as an iWalker, walking billboard, or human billboard. B2P International provides trained promoters and LED boards for campaigns across Kerala."
        },
        {
            question: "What is the lookwalker advertising price per day in Kerala?",
            answer: "Lookwalker advertising cost in Kerala depends on the number of promoters deployed, the campaign duration, and the location. We offer flexible pricing for single-day campaigns and multi-day activations. Contact B2P International for a customised quote for your campaign."
        },
        {
            question: "What is the difference between a lookwalker and an iWalker?",
            answer: "Lookwalker and iWalker refer to the same advertising format — a wearable LED advertising board carried by a brand promoter. Different agencies use different names for the same product. At B2P International we use both LED lookwalkers and backlit non-LED boards depending on campaign requirements."
        },
        {
            question: "Can I hire a lookwalker for one day in Thrissur?",
            answer: "Yes. We offer lookwalker on rent in Thrissur and across Kerala for a single day, a weekend, or longer campaigns. We can deploy one promoter for a small local campaign or a full team of 10+ for large activations."
        },
        {
            question: "How many lookwalkers do I need for my campaign?",
            answer: "For a small local promotion or store launch, 2-4 lookwalkers are usually sufficient. For large-scale mall activations, political campaigns, or city-wide brand awareness campaigns, we recommend teams of 8-15 or more. Our team will help you plan the right number based on your campaign area and objectives."
        }
    ];

    return (
        <>
        <Seo
            title={TITLE}
            description={DESCRIPTION}
            path="/lookwalker"
            schema={[
                localBusinessSchema,
                buildWebPageSchema({
                    name: TITLE,
                    description: DESCRIPTION,
                    path: '/lookwalker',
                    type: 'WebPage',
                }),
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Lookwalker Advertising in Kerala",
                    "description": "LED lookwalker and iWalker advertising services for brand promotions, product launches, mall activations, and election campaigns across Thrissur, Kochi, and Kerala.",
                    "serviceType": "Lookwalker Advertising",
                    "url": "https://www.b2pinternational.com/lookwalker",
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
                    { name: 'Lookwalkers', path: '/lookwalker' },
                ]),
            ]}
        />
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                <div className="absolute inset-0 w-full h-full z-0 opacity-40">
                    <div className="absolute inset-0 bg-[#08111f]"></div>
                    <img
                        src="/led-van-advertising.png"
                        alt="Lookwalker advertising campaign"
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
                        <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Mobile Brand Activation</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Lookwalker Advertising</span> in Kerala That Puts Your Brand Face to Face With Customers
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Our LED lookwalkers (also called iWalkers or walking billboards) take your brand directly to the streets, malls, and markets of Kerala — creating real engagement with real people at eye level. For businesses looking for lookwalker advertising in Thrissur and across Kerala, B2P International delivers trained promoters and bright LED displays that are impossible to ignore.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300">
                            Book Lookwalkers Now
                            <ArrowRight size={20} />
                        </a>
                        <a href="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">
                            View Our Services
                        </a>
                    </motion.div>
                </div>
            </section>
            
            <TrustBar />
            
            {/* What is a Lookwalker Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">What is a Lookwalker?</h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
                                <p>
                                    A lookwalker (also called an iWalker, walking billboard, or human billboard) is a wearable LED advertising board carried by a trained brand promoter. The promoter walks through busy, high-footfall areas displaying your brand's visuals, videos, or promotional content on a bright LED screen visible from a distance.
                                </p>
                                <p>
                                    Lookwalkers are lightweight, battery-operated, and designed to work effectively in crowded places like shopping malls, busy junctions, market areas, trade fairs, and public events. They work brilliantly during the day and are even more striking at night with their bright LED displays — making them one of the most versatile and cost-effective outdoor advertising formats available in Kerala today.
                                </p>
                                <p>
                                    Unlike hoardings or billboards that stay in one place, a lookwalker moves with your audience. It creates direct, eye-level interaction between your brand and potential customers — delivering one of the highest brand recall rates of any outdoor advertising format.
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

            {/* Where We Deploy Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Where We Deploy Lookwalkers in Kerala</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["Shopping malls", "Busy junctions", "Market areas", "Trade fairs and exhibitions", "Store launches and openings", "Bus stops", "Residential areas", "Election campaign zones", "Festivals and public gatherings", "Corporate events"].map((tag, idx) => (
                                    <span key={idx} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-brand-primary/10 hover:border-brand-primary/30 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Product Launches & Store Openings</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A lookwalker team is one of the most effective tools for generating buzz on launch day. Deploy a group of LED lookwalkers around your launch venue or in nearby high-footfall areas to build awareness, attract footfall, and create the kind of street-level excitement that no hoarding can deliver. Ideal for FMCG brands, retail stores, restaurants, and new business openings across Kerala.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Mall & Retail Activations</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our lookwalkers are perfectly suited for in-mall brand activations in Thrissur, Kochi, and beyond. Walking through mall corridors and food courts, our trained promoters attract shoppers' attention, engage them directly, and direct them to your store or stall — increasing footfall and driving in-store conversions in a way static signage simply cannot.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Election & Political Campaigns</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Lookwalker advertising is growing fast as a campaign tool in Kerala elections. Deploy a team of lookwalkers carrying your candidate's image and message in busy voter areas, market zones, and residential streets to maximise visibility in the final days of your campaign. Highly effective at ward level and constituency level across all districts.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sales, Offers & Store Promotions</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Running a sale or a limited-time offer? A lookwalker team deployed near your store or in the surrounding market area is an instant, affordable way to spread the word and drive customers through your door. Perfect for Onam sales, clearance events, new menu launches, and festive promotions across Kerala.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Coverage Area Section */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Lookwalker Advertising Across Kerala</h2>
                            <p className="text-lg text-slate-600 leading-relaxed text-left md:text-center">
                                We provide lookwalker advertising in Thrissur, Kochi, Palakkad, Kozhikode, Malappuram, Ernakulam, Kannur, Kollam, Kottayam, Thiruvananthapuram, and all major towns across Kerala. We deploy single lookwalkers for small local campaigns and full teams of 10+ for large-scale brand activations and political campaigns. Contact us to plan your campaign.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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

            {/* Closing CTA */}
            <section className="py-20 bg-[#050914] text-center">
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Put Your Brand on the Move?</h2>
                    <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                        Contact B2P International today to book lookwalker advertising in Thrissur, Kochi, or anywhere across Kerala. WhatsApp us for instant pricing or call our Thrissur office to plan your campaign.
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

export default Lookwalker;
