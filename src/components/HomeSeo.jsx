import Seo from './Seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  buildWebPageSchema,
  localBusinessSchema,
  websiteSchema,
  buildSiteNavigationSchema,
} from '../lib/seo';

const HOME_TITLE = 'LED Van Advertising & LED Wall Rental in Kerala | B2P International';
const HOME_DESCRIPTION =
  'Hire LED vans and LED walls in Thrissur and across Kerala. Choose single-, double- or triple-sided vans, 3-Side LED Trucks or hydraulic LED vans.';

const homeFaqs = [
  {
    question: 'Where does B2P International provide LED van advertising?',
    answer:
      'We provide LED van advertising from Thrissur across major commercial areas in Kerala, including Kochi, Kozhikode, Trivandrum, and nearby cities based on campaign requirements.',
  },
  {
    question: 'What types of campaigns work well with LED van advertising?',
    answer:
      'LED van campaigns are ideal for store launches, hypermarket promotions, real estate campaigns, exhibition marketing, political outreach, local events, and brand awareness roadshows.',
  },
  {
    question: 'How can I book an LED van advertising campaign in Thrissur?',
    answer:
      'You can contact B2P International through the website contact form, call the Thrissur office directly, or request directions to the office from the contact section to plan your campaign.',
  },
];

const HomeSeo = () => (
  <Seo
    title={HOME_TITLE}
    description={HOME_DESCRIPTION}
    keywords="LED van advertising Kerala, LED wall rental Kerala, LED van advertising Thrissur, LED wall rental Thrissur, lookwalker Kerala, mobile advertising van Thrissur, stage LED screen Kerala, outdoor advertising Kerala"
    path="/"
    schema={[
      localBusinessSchema,
      websiteSchema,
      buildWebPageSchema({
        name: HOME_TITLE,
        description: HOME_DESCRIPTION,
        path: '/',
      }),
      buildServiceSchema({
        name: 'LED Van Advertising & LED Wall Rentals in Kerala',
        description: HOME_DESCRIPTION,
        path: '/',
        serviceType: 'LED Van Advertising and LED Wall Rental',
        areaServed: ['Thrissur', 'Kochi', 'Kozhikode', 'Trivandrum', 'Kerala'],
      }),
      buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
      buildFaqSchema(homeFaqs),
      buildSiteNavigationSchema([
        { name: 'LED Van Advertising', path: '/led-van-advertising', description: 'High-resolution mobile LED screen vans for roadshows across Thrissur and Kerala.' },
        { name: 'LED Wall Rental', path: '/led-wall-rental', description: 'Outdoor and indoor LED video wall displays for events and stage backdrops.' },
        { name: 'Lookwalker Advertising', path: '/lookwalker-advertising', description: 'LED and normal lookwalkers for street-level human billboard marketing.' },
        { name: 'All Services', path: '/services', description: 'Explore video production, creative design, printing, signage, and outdoor ads.' },
        { name: 'Campaign Gallery', path: '/gallery', description: 'View photos and videos of past LED van and lookwalker advertising campaigns.' },
        { name: 'Coverage Locations', path: '/locations', description: 'Advertising service locations including Thrissur, Kochi, Kozhikode & Trivandrum.' },
        { name: 'About B2P International', path: '/about', description: 'Kerala premier offline & mobile outdoor advertising agency.' },
        { name: 'Blog & Articles', path: '/blog', description: 'Marketing insights and guides on LED advertising and outdoor branding.' },
      ]),
    ]}
  />
);

export default HomeSeo;
