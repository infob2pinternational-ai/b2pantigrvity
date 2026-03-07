import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Quote } from 'lucide-react';

const SocialProof = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Metric Highlight */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center p-12 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-colors duration-500"></div>

                        <TrendingUp size={48} className="text-brand-primary mb-6" />
                        <h3 className="text-6xl font-black text-slate-900 mb-2">40<span className="text-brand-primary">%</span></h3>
                        <p className="text-xl font-medium text-slate-600 text-center">Average Increase in Client Brand Awareness</p>
                    </motion.div>

                    {/* Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <Quote size={40} className="text-slate-200 mb-6" />
                        <p className="text-2xl font-light text-slate-800 leading-relaxed mb-8 italic">
                            "B2P International completely transformed our marketing approach. Their LED vans brought unprecedented foot traffic, and their AI-driven strategies scaled our digital presence beyond expectations."
                        </p>
                        <div>
                            <p className="text-lg font-bold text-slate-900">Sarah Jenkins</p>
                            <p className="text-slate-500">Marketing Director, TechCorp</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SocialProof;
