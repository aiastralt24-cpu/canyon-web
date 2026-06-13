import { SimplePage, SolutionsContent } from "@/components/InnerPages";
import { SiteFrame } from "@/components/SiteFrame";

export default function SolutionsPage() {
  return (
    <SiteFrame>
      <SimplePage
        eyebrow="Solutions"
        title="Three solutions. One connected path from information to impact."
        copy="Canyon connects the foundation, intelligence, and execution layer that help leadership teams move with confidence."
      />
      <SolutionsContent />
    </SiteFrame>
  );
}
