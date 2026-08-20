import { createFileRoute } from "@tanstack/react-router";
import { FileText, CheckCircle2, AlertTriangle, CreditCard, ShieldCheck } from "lucide-react";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms & Conditions / Disclaimer — ${site.name}` },
      {
        name: "description",
        content: `Service Terms, Matrimonial Advertising Policy, and Disclaimer for ${site.name}.`,
      },
      { property: "og:title", content: `Terms & Conditions — ${site.name}` },
      {
        property: "og:description",
        content: `Understand the terms, disclaimer, and matrimonial advertising policies of ${site.name}.`,
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section className="pt-14 pb-16">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <div className="space-y-3 border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <FileText className="size-3.5" aria-hidden />
            <span>Terms, Policies &amp; Disclaimer</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Service Terms &amp; Matrimonial Advertising Policy
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Please read these terms and policies carefully. By using Nikah.com, you acknowledge and
            agree to the principles outlined below.
          </p>
        </div>

        {/* 1. Disclaimer & Service Nature */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <div className="flex items-center gap-2.5 text-primary">
            <ShieldCheck className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">
              1. Nature of Service &amp; Disclaimer
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            At Nikah.com, we believe that every individual and family deserves respect, privacy, and
            transparency. We are <strong>not a matrimonial broker or marriage bureau</strong>. We
            are a matrimonial advertising and profile-sharing service that helps people discover and
            connect with potential marriage proposals.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We do not intend to misuse, harm, misrepresent, or act against any individual or family.
            Our purpose is only to facilitate genuine matrimonial enquiries through our platform.
          </p>
        </div>

        {/* 2. How Our Service Works */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <div className="flex items-center gap-2.5 text-primary">
            <CheckCircle2 className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">2. How Our Service Works</h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>
              Nikah.com provides matrimonial advertising and profile-sharing services through our
              website, social media platforms, and WhatsApp-based services.
            </li>
            <li>
              Matrimonial profiles may be received directly from individuals or families, or through
              profile contributors and business partners.
            </li>
            <li>
              After receiving relevant matrimonial information, profiles may be reviewed, prepared,
              and promoted for matrimonial purposes.
            </li>
            <li>
              Interested individuals may access available profile information and, where applicable,
              connect with the relevant family or contact person.
            </li>
            <li>
              <strong>No Marriage Decisions:</strong> Nikah.com does not make marriage decisions on
              behalf of users or families. Users are responsible for independently verifying the
              information and suitability of any profile before proceeding.
            </li>
          </ul>
        </div>

        {/* 3. Matrimonial Advertising Policy */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <div className="flex items-center gap-2.5 text-primary">
            <AlertTriangle className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">
              3. Matrimonial Advertising Policy
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Nikah.com is a Matrimonial Advertising &amp; Profile Sharing Service. We are{" "}
              <strong>NOT</strong> a matrimonial broker, marriage bureau, or matchmaking agency.
            </p>
            <p>
              Our purpose is to advertise and share matrimonial profiles and facilitate genuine
              matrimonial enquiries between interested individuals and families. Profiles may be
              promoted through our website, social media platforms, WhatsApp services, and other
              official communication channels.
            </p>
            <p>
              <strong>No Outcome Guarantee:</strong> We do not guarantee the authenticity,
              suitability, compatibility, response, or outcome of any matrimonial proposal.
            </p>
            <p className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-xs text-foreground font-medium">
              Users are strongly advised to independently verify the identity, family background,
              education, occupation, marital status, and other relevant information of any person or
              family before proceeding with a matrimonial relationship.
            </p>
          </div>
        </div>

        {/* 4. Subscription & Service Terms */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
          <div className="flex items-center gap-2.5 text-primary">
            <CreditCard className="size-5" aria-hidden />
            <h2 className="text-xl font-semibold text-foreground">
              4. Subscription &amp; Service Terms
            </h2>
          </div>
          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>Nikah.com may offer subscription-based matrimonial profile-sharing services.</li>
            <li>
              Subscription fees are charged for access to the features and services included in the
              selected subscription plan for the specified subscription period.
            </li>
            <li>
              A subscription provides access to the applicable matrimonial profile-sharing service
              and <strong>does not guarantee</strong> any marriage, proposal, response, match,
              relationship, or successful matrimonial outcome.
            </li>
            <li>
              Where the selected service includes access to family or contact information, such
              information may be provided subject to the availability of the information and the
              applicable permissions and service terms.
            </li>
            <li>
              Subscription fees are service fees and should not be understood as payment for
              guaranteeing or arranging a marriage.
            </li>
            <li>
              Users are responsible for using information obtained through the service only for
              genuine matrimonial purposes.
            </li>
          </ul>
        </div>

        {/* Support & Inquiries */}
        <div className="rounded-xl border border-border bg-secondary/30 p-6 text-center space-y-3">
          <h3 className="text-base font-semibold text-foreground">Questions About Our Terms?</h3>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            If you have any questions regarding our advertising policies or subscription terms, our
            support team is available on WhatsApp.
          </p>
          <div className="pt-2">
            <WhatsAppButton label="Contact Support on WhatsApp" />
          </div>
        </div>
      </div>
    </Section>
  );
}
