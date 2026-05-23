import { ContactData } from "@/data/portfolio";
import { ScrollReveal } from "./ScrollReveal";
import { SectionIntro } from "./SectionIntro";

type ContactProps = {
  contact: ContactData;
};

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-card section-glass-a rounded-[var(--radius-shell)] p-6 sm:p-8 lg:p-10">
          <SectionIntro
            eyebrow="Contact"
            title="Let&apos;s connect"
            description="I&apos;m available to discuss QA automation, API testing, accessibility, and quality engineering opportunities. You can reach me directly using the contact options below."
          />

          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="contact-card px-5 py-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative flex items-start gap-4">
                <div className="liquid-pill flex h-12 w-12 items-center justify-center rounded-[var(--radius-panel)] text-lg font-bold text-[var(--accent)]">
                  P
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Phone</p>
                  <p className="mt-3 text-lg font-bold">{contact.phone}</p>
                  <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--foreground)_62%,transparent)]">
                    Call for direct conversation.
                  </p>
                </div>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="contact-card px-5 py-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative flex items-start gap-4">
                <div className="liquid-pill flex h-12 w-12 items-center justify-center rounded-[var(--radius-panel)] text-lg font-bold text-[var(--accent)]">
                  E
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Email</p>
                  <p className="mt-3 text-lg font-bold break-all">{contact.email}</p>
                  <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--foreground)_62%,transparent)]">
                    Best for detailed role discussions.
                  </p>
                </div>
              </div>
            </a>

            <div className="contact-card px-5 py-5">
              <div className="relative flex items-start gap-4">
                <div className="liquid-pill flex h-12 w-12 items-center justify-center rounded-[var(--radius-panel)] text-lg font-bold text-[var(--accent)]">
                  A
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Address</p>
                  <p className="mt-3 text-lg font-bold">{contact.address}</p>
                  <p className="mt-2 text-sm text-[color:color-mix(in_srgb,var(--foreground)_62%,transparent)]">
                    Location details available here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
