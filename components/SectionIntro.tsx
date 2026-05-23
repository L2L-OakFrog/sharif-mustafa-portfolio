type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <span className="eyebrow liquid-pill">{eyebrow}</span>
      <h2 className="section-title mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[color:color-mix(in_srgb,var(--foreground)_76%,transparent)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
