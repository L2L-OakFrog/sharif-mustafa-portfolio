import { CertificationItem } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type CertificationsProps = {
  certifications: CertificationItem[];
};

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Certifications"
          title="Recommended development path"
          description="These certifications reflect the areas I am actively prioritizing for continued professional growth and stronger alignment with quality engineering roles."
        />

        <div className="liquid-stage px-5 py-8 sm:px-7 sm:py-10 lg:px-10">
          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 90} className="h-full">
                <article className="liquid-stage liquid-panel flex h-full min-h-[18rem] flex-col p-5 sm:p-6">
                  <span className="liquid-pill w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {item.status}
                  </span>
                  <h3 className="section-title mt-5 text-[1.9rem] font-extrabold leading-tight text-[color:color-mix(in_srgb,var(--foreground)_92%,transparent)]">
                    {item.name}
                  </h3>
                  <p className="mt-4 leading-8 text-[color:color-mix(in_srgb,var(--foreground)_76%,transparent)]">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
