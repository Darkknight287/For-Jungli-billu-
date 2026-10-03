import { closing, friend } from "@/lib/birthday-content";
import { Reveal } from "@/components/birthday/Reveal";

export function Closing() {
  return (
    <footer className="px-5 pb-16 pt-10 sm:pb-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <div aria-hidden className="rule-ink mx-auto h-px w-full max-w-sm" />
        <h2 className="mt-10 font-display text-3xl leading-tight sm:text-4xl">
          {closing.heading}
        </h2>
        <p className="mt-4 font-hand text-2xl text-primary">{closing.note}</p>
        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          for {friend.name} · {friend.age}
        </p>
      </Reveal>
    </footer>
  );
}
