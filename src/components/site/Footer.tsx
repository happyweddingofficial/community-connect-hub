import { Link } from "@tanstack/react-router";
import { footer, mapsLink, navLinks, site, socials, whatsappLink } from "@/content/site";
import logoWebp from "@/assets/logo.webp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="section-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <img
              src={logoWebp}
              alt={site.name}
              width={32}
              height={32}
              className="size-8 rounded-lg object-contain"
            />
            <span className="font-semibold text-foreground">{site.name}</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {footer.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Policies &amp; Disclaimer</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-foreground">
                Terms &amp; Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About Our Service
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Profile Removal Request
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-foreground"
              >
                WhatsApp: {site.phone}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-foreground">
                  {site.email}
                </a>
              </li>
            )}
            <li>
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
          <div className="mt-4 flex flex-wrap gap-2.5 text-sm text-muted-foreground">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-border px-2.5 py-1 text-xs hover:border-primary/40 hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell py-5 text-center text-xs text-muted-foreground">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
