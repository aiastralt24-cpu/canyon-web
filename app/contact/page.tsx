import { ContactContent, SimplePage } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function ContactPage() {
  return (
    <SiteFrame>
      <SimplePage
        eyebrow="Get in Touch"
        title="Start with the business priority."
        copy="Share the systems, decisions, and execution priorities that can create the next level of operating clarity."
        cta="Book a Discovery Workshop"
        ctaHref="#book-demo"
      />
      <ContactContent />
    </SiteFrame>
  );
}
