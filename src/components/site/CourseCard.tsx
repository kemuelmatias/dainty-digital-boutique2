import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/content/site";
import { SUPPORT_EMAIL, whatsappLink, WHATSAPP_MESSAGES } from "@/content/site";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-border py-2 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium text-foreground">{value}</dd>
    </div>
  );
}

export function CourseCard({ course, detailed = false }: { course: Course; detailed?: boolean }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-verde/40 hover:shadow-[0_14px_40px_-20px_rgba(16,24,40,0.35)]">
      <span className="inline-flex w-fit rounded-full bg-verde-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
        Online course
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold">{course.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

      <dl className="mt-5">
        <Row label="Level" value={course.level} />
        <Row label="Format" value={course.format} />
        <Row label="Price" value={course.price} />
        <Row label="Currency" value={course.currency} />
        <Row label="Access" value={course.access} />
        {detailed ? <Row label="Delivery" value="Online — digital course access" /> : null}
        {detailed ? <Row label="Support" value={SUPPORT_EMAIL} /> : null}
      </dl>

      <div className="mt-5">
        <h4 className="text-sm font-semibold">What's included</h4>
        <ul className="mt-2 space-y-2">
          {course.includes.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-verde" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-col gap-2 pt-6">
        {detailed ? (
          <>
            <Button asChild className="min-h-11 w-full">
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.course(course.title, course.price))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase Course
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Purchases are arranged on WhatsApp — you receive the payment link and your course access.
            </p>
          </>
        ) : (
          <Button asChild variant="outline" className="min-h-11 w-full">
            <Link to="/courses" hash={course.slug}>
              View Course
            </Link>
          </Button>
        )}
      </div>
    </article>
  );
}
