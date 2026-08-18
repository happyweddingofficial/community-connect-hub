import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Gallery } from "@/components/site/Gallery";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { about, site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — ${site.name}` },
      { name: "description", content: about.intro.slice(0, 155) },
      { property: "og:title", content: `About Us — ${site.name}` },
      { property: "og:description", content: about.intro.slice(0, 155) },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="pt-14 pb-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">About us</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{about.headline}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.intro}</p>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={about.image}
            alt="Community members together"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-2xl border border-border object-cover"
          />
          <div className="space-y-6">
            <p className="leading-relaxed text-muted-foreground">{about.story}</p>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Our mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{about.mission}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Our vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{about.vision}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading title="What makes us different" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {about.differences.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Community photos" description="Moments from our meetups and gatherings." />
        <Gallery />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <WhatsAppButton />
          <Button asChild variant="outline">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}