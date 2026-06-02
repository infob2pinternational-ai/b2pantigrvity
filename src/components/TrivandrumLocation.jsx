import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store, CheckCircle2, Megaphone, Target, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const TRIVANDRUM_TITLE = 'Advertising Agency in Trivandrum | LED Van & Outdoor Marketing Kerala';
const TRIVANDRUM_DESCRIPTION =
  'B2P International is a premium advertising agency in Trivandrum offering LED van advertising, outdoor advertising, auto branding, and newspaper ads in the capital city.';

const trivandrumZones = [
  {
    name: 'Statue, MG Road & Palayam',
    detail: 'The political and commercial heart of Trivandrum. This corridor offers supreme visibility for institutional campaigns, gold retail, and government-adjacent branding.',
    icon: Route,
  },
  {
    name: 'Technopark & Kazhakkoottam',
    detail: 'The technology and corporate epicenter. Highly effective for B2B services, real estate launches, and campaigns targeting thousands of young IT professionals.',
    icon: Building2,
  },
  {
    name: 'Lulu Mall Trivandrum & Bypass',
    detail: 'A major weekend and evening transit chokepoint. Perfect for high-visibility LED van deployments and prominent outdoor hoardings capturing leisure traffic.',
    icon: Store,
  },
];

const trivandrumFaqs = [
  {
    question: 'Why is LED Van Advertising effective in Trivandrum?',
    answer: 'Trivandrum has distinct commercial and residential zones spread across a long urban corridor. LED van advertising allows you to cover multiple key areas—from Technopark to East Fort—in a single day, adapting to traffic flow and capturing attention with high-definition video.'
  },
  {
    question: 'Can you handle Newspaper Advertising in Thiruvananthapuram?',
    answer: 'Absolutely. We manage strategic newspaper advertising campaigns in leading regional dailies like Malayala Manorama, Mathrubhumi, and Kerala Kaumudi, helping you reach the capital\'s highly literate and traditional audience.'
  },
  {
    question: 'How does Auto Branding work in the capital city?',
    answer: 'Auto branding is a cost-effective way to achieve hyper-local penetration in Trivandrum. By wrapping autos that operate from major stands near the railway station, medical college, and IT parks, your brand remains in constant motion across the city.'
  },
  {
    question: 'Do you offer Outdoor Advertising near Technopark?',
    answer: 'Yes, we secure prime outdoor advertising hoardings along the Kazhakkoottam-Kovalam bypass and the Technopark stretch. These locations are critical for brands targeting the high-income IT demographic.'
  },
  {
    question: 'Is Trivandrum suitable for B2B advertising?',
    answer: 'Yes. With the presence of the state government headquarters, major hospitals, and one of the largest IT parks in the country, Trivandrum is an excellent market for B2B services, which we target using specialized outdoor and mobile strategies.'
  }
];

const TrivandrumLocation = () => {
  return (
    <>
      <Seo
        title={TRIVANDRUM_TITLE}
        description={TRIVANDRUM_DESCRIPTION}
        keywords="Advertising Agency in Trivandrum, LED Van Advertising Trivandrum, Outdoor Advertising Kerala, Auto Branding Trivandrum, Thiruvananthapuram marketing, Kerala capital advertising"
        path="/locations/trivandrum"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: TRIVANDRUM_TITLE,
            description: TRIVANDRUM_DESCRIPTION,
            path: '/locations/trivandrum',
          }),
          buildServiceSchema({
            name: 'Advertising Agency Services in Trivandrum',
            description: TRIVANDRUM_DESCRIPTION,
            path: '/locations/trivandrum',
            areaServed: ['Trivandrum', 'Thiruvananthapuram'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Trivandrum', path: '/locations/trivandrum' },
          ]),
          buildFaqSchema(trivandrumFaqs),
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
                Premier Advertising Agency in Thiruvananthapuram
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-[1.1]">
                Influence the Capital with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">High-Impact</span> Marketing
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                As the capital city of Kerala, Trivandrum presents a unique blend of government, corporate, and traditional consumer demographics. B2P International provides targeted LED van advertising, outdoor media, auto branding, and newspaper ads to ensure your brand captures the attention of Thiruvananthapuram.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/30"
                >
                  Start Your Trivandrum Campaign
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/led-van-advertising"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-900 transition-all hover:border-brand-primary hover:text-brand-primary"
                >
                  Explore Mobile Advertising
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
              <h2 className="relative text-2xl font-black mb-4">The Trivandrum Market</h2>
              <p className="relative text-slate-300 leading-relaxed mb-6">
                Trivandrum requires a sophisticated advertising approach. The presence of the Secretariat, sprawling IT parks, and major medical institutions means your audience is diverse. An effective strategy here must blend high-visibility transit media with targeted print and outdoor campaigns.
              </p>
              <ul className="relative space-y-4">
                {[
                  'Home to Kerala’s largest IT workforce at Technopark',
                  'Administrative and political center of the state',
                  'Growing retail infrastructure along the NH Bypass',
                  'High demand for premium real estate and educational services'
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
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">Full-Spectrum Advertising in the Capital</h2>
            <p className="mt-4 text-lg text-slate-600">From the bustling corridors of East Fort to the modern expanse of Kazhakkoottam, we deliver visibility where it matters most.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* LED Van */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4"><Link to="/led-van-advertising" className="hover:text-brand-primary transition-colors">LED Van Advertising in Trivandrum</Link></h3>
              <p className="text-slate-600 leading-relaxed">
                Break through the static clutter with <Link to="/led-van-advertising" className="text-brand-primary font-medium hover:underline">LED Van Advertising</Link>. Trivandrum’s long linear geography makes it ideal for mobile advertising. We map strategic roadshows targeting commuter traffic during peak hours near Technopark, and redirect to retail hubs like MG Road during the evenings. This dynamic video display ensures your brand message is unmissable.
              </p>
            </motion.div>

            {/* Outdoor */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Outdoor Advertising Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Establish a dominant presence in the capital. Our outdoor advertising services secure the most coveted hoardings, gantries, and bus shelters across Thiruvananthapuram. We focus on high-dwell-time zones, ensuring that whether your audience is stuck in traffic at Pattom or cruising down the bypass, your brand commands their attention.
              </p>
            </motion.div>

            {/* Newspaper */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Newspaper Advertising</h3>
              <p className="text-slate-600 leading-relaxed">
                Trivandrum has a deeply engaged readership base. As a full-service advertising agency, we handle newspaper advertising campaigns that leverage this traditional medium's authority. We negotiate premium placements in major Malayalam and English dailies, delivering massive localized reach for inaugurations, real estate projects, and recruitment drives.
              </p>
            </motion.div>

            {/* Auto Branding */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Navigation className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Auto Branding Kerala</h3>
              <p className="text-slate-600 leading-relaxed">
                Autorickshaws are the veins of Trivandrum's public transport. Auto Branding allows your campaign to travel deep into residential areas like Sasthamangalam and Kowdiar, while also navigating the dense markets of Chalai. This provides a cost-effective, high-frequency moving billboard that ensures daily brand recall across all socio-economic segments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trivandrum Specific Zones */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900">Strategic Campaign Zones in Trivandrum</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">We tailor our mobile and static advertising deployments based on the distinct demographic zones of the capital.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trivandrumZones.map((zone, index) => (
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
              <h2 className="text-3xl font-black md:text-4xl mb-6">Proven Impact in the Capital</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We have partnered with top-tier brands, real estate developers, and healthcare institutions to execute dominant campaigns in Trivandrum. Our integrated approach—utilizing LED Vans for immediate impact and Outdoor Hoardings for sustained authority—ensures that our clients maintain market leadership.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">400+</p>
                  <p className="text-sm text-slate-400 font-medium">Successful Campaigns</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-4xl font-black text-brand-secondary mb-2">95%</p>
                  <p className="text-sm text-slate-400 font-medium">Client Retention</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Case Study: Real Estate Launch</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                A premium luxury apartment project near Technopark required highly targeted visibility. We deployed a multi-channel strategy: 2 LED Vans circling the IT park during shift changes, premium hoardings along the NH Bypass, and full-page newspaper advertising in the Sunday real estate supplements. The campaign generated over 500 qualified site visits in the first month.
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
            <p className="mt-4 text-lg text-slate-600">Common questions about launching campaigns in Thiruvananthapuram.</p>
          </div>
          <div className="grid gap-6">
            {trivandrumFaqs.map((item, index) => (
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
          <h2 className="text-4xl font-black text-slate-900 mb-6">Ready to Conquer Trivandrum?</h2>
          <p className="text-xl text-slate-600 mb-10">Whether you need LED Van Advertising, Auto Branding, or a comprehensive Outdoor Advertising campaign, our team is ready to deliver.</p>
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

export default TrivandrumLocation;
