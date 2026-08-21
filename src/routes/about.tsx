import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Heart,
  Eye,
  CheckCircle2,
  Users,
  Lock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { about, howItWorks, site } from "@/content/site";
import { getBreadcrumbSchema, getCanonicalUrl, getWebPageSchema } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${site.name} | Transparent Matrimonial Advertising` },
      { name: "description", content: about.intro },
      {
        name: "keywords",
        content: [
          "About Nikah.com",
          "Matrimonial advertising Kerala",
          "Direct family marriage proposals",
          "Ethical matrimonial platform",
          "Kerala matrimony mission",
          ...site.keywords,
        ].join(", "),
      },
      { property: "og:title", content: `About Us — ${site.name}` },
      { property: "og:description", content: about.intro },
      { property: "og:type", content: "article" },
      { property: "og:url", content: getCanonicalUrl("/about") },
      { property: "og:image", content: `${site.siteUrl}/favicon.png` },
      { property: "og:image:alt", content: `About ${site.name}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `About Us — ${site.name}` },
      { name: "twitter:description", content: about.intro },
      { name: "twitter:image", content: `${site.siteUrl}/favicon.png` },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getWebPageSchema({
            title: `About Us — ${site.name}`,
            description: about.intro,
            path: "/about",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbSchema([{ name: "About Us", path: "/about" }])),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <Section className="pt-14 pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary">
            <ShieldCheck className="size-3.5" aria-hidden />
            <span>About Our Platform</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {about.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.intro}</p>
        </div>
      </Section>

      {/* Story & Core Mission */}
      <Section className="pt-2">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={about.image}
            alt="Nikah.com matrimonial service"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-2xl border border-border object-cover object-top shadow-card"
          />

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2.5 text-primary">
                <Heart className="size-5" aria-hidden />
                <h2 className="text-lg font-semibold text-foreground">Who We Are</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.story}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2.5 text-primary">
                <ShieldCheck className="size-5" aria-hidden />
                <h2 className="text-lg font-semibold text-foreground">Our Mission</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.mission}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-2.5 text-primary">
                <Eye className="size-5" aria-hidden />
                <h2 className="text-lg font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.vision}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Principles */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Our Commitments"
          title="What Guides Our Service"
          description="We operate with transparency, respect, and clear policies for all families."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {about.values.map((item, index) => {
            const icons = [CheckCircle2, Users, Lock];
            const Icon = icons[index % icons.length] || CheckCircle2;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How Our Service Works Summary */}
      <Section>
        <SectionHeading
          eyebrow="Workflow"
          title={howItWorks.title}
          description={howItWorks.subtitle}
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <span className="text-2xl font-bold text-primary font-mono">{step.stepNumber}</span>
              <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Important Disclaimer Card */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 shadow-card">
          <div className="flex items-start gap-4">
            <AlertCircle className="mt-1 size-6 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 className="text-xl font-bold text-foreground">Important Service Disclaimer</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {site.disclaimer} We do not make marriage decisions on behalf of users or families.
                Users are strongly advised to independently verify the identity, background,
                education, occupation, and suitability of any profile before proceeding.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <Link to="/terms">
                    View Full Terms &amp; Policies
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <WhatsAppButton label="Contact on WhatsApp" size="sm" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
