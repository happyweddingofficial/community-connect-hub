import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageSquare, ShieldAlert, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, mapsLink, site, socials, whatsappLink } from "@/content/site";
import { getBreadcrumbSchema, getCanonicalUrl, getFaqSchema, getWebPageSchema } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Support & Enquiries — ${site.name} | WhatsApp Matrimony Support` },
      { name: "description", content: contact.intro },
      {
        name: "keywords",
        content: [
          "Contact Nikah.com",
          "Nikah.com WhatsApp number",
          "Matrimonial profile submission Kerala",
          "Profile removal Nikah.com",
          "Kerala matrimony customer care",
          "Malappuram matrimonial contact",
          ...site.keywords,
        ].join(", "),
      },
      { property: "og:title", content: `Contact Support & Enquiries — ${site.name}` },
      { property: "og:description", content: contact.intro },
      { property: "og:type", content: "website" },
      { property: "og:url", content: getCanonicalUrl("/contact") },
      { property: "og:image", content: `${site.siteUrl}/favicon.png` },
      { property: "og:image:alt", content: `Contact ${site.name}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `Contact Support & Enquiries — ${site.name}` },
      { name: "twitter:description", content: contact.intro },
      { name: "twitter:image", content: `${site.siteUrl}/favicon.png` },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getWebPageSchema({
            title: `Contact Support & Enquiries — ${site.name}`,
            description: contact.intro,
            path: "/contact",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbSchema([{ name: "Contact Us", path: "/contact" }])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getFaqSchema()),
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone or WhatsApp number").max(20),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255)
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(5, "Please write a message").max(1000),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse(Object.fromEntries(form));

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const { name, phone, email, subject, message } = result.data;
    const emailLine = email ? `\nEmail: ${email}` : "";
    const subjectLine = subject ? `\nSubject: ${subject}` : "";
    window.open(
      whatsappLink(
        `Matrimonial Enquiry\nName: ${name}\nPhone: ${phone}${emailLine}${subjectLine}\n\nMessage:\n${message}`,
      ),
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Opening WhatsApp with your message details.");
    e.currentTarget.reset();
  }

  return (
    <>
      <Section className="pt-14 pb-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Support &amp; Enquiries
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {contact.headline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{contact.intro}</p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {/* Contact Details Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground">Official Channels</h2>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary shrink-0" aria-hidden />
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="hover:text-foreground"
                  >
                    Phone / WhatsApp: {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary shrink-0" aria-hidden />
                  <a
                    href={mapsLink()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground"
                  >
                    {site.address}
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton label="Direct WhatsApp Chat" />
              </div>
            </div>

            {/* Profile Removal / Privacy Support Notice */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 shadow-card">
              <div className="flex items-center gap-2 text-primary">
                <ShieldAlert className="size-5" aria-hidden />
                <h2 className="text-base font-semibold text-foreground">
                  Privacy &amp; Profile Removal
                </h2>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                If you wish to remove an active profile or have privacy concerns, please message us
                on WhatsApp with your profile link or screenshot. We respond and take action
                promptly.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-lg font-semibold text-foreground">Follow Our Channels</h2>
              <div className="mt-4 flex flex-wrap gap-2.5 text-sm">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-md border border-border px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-xl border border-border bg-card p-6 sm:p-8 shadow-card"
          >
            <div className="flex items-center gap-2 text-primary">
              <MessageSquare className="size-5" aria-hidden />
              <h2 className="text-xl font-bold text-foreground">Send an Enquiry</h2>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{contact.formNote}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" name="name" maxLength={100} placeholder="Your name" />
                {errors["name"] && <p className="text-xs text-destructive">{errors["name"]}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp Number *</Label>
                <Input id="phone" name="phone" maxLength={20} placeholder="+91 00000 00000" />
                {errors["phone"] && <p className="text-xs text-destructive">{errors["phone"]}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  maxLength={255}
                  placeholder="your.email@example.com"
                />
                {errors["email"] && <p className="text-xs text-destructive">{errors["email"]}</p>}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="subject">Enquiry Type</Label>
                <Input
                  id="subject"
                  name="subject"
                  maxLength={150}
                  placeholder="e.g. Profile submission, Proposal enquiry, Privacy request"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message / Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Write your matrimonial enquiry, profile details, or question here..."
                />
                {errors["message"] && (
                  <p className="text-xs text-destructive">{errors["message"]}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              <Send className="size-4" aria-hidden />
              Send on WhatsApp
            </Button>
          </form>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="Help"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our matrimonial service."
        />
        <FaqList />
      </Section>
    </>
  );
}
