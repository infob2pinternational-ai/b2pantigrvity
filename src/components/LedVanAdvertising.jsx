import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2, TrendingUp, MonitorPlay, Users, MapPin, Calculator, ShieldCheck, Target, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-slate-900 text-base sm:text-lg pr-3">{question}</span>
                <ChevronDown className={`text-slate-400 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div 
                    className="px-5 sm:px-6 pb-4 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base"
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
import { buildBreadcrumbSchema, buildServiceSchema, buildWebPageSchema, buildFaqSchema, localBusinessSchema } from '../lib/seo';

const LED_SERVICE_TITLE = 'LED Van on Rent in Kerala & Thrissur | B2P International';
const LED_SERVICE_DESCRIPTION =
    'Compare five LED vehicle rentals in Kerala, including single-, double- and triple-sided LED vans, a 3-Side LED Truck and a 3-Side Hydraulic LED Van.';

const packageInquiryLink = (vehicle) =>
    `https://wa.me/918589909034?text=${encodeURIComponent(
        `Hi B2P International, I want to inquire about a ${vehicle}. I found this package on your LED Van Advertising page.`
    )}`;

const LedVanAdvertising = () => {
    const faqItems = [
        { 
            question: "How do I hire an LED van in Kerala or Thrissur?", 
            answer: "Simply call or WhatsApp us at +91 85899 09034 with your preferred dates, locations, and campaign type. We handle the rest — vehicle, screen, operator, and route planning." 
        },
        { 
            question: "What is the price difference between Single, Double, and Triple-sided LED vans?", 
            answer: "Single-sided LED vans are our most budget-friendly rental option, ideal for one-way street promotions and stationary displays. Double-sided vans cost slightly more and offer dual-sided street visibility, making them our most popular choice for city roadshows. Triple-sided vans (left, right, and rear screens) deliver maximum panoramic exposure and are priced for flagship product launches, major festivals, and large-scale public campaigns." 
        },
        {
            question: "When should I choose a 3-Side LED Truck or a 3-Side Hydraulic LED Van?",
            answer: "Choose the 3-Side LED Truck for a larger presence on major roadshows, political campaigns, and busy city routes. Choose the 3-Side Hydraulic LED Van when an elevated screen can help people see over crowds or traffic, such as at a stage event or a busy campaign stop."
        },
        { 
            question: "What is the average cost of LED van advertising in Kerala?", 
            answer: "Daily LED van rental rates in Kerala typically range between ₹8,000 and ₹15,000 per day depending on the van type (Single, Double, or Triple-sided), operating hours (standard 8-hour shift vs. 12-hour extended shifts), fuel requirements, and campaign duration. B2P International provides discounts for multi-day and monthly roadshow bookings. Request a separate quote for the 3-Side LED Truck or 3-Side Hydraulic LED Van."
        },
        { 
            question: "Can we change the video content during the campaign?", 
            answer: "Yes. Digital LED video vans offer complete flexibility. You can update video creatives mid-campaign to highlight new offers, announce daily promotions, or tailor localized messages for specific towns." 
        },
        { 
            question: "Do the LED advertising vans operate during the Kerala monsoon?", 
            answer: "Yes. Our outdoor LED displays are weather-resistant and IP-rated to operate safely in rain. During extreme monsoon downpours or severe weather alerts, operations may be briefly paused to ensure road safety." 
        },
        { 
            question: "How do we verify the van's location and route coverage?", 
            answer: "All our vehicles are GPS-enabled. We provide clients with transparent daily route reports, live location access during campaign hours, and geo-tagged photo/video verification from scheduled stops and junctions." 
        },
        { 
            question: "Is audio permitted along with the mobile LED video display?", 
            answer: "Yes, our vans are fitted with professional PA sound systems for synchronized jingles, speeches, and announcements, operated in full compliance with local municipal and noise regulations." 
        },
        { 
            question: "What video format is required for the LED screen?", 
            answer: "We accept standard video formats such as MP4, MOV, and AVI. Our technical team assists with aspect ratio formatting and resolution checks to ensure sharp playback on our outdoor screens." 
        },
    ];
    const [heroImageLoaded, setHeroImageLoaded] = useState(false);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    const banners = [
        {
            src: "/led-van-gallery-1.png",
            title: "High Brightness Displays"
        },
        {
            src: "/led-van-gallery-2.png",
            title: "Night Campaigns"
        },
        {
            src: "/led-van-gallery-3.png",
            title: "City Wide Reach"
        }
    ];

    useEffect(() => {
        const heroImage = new Image();
        heroImage.src = "/led-van-advertising.png";
        heroImage.onload = () => setHeroImageLoaded(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [banners.length]);

    const benefits = [
        "Unmatched Mobility: Move your advertisement to where the crowd is.",
        "High-Resolution Impact: Bright, clear video playback catches the eye even in broad daylight.",
        "Cost-Effective Reach: Lower cost per impression compared to prime static hoardings.",
        "Hyper-Local Targeting: Focus on specific wards, streets, or suburbs daily.",
        "Audio-Visual Engagement: Combine striking video with synchronized sound."
    ];

    const rentalTiers = [
        {
            name: "Single-Sided LED Van",
            badge: "Budget Friendly",
            tagline: "Ideal for focused promotions and budget-friendly campaigns.",
            features: [
                "1 High-Brightness Outdoor LED Screen",
                "Directional display focused on roadside audiences",
                "Perfect for curb-side parking, market stalls & one-way streets",
                "Includes generator & synchronized sound system",
                "Dedicated driver-operator included",
                "Standard 8-hour daily operational shift"
            ],
            highlight: false,
            ctaText: "Inquire Single-Sided Van",
            whatsappLink: "https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20want%20to%20inquire%20about%20a%20Single-Sided%20LED%20Van%20on%20rent."
        },
        {
            name: "Double-Sided LED Van",
            badge: "Most Popular",
            tagline: "Better visibility from both directions — most popular choice for city roadshows.",
            features: [
                "2 High-Resolution Outdoor LED Displays (Left & Right)",
                "Simultaneous dual-direction reach in two-way city traffic",
                "2x impressions during busy morning & evening peak hours",
                "Includes generator & synchronized sound system",
                "Dedicated driver-operator included",
                "Standard 8-hour or extended 12-hour shifts"
            ],
            highlight: true,
            ctaText: "Book Double-Sided Van",
            whatsappLink: "https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20want%20to%20book%20a%20Double-Sided%20LED%20Van%20on%20rent."
        },
        {
            name: "Triple-Sided LED Van",
            badge: "Maximum Impact",
            tagline: "Maximum impact with screens on three sides. Best for high-traffic routes and major launches.",
            features: [
                "3 Ultra-Bright LED Displays (Left, Right & Rear)",
                "360° panoramic exposure capturing traffic from every angle",
                "Flagship choice for mega showroom launches & state rallies",
                "Includes heavy-duty generator & high-power audio",
                "Dedicated driver-operator & live GPS route tracking",
                "Customized shifts and multi-district deployment"
            ],
            highlight: false,
            ctaText: "Inquire Triple-Sided Van",
            whatsappLink: "https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20want%20to%20inquire%20about%20a%20Triple-Sided%20LED%20Van%20on%20rent."
        },
        {
            name: "3-Side LED Truck",
            badge: "Large-Scale Roadshows",
            tagline: "A larger vehicle with a strong street presence for major roadshows, political campaigns, and high-visibility city routes.",
            features: [
                "Three-sided LED display for audiences approaching from different directions",
                "Larger vehicle format for prominent campaign stops"
            ],
            ctaText: "Inquire About LED Truck",
            whatsappLink: packageInquiryLink("3-Side LED Truck")
        },
        {
            name: "3-Side Hydraulic LED Van",
            badge: "Elevated Display",
            tagline: "A hydraulic lift raises the screen for better visibility over dense crowds and traffic, including at stage events.",
            features: [
                "Three-sided display for audiences around the vehicle",
                "Elevated viewing for stage events and busy campaign stops"
            ],
            ctaText: "Inquire About Hydraulic Van",
            whatsappLink: packageInquiryLink("3-Side Hydraulic LED Van")
        }
    ];

    return (
        <>
        <Seo
            title={LED_SERVICE_TITLE}
            description={LED_SERVICE_DESCRIPTION}
            keywords="led van near me, led van on rent, led advertising van rent, hire LED van Thrissur, LED advertising vehicle, mobile LED van rental Kerala, video van hire Kerala"
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
                    name: 'LED Van Advertising & Mobile Video Van Rental in Kerala',
                    description: LED_SERVICE_DESCRIPTION,
                    path: '/led-van-advertising',
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'LED Vehicle Rental Packages',
                        itemListElement: rentalTiers.map(({ name, tagline }) => ({
                            '@type': 'Offer',
                            itemOffered: { '@type': 'Service', name, description: tagline },
                        })),
                    },
                    areaServed: ['Thrissur', 'Kerala', 'Kochi', 'Trivandrum', 'Kozhikode', 'Palakkad', 'Malappuram', 'Kannur', 'Kottayam', 'Kollam']
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'LED Van Advertising', path: '/led-van-advertising' },
                ]),
                buildFaqSchema(faqItems),
            ]}
        />
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[85vh] flex flex-col justify-center">
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[#050914]"></div>
                    <img
                        src="/led-van-advertising.png"
                        alt="LED van advertising campaign in Kerala city street"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${heroImageLoaded ? 'opacity-[0.65]' : 'opacity-0'}`}
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-[#050914]/80"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-6 sm:mb-8"
                    >
                        <Sparkles size={16} className="text-brand-secondary shrink-0" />
                        <span className="text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase">Based in Thrissur • Serving All Kerala</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight leading-tight max-w-5xl mx-auto px-2 sm:px-0"
                    >
                        Mobile LED Van Advertising in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Kerala & Thrissur</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0"
                    >
                        Looking for an LED van on rent near you? Based in Thrissur, B2P International provides high-resolution mobile LED vans for single-day hires, promotional roadshows, and campaigns across all 14 districts in Kerala.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full max-w-sm sm:max-w-none mx-auto flex flex-col sm:flex-row gap-3.5 sm:gap-6 justify-center items-stretch sm:items-center px-4 sm:px-0 pb-8 sm:pb-0"
                    >
                        <a 
                            href="https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20came%20from%20the%20LED%20Van%20page%20on%20your%20website%20and%20I%20want%20to%20hire%20an%20LED%20van." 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)] text-base"
                        >
                            Book an LED Van Today
                            <ArrowRight size={18} />
                        </a>
                        <a 
                            href="#rental-packages" 
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 sm:px-8 sm:py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 active:scale-95 text-base"
                        >
                            View Rental Packages
                            <ChevronDown size={18} />
                        </a>
                    </motion.div>
                </div>
            </section>
            
            <TrustBar />

            {/* SECTION 1: Service Overview */}
            <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">What is LED Van Advertising?</h2>
                            <div className="text-base sm:text-lg text-slate-600 leading-relaxed space-y-5">
                                <p>
                                    Whether you need to hire an LED van in Thrissur for a one-day inauguration or require LED advertising vehicles for a multi-week roadshow, our mobile video vans put your message in front of moving audiences across Kerala. Unlike static billboards that rely on passing footfall, our custom-built LED advertising vans take your video commercials directly to high-traffic junctions, commercial hubs, shopping streets, and community centers.
                                </p>
                                <p>
                                    Headquartered in <strong>Puranattukara, Thrissur</strong>, B2P International manages a modern fleet of daylight-visible mobile LED advertising vehicles serving Thrissur, Kochi, Kozhikode, Thiruvananthapuram, Palakkad, and Malappuram. Fitted with high-resolution outdoor screens and synchronized sound systems, our video vans ensure your message stays bright and clear in daytime sunlight as well as during Kerala’s monsoon season.
                                </p>
                                <p>
                                    From retail store inaugurations in Thrissur to multi-city brand roadshows across Kerala, mobile video vans combine digital flexibility with substantial outdoor reach. Clients benefit from dynamic content updates, transparent GPS route tracking, and targeted exposure that drives measurable local brand recall.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <MonitorPlay className="w-9 h-9 text-brand-primary mb-3" />
                                    <h3 className="font-bold text-lg sm:text-xl mb-1.5 text-slate-900">Dynamic Video</h3>
                                    <p className="text-slate-600 text-sm">Play high-definition commercials, animations, and slideshows.</p>
                                </div>
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <MapPin className="w-9 h-9 text-brand-primary mb-3" />
                                    <h3 className="font-bold text-lg sm:text-xl mb-1.5 text-slate-900">Total Mobility</h3>
                                    <p className="text-slate-600 text-sm">Navigate through dense city traffic and reach remote suburban areas.</p>
                                </div>
                            </div>
                            <div className="space-y-4 sm:pt-6">
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <Target className="w-9 h-9 text-brand-primary mb-3" />
                                    <h3 className="font-bold text-lg sm:text-xl mb-1.5 text-slate-900">Precise Targeting</h3>
                                    <p className="text-slate-600 text-sm">Deploy in specific wards, outside competitor stores, or near events.</p>
                                </div>
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <Users className="w-9 h-9 text-brand-primary mb-3" />
                                    <h3 className="font-bold text-lg sm:text-xl mb-1.5 text-slate-900">Mass Engagement</h3>
                                    <p className="text-slate-600 text-sm">Attract crowds with integrated audio systems and live streaming.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Benefits */}
            <section className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">The Power of Mobile Digital Billboards</h2>
                        <p className="text-base sm:text-lg text-slate-300">Why top brands across Kerala shift their budgets from traditional static media to our dynamic mobile LED vans.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {benefits.map((benefit, i) => {
                            const [title, desc] = benefit.split(': ');
                            return (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
                                >
                                    <CheckCircle2 className="w-7 h-7 text-brand-secondary mb-4" />
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{desc}</p>
                                </motion.div>
                            );
                        })}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 p-6 sm:p-8 rounded-[2rem]"
                        >
                            <TrendingUp className="w-7 h-7 text-brand-secondary mb-4" />
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Higher ROI</h3>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">Stop paying for empty impressions. Our vans move to where the traffic is heaviest at any given time of day.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Dedicated Rental & Pricing Packages */}
            <section id="rental-packages" className="py-16 sm:py-20 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-xs sm:text-sm uppercase tracking-wider mb-4">
                            Transparent Hire Rates
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
                            LED Van on Rent in Kerala – Flexible Packages
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                            If you are looking for an LED advertising van for rent in Kerala or Thrissur, pricing depends on the type of van you choose. Choose from Single-Sided, Double-Sided, and Triple-Sided LED Vans, the 3-Side LED Truck, and the 3-Side Hydraulic LED Van. Rates vary based on the number of screens, campaign duration, and route. All packages include the vehicle, daylight-visible LED screens, generator, audio system, and a trained operator.
                        </p>
                    </div>

                    {/* Rental Package Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                        {rentalTiers.map((tier, idx) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className={`rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 xl:p-10 transition-all flex flex-col justify-between ${
                                    tier.highlight
                                        ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-brand-primary scale-100 lg:scale-105 z-10'
                                        : 'bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-lg'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <span className={`text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                                            tier.highlight 
                                                ? 'bg-brand-primary text-white' 
                                                : 'bg-slate-200 text-slate-700'
                                        }`}>
                                            {tier.badge}
                                        </span>
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-black mb-2.5 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>
                                        {tier.name}
                                    </h3>
                                    <p className={`text-sm sm:text-base leading-relaxed mb-6 ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {tier.tagline}
                                    </p>
                                    <div className="h-px bg-slate-200/50 mb-6" />
                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
                                                <Check className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${tier.highlight ? 'text-brand-secondary' : 'text-brand-primary'}`} />
                                                <span className={tier.highlight ? 'text-slate-200' : 'text-slate-700'}>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a
                                    href={tier.whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3.5 sm:py-4 px-6 rounded-full font-black text-center text-sm sm:text-base transition-all inline-flex items-center justify-center gap-2 active:scale-95 ${
                                        tier.highlight
                                            ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95 shadow-lg'
                                            : 'bg-slate-900 text-white hover:bg-brand-primary'
                                    }`}
                                >
                                    {tier.ctaText}
                                    <ArrowRight size={18} className="shrink-0" />
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Pricing Factors Grid */}
                    <div className="bg-slate-50 border border-slate-200 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12">
                        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
                            <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-brand-primary mx-auto mb-3 sm:mb-4" />
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">How Rental Rates Are Calculated</h3>
                            <p className="text-slate-600 text-sm sm:text-base">
                                Beyond the van configuration, your final quote is customized based on these practical operational variables:
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Campaign Duration</h4>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Tiered discounted daily rates apply for weekly and monthly bookings vs. single-day hires.</p>
                            </div>
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Operating Hours</h4>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Standard shifts run for 8 hours daily. Extended evening shifts or 12-hour schedules are readily supported.</p>
                            </div>
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Distance & Fuel</h4>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Routes spanning multiple districts involve fuel and driver logistics factored upfront with full transparency.</p>
                            </div>
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-base sm:text-lg text-slate-900 mb-1.5">Municipal Permits</h4>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Specific city limits or festival venues may require municipal permissions, which we help coordinate.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Target Audience & Use Cases */}
            <section className="py-16 sm:py-20 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">Who Uses LED Van Advertising?</h2>
                        <p className="text-base sm:text-lg text-slate-600">From local businesses to national political campaigns, LED vans offer versatile applications for diverse marketing objectives.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Retail Product Launches</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                The retail sector relies heavily on footfall. When launching a new product, opening a new showroom, or announcing a mega-sale (like Onam or Diwali offers), an LED van creates an immediate localized buzz. By parking the van near key intersections and competitor zones, brands guarantee that their target demographic sees the promotion.
                            </p>
                        </div>
                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Real Estate & Housing</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Real estate developers utilize our LED vans to showcase 3D walkthroughs of luxury apartments and villa projects. Instead of a flat image on a billboard, potential buyers experience a dynamic video tour of the property while the van cruises through premium residential neighborhoods and IT corridors.
                            </p>
                        </div>
                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Political & Election Campaigns</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                During election seasons, our fleet serves as mobile broadcasting stations. Politicians use LED vans to play campaign speeches, showcase manifesto highlights, and broadcast live rallies to remote wards and rural junctions where setting up permanent screens is impossible.
                            </p>
                        </div>
                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4">Corporate & Healthcare Awareness</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Hospitals running health-checkup camps, and corporate brands executing CSR initiatives, deploy our vans to spread awareness effectively. The audio-visual format ensures complex information is digested easily by the public across various demographics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Campaign Planning Process */}
            <section className="py-16 sm:py-20 md:py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <img src="/led-van-gallery-1.png" alt="LED Van Planning" className="rounded-[2rem] sm:rounded-[2.5rem] shadow-xl w-full" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 sm:mb-8">How We Plan Your Campaign</h2>
                            <div className="space-y-6 sm:space-y-8">
                                <div className="flex gap-4 sm:gap-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-lg sm:text-xl shrink-0">1</div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Consultation & Rental Objective</h3>
                                        <p className="text-slate-600 text-sm sm:text-base">We analyze your target audience, help select the vehicle configuration for your route, audience, and screen-height needs, and structure the campaign timeline.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-lg sm:text-xl shrink-0">2</div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Route Mapping & Scheduling</h3>
                                        <p className="text-slate-600 text-sm sm:text-base">We plot custom daily routes based on traffic density data to ensure your hired LED van visits prime intersections, commercial streets, and residential zones during peak hours.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-lg sm:text-xl shrink-0">3</div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Content Verification</h3>
                                        <p className="text-slate-600 text-sm sm:text-base">Our technical team ensures your video content is formatted correctly for optimal brightness, contrast, aspect ratio, and audio clarity on our outdoor screens.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 sm:gap-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-lg sm:text-xl shrink-0">4</div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">Execution & Live Tracking</h3>
                                        <p className="text-slate-600 text-sm sm:text-base">The van is deployed with a trained operator. We provide regular updates, live GPS tracking, and geo-tagged photo/video proofs of the campaign in action.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Kerala Coverage & Deep Links */}
            <section className="py-16 sm:py-20 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Unrivaled Coverage Across Kerala</h2>
                    <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-12 sm:mb-16">
                        We operate a dedicated and well-maintained fleet of LED advertising vans in Kerala. While we cover all 14 districts, we maintain dedicated teams and central route hubs in the major urban centers.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/locations/thrissur" className="block p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-brand-primary/40 hover:border-brand-primary hover:bg-white/10 transition-all group text-left relative overflow-hidden">
                            <span className="inline-block text-[11px] font-black uppercase tracking-wider text-brand-secondary bg-brand-primary/20 px-3 py-1 rounded-full mb-3">Headquarters</span>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2.5 group-hover:text-brand-primary transition-colors text-white">Thrissur Hub</h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">Immediate vehicle dispatch for Swaraj Round, East Fort, Guruvayur Road, and central Kerala campaigns.</p>
                            <span className="text-brand-secondary font-bold text-sm flex items-center gap-2">Explore Thrissur Hub <ArrowRight size={14} /></span>
                        </Link>
                        <Link to="/locations/kochi" className="block p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2.5 group-hover:text-brand-primary transition-colors text-white">Kochi & Ernakulam</h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">Targeting Lulu Mall, MG Road, and the Kakkanad IT corridor for maximum corporate and retail exposure.</p>
                            <span className="text-brand-secondary font-bold text-sm flex items-center gap-2">Explore Kochi Campaigns <ArrowRight size={14} /></span>
                        </Link>
                        <Link to="/locations/kozhikode" className="block p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2.5 group-hover:text-brand-primary transition-colors text-white">Kozhikode & Malabar</h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">Dominating the bustling streets of SM Street and the Kozhikode Bypass for high-frequency retail visibility.</p>
                            <span className="text-brand-secondary font-bold text-sm flex items-center gap-2">Explore Kozhikode Campaigns <ArrowRight size={14} /></span>
                        </Link>
                        <Link to="/locations/trivandrum" className="block p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group text-left">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2.5 group-hover:text-brand-primary transition-colors text-white">Trivandrum Capital</h3>
                            <p className="text-slate-400 text-sm mb-5 leading-relaxed">Strategic placements near the Secretariat, Technopark, and major institutional hubs in the capital city.</p>
                            <span className="text-brand-secondary font-bold text-sm flex items-center gap-2">Explore Trivandrum Campaigns <ArrowRight size={14} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Case Studies / Campaign Examples */}
            <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-10 sm:mb-12 text-center">Successful Campaign Examples</h2>
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-200">
                            <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black">CS</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Jewelry Brand Expansion</h3>
                            </div>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                A premier jewelry brand launching a massive showroom in Thrissur required an immediate buzz. We deployed 3 LED advertising vans for 7 days leading up to the inauguration. The vans circled key arterial roads and parked at prominent junctions during evening rush hours playing a high-quality video teaser.
                            </p>
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">Result</span>
                                <p className="text-slate-900 font-medium text-sm sm:text-base mt-1.5">Significant footfall on inauguration day, with strong brand recall directly tied to the high-visibility video vans.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-200">
                            <div className="flex items-center gap-4 mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black">CS</div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">University Admission Drive</h3>
                            </div>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                                An educational institution wanted to target students outside major exam centers across Ernakulam and Kottayam. Two LED vans were strategically parked near major schools and tuition hubs during dispersal times, displaying dynamic course information and scholarship details.
                            </p>
                            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100">
                                <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider">Result</span>
                                <p className="text-slate-900 font-medium text-sm sm:text-base mt-1.5">A substantial surge in targeted inquiries validating the hyper-local placement strategy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: FAQ */}
            <section className="py-16 sm:py-20 md:py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center mb-12 sm:mb-16">
                        <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-brand-primary mx-auto mb-4 sm:mb-6" />
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
                        <p className="text-base sm:text-lg text-slate-600">Everything you need to know about booking, hiring, and executing an LED Van campaign in Kerala.</p>
                    </div>
                    <div className="space-y-4">
                        {faqItems.map((item, idx) => (
                            <FaqItem 
                                key={idx}
                                question={item.question} 
                                answer={item.answer} 
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            <LocalSEO />

            {/* Final CTA */}
            <section className="py-16 sm:py-20 md:py-24 bg-white text-center pb-24 md:pb-24">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-4 sm:mb-6">Ready to Book Your LED Advertising Van?</h2>
                    <p className="text-base sm:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto font-light">
                        Planning a store launch in Thrissur, a statewide truck roadshow, or a stage event that needs a raised screen? Share your dates and route or venue so we can confirm vehicle availability and prepare a quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
                        <a
                            href="https://wa.me/918589909034?text=Hi%20B2P%20International%2C%20I%20came%20from%20the%20LED%20Van%20page%20on%20your%20website%20and%20I%20want%20a%20rental%20quote."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-black text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/40 active:scale-95"
                        >
                            Get a Free Rental Quote
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="tel:+918589909034"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-7 py-4 sm:px-8 sm:py-5 text-base sm:text-lg font-bold text-slate-800 transition-all hover:bg-slate-200 active:scale-95"
                        >
                            <Phone size={18} />
                            +91 85899 09034
                        </a>
                    </div>
                    <p className="mt-8 text-xs sm:text-sm text-slate-500 font-medium">
                        📍 Central Operations Hub: Marathakam Centre, Puranattukara, Thrissur, Kerala
                    </p>
                </div>
            </section>
        </div>
        </>
    );
};

export default LedVanAdvertising;