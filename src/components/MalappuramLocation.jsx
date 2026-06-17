import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store, CheckCircle2, Navigation, Target, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, buildWebPageSchema, localBusinessSchema } from '../lib/seo';

const TITLE = 'LED Van Advertising Malappuram | Outdoor Advertising Agency Malappuram | B2P International';
const DESCRIPTION = 'B2P International offers LED van advertising, lookwalker advertising, and WhatsApp bulk messaging in Malappuram. Covering Tirur, Manjeri, Perinthalmanna, and all Malappuram districts.';

const zones = [
  { name: 'Manjeri & Perinthalmanna', detail: 'The commercial twin hubs of Malappuram. Heavy footfall at markets, textile shops, and bus stands makes LED van advertising and lookwalkers highly effective for brand launches and retail promotions.', icon: Store },
  { name: 'Tirur & Tanur', detail: 'Fast-growing commercial corridors in coastal Malappuram. Ideal for FMCG campaigns, educational institute promotions, and product launches targeting high-density residential areas.', icon: Route },
  { name: 'Malappuram Town', detail: 'The district headquarters with busy government offices, courts, and shopping areas. Perfect for LED van roadshows during political campaigns, festive promotions, and brand awareness drives.', icon: Building2 },
];

const faqs = [
  { question: 'Do you offer LED van advertising in Malappuram?', answer: 'Yes. B2P International provides LED van advertising across all major towns in Malappuram including Manjeri, Tirur, Perinthalmanna, Tanur, and Malappuram town. Our vans cover residential and commercial areas for maximum brand visibility.' },
  { question: 'What advertising services are available in Malappuram?', answer: 'We offer LED van advertising, LED wall rental, lookwalker/iWalker advertising, and WhatsApp bulk messaging in Malappuram. We cover the entire district for product launches, political campaigns, and brand promotions.' },
  { question: 'Is lookwalker advertising effective in Malappuram markets?', answer: 'Yes. Malappuram has busy textile markets, gold shops, and commercial areas in Manjeri and Tirur where lookwalkers generate excellent visibility. Our trained promoters cover high-footfall locations for 8–10 hours per day.' },
  { question: 'Can you run WhatsApp bulk campaigns in Malappuram?', answer: 'Absolutely. WhatsApp penetration in Malappuram is among the highest in Kerala. Our bulk WhatsApp messaging service can reach thousands of contacts in Malappuram within minutes — ideal for political campaigns, real estate, and event promotions.' },
  { question: 'What is the cost of LED van advertising in Malappuram?', answer: 'Pricing depends on campaign duration, route, and content. Contact B2P International at +91 85899 09034 for a customised quote for your Malappuram campaign.' },
];

const MalappuramLocation = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        keywords="LED van advertising Malappuram, outdoor advertising Malappuram, lookwalker Malappuram, WhatsApp bulk messaging Malappuram, advertising agency Malappuram Kerala"
        path="/locations/malappuram"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({ name: TITLE, description: DESCRIPTION, path: '/locations/malappuram' }),
          buildServiceSchema({ name: 'Advertising Services in Malappuram', description: DESCRIPTION, path: '/locations/malappuram', areaServed: ['Malappuram', 'Manjeri', 'Tirur', 'Perinthalmanna'] }),
          buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Malappuram', path: '/locations/malappuram' }]),
          buildFaqSchema(faqs),
        ]}
      />
      <div className="bg-slate-50 min-h-screen">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[70vh] flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--brand-primary-rgb),0.15),transparent_50%)]" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8">
              <MapPin size={16} className="text-brand-secondary" />
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Malappuram, Kerala</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl">
              Advertising Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Malappuram</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              LED van advertising, lookwalker promotions, and WhatsApp bulk messaging across Malappuram district. Covering Manjeri, Tirur, Perinthalmanna, Tanur, and all major towns.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300">Get a Free Quote <ArrowRight size={20} /></a>
              <Link to="/led-van-advertising" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">Our Services</Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Key Areas We Cover in Malappuram</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our LED vans and promoters operate across all major commercial and residential zones in Malappuram district.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {zones.map((zone, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300">
                  <zone.icon size={32} className="text-brand-primary mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{zone.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{zone.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Services in Malappuram</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'LED Van Advertising', desc: 'Mobile LED vans covering all Malappuram towns with high-resolution video displays.', link: '/led-van-advertising' },
                { title: 'LED Wall Rental', desc: 'LED screen rental for events, product launches, and political rallies in Malappuram.', link: '/led-wall-rental' },
                { title: 'Lookwalker Advertising', desc: 'iWalker promoters covering busy markets and commercial areas across Malappuram.', link: '/lookwalker-advertising' },
                { title: 'WhatsApp Bulk Messaging', desc: 'Reach thousands of Malappuram contacts instantly with targeted WhatsApp campaigns.', link: '/whatsapp-bulk-messaging' },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link to={service.link} className="inline-flex items-center gap-1 text-brand-primary font-semibold text-sm hover:gap-2 transition-all">Learn more <ArrowRight size={14} /></Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#050914] text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Start Your Malappuram Campaign Today</h2>
            <p className="text-slate-300 mb-8 text-lg">Contact B2P International for LED van advertising and outdoor promotions across Malappuram district.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/918589909034" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300">WhatsApp Us</a>
              <a href="tel:+918589909034" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300">Call +91 85899 09034</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MalappuramLocation;
