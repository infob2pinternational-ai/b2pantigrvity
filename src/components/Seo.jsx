import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_OG_IMAGE, SITE_NAME, toAbsoluteUrl } from '../lib/seo';

const ensureMetaTag = (attribute, key, content) => {
  const selector = `meta[${attribute}="${key}"]`;
  let tag = document.head.querySelector(selector);

  if (!content) {
    tag?.remove();
    return null;
  }

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
  return tag;
};

const ensureLinkTag = (rel, href) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
  return link;
};

const removeDynamicSchemas = () => {
  document
    .querySelectorAll('script[data-b2p-seo-schema="true"]')
    .forEach((script) => script.remove());
};

const normalizeSchemas = (schema) => {
  if (!schema) {
    return [];
  }

  return Array.isArray(schema) ? schema.filter(Boolean) : [schema];
};

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
  const location = useLocation();
  const schemaSignature = JSON.stringify(normalizeSchemas(schema));

  useEffect(() => {
    const resolvedPath = path ?? location.pathname ?? '/';
    const canonicalUrl = toAbsoluteUrl(resolvedPath);
    const ogImage = toAbsoluteUrl(image) || DEFAULT_OG_IMAGE;
    const schemas = JSON.parse(schemaSignature);

    document.title = title;

    ensureLinkTag('canonical', canonicalUrl);

    ensureMetaTag('name', 'description', description);
    ensureMetaTag('name', 'keywords', keywords);
    ensureMetaTag('name', 'robots', robots);
    ensureMetaTag('name', 'author', SITE_NAME);
    ensureMetaTag('name', 'twitter:card', 'summary_large_image');
    ensureMetaTag('name', 'twitter:title', title);
    ensureMetaTag('name', 'twitter:description', description);
    ensureMetaTag('name', 'twitter:image', ogImage);

    ensureMetaTag('property', 'og:title', title);
    ensureMetaTag('property', 'og:description', description);
    ensureMetaTag('property', 'og:url', canonicalUrl);
    ensureMetaTag('property', 'og:image', ogImage);
    ensureMetaTag('property', 'og:type', type);
    ensureMetaTag('property', 'og:site_name', SITE_NAME);
    ensureMetaTag('property', 'og:locale', 'en_IN');

    removeDynamicSchemas();

    schemas.forEach((entry, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.b2pSeoSchema = 'true';
      script.dataset.b2pSeoSchemaIndex = String(index);
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    return () => {
      removeDynamicSchemas();
    };
  }, [description, image, keywords, location.pathname, path, robots, schemaSignature, title, type]);

  return null;
};

export default Seo;
