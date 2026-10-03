import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { friend } from "@/lib/birthday-content";

const EMBERS = 16;

export function CandleMoment() {
  const [lit, setLit] = useState(true);
  const [blowingOut, setBlowingOut] = useState(false);

  const embers = useMemo(
    () =>
      Array.from({ length: EMBERS }, (_, i) => ({
        id: i,
        left: 8 + ((i * 37) % 84),
        delay: (i % 8) * 0.22,
        life: 3.4 + (i % 5) * 0.6,
        drift: ((i % 4) - 1.5) * 26,
        size: i % 3 === 0 ? 5 : 3,
      })),
    [],
  );

  return (
    <div className="relative">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-1000",
          lit ? "glow-breathe opacity-90" : "opacity-0",
        )}
        style={{ background: "radial-gradient(circle, var(--color-glow), transparent 68%)" }}
      />

      <ul className="flex items-end justify-center gap-7 sm:gap-10" aria-label="Birthday candles">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex flex-col items-center">
            {/* flame */}
            <span
              aria-hidden
              className={cn(
                "relative block transition-all duration-500",
                lit || blowingOut ? "h-7 w-3 opacity-100" : "h-0 w-3 opacity-0",
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-[50%/60%] bg-flame",
                  lit && !blowingOut && "flame-flicker",
                  blowingOut && "candle-blowout",
                )}
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 78%, oklch(0.98 0.04 95) 0%, var(--color-flame) 46%, oklch(0.72 0.19 44) 100%)",
                  boxShadow: "0 0 22px 6px oklch(0.87 0.15 76 / 55%)",
                }}
              />
              {blowingOut && (
                <span className="candle-smoke absolute bottom-1 left-1/2 h-8 w-2 -translate-x-1/2 rounded-full bg-muted-foreground/30 blur-[2px]" />
              )}
            </span>

            {/* wick */}
            <span
              aria-hidden
              className={cn(
                "block w-[3px] rounded-full bg-ink/70 transition-all duration-500",
                lit ? "h-2" : "h-3",
              )}
            />

            {/* candle body */}
            <span
              aria-hidden
              className={cn(
                "block w-4 rounded-t-[3px] border-x border-b border-ink/15 sm:w-5",
                i === 1 ? "h-20" : "h-16",
              )}
              style={{
                background:
                  "repeating-linear-gradient(135deg, var(--color-card) 0 6px, var(--color-secondary) 6px 12px)",
              }}
            />
          </li>
        ))}
      </ul>

      {/* rising embers */}
      {lit && (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-2 h-40">
          {embers.map((e) => (
            <span
              key={e.id}
              className="ember absolute bottom-0 rounded-full bg-flame"
              style={
                {
                  left: `${e.left}%`,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  "--delay": `${e.delay}s`,
                  "--life": `${e.life}s`,
                  "--drift": `${e.drift}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          type="button"
          disabled={blowingOut || !lit}
          onClick={() => {
            setBlowingOut(true);
            window.setTimeout(() => {
              setLit(false);
              setBlowingOut(false);
            }, 700);
          }}
          className={cn(
            "rounded-full px-8 py-3 text-sm font-semibold tracking-wide shadow-press transition-transform duration-200",
            "bg-primary text-primary-foreground hover:-translate-y-0.5 active:translate-y-0.5 disabled:pointer-events-none",
          )}
        >
          {friend.blowPrompt}
        </button>

        <p
          className={cn(
            "font-hand text-2xl text-primary transition-opacity duration-700",
            !lit ? "opacity-100" : "opacity-0",
          )}
        >
          {friend.wishLine}
        </p>
      </div>
    </div>
  );
}
