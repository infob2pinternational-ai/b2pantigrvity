import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, MapPin, Megaphone, Route, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const THRISSUR_TITLE = 'LED Van Advertising in Thrissur | B2P International';
const THRISSUR_DESCRIPTION =
  'Plan LED van advertising in Thrissur with B2P International for Swaraj Round routes, local launches, roadshows, event promotion, and targeted city-wide brand visibility.';

const thrissurHotspots = [
  {
    name: 'Swaraj Round and central Thrissur',
    detail: 'Best for visibility during high-footfall hours, festivals, and retail-focused campaign bursts.',
    icon: Route,
  },
  {
    name: 'Puranattukara, West Fort, and nearby residential corridors',
    detail: 'Useful for local launch awareness, hypermarket promotions, and repeated neighborhood frequency.',
    icon: MapPin,
  },
  {
    name: 'Shaktan Nagar, Mannuthy, and connecting transit belts',
    detail: 'Strong for commuter attention, educational clusters, and event spillover traffic.',
    icon: Clock3,
  },
];

const thrissurFaqs = [
  {
    question: 'Can B2P International plan LED van routes inside Thrissur city?',
    answer:
      'Yes. We help plan route timing, message sequencing, and target zones in Thrissur based on business goals, campaign dates, and the audience you want to reach.',
  },
  {
    question: 'What kinds of businesses use LED van advertising in Thrissur?',
    answer:
      'Retail stores, hypermarkets, jewelry brands, real estate projects, exhibition organizers, colleges, and local event promoters use LED vans to increase visibility in Thrissur.',
  },
  {
    question: 'Do you only cover Thrissur city, or nearby Kerala areas too?',
    answer:
      'Thrissur is our main local coverage area, but campaigns can be extended to nearby districts and statewide Kerala routes depending on the scale of the promotion.',
  },
];

const ThrissurLocation = () => {
  return (
    <>
      <Seo
        title={THRISSUR_TITLE}
        description={THRISSUR_DESCRIPTION}
        keywords="LED van advertising in Thrissur, Thrissur mobile advertising, roadshow advertising Thrissur, local marketing Thrissur, B2P International Thrissur"
        path="/locations/thrissur"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: THRISSUR_TITLE,
            description: THRISSUR_DESCRIPTION,
            path: '/locations/thrissur',
          }),
          buildServiceSchema({
            name: 'LED Van Advertising in Thrissur',
            description: THRISSUR_DESCRIPTION,
            path: '/locations/thrissur',
            areaServed: ['Thrissur'],
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
            { name: 'Thrissur', path: '/locations/thrissur' },
          ]),
          buildFaqSchema(thrissurFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.10),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-brand-primary shadow-sm">
                <MapPin size={14} />
                Thrissur Location Page
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                LED Van Advertising Campaigns Built for <span className="text-brand-primary">Thrissur</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                If you are targeting shoppers, commuters, event visitors, or residential catchments in Thrissur,
                LED van advertising gives you a more flexible option than static outdoor space. B2P International
                helps brands plan moving digital campaigns for launches, roadshows, store activations, and
                city-wide awareness across the strongest local routes.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary"
                >
                  Plan a Thrissur Campaign
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/locations"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-black text-slate-900 transition-all duration-300 hover:border-brand-primary hover:text-brand-primary"
                >
                  See All Service Areas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] bg-[#071120] p-8 text-white shadow-2xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-300">Why local pages matter</p>
              <h2 className="mt-4 text-3xl font-black">Stronger signals for “LED van near me” searches</h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                This page is focused on Thrissur-specific intent, which helps both users and Google connect your
                service with a real local market. It supports the main service page instead of replacing it.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Best fit campaigns</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Retail launches, hypermarket promotions, roadshows, exhibition visibility, and real estate
                    project awareness in and around Thrissur.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-primary">Local reach strategy</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We help map the right route, timing, and message frequency so the same campaign keeps showing
                    up where your target audience actually moves through the city.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {thrissurHotspots.map((spot, index) => (
              <motion.article
                key={spot.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-lg shadow-slate-200/40"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
                  <spot.icon size={28} />
                </div>
                <h2 className="text-2xl font-black text-slate-900">{spot.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{spot.detail}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                <Store size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">When a Thrissur campaign works best</h2>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>Store openings that need awareness in a short launch window.</li>
                <li>Weekend or festival campaigns that rely on crowd concentration.</li>
                <li>Repeated neighborhood promotions where message recall matters.</li>
                <li>Exhibitions, campus activations, and brand roadshows around busy transit paths.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
                <Megaphone size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-900">How we plan local visibility</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                We combine route logic, local timing, message length, and campaign objectives so your LED van
                creative is seen in the right parts of Thrissur at the right time. That means fewer wasted passes
                and better brand recall.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-primary transition-colors hover:text-brand-secondary"
              >
                Explore all services
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2.5rem] bg-slate-950 p-10 text-white shadow-2xl"
          >
            <h2 className="text-3xl font-black md:text-4xl">Frequently asked questions about Thrissur campaigns</h2>
            <div className="mt-8 grid gap-5">
              {thrissurFaqs.map((item) => (
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

export default ThrissurLocation;
