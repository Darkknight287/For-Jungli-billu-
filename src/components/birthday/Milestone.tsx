import { friend, milestone } from "@/lib/birthday-content";
import { Reveal } from "@/components/birthday/Reveal";

export function Milestone() {
  return (
    <section
      aria-label={`${friend.age} years old today`}
      className="relative overflow-hidden px-5 py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:gap-12 sm:text-left">
        <Reveal className="shrink-0">
          <p
            className="font-display text-[9rem] leading-[0.75] text-primary sm:text-[13rem]"
            style={{ fontVariationSettings: "'SOFT' 40, 'WONK' 1" }}
          >
            {friend.age}
          </p>
        </Reveal>
        <Reveal delay={140} className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            {milestone.label}
          </p>
          <p className="mt-4 font-display text-2xl leading-snug text-balance sm:text-3xl">
            {milestone.line}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
