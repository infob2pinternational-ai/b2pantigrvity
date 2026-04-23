import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, Route, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildWebPageSchema,
  localBusinessSchema,
} from '../lib/seo';

const LOCATIONS_TITLE = 'Service Areas | LED Van Advertising in Thrissur and Kerala';
const LOCATIONS_DESCRIPTION =
  'Explore B2P International service areas for LED van advertising in Thrissur and across Kerala, including campaign planning for roadshows, launches, retail promotions, and high-footfall routes.';

const coverageAreas = [
  {
    name: 'Thrissur',
    label: 'Headquarters and strongest local campaign coverage',
    path: '/locations/thrissur',
  },
  {
    name: 'Kochi / Ernakulam',
    label: 'Metro routes, launch corridors, and commercial visibility',
    path: '/locations/kochi',
  },
  {
    name: 'Kozhikode',
    label: 'North Kerala retail, roadshow, and event campaigns',
    path: '/locations/kozhikode',
  },
  {
    name: 'Trivandrum',
    label: 'Government, exhibition, and capital-city promotions',
    path: '/locations/trivandrum',
  },
];

const locationUseCases = [
  {
    title: 'Retail openings and hypermarket launches',
    description:
      'Drive launch-day awareness in busy shopping belts, residential catchments, and nearby junctions where footfall and vehicle traffic overlap.',
    icon: Store,
  },
  {
    title: 'Political, exhibition, and public event roadshows',
    description:
      'Take campaign visuals directly into the streets, event venues, and high-attention corridors instead of depending on one static location.',
    icon: Route,
  },
  {
    title: 'City-wise brand visibility planning',
    description:
      'We help brands select the right districts, timings, and route clusters so the same campaign can scale across Kerala without losing local relevance.',
    icon: Building2,
  },
];

const Locations = () => {
  return (
    <>
      <Seo
        title={LOCATIONS_TITLE}
        description={LOCATIONS_DESCRIPTION}
        keywords="LED van advertising service areas, Thrissur LED van advertising, Kerala mobile advertising coverage, roadshow service areas Kerala"
        path="/locations"
        schema={[
          localBusinessSchema,
          buildWebPageSchema({
            name: LOCATIONS_TITLE,
            description: LOCATIONS_DESCRIPTION,
            path: '/locations',
            type: 'CollectionPage',
          }),
          buildBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Locations', path: '/locations' },
          ]),
          buildItemListSchema({
            name: 'B2P International LED van advertising service areas',
            items: coverageAreas.map((area) => ({
              name: area.name,
              path: area.path || '/locations',
            })),
          }),
        ]}
      />

      <section className="relative overflow-hidden bg-slate-50 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-brand-primary shadow-sm">
              <MapPin size={14} />
              Kerala Service Areas
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              LED Van Advertising Coverage for <span className="text-brand-primary">Thrissur and Kerala</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              B2P International plans mobile LED campaigns for brands that need city-specific reach, better
              route targeting, and stronger recall in busy commercial areas. This hub helps Google and visitors
              understand where we operate and where local campaign planning matters most.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coverageAreas.map((area, index) => (
              <motion.article
                key={area.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/60"
              >
                <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-primary">Coverage Area</p>
                <h2 className="mt-4 text-2xl font-black text-slate-900">{area.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{area.label}</p>
                {area.path ? (
                  <Link
                    to={area.path}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-primary transition-colors hover:text-brand-secondary"
                  >
                    View local page
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-primary transition-colors hover:text-brand-secondary"
                  >
                    Ask about coverage
                    <ArrowRight size={16} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {locationUseCases.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2.5rem] bg-[#071120] p-10 text-white shadow-2xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-300">Local SEO Landing Pages</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Start with our <span className="text-brand-primary">Thrissur location page</span>
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              We now have dedicated location pages for Thrissur, Kochi, and Kozhikode. These pages are built to
              support city-specific indexing, stronger internal linking, and better relevance for local search terms.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/locations/thrissur"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary hover:text-white"
              >
                Open Thrissur Page
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/locations/kochi"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:border-brand-primary hover:bg-white/10"
              >
                Open Kochi Page
              </Link>
              <Link
                to="/locations/kozhikode"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:border-brand-primary hover:bg-white/10"
              >
                Open Kozhikode Page
              </Link>
              <Link
                to="/locations/trivandrum"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-black text-white transition-all duration-300 hover:border-brand-primary hover:bg-white/10"
              >
                Open Trivandrum Page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Locations;
