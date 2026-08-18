import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${site.name}` },
      { name: "description", content: `How ${site.name} collects, uses and protects member information.` },
      { property: "og:title", content: `Privacy Policy — ${site.name}` },
      { property: "og:description", content: `How ${site.name} handles member information.` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section className="pt-14">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl">Privacy Policy</h1>
        <p className="text-muted-foreground">
          This is placeholder text. Replace it with your community's privacy policy — what information you
          collect, how it is used, and how members can ask for it to be removed.
        </p>
        <p className="text-muted-foreground">
          We never share member details outside the community, and all groups are moderated by named
          volunteers.
        </p>
      </div>
    </Section>
  );
}