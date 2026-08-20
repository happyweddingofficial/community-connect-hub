/**
 * ── SITE CONTENT ──────────────────────────────────────────────────────────
 * Core data and text for Nikah.com — Matrimonial Advertising & Profile Sharing Service.
 */
import couplesImage from "@/assets/couples.webp";

/* ── 1. Basics ─────────────────────────────────────────────────────────── */
export const site: {
  name: string;
  tagline: string;
  shortDescription: string;
  disclaimer: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email?: string;
  phone: string;
  address: string;
} = {
  name: "Nikah.com",
  tagline: "Matrimonial Advertising & Profile Sharing Service",
  shortDescription:
    "A transparent matrimonial advertising and profile-sharing platform helping families and individuals discover genuine marriage proposals with respect and privacy.",
  disclaimer:
    "Nikah.com is a matrimonial advertising and profile-sharing service. We are NOT a matrimonial broker, marriage bureau, or matchmaking agency.",
  /** WhatsApp number in international format, digits only (country code first). */
  whatsappNumber: "919497133695",
  /** Default message pre-filled when someone taps a WhatsApp button. */
  whatsappMessage: "Hi! I'd like to know more about matrimonial profile sharing on Nikah.com.",
  phone: "+91 94971 33695",
  address: "Malappuram, Kerala, India",
};

/** Builds a WhatsApp chat link. Optionally pass a custom message. */
export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Builds a Google Maps search link for an address. */
export function mapsLink(address: string = site.address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/* ── 2. Navigation ─────────────────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Terms & Policy", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Contact Us", to: "/contact" },
] as const;

/* ── 3. Home hero ──────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "Matrimonial Advertising & Profile Sharing",
  headline: "Connecting families with respect, privacy & trust",
  description:
    "We facilitate genuine matrimonial enquiries through transparent profile advertising and sharing across our website, social media, and WhatsApp networks.",
  primaryCta: { label: "Contact on WhatsApp", href: whatsappLink() },
  secondaryCta: { label: "How Our Service Works", to: "/about" },
  image: couplesImage,
  imageAlt: "Nikah.com Matrimonial Proposals",
  stats: [
    { value: "100%", label: "Privacy Focused" },
    { value: "Direct", label: "Family Connection" },
    { value: "Verified", label: "Genuine Enquiries" },
  ],
};

/* ── 4. How Service Works ──────────────────────────────────────────────── */
export const howItWorks = {
  title: "How Our Service Works",
  subtitle:
    "A straightforward, transparent process designed to help you discover and connect with suitable matrimonial proposals.",
  steps: [
    {
      stepNumber: "01",
      title: "Profile Submission",
      description:
        "Matrimonial profiles are received directly from individuals or families, or through profile contributors and trusted business partners.",
    },
    {
      stepNumber: "02",
      title: "Review & Preparation",
      description:
        "After receiving relevant matrimonial information, profiles are reviewed, formatted, and prepared for responsible matrimonial advertising.",
    },
    {
      stepNumber: "03",
      title: "Promotion & Profile Sharing",
      description:
        "Profiles are shared through our website, official WhatsApp services, and social media platforms to reach interested individuals and families.",
    },
    {
      stepNumber: "04",
      title: "Direct Family Connection",
      description:
        "Interested individuals access available profile details and connect directly with the relevant family or contact person. We make no marriage decisions on your behalf.",
    },
  ],
};

/* ── 5. Key Service Pillars / Features ─────────────────────────────────── */
export const servicePillars = [
  {
    title: "Matrimonial Advertising",
    description:
      "We advertise and share matrimonial profiles across verified digital channels to help families discover genuine proposals efficiently.",
  },
  {
    title: "Respect & Privacy First",
    description:
      "We treat every individual and family with dignity. Reasonable measures are maintained to safeguard personal data and photographs.",
  },
  {
    title: "Direct Communication",
    description:
      "Connect directly with families without middleman interference or broker commissions. You retain full control over your decisions.",
  },
  {
    title: "Prompt Profile Removal",
    description:
      "Respecting privacy is our priority. If you need any profile updated or removed, our official support handles genuine requests promptly.",
  },
];

/* ── 6. Matrimonial Advertising Policy Highlights ──────────────────────── */
export const advertisingPolicyHighlights = {
  title: "Our Matrimonial Advertising Policy",
  description:
    "Please read our clear principles regarding service nature, user verification, and subscriptions.",
  points: [
    {
      title: "Not a Broker or Matchmaking Bureau",
      description:
        "Nikah.com is an advertising and profile-sharing platform. We do not act as matrimonial brokers, marriage bureaus, or matchmaking agencies.",
    },
    {
      title: "Independent Verification Required",
      description:
        "Users and families are strongly advised to independently verify identity, family background, education, occupation, marital status, and other details before proceeding.",
    },
    {
      title: "No Outcome Guarantees",
      description:
        "We do not guarantee the authenticity, suitability, compatibility, response, or successful outcome of any matrimonial proposal.",
    },
    {
      title: "Transparent Service Subscriptions",
      description:
        "Subscription fees are service fees for platform access and promotional features during the chosen period — not payments for arranging a marriage.",
    },
  ],
};

/* ── 7. Reviews / Testimonials ─────────────────────────────────────────── */
export const reviews = [
  {
    name: "Fathima & Family",
    location: "Kerala",
    rating: 5,
    date: "February 2026",
    text: "The WhatsApp profile sharing service made it very easy for our family to connect with genuine proposals. Transparent and very respectful communication.",
  },
  {
    name: "Abdul Rahman",
    location: "Malappuram",
    rating: 5,
    date: "January 2026",
    text: "I appreciate that Nikah.com is straightforward about being an advertising service rather than a broker. Found genuine family contacts directly through WhatsApp.",
  },
  {
    name: "Suhara B.",
    location: "Calicut",
    rating: 5,
    date: "December 2025",
    text: "Very prompt support when we had questions about profile details. Clean and respectful platform for family-oriented proposals.",
  },
  {
    name: "Mohammed Niyas",
    location: "Kerala",
    rating: 5,
    date: "November 2025",
    text: "Great experience with the WhatsApp service. The profiles were detailed and we could contact the families directly without any third-party pressure.",
  },
];

/* ── 8. FAQs ───────────────────────────────────────────────────────────── */
export const faqs = [
  {
    question: "What is Nikah.com and how does it work?",
    answer:
      "Nikah.com is a matrimonial advertising and profile-sharing service. We receive matrimonial details directly from families or contributors, format and review them, and share them via our website, social media, and WhatsApp services so interested individuals and families can connect directly.",
  },
  {
    question: "Is Nikah.com a marriage bureau or matrimonial broker?",
    answer:
      "No. Nikah.com is NOT a matrimonial broker, marriage bureau, or matchmaking agency. We do not make marriage decisions on behalf of users or families, nor do we arrange marriages. We are an advertising and profile-sharing platform.",
  },
  {
    question: "Who is responsible for verifying profile details?",
    answer:
      "Users and families are responsible for independently verifying the identity, background, education, occupation, marital status, and suitability of any profile before proceeding with a matrimonial relationship.",
  },
  {
    question: "What do subscription fees cover?",
    answer:
      "Subscription fees are service fees charged for access to profile-sharing features and contact access for the specified subscription period. A subscription does not guarantee any marriage, proposal, response, or specific matrimonial outcome.",
  },
  {
    question: "How can I request profile removal or update my privacy settings?",
    answer:
      "If you believe your profile, photograph, or information has been published without permission, or if you wish to remove an active profile, contact us through our official WhatsApp (+91 94971 33695) with the profile details or URL. We review and process genuine requests promptly.",
  },
  {
    question: "How do I submit a matrimonial profile?",
    answer:
      "You can contact us directly on WhatsApp (+91 94971 33695) to submit profile details, photographs, and preferences. Our team will guide you through the format and review process.",
  },
];

/* ── 9. Final CTA ──────────────────────────────────────────────────────── */
export const finalCta = {
  headline: "Looking for Genuine Matrimonial Proposals?",
  text: "Send a message on WhatsApp to share your profile or enquire about available matrimonial proposals.",
  buttonLabel: "Chat on WhatsApp",
};

/* ── 10. Social links ──────────────────────────────────────────────────── */
export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/share/1F29hkZHaa/" },
  { label: "Instagram", href: "https://www.instagram.com/_nikah.com_" },
  { label: "YouTube", href: "https://youtube.com/@nikah.com12" },
];

/* ── 11. Footer ────────────────────────────────────────────────────────── */
export const footer = {
  description:
    "Nikah.com is a matrimonial advertising and profile-sharing service supporting genuine matrimonial connections with respect, transparency, and responsibility.",
  policyLinks: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms & Conditions", to: "/terms" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} ${site.name} Powered by Hapco Media`,
};

/* ── 12. About page ────────────────────────────────────────────────────── */
export const about = {
  headline: "About Nikah.com",
  intro:
    "At Nikah.com, we believe that every individual and family deserves respect, privacy, and transparency in their search for a life partner.",
  story:
    "Nikah.com is a matrimonial advertising and profile-sharing platform that helps people discover and connect with potential marriage proposals. We are not a matrimonial broker or marriage bureau. Our purpose is to facilitate genuine matrimonial enquiries with dignity, clarity, and ease.",
  mission:
    "To support genuine matrimonial connections by providing a trusted, transparent advertising and profile-sharing platform for families and individuals.",
  vision:
    "A respectful, transparent matrimonial environment where families can discover proposals directly, make informed decisions, and protect their privacy.",
  values: [
    {
      title: "Respect & Transparency",
      description:
        "We do not intend to misuse, harm, or misrepresent any individual or family. Clear terms and honest communication guide everything we do.",
    },
    {
      title: "Direct Family Connection",
      description:
        "We empower families to connect directly with one another without broker commissions or intermediation.",
    },
    {
      title: "Privacy & Data Protection",
      description:
        "We respect the wishes of every profile owner and provide prompt support for profile updates or removal requests.",
    },
  ],
  image: couplesImage,
};

/* ── 13. Contact page ──────────────────────────────────────────────────── */
export const contact = {
  headline: "Contact Support & Enquiries",
  intro:
    "For profile submissions, matrimonial enquiries, subscription assistance, or privacy & profile removal requests, reach out to us directly.",
  formNote: "We usually reply within one working day.",
};
