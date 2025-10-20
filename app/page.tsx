import { CliHeader } from "@/src/components/cli-header";
import { SectionWrapper } from "@/src/components/section-wrapper";
import { ContactSection } from "@/src/components/sections/contact-section";
import { HeroSection } from "@/src/components/sections/hero-section";
import { ProjectsSection } from "@/src/components/sections/projects-section";
import { SkillsSection } from "@/src/components/sections/skills-section";
import { code } from "./layout";

export default function Home() {
  return (
    <div
      className={`${code.className} bg-background text-foreground min-h-screen`}
    >
      <main className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
        <div className="bg-card border-border shadow-muted overflow-hidden rounded-lg border shadow-lg">
          <div className="border-border bg-muted flex items-center gap-2 border-b px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="text-muted-foreground ml-4 text-sm">
              user@portfolio: ~
            </span>
          </div>

          <div className="space-y-12 p-4 md:p-6 lg:p-8">
            <HeroSection />

            <SectionWrapper>
              <CliHeader />
            </SectionWrapper>

            <SectionWrapper delay={100}>
              <SkillsSection />
            </SectionWrapper>

            <SectionWrapper delay={200}>
              <ProjectsSection />
            </SectionWrapper>

            <SectionWrapper delay={300}>
              <ContactSection />
            </SectionWrapper>

            <div className="flex items-center gap-2 pt-8">
              <p className="text-primary">
                <span className="text-accent">~</span>$
              </p>
              <span className="bg-foreground h-4 w-2 animate-pulse"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
