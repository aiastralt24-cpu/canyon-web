import { AboutContent, SimplePage } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function AboutPage() {
  return (
    <SiteFrame>
      <SimplePage
        eyebrow="About Canyon Data Labs"
        title="An embedded partner for enterprise clarity."
        copy="Canyon Data Labs partners with leadership teams to create clarity, visibility, and confidence across growth, performance, and decision-making."
        cta="Get in Touch"
        ctaHref="/contact"
      />
      <AboutContent />
    </SiteFrame>
  );
}
