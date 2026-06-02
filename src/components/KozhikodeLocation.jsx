import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, MapPin, Route, Store, Building2, CheckCircle2, Megaphone, Navigation, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const KOZHIKODE_TITLE = 'Advertising Agency in Kozhikode | LED Van & Outdoor Advertising Kerala';
const KOZHIKODE_DESCRIPTION =
  'B2P International is a leading advertising agency in Kozhikode (Calicut) offering LED van advertising, newspaper ads, auto branding, and outdoor hoarding campaigns across North Kerala.';

const kozhikodeZones = [
  {
    name: 'SM Street (Mithai Theruvu) & Palayam',
    detail: 'The traditional and busiest commercial heart of Calicut. Exceptional for localized retail promotions, hyper-targeted auto branding, and foot-traffic focused lookwalker campaigns.',
    icon: Store,
  },
  {
    name: 'Mananchira Square & Focus Mall Belt',
    detail: 'A major gathering hub and transit point. Prime location for high-visibility LED Van deployments and premium outdoor hoarding placements to capture the urban crowd.',
    icon: Route,
  },
  {
    name: 'Kozhikode Bypass & Cyberpark Area',
    detail: 'Fast-growing IT and real estate sector. Ideal for B2B advertising, corporate brand awareness, and long-term hoarding strategies targeting high-income demographics.',
    icon: Building2,
  },
];

const kozhikodeFaqs = [
  {
    question: 'How effective is LED Van Advertising in Kozhikode?',
    answer: 'Extremely effective. Kozhikode has dense, slow-moving traffic in commercial areas like SM Street and Mananchira. Our mobile LED screens deliver bright, video-based messaging directly to this captive audience, outperforming static billboards in engagement.'
  },
  {
    question: 'Can you handle Newspaper Advertising in Calicut?',
    answer: 'Yes. As a recognized advertising agency in Kozhikode, we facilitate newspaper advertising in leading Malayalam dailies like Mathrubhumi and Malayala Manorama, targeting the Malabar region with optimal ad placements.'
  },
  {
    question: 'What areas do your outdoor campaigns cover in North Kerala?',
    answer: 'We cover the entirety of Kozhikode city, the Calicut bypass, and extend our services to neighboring districts like Malappuram, Wayanad, and Kannur for comprehensive North Kerala outdoor advertising coverage.'
  },
  {
    question: 'Why should we choose Auto Branding in Kozhikode?',
    answer: 'Auto-rickshaws are integral to Kozhikode\'s transport network. Auto branding provides a low-cost, high-frequency moving billboard that reaches deep into residential layouts and narrow market streets where larger vehicles cannot operate.'
  },
  {
    question: 'Do you design the ad content as well?',
    answer: 'Yes, we offer end-to-end services. From designing print-ready creatives for newspaper ads to developing high-impact video graphics for LED vans, our team handles the entire creative and execution process.'
  }
];

const KozhikodeLocation = () => {
  return (
    <>
      <Seo
        title={KOZHIKODE_TITLE}
        description={KOZHIKODE_DESCRIPTION}
        keywords="Advertising Agency in Kozhikode, LED Van Advertising Kozhikode, Outdoor Advertising Kerala, Auto Branding Kozhikode, Calicut marketing agency, North Kerala advertising"
        path="/locations/kozhikode"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: KOZHIKODE_TITLE,
            description: KOZHIKODE_DESCRIPTION,
            path: '/locations/kozhikode',
          }),
          buildServiceSchema({
            name: 'Advertising Agency Services in Kozhikode',
            description: KOZHIKODE_DESCRIPTION,
            path: '/locations/kozhikode',
            areaServed: ['Kozhikode', 'Calicut', 'Malappuram', 'Wayanad'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Kozhikode', path: '/locations/kozhikode' },
          ]),
          buildFaqSchema(kozhikodeFaqs),
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
                Premier Advertising Agency in Calicut
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-[1.1]">
                Elevate Your Brand in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Kozhikode</span> & Malabar
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Kozhikode is the bustling gateway to North Kerala. With a rich culture of commerce and an ever-expanding retail sector, relying on standard marketing isn't enough. B2P International delivers high-impact LED van advertising, strategic outdoor campaigns, newspaper ads, and auto branding to help you dominate the Malabar market.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Start Your Kozhikode Campaign
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/led-van-advertising"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-900 transition-all hover:border-brand-primary hover:text-brand-primary"
                >
                  View LED Van Services
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
              <h2 className="relative text-2xl font-black mb-4">The Kozhikode Advantage</h2>
              <p className="relative text-slate-300 leading-relaxed mb-6">
                Calicut's unique geography features dense, historic market streets alongside rapidly developing bypass infrastructure. This duality requires an advertising agency that understands how to deploy a mix of hyper-local mobile media and high-visibility static media.
              </p>
              <ul className="relative space-y-4">
                {[
                  'Strategic gateway to Wayanad, Kannur, and Malappuram',
                  'High concentration of retail, gold, and textile brands',
                  'Booming real estate and IT development at Cyberpark',
                  'Strong local brand loyalty demanding high-visibility marketing'
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
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Targeted Advertising Solutions in Calicut</h2>
            <p className="mt-4 text-lg text-slate-600">From the narrow lanes of SM Street to the wide stretches of the Bypass, we deploy the right medium for the right location.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* LED Van */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4"><Link to="/led-van-advertising" className="hover:text-brand-primary transition-colors">LED Van Advertising in Kozhikode</Link></h3>
              <p className="text-slate-600 leading-relaxed">
                As the leading provider of <Link to="/led-van-advertising" className="text-brand-primary font-medium hover:underline">LED Van Advertising</Link> in North Kerala, we bring your brand to life with high-definition video displays on wheels. We orchestrate roadshows that navigate through Mananchira, Nadakkavu, and West Hill, ensuring your promotional videos, product launches, or event announcements cannot be ignored by the busy Kozhikode populace.
              </p>
            </motion.div>

            {/* Outdoor */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Outdoor Advertising Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Secure prime real estate for your brand. Our outdoor advertising services in Kozhikode include large-format hoardings, bridge panels, and strategically placed transit media. Whether you are targeting commuters on the Kozhikode Bypass or shoppers near Focus Mall, we guarantee high-impact static visibility that builds long-term brand authority.
              </p>
            </motion.div>

            {/* Newspaper */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Newspaper Advertising</h3>
              <p className="text-slate-600 leading-relaxed">
                The Malabar region has a deeply ingrained newspaper reading culture. We leverage this by acting as your dedicated agency for newspaper advertising in Kozhikode. From front-page takeovers in Mathrubhumi to targeted classifieds in Malayala Manorama, we optimize your ad spend, manage the creative layout, and ensure maximum readership engagement.
              </p>
            </motion.div>

            {/* Auto Branding */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Navigation className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Auto Branding Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Navigate the dense lanes of Calicut with our Auto Branding services. Autorickshaws are ubiquitous in Kozhikode, providing a continuous, moving canvas for your brand. By plastering your message across fleets of autos, we ensure that your brand travels into residential neighborhoods and busy markets where traditional billboards simply do not exist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kozhikode Specific Zones */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900">Strategic Coverage Areas in Kozhikode</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">We map our routes and hoarding placements based on deep local knowledge of Calicut's traffic patterns and consumer hubs.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {kozhikodeZones.map((zone, index) => (
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
              <h2 className="text-3xl font-black md:text-4xl mb-6">Driving Results in Malabar</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We have spearheaded numerous successful marketing drives in Kozhikode. Our ability to blend mobile visibility (LED Vans, Auto Branding) with static authority (Outdoor Hoardings, Newspaper Ads) makes us the preferred advertising agency for textile showrooms, gold jewelers, and healthcare institutions expanding in North Kerala.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">350+</p>
                  <p className="text-sm text-slate-400 font-medium">Malabar Campaigns</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">24/7</p>
                  <p className="text-sm text-slate-400 font-medium">Auto Branding Visibility</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Case Study: Mega Festival Sale</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                For a prominent local electronics retailer, we executed a 7-day blitz campaign leading up to Onam. We deployed 3 LED Vans covering the outskirts, 50 branded autos navigating SM Street and Palayam, and secured front-page strip ads in two major dailies. The coordinated effort resulted in a 300% increase in store walk-ins compared to the previous year.
              </p>
              <Link to="/services" className="text-brand-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Explore All Services <ArrowRight size={18} />
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
            <p className="mt-4 text-lg text-slate-600">Common queries regarding our advertising services in Kozhikode.</p>
          </div>
          <div className="grid gap-6">
            {kozhikodeFaqs.map((item, index) => (
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
          <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Impact the Calicut Market?</h2>
          <p className="text-xl text-slate-600 mb-10">From LED Vans and Outdoor Hoardings to Auto Branding and Newspaper ads, partner with the leading advertising agency in Kozhikode to maximize your reach.</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-10 py-5 text-lg font-black text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/30"
          >
            Launch Your Campaign Today
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
};

export default KozhikodeLocation;
