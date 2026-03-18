import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const TRIVANDRUM_TITLE = 'LED Van Advertising in Trivandrum | B2P International';
const TRIVANDRUM_DESCRIPTION =
  'Plan LED van advertising in Trivandrum with B2P International for product launches, exhibition campaigns, capital-city promotions, and route-based local visibility.';

const trivandrumZones = [
  {
    name: 'Statue, MG Road, and central city movement',
    detail: 'Useful for broad city awareness, launch visibility, and repeated commuter impressions in core Trivandrum routes.',
    icon: Route,
  },
  {
    name: 'Technopark, Kazhakkoottam, and business corridors',
    detail: 'Best for corporate promotions, tech audience targeting, and weekday business-traffic visibility.',
    icon: Building2,
  },
  {
    name: 'Exhibition, retail, and public event zones',
    detail: 'Strong for activation-led campaigns, seasonal promotions, and event-linked brand recall.',
    icon: Store,
  },
];

const trivandrumFaqs = [
  {
    question: 'Can you run LED van campaigns in Trivandrum for launches and events?',
    answer:
      'Yes. We plan LED van campaigns in Trivandrum for product launches, exhibitions, public events, retail promotions, and wider awareness drives.',
  },
  {
    question: 'Do you help choose routes in Trivandrum?',
    answer:
      'Yes. We recommend route plans based on visibility goals, traffic flow, audience type, and campaign timing in the city.',
  },
  {
    question: 'Is Trivandrum covered as part of Kerala-wide campaigns too?',
    answer:
      'Yes. Trivandrum can be planned as a standalone city campaign or included as part of a broader Kerala rollout depending on the campaign scope.',
  },
];

const TrivandrumLocation = () => {
  return (
    <>
      <Seo
        title={TRIVANDRUM_TITLE}
        description={TRIVANDRUM_DESCRIPTION}
        keywords="LED van advertising in Trivandrum, Trivandrum mobile advertising, LED van campaign Kerala capital, roadshow advertising Trivandrum"
        path="/locations/trivandrum"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: TRIVANDRUM_TITLE,
            description: TRIVANDRUM_DESCRIPTION,
            path: '/locations/trivandrum',
          }),
          buildServiceSchema({
            name: 'LED Van Advertising in Trivandrum',
            description: TRIVANDRUM_DESCRIPTION,
            path: '/locations/trivandrum',
            areaServed: ['Trivandrum'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Trivandrum', path: '/locations/trivandrum' },
          ]),
          buildFaqSchema(trivandrumFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-brand-primary shadow-sm">
                <MapPin size={14} />
                Trivandrum Location Page
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                LED Van Advertising for <span className="text-brand-primary">Trivandrum</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Trivandrum campaigns benefit from a capital-city mindset: better route planning, sharper timing, and
                stronger attention in government, business, retail, and event-heavy zones. This page gives your site a
                dedicated answer for Trivandrum-focused local search intent.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary"
                >
                  Plan a Trivandrum Campaign
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/locations"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-900 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary"
                >
                  Back to Service Areas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] bg-[#071120] p-8 text-white shadow-2xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-300">Capital city coverage</p>
              <h2 className="mt-4 text-3xl font-black">Built for Trivandrum search relevance</h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                This page supports indexing for Trivandrum-specific searches by showing where LED van campaigns fit in
                the city and how route-based promotion works in this market.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Launches, exhibitions, institutional promotions, government-adjacent visibility, and city-wide
                    awareness campaigns.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Planning focus</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We focus on route quality, audience fit, and timing windows that improve recall in a structured
                    city campaign.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {trivandrumZones.map((zone, index) => (
              <motion.article
                key={zone.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/40"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
                  <zone.icon size={28} />
                </div>
                <h2 className="text-2xl font-black text-slate-900">{zone.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{zone.detail}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2.5rem] bg-slate-950 p-10 text-white shadow-2xl"
          >
            <h2 className="text-3xl font-black md:text-4xl">Frequently asked questions about Trivandrum campaigns</h2>
            <div className="mt-8 grid gap-5">
              {trivandrumFaqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-black text-white">{item.question}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrivandrumLocation;
