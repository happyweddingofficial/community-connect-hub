import { createFileRoute } from "@tanstack/react-router";
import { Shield, Lock, Trash2, HelpCircle, CheckCircle2, MessageCircle } from "lucide-react";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy & Customer Policy — ${site.name}` },
      {
        name: "description",
        content: `Privacy Policy and Profile Removal guidelines for ${site.name} matrimonial advertising services.`,
      },
      { property: "og:title", content: `Privacy & Customer Policy — ${site.name}` },
      {
        property: "og:description",
        content: `Learn how ${site.name} respects and protects customer privacy and handles profile data.`,
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section className="pt-14 pb-16">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <div className="space-y-3 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <Shield className="size-3.5" aria-hidden />
            <span>Privacy &amp; Customer Policy</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We Respect Every Customer &amp; Their Privacy
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Nikah.com, we believe that every individual and family deserves respect, privacy, and
            transparency. We are not a matrimonial broker or marriage bureau. We are a matrimonial
            advertising and profile-sharing service that helps people discover and connect with
            potential marriage proposals.
          </p>
        </div>

        {/* Purpose & Principles */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2.5">
            <Lock className="size-5 text-primary" aria-hidden />
            Our Purpose &amp; Respect for Families
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We do not intend to misuse, harm, misrepresent, or act against any individual or family.
            Our purpose is only to facilitate genuine matrimonial enquiries through our platform. We
            respect the wishes of every profile owner and family and encourage anyone who has a
            concern regarding a profile or information shared on our platform to contact us directly
            so that we can review and address the matter appropriately.
          </p>
          <p className="text-sm font-medium text-foreground">
            Our goal is simple: to support genuine matrimonial connections with respect,
            transparency, and responsibility.
          </p>
        </div>

        {/* Privacy Policy Main Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Privacy Policy</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>Nikah.com respects the privacy of individuals and families who use our services.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <h3 className="font-semibold text-foreground">Information Collection &amp; Use</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  We may collect and process matrimonial information for legitimate matrimonial
                  advertising, profile-sharing, communication, and service-related purposes.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-4">
                <h3 className="font-semibold text-foreground">Types of Information</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Depending on the service, information may include basic matrimonial details, age,
                  education, occupation, location, family information, photographs, preferences, and
                  contact information.
                </p>
              </div>
            </div>
            <p>
              We use information primarily to provide and promote matrimonial services, facilitate
              genuine enquiries, communicate with users, and operate our platform.
            </p>
            <p>
              We take reasonable measures to protect the information available to us and do not
              intend to misuse, misrepresent, or unlawfully disclose personal information.
            </p>
            <p>
              If you believe that your personal information has been published or shared without
              appropriate permission, you may contact us through our official support channels for
              review.
            </p>
          </div>
        </div>

        {/* Profile Removal & Privacy Requests */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-4 shadow-card">
          <div className="flex items-center gap-3 text-primary">
            <Trash2 className="size-6 shrink-0" aria-hidden />
            <h2 className="text-xl font-bold text-foreground">
              Profile Removal &amp; Privacy Requests
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you believe that your matrimonial profile, photograph, personal information, or other
            details have been published or shared on Nikah.com without your permission, you may
            contact us through our official support channels.
          </p>
          <div className="rounded-lg border border-border/80 bg-background/80 p-4 text-xs text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">How to request removal:</p>
            <ul className="list-inside list-disc space-y-1">
              <li>Provide the relevant profile details, screenshot, or URL.</li>
              <li>Explain your relationship to the profile and the concern.</li>
              <li>Send your request directly to our official WhatsApp support.</li>
            </ul>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We will review genuine requests and, where appropriate, take reasonable action in
            accordance with our internal policies and applicable law. We respect the wishes and
            privacy of individuals and families and do not intend to misuse or harm anyone through
            our matrimonial services.
          </p>
          <div className="pt-2">
            <WhatsAppButton label="Submit Removal Request on WhatsApp" />
          </div>
        </div>
      </div>
    </Section>
  );
}
