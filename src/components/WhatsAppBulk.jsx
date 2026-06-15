import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown, MessageCircle, Users, Zap, BarChart2 } from 'lucide-react';
import LocalSEO from './LocalSEO';
import TrustBar from './TrustBar';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildWebPageSchema, buildFaqSchema, localBusinessSchema } from '../lib/seo';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
            >
                <span className="font-bold text-slate-900">{question}</span>
                <ChevronDown className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div
                    className="px-6 pb-4 text-slate-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
        </div>
    );
};

const TITLE = 'WhatsApp Bulk Messaging Service Kerala | Bulk WhatsApp Marketing | B2P International';
const DESCRIPTION = 'Reach thousands of customers instantly with WhatsApp bulk messaging in Kerala. B2P International offers affordable bulk WhatsApp marketing for product launches, events, and political campaigns across all 14 Kerala districts.';

const WhatsAppBulk = () => {

    const features = [
        {
            title: 'Instant Mass Reach',
            desc: 'Send promotional messages, offers, images, PDFs, and videos to thousands of customers in seconds. WhatsApp bulk messaging delivers your message directly to the customer\'s phone — no algorithms, no feed, no delay. It is the fastest way to reach your audience in Kerala.',
            icon: <Zap size={32} className="text-brand-primary" />,
        },
        {
            title: 'All Media Formats Supported',
            desc: 'Go beyond plain text. Our WhatsApp bulk messaging service supports images, PDF brochures, video clips, audio messages, and clickable links. Send your product catalogue, event invitation, or promotional video directly to thousands of contacts at once.',
            icon: <MessageCircle size={32} className="text-brand-secondary" />,
        },
        {
            title: 'Targeted Contact Lists',
            desc: 'We can send messages to your own contact database or help you reach targeted audiences by district, profession, or interest across Kerala. Whether you want to target Thrissur businessmen, Kochi event-goers, or voters across a constituency — we tailor the campaign for maximum impact.',
            icon: <Users size={32} className="text-brand-primary" />,
        },
        {
            title: 'Campaign Reports & Delivery Tracking',
            desc: 'After every campaign we provide a detailed delivery report showing how many messages were sent, delivered, and read. This lets you measure your return on investment and refine future campaigns for even better results.',
            icon: <BarChart2 size={32} className="text-brand-secondary" />,
        },
    ];

    const useCases = [
        {
            title: 'Product Launches',
            desc: 'Announce a new product to thousands of potential buyers in Kerala instantly. Share product images, pricing, and buy-now links via WhatsApp for maximum first-day impact. Ideal for FMCG brands, consumer electronics, pharma companies, and retailers launching in Kerala.',
        },
        {
            title: 'Event Promotions',
            desc: 'Promote concerts, exhibitions, trade fairs, cultural events, and Onam celebrations to a large audience quickly. Send event flyers, venue details, and ticket links as a WhatsApp blast to targeted contacts across one or multiple Kerala districts.',
        },
        {
            title: 'Political Campaigns',
            desc: 'Reach voters directly on their phones during elections. Our WhatsApp bulk messaging for political campaigns in Kerala delivers your candidate\'s message, rally schedule, and campaign videos to thousands of voters across entire constituencies — fast, affordable, and measurable.',
        },
        {
            title: 'Business Offers & Promotions',
            desc: 'Run flash sales, festive offers, and loyalty promotions for your business via WhatsApp. Restaurants, retail shops, real estate companies, educational institutes, and service providers across Kerala use bulk WhatsApp marketing to drive footfall and conversions.',
        },
    ];

    const faqItems = [
        {
            question: 'What is WhatsApp bulk messaging?',
            answer: 'WhatsApp bulk messaging is the process of sending promotional messages, images, videos, or PDFs to a large number of contacts simultaneously via WhatsApp. It is one of the most effective digital marketing tools in Kerala because of the extremely high WhatsApp usage across the state.',
        },
        {
            question: 'How many messages can be sent in one campaign?',
            answer: 'We can send from a few hundred to several lakh messages depending on your campaign size and requirements. Contact B2P International to discuss your target audience size and we will design the right campaign for you.',
        },
        {
            question: 'What types of content can be sent via bulk WhatsApp?',
            answer: 'We support plain text messages, images (JPG/PNG), PDF documents, video clips, audio files, and clickable web links. You can send product catalogues, event invitations, promotional offers, campaign videos, and more.',
        },
        {
            question: 'Is WhatsApp bulk messaging legal in India?',
            answer: 'Bulk WhatsApp marketing is legal in India when messages are sent to opted-in contacts or through compliant channels. B2P International follows responsible messaging practices. We recommend using your own customer database for best results and compliance.',
        },
        {
            question: 'What is the cost of WhatsApp bulk messaging in Kerala?',
            answer: 'Pricing depends on the number of messages, content type, and campaign duration. Contact B2P International at +91 85899 09034 for a customised quote based on your campaign requirements and budget.',
        },
    ];

    const districts = [
        'Thrissur', 'Ernakulam', 'Kozhikode', 'Malappuram',
        'Palakkad', 'Kannur', 'Kottayam', 'Alappuzha',
        'Thiruvananthapuram', 'Kollam', 'Pathanamthitta',
        'Idukki', 'Wayanad', 'Kasaragod',
    ];

    return (
        <>
            <Seo
                title={TITLE}
                description={DESCRIPTION}
                path="/whatsapp-bulk-messaging"
                schema={[
                    localBusinessSchema,
                    buildWebPageSchema({
                        name: TITLE,
                        description: DESCRIPTION,
                        path: '/whatsapp-bulk-messaging',
                        type: 'WebPage',
                    }),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'WhatsApp Bulk Messaging Kerala',
                        description: 'Bulk WhatsApp marketing service for product launches, events, and political campaigns across all 14 districts of Kerala.',
                        serviceType: 'WhatsApp Bulk Messaging',
                        url: 'https://www.b2pinternational.com/whatsapp-bulk-messaging',
                        provider: {
                            '@type': 'LocalBusiness',
                            name: 'B2P International',
                            url: 'https://www.b2pinternational.com',
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Thrissur' },
                            { '@type': 'City', name: 'Kochi' },
                            { '@type': 'City', name: 'Kozhikode' },
                            { '@type': 'City', name: 'Malappuram' },
                            { '@type': 'State', name: 'Kerala' },
                        ],
                    },
                    buildFaqSchema(faqItems),
                    buildBreadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'WhatsApp Bulk Messaging', path: '/whatsapp-bulk-messaging' },
                    ]),
                ]}
            />

            <div className="bg-slate-50 min-h-screen">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[80vh] flex flex-col justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,211,102,0.15),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_40%)]" />

                    <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8"
                        >
                            <Sparkles size={16} className="text-brand-secondary" />
                            <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">WhatsApp Bulk Messaging Kerala</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-tight max-w-5xl mx-auto"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">WhatsApp Bulk Messaging</span> — Reach All of Kerala Instantly
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                        >
                            B2P International offers WhatsApp bulk messaging services across all 14 districts of Kerala. Send promotional messages, product offers, event invitations, and campaign videos directly to thousands of customers — instantly, affordably, and measurably.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300"
                            >
                                Get a Free Quote
                                <ArrowRight size={20} />
                            </a>
                            <a
                                href="/services"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                            >
                                View Our Services
                            </a>
                        </motion.div>
                    </div>
                </section>

                <TrustBar />

                {/* What is WhatsApp Bulk Messaging */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Why WhatsApp Marketing Works in Kerala</h2>
                                <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center">
                                    <p>
                                        Kerala has one of the highest smartphone and WhatsApp penetration rates in India. Nearly every adult in Kerala — across Thrissur, Kochi, Kozhikode, Malappuram, and all 14 districts — uses WhatsApp daily. This makes bulk WhatsApp messaging the most direct and effective way to reach your target audience.
                                    </p>
                                    <p>
                                        Unlike email marketing or social media ads, WhatsApp messages are opened almost immediately. Studies show WhatsApp messages have an open rate of over 90% — far higher than email or SMS. When you send a WhatsApp blast through B2P International, your message lands directly in your customer's hands within seconds.
                                    </p>
                                    <p>
                                        B2P International has been delivering bulk WhatsApp campaigns across Kerala for businesses, event organisers, political parties, and brands of all sizes. We handle everything — from content preparation to delivery and reporting.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Feature Cards */}
                <section className="py-24 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What We Offer</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group shadow-sm"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-light">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200"
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">How It Works</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        { step: '01', text: 'Share your contact list or tell us your target audience and district' },
                                        { step: '02', text: 'Send us your message content — text, image, video, or PDF' },
                                        { step: '03', text: 'We prepare and schedule your WhatsApp bulk campaign' },
                                        { step: '04', text: 'Messages are delivered to thousands of contacts instantly' },
                                        { step: '05', text: 'You receive a full delivery and read report after the campaign' },
                                        { step: '06', text: 'Review results and plan your next campaign with our team' },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <span className="text-sm font-black text-brand-primary">{item.step}</span>
                                            </div>
                                            <span className="text-slate-700 leading-relaxed pt-1.5">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
                            >
                                Who Uses Our WhatsApp Bulk Service
                            </motion.h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                From small businesses to political campaigns — WhatsApp bulk messaging works for every type of promotion in Kerala.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {useCases.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
                                >
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Coverage Area */}
                <section className="py-20 bg-white border-b border-slate-100">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Coverage Across All 14 Kerala Districts</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                                    Our WhatsApp bulk messaging service covers every district in Kerala. Whether your campaign targets one city or the entire state, we have the reach and infrastructure to deliver.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {districts.map((district, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.04 }}
                                            className="bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-slate-700 font-medium text-sm hover:border-brand-primary/40 hover:bg-brand-primary/5 transition-all duration-200"
                                        >
                                            {district}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-50 border-b border-slate-200">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-4">
                            {faqItems.map((item, idx) => (
                                <FaqItem key={idx} question={item.question} answer={item.answer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-[#050914] text-center">
                    <div className="container mx-auto px-6 max-w-3xl relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Ready to Launch Your WhatsApp Campaign?</h2>
                        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                            Contact B2P International today for WhatsApp bulk messaging across Kerala. WhatsApp us for instant pricing or call our Thrissur office to discuss your campaign requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="https://wa.me/918589909034"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.5)] transition-all duration-300"
                            >
                                WhatsApp Us Now
                            </a>
                            <a
                                href="tel:+918589909034"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>
                </section>

                <LocalSEO />
            </div>
        </>
    );
};

export default WhatsAppBulk;
