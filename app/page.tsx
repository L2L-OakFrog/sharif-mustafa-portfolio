import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Summary } from "@/components/Summary";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Navbar items={portfolioData.navigation} />
      <Hero hero={portfolioData.hero} />
      <Summary items={portfolioData.summary} />
      <Skills groups={portfolioData.skillGroups} />
      <ExperienceTimeline experience={portfolioData.experience} />
      <Expertise expertise={portfolioData.expertise} />
      <Education education={portfolioData.education} />
      <Certifications certifications={portfolioData.certifications} />
      <Contact contact={portfolioData.contact} />
    </main>
  );
}
