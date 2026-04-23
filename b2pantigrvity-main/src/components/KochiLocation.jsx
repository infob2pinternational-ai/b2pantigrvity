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

const KOCHI_TITLE = 'LED Van Advertising in Kochi | B2P International';
const KOCHI_DESCRIPTION =
  'Book LED van advertising in Kochi and Ernakulam with B2P International for mall launches, metro-area roadshows, retail promotions, and high-visibility city campaigns.';

const kochiZones = [
  {
    name: 'MG Road and central commercial corridors',
    detail: 'Strong for brand launches, retail footfall, and busy commuter attention throughout the day.',
    icon: Route,
  },
  {
    name: 'Edappally, Lulu belt, and high-retail traffic zones',
    detail: 'Useful for hypermarket promotions, new store awareness, and repeated exposure near premium shopping clusters.',
    icon: Store,
  },
  {
    name: 'Kakkanad, Infopark side, and business districts',
    detail: 'Best fit for corporate promotions, tech-audience reach, and weekday campaign targeting.',
    icon: Building2,
  },
];

const kochiFaqs = [
  {
    question: 'Can you run LED van campaigns in Kochi and Ernakulam together?',
    answer:
      'Yes. We can plan campaigns across Kochi city and wider Ernakulam zones depending on route goals, target audience, and campaign duration.',
  },
  {
    question: 'What types of campaigns work best in Kochi?',
    answer:
      'Kochi campaigns work especially well for retail launches, exhibitions, mall-area promotions, real estate visibility, corporate activations, and product awareness drives.',
  },
  {
    question: 'Do you help select the best routes in Kochi?',
    answer:
      'Yes. We recommend route clusters based on traffic behavior, shopping patterns, business areas, and the local timing that best matches your audience.',
  },
];

const KochiLocation = () => {
  return (
    <>
      <Seo
        title={KOCHI_TITLE}
        description={KOCHI_DESCRIPTION}
        keywords="LED van advertising in Kochi, Kochi mobile advertising, Ernakulam LED van advertising, roadshow advertising Kochi, local marketing Kochi"
        path="/locations/kochi"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: KOCHI_TITLE,
            description: KOCHI_DESCRIPTION,
            path: '/locations/kochi',
          }),
          buildServiceSchema({
            name: 'LED Van Advertising in Kochi',
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

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-brand-primary shadow-sm">
                <MapPin size={14} />
                Kochi Location Page
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                LED Van Advertising for <span className="text-brand-primary">Kochi and Ernakulam</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                Kochi gives brands a very different visibility profile from Thrissur. With mall traffic, metro-linked
                movement, retail hotspots, and strong business corridors, LED van advertising works well here for
                launches, high-energy promotions, and route-based urban awareness campaigns.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary"
                >
                  Plan a Kochi Campaign
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
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-300">Urban campaign planning</p>
              <h2 className="mt-4 text-3xl font-black">Designed for high-movement city routes</h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                Kochi campaigns benefit from route planning that balances traffic density, commercial timing, and repeat
                exposure near retail and business clusters. This page helps Google understand that we serve Kochi with a
                dedicated local approach, not just a statewide generic service.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Retail launches, city activations, mall-belt promotions, exhibition visibility, and corporate
                    awareness campaigns.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Coverage mindset</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We focus on route efficiency, message frequency, and visibility quality instead of just maximizing
                    kilometers.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {kochiZones.map((zone, index) => (
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
            <h2 className="text-3xl font-black md:text-4xl">Frequently asked questions about Kochi campaigns</h2>
            <div className="mt-8 grid gap-5">
              {kochiFaqs.map((item) => (
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

export default KochiLocation;
