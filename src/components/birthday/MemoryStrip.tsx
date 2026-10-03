import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";
import { memories, memoriesHeading, memoriesSub } from "@/lib/birthday-content";
import { Reveal } from "@/components/birthday/Reveal";

const SOURCES: Record<string, string> = {
  "memory-1": memory1,
  "memory-2": memory2,
  "memory-3": memory3,
  "memory-4": memory4,
};

export function MemoryStrip() {
  return (
    <section aria-labelledby="memories-heading" className="px-5 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2
          id="memories-heading"
          className="font-display text-3xl leading-tight text-balance sm:text-4xl"
        >
          {memoriesHeading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {memoriesSub}
        </p>
      </Reveal>

      {/* film strip: sprocket rows top and bottom, frames inside */}
      <Reveal delay={120} className="mx-auto mt-10 max-w-5xl">
        <div className="overflow-hidden rounded-lg bg-ink/95 p-3 shadow-lift sm:p-4">
          <div className="film-frame h-4 rounded-sm" aria-hidden />

          <div className="grid grid-cols-2 gap-3 py-3 sm:grid-cols-4 sm:gap-4">
            {memories.map((memory, index) => (
              <figure key={memory.src} className="group">
                <div className="relative overflow-hidden rounded-sm ring-1 ring-white/10">
                  <img
                    src={SOURCES[memory.src]}
                    alt={memory.caption}
                    width={1024}
                    height={1024}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-1.5 top-1.5 rounded-sm bg-ink/70 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-paper">
                    {memory.note}
                  </span>
                </div>
                <figcaption className="mt-2 font-hand text-lg leading-tight text-paper/85 sm:text-xl">
                  {memory.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="film-frame h-4 rounded-sm" aria-hidden />
        </div>
      </Reveal>
    </section>
  );
}
