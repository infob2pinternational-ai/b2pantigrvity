import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Megaphone, SearchCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const seoPoints = [
    'LED van advertising in Thrissur for store launches, exhibitions, and local promotions.',
    'Mobile LED advertising across Kerala including Kochi, Calicut, Trivandrum, and nearby commercial hubs.',
    'Outdoor advertising support for hypermarkets, jewelry brands, real estate campaigns, and event marketing.',
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
                                B2P International helps brands win attention with mobile LED van advertising, campaign execution, roadshows, launch promotions, and targeted local marketing. If you are searching for LED van advertising near Thrissur, mobile billboard advertising in Kerala, or high-visibility event promotion for retail and real-estate campaigns, our team delivers creative planning and on-ground execution that puts your message directly in front of moving audiences.
                            </p>
                            <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed font-light">
                                Our campaigns are built for measurable local reach, stronger recall, and better visibility in high-footfall areas such as shopping districts, residential corridors, event venues, and commercial centers.
                            </p>
                            <div className="mt-8">
                                <Link
                                    to="/led-van-advertising"
                                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white"
                                >
                                    Explore LED Van Advertising in Thrissur
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <SearchCheck size={22} className="text-brand-secondary" />
                                    <p className="text-lg font-bold">SEO-focused reach</p>
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                    Added keyword-rich content around LED van advertising, mobile advertising, and Kerala location intent to improve discoverability.
                                </p>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                <div className="flex items-center gap-3 text-white">
                                    <Megaphone size={22} className="text-brand-primary" />
                                    <p className="text-lg font-bold">Best-fit campaign types</p>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {seoPoints.map((point) => (
                                        <p key={point} className="rounded-2xl border border-white/10 bg-[#0d1526] px-4 py-3 text-sm leading-relaxed text-slate-300">
                                            {point}
                                        </p>
                                    ))}
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
