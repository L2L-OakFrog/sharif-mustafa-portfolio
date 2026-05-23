import { SummaryItem } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type SummaryProps = {
  items: SummaryItem[];
};

export function Summary({ items }: SummaryProps) {
  return (
    <section id="summary" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Professional Summary"
          title="A quality-first engineer with hands-on automation and regulated-domain testing experience"
          description="Sharif Mustafa brings together manual QA depth, test automation engineering, API validation, and accessibility awareness to support reliable releases across federal, financial, and healthcare software environments."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 90}>
              <article className="section-card section-glass-a rounded-[1.75rem] p-6 sm:p-7">
              <h3 className="section-title text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-8 text-[color:color-mix(in_srgb,var(--foreground)_78%,transparent)]">
                {item.description}
              </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
