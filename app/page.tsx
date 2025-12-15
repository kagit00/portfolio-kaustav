import { NavClean } from "@/components/nav-clean"
import { HeroClean } from "@/components/hero-clean"
import { WorkGrid } from "@/components/work-grid"

import { ExperiencePremium } from "@/components/experience-premium"
import { CertificationsMinimal } from "@/components/certifications-min"
import { ResumeSection } from "@/components/resume-section"
import { CtaMin } from "@/components/cta-min"
import { FooterClean } from "@/components/footer-clean"
import { SkillsSection } from "@/components/skills-section"

export default function Page() {
  return (
    <main>
      <NavClean />
      <HeroClean />
      {/* Marketing/agency sections removed */}
      <WorkGrid />
      <SkillsSection />
      <ExperiencePremium />
      <CertificationsMinimal />
      <ResumeSection />
      <FooterClean />
    </main>
  )
}
