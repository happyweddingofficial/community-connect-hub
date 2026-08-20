import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Send,
  Users,
  CheckCircle2,
  Lock,
  MessageCircle,
  FileCheck,
  AlertCircle,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reviews } from "@/components/site/Reviews";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
import {
  advertisingPolicyHighlights,
  faqs,
  finalCta,
  hero,
  howItWorks,
  servicePillars,
  site,
  whatsappLink,
} from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.shortDescription.slice(0, 155) },
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.shortDescription.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-12 pb-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" aria-hidden />
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="mt-4 text-4xl leading-[1.15] font-bold tracking-tight text-foreground sm:text-5xl">
              {hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton label={hero.primaryCta.label} size="lg" />
              <Button asChild size="lg" variant="outline">
                <Link to={hero.secondaryCta.to}>
                  {hero.secondaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </div>

            {/* Disclaimer Badge */}
            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-border/80 bg-secondary/50 p-3 text-xs text-muted-foreground">
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
              <p>
                <strong>Notice:</strong> {site.disclaimer}
              </p>
            </div>

            <dl className="mt-8 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1280}
            height={960}
            className="w-full rounded-2xl border border-border object-cover object-top shadow-card"
          />
        </div>
      </Section>

      {/* How Our Service Works */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Process"
          title={howItWorks.title}
          description={howItWorks.subtitle}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:border-primary/40"
            >
              <span className="text-3xl font-bold text-primary/40 font-mono">
                {step.stepNumber}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Submit Your Profile on WhatsApp" />
        </div>
      </Section>

      {/* Service Pillars / Features */}
      <Section>
        <SectionHeading
          eyebrow="Our Principles"
          title="Why Families Choose Nikah.com"
          description="Built on respect, transparency, and personal data protection."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicePillars.map((pillar, index) => {
            const icons = [Send, Lock, Users, FileCheck];
            const Icon = icons[index % icons.length] || CheckCircle2;
            return (
              <div
                key={pillar.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Matrimonial Advertising Policy Highlights */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Transparency"
          title={advertisingPolicyHighlights.title}
          description={advertisingPolicyHighlights.description}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {advertisingPolicyHighlights.points.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="sm">
            <Link to="/terms">Read Full Terms &amp; Policy</Link>
          </Button>
        </div>
      </Section>

      {/* Reviews / Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Families Say"
          description="Feedback from individuals and families who connected through our profile sharing services."
        />
        <Reviews />
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Clarifications"
          title="Frequently Asked Questions"
          description="Everything you need to know about our matrimonial profile sharing and privacy policies."
        />
        <FaqList />
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center shadow-card">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <MessageCircle className="size-6" aria-hidden />
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            {finalCta.text}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label={finalCta.buttonLabel} size="lg" />
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
