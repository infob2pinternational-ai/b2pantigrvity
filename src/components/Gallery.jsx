import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import van1 from '../assets/images/van1.webp';
import van2 from '../assets/images/van2.webp';
import van3 from '../assets/images/van3.webp';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema, localBusinessSchema } from '../lib/seo';

const GALLERY_TITLE = 'LED Van & Event Display Gallery | B2P Kerala';
const GALLERY_DESCRIPTION =
    'Explore campaign photos and case studies of LED van roadshows, LED wall installations, and lookwalker promotions across Thrissur, Kochi, and all of Kerala.';

const Gallery = () => {
    const images = [
        { id: 1, src: van1, alt: "B2P International LED advertising van campaign in Thrissur Kerala" },
        { id: 2, src: van2, alt: "Mobile LED advertising van by B2P International during a Kerala brand campaign" },
        { id: 3, src: van3, alt: "B2P International LED van advertising display for outdoor promotion in Kerala" }
    ];

    const benefits = [
        "High Visibility in High-Traffic Areas",
        "Cost-Effective Local Marketing",
        "Dynamic Video & Image Capabilities",
        "Targeted Geographic Campaigns"
    ];

    const faqs = [
        {
            q: "What areas do your LED advertising vans cover?",
            a: "Our mobile LED advertising vans operate extensively throughout Thrissur, Kochi, Kozhikode, Trivandrum, and all major cities and towns across Kerala. We can strategically route our vehicles to target your specific demographic footprint."
        },
        {
            q: "How does LED Van Advertising compare to traditional billboards?",
            a: "Unlike static billboards that rely on people passing by, our LED vans are mobile. They take your message directly to your audience, ensuring maximum reach. Additionally, the bright, dynamic nature of digital LED screens captures attention far better than traditional printed media."
        },
        {
            q: "Can I run video advertisements on the LED screens?",
            a: "Absolutely! Our high-resolution LED screens support full-motion video, animations, and static imagery. This allows you to tell a compelling story and engage viewers much more effectively than a static image."
        }
    ];

    return (
        <>
        <Seo
            title={GALLERY_TITLE}
            description={GALLERY_DESCRIPTION}
            keywords="LED van advertising gallery, Thrissur campaign photos, Kerala mobile advertising gallery, lookwalker campaigns, B2P International case studies"
            path="/gallery"
            schema={[
                localBusinessSchema,
                buildWebPageSchema({
                    name: GALLERY_TITLE,
                    description: GALLERY_DESCRIPTION,
                    path: '/gallery',
                    type: 'CollectionPage',
                }),
                buildBreadcrumbSchema([
                    { name: 'Home', path: '/' },
                    { name: 'Gallery', path: '/gallery' },
                ]),
                buildFaqSchema(faqs.map((item) => ({ question: item.q, answer: item.a }))),
            ]}
        />
        <section id="gallery-hero" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight"
                    >
                        Our Campaign <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed"
                    >
                        Discover the power of mobile outdoor marketing. Browse through our successful LED Van campaigns, roadshows, and lookwalker activations across Thrissur and Kerala.
                    </motion.p>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group rounded-3xl overflow-hidden shadow-lg h-80 bg-white"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                width="1024"
                                height="682"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary mix-blend-overlay opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="text-xl font-bold text-white tracking-wide">Premium LED Activation</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SEO Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Plan a Campaign Like These</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                When you browse the photos, look at where the audience would see the screen. At a roadside stop, the screen should face the main flow of pedestrians or traffic. At a stage event, check whether parked vehicles or the front rows could block the view from farther back.
                            </p>
                            <p>
                                Keep roadshow videos easy to understand in a few seconds. Lead with the brand and the main message, use lettering that reads from a distance, and include a location or event date when it matters. For a stationary display, the audience may have more time to read the details.
                            </p>
                            <p>
                                If a setup in the gallery looks right for your event, share the example along with your venue or route, dates, and the kind of audience you want to reach. Those details help us choose between a mobile LED vehicle, a stage screen, or a lookwalker team.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our LED Services?</h3>
                        <ul className="space-y-4 mb-8">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                                    <span className="text-lg text-slate-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <p className="text-slate-600 italic">
                                "Partnering with B2P International transformed our local reach. The LED van campaigns brought foot traffic directly to our stores during the festival season."
                            </p>
                            <p className="mt-4 font-bold text-slate-900">— Satisfied Retail Partner</p>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-[#08111f] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Dominate the Streets?</h2>
                        <p className="text-lg md:text-xl text-slate-300 mb-10">
                            Contact us today to book an LED Van or lookwalker for your next big campaign in Kerala. Let's make your brand unmissable.
                        </p>
                        <a 
                            href="/#contact" 
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.4)] transition-all duration-300"
                        >
                            Start Your Campaign
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    );
};

export default Gallery;
