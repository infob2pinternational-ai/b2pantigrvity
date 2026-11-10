import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Megaphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const seoPoints = [
    'Retail & Store Openings: Generate immediate footfall for showroom inaugurations in Thrissur and regional commercial hubs.',
    'Real Estate & Corporate Roadshows: Showcase video tours in prime residential corridors and high-density business districts.',
    'Statewide Brand Activations: Coordinate multi-district mobile roadshows across all 14 Kerala districts.',
];

const LocalSEO = () => {
    return (
        <section className="py-20 md:py-24 bg-[#050914] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] border border-white/10 bg-[#131B2C]/90 p-6 sm:p-8 md:p-16 shadow-2xl backdrop-blur-2xl"
                >
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
                        <div>
                            <div className="flex justify-start mb-8">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <MapPin size={32} className="text-brand-primary" />
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                                LED Van Advertising Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">in Thrissur and across Kerala</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                                Based in Thrissur, B2P International provides mobile LED van advertising, roadshow planning, launch promotions, and targeted outdoor marketing across Kerala. Whether you are looking for an LED van advertisement near Thrissur or planning a high-impact mobile billboard campaign across Kochi, Kozhikode, and Trivandrum, our team delivers strategic route mapping and on-ground execution that connects directly with moving audiences.
                            </p>
                            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-light">
                                Our campaigns are designed for measurable local reach, sustained visibility, and higher brand recall in busy retail corridors, event venues, residential hubs, and key transit junctions.
                            </p>
                            <div className="mt-8">
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        to="/led-van-advertising"
                                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white"
                                    >
                                        Explore LED Van Advertising
                                    </Link>
                                    <Link
                                        to="/locations/thrissur"
                                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:border-brand-primary hover:bg-white/10"
                                    >
                                        Thrissur Operations Hub
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <Target size={22} className="text-brand-secondary" />
                                    <p className="text-lg font-bold">Hyper-Local Route Targeting</p>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                    Custom daily routes mapped through high-footfall junctions, shopping streets, and commercial corridors in Thrissur and across Kerala towns.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <Megaphone size={22} className="text-brand-primary" />
                                    <p className="text-lg font-bold">Proven Campaign Formats</p>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {seoPoints.map((point) => (
                                        <p key={point} className="rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm leading-relaxed text-slate-300">
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <MapPin size={22} className="text-brand-secondary" />
                                    <p className="text-lg font-bold">Operations Hub in Thrissur</p>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                    Centrally headquartered in Puranattukara, Thrissur, we provide prompt fleet deployment, dedicated operators, and reliable campaign coordination across every district in Kerala.
                                </p>
                                <div className="mt-4 flex flex-col gap-3">
                                    <Link
                                        to="/locations"
                                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-brand-primary"
                                    >
                                        Service Areas in Kerala
                                        <span className="text-brand-primary">/locations</span>
                                    </Link>
                                    <Link
                                        to="/locations/thrissur"
                                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-brand-primary"
                                    >
                                        Thrissur Location
                                        <span className="text-brand-primary">/locations/thrissur</span>
                                    </Link>
                                    <Link
                                        to="/locations/kochi"
                                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-brand-primary"
                                    >
                                        Kochi Location
                                        <span className="text-brand-primary">/locations/kochi</span>
                                    </Link>
                                    <Link
                                        to="/locations/kozhikode"
                                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-brand-primary"
                                    >
                                        Kozhikode Location
                                        <span className="text-brand-primary">/locations/kozhikode</span>
                                    </Link>
                                    <Link
                                        to="/locations/trivandrum"
                                        className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm font-bold text-slate-200 transition-colors hover:border-brand-primary"
                                    >
                                        Trivandrum Location
                                        <span className="text-brand-primary">/locations/trivandrum</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LocalSEO;