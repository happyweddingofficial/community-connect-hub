import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
import {
  community,
  faqs,
  finalCta,
  hero,
  relatedPages,
  site,
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

function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-14 pb-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">{hero.headline}</h1>
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
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold">{stat.value}</dd>
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
            className="w-full rounded-2xl border border-border object-cover shadow-card"
          />
        </div>
      </Section>

      {/* Community */}
      <Section className="bg-secondary/40">
        <SectionHeading title={community.title} description={community.intro} />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          {community.whoFor}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {community.benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Check className="size-4" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <WhatsAppButton label="Join the community" />
        </div>
      </Section>

      {/* Related pages */}
      <Section>
        <SectionHeading
          eyebrow="Explore"
          title="Related communities & services"
          description="Different circles within the community, each with its own volunteers."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPages.map((page) => (
            <article
              key={page.title}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card"
            >
              <img
                src={page.image}
                alt={page.title}
                loading="lazy"
                width={900}
                height={700}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg">{page.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {page.description}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-5 self-start">
                  <a href={page.href} target="_blank" rel="noreferrer noopener">
                    View more
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our members say"
          description="Reviews shared by members, including messages collected on WhatsApp."
        />
        <Reviews />
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeading title="Community photos" description="A look at our meetups, classes and gatherings." />
        <Gallery />
      </Section>

      {/* FAQ */}
      <Section className="bg-secondary/40">
        <SectionHeading title="Frequently asked questions" />
        <FaqList />
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center shadow-card">
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">{finalCta.headline}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{finalCta.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label={finalCta.buttonLabel} size="lg" />
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
