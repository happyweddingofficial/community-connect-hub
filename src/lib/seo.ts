import { site, socials, faqs as siteFaqs } from "@/content/site";

/**
 * Helper to construct absolute canonical URLs.
 */
export function getCanonicalUrl(path: string = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
}

/**
 * 1. Global Organization & LocalBusiness JSON-LD schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.siteUrl}/#organization`,
    name: site.name,
    alternateName: ["Nikah Dot Com", "Nikah Matrimonial Advertising"],
    url: site.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${site.siteUrl}/favicon.png`,
      caption: `${site.name} Logo`,
    },
    image: `${site.siteUrl}/favicon.png`,
    description: site.fullDescription,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.locality,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Kerala",
      },
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "Place",
        name: "GCC / Global Malayali Community",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        contactOption: "TollFree",
        availableLanguage: ["English", "Malayalam"],
      },
    ],
    sameAs: socials.map((s) => s.href),
  };
}

/**
 * 2. WebSite JSON-LD schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    name: site.name,
    alternateName: site.tagline,
    url: site.siteUrl,
    description: site.shortDescription,
    publisher: {
      "@id": `${site.siteUrl}/#organization`,
    },
    inLanguage: ["en", "ml"],
  };
}

/**
 * 3. Matrimonial Advertising Service JSON-LD schema
 */
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.siteUrl}/#service`,
    name: "Matrimonial Advertising & Profile Sharing Service",
    serviceType: "Matrimonial Advertising",
    provider: {
      "@id": `${site.siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kerala, India",
    },
    description:
      "A transparent matrimonial advertising and profile-sharing service facilitating direct family connections without broker commissions or marriage bureau fees.",
    termsOfService: `${site.siteUrl}/terms`,
    category: "Matrimonial Advertising",
  };
}

/**
 * 4. FAQPage JSON-LD schema (for AEO / AI search answers)
 */
export function getFaqSchema(items = siteFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/**
 * 5. BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: getCanonicalUrl(item.path),
      })),
    ],
  };
}

/**
 * 6. WebPage JSON-LD schema with Speakable specification (for Voice Search & AEO)
 */
export function getWebPageSchema({
  title,
  description,
  path,
  speakableSelectors = ["h1", "p"],
}: {
  title: string;
  description: string;
  path: string;
  speakableSelectors?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${getCanonicalUrl(path)}/#webpage`,
    url: getCanonicalUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": `${site.siteUrl}/#website`,
    },
    about: {
      "@id": `${site.siteUrl}/#organization`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
    inLanguage: "en",
  };
}
