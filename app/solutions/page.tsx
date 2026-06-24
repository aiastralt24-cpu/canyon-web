import { SimplePage, SolutionsContent } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function SolutionsPage() {
  return (
    <SiteFrame>
      <SimplePage
        eyebrow="Solutions"
        heroClassName="solutions-hero"
        title={
          <>
            <span className="inner-hero-title-line">Three layers.</span>
            <span className="inner-hero-title-line inner-hero-title-accent">One connected platform.</span>
          </>
        }
        copy="Canyon Systems captures operational data, Canyon Grid gives it business context, and Canyon Edge turns it into decisions teams can act on."
      />
      <SolutionsContent />
    </SiteFrame>
  );
}
