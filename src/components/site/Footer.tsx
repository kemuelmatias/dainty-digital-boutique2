import { Link } from "@tanstack/react-router";
import {
  CONTACT_WHATSAPP_LINK,
  legalItems,
  navItems,
  SUPPORT_EMAIL,
  TAGLINE,
  WHATSAPP_DISPLAY,
} from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold">Kemuel Matias de Jesus</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">{TAGLINE}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-primary-foreground/50">
            Customer Support
          </p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline-offset-4 hover:underline">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="mt-1 text-sm text-primary-foreground/80">
            <a
              href={CONTACT_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs uppercase tracking-widest text-primary-foreground/50">Navigation</h2>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-xs uppercase tracking-widest text-primary-foreground/50">Legal</h2>
          <ul className="mt-3 space-y-2">
            {legalItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © 2026 Kemuel Matias de Jesus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
