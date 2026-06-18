import Link from "next/link";
import { advantagePillars, audiences } from "@/lib/content";
import "./HomePage.css";

const signalSources = ["ERP", "CRM", "Spreadsheets", "Plant & supply", "Reports"];

const operatingOutcomes = [
  {
    title: "One operating view",
    copy: "Trusted, shared, current"
  },
  {
    title: "A clear decision",
    copy: "Context leaders act on"
  },
  {
    title: "Accountable action",
    copy: "Owners, follow-through, results"
  }
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
                Book a Demo
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
            <h2>One flow from signal to action.</h2>
            <p className="lead">
              Connected systems on one side. Confident decisions on the other. Canyon is the flow between them.
            </p>
          </div>

          <div className="operating-flow" aria-label="Canyon operating model">
            <div className="signal-stack" aria-label="Enterprise signals">
              {signalSources.map((source) => (
                <span key={source}>{source}</span>
              ))}
            </div>

            <div className="flow-canvas" aria-hidden="true">
              <svg viewBox="0 0 1160 420" preserveAspectRatio="none">
                <g className="flow-source-lines">
                  <path d="M18 46 C 235 44, 330 190, 528 206" />
                  <path d="M18 126 C 256 126, 340 196, 528 208" />
                  <path d="M18 206 C 282 206, 348 208, 528 210" />
                  <path d="M18 286 C 256 286, 340 222, 528 212" />
                  <path d="M18 366 C 235 368, 330 230, 528 214" />
                </g>
                <path className="flow-primary-line" d="M18 206 C 282 206, 348 208, 528 210" />
                <path className="flow-output-line" d="M650 210 C 800 210, 870 210, 1008 210" />
                <path className="flow-output-guide flow-guide-top" d="M1008 210 C 1024 156, 1054 116, 1112 86" />
                <path className="flow-output-guide flow-guide-bottom" d="M1008 210 C 1024 264, 1054 304, 1112 334" />
                <circle className="flow-pulse flow-pulse-a" r="5" />
                <circle className="flow-pulse flow-pulse-b" r="5" />
              </svg>

              <div className="flow-core">
                <span className="core-mark" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <span className="flow-core-label">Canyon</span>
            </div>

            <div className="outcome-stack" aria-label="Leadership outcomes">
              {operatingOutcomes.map((card, index) => (
                <article className="flow-outcome" key={card.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{card.title}</h3>
                  </div>
                </article>
              ))}
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
              Canyon turns leadership priorities into a connected operating model for clarity, ownership, and scale.
            </p>
          </div>
          <div className="advantage-panel" aria-label="Canyon advantage map">
            {advantagePillars.map((pillar, index) => (
              <article className="advantage-card reveal" key={pillar.title}>
                <div className="advantage-visual" aria-hidden="true">
                  {index === 0 ? (
                    <div className="frag-kpi">
                      <span>Priority · Margin recovery</span>
                      <strong>+2.4 pts</strong>
                      <em>vs plan</em>
                      <i />
                    </div>
                  ) : null}
                  {index === 1 ? (
                    <div className="frag-own">
                      <p>
                        <span>NK</span>
                        Review priced SKUs
                        <em>Due Fri</em>
                      </p>
                      <p>
                        <span>RS</span>
                        Confirm dispatch plan
                        <em>Done</em>
                      </p>
                    </div>
                  ) : null}
                  {index === 2 ? (
                    <div className="frag-ent">
                      <span>Operating view</span>
                      <div>
                        <em>Group</em>
                        <em>Pipes</em>
                        <em>Adhesives</em>
                        <em>Paints</em>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="advantage-copy">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-strip" aria-label="Teams Canyon helps">
        <div className="audience-strip-inner reveal">
          <h2>Built for the teams that run the business.</h2>
          <div className="audience-rail" aria-hidden="true">
            <div className="audience-track">
              {[...audiences, ...audiences].map((team, index) => (
                <span className="audience-pill" key={`${team}-${index}`}>
                  {team}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner reveal">
          <div className="final-cta-copy">
            <p className="section-label">Start with the business priority</p>
            <h2>
              <span>Connect Systems.</span>
              <span>Improve Visibility.</span>
              <span>Strengthen Accountability.</span>
            </h2>
          </div>
          <div className="button-row final-cta-actions">
            <Link className="btn primary" href="/contact#book-demo">
              Book a Demo
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
