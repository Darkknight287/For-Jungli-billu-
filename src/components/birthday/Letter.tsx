import { letter } from "@/lib/birthday-content";
import { Reveal } from "@/components/birthday/Reveal";

export function Letter() {
  return (
    <section aria-label="A letter" className="px-5 py-16 sm:py-24">
      <Reveal className="relative mx-auto max-w-2xl">
        {/* washi tape holding the page down */}
        <span
          aria-hidden
          className="tape-washi absolute -top-3 left-8 h-6 w-24 -rotate-6 rounded-[2px]"
        />
        <span
          aria-hidden
          className="tape-washi absolute -top-3 right-8 h-6 w-24 rotate-6 rounded-[2px]"
        />

        <article className="rounded-lg bg-card p-7 shadow-lift ring-1 ring-border sm:p-12">
          <p className="font-hand text-3xl text-primary">{letter.salutation}</p>

          <div className="mt-6 space-y-5">
            {letter.body.map((paragraph) => (
              <p
                key={paragraph}
                className="font-display text-lg leading-relaxed text-pretty sm:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
              {letter.signOff}
            </p>
            <p className="mt-1 font-hand text-3xl text-ink sm:text-4xl">{letter.signature}</p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
