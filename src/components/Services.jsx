import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Megaphone, Radio, Calendar, Zap, Truck, MessageCircle } from 'lucide-react';

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
            title: "Printing Services",
            desc: "High-quality print solutions for promotional materials. From brochures to large-format banners, we ensure your brand looks its best in print.",
            icon: <Printer size={40} className="text-brand-primary" />,
            delay: 0.1,
            hasBooking: true
        },
        {
            id: 2,
            title: "Marketing Campaigns",
            desc: "Customized campaigns to reach your audience directly. We design targeted strategies across platforms to maximize engagement and ROI.",
            icon: <Megaphone size={40} className="text-brand-secondary" />,
            delay: 0.2,
            hasBooking: true
        },
        {
            id: 3,
            title: "Public Relations",
            desc: "Effective media and public engagement strategies. We build, manage, and protect your brand's reputation through strategic communication.",
            icon: <Radio size={40} className="text-brand-primary" />,
            delay: 0.3,
            hasBooking: true
        },
        {
            id: 4,
            title: "Corporate Events",
            desc: "Professional event planning and execution. We create memorable corporate gatherings, conferences, and product launches end-to-end.",
            icon: <Calendar size={40} className="text-brand-secondary" />,
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
            title: "On-Road Mobility Vans",
            desc: "Mobile advertising vans for dynamic engagement. High-impact mobile physical reach, taking your brand directly to the streets.",
            icon: <Truck size={40} className="text-brand-secondary" />,
            delay: 0.6,
            hasBooking: true
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        Our <span className="text-brand-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        A comprehensive suite of solutions tailored to elevate your brand profile and connect with your target audience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-300 flex flex-col items-start h-full"
                        >
                            {/* Glowing border top effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-t-3xl"></div>

                            <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>

                            <div className="mt-auto w-full">
                                {service.hasBooking ? (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleWhatsAppBooking(service.title);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-brand-primary text-white hover:bg-brand-secondary hover:-translate-y-1 rounded-xl font-bold transition-all duration-300 shadow-md shadow-brand-primary/20 hover:shadow-brand-secondary/40 group/btn"
                                    >
                                        Book Now
                                    </button>
                                ) : (
                                    <a href="#contact" className="inline-flex items-center text-brand-primary font-semibold group-hover:text-brand-secondary transition-colors">
                                        Learn more
                                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
