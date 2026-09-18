import type { ReactNode } from "react";
import { Section, SectionHeading } from "@/components/site/primitives";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <Section>
      <SectionHeading as="h1" eyebrow="Legal" title={title} description={intro} />
      <div className="mt-10 max-w-3xl space-y-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_li]:text-muted-foreground [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
      <p className="mt-12 max-w-3xl rounded-lg border border-dashed border-amarelo bg-amarelo/15 px-4 py-3 text-sm">
        This page is a working template. Every value in [SQUARE BRACKETS] must be completed with real
        information, and the final text should be reviewed by a qualified professional.
      </p>
    </Section>
  );
}
