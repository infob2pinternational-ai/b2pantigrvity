import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
    // Using all uploaded customer logos
    const clients = [
        { id: 1, name: "Asset Homes", image: "/asset.png" },
        { id: 2, name: "Swiggy", image: "/swiggy.png" },
        { id: 3, name: "LIC", image: "/lic.jpg" },
        { id: 4, name: "VSTAR", image: "/vstar.jpg" },
        { id: 5, name: "KSFE", image: "/ksfe.png" },
        { id: 6, name: "Josco", image: "/josco.png" },
        { id: 7, name: "Nesto Hypermarket", image: "/nesto.png" },
        { id: 8, name: "RBI", image: "/rbi.webp" },
        { id: 9, name: "Tata Motors", image: "/tata-motors.png" },
        { id: 10, name: "Tata", image: "/tata.png" },
        { id: 11, name: "Vasan", image: "/vasan.jpg" },
        { id: 12, name: "Renault", image: "/renault.png" },
        { id: 13, name: "Tanishq", image: "/tanishq.png" },
    ];

    // Duplicate list to make infinite scroll completely seamless
    // Triple it since we only have 5 logos and want to fill wider screens
    const scrollItems = [...clients, ...clients, ...clients];

    return (
        <section className="py-20 bg-slate-900 border-y border-slate-800 relative z-10 overflow-hidden" id="trust">
            {/* Subtle Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <p className="text-center text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-12 flex items-center justify-center gap-4">
                    <span className="w-12 h-px bg-slate-700 hidden md:block"></span>
                    Trusted By Industry Leaders Worldwide
                    <span className="w-12 h-px bg-slate-700 hidden md:block"></span>
                </p>

                {/* Scrolling Marquee Container */}
                <div className="flex overflow-hidden relative w-full max-w-6xl mx-auto">
                    {/* Left/Right Fade Masks for seamless appearance */}
                    <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

                    {/* Animated Scroll Track */}
                    <motion.div
                        className="flex gap-10 md:gap-16 items-center whitespace-nowrap will-change-transform"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                    >
                        {scrollItems.map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="flex items-center justify-center bg-white rounded-2xl p-4 md:p-6 transition-all duration-300 cursor-default hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.3)] hover:scale-105 shrink-0 w-44 md:w-56 h-28 md:h-32 border border-slate-200"
                            >
                                <img
                                    src={client.image}
                                    alt={`${client.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                    title={client.name}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
