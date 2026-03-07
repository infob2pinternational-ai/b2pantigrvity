import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [btnText, setBtnText] = useState("Send Message");
    const [btnColor, setBtnColor] = useState("bg-gradient-to-r from-brand-primary to-brand-secondary");

    const handleSubmit = (e) => {
        e.preventDefault();
        setBtnText("Message Sent!");
        setBtnColor("bg-green-500");

        setTimeout(() => {
            setBtnText("Send Message");
            setBtnColor("bg-gradient-to-r from-brand-primary to-brand-secondary");
            e.target.reset();
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Get in <span className="text-brand-primary">Touch</span></h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Ready to amplify your brand? Reach out to us today and let's create something extraordinary together.
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative group">
                                <input type="text" id="name" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors" placeholder=" " />
                                <label htmlFor="name" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Name</label>
                            </div>

                            <div className="relative group">
                                <input type="email" id="email" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors" placeholder=" " />
                                <label htmlFor="email" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Email</label>
                            </div>

                            <div className="relative group">
                                <select id="service" required defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-600 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors appearance-none">
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
                                <textarea id="message" rows="4" required className="peer w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white transition-colors resize-none" placeholder=" "></textarea>
                                <label htmlFor="message" className="absolute left-6 top-4 text-slate-400 pointer-events-none transition-all duration-200 peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:bg-white peer-focus:px-2 peer-focus:text-brand-primary peer-focus:rounded-md peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:rounded-md">Your Message</label>
                            </div>

                            <button type="submit" className={`w-full py-4 rounded-xl text-white font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${btnColor}`}>
                                {btnText}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
