/**
 * ── SITE CONTENT ──────────────────────────────────────────────────────────
 * Everything editable on the website lives in this one file.
 * Change text, links, reviews, FAQs, gallery photos and the WhatsApp number
 * here — no other file needs to be touched.
 *
 * To use your own photos: drop image files into `src/assets/` and import them
 * at the top of this file, then use the imported name below.
 */
import heroImage from "@/assets/hero-community.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

/* ── 1. Basics ─────────────────────────────────────────────────────────── */
export const site = {
  name: "Nikah Community",
  tagline: "A trusted community, built on care.",
  shortDescription:
    "A welcoming community where members support each other with guidance, opportunities and genuine connection.",
  /** WhatsApp number in international format, digits only (country code first). */
  whatsappNumber: "919497133695",
  /** Default message pre-filled when someone taps a WhatsApp button. */
  whatsappMessage: "Hi! I'd like to know more about joining the community.",
  email: "hello@example.com",
  phone: "+91 94971 33695",
  address: "Kerala, India",
};

/** Builds a WhatsApp chat link. Optionally pass a custom message. */
export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ── 2. Navigation ─────────────────────────────────────────────────────── */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

/* ── 3. Home hero ──────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "Community first",
  headline: "Grow together with people who genuinely care",
  description:
    "We bring together members who share knowledge, offer support and open doors for one another. Joining takes a minute — belonging lasts.",
  primaryCta: { label: "Join on WhatsApp", href: whatsappLink() },
  secondaryCta: { label: "Learn about us", to: "/about" },
  image: heroImage,
  imageAlt: "Community members meeting and talking in a bright hall",
  stats: [
    { value: "2,500+", label: "Members" },
    { value: "120+", label: "Events hosted" },
    { value: "9 yrs", label: "Serving together" },
  ],
};

/* ── 4. Community section ──────────────────────────────────────────────── */
export const community = {
  title: "What our community is about",
  intro:
    "We are a member-run community focused on trust, respect and practical help. Everything happens in a moderated, safe space.",
  whoFor:
    "For families, students, professionals and anyone looking for a dependable circle of people nearby.",
  benefits: [
    {
      title: "Verified members",
      description: "Every member is reviewed before joining, so conversations stay safe and respectful.",
    },
    {
      title: "Real support",
      description: "Guidance, referrals and answers from people who have been there before you.",
    },
    {
      title: "Regular meetups",
      description: "Online and in-person gatherings that make it easy to meet people properly.",
    },
    {
      title: "No cost to join",
      description: "Membership is free. We are funded by volunteers and well-wishers.",
    },
  ],
};

/* ── 5. Related pages / services cards ─────────────────────────────────── */
export const relatedPages = [
  {
    title: "Matrimony Circle",
    description: "A moderated space for families seeking trusted introductions.",
    image: gallery3,
    href: whatsappLink("Hi! I'd like to know more about the Matrimony Circle."),
  },
  {
    title: "Career & Mentoring",
    description: "Mentors, job leads and interview help shared by senior members.",
    image: gallery4,
    href: whatsappLink("Hi! I'd like to know more about Career & Mentoring."),
  },
  {
    title: "Learning Circles",
    description: "Small study groups that meet weekly to learn something new.",
    image: gallery2,
    href: whatsappLink("Hi! I'd like to know more about the Learning Circles."),
  },
];

/* ── 6. Reviews / testimonials ─────────────────────────────────────────── */
/** Reorder by moving items. `photo` is optional — initials are shown instead. */
export const reviews = [
  {
    name: "Ayesha Rahman",
    photo: "",
    rating: 5,
    date: "March 2026",
    text: "The community helped my family more than we expected. Everyone is polite, patient and genuinely helpful.",
  },
  {
    name: "Imran Sadiq",
    photo: "",
    rating: 5,
    date: "February 2026",
    text: "Joined through WhatsApp and got a response the same day. The mentoring group changed my career direction.",
  },
  {
    name: "Fathima Noor",
    photo: "",
    rating: 4,
    date: "January 2026",
    text: "Well moderated and respectful. I like that there is no spam — only useful conversations.",
  },
  {
    name: "Rashid K.",
    photo: "",
    rating: 5,
    date: "December 2025",
    text: "Collected via WhatsApp: 'Great people, honest guidance. I recommend it to everyone I know.'",
  },
];

/* ── 7. Gallery ────────────────────────────────────────────────────────── */
export const gallery = [
  { image: gallery1, caption: "Volunteering weekend" },
  { image: gallery2, caption: "Weekly learning circle" },
  { image: gallery3, caption: "Annual community gathering" },
  { image: gallery4, caption: "Mentoring session" },
];

/* ── 8. FAQs ───────────────────────────────────────────────────────────── */
export const faqs = [
  {
    question: "How do I join the community?",
    answer:
      "Tap any WhatsApp button on this site and send us a message. A volunteer replies within a day and guides you through the short onboarding.",
  },
  {
    question: "Is there any membership fee?",
    answer: "No. Membership is completely free and always will be.",
  },
  {
    question: "Who can become a member?",
    answer:
      "Anyone who agrees to our community guidelines and takes part respectfully. Families, students and professionals are all welcome.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "Your details are never shared outside the community, and all groups are moderated by named volunteers.",
  },
  {
    question: "Do you host offline events?",
    answer: "Yes — meetups, workshops and family gatherings happen through the year. Dates are shared on WhatsApp.",
  },
];

/* ── 9. Final CTA ──────────────────────────────────────────────────────── */
export const finalCta = {
  headline: "Ready to become part of the community?",
  text: "Send one message on WhatsApp and a volunteer will help you get started.",
  buttonLabel: "Join on WhatsApp",
};

/* ── 10. Social links ──────────────────────────────────────────────────── */
export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

/* ── 11. Footer ────────────────────────────────────────────────────────── */
export const footer = {
  description:
    "A member-run community built on trust, respect and practical support for every family.",
  communityLinks: [
    { label: "Matrimony Circle", href: whatsappLink("Hi! Tell me about the Matrimony Circle.") },
    { label: "Career & Mentoring", href: whatsappLink("Hi! Tell me about Career & Mentoring.") },
    { label: "Learning Circles", href: whatsappLink("Hi! Tell me about the Learning Circles.") },
  ],
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};

/* ── 12. About page ────────────────────────────────────────────────────── */
export const about = {
  headline: "About our community",
  intro:
    "What began as a small WhatsApp group of neighbours is now a community of thousands who look out for one another.",
  story:
    "We started in 2017 with a simple idea: people do better when they have someone reliable to ask. Volunteers answer questions, connect members and organise gatherings — and everything stays free, moderated and respectful.",
  mission:
    "To give every member a trustworthy place to ask for help, share opportunities and build lasting relationships.",
  vision:
    "A connected community where no one has to figure things out alone, and where support is always one message away.",
  differences: [
    { title: "Volunteer led", description: "No agencies, no fees — real members giving their time." },
    { title: "Carefully moderated", description: "Clear guidelines keep every group calm and useful." },
    { title: "Local and personal", description: "We know our members by name, not by ticket number." },
  ],
  image: heroImage,
};

/* ── 13. Contact page ──────────────────────────────────────────────────── */
export const contact = {
  headline: "Contact us",
  intro: "The fastest way to reach us is WhatsApp. You can also call, email or send the form below.",
  formNote: "We usually reply within one working day.",
};