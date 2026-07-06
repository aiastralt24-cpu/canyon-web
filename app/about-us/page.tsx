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
            <span className="inner-hero-title-line">Every Business Has Its Own Story.</span>
            <span className="inner-hero-title-line">
              We Build <span className="inner-hero-title-accent">Solutions Around It.</span>
            </span>
          </>
        }
        copy="Every purpose-built solution starts with understanding the business behind it. At Canyon, we take the time to learn how your organization truly works, uncover opportunities, and build solutions that create measurable and lasting impact."
      />
      <AboutContent />
    </SiteFrame>
  );
}
