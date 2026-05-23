import { SkillGroup } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type SkillsProps = {
  groups: SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Technical Skills"
          title="Practical QA automation capabilities organized the way hiring teams scan them"
          description="The skill set below mirrors the experience reflected in Sharif Mustafa&apos;s resume and naturally reinforces ATS keywords for QA automation, API testing, CI/CD, accessibility, and Agile delivery."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {groups.map((group, index) => (
            <ScrollReveal key={group.category} delay={index * 70}>
              <article className="liquid-stage section-card section-glass-b rounded-[var(--radius-card)] p-5 sm:p-7">
                <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                  <h3 className="section-title text-[1.85rem] font-bold leading-tight sm:text-2xl">{group.category}</h3>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {group.skills.length} items
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                    className="liquid-pill rounded-full px-3.5 py-2 text-sm font-semibold text-[color:color-mix(in_srgb,var(--foreground)_82%,transparent)] sm:px-4"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
