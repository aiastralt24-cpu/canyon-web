import { AboutContent, SimplePage } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function AboutPage() {
  return (
    <SiteFrame>
      <SimplePage
        eyebrow="About Canyon Data Labs"
        heroClassName="about-hero"
        title={
          <>
            <span className="inner-hero-title-line">An Embedded Partner</span>
            <span className="inner-hero-title-line">
              For <span className="inner-hero-title-accent">Enterprise Clarity</span>
            </span>
          </>
        }
        copy="Canyon Data Labs helps organisations turn business requirements into connected systems, decision intelligence, and accountable execution."
        cta="Book a Discovery Workshop"
        ctaHref="/contact"
      />
      <AboutContent />
    </SiteFrame>
  );
}
