import { ExpertiseItem } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type ExpertiseProps = {
  expertise: ExpertiseItem[];
};

export function Expertise({ expertise }: ExpertiseProps) {
  return (
    <section id="expertise" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Projects and QA Expertise"
          title="Focused QA strengths that map directly to automation engineering needs"
          description="This section highlights the QA capabilities I rely on most when building automation coverage, validating integrations, supporting compliance, and working closely with delivery teams."
        />

        <div className="liquid-stage px-5 py-10 sm:px-7 sm:py-12 lg:px-10 lg:py-14">
          <div className="liquid-column left-[4%] h-56 sm:h-72" />
          <div className="liquid-column left-[22%] hidden h-72 md:block" />
          <div className="liquid-column left-[41%] hidden h-80 lg:block" />
          <div className="liquid-column right-[24%] hidden h-72 md:block" />
          <div className="liquid-column right-[5%] h-64 sm:h-80" />

          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:items-end">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 70} className="h-full">
                <article className="liquid-panel flex h-full min-h-[24rem] flex-col rounded-[2rem] p-5 sm:p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="liquid-pill rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
                      QA Focus
                    </span>
                    <span className="text-sm font-semibold text-[color:color-mix(in_srgb,var(--foreground)_54%,transparent)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="section-title text-[2rem] font-extrabold leading-[1.02] text-[color:color-mix(in_srgb,var(--foreground)_94%,transparent)]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[color:color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {item.outcomes.map((outcome) => (
                      <div
                        key={outcome}
                        className="rounded-[1.1rem] border border-white/75 bg-white/44 px-4 py-3 text-sm font-semibold leading-6 text-[color:color-mix(in_srgb,var(--foreground)_78%,transparent)] shadow-[var(--shadow-soft)] backdrop-blur-xl"
                      >
                        {outcome}
                      </div>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
