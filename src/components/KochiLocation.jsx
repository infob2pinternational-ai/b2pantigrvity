import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store, CheckCircle2, Navigation, Target, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const KOCHI_TITLE = 'Advertising Agency in Kochi | LED Van & Outdoor Marketing Kerala';
const KOCHI_DESCRIPTION =
  'Looking for a top advertising agency in Kochi? We provide LED van advertising, outdoor advertising, auto branding, and newspaper advertising across Ernakulam.';

const kochiZones = [
  {
    name: 'MG Road & Central Hubs',
    detail: 'MG Road is the commercial spine of Kochi. High vehicular and foot traffic makes it ideal for retail launches and brand awareness using LED Vans and Outdoor Hoardings.',
    icon: Route,
  },
  {
    name: 'Edappally & Lulu Mall Belt',
    detail: 'The hyper-retail zone of Kochi. Ideal for weekend auto branding campaigns, lookwalkers, and LED van displays targeting shoppers.',
    icon: Store,
  },
  {
    name: 'Kakkanad & Infopark',
    detail: 'The IT hub. Perfect for corporate real estate, B2B services, and tech-driven event promotions with targeted mobile van advertising.',
    icon: Building2,
  },
];

const kochiFaqs = [
  {
    question: 'Why choose LED Van Advertising in Kochi?',
    answer: 'Kochi has a highly mobile population and heavy traffic at key junctions. LED Van advertising allows your brand to dynamically move through premium areas like MG Road, Edappally, and Marine Drive, capturing attention with bright, moving visuals that static billboards cannot match.'
  },
  {
    question: 'Do you offer Newspaper Advertising in Ernakulam?',
    answer: 'Yes, as a full-service advertising agency in Kochi, we handle newspaper advertising in leading Malayalam and English dailies, helping you secure premium ad placements and localized inserts.'
  },
  {
    question: 'How effective is Auto Branding in Kochi?',
    answer: 'Auto branding is highly cost-effective for hyper-local penetration in Kochi. Autos travel through narrow residential lanes and busy commercial streets, providing continuous moving visibility across Ernakulam.'
  },
  {
    question: 'Can you combine LED Van and Outdoor Advertising?',
    answer: 'Absolutely. We often deploy hybrid campaigns combining stationary outdoor advertising (hoardings/billboards) at major junctions like Vyttila with mobile LED vans covering connecting routes for maximum recall.'
  },
  {
    question: 'What are the costs for advertising campaigns in Kochi?',
    answer: 'Costs vary based on the medium, duration, and specific routes. Auto branding is generally lower cost per unit, while LED van advertising offers premium dynamic visibility. Contact us for a customized quote tailored to your Ernakulam campaign.'
  }
];

const KochiLocation = () => {
  return (
    <>
      <Seo
        title={KOCHI_TITLE}
        description={KOCHI_DESCRIPTION}
        keywords="Advertising Agency in Kochi, LED Van Advertising Kerala, Outdoor Advertising Kerala, Auto Branding Kerala, Kochi marketing, Ernakulam advertising"
        path="/locations/kochi"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: KOCHI_TITLE,
            description: KOCHI_DESCRIPTION,
            path: '/locations/kochi',
          }),
          buildServiceSchema({
            name: 'Advertising Agency Services in Kochi',
            description: KOCHI_DESCRIPTION,
            path: '/locations/kochi',
            areaServed: ['Kochi', 'Ernakulam'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Kochi', path: '/locations/kochi' },
          ]),
          buildFaqSchema(kochiFaqs),
        ]}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 text-sm font-bold text-brand-primary">
                <MapPin size={16} />
                Top Advertising Agency in Kochi
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-[1.1]">
                Dominate the Market with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Premium Advertising</span> in Kochi
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                As the commercial capital of Kerala, Kochi demands dynamic, high-impact marketing. From the bustling streets of MG Road to the tech corridors of Kakkanad, B2P International provides targeted LED van advertising, outdoor media, newspaper ads, and auto branding to maximize your reach.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Start Your Kochi Campaign
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/led-van-advertising"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-900 transition-all hover:border-brand-primary hover:text-brand-primary"
                >
                  Explore LED Vans
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-[2rem] bg-slate-900 p-8 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="relative text-2xl font-black mb-4">Why Kochi Matters</h2>
              <p className="relative text-slate-300 leading-relaxed mb-6">
                Ernakulam district is Kerala's economic powerhouse. Capturing the Kochi audience means reaching a diverse demographic of young IT professionals, established businesses, and high-volume retail shoppers. Relying on just one medium isn't enough; an integrated outdoor and mobile approach ensures saturation.
              </p>
              <ul className="relative space-y-4">
                {[
                  'Highest per capita retail spending in Kerala',
                  'Massive daily commuter volume via Metro and road networks',
                  'Hub for IT, Tourism, and Corporate sectors',
                  'Premium venues like Lulu Mall and Marine Drive'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Comprehensive Advertising Solutions in Ernakulam</h2>
            <p className="mt-4 text-lg text-slate-600">We offer a full spectrum of local advertising media, ensuring your brand achieves maximum visibility across all touchpoints in the city.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* LED Van */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4"><Link to="/led-van-advertising" className="hover:text-brand-primary transition-colors">LED Van Advertising in Kochi</Link></h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile <Link to="/led-van-advertising" className="text-brand-primary font-medium hover:underline">LED Van Advertising</Link> is our flagship service. Instead of waiting for customers to drive past a static hoarding, we take your high-definition video advertisements directly to them. We map out strategic routes covering high-density zones like Palarivattom, Vyttila, and Edappally. Whether it's a real estate launch, a retail store opening, or a brand awareness drive, our LED screens deliver unmatched nighttime and daytime brilliance.
              </p>
            </motion.div>

            {/* Outdoor */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Outdoor Advertising Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Establishing authority requires prominent placement. Our Outdoor Advertising services in Kochi include securing prime hoardings, transit media, and bus shelter ads. We focus on chokepoints where traffic is slow-moving, ensuring maximum dwell time for your brand message. From the bypass highway to the inner city limits, we optimize your outdoor ad spend.
              </p>
            </motion.div>

            {/* Newspaper */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Newspaper Advertising</h3>
              <p className="text-slate-600 leading-relaxed">
                Print media still holds massive credibility in Kerala. We streamline newspaper advertising in Kochi by offering strategic placements in leading Malayalam and English dailies. From full-page jacket ads for mega launches to targeted local classifieds, our agency negotiates the best rates and positioning to ensure your print campaign drives immediate response.
              </p>
            </motion.div>

            {/* Auto Branding */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Navigation className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Auto Branding Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Auto Branding is the ultimate hyper-local marketing tool in Kochi. Auto-rickshaws penetrate deep into residential areas, narrow streets, and markets where larger vehicles and billboards cannot reach. By branding fleets of autos across specific auto stands in Ernakulam, your message remains constantly in motion, achieving massive daily impressions at a fraction of the cost of traditional media.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kochi Specific Zones */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900">Strategic Coverage Areas in Ernakulam</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">We don't just blindly drive; we target micro-markets within Kochi based on your specific audience profile.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {kochiZones.map((zone, index) => (
              <motion.article
                key={zone.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30 hover:border-brand-primary/30 transition-colors"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <zone.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{zone.name}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{zone.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Success Metrics */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black md:text-4xl mb-6">Proven Success in Kochi</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Over the years, we have executed high-ROI campaigns for prominent jewelry brands, real estate developers, educational institutions, and retail chains across Kochi. Our approach integrates multiple channels—running Newspaper Advertising alongside LED Vans—to create a surround-sound marketing effect that forces the market to take notice.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">500+</p>
                  <p className="text-sm text-slate-400 font-medium">Campaigns Executed</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">1M+</p>
                  <p className="text-sm text-slate-400 font-medium">Daily Impressions</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Case Study: Retail Launch</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                A major textile brand launching in Edappally utilized our hybrid strategy: 10 auto brandings for local lane penetration, 2 LED Vans circling the Lulu Mall belt for high-impact video display, and targeted front-page newspaper ads. The result was record-breaking opening day footfall, establishing immediate local dominance.
              </p>
              <Link to="/services" className="text-brand-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All Services <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to know about advertising in Kochi.</p>
          </div>
          <div className="grid gap-6">
            {kochiFaqs.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.question}</h3>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Capture Kochi's Attention?</h2>
          <p className="text-xl text-slate-600 mb-10">Whether you need LED Van Advertising, Auto Branding, or a full-scale Outdoor Advertising campaign in Kerala, we have the expertise to deliver results.</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-10 py-5 text-lg font-black text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/30"
          >
            Contact Our Kochi Team
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default KochiLocation;
