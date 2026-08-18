import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions — ${site.name}` },
      { name: "description", content: `The guidelines and terms for taking part in ${site.name}.` },
      { property: "og:title", content: `Terms & Conditions — ${site.name}` },
      { property: "og:description", content: `Guidelines for taking part in ${site.name}.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section className="pt-14">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl">Terms &amp; Conditions</h1>
        <p className="text-muted-foreground">
          This is placeholder text. Replace it with your community guidelines and terms of participation.
        </p>
        <p className="text-muted-foreground">
          Members are expected to be respectful, avoid spam, and keep private conversations private.
        </p>
      </div>
    </Section>
  );
}