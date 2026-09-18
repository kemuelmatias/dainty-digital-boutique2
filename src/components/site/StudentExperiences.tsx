import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/primitives";

/**
 * Reusable placeholder for genuine student feedback.
 * Replace the placeholder cards with real quotes when they are available.
 */
export function StudentExperiences() {
  return (
    <Section tone="muted">
      <SectionHeading
        align="center"
        eyebrow="Student Experiences"
        title="Student Experiences"
        description="Real student feedback will be added here."
      />
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li
            key={i}
            className="rounded-2xl border border-dashed border-border bg-background p-6 text-sm text-muted-foreground"
          >
            <Quote aria-hidden="true" className="size-5 text-verde" />
            <p className="mt-4">Real student feedback will be added here.</p>
            <p className="mt-6 text-xs uppercase tracking-widest">[Student name]</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
