export const SITE_URL = 'https://www.b2pinternational.com';
export const SITE_NAME = 'B2P International';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/led-van-advertising.png`;
export const LOGO_URL = `${SITE_URL}/B2P_logo_trimmed.png`;

export const BUSINESS_DETAILS = {
  name: SITE_NAME,
  telephone: '+91 89899 09034',
  email: 'info@b2pinternational.com',
  priceRange: '$$',
  foundingDate: '2012',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10/15 Devassy Square, Marathakam Centre, Puranattukara',
    addressLocality: 'Thrissur',
    addressRegion: 'Kerala',
    postalCode: '680014',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.5526103,
    longitude: 76.1577759,
  },
  sameAs: [
    'https://www.facebook.com/b2pinternational',
    'https://www.instagram.com/b2p_international/',
  ],
};

export const toAbsoluteUrl = (value = '/') => {
  if (!value) {
    return null;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const normalizedValue = value.startsWith('/') ? value : `/${value}`;
  return `${SITE_URL}${normalizedValue}`;
};

const toAreaServedEntity = (name) => {
  if (!name) {
    return null;
  }

  const normalized = name.trim().toLowerCase();

  if (normalized === 'kerala') {
    return { '@type': 'State', name: 'Kerala' };
  }

  return { '@type': 'City', name };
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  additionalType: 'https://schema.org/AdvertisingAgency',
  name: BUSINESS_DETAILS.name,
  image: DEFAULT_OG_IMAGE,
  logo: LOGO_URL,
  url: `${SITE_URL}/`,
  telephone: BUSINESS_DETAILS.telephone,
  email: BUSINESS_DETAILS.email,
  priceRange: BUSINESS_DETAILS.priceRange,
  foundingDate: BUSINESS_DETAILS.foundingDate,
  description:
    'B2P International provides LED van advertising in Thrissur and across Kerala for launches, roadshows, local promotions, and outdoor brand visibility.',
  address: BUSINESS_DETAILS.address,
  geo: BUSINESS_DETAILS.geo,
  areaServed: ['Thrissur', 'Kochi', 'Kozhikode', 'Trivandrum', 'Kerala'].map(toAreaServedEntity),
  sameAs: BUSINESS_DETAILS.sameAs,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: BUSINESS_DETAILS.telephone,
      contactType: 'customer service',
      email: BUSINESS_DETAILS.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam'],
    },
  ],
  hasMap:
    'https://www.google.com/maps/place/B2P+International/@10.5526103,76.1577759,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7ed9e0cd49fcd:0xc11fbcc27327b5c0!8m2!3d10.5526103!4d76.1577759!16s%2Fg%2F11f66qsbkt',
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  inLanguage: 'en-IN',
  publisher: { '@id': `${SITE_URL}/#localbusiness` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog`,
    query: 'LED van advertising Kerala',
  },
};

export const buildWebPageSchema = ({
  name,
  description,
  path,
  type = 'WebPage',
}) => {
  const url = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#localbusiness` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: DEFAULT_OG_IMAGE,
    },
  };
};

export const buildServiceSchema = ({
  name,
  description,
  path,
  serviceType = 'LED Van Advertising',
  areaServed = ['Thrissur', 'Kerala'],
}) => {
  const url = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType,
    url,
    provider: { '@id': `${SITE_URL}/#localbusiness` },
    areaServed: areaServed.map(toAreaServedEntity).filter(Boolean),
  };
};

export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path || '/'),
  })),
});

export const buildFaqSchema = (faqItems) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const buildItemListSchema = ({ name, items }) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: toAbsoluteUrl(item.path || '/'),
  })),
});

export const buildBlogPostingSchema = ({
  headline,
  description,
  image = DEFAULT_OG_IMAGE,
  datePublished,
  author,
  path = '/blog',
  keywords = [],
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline,
  description,
  image: toAbsoluteUrl(image),
  datePublished,
  dateModified: datePublished,
  author: {
    '@type': 'Organization',
    name: author,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
  },
  mainEntityOfPage: toAbsoluteUrl(path),
  keywords,
});
