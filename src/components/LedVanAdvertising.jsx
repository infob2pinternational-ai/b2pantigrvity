import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2, TrendingUp, MonitorPlay, Users, MapPin, Calculator, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
            >
                <span className="font-bold text-slate-900">{question}</span>
                <ChevronDown className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div 
                    className="px-6 pb-4 pt-2 text-slate-600 leading-relaxed"
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

const LED_SERVICE_TITLE = 'LED Van Advertising & Rentals in Kerala | B2P International';
const LED_SERVICE_DESCRIPTION =
    'Book premium mobile LED van advertising in Kerala. B2P International offers high-resolution video vans for product launches, roadshows, and election campaigns across Kochi, Trivandrum, Kozhikode, and Thrissur.';

const LedVanAdvertising = () => {
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

    return (
        <>
        <Seo
            title={LED_SERVICE_TITLE}
            description={LED_SERVICE_DESCRIPTION}
            keywords="LED van advertising Kerala, mobile LED van Kerala, video van advertising, roadshow marketing Kerala, LED screen on rent"
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
                    name: 'LED Van Advertising Services in Kerala',
                    description: LED_SERVICE_DESCRIPTION,
                    path: '/led-van-advertising',
                    areaServed: ['Kerala', 'Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur']
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'LED Van Advertising', path: '/led-van-advertising' },
                ]),
            ]}
        />
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                <div className="absolute inset-0 w-full h-full z-0">
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
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles size={16} className="text-brand-secondary" />
                        <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Mobile Outdoor Marketing</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                    >
                        Dominate the Streets with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">LED Van Advertising</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Transform your marketing campaigns with high-impact, moving digital billboards. We deliver unparalleled visibility across Kerala through strategic mobile LED roadshows and activations.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(var(--brand-primary-rgb),0.3)]">
                            Book an LED Van Today
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>
            
            <TrustBar />

            {/* SECTION 1: Service Overview */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">What is LED Van Advertising?</h2>
                            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                                <p>
                                    LED Van Advertising—also referred to as Mobile Digital Billboards or Video Vans—is a revolutionary outdoor advertising format where high-resolution LED screens are mounted on commercial vehicles. Unlike traditional static hoardings that require the audience to pass by a specific location, LED vans take your vibrant, full-motion video advertisements directly to your target audience.
                                </p>
                                <p>
                                    At B2P International, we equip our fleet with state-of-the-art, daylight-visible P3 and P4 LED screens. These screens ensure that whether you are running a campaign under the bright midday Kerala sun or navigating through crowded evening markets, your brand message is crystal clear. 
                                </p>
                                <p>
                                    This medium bridges the gap between digital marketing and outdoor advertising. It allows brands to broadcast TV-commercial-quality content on the streets, accompanied by synchronized audio systems, creating a multi-sensory marketing experience that commands attention and drives immediate consumer action.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <MonitorPlay className="w-10 h-10 text-brand-primary mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-900">Dynamic Video</h3>
                                    <p className="text-slate-600 text-sm">Play high-definition commercials, animations, and slideshows.</p>
                                </div>
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <MapPin className="w-10 h-10 text-brand-primary mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-900">Total Mobility</h3>
                                    <p className="text-slate-600 text-sm">Navigate through dense city traffic and reach remote suburban areas.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <Target className="w-10 h-10 text-brand-primary mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-900">Precise Targeting</h3>
                                    <p className="text-slate-600 text-sm">Deploy in specific wards, outside competitor stores, or near events.</p>
                                </div>
                                <div className="bg-brand-primary/5 p-6 rounded-3xl border border-brand-primary/10">
                                    <Users className="w-10 h-10 text-brand-primary mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-900">Mass Engagement</h3>
                                    <p className="text-slate-600 text-sm">Attract crowds with integrated audio systems and live streaming.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Benefits */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">The Power of Mobile Digital Billboards</h2>
                        <p className="text-lg text-slate-300">Why top brands across Kerala shift their budgets from traditional static media to our dynamic mobile LED vans.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, i) => {
                            const [title, desc] = benefit.split(': ');
                            return (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors"
                                >
                                    <CheckCircle2 className="w-8 h-8 text-brand-secondary mb-6" />
                                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{desc}</p>
                                </motion.div>
                            );
                        })}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 p-8 rounded-[2rem]"
                        >
                            <TrendingUp className="w-8 h-8 text-brand-secondary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Higher ROI</h3>
                            <p className="text-slate-300 leading-relaxed">Stop paying for empty impressions. Our vans move to where the traffic is heaviest at any given time of day.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Target Audience & Use Cases */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Who Uses LED Van Advertising?</h2>
                        <p className="text-lg text-slate-600">From local businesses to national political campaigns, LED vans offer versatile applications for diverse marketing objectives.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Retail Product Launches</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                The retail sector relies heavily on footfall. When launching a new product, opening a new showroom, or announcing a mega-sale (like Onam or Diwali offers), an LED van creates an immediate localized buzz. By parking the van near key intersections and competitor zones, brands guarantee that their target demographic sees the promotion.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Real Estate & Housing</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Real estate developers utilize our LED vans to showcase 3D walkthroughs of luxury apartments and villa projects. Instead of a flat image on a billboard, potential buyers experience a dynamic video tour of the property while the van cruises through premium residential neighborhoods and IT corridors.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Political & Election Campaigns</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                During election seasons, our fleet serves as mobile broadcasting stations. Politicians use LED vans to play campaign speeches, showcase manifesto highlights, and broadcast live rallies to remote wards and rural junctions where setting up permanent screens is impossible.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Corporate & Healthcare Awareness</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Hospitals running health-checkup camps, and corporate brands executing CSR initiatives, deploy our vans to spread awareness effectively. The audio-visual format ensures complex information is digested easily by the public across various demographics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Campaign Planning Process */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <img src="/led-van-gallery-1.png" alt="LED Van Planning" className="rounded-[2.5rem] shadow-xl w-full" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">How We Plan Your Campaign</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl shrink-0">1</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Consultation & Objective Setting</h3>
                                        <p className="text-slate-600">We analyze your target audience, campaign goals (brand awareness vs. direct sales), and determine the optimal duration for the roadshow.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl shrink-0">2</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Route Mapping & Scheduling</h3>
                                        <p className="text-slate-600">We don't just drive blindly. We utilize traffic data and local market insights to plot routes that intersect with peak crowd densities at specific times of the day.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl shrink-0">3</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Content Verification</h3>
                                        <p className="text-slate-600">Our technical team ensures your video content is formatted correctly for optimal brightness, contrast, and aspect ratio on our P3/P4 outdoor screens.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xl shrink-0">4</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Execution & Live Tracking</h3>
                                        <p className="text-slate-600">The van is deployed with a trained operator. We provide daily updates, GPS tracking data, and photo/video proofs of the campaign in action.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Kerala Coverage & Deep Links */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">Unrivaled Coverage Across Kerala</h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-16">
                        We operate the largest and most well-maintained fleet of LED advertising vans in Kerala. While we cover all 14 districts, we have specialized route knowledge and dedicated teams in the major urban centers.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link to="/locations/kochi" className="block p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">Kochi & Ernakulam</h3>
                            <p className="text-slate-400 mb-6">Targeting Lulu Mall, MG Road, and the Kakkanad IT corridor for maximum corporate and retail exposure.</p>
                            <span className="text-brand-secondary font-bold flex items-center justify-center gap-2">Explore Kochi Campaigns <ArrowRight size={16} /></span>
                        </Link>
                        <Link to="/locations/kozhikode" className="block p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">Kozhikode & Malabar</h3>
                            <p className="text-slate-400 mb-6">Dominating the bustling streets of SM Street and the Kozhikode Bypass for high-frequency retail visibility.</p>
                            <span className="text-brand-secondary font-bold flex items-center justify-center gap-2">Explore Kozhikode Campaigns <ArrowRight size={16} /></span>
                        </Link>
                        <Link to="/locations/trivandrum" className="block p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-white/10 transition-all group">
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">Trivandrum Capital</h3>
                            <p className="text-slate-400 mb-6">Strategic placements near the Secretariat, Technopark, and major institutional hubs in the capital city.</p>
                            <span className="text-brand-secondary font-bold flex items-center justify-center gap-2">Explore Trivandrum Campaigns <ArrowRight size={16} /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Pricing Factors */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Calculator className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Understanding LED Van Pricing</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            A common question we receive is, "What is the LED Van advertising cost in Kerala?" We believe in transparent pricing. Our rates are calculated based on several core factors, ensuring you only pay for the exact exposure you need.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-xl text-slate-900 mb-3">Duration</h4>
                            <p className="text-slate-600">Pricing scales based on the number of days. We offer discounted rates for long-term monthly campaigns versus single-day rentals.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-xl text-slate-900 mb-3">Operating Hours</h4>
                            <p className="text-slate-600">Standard campaigns run for 8 hours a day. Extended evening operations or 12-hour shifts incur adjusted operational costs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-xl text-slate-900 mb-3">Distance & Fuel</h4>
                            <p className="text-slate-600">Campaigns spanning multiple districts involve higher fuel and transit costs compared to hyper-local single-city roadshows.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-xl text-slate-900 mb-3">Permissions</h4>
                            <p className="text-slate-600">Certain municipal limits, festivals, or election zones require specific local authority permits, which are factored into the final quote.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: Case Studies / Campaign Examples */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center">Successful Campaign Examples</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black">CS</div>
                                <h3 className="text-2xl font-bold text-slate-900">Jewelry Brand Expansion</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                A premier jewelry brand launching a massive showroom in Thrissur required an immediate buzz. We deployed 3 LED Vans for 7 days leading up to the inauguration. The vans circled key arterial roads and parked at prominent junctions during evening rush hours playing a high-quality video teaser.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Result</span>
                                <p className="text-slate-900 font-medium mt-2">Over 15,000 recorded footfalls on inauguration day, with 40% of surveyed customers citing the video vans as their primary awareness source.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black">CS</div>
                                <h3 className="text-2xl font-bold text-slate-900">University Admission Drive</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                An educational institution wanted to target students outside major exam centers across Ernakulam and Kottayam. Two LED vans were strategically parked near major schools and tuition hubs during dispersal times, displaying dynamic course information and scholarship details.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-slate-100">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Result</span>
                                <p className="text-slate-900 font-medium mt-2">A 200% increase in website inquiries via the QR code prominently displayed on the LED screen, validating the hyper-targeted approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 8: FAQ */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <ShieldCheck className="w-16 h-16 text-brand-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-lg text-slate-600">Everything you need to know about booking and executing an LED Van campaign in Kerala.</p>
                    </div>
                    <div className="space-y-4">
                        <FaqItem 
                            question="What is the average cost of LED van advertising in Kerala?" 
                            answer="The LED van advertising cost in Kerala varies based on campaign duration and routing. On average, daily rates range from ₹8,000 to ₹15,000 depending on screen size, fuel requirements, and operational hours. We offer substantial discounts for monthly bookings." 
                        />
                        <FaqItem 
                            question="Can we change the video content during the campaign?" 
                            answer="Yes. One of the greatest advantages of digital LED vans is flexibility. You can update the video content mid-campaign to feature a new daily offer, a different product line, or a localized message for a specific town." 
                        />
                        <FaqItem 
                            question="Do the vans operate in the rain?" 
                            answer="Our LED screens are P3/P4 outdoor-rated, waterproof, and built to withstand Kerala's heavy monsoons. However, during extreme weather conditions or severe storms, operations might be temporarily paused for safety reasons." 
                        />
                        <FaqItem 
                            question="How do we verify the van's location and operations?" 
                            answer="We believe in complete transparency. Our vans are GPS-enabled, and we provide daily progress reports, route logs, and geo-tagged photographs/videos of the van operating in the agreed-upon locations." 
                        />
                        <FaqItem 
                            question="Is audio permitted along with the video display?" 
                            answer="Yes, our vans are equipped with high-quality public address systems. We can play synchronized audio, jingles, or live announcements. However, audio usage is subject to local municipal noise regulations, especially near hospitals, schools, and late at night." 
                        />
                        <FaqItem 
                            question="What video format is required for the LED screen?" 
                            answer="We accept standard video formats like MP4, AVI, and MOV. Our technical team will provide you with the exact aspect ratio and resolution guidelines based on the specific van assigned to your campaign to ensure the content looks sharp and professional." 
                        />
                    </div>
                </div>
            </section>
            
            <LocalSEO />

            {/* CTA */}
            <section className="py-24 bg-white text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Ready to Drive Your Brand Forward?</h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">Join hundreds of successful brands who have dominated the Kerala market using our mobile LED advertising solutions. Let's build a campaign that moves people.</p>
                    <a
                        href="/#contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-10 py-5 text-lg font-black text-white transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/40"
                    >
                        Contact Our Planning Team
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </div>
        </>
    );
};

export default LedVanAdvertising;
