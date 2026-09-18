import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { Section, SectionHeading } from "@/components/site/primitives";
import { faqs } from "@/content/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Online Portuguese Lessons | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Answers about online Brazilian Portuguese lessons and courses: how lessons work, scheduling, course access, purchases, refunds, and contact.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "How online Brazilian Portuguese lessons, courses, purchases and support work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <Section tone="muted">
        <SectionHeading
          as="h1"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Practical answers about lessons, courses, purchases, and support. Where a policy has not been finalized yet, you will see a clearly marked placeholder."
        />
      </Section>

      <Section>
        <div className="max-w-3xl">
          <FaqAccordion items={faqs} searchable />
          <div className="mt-12 rounded-2xl border border-border bg-cream p-6">
            <h2 className="font-display text-lg font-semibold">Still have a question?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Send a message and it will be answered directly.
            </p>
            <Button asChild className="mt-5 min-h-11">
              <Link to="/contact">Contact Kemuel</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
