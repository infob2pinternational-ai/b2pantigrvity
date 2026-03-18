import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users, Award, ShieldCheck, Globe, Briefcase } from 'lucide-react';

const About = () => {
    const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });

    useEffect(() => {
        // Set SEO Meta Tags for the About Page
        document.title = "About Our LED Van Advertising Company | Mobile LED Advertising Experts";
        
        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "Learn about our company providing LED Van Advertising, mobile LED advertising vans, and LED wall display services for events, promotions, and brand campaigns.");
        }

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

        return () => {
            clearInterval(interval);
            // Revert meta description back to default when leaving About page
            if (metaDescription) {
                metaDescription.setAttribute("content", "Promote your brand with high-impact LED Van Advertising services. Our mobile LED advertising vans and giant LED walls help businesses reach thousands across cities, events, and promotions.");
            }
        };
    }, []);

    const coreValues = [
        {
            title: "Creativity With Impact",
            desc: "We create visually powerful LED advertising campaigns that attract attention and deliver strong brand messaging.",
            icon: Lightbulb
        },
        {
            title: "Client Success Focus",
            desc: "Our priority is helping businesses achieve maximum brand exposure through mobile LED advertising solutions.",
            icon: Users
        },
        {
            title: "Commitment To Quality",
            desc: "We use advanced high-resolution LED screens and professional campaign planning to deliver premium advertising experiences.",
            icon: Award
        }
    ];

    const whyChooseUs = [
        {
            title: "High Visibility Advertising",
            desc: "Our LED advertising vans and LED walls ensure your brand message reaches thousands of people in high-traffic locations.",
            icon: Eye
        },
        {
            title: "Mobile Marketing Advantage",
            desc: "Unlike static billboards, our LED vans move across the city, bringing your advertisement directly to your audience.",
            icon: Briefcase
        },
        {
            title: "Advanced LED Technology",
            desc: "We use high-resolution LED screens that provide bright and clear visuals day and night.",
            icon: Lightbulb
        },
        {
            title: "Complete Campaign Support",
            desc: "From strategy to execution, we manage the entire LED advertising campaign for your brand.",
            icon: ShieldCheck
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
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Who We <span className="text-brand-primary">Are</span></h1>
                        <div className="text-lg text-slate-600 space-y-4 leading-relaxed">
                            <p>
                                We are a leading provider of LED Van Advertising and LED Wall Display solutions based in Thrissur, serving businesses throughout Kerala. We specialize in helping brands reach thousands of people through high-impact outdoor advertising and digital mobile campaigns. Our expertise lies in providing the best LED advertising near you, utilizing mobile vans, digital billboards, and event display services designed to maximize brand visibility.
                            </p>
                            <p>
                                With years of experience in the Kerala outdoor advertising market, we help businesses capture attention in busy city locations, corporate events, and public promotions. Our mission is simple — to help brands stand out and connect with audiences through innovative LED technology across Thrissur and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-10 mt-10 border-t border-slate-100">
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.projects}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Successful Advertising Campaigns</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.clients}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Corporate & Event Clients</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-brand-primary mb-1">{counts.years}+</h3>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Cities Covered With Mobile LED Advertising</p>
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
                <div className="mb-32 relative">
                    {/* Ambient Glowing Orbs Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-40 pointer-events-none z-0 hidden md:block">
                        <div className="absolute top-0 left-10 w-80 h-80 bg-brand-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
                        <div className="absolute top-0 right-10 w-80 h-80 bg-brand-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse delay-700"></div>
                        <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse delay-1000"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10 mx-auto">

                        {/* Mission - Large Glassmorphic Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                            className="md:col-span-8 group"
                        >
                            <div className="h-full bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-10 md:p-14 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8 shadow-sm">
                                    <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></div>
                                    <span className="text-xs font-bold tracking-widest text-slate-800 uppercase">Connecting Global Markets</span>
                                </div>

                                <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Mission</span>
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium max-w-2xl mt-8 border-l-2 border-brand-primary/30 pl-6">
                                    Our mission is to provide businesses with powerful LED advertising solutions that create maximum visibility and audience engagement. Through LED Van Advertising, digital billboards, and LED wall displays, we help brands deliver their message to large audiences in the most impactful way.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium max-w-2xl mt-4 pl-6">
                                    We focus on combining technology, creativity, and strategic campaign planning to produce advertising campaigns that deliver measurable results.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision - Tall Dark Bento Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15, type: "spring", stiffness: 100 }}
                            className="md:col-span-4 group"
                        >
                            <div className="h-full bg-slate-900 rounded-[2.5rem] p-10 md:p-12 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-500 relative flex flex-col justify-between overflow-hidden">
                                {/* Mesh Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-slate-900 to-brand-secondary/30 opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>

                                <div className="relative z-10 mb-8">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20 mb-10 text-brand-primary shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:-translate-y-2 transition-transform duration-500">
                                        <Eye size={32} />
                                    </div>

                                    <h3 className="text-4xl font-black text-white mb-6 tracking-tight">
                                        Our Vision
                                    </h3>
                                </div>

                                <p className="text-slate-300 leading-relaxed text-lg relative z-10 font-light mt-auto">
                                    Our vision is to become a trusted leader in mobile LED advertising and digital outdoor marketing, providing innovative solutions that help brands connect with their audiences across cities, events, and public spaces. 
                                    <br/><br/>
                                    We aim to revolutionize traditional advertising by delivering dynamic LED display campaigns that capture attention and leave lasting impressions.
                                </p>

                                {/* Decorative Dots */}
                                <div className="absolute bottom-10 right-10 flex gap-1.5 z-10">
                                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/60 transition-colors"></div>
                                    <div className="w-2 h-2 rounded-full bg-brand-primary group-hover:scale-150 transition-transform"></div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* 3. Core Values - New Bold Design */}
                <div className="mb-32 relative pt-10">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter"
                        >
                            The <span className="text-brand-primary">B2P Way.</span>
                        </motion.h2>
                        <p className="mt-4 text-slate-600 font-medium">Built on principles that drive real results.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10 px-4 md:px-0 max-w-5xl mx-auto">
                        {coreValues.map((value, idx) => {
                            // Assign unique bold colors to each card
                            const bgColors = [
                                "bg-[#FFEFD5] border-[#FFB649]",
                                "bg-[#E6F4FF] border-[#66B2FF]",
                                "bg-[#F3E8FF] border-[#C084FC]"
                            ];
                            const shadowColors = [
                                "hover:shadow-[-8px_8px_0_0_#FFB649]",
                                "hover:shadow-[-8px_8px_0_0_#66B2FF]",
                                "hover:shadow-[-8px_8px_0_0_#C084FC]"
                            ];
                            const iconColors = [
                                "text-[#F59E0B]",
                                "text-[#3B82F6]",
                                "text-[#8B5CF6]"
                            ];

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className={`group rounded-3xl p-8 md:p-10 border-2 ${bgColors[idx]} ${shadowColors[idx]} shadow-[-4px_4px_0_0_rgba(15,23,42,0.1)] hover:-translate-y-2 hover:translate-x-2 transition-all duration-300 flex flex-col relative overflow-hidden`}
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-150 transition-transform duration-700">
                                        {React.createElement(value.icon, { size: 120 })}
                                    </div>

                                    <div className={`w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-8 border-2 ${bgColors[idx].split(' ')[1]} shadow-sm z-10`}>
                                        {React.createElement(value.icon, { size: 28, className: iconColors[idx] })}
                                    </div>

                                    <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight z-10">{value.title}</h4>

                                    <p className="text-slate-700 leading-snug font-medium z-10">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Why Choose Us - Attractive Asymmetrical Design */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:mt-32">
                    <div className="relative z-10 text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8"
                        >
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary">Choose Us?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        >
                            We specialize in powerful visual displays that capture attention. Our commitment to high-impact LED Van Advertising ensures your message stands out across cities, corporate events, and promotions.
                        </motion.p>

                        {/* Decorative abstract element */}
                        <div className="hidden lg:flex relative w-full h-64 rounded-[2.5rem] bg-gradient-to-br from-brand-primary/5 to-slate-100 border border-slate-200/50 overflow-hidden items-center justify-center shadow-inner group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-noise-cubes opacity-30"></div>

                            <div className="h-32 w-32 bg-white/40 backdrop-blur-3xl rounded-3xl border border-white/50 shadow-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500 hover:scale-110">
                                <span className="text-5xl font-black text-brand-primary drop-shadow-sm">B2P</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10">
                        {/* Ambient glow behind list */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 hidden md:block"></div>

                        {whyChooseUs.map((reason, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.15), duration: 0.6, type: "spring", stiffness: 100 }}
                                className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white hover:border-brand-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(var(--brand-primary-rgb),0.08)] hover:-translate-x-2 transition-all duration-300 text-center md:text-left"
                            >
                                <div className="w-16 h-16 shrink-0 bg-slate-50 flex items-center justify-center rounded-2xl border border-slate-100 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-sm text-brand-primary relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full"></div>
                                    <div className="relative z-10 transform group-hover:scale-125 transition-transform duration-500">
                                        {React.createElement(reason.icon, { size: 28 })}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 mb-2 group-hover:text-brand-primary transition-colors tracking-tight">{reason.title}</h4>
                                    <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{reason.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 5. Cities We Serve - SEO Booster Component */}
                <div className="mt-32 pt-20 border-t border-slate-100 text-center">
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="cities-we-serve py-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Cities We Serve: <span className="text-brand-primary">LED Van Advertising Near You</span></h2>
                        <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed mb-8 text-lg">
                            We bring your brand to life across every corner of <strong>Kerala</strong>. While our operations are 
                            centered in <strong>Thrissur</strong>, our mobile LED advertising vans travel 24/7 to all major districts. 
                            We ensure your campaign gets maximum visibility in high-traffic hubs like <strong>Swaraj Round (Thrissur)</strong>, 
                            <strong>MG Road (Kochi)</strong>, and beyond. From the cultural heart of <strong>Thrissur</strong> to the 
                            busy streets of <strong>Ernakulam, Kozhikode, and Trivandrum</strong>, we are your local partner for 
                            high-impact mobile marketing.
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                <h4 className="font-black text-lg text-brand-primary mb-1">Thrissur</h4>
                                <p className="text-sm font-medium text-slate-500">Local HQ & Full Coverage</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                <h4 className="font-black text-lg text-brand-primary mb-1">Ernakulam</h4>
                                <p className="text-sm font-medium text-slate-500">Kochi & Metro Hubs</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                <h4 className="font-black text-lg text-brand-primary mb-1">Kozhikode</h4>
                                <p className="text-sm font-medium text-slate-500">North Kerala Reach</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-primary/30 transition-colors">
                                <h4 className="font-black text-lg text-brand-primary mb-1">Trivandrum</h4>
                                <p className="text-sm font-medium text-slate-500">Capital City Campaigns</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
