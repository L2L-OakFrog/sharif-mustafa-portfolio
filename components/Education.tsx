import { EducationItem } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type EducationProps = {
  education: EducationItem[];
};

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Education"
          title="Academic foundation"
          description="Sharif Mustafa&apos;s academic background complements a QA career built on communication, stakeholder alignment, and disciplined delivery within structured industries."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <ScrollReveal key={item.degree} delay={index * 100}>
              <article className="section-card section-glass-b rounded-[var(--radius-card)] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Degree
              </p>
              <h3 className="section-title mt-3 text-2xl font-extrabold">{item.degree}</h3>
              <p className="mt-4 text-lg font-semibold text-[color:color-mix(in_srgb,var(--foreground)_82%,transparent)]">
                {item.institution}
              </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
