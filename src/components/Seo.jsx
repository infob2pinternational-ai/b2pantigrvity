import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, toAbsoluteUrl } from '../lib/seo';

const Seo = ({
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  robots = 'index,follow',
  path,
  schema,
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = toAbsoluteUrl(path ?? pathname);
  const ogImage = toAbsoluteUrl(image) || DEFAULT_OG_IMAGE;
  const schemas = (Array.isArray(schema) ? schema : [schema]).filter(Boolean);

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      {schemas.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
};

export default Seo;
