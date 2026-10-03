import { createFileRoute } from "@tanstack/react-router";
import { CandleMoment } from "@/components/birthday/CandleMoment";
import { Closing } from "@/components/birthday/Closing";
import { Letter } from "@/components/birthday/Letter";
import { MemoryStrip } from "@/components/birthday/MemoryStrip";
import { Milestone } from "@/components/birthday/Milestone";
import { Reasons } from "@/components/birthday/Reasons";
import { Reveal } from "@/components/birthday/Reveal";
import { friend } from "@/lib/birthday-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Happy Birthday, ${friend.name} — a page made just for you` },
      {
        name: "description",
        content: `A handmade birthday page for ${friend.name}: candles to light, four memories, and a letter that says the rest.`,
      },
      { property: "og:title", content: `Happy Birthday, ${friend.name}` },
      {
        property: "og:description",
        content: `Light the candles, read the letter. This one was made by hand, entirely for you.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayPage,
});

function BirthdayPage() {
  return (
    <div className="paper-grain min-h-screen bg-background text-foreground">
      <span
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 -z-10 mix-blend-multiply"
      />

      <main>
        {/* ---------- hero ---------- */}
        <section className="px-5 pb-14 pt-20 sm:pb-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-muted-foreground">
                {friend.kicker}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-8 font-display text-2xl italic leading-none text-muted-foreground sm:text-3xl">
                {friend.greeting}
              </p>
              <h1
                className="mt-1 font-display tracking-tight text-balance"
                style={{ fontVariationSettings: "'SOFT' 30, 'WONK' 1" }}
              >
                <span className="block text-[5rem] leading-[0.8] sm:text-[9rem]">
                  {friend.name.split("\n")[0]}
                </span>
                {friend.name.includes("\n") && (
                  <span className="mt-5 block text-[1.75rem] leading-[1.1] sm:mt-7 sm:text-[2.75rem]">
                    {friend.name.split("\n")[1]}
                  </span>
                )}
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {friend.heroLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={300} className="mt-14">
            <CandleMoment />
          </Reveal>
        </section>

        <Milestone />
        <MemoryStrip />
        <Reasons />
        <Letter />
      </main>

      <Closing />
    </div>
  );
}
