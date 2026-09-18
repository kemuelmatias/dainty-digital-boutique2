import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  PlaceholderNote,
  Section,
  SectionHeading,
  TeacherPhotoPlaceholder,
} from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kemuel Matias de Jesus | Online Portuguese Teacher" },
      {
        name: "description",
        content:
          "Meet Kemuel Matias de Jesus, an independent online Brazilian Portuguese teacher working with English-speaking and Spanish-speaking students.",
      },
      { property: "og:title", content: "Meet Kemuel Matias de Jesus" },
      {
        property: "og:description",
        content:
          "An independent online Brazilian Portuguese teacher for English and Spanish speakers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const editableSections = [
  {
    title: "Teaching experience",
    placeholder: "[ADD TEACHING EXPERIENCE — years teaching, types of students, contexts]",
  },
  {
    title: "Teaching approach",
    placeholder: "[ADD TEACHING APPROACH — methods, lesson structure, materials used]",
  },
  {
    title: "Languages spoken",
    placeholder: "[ADD LANGUAGES SPOKEN AND LEVELS]",
  },
  {
    title: "Personal background",
    placeholder: "[ADD PERSONAL BACKGROUND — where you are from, interests, why you teach]",
  },
  {
    title: "Areas of specialization",
    placeholder: "[ADD AREAS OF SPECIALIZATION — e.g. conversation, pronunciation, exam prep]",
  },
];

function About() {
  return (
    <>
      <Section tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="About"
              title="Meet Kemuel Matias de Jesus"
              description="Hi, I'm Kemuel Matias de Jesus. I teach Brazilian Portuguese online to students who speak English or Spanish and want to communicate more naturally and confidently in Portuguese."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="min-h-11">
                <Link to="/private-lessons">Book a Private Lesson</Link>
              </Button>
              <Button asChild variant="outline" className="min-h-11 bg-background">
                <Link to="/courses">Explore Online Courses</Link>
              </Button>
            </div>
          </div>
          <TeacherPhotoPlaceholder />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="About my teaching"
          description="These sections are ready to be completed with real information. Nothing has been invented."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {editableSections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{section.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {section.placeholder}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 max-w-2xl">
          <PlaceholderNote>
            No credentials, degrees, certifications, awards, or student numbers are shown here because
            none were provided. Add only verifiable information.
          </PlaceholderNote>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          inverted
          title="An independent teacher, not a language school"
          description="Lessons and materials are created and taught directly by Kemuel Matias de Jesus, which means the learning plan can stay closely aligned with each student's level and objectives."
        />
        <Button asChild variant="secondary" className="mt-8 min-h-11">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </Section>
    </>
  );
}
