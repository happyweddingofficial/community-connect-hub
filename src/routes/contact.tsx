import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Section, SectionHeading } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { FaqList } from "@/components/site/FaqList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, site, socials, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Us — ${site.name}` },
      { name: "description", content: contact.intro.slice(0, 155) },
      { property: "og:title", content: `Contact Us — ${site.name}` },
      { property: "og:description", content: contact.intro.slice(0, 155) },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please write a short message").max(1000),
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
    const { name, phone, email, message } = result.data;
    window.open(
      whatsappLink(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`),
      "_blank",
      "noopener,noreferrer",
    );
    toast.success("Opening WhatsApp so you can send your message.");
    e.currentTarget.reset();
  }

  return (
    <>
      <Section className="pt-14 pb-6">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{contact.headline}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{contact.intro}</p>
        </div>
      </Section>

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Contact information</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-primary" aria-hidden />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-primary" aria-hidden />
                  <a href={`mailto:${site.email}`} className="hover:text-foreground">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-primary" aria-hidden />
                  {site.address}
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton label="Chat on WhatsApp" />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-xl">Follow us</h2>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-md border border-border px-3 py-1.5 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">{contact.formNote}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" maxLength={100} placeholder="Your full name" />
                {errors['name'] && <p className="text-xs text-destructive">{errors['name']}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" name="phone" maxLength={20} placeholder="+91 00000 00000" />
                {errors['phone'] && <p className="text-xs text-destructive">{errors['phone']}</p>}
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" maxLength={255} placeholder="you@example.com" />
                {errors['email'] && <p className="text-xs text-destructive">{errors['email']}</p>}
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="How can we help?" />
                {errors['message'] && <p className="text-xs text-destructive">{errors['message']}</p>}
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Send message
            </Button>
          </form>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading title="Frequently asked questions" />
        <FaqList />
      </Section>
    </>
  );
}