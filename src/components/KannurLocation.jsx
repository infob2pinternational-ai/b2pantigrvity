import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, buildWebPageSchema, localBusinessSchema } from '../lib/seo';

const TITLE = 'LED Van Advertising Kannur | Outdoor Advertising Agency Kannur | B2P International';
const DESCRIPTION = 'B2P International offers LED van advertising, lookwalker advertising, and WhatsApp bulk messaging in Kannur. Covering Thalassery, Payyanur, Iritty, and all Kannur district areas.';

const zones = [
  { name: "Kannur Town & Bus Stand Area", detail: "The main commercial hub with heavy vehicular traffic. LED vans and lookwalkers at the busy junction areas generate excellent brand recall for retail, FMCG, and educational campaigns.", icon: Route },
  { name: "Thalassery & Dharmadom", detail: "Historic commercial town with active markets. Ideal for product launches and political campaign advertising targeting the dense residential and commercial belt.", icon: Store },
  { name: "Payyanur & Payyannur Junction", detail: "Northern Kannur's growing commercial zone. Great for brand awareness campaigns targeting younger demographics and working professionals.", icon: Building2 },

];

const faqs = [
  { question: "Do you offer LED van advertising in Kannur?", answer: "Yes. B2P International provides LED van advertising across all major towns in Kannur including Thalassery, Payyanur, Iritty, and Kannur town. Our GPS-tracked vans operate on customised routes for maximum brand visibility." },
  { question: "What advertising services are available in Kannur?", answer: "We offer LED van advertising, LED wall rental, lookwalker/iWalker advertising, and WhatsApp bulk messaging in Kannur district for product launches, political campaigns, and brand promotions." },
  { question: "Is lookwalker advertising effective in Kannur?", answer: "Yes. Kannur has busy commercial areas in the town centre and Thalassery where our trained lookwalker promoters generate strong visibility for 8-10 hours daily at high-footfall locations." },
  { question: "Can you run political campaign advertising in Kannur?", answer: "Absolutely. We have extensive experience running LED van and WhatsApp bulk campaigns for political campaigns across Kannur constituency. Contact us for election campaign packages." },
  { question: "What is the cost of advertising in Kannur?", answer: "Pricing depends on campaign type, duration, and coverage area. Contact B2P International at +91 85899 09034 for a customised Kannur campaign quote." },

];

const KannurLocation = () => {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        keywords="LED van advertising Kannur, outdoor advertising Kannur, lookwalker Kannur, WhatsApp bulk messaging Kannur, advertising agency Kannur Kerala"
        path="/locations/kannur"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({ name: TITLE, description: DESCRIPTION, path: '/locations/kannur' }),
          buildServiceSchema({ name: 'Advertising Services in Kannur', description: DESCRIPTION, path: '/locations/kannur', areaServed: ['Kannur', 'Thalassery', 'Payyanur', 'Iritty'] }),
          buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Locations', path: '/locations' }, { name: 'Kannur', path: '/locations/kannur' }]),
          buildFaqSchema(faqs),
        ]}
      />
      <div className="bg-slate-50 min-h-screen">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#050914] overflow-hidden min-h-[70vh] flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--brand-primary-rgb),0.15),transparent_50%)]" />
          <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 backdrop-blur-md mb-8">
              <MapPin size={16} className="text-brand-secondary" />
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">Kannur, Kerala</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight max-w-4xl">
              Advertising Agency in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Kannur</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              LED van advertising, lookwalker promotions, and WhatsApp bulk messaging across Kannur district. Covering Thalassery, Payyanur, Iritty, and all major towns.
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Key Areas We Cover in Kannur</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our LED vans and promoters operate across all major commercial and residential zones in Kannur district.</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Services in Kannur</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'LED Van Advertising', desc: 'Mobile LED vans covering all Kannur towns with high-resolution video displays.', link: '/led-van-advertising' },
                { title: 'LED Wall Rental', desc: 'LED screen rental for events, product launches, and political rallies in Kannur.', link: '/led-wall-rental' },
                { title: 'Lookwalker Advertising', desc: 'iWalker promoters covering busy markets and commercial areas across Kannur.', link: '/lookwalker-advertising' },
                { title: 'WhatsApp Bulk Messaging', desc: 'Reach thousands of Kannur contacts instantly with targeted WhatsApp campaigns.', link: '/whatsapp-bulk-messaging' },
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Start Your Kannur Campaign Today</h2>
            <p className="text-slate-300 mb-8 text-lg">Contact B2P International for LED van advertising and outdoor promotions across Kannur district.</p>
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

export default KannurLocation;
