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

const HOME_TITLE = 'LED Van, Signage, Printing & Video Production Thrissur Kerala | B2P International';
const HOME_DESCRIPTION =
  'B2P International provides 360-degree marketing & advertising services in Thrissur & Kerala, including LED van advertising, LED lookwalkers, LED wall rentals, video production, creative design, printing solutions, 3D signage boards, and outdoor branding.';

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
    keywords="LED advertising Kerala, LED lookwalker, normal look walker, LED wall rentals, LED van advertising Thrissur, video production Thrissur, creative designing agency Thrissur, printing solutions Thrissur, acrylic signage boards Thrissur, 3D LED letters Kerala, outdoor advertising Thrissur"
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
        name: 'LED Advertising & Rentals in Thrissur and Kerala',
        description:
          'Mobile LED van advertising, LED lookwalkers, normal look walkers, and LED wall rentals for launches, local promotions, roadshows, and outdoor brand campaigns across Thrissur and Kerala.',
        path: '/led-van-advertising',
      }),
      buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
      buildFaqSchema(homeFaqs),
      buildSiteNavigationSchema([
        { name: 'Services', path: '/services' },
        { name: 'Locations', path: '/locations' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'About Us', path: '/about' },
        { name: 'LED Van Advertising', path: '/led-van-advertising' },
      ]),
    ]}
  />
);

export default HomeSeo;
