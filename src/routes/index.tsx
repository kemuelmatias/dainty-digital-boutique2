import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/primitives";
import { CourseCard } from "@/components/site/CourseCard";
import { StudentExperiences } from "@/components/site/StudentExperiences";
import { audiences, courses, lessonTopics, steps } from "@/content/site";
import heroImage from "@/assets/hero-online-lesson.jpg";
import studyImage from "@/assets/study-materials.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Brazilian Portuguese Teacher | Kemuel Matias de Jesus" },
      {
        name: "description",
        content:
          "Learn Brazilian Portuguese online with private lessons and practical courses for English and Spanish speakers, taught by Kemuel Matias de Jesus.",
      },
      { property: "og:title", content: "Learn Brazilian Portuguese With Confidence" },
      {
        property: "og:description",
        content:
          "Personalized online Portuguese lessons and practical courses for English and Spanish speakers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const values = [
  {
    icon: UserRound,
    title: "Personalized Learning",
    text: "Private lessons adapted to your current level, goals, and learning pace.",
  },
  {
    icon: Sparkles,
    title: "Practical Portuguese",
    text: "Focus on vocabulary, pronunciation, conversation, grammar, and real-world communication.",
  },
  {
    icon: Globe2,
    title: "100% Online",
    text: "Learn from anywhere with online lessons and digital learning resources.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 size-72 rounded-full bg-verde-soft blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-navy-soft">
              Brazilian Portuguese · Online
            </p>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Learn Brazilian Portuguese With Confidence
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-soft">
              Personalized online Portuguese lessons and practical courses for English and Spanish
              speakers.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Hi, I'm Kemuel Matias de Jesus, an online Portuguese teacher helping English and Spanish
              speakers develop practical Brazilian Portuguese skills from anywhere in the world.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-h-12">
                <Link to="/private-lessons">Book a Private Lesson</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 bg-background">
                <Link to="/courses">Explore Online Courses</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              100% online • Personalized learning • Brazilian Portuguese
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              width={1600}
              height={1200}
              alt="A student taking an online Portuguese lesson on a laptop while writing vocabulary in a notebook"
              className="w-full rounded-3xl border border-border object-cover shadow-[0_30px_80px_-40px_rgba(16,24,40,0.45)]"
            />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Why learn here"
          title="Portuguese Learning Made Simple"
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_-24px_rgba(16,24,40,0.35)]"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-verde-soft">
                <Icon aria-hidden="true" className="size-5 text-accent-foreground" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* PRIVATE LESSONS PREVIEW */}
      <Section tone="muted">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="One-on-one"
              title="Private Portuguese Lessons"
              description="Get personalized one-on-one Portuguese instruction designed around your level, goals, and learning needs."
            />
            <Button asChild className="mt-8 min-h-11">
              <Link to="/private-lessons">
                Learn More About Private Lessons
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-3 rounded-2xl border border-border bg-background p-6 sm:grid-cols-2">
            {lessonTopics.map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-verde" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COURSES PREVIEW */}
      <Section>
        <SectionHeading
          eyebrow="Online courses"
          title="Learn Portuguese at Your Own Pace"
          description="Explore structured online Portuguese courses designed to help you build practical Brazilian Portuguese skills."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.slug}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Section>

      {/* HOW IT WORKS */}
      <Section tone="navy">
        <SectionHeading
          inverted
          eyebrow="Step by step"
          title="How Online Portuguese Learning Works"
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-primary-foreground/20 pt-6">
              <span className="font-display text-sm font-semibold text-amarelo">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* WHY LEARN WITH KEMUEL */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={studyImage}
            width={1408}
            height={1008}
            loading="lazy"
            alt="Notebook with Portuguese vocabulary notes beside a book, pencil and glasses"
            className="w-full rounded-3xl border border-border object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="The approach"
              title="Learn With a Personalized Approach"
              description="Learning a language is more than memorizing vocabulary. The goal is to understand, communicate, and gradually become comfortable using Portuguese in real situations."
            />
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Lessons and learning materials can be adapted to the student's level and objectives.
            </p>
            <Button asChild variant="outline" className="mt-8 min-h-11">
              <Link to="/about">Meet Kemuel</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* WHO IS THIS FOR */}
      <Section tone="muted">
        <SectionHeading
          align="center"
          eyebrow="Who it's for"
          title="Who Are These Portuguese Lessons For?"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 transition-colors duration-300 hover:border-verde/50"
            >
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <StudentExperiences />

      {/* CLOSING CTA */}
      <Section>
        <div className="rounded-3xl border border-border bg-navy px-6 py-14 text-center text-primary-foreground sm:px-12">
          <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
            Ready to start speaking Portuguese?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Book a personalized private lesson, or choose an online course and learn at your own pace.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="min-h-12">
              <Link to="/private-lessons">Book a Private Lesson</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-12 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
