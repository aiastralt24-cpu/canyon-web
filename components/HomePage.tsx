import Link from "next/link";
import { advantagePillars } from "@/lib/content";
import { CanyonHeroBackground } from "./CanyonHeroBackground";
import "./HomePage.css";

const signalSources = [
  "ERP",
  "CRM / SFA / DMS",
  "HRMS / LMS",
  "Supply chain & logistics",
  "Planning systems",
  "Manual reports"
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
              <span>Every business has untapped potential. The greatest opportunities often lie beneath the surface.</span>
              <span>
                We help you uncover what&apos;s truly driving performance and build solutions that create lasting impact.
              </span>
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
            <svg className="operating-flow-art" viewBox="0 0 960 420" role="img" aria-labelledby="operating-flow-title">
              <title id="operating-flow-title">
                Canyon connects enterprise systems into one operating view, clear decisions, and accountable action.
              </title>
              <g className="operating-flow-routes" aria-hidden="true">
                <path className="input-line line-a" d="M330 52 C418 54 434 170 500 210" />
                <path className="input-line line-b" d="M330 104 C414 106 438 184 500 210" />
                <path className="input-line line-c" d="M330 156 C408 158 438 202 500 210" />
                <path className="input-line line-d" d="M330 208 C408 210 438 214 500 210" />
                <path className="input-line line-e" d="M330 260 C414 258 438 230 500 210" />
                <path className="input-line line-f" d="M330 312 C418 306 434 246 500 210" />
                <path className="decision-line decision-upper" d="M530 210 L642 118" />
                <path className="decision-line decision-trunk" d="M530 210 L650 210" />
                <path className="decision-line decision-lower" d="M530 210 L642 302" />
              </g>

              <g className="operating-source-nodes">
                {signalSources.map((source, index) => (
                  <g key={source} className="operating-source-node">
                    <rect x="34" y={34 + index * 52} width="296" height="36" rx="18" />
                    <text x="182" y={52 + index * 52} textAnchor="middle" dominantBaseline="middle">
                      {source}
                    </text>
                  </g>
                ))}
              </g>

              <g className="operating-hub" aria-hidden="true">
                <circle className="operating-hub-glow" cx="515" cy="210" r="39" />
                <circle className="operating-hub-ring" cx="515" cy="210" r="30" />
                <path className="operating-mark-left" d="M500 214c0-3.4 2.8-6.2 6.2-6.2H511v22.5h-11z" />
                <path className="operating-mark-right" d="M514 200c0-3.4 2.8-6.2 6.2-6.2h4.8v36.5h-11z" />
                <text x="515" y="268" textAnchor="middle">Canyon</text>
              </g>

              <g className="operating-outcome-nodes">
                <g>
                  <text className="operating-outcome-number" x="682" y="115">01</text>
                  <text className="operating-outcome-label" x="724" y="115">One Operating View</text>
                </g>
                <g>
                  <text className="operating-outcome-number" x="682" y="213">02</text>
                  <text className="operating-outcome-label" x="724" y="213">Clear Decisions</text>
                </g>
                <g>
                  <text className="operating-outcome-number" x="682" y="311">03</text>
                  <text className="operating-outcome-label" x="724" y="311">Accountable Action</text>
                </g>
              </g>
            </svg>

            <div className="operating-flow-mobile">
              <div className="operating-inputs" aria-label="Enterprise systems">
                {signalSources.map((source) => (
                  <span key={source}>{source}</span>
                ))}
              </div>

              <div className="operating-mobile-hub" aria-hidden="true">
                <span className="operating-mobile-mark">
                  <i />
                  <i />
                </span>
                <strong>Canyon</strong>
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
