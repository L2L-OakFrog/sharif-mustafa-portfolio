import { ExperienceItem } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type ExperienceTimelineProps = {
  experience: ExperienceItem[];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Experience"
          title="Career history across federal, banking, and healthcare quality assurance"
          description="This experience timeline highlights QA automation engineering, manual testing, compliance support, and stakeholder collaboration in highly structured environments where reliability and traceability matter."
        />

        <div className="relative space-y-6 pl-0 md:pl-12">
          <div className="timeline-line absolute bottom-0 left-4 top-0 hidden w-px md:block" />
          {experience.map((item, index) => (
            <ScrollReveal key={`${item.company}-${item.role}`} className="relative" delay={index * 120}>
              <article className="relative">
              <div className="section-card section-glass-c rounded-[1.9rem] p-6 sm:p-8">
                <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="md:relative">
                    <span className="absolute -left-[3.45rem] top-3 hidden h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--accent)] md:block" />
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                      {item.period}
                    </p>
                    <h3 className="section-title mt-2 text-2xl font-extrabold">{item.company}</h3>
                    <p className="mt-2 text-lg font-semibold text-[color:color-mix(in_srgb,var(--foreground)_82%,transparent)]">
                      {item.role}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-semibold text-[color:color-mix(in_srgb,var(--foreground)_75%,transparent)]">
                    {item.location}
                  </div>
                </div>

                <ul className="grid gap-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-4 text-sm leading-7 text-[color:color-mix(in_srgb,var(--foreground)_80%,transparent)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
