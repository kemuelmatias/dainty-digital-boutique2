import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { Section, SectionHeading } from "@/components/site/primitives";
import { legalItems, SUPPORT_EMAIL_PLACEHOLDER } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Online Portuguese Teacher | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Contact Kemuel Matias de Jesus about private online Portuguese lessons, Brazilian Portuguese courses, or customer support.",
      },
      { property: "og:title", content: "Have a Question?" },
      {
        property: "og:description",
        content: "Send a message about private Portuguese lessons, courses, or support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Section tone="muted">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Have a Question?"
          description="Ask about private lessons, online courses, or anything related to learning Brazilian Portuguese."
        />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="max-w-xl">
            <h2 className="font-display text-xl font-semibold">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-cream p-6">
            <h2 className="font-display text-lg font-semibold">Customer Support</h2>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-verde" />
              <span>
                Email:
                <br />
                <span className="font-medium text-foreground">{SUPPORT_EMAIL_PLACEHOLDER}</span>
              </span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Response time: [ADD ACTUAL RESPONSE TIME]
            </p>
            <h3 className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">Policies</h3>
            <ul className="mt-3 space-y-2">
              {legalItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm underline underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
