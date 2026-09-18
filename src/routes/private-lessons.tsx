import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/primitives";
import { StudentExperiences } from "@/components/site/StudentExperiences";
import {
  BOOK_LESSON_LINK,
  lessonInformation,
  lessonTopics,
  steps,
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
} from "@/content/site";

export const Route = createFileRoute("/private-lessons")({
  head: () => ({
    meta: [
      { title: "Private Brazilian Portuguese Lessons Online | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Private online Portuguese lessons for English and Spanish speakers: conversation, pronunciation, grammar and everyday Brazilian Portuguese, adapted to your level.",
      },
      { property: "og:title", content: "Private Brazilian Portuguese Lessons" },
      {
        property: "og:description",
        content:
          "Personalized one-on-one online lessons designed around your level, goals, and learning pace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/private-lessons" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/private-lessons" }],
  }),
  component: PrivateLessons,
});

const workOn = [
  "Conversation",
  "Pronunciation",
  "Grammar",
  "Vocabulary",
  "Listening",
  "Reading",
  "Writing",
  "Travel Portuguese",
  "Everyday communication",
];

function PrivateLessons() {
  return (
    <>
      <Section tone="muted">
        <SectionHeading
          as="h1"
          eyebrow="Private lessons"
          title="Private Brazilian Portuguese Lessons"
          description="Personalized one-on-one online lessons designed around your level, goals, and learning pace."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-h-12">
            <a href={BOOK_LESSON_LINK} target="_blank" rel="noopener noreferrer">
              Book a Private Lesson
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12 bg-background">
            <Link to="/contact">Ask a Question</Link>
          </Button>
        </div>
        <p className="mt-6 max-w-xl text-sm text-muted-foreground">
          USD 20 per 50-minute lesson · packages from USD 18 per lesson · booking on WhatsApp{" "}
          {WHATSAPP_DISPLAY}
        </p>
      </Section>

      <Section>
        <SectionHeading title="What We Can Work On" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workOn.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm"
            >
              <Check aria-hidden="true" className="size-4 shrink-0 text-verde" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Lessons can combine several of these areas, or focus on one. Typical lesson content also
          includes: {lessonTopics.slice(0, 3).join(", ").toLowerCase()} and more, depending on your
          goals.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          title="How Lessons Work"
          description="Lessons are delivered live and online, one-on-one. The steps below describe the process from booking to your first lesson."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-background p-6">
              <span className="font-display text-sm font-semibold text-verde">Step {index + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Lessons take place on Google Meet or Zoom. You send your time zone and preferred days on
          WhatsApp, we agree on a time together, and you receive a written confirmation with the
          meeting link before the lesson.
        </p>
      </Section>

      <Section>
        <SectionHeading
          title="Lesson Information"
          description="Complete commercial information for private lessons: duration, prices, currency, platform, scheduling and support."
        />
        <dl className="mt-10 max-w-2xl divide-y divide-border rounded-2xl border border-border bg-card">
          {lessonInformation.map((row) => (
            <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_minmax(0,1fr)]">
              <dt className="text-sm text-muted-foreground">{row.label}</dt>
              <dd className="text-sm font-medium">{row.value}</dd>
            </div>
          ))}
          <div className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_minmax(0,1fr)]">
            <dt className="text-sm text-muted-foreground">Refund policy</dt>
            <dd className="text-sm font-medium">
              <Link to="/refunds" className="underline underline-offset-4">
                See Refund Policy
              </Link>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="min-h-12">
            <a href={BOOK_LESSON_LINK} target="_blank" rel="noopener noreferrer">
              Book a Private Lesson
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-h-12">
            <Link to="/faq">Read the FAQ</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Questions before booking? Write to {SUPPORT_EMAIL} or message {WHATSAPP_DISPLAY} on
          WhatsApp.
        </p>
      </Section>

      <StudentExperiences />
    </>
  );
}
