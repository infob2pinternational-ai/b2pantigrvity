import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Megaphone, Radio, Calendar, Zap, Truck, MessageCircle, Bot, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
    const phoneNumber = "919876543210"; // Placeholder WhatsApp number, replace with actual number

    const handleWhatsAppBooking = (serviceName) => {
        const message = `Hello B2P International! I am interested in booking your ${serviceName} service. Could you please provide more information?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const services = [
        {
            id: 1,
            title: "Mobile LED Advertising Vans",
            desc: "Dynamic moving billboards that promote your brand across busy city streets.",
            icon: <Truck size={40} className="text-brand-primary" />,
            delay: 0.1,
            hasBooking: true
        },
        {
            id: 2,
            title: "LED Wall Displays",
            desc: "Large LED screens perfect for corporate events, product launches, concerts, and exhibitions.",
            icon: <Zap size={40} className="text-brand-secondary" />,
            delay: 0.2,
            hasBooking: true
        },
        {
            id: 3,
            title: "Event Marketing Campaigns",
            desc: "Engage audiences with visually stunning LED displays during major events and promotions.",
            icon: <Calendar size={40} className="text-brand-primary" />,
            delay: 0.3,
            hasBooking: true
        },
        {
            id: 4,
            title: "Corporate Advertising Solutions",
            desc: "Custom campaigns designed for businesses looking to maximize brand exposure.",
            icon: <Megaphone size={40} className="text-brand-secondary" />,
            delay: 0.4,
            hasBooking: true
        },
        {
            id: 5,
            title: "Brand Building",
            desc: "Strategic brand development and positioning. We help articulate your unique value proposition to stand out in competitive markets.",
            icon: <Zap size={40} className="text-brand-primary" />,
            delay: 0.5,
            hasBooking: true
        },
        {
            id: 6,
            title: "Public Relations",
            desc: "Effective media and public engagement strategies. We build, manage, and protect your brand's reputation through strategic communication.",
            icon: <Radio size={40} className="text-brand-secondary" />,
            delay: 0.6,
            hasBooking: true
        },
        {
            id: 7,
            title: "AI-Driven Growth Solutions",
            desc: "Scalable AI solutions for the modern enterprise. We build \"Growth Engines\" to automate the mundane and supercharge the strategic.",
            icon: <Bot size={40} className="text-brand-primary" />,
            delay: 0.7,
            hasBooking: true
        },
        {
            id: 8,
            title: "Global Marketing Campaigns",
            desc: "Navigate international market entry and build localized content strategies while leveraging our global B2B cross-border networks.",
            icon: <Globe size={40} className="text-brand-secondary" />,
            delay: 0.8,
            hasBooking: true
        }
    ];

    return (
        <section id="services" className="py-32 bg-[#0B0F19] relative overflow-hidden">
            {/* Ultra Premium Dark Background Elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-color-dodge pointer-events-none"></div>

            {/* Animated Mesh Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-pulse delay-700 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] pointer-events-none hidden lg:block"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
                    >
                        <Zap size={16} className="text-brand-primary" />
                        <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">Our LED Advertising Solutions</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
                    >
                        LED Van Advertising <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 font-light"
                    >
                        Our LED Van Advertising solutions provide one of the most effective outdoor marketing strategies for modern brands. Unlike static billboards, LED advertising vans move through high-traffic areas, ensuring your advertisement reaches a wider audience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-12 gap-x-6 relative">
                    {/* Grid connecting lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.6, type: "easeOut" }}
                            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover:from-brand-primary/50 hover:to-brand-secondary/50 transition-colors duration-500 overflow-hidden h-full"
                        >
                            {/* Inner Glass Card */}
                            <div className="relative h-full bg-[#131B2C]/90 backdrop-blur-2xl rounded-[1.4rem] p-8 lg:p-10 flex flex-col items-start z-10 overflow-hidden">

                                {/* Hover Gradient Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                <div className="relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shrink-0 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.2)] transition-all duration-300">
                                    <div className="absolute inset-0 bg-brand-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                                    {React.cloneElement(service.icon, { className: "text-brand-primary/80 group-hover:text-brand-primary transition-colors z-10", size: 32 })}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-grow font-light text-base group-hover:text-slate-300 transition-colors">{service.desc}</p>

                                <div className="mt-auto w-full relative z-20">
                                    {service.hasBooking ? (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleWhatsAppBooking(service.title);
                                            }}
                                            className="w-full relative overflow-hidden flex items-center justify-between gap-2 py-4 px-6 bg-white/5 border border-white/10 hover:border-brand-primary/50 text-white rounded-xl font-semibold transition-all duration-500 group/btn"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                                            <span className="relative z-10 group-hover/btn:text-white transition-colors">Book Service</span>
                                            <ArrowRight size={20} className="relative z-10 text-brand-primary group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                                        </button>
                                    ) : (
                                        <a href="#contact" className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-secondary transition-colors">
                                            Learn more
                                            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
