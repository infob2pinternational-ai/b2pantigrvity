import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabase';

const Contact = () => {
    const mapAddress = "10/15 Devassy Square, Marathakam Centre, Puranattukara, Thrissur";
    const mapEmbedUrl = "https://www.google.com/maps?q=B2P%20International,%2010.5526103,76.1577759&z=17&output=embed";
    const mapDirectionsUrl = "https://www.google.com/maps/place/B2P+International/@10.5526103,76.1577759,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7ed9e0cd49fcd:0xc11fbcc27327b5c0!8m2!3d10.5526103!4d76.1577759!16s%2Fg%2F11f66qsbkt?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D";
    const [btnText, setBtnText] = useState("Send Message");
    const [btnColor, setBtnColor] = useState("bg-gradient-to-r from-brand-primary to-brand-secondary");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const payload = {
            name: String(formData.get('name') || '').trim(),
            email: String(formData.get('email') || '').trim(),
            service: String(formData.get('service') || '').trim(),
            message: String(formData.get('message') || '').trim(),
        };

        setIsSubmitting(true);
        setBtnText("Sending...");

        try {
            if (!isSupabaseConfigured || !supabase) {
                setBtnText("Add Supabase Key");
                setBtnColor("bg-amber-500");
                return;
            }

            const { error } = await supabase.from('contact_messages').insert(payload);

            if (error) {
                throw error;
            }

            setBtnText("Message Sent!");
            setBtnColor("bg-green-500");
            form.reset();
        } catch (error) {
            console.error('Supabase form submission failed:', error);
            setBtnText("Send Failed");
            setBtnColor("bg-red-500");
        } finally {
            setIsSubmitting(false);

            setTimeout(() => {
                setBtnText("Send Message");
                setBtnColor("bg-gradient-to-r from-brand-primary to-brand-secondary");
            }, 3000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6">Get In <span className="text-brand-primary">Touch</span></h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-10 md:mb-12">
                            Ready to promote your brand with LED Van Advertising or LED Wall Displays? Contact our team today to discuss your advertising campaign and discover how our mobile LED advertising solutions can help your business reach thousands of potential customers.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Visit Us</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="https://maps.app.goo.gl/qTYF3SKCdYkrLUrLA" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">
                                            10/15 Devassy Square, Marathakam Centre,<br />Puranattukara, Thrissur
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Us</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="mailto:info@b2pinternational.com" className="hover:text-brand-primary transition-colors">
                                            info@b2pinternational.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Call Us</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        <a href="tel:+918989909034" className="hover:text-brand-primary transition-colors">
                                            +91 89899 09034
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-[#071120] shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                            <div className="relative overflow-hidden px-6 py-6 md:px-8 md:py-7">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.25),transparent_30%)]" />
                                <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-300">
                                            <MapPin size={14} className="text-brand-primary" />
                                            Office Location
                                        </div>
                                        <h4 className="text-2xl font-black text-white">Visit B2P International</h4>
                                        <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
                                            Step into our Thrissur office for campaign planning, LED van bookings, and brand consultation.
                                        </p>
                                    </div>
                                    <a
                                        href={mapDirectionsUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="relative p-4 md:p-5">
                                <div className="mb-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                                    <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur">
                                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">Thrissur Office</p>
                                        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">
                                            {mapAddress}
                                        </p>
                                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                                            Easy to find, easy to reach, and mapped directly to our Google listing.
                                        </p>
                                    </div>
                                    <div className="hidden md:flex md:justify-end">
                                        <a
                                            href={mapDirectionsUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-brand-primary hover:bg-brand-primary"
                                        >
                                            Open In Google Maps
                                        </a>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                                    <div className="h-[320px] md:h-[380px] bg-slate-100">
                                        <iframe
                                            title="B2P International office location"
                                            src={mapEmbedUrl}
                                            className="h-full w-full border-0 grayscale-[0.15] contrast-[1.05] saturate-[0.9]"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <input type="text" id="name" name="name" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors" placeholder=" " />
                                <label htmlFor="name" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Name</label>
                            </div>

                            <div className="relative group">
                                <input type="email" id="email" name="email" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors" placeholder=" " />
                                <label htmlFor="email" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Email</label>
                            </div>

                            <div className="relative group">
                                <select id="service" name="service" required defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors appearance-none">
                                    <option value="" disabled>Select a Service</option>
                                    <option value="led">LED Van Services</option>
                                    <option value="marketing">Exclusive Marketing Campaigns & Implementation</option>
                                    <option value="ai">AI-Driven Social Intelligence & Growth (ASIG)</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea id="message" name="message" rows="4" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none" placeholder=" "></textarea>
                                <label htmlFor="message" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Message</label>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={`w-full py-4 rounded-xl text-white font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-80 ${btnColor}`}>
                                {btnText}
                            </button>

                            {!isSupabaseConfigured && (
                                <p className="text-sm text-amber-600">
                                    Add `VITE_SUPABASE_ANON_KEY` to your `.env` file to activate Supabase form submissions.
                                </p>
                            )}
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
