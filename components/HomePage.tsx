import Link from "next/link";
import Image from "next/image";
import { advantagePillars } from "@/lib/content";
import "./HomePage.css";

const signalSources = [
  "ERP",
  "CRM/SFA/DMS",
  "HRMS/LMS",
  "Supply Chain & Logistics",
  "Planning Systems",
  "Manual Reports"
];

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-contours" aria-hidden="true">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
            <path className="contour-line contour-a" d="M-120 210 C 220 155, 440 285, 720 222 S 1240 132, 1720 214" />
            <path className="contour-line contour-b" d="M-120 292 C 245 236, 462 366, 748 305 S 1258 218, 1720 296" />
            <path className="contour-line contour-c" d="M-120 650 C 260 594, 506 725, 802 654 S 1308 568, 1720 642" />
            <path className="contour-line contour-d" d="M-120 740 C 282 690, 520 812, 820 742 S 1318 658, 1720 735" />
          </svg>
        </div>
        <div className="hero-atmosphere" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="section-label reveal">INSIGHTS. DECISIONS. GROWTH.</p>
            <h1 className="reveal">
              <span>Raw Data To</span>
              <span className="hero-accent-line">Boardroom Decision</span>
            </h1>
            <p className="lead reveal">
              Canyon Data Labs connects business information, decision context, and execution accountability onto a
              common platform across the organization.
            </p>
            <div className="button-row reveal">
              <Link className="btn primary" href="/contact#book-demo">
                Book a Discovery Workshop
              </Link>
              <Link className="btn secondary" href="/solutions">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section operating-section">
        <div className="container operating-system reveal">
          <div className="operating-header">
            <p className="section-label">Operating Clarity</p>
            <h2>
              One Flow From
              <br />
              Signal To Action.
            </h2>
            <p className="lead">
              <span>Disparate systems on one side.</span>
              <span>Clear decisions on the other.</span>
              <span>Canyon is the flow between them.</span>
            </p>
          </div>

          <div className="operating-flow" aria-label="Canyon operating model">
            <svg className="operating-flow-lines" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
              <path className="input-line line-a" d="M315 52 C430 52 520 178 600 210" />
              <path className="input-line line-b" d="M315 116 C434 116 528 188 600 210" />
              <path className="input-line line-c" d="M315 180 C446 180 540 202 600 210" />
              <path className="input-line line-d" d="M315 244 C446 244 540 218 600 210" />
              <path className="input-line line-e" d="M315 308 C434 308 528 232 600 210" />
              <path className="input-line line-f" d="M315 372 C430 372 520 242 600 210" />
              <path className="decision-line decision-top" d="M600 210 C704 116 796 70 914 70" />
              <path className="decision-line decision-mid" d="M600 210 L914 210" />
              <path className="decision-line decision-bottom" d="M600 210 C704 304 796 350 914 350" />
            </svg>

            <div className="operating-inputs" aria-label="Enterprise systems">
              {signalSources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>

            <div className="operating-diagram" aria-hidden="true">
              <div className="diagram-core">
                <Image
                  className="core-mark"
                  src="/images/canyon-flow-core-icon.png"
                  alt=""
                  width={4500}
                  height={4500}
                  aria-hidden="true"
                />
                <span>Canyon</span>
              </div>
            </div>

            <div className="operating-outcomes" aria-label="Operating outcomes">
              <div>
                <span>01</span>
                <strong>One Operating View</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Clear Decisions</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Accountable Action</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container why-shell">
          <div className="why-intro reveal">
            <p className="section-label">Why Us</p>
            <h2>Built Around Business Reality.</h2>
            <p className="lead">
              Canyon understands business requirements and transforms them into an{" "}
              <span className="line-keep">enterprise-wide connected operating model.</span>
            </p>
          </div>
          <div className="advantage-panel reveal" aria-label="Canyon advantage map">
            {advantagePillars.map((pillar, index) => (
              <article className="advantage-card" key={pillar.title}>
                <span className="advantage-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="advantage-copy">
                  <h3>{pillar.title}</h3>
                  <ul>
                    {pillar.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner reveal">
          <div className="final-cta-copy">
            <p className="section-label">Start with the business priority</p>
            <h2>
              <span>Build Smart Systems.</span>
              <span>Connect Systems.</span>
              <span>Improve Visibility.</span>
              <span>Strengthen Accountability.</span>
              <span>Drive Actionability.</span>
            </h2>
          </div>
          <div className="button-row final-cta-actions">
            <Link className="btn primary" href="/contact#book-demo">
              Book a Discovery Workshop
            </Link>
            <Link className="btn secondary" href="/solutions">
              Explore Solution
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
