import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Award, ShieldCheck, Globe, Briefcase } from 'lucide-react';

const About = () => {
    const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });

    useEffect(() => {
        let currentProjects = 0;
        let currentClients = 0;
        let currentYears = 0;

        const targetProjects = 500;
        const targetClients = 150;
        const targetYears = 12; // 2012 to ~2024/2026

        const interval = setInterval(() => {
            currentProjects += 5;
            currentClients += 2;
            currentYears += 1;

            if (currentProjects > targetProjects) currentProjects = targetProjects;
            if (currentClients > targetClients) currentClients = targetClients;
            if (currentYears > targetYears) currentYears = targetYears;

            setCounts({
                projects: currentProjects,
                clients: currentClients,
                years: currentYears
            });

            if (currentProjects === targetProjects && currentClients === targetClients && currentYears === targetYears) {
                clearInterval(interval);
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    const coreValues = [
        {
            title: "Creativity with Insight",
            desc: "We’re creative and passionate, always pushing the envelope to deliver impactful, smart solutions.",
            icon: Lightbulb
        },
        {
            title: "Client Success as Our Priority",
            desc: "Our clients’ success is our own. We only succeed when they do, so we invest ourselves in understanding each client's business deeply.",
            icon: Users
        },
        {
            title: "Commitment to Quality",
            desc: "We stay updated with the latest industry trends to provide the best solutions. Our commitment is ingrained in our corporate culture.",
            icon: Award
        }
    ];

    const whyChooseUs = [
        {
            title: "Proven Expertise in Brand Engagement",
            desc: "Years of experience in B2B services and event management.",
            icon: Briefcase
        },
        {
            title: "End-to-End Solutions",
            desc: "We manage every step, from initial consultations to project delivery.",
            icon: ShieldCheck
        },
        {
            title: "Strategic Market Reach",
            desc: "An established network that enables global expansion with confidence.",
            icon: Globe
        }
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* 1. Who We Are */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Who We <span className="text-brand-primary">Are</span></h2>
                        <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                            <p>
                                Founded in 2012 and based in Thrissur, Kerala, <strong>B2P International</strong> is a B2B service provider driven by young, dynamic professionals.
                            </p>
                            <p>
                                Our mission is to bridge businesses with the people they serve, linking global markets with a broad approach that meets the evolving needs of customers. By focusing on innovation and upgradation, we connect businesses across borders and help them expand their reach effectively.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-slate-100">
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.projects}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Projects</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.clients}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Clients</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.years}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Exp.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        {/* Placeholder for an office or team image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/80 to-brand-secondary/80 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="B2P Team Collaboration"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center p-10 text-center">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                                <h3 className="text-3xl font-bold text-white mb-2">Since 2012</h3>
                                <p className="text-white/80 font-medium tracking-wide">Connecting Businesses Globally</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-50 rounded-3xl p-10 md:p-12 border border-slate-100 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-brand-primary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To be the best connection between businesses and their customers, offering easy solutions that help them grow worldwide. We love helping brands stand out, connect with people, and succeed in big ways.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-10 md:p-12 text-white shadow-xl hover:shadow-2xl hover:shadow-brand-primary/20 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Decorative subtle circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>

                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-white border border-white/20">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h3>
                        <p className="text-white/90 leading-relaxed text-lg relative z-10">
                            To become a trusted global leader in B2B services, where creativity, insight, and passion come together to build brands and drive success.
                        </p>
                    </motion.div>
                </div>

                {/* 3. Core Values */}
                <div className="mb-24">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900"
                        >
                            Our <span className="text-brand-primary">Core Values</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/30 hover:-translate-y-2 transition-transform duration-300 text-center group"
                            >
                                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/5 transition-all duration-300">
                                    {React.createElement(value.icon, { size: 36, className: "text-brand-primary" })}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. Why Choose Us */}
                <div>
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black text-slate-900"
                        >
                            Why <span className="text-brand-secondary">Choose Us?</span>
                        </motion.h2>
                    </div>

                    <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {whyChooseUs.map((reason, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="flex justify-center md:justify-start mb-6">
                                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20">
                                            {React.createElement(reason.icon, { size: 28 })}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                                    <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
