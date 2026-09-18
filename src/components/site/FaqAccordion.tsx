import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FaqAccordion({
  items,
  searchable = false,
}: {
  items: { q: string; a: string }[];
  searchable?: boolean;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(q));
  }, [items, query]);

  return (
    <div>
      {searchable ? (
        <div className="mb-8 max-w-md">
          <Label htmlFor="faq-search" className="mb-2 block text-sm">
            Search the FAQ
          </Label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              id="faq-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. refunds, scheduling, beginners"
              className="min-h-11 pl-9"
            />
          </div>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No questions match your search. You can ask directly through the contact page.
        </p>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filtered.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-display text-base">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
