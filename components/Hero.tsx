import { HeroData } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

type HeroProps = {
  hero: HeroData;
};

export function Hero({ hero }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12">
      <div className="section-shell grid gap-8 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-20">
        <ScrollReveal className="space-y-8">
          <span className="eyebrow">{hero.badge}</span>
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
              QA Automation Engineer Portfolio
            </p>
            <h1 className="section-title max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-6xl xl:text-7xl">
              {hero.name}
            </h1>
            <p className="max-w-3xl text-xl font-semibold text-[color:color-mix(in_srgb,var(--foreground)_82%,transparent)] sm:text-2xl">
              {hero.title}
            </p>
            <p className="max-w-3xl text-base leading-8 text-[color:color-mix(in_srgb,var(--foreground)_76%,transparent)] sm:text-lg">
              {hero.intro}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="liquid-pill inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="liquid-panel rounded-[2rem] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Core Focus
              </p>
              <h2 className="section-title mt-2 text-2xl font-extrabold">
                Quality engineered for regulated systems
              </h2>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2 text-right">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Focus</p>
              <p className="text-sm font-semibold">Federal, Banking, Healthcare</p>
            </div>
          </div>

          <ul className="space-y-4">
            {hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="liquid-pill rounded-2xl px-4 py-4 text-sm font-semibold leading-7 text-[color:color-mix(in_srgb,var(--foreground)_84%,transparent)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
