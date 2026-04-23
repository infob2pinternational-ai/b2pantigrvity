import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, MapPin, Route, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const KOZHIKODE_TITLE = 'LED Van Advertising in Kozhikode | B2P International';
const KOZHIKODE_DESCRIPTION =
  'Run LED van advertising in Kozhikode with B2P International for retail campaigns, product launches, event promotion, and North Kerala roadshow visibility.';

const kozhikodeZones = [
  {
    name: 'SM Street and dense retail shopping corridors',
    detail: 'Best for repeated retail visibility, store awareness, and local shopper-focused promotions.',
    icon: Store,
  },
  {
    name: 'Bypass and major commuter movement routes',
    detail: 'Helpful when your goal is broad city visibility and repeated pass-by impressions at scale.',
    icon: Route,
  },
  {
    name: 'Event-led and weekend activation areas',
    detail: 'Useful for exhibition promotions, public events, and campaign bursts tied to crowded timings.',
    icon: Clock3,
  },
];

const kozhikodeFaqs = [
  {
    question: 'Do you provide LED van campaigns in Kozhikode and other parts of North Kerala?',
    answer:
      'Yes. Kozhikode is a strong North Kerala campaign base, and routes can also be planned around nearby target areas based on the promotion.',
  },
  {
    question: 'What businesses usually book LED van advertising in Kozhikode?',
    answer:
      'Retail stores, educational events, exhibitions, real estate launches, and product promotions commonly use LED van advertising in Kozhikode.',
  },
  {
    question: 'Can you help with timing and route suggestions for Kozhikode campaigns?',
    answer:
      'Yes. We recommend timing and route groupings around shopper movement, traffic flow, event peaks, and the local awareness goals of the campaign.',
  },
];

const KozhikodeLocation = () => {
  return (
    <>
      <Seo
        title={KOZHIKODE_TITLE}
        description={KOZHIKODE_DESCRIPTION}
        keywords="LED van advertising in Kozhikode, Kozhikode mobile advertising, North Kerala LED van campaigns, roadshow advertising Kozhikode"
        path="/locations/kozhikode"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: KOZHIKODE_TITLE,
            description: KOZHIKODE_DESCRIPTION,
            path: '/locations/kozhikode',
          }),
          buildServiceSchema({
            name: 'LED Van Advertising in Kozhikode',
            description: KOZHIKODE_DESCRIPTION,
            path: '/locations/kozhikode',
            areaServed: ['Kozhikode'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Kozhikode', path: '/locations/kozhikode' },
          ]),
          buildFaqSchema(kozhikodeFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-brand-primary shadow-sm">
                <MapPin size={14} />
                Kozhikode Location Page
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                LED Van Advertising for <span className="text-brand-primary">Kozhikode and North Kerala</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Kozhikode campaigns are ideal when you want strong city recall, concentrated retail visibility, or a
                high-attention roadshow route in North Kerala. We help brands plan mobile LED promotions here with a
                location-first strategy instead of using one statewide message everywhere.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary"
                >
                  Plan a Kozhikode Campaign
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
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-300">North Kerala reach</p>
              <h2 className="mt-4 text-3xl font-black">A dedicated page for Kozhikode search intent</h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                This page gives your website a clearer answer for location-specific searches around Kozhikode and North
                Kerala. It supports Google indexing by showing that your service applies to a real city market with its
                own campaign use cases and audience flow.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Retail launches, exhibition promotions, local product awareness, and visibility campaigns across busy
                    shopping and transit routes.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Planning focus</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We focus on route density, campaign timing, local recall, and practical visibility rather than only
                    statewide coverage claims.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {kozhikodeZones.map((zone, index) => (
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
            <h2 className="text-3xl font-black md:text-4xl">Frequently asked questions about Kozhikode campaigns</h2>
            <div className="mt-8 grid gap-5">
              {kozhikodeFaqs.map((item) => (
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

export default KozhikodeLocation;
