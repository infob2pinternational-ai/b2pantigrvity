import { useEffect } from 'react';

const HOME_TITLE = 'LED Van Advertising in Thrissur, Kerala | B2P International';
const HOME_DESCRIPTION = 'B2P International delivers LED van advertising in Thrissur and across Kerala for roadshows, store launches, event promotions, and high-visibility local brand campaigns.';

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'LocalBusiness',
            '@id': 'https://www.b2pinternational.com/#localbusiness',
            name: 'B2P International',
            image: 'https://www.b2pinternational.com/led-van-advertising.png',
            url: 'https://www.b2pinternational.com/',
            telephone: '+91 89899 09034',
            email: 'info@b2pinternational.com',
            priceRange: '$$',
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
            areaServed: [
                {
                    '@type': 'City',
                    name: 'Thrissur',
                },
                {
                    '@type': 'State',
                    name: 'Kerala',
                },
            ],
            sameAs: [
                'https://www.facebook.com/b2pinternational',
                'https://www.instagram.com/b2p_international/',
            ],
            description: HOME_DESCRIPTION,
        },
        {
            '@type': 'Service',
            '@id': 'https://www.b2pinternational.com/#led-van-advertising-service',
            name: 'LED Van Advertising in Thrissur and Kerala',
            serviceType: 'LED Van Advertising',
            url: 'https://www.b2pinternational.com/led-van-advertising',
            description: 'Mobile LED van advertising for roadshows, launches, local promotions, retail campaigns, and outdoor brand visibility across Thrissur and Kerala.',
            areaServed: [
                {
                    '@type': 'City',
                    name: 'Thrissur',
                },
                {
                    '@type': 'State',
                    name: 'Kerala',
                },
            ],
            provider: {
                '@id': 'https://www.b2pinternational.com/#localbusiness',
            },
        },
    ],
};

const setMetaContent = (selector, content) => {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute('content', content);
    }
};

const HomeSeo = () => {
    useEffect(() => {
        document.title = HOME_TITLE;
        setMetaContent('meta[name="description"]', HOME_DESCRIPTION);
        setMetaContent('meta[property="og:title"]', HOME_TITLE);
        setMetaContent('meta[property="og:description"]', HOME_DESCRIPTION);
    }, []);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
    );
};

export default HomeSeo;
