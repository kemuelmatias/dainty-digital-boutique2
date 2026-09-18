import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "muted" && "bg-cream",
        tone === "navy" && "bg-navy text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-primary-foreground/60" : "text-verde",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <As
        className={cn(
          "mt-3 text-balance text-3xl font-semibold sm:text-4xl",
          As === "h1" && "sm:text-5xl",
        )}
      >
        {title}
      </As>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Marks content the teacher still needs to replace with real information. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-amarelo bg-amarelo/15 px-4 py-3 text-sm text-foreground/80">
      {children}
    </p>
  );
}

export function TeacherPhotoPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex aspect-4/5 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-navy/25 bg-verde-soft/60 p-6 text-center",
        className,
      )}
    >
      <span className="font-display text-sm font-semibold text-navy">Teacher photograph</span>
      <span className="text-sm text-muted-foreground">
        [ADD PHOTO OF KEMUEL MATIAS DE JESUS] — replace this area with a professional photo.
      </span>
    </div>
  );
}
