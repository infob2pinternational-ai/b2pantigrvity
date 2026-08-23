import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Printer,
    Megaphone,
    Radio,
    Calendar,
    Zap,
    Truck,
    MessageCircle,
    Bot,
    ArrowRight,
    Video,
    Palette,
    Monitor,
    Building,
    PersonStanding,
    Car,
    Search,
    Sparkles,
    CheckCircle2,
    PhoneCall,
    ChevronDown,
    SlidersHorizontal,
    Star,
    Layers
} from 'lucide-react';
import Seo from './Seo';
import {
    buildBreadcrumbSchema,
    buildFaqSchema,
    buildServiceSchema,
    buildWebPageSchema,
    localBusinessSchema,
} from '../lib/seo';

const SERVICES_TITLE = 'Advertising, Video Production, Signage & Printing Services Thrissur Kerala | B2P International';
const SERVICES_DESCRIPTION =
    'Explore B2P International advertising & marketing solutions across Thrissur and Kerala: Mobile LED Van Advertising, Lookwalkers, LED Wall Rental, Corporate Video Production, Creative Graphic Design, Commercial Printing, 3D Acrylic Signage Boards, and Outdoor Hoardings.';

const serviceFaqs = [
    {
        question: 'What marketing & advertising services does B2P International offer in Kerala?',
        answer: 'We provide full 360° advertising services across Kerala including Mobile LED Van Advertising, Lookwalkers, LED Wall Rentals, Corporate Video Production, Creative Graphic Designing, Commercial Printing (flyers, brochures, visiting cards), 3D Signage Fabrication, and Outdoor Billboard Advertising.',
    },
    {
        question: 'Where do you provide LED van and mobile advertising services?',
        answer: 'We provide mobile LED van advertising and roadshow promotions throughout Thrissur, Kochi, Kozhikode, Trivandrum, and all major commercial centers in Kerala.',
    },
    {
        question: 'Do you offer custom 3D signage and shop board fabrication in Thrissur?',
        answer: 'Yes! We design, fabricate, and install Acrylic Sign Boards, 3D LED Letters, Glow Sign Boards, Shop Name Boards, and Directional Signages tailored for businesses across Thrissur and Kerala.',
    },
    {
        question: 'Can you handle commercial video production and ad shoots for brands?',
        answer: 'Absolutely. Our creative team produces high-impact Corporate Videos, Promotional Ad Shoots, Event Coverage reels, Social Media Videos, and Motion Graphics optimized for TV, LED screens, and digital campaigns.',
    },
    {
        question: 'How quickly can a mobile LED van or print campaign be deployed in Kerala?',
        answer: 'Mobile LED vans and Lookwalker roadshows can be deployed within 24-48 hours of artwork confirmation. Print orders (flyers, brochures) are processed with fast-turnaround delivery across Kerala.',
    },
];

const categories = [
    { id: 'all', label: 'All Services', icon: <Layers size={18} /> },
    { id: 'outdoor', label: 'Mobile & Outdoor', icon: <Truck size={18} /> },
    { id: 'video', label: 'Video & Media', icon: <Video size={18} /> },
    { id: 'design_print', label: 'Design & Printing', icon: <Printer size={18} /> },
    { id: 'signage', label: '3D Signage', icon: <Monitor size={18} /> },
    { id: 'digital', label: 'Digital & Growth', icon: <MessageCircle size={18} /> },
];

const services = [
    {
        id: 1,
        title: "Mobile LED Advertising Vans",
        category: "outdoor",
        desc: "Dynamic moving billboards with ultra-bright LED screens, audio system, and GPS tracking to dominate city streets.",
        icon: <Truck size={32} className="text-brand-primary" />,
        image: "/led-van-advertising.png",
        badge: "🔥 High Demand",
        highlights: [
            "14 Kerala Districts Coverage",
            "High Brightness Daylight Video",
            "Custom Route & Audio Setup"
        ],
        link: "/led-van-advertising",
        hasBooking: true
    },
    {
        id: 2,
        title: "LED Wall Displays & Video Walls",
        category: "outdoor",
        desc: "High-resolution indoor and outdoor modular LED video screens for concerts, corporate events, and rallies.",
        icon: <Zap size={32} className="text-brand-secondary" />,
        image: "/led-wall-1.jpg",
        badge: "⚡ Event Favorite",
        highlights: [
            "Indoor & Outdoor Event Screens",
            "Custom Size Modular Setup",
            "Full On-Site Tech Support"
        ],
        link: "/led-wall",
        hasBooking: true
    },
    {
        id: 3,
        title: "Lookwalker & iWalker Advertising",
        category: "outdoor",
        desc: "Illuminated mobile backpack displays carried by trained promoters into high-footfall markets, malls, and events.",
        icon: <PersonStanding size={32} className="text-brand-primary" />,
        image: "/lookwalker-demo.jpg",
        badge: "🚶 Hyper-Local",
        highlights: [
            "Front & Back Lit Displays",
            "Trained Brand Ambassadors",
            "Direct Flyer Distribution"
        ],
        link: "/lookwalker-advertising",
        hasBooking: true
    },
    {
        id: 4,
        title: "Vehicle Branding & Car Wraps",
        category: "outdoor",
        desc: "Professional vehicle wraps for commercial trucks, cars, taxis, and autos using weatherproof, fade-resistant vinyl.",
        icon: <Car size={32} className="text-brand-secondary" />,
        image: "/vehicle-branding-hero-1.jpg",
        badge: "🚗 Long Lasting",
        highlights: [
            "Full & Partial Vinyl Wraps",
            "Custom Design & Installation",
            "Fleet Advertising Solutions"
        ],
        link: "/vehicle-branding",
        hasBooking: true
    },
    {
        id: 5,
        title: "Corporate Video Production",
        category: "video",
        desc: "End-to-end commercial ad shoots, corporate films, product launch videos, and social media reels filmed in crisp 4K.",
        icon: <Video size={32} className="text-brand-primary" />,
        image: "/video-production-preview.jpg",
        badge: "🎬 4K Cinematic",
        highlights: [
            "Corporate & Brand Ad Shoots",
            "Motion Graphics & Editing",
            "Event Coverage & Social Reels"
        ],
        hasBooking: true
    },
    {
        id: 6,
        title: "Creative Graphic Designing",
        category: "design_print",
        desc: "High-impact visual identity, logo design, campaign posters, social media graphics, and in-shop branding artwork.",
        icon: <Palette size={32} className="text-brand-secondary" />,
        badge: "🎨 Custom Design",
        highlights: [
            "Brand Identity & Logo Design",
            "Social Media Creative Kits",
            "Print-Ready High-Res Artwork"
        ],
        hasBooking: true
    },
    {
        id: 7,
        title: "Commercial Printing Solutions",
        category: "design_print",
        desc: "High-speed offset & digital printing for flyers, brochures, dangles, visiting cards, pamphlets, and letterheads.",
        icon: <Printer size={32} className="text-brand-primary" />,
        image: "/printing-preview.jpg",
        badge: "🖨️ Premium Finish",
        highlights: [
            "Flyers, Pamphlets & Brochures",
            "Visiting Cards & Letterheads",
            "Fast Delivery Across Kerala"
        ],
        hasBooking: true
    },
    {
        id: 8,
        title: "3D Acrylic Signage & Shop Boards",
        category: "signage",
        desc: "Custom 3D illuminated acrylic LED letters, glow sign boards, shopfront nameplates, and directional signs.",
        icon: <Monitor size={32} className="text-brand-secondary" />,
        image: "/signage-preview.jpg",
        badge: "✨ Illuminated 3D",
        highlights: [
            "3D Acrylic & LED Channel Letters",
            "Weatherproof Glow Sign Boards",
            "Professional On-Site Installation"
        ],
        hasBooking: true
    },
    {
        id: 9,
        title: "Outdoor Billboards & Hoardings",
        category: "outdoor",
        desc: "Prime hoarding spots, mini billboards, traffic island branding, and highway kiosks across key Kerala cities.",
        icon: <Building size={32} className="text-brand-primary" />,
        badge: "📍 Prime Locations",
        highlights: [
            "High Traffic Highway Spots",
            "City Junction Kiosks",
            "Flexible Rental Durations"
        ],
        hasBooking: true
    },
    {
        id: 10,
        title: "WhatsApp Bulk Messaging",
        category: "digital",
        desc: "Instant targeted campaign outreach to thousands of verified Kerala customers with rich media images and call buttons.",
        icon: <MessageCircle size={32} className="text-brand-primary" />,
        badge: "💬 Instant Reach",
        highlights: [
            "Verified Target Contact Lists",
            "Rich Image & Video Messages",
            "Interactive Call-To-Action"
        ],
        link: "/whatsapp-bulk-messaging",
        hasBooking: true
    },
    {
        id: 11,
        title: "AI-Driven Growth Solutions",
        category: "digital",
        desc: "Automated customer acquisition, AI chatbots, data analytics, and digital lead engines for modern businesses.",
        icon: <Bot size={32} className="text-brand-primary" />,
        image: "/ai-growth.png",
        badge: "🤖 Next-Gen AI",
        highlights: [
            "Lead Generation Automation",
            "AI Customer Support Bots",
            "Performance Analytics"
        ],
        hasBooking: true
    },
    {
        id: 12,
        title: "Event & Roadshow Marketing",
        category: "outdoor",
        desc: "Turnkey promotional activations combining LED vans, Lookwalkers, sound systems, and promoter teams for launches.",
        icon: <Calendar size={32} className="text-brand-primary" />,
        badge: "🎉 Full Activation",
        highlights: [
            "Product Launch Campaigns",
            "Mall & Festival Roadshows",
            "Complete On-Ground Execution"
        ],
        hasBooking: true
    },
    {
        id: 13,
        title: "Corporate Advertising Solutions",
        category: "digital",
        desc: "Strategic multi-channel advertising campaigns tailored to enterprise clients seeking regional market leadership.",
        icon: <Megaphone size={32} className="text-brand-secondary" />,
        image: "/global-marketing.png",
        badge: "📊 Enterprise 360°",
        highlights: [
            "Multi-Media Strategy",
            "Targeted Regional Campaigns",
            "Dedicated Campaign Manager"
        ],
        hasBooking: true
    },
    {
        id: 14,
        title: "Public Relations & Media Strategy",
        category: "digital",
        desc: "Press release dissemination, newspaper coverage, digital PR, and event media coordination across Kerala.",
        icon: <Radio size={32} className="text-brand-secondary" />,
        badge: "📰 Media Coverage",
        highlights: [
            "Kerala Print & TV Media PR",
            "Press Conference Setup",
            "Brand Reputation Management"
        ],
        hasBooking: true
    }
];

const Services = () => {
    const heroImages = [
        {
            src: "/services-hero-1.jpg",
            title: "Your Brand. Our Solutions. Maximum Impact.",
            tag: "Moving Vans to Mega Screens"
        },
        {
            src: "/services-hero-2.jpg",
            title: "Big Screen. Bigger Impact. LED Wall & Signage Solutions",
            tag: "Outdoor & Event Solutions"
        },
        {
            src: "/services-hero-3.jpg",
            title: "360° Advertising, Printing, Video Production & Signage",
            tag: "Kerala Wide 360° Reach"
        }
    ];

    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const phoneNumber = "918589909034";

    const handleWhatsAppBooking = (serviceName) => {
        const message = `Hello B2P International! I would like to get a quote and details for your ${serviceName} service in Kerala.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const filteredServices = services.filter((service) => {
        const matchesCategory = activeTab === 'all' || service.category === activeTab;
        const matchesSearch =
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Seo
                title={SERVICES_TITLE}
                description={SERVICES_DESCRIPTION}
                keywords="LED van advertising Thrissur, lookwalker advertising Kerala, video production agency Thrissur, corporate video shoots Kerala, creative design agency Thrissur, brochure printing Thrissur, printing solutions Kerala, 3D signage boards Thrissur, acrylic LED letter sign boards Kerala, outdoor hoarding billboard advertising Thrissur"
                path="/services"
                schema={[
                    localBusinessSchema,
                    buildWebPageSchema({
                        name: SERVICES_TITLE,
                        description: SERVICES_DESCRIPTION,
                        path: '/services',
                        type: 'CollectionPage',
                    }),
                    buildServiceSchema({
                        name: '360° Advertising, Signage, Video Production & Printing Services in Thrissur and Kerala',
                        description: SERVICES_DESCRIPTION,
                        path: '/services',
                    }),
                    buildBreadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Services', path: '/services' },
                    ]),
                    buildFaqSchema(serviceFaqs),
                ]}
            />

            <div className="bg-[#0B0F19] min-h-screen text-slate-100 relative overflow-hidden">
                {/* Background Ambient Glows & Mesh Grids */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--brand-primary-rgb),0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_40%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Hero Header Section */}
                <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 z-10 overflow-hidden min-h-[85vh] flex flex-col justify-center">
                    {/* Background Dynamic Image Crossfade */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <div className="absolute inset-0 bg-[#0B0F19]"></div>
                        {heroImages.map((img, idx) => (
                            <img
                                key={img.src}
                                src={img.src}
                                alt={img.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-[0.70]' : 'opacity-0'}`}
                                loading={idx === 0 ? "eager" : "lazy"}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-[#0B0F19]/80"></div>
                    </div>

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-6"
                        >
                            <Sparkles size={16} className="text-brand-secondary" />
                            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
                                360° Advertising & Branding Solutions
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight max-w-5xl"
                        >
                            Transform Your Brand with Our <br className="hidden md:inline" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary">
                                Premium Services
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                        >
                            From dynamic mobile LED vans and 3D acrylic signage to 4K video production and commercial printing — we deliver complete advertising solutions across all 14 districts of Kerala.
                        </motion.p>

                        {/* Search Input Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="w-full max-w-2xl relative mb-12"
                        >
                            <div className="relative flex items-center">
                                <Search className="absolute left-5 text-slate-400" size={22} />
                                <input
                                    type="text"
                                    placeholder="Search any service (e.g. LED Van, Video Shoot, 3D Signage, Printing)..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 backdrop-blur-xl transition-all shadow-xl text-base"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 text-xs font-semibold px-3 py-1 bg-white/20 hover:bg-white/30 rounded-lg text-slate-200 transition-colors"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
                        </motion.div>

                        {/* Floating Stats Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="flex flex-col items-center p-3 border-r border-white/10 last:border-0 md:last:border-r">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-400">500+</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Campaigns Executed</span>
                            </div>
                            <div className="flex flex-col items-center p-3 border-r border-white/10 md:border-r">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-secondary">14</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Kerala Districts</span>
                            </div>
                            <div className="flex flex-col items-center p-3 border-r border-white/10 last:border-0">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-purple-400">100%</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Full Setup Included</span>
                            </div>
                            <div className="flex flex-col items-center p-3">
                                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">4.9 ★</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Client Rating</span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Filter Tabs Section */}
                <section className="relative z-20 pb-8">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="flex items-center justify-center gap-3 flex-wrap bg-white/5 border border-white/10 p-3 rounded-2xl backdrop-blur-xl max-w-5xl mx-auto">
                            {categories.map((cat) => {
                                const count = cat.id === 'all'
                                    ? services.length
                                    : services.filter(s => s.category === cat.id).length;
                                const isActive = activeTab === cat.id;

                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/20 scale-105'
                                                : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                    >
                                        {cat.icon}
                                        <span>{cat.label}</span>
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'}`}>
                                            {count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section className="py-12 relative z-10">
                    <div className="container mx-auto px-6 max-w-7xl">
                        {filteredServices.length === 0 ? (
                            <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10 max-w-2xl mx-auto">
                                <SlidersHorizontal size={48} className="text-slate-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
                                <p className="text-slate-400 mb-6">No matching service found for "{searchQuery}". Try searching another keyword.</p>
                                <button
                                    onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                                    className="px-6 py-3 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/80 transition-colors"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        ) : (
                            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <AnimatePresence>
                                    {filteredServices.map((service, index) => (
                                        <motion.div
                                            key={service.id}
                                            layout
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent hover:from-brand-primary/60 hover:to-brand-secondary/60 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl hover:shadow-brand-primary/10"
                                        >
                                            <div className="relative h-full bg-[#131B2C]/90 backdrop-blur-2xl rounded-[1.4rem] overflow-hidden flex flex-col z-10">
                                                
                                                {/* Header Image Preview or Gradient Box */}
                                                {service.image ? (
                                                    <div className="relative aspect-[16/9] overflow-hidden group/img">
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-[#131B2C] via-[#131B2C]/40 to-transparent"></div>
                                                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-primary/90 backdrop-blur-md text-white shadow-lg uppercase tracking-wider">
                                                            {service.badge}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="relative p-6 bg-gradient-to-br from-white/10 to-white/5 border-b border-white/10 flex items-center justify-between">
                                                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center shadow-lg">
                                                            {service.icon}
                                                        </div>
                                                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/10 backdrop-blur-md text-slate-200 border border-white/15 uppercase tracking-wider">
                                                            {service.badge}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Card Content Body */}
                                                <div className="p-8 flex flex-col flex-grow">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        {service.image && (
                                                            <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                                                                {React.cloneElement(service.icon, { size: 24 })}
                                                            </div>
                                                        )}
                                                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                                            {service.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                                        {service.desc}
                                                    </p>

                                                    {/* Key Bullet Highlights */}
                                                    {service.highlights && (
                                                        <ul className="space-y-2 mb-8 mt-auto pt-4 border-t border-white/10">
                                                            {service.highlights.map((h, i) => (
                                                                <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                                                    <CheckCircle2 size={15} className="text-brand-primary shrink-0" />
                                                                    <span>{h}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {/* Action Buttons */}
                                                    <div className="mt-auto flex flex-col gap-3 pt-2">
                                                        {service.link && (
                                                            <Link
                                                                to={service.link}
                                                                className="w-full flex items-center justify-between py-3 px-5 bg-brand-primary/10 border border-brand-primary/40 hover:border-brand-primary text-brand-primary hover:text-white hover:bg-brand-primary rounded-xl font-bold text-sm transition-all duration-300 group/link"
                                                            >
                                                                <span>Explore Service Details</span>
                                                                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                                            </Link>
                                                        )}
                                                        <button
                                                            onClick={() => handleWhatsAppBooking(service.title)}
                                                            className="w-full flex items-center justify-between py-3 px-5 bg-white/5 border border-white/10 hover:border-brand-secondary/50 text-white rounded-xl font-bold text-sm hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary transition-all duration-300 group/btn"
                                                        >
                                                            <span className="flex items-center gap-2">
                                                                <MessageCircle size={18} className="text-emerald-400 group-hover/btn:text-white transition-colors" />
                                                                Book / Get Free Quote
                                                            </span>
                                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* FAQ Accordion Section */}
                <section className="py-20 relative z-10 border-t border-white/10 bg-[#070A12]">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-primary/10 border border-brand-primary/30 text-brand-primary uppercase tracking-widest mb-4 inline-block">
                                Have Questions?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Questions</span>
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Quick answers regarding our advertising timelines, pricing, and Kerala campaign planning.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {serviceFaqs.map((faq, index) => {
                                const isOpen = openFaqIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="rounded-2xl border border-white/10 bg-[#131B2C]/90 overflow-hidden transition-colors"
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                            className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors focus:outline-none"
                                        >
                                            <span className="font-bold text-white text-lg">{faq.question}</span>
                                            <div className={`p-2 rounded-full bg-white/5 text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-primary/20' : ''}`}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/5 pt-4 text-base font-light">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Instant Consultation Bottom Banner */}
                <section className="py-20 relative z-10">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="relative rounded-3xl p-10 md:p-14 bg-gradient-to-r from-brand-primary/20 via-brand-secondary/20 to-purple-900/20 border border-white/20 backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent pointer-events-none"></div>

                            <div className="relative z-10 max-w-2xl text-left">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white uppercase tracking-wider mb-4 inline-block border border-white/15">
                                    Instant Campaign Consultation
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                                    Ready to Launch Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-cyan-400 to-brand-secondary">Kerala Campaign?</span>
                                </h3>
                                <p className="text-slate-300 text-lg font-light">
                                    Talk directly with our campaign specialists for route selection, venue permits, video production rates, and customized packages.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                                <button
                                    onClick={() => handleWhatsAppBooking('Custom Marketing Campaign')}
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300"
                                >
                                    <MessageCircle size={20} />
                                    WhatsApp Us Now
                                </button>
                                <a
                                    href="tel:+918589909034"
                                    className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
                                >
                                    <PhoneCall size={20} />
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Services;
