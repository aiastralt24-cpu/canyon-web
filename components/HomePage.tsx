import Link from "next/link";
import Image from "next/image";
import { advantagePillars } from "@/lib/content";
import { CanyonHeroBackground } from "./CanyonHeroBackground";
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
        <CanyonHeroBackground />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="section-label reveal">Purpose-Built Enterprise Solutions</p>
            <h1 className="reveal">
              <span>We Build The</span>
              <span className="hero-accent-line">Foundation of Every Decision</span>
            </h1>
            <p className="lead reveal">
              Every business has untapped potential. The greatest opportunities often lie beneath the surface. We help
              you uncover what&apos;s truly driving performance and build solutions that create lasting impact.
            </p>
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
              <path className="input-line line-a" d="M285 74 C412 74 520 178 600 210" />
              <path className="input-line line-b" d="M285 126 C420 126 528 188 600 210" />
              <path className="input-line line-c" d="M285 178 C436 178 540 202 600 210" />
              <path className="input-line line-d" d="M285 230 C436 230 540 218 600 210" />
              <path className="input-line line-e" d="M285 282 C420 282 528 232 600 210" />
              <path className="input-line line-f" d="M285 334 C412 334 520 242 600 210" />
              <path className="decision-line decision-trunk" d="M600 210 L830 210" />
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
          </div>
        </div>
      </section>
    </>
  );
}
