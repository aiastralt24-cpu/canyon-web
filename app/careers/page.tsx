import { CareersContent, SimplePage } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function CareersPage() {
  return (
    <SiteFrame className="careers-page">
      <SimplePage
        eyebrow="Careers"
        title={
          <>
            <span className="inner-hero-title-accent">Build clarity</span> for organizations operating in complexity.
          </>
        }
        copy="For people who think across business, systems, data, and execution — and want to own outcomes, not tickets."
        cta="Apply to Canyon"
        ctaHref="#apply"
        secondaryCta="Life at Canyon"
        secondaryHref="#life-at-canyon"
      />
      <CareersContent />
    </SiteFrame>
  );
}
