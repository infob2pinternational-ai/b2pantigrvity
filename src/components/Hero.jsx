import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#050914]"
        >
            {/* Cinematic Media Background (Image / Video) */}
            <div className="absolute inset-0 w-full h-full z-0 bg-[#050914]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    poster="/led-van-advertising.png"
                >
                    <source src="/mobile-led-advertising-van.mp4" type="video/mp4" />
                </video>

                {/* Lighter Dark Overlay for better brightness while keeping text readable */}
                <div className="absolute inset-0 bg-[#050914]/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/20 to-[#050914]/40"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl h-full flex items-center mt-12 lg:mt-0">
                <div className="flex flex-col items-start justify-center w-full h-full lg:h-auto">

                    {/* Left Typography Side - Centered Vertically on the left */}
                    <div className="w-full lg:w-2/3 text-left z-20 pt-20 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                        >
                            <Sparkles size={16} className="text-brand-secondary" />
                            <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">Next-Gen Marketing Agency</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter text-white leading-[1.05]">
                            LED Van Advertising That Makes <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-[length:200%_auto] animate-gradient">
                                Your Brand Impossible to Ignore
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-lg font-light leading-relaxed">
                            Our LED Van Advertising services deliver powerful mobile marketing that captures attention wherever your audience is. With high-resolution LED screens mounted on moving advertising vans, your brand message reaches thousands of people across busy streets, commercial areas, and major events. From product launches to corporate campaigns, our mobile LED advertising solutions maximize visibility and engagement.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-5">
                            <a
                                href="#services"
                                className="group relative px-8 py-4 rounded-full bg-white text-[#050914] font-black overflow-hidden flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Project</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <a href="#trust" aria-label="Scroll down" className="flex justify-center items-start w-6 h-10 border border-white/30 rounded-full p-1 hover:border-brand-primary transition-colors hover:bg-white/5 backdrop-blur-sm">
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-2 bg-brand-primary rounded-full mt-0.5"
                    />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
