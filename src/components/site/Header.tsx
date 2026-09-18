import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, TEACHER_NAME } from "@/content/site";

function Wordmark() {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2" aria-label={`${TEACHER_NAME} — home`}>
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-navy font-display text-sm font-semibold text-primary-foreground">
        KM
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-sm font-semibold text-foreground">
          Kemuel Matias de Jesus
        </span>
        <span className="block text-[11px] tracking-wide text-muted-foreground">
          Online Portuguese Teacher
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Wordmark />

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:text-foreground data-[status=active]:font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild className="hidden min-h-11 sm:inline-flex">
            <Link to="/private-lessons">Book a Private Lesson</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="min-h-11 min-w-11 lg:hidden"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="px-4 font-display text-base">Menu</SheetTitle>
              <nav aria-label="Mobile" className="px-4">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: item.to === "/" }}
                        className="block rounded-md px-3 py-3 text-base text-foreground transition-colors hover:bg-secondary data-[status=active]:font-semibold data-[status=active]:text-verde"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4 min-h-11 w-full">
                  <Link to="/private-lessons" onClick={() => setOpen(false)}>
                    Book a Private Lesson
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
