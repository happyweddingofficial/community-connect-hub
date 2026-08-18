import { Link } from "@tanstack/react-router";
import { footer, navLinks, site, socials, whatsappLink } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="section-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
            >
              {site.name.charAt(0)}
            </span>
            <span className="font-semibold">{site.name}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{footer.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Community</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {footer.communityLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
                WhatsApp: {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" className="hover:text-foreground">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell py-5 text-center text-xs text-muted-foreground">{footer.copyright}</div>
      </div>
    </footer>
  );
}