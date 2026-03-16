import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
    {
        company: 'Tanishq',
        person: 'Stinju John',
        role: 'Marketing Director',
        logo: '/tanishq.png',
        summary: 'Luxury retail visibility campaigns built to increase festive footfall, premium brand recall, and local market buzz.',
        accent: 'Festive retail impact',
    },
    {
        company: 'Nesto Hypermarket',
        person: 'Shiju Malayil',
        role: 'Marketing Manager',
        logo: '/nesto.png',
        summary: 'Hypermarket promotions planned for strong neighborhood reach, launch amplification, and high-frequency shopper engagement.',
        accent: 'High-frequency shopper reach',
    },
    {
        company: 'Asset Homes',
        person: 'Santhosh',
        role: 'Marketing Head',
        logo: '/asset.png',
        summary: 'Real-estate campaign support designed to boost project awareness, site visit interest, and trust across target locations.',
        accent: 'Project awareness growth',
    },
];

const SocialProof = () => {
    return (
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_30%,#f8faff_100%)] py-20 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 top-24 h-[260px] w-[260px] rounded-full bg-brand-secondary/10 blur-[100px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                    <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500 shadow-sm backdrop-blur sm:text-xs">
                        <Quote size={14} className="text-brand-primary" />
                        Client Success Stories
                    </p>
                    <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
                        Results our{' '}
                        <span className="bg-gradient-to-r from-brand-primary via-blue-500 to-brand-secondary bg-clip-text text-transparent">
                            clients can see
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        From jewelry retail to hypermarkets and real estate, our LED van advertising campaigns create stronger recall, smarter local visibility, and better movement where customers already are.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 md:p-10"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-blue-400 to-brand-secondary" />
                        <div className="absolute -right-10 top-10 h-28 w-28 rounded-full bg-brand-primary/10 blur-3xl" />

                        <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                            <TrendingUp size={30} className="text-brand-primary" />
                        </div>

                        <div className="mt-10">
                            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
                                Campaign Performance
                            </p>
                            <p className="mt-4 text-6xl font-black tracking-tight text-slate-950 sm:text-7xl">
                                40<span className="text-brand-primary">%</span>
                            </p>
                            <p className="mt-4 max-w-xs text-xl font-medium leading-relaxed text-slate-700">
                                Average increase in client brand awareness
                            </p>
                        </div>

                        <div className="mt-10 space-y-4 border-t border-slate-200/80 pt-6 text-sm leading-7 text-slate-600">
                            <p>Built for launches, retail promotions, high-street activations, and location-focused campaigns.</p>
                            <p>Especially effective for brands targeting Thrissur, Kochi, Calicut, and other high-footfall Kerala markets.</p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <motion.article
                                key={testimonial.company}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: index * 0.12 }}
                                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(37,99,235,0.14)] sm:p-7"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-brand-primary/8 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-16 w-28 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8ff_100%)] p-3 shadow-sm">
                                        <img
                                            src={testimonial.logo}
                                            alt={`${testimonial.company} logo`}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-brand-primary transition-all duration-300 group-hover:border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-400">
                                    {testimonial.accent}
                                </p>
                                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-950">
                                    {testimonial.company}
                                </h3>
                                <p className="mt-4 text-base leading-8 text-slate-600">
                                    {testimonial.summary}
                                </p>

                                <div className="mt-8 border-t border-slate-100 pt-5">
                                    <p className="text-xl font-bold text-slate-950">{testimonial.person}</p>
                                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
