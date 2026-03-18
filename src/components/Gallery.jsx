import React from 'react';
import { motion } from 'framer-motion';
import van1 from '../assets/images/van1.jpg';
import van2 from '../assets/images/van2.jpg';
import van3 from '../assets/images/van3.jpg';

const Gallery = () => {
    const images = [
        { id: 1, src: van1, alt: "LED Van Campaign 1" },
        { id: 2, src: van2, alt: "LED Van Campaign 2" },
        { id: 3, src: van3, alt: "LED Van Campaign 3" }
    ];

    return (
        <section id="gallery" className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        Our <span className="text-brand-primary">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        A glimpse into our successful LED Van campaigns.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group rounded-3xl overflow-hidden shadow-lg h-80"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Optional overlay blending mode layer previously done with ::after */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-xl font-bold text-white tracking-wide">LED Van Campaign</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
