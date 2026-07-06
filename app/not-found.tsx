import Link from "next/link";
import { CanyonHeroBackground } from "@/components/CanyonHeroBackground";
import { SiteFrame } from "@/components/SiteFrame";
import "@/components/InnerPages.css";

export default function NotFound() {
  return (
    <SiteFrame>
      <section className="inner-hero">
        <CanyonHeroBackground />
        <div className="container">
          <p className="section-label">404</p>
          <h1>Let us guide you back to the operating view.</h1>
          <p className="lead">Return home to continue through the Canyon Data Labs site.</p>
          <div className="button-row">
            <Link className="btn primary" href="/">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
