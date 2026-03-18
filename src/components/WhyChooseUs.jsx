import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Image as ImageIcon, Briefcase, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Maximum Visibility",
            desc: "Your advertisement travels through high-traffic areas, reaching thousands of potential customers daily.",
            icon: <Eye size={32} className="text-brand-primary" />
        },
        {
            title: "High-Impact Visuals",
            desc: "Bright LED screens ensure your message stands out both day and night.",
            icon: <ImageIcon size={32} className="text-brand-secondary" />
        },
        {
            title: "Flexible Advertising",
            desc: "Perfect for political campaigns, brand promotions, product launches, and corporate events.",
            icon: <Briefcase size={32} className="text-brand-primary" />
        },
        {
            title: "Targeted Marketing",
            desc: "Reach specific locations where your audience is most active.",
            icon: <MapPin size={32} className="text-brand-secondary" />
        }
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 border-b border-slate-100 pb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6"
                    >
                        <Eye size={16} className="text-brand-primary" />
                        <span className="text-sm font-bold tracking-widest text-slate-500 uppercase">Our Advantages</span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">LED Van Advertising in Thrissur?</span>
                    </motion.h2>
                    <p className="mx-auto max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600">
                        Businesses across Thrissur and Kerala use our mobile LED campaigns to reach local shoppers, event audiences, launch crowds, and high-footfall city routes with stronger recall than static outdoor placements.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-light">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
