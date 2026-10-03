import { reasons, reasonsHeading } from "@/lib/birthday-content";
import { Reveal } from "@/components/birthday/Reveal";

export function Reasons() {
  return (
    <section aria-labelledby="reasons-heading" className="px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2
            id="reasons-heading"
            className="font-display text-3xl leading-tight text-balance sm:text-4xl"
          >
            {reasonsHeading}
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-0">
          {reasons.map((reason, index) => (
            <Reveal as="li" key={reason} delay={index * 70} className="block">
              <div className="flex items-baseline gap-5 border-t border-border py-5 last:border-b">
                <span className="w-8 shrink-0 font-hand text-2xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-pretty sm:text-lg">{reason}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
