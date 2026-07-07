import Link from "next/link";
import { solutionArchitecture, solutionDetails, solutions } from "@/lib/content";
import { CanyonHeroBackground } from "./CanyonHeroBackground";
import "./InnerPages.css";

type SimplePageProps = {
  eyebrow: string;
  title: React.ReactNode;
  copy: React.ReactNode;
  heroClassName?: string;
  cta?: string | null;
  ctaHref?: string;
  secondaryCta?: string | null;
  secondaryHref?: string;
  children?: React.ReactNode;
};

export function SimplePage({
  eyebrow,
  title,
  copy,
  heroClassName,
  cta = null,
  ctaHref = "/contact#book-demo",
  secondaryCta = null,
  secondaryHref = "/solutions",
  children
}: SimplePageProps) {
  return (
    <>
      <section className={["inner-hero", heroClassName].filter(Boolean).join(" ")}>
        <CanyonHeroBackground />
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="section-label reveal">{eyebrow}</p>
            <h1 className="reveal">{title}</h1>
            <p className="lead reveal">{copy}</p>
            <div className="button-row reveal">
              {cta ? (
                <Link className="btn primary" href={ctaHref}>
                  {cta}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link className="btn secondary" href={secondaryHref}>
                  {secondaryCta}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}

export function AboutContent() {
  const whyItems = [
    {
      title: "Business-first thinking",
      copy: "Everything we build, every connection, every intelligence view, every alert is designed backward from that answer."
    },
    {
      title: "Tailored to your reality",
      copy: "Built around existing systems, team rhythms, and business goals, not a forced template."
    },
    {
      title: "One partner, every layer",
      copy: "Strategy, systems, context, and execution connected by one accountable team."
    },
    {
      title: "From information to impact",
      copy: "Raw signals become decisions, action, and measurable business movement."
    },
    {
      title: "Built to evolve",
      copy: "Operating systems that grow with teams, markets, and priorities, designed for change."
    }
  ];

  const whoWeHelp = [
    {
      title: "Leadership teams",
      copy: "One trusted view for direction, priorities, and decisions."
    },
    {
      title: "Operations teams",
      copy: "Cleaner execution flow, faster response, and visible ownership."
    },
    {
      title: "Finance teams",
      copy: "Reliable reporting context with fewer disconnected sources."
    },
    {
      title: "Sales and commercial teams",
      copy: "Performance visibility across markets, customers, and movement."
    },
    {
      title: "Supply chain teams",
      copy: "Planning, inventory, and operations connected in one picture."
    },
    {
      title: "Growing businesses",
      copy: "Systems and intelligence ready for the next stage of scale."
    }
  ];

  const audienceIcons = [
    [
      "M12 4.5l6.5 3.5v8L12 19.5 5.5 16V8L12 4.5z",
      "M12 8.5v7",
      "M8.5 10.4l3.5 2 3.5-2"
    ],
    ["M5 12h14", "M12 5v14", "M7 7h4v4H7z", "M13 13h4v4h-4z"],
    ["M6 7.5h12", "M8 11h8", "M8 14.5h5", "M6 4.5h12v15H6z"],
    ["M5 16.5l4-4 3 3 7-8", "M15 7.5h4v4", "M5 19h14"],
    [
      "M4.5 8.5h9v7h-9z",
      "M13.5 10.5h3.5l2.5 2.8v2.2h-6z",
      "M7 18a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 7 18z",
      "M16.8 18a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2z"
    ],
    ["M5 18V9.5", "M10 18V6.5", "M15 18v-4.5", "M4.5 18.5h15", "M15 8l4-4", "M16 4h3v3"]
  ];

  return (
    <>
      <section className="about-overview-section" id="company-overview">
        <div className="container about-overview-grid">
          <div className="about-overview-copy reveal">
            <p className="section-label">Company Overview</p>
            <h2>Make it all work together.</h2>
            <div className="about-overview-rhythm" aria-label="How Canyon works">
              <span>Build what is missing.</span>
              <span>Connect what exists.</span>
              <span>Make it work together.</span>
            </div>
            <p>
              Some enterprises need the systems built. Others need the systems connected. Most need the intelligence
              layer that makes all of it useful. Canyon Data Labs does all three: one partner, from the first data point
              to the boardroom decision.
            </p>
            <p>
              Every engagement starts with the problem your business needs to solve, then connects the data, builds the
              intelligence, and delivers it to the people who can act on it.
            </p>
          </div>
          <figure className="about-strata-panel reveal" aria-label="Signals flowing into one operating view">
            <svg viewBox="0 0 600 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="600" height="700" fill="#121a2b" />
              <path d="M0 520 C 120 470, 240 560, 360 510 S 540 460, 600 500 L600 700 L0 700 Z" fill="#16243a" />
              <path d="M0 560 C 140 520, 260 610, 380 560 S 560 510, 600 545 L600 700 L0 700 Z" fill="#1b3a45" />
              <path d="M0 605 C 150 570, 280 650, 400 605 S 570 560, 600 590 L600 700 L0 700 Z" fill="#1e6e64" />
              <path d="M0 650 C 160 620, 300 690, 420 650 S 580 615, 600 635 L600 700 L0 700 Z" fill="#2b8a7c" />
              <g stroke="rgba(244,239,230,.14)" strokeWidth="1.2" fill="none">
                <path d="M0 160 C 130 120, 250 200, 370 160 S 540 110, 600 150" />
                <path d="M0 230 C 140 195, 260 270, 380 230 S 550 185, 600 220" />
                <path d="M0 300 C 150 270, 270 340, 390 300 S 560 260, 600 290" />
                <path d="M0 370 C 160 340, 280 410, 400 370 S 565 335, 600 360" />
              </g>
              <path d="M0 230 C 140 195, 260 270, 380 230 S 550 185, 600 220" stroke="#f7914b" strokeWidth="2" fill="none" />
              <circle cx="380" cy="230" r="5" fill="#f7914b" />
              <circle cx="380" cy="230" r="11" fill="none" stroke="#f7914b" opacity=".4" />
            </svg>
            <figcaption>
              <span />
              Signals → One Operating View
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about-statement-section" id="vision-mission">
        <div className="container about-statement reveal">
          <p className="section-label">Mission &amp; Vision</p>
          <h2>One partner. Every layer. Every decision.</h2>
          <div className="about-mission-grid">
            <article>
              <p className="section-label">Mission</p>
              <p>
                To be the only partner an enterprise needs on its data journey, building the systems that capture
                operational data, connecting every source into one intelligent layer, and making sure the right decision
                reaches the right person before the moment passes.
              </p>
            </article>
            <article>
              <p className="section-label">Vision</p>
              <p>
                To be the most trusted data partner for enterprises across India and global markets, the company that
                turns an organisation&apos;s own data into its sharpest competitive advantage.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-process-section" id="our-approach">
        <div className="container">
          <div className="about-process-head reveal">
            <p className="section-label">Our Approach</p>
            <h2>
              <span>Connect.</span>
              <span>Contextualise.</span>
              <span>Activate.</span>
            </h2>
            <p>One continuous motion from scattered signals to accountable action.</p>
          </div>
          <div className="about-steps-wrap">
            <div className="about-steps-signal" aria-hidden="true">
              <svg viewBox="0 0 1120 160" preserveAspectRatio="none">
                <path
                  className="about-signal-base"
                  d="M72 74 C 236 20, 344 122, 486 74 S 714 22, 876 70 S 1012 118, 1048 72"
                />
                <path
                  className="about-signal-pulse"
                  d="M72 74 C 236 20, 344 122, 486 74 S 714 22, 876 70 S 1012 118, 1048 72"
                />
              </svg>
            </div>
            <div className="about-steps">
              <article className="reveal">
                <h3>
                  <span>01</span> Signal unification
                </h3>
                <p>Build and unify systems, functions, and processes into a shared operating view.</p>
              </article>
              <article className="reveal">
                <h3>
                  <span>02</span> Business meaning
                </h3>
                <p>Your data shaped around the way your business operates.</p>
              </article>
              <article className="reveal">
                <h3>
                  <span>03</span> Accountable action
                </h3>
                <p>Move insights into accountable workflows, alerts, and outcomes.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="about-why-section" id="why-canyon">
        <div className="container about-why-grid">
          <div className="about-why-copy reveal">
            <p className="section-label">Why Canyon Data Labs</p>
            <h2>Every engagement starts with the decision that needs to be made.</h2>
            <p>
              We work backward from the business problem, building the systems, connections, and intelligence that get
              the right answer to the right person at exactly the right moment.
            </p>
          </div>
          <ol className="about-why-list">
            {whyItems.map((item, index) => (
              <li className="reveal" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-audience-section" id="who-we-help">
        <div className="container about-audience-shell">
          <div className="about-audience-head reveal">
            <p className="section-label">Who We Help</p>
            <h2>
              <span>One operating view</span>
              <span>for every team.</span>
            </h2>
            <p>
              Canyon connects the systems, context, and actions each function needs while keeping everyone aligned to
              one source of truth.
            </p>
          </div>

          <div className="about-audience-grid">
            {whoWeHelp.map((team, index) => (
              <article className="about-audience-card reveal" key={team.title}>
                <span className="about-audience-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    {audienceIcons[index].map((path) => (
                      <path key={path} d={path} />
                    ))}
                  </svg>
                </span>
                <div>
                  <h3>{team.title}</h3>
                  <p>{team.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-audience-rail reveal" aria-hidden="true">
            <div className="about-audience-track">
              {[...whoWeHelp, ...whoWeHelp].map((team, index) => (
                <span key={`${team.title}-${index}`}>{team.title}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StrataBackground() {
  return (
    <div className="strata-bg" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <g className="strata-layer strata-layer-a" stroke="rgba(244,239,230,.10)" strokeWidth="1.5">
          <path d="M-100 240 C 200 180, 420 320, 700 260 S 1200 160, 1700 250" />
          <path d="M-100 300 C 220 250, 440 380, 720 320 S 1220 220, 1700 310" />
          <path d="M-100 360 C 240 320, 460 440, 740 380 S 1240 290, 1700 370" />
        </g>
        <g className="strata-layer strata-layer-b" stroke="rgba(156,196,189,.16)" strokeWidth="1.5">
          <path d="M-100 470 C 260 420, 480 560, 760 490 S 1260 400, 1700 480" />
          <path d="M-100 540 C 280 500, 500 630, 780 560 S 1280 470, 1700 550" />
        </g>
        <g className="strata-layer strata-layer-c" stroke="rgba(244,239,230,.07)" strokeWidth="1.5">
          <path d="M-100 660 C 300 620, 520 740, 800 670 S 1300 590, 1700 660" />
          <path d="M-100 740 C 320 700, 540 820, 820 750 S 1320 670, 1700 740" />
          <path d="M-100 820 C 340 780, 560 900, 840 830 S 1340 750, 1700 820" />
        </g>
        <path
          className="strata-pulse-path"
          d="M-100 470 C 260 420, 480 560, 760 490 S 1260 400, 1700 480"
          stroke="#f7914b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SolutionsContent() {
  return (
    <>
      <section className="section solution-architecture-section">
        <div className="container solution-architecture">
          <div className="solution-architecture-head reveal">
            <p className="section-label">Platform Architecture</p>
            <h2>
              <span className="line-keep">Canyon Systems, Grid, and Edge</span>
              <br />
              <span className="line-keep">work as one connected platform.</span>
            </h2>
            <p>
              <span>Capture operational data and contextualise it with business rules.</span>
              <span>Then turn it into decisions, nudges, alerts, and executive intelligence.</span>
            </p>
          </div>
          <div className="architecture-track" aria-label="Canyon platform architecture">
            {solutionArchitecture.map((layer) => (
              <article className="architecture-card reveal" key={layer.name}>
                <div className="architecture-step">
                  <ArchitectureIcon verb={layer.verb} />
                  <strong>{layer.verb}</strong>
                </div>
                <h3>{layer.name}</h3>
                <p className="architecture-title">{layer.title}</p>
                <p>{layer.copy}</p>
                <ul className="architecture-proof">
                  {layer.proof.map((proof) => (
                    <li key={proof}>{proof}</li>
                  ))}
                </ul>
                <Link className="text-link architecture-cta" href={layer.href}>
                  Explore {layer.name} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

function ArchitectureIcon({ verb }: { verb: string }) {
  if (verb === "Capture") {
    return (
      <span className="architecture-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="5" y="4" width="14" height="16" rx="2.5" />
          <path d="M8.5 8h7" />
          <path d="M8.5 12h5" />
          <path d="M8.5 16h3" />
          <path d="m14.2 16.2 1.4 1.4 3-3.2" />
        </svg>
      </span>
    );
  }

  if (verb === "Contextualise") {
    return (
      <span className="architecture-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
          <circle cx="9" cy="7" r="1.8" />
          <circle cx="15" cy="12" r="1.8" />
          <circle cx="11" cy="17" r="1.8" />
        </svg>
      </span>
    );
  }

  return (
    <span className="architecture-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7.5" />
        <path d="m8.8 12.2 2.1 2.1 4.5-5" />
        <path d="M16.5 5.8 19 3.3" />
        <path d="M19.2 6.4V3h-3.4" />
      </svg>
    </span>
  );
}

export function SolutionDetail({ name }: { name: string }) {
  const solution = solutions.find((item) => item.name === name) ?? solutions[0];
  const detail = solutionDetails[solution.name as keyof typeof solutionDetails];

  return (
    <>
      <section className="section solution-detail-section">
        <div className={`container solution-story-panel solution-story-${detail.visual} reveal`}>
          <div className="solution-story-copy">
            <p className="section-label">{detail.layer}</p>
            <h2>{detail.headline}</h2>
            <p>{detail.copy}</p>
            <Link className="btn primary" href="/contact#book-demo">
              Contact Us
            </Link>
          </div>
          <SolutionVisual variant={detail.visual} />
        </div>
      </section>

      <section className="section solution-capability-detail-section">
        <div className="container solution-detail-grid">
          {detail.capabilities.map((capability, index) => (
            <article className="solution-detail-card reveal" key={capability.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solution-fit-section">
        <div className="container solution-fit-panel reveal">
          <div>
            <p className="section-label">Platform Fit</p>
            <h2>Where {solution.name} fits in the Canyon platform.</h2>
            <p>{detail.flowCopy}</p>
          </div>
          <div className="solution-layer-flow" aria-label="Canyon platform flow">
            {solutionArchitecture.map((layer) => (
              <Link
                className={`solution-layer ${layer.name === solution.name ? "active" : ""}`}
                href={layer.href}
                key={layer.name}
              >
                <span>{layer.step}</span>
                <strong>{layer.verb}</strong>
                <small>{layer.name}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SolutionVisual({ variant }: { variant: string }) {
  if (variant === "grid") {
    return (
      <div className="solution-product-visual" aria-label="Canyon Grid governed data visual">
        <div className="solution-visual-shell grid-visual">
          <div className="grid-node primary">Rules</div>
          <div className="grid-node">ERP</div>
          <div className="grid-node">CRM</div>
          <div className="grid-node">Finance</div>
          <div className="grid-node">Supply</div>
          <div className="grid-core">Governed Layer</div>
          <div className="grid-output">Exceptions → Owners</div>
        </div>
      </div>
    );
  }

  if (variant === "edge") {
    return (
      <div className="solution-product-visual" aria-label="Canyon Edge intelligence visual">
        <div className="solution-visual-shell edge-visual">
          <div className="edge-question">Ask Your Data</div>
          <div className="edge-chart">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="edge-card">Executive View</div>
          <div className="edge-card accent">Nudge Sent</div>
        </div>
      </div>
    );
  }

  return (
    <div className="solution-product-visual" aria-label="Canyon Systems operational capture visual">
      <div className="solution-visual-shell systems-visual">
        <div className="systems-tabs">
          <span>SFA</span>
          <span>CRM</span>
        </div>
        <div className="systems-list">
          {["Visit logged", "Order captured", "Follow-up owned", "Customer updated"].map((item) => (
            <div className="systems-row" key={item}>
              <span />
              {item}
            </div>
          ))}
        </div>
        <div className="systems-meter">
          <strong>94%</strong>
          <small>field visibility</small>
        </div>
      </div>
    </div>
  );
}
export function ResourcesContent() {
  const items = [
    ["Insights", "Leadership thinking for connected operating views."],
    ["Articles", "Practical writing on information, context, and execution."],
    ["FAQs", "Direct answers for teams evaluating Canyon."],
    ["Media & Downloads", "Brand, solution, and briefing materials."]
  ];

  return (
    <section className="section resource-index-section">
      <div className="container page-card-grid">
        {items.map(([item, copy]) => (
          <article className="card feature-card reveal" key={item}>
            <h3>{item}</h3>
            <p className="body-copy">{copy}</p>
            <Link className="text-link" href={`/resources/${item.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}>
              View {item} <span>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResourceDetailContent({ kind }: { kind: "insights" | "articles" | "faqs" | "media" }) {
  const content = {
    insights: {
      label: "Insight Themes",
      title: "Ideas shaped for leaders building operating clarity.",
      items: ["Enterprise visibility", "Decision context", "Execution rhythm"]
    },
    articles: {
      label: "Article Tracks",
      title: "Clear perspectives for teams modernizing how work moves.",
      items: ["Reporting confidence", "Leadership visibility", "Workflow accountability"]
    },
    faqs: {
      label: "Direct Answers",
      title: "Everything starts with fit, priority, and the path to value.",
      items: ["Engagement shape", "Solution fit", "Implementation rhythm"]
    },
    media: {
      label: "Media Library",
      title: "Launch materials prepared for teams, partners, and briefings.",
      items: ["Company overview", "Solution summaries", "Brand assets"]
    }
  }[kind];

  return <ContentGrid id={`${kind}-content`} label={content.label} title={content.title} items={content.items} />;
}

export function CareersContent() {
  const pillars = [
    {
      title: "Business-first thinking",
      proof: "You will work from the business problem backward, not from a feature list forward."
    },
    {
      title: "High ownership",
      proof: "You will own a problem end-to-end: from the first question to the system in production."
    },
    {
      title: "Calm execution",
      proof: "We value clear thinking, reliable delivery, and direct communication over theatre."
    }
  ];

  return (
    <>
      <section className="careers-section careers-pillars-section" id="life-at-canyon">
        <div className="container careers-section-head careers-section-head-split reveal">
          <div>
            <p className="section-label">Life at Canyon</p>
            <h2>Small teams. Real problems. Visible ownership.</h2>
          </div>
          <p>
            Canyon is for people who can move between business context, product judgment, data detail, and accountable
            execution without losing the thread.
          </p>
        </div>
        <div className="container careers-pillar-grid">
          {pillars.map((pillar, index) => (
            <article className="careers-pillar reveal" key={pillar.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <strong>{pillar.proof}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-section careers-apply-section" id="apply">
        <div className="container careers-apply-grid">
          <div className="careers-apply-copy reveal">
            <p className="section-label">Apply</p>
            <h2>Send us your thinking.</h2>
            <p>
              Share your CV and a short note on the kind of work you want to own. We look for range across business,
              systems, data, and execution.
            </p>
            <dl className="careers-apply-notes" aria-label="Application details">
              <div>
                <dt>Best fit</dt>
                <dd>Product, data, systems, and operating roles.</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>We review thoughtful applications within one business week.</dd>
              </div>
            </dl>
          </div>
          <form className="careers-apply-form reveal">
            <label htmlFor="careerName">
              Name
              <input id="careerName" name="name" placeholder="Your name" required suppressHydrationWarning />
            </label>
            <label htmlFor="careerEmail">
              Email
              <input id="careerEmail" name="email" type="email" placeholder="you@email.com" required suppressHydrationWarning />
            </label>
            <label htmlFor="careerRole">
              Area of interest
              <select id="careerRole" name="area" defaultValue="Product / engineering" suppressHydrationWarning>
                <option>Product / engineering</option>
                <option>Data / automation</option>
                <option>Business operations</option>
                <option>Open application</option>
              </select>
            </label>
            <label htmlFor="careerCv">
              CV / resume
              <input id="careerCv" name="cv" type="file" accept=".pdf,.doc,.docx" suppressHydrationWarning />
            </label>
            <label htmlFor="careerNote" className="careers-apply-note-field">
              Short note
              <textarea
                id="careerNote"
                name="note"
                placeholder="Tell us what kind of problem you want to work on."
                rows={4}
                suppressHydrationWarning
              />
            </label>
            <button className="btn primary" type="submit">Submit application</button>
          </form>
        </div>
      </section>
    </>
  );
}

export function ContactContent() {
  return (
    <section className="section contact-section" id="book-demo">
      <div className="container contact-panel reveal">
        <div className="contact-copy">
          <p className="section-label">Contact Us</p>
          <h2>What should the first conversation clarify?</h2>
          <p className="lead">
            Bring the decision, system, or operating gap that keeps resurfacing. Canyon will help frame the first
            useful move: build, connect, automate, or bring intelligence closer to action.
          </p>
          <dl className="contact-meta-list" aria-label="Workshop details">
            <div>
              <dt>Base</dt>
              <dd>Ahmedabad · India · Gulf</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>hello@canyondatalabs.com</dd>
            </div>
            <div>
              <dt>Response</dt>
              <dd>Within 1 business day</dd>
            </div>
          </dl>
        </div>
        <form
          action="mailto:hello@canyondatalabs.com?subject=Canyon%20Data%20Labs%20enquiry"
          className="contact-form contact-workshop-form"
          encType="text/plain"
          method="post"
        >
          <label htmlFor="contactName">
            Name
            <input id="contactName" name="name" placeholder="Your name" required suppressHydrationWarning />
          </label>
          <label htmlFor="workEmail">
            Work email
            <input id="workEmail" name="email" type="email" placeholder="you@company.com" required suppressHydrationWarning />
          </label>
          <label htmlFor="companyName">
            Company
            <input id="companyName" name="company" placeholder="Company name" suppressHydrationWarning />
          </label>
          <fieldset className="contact-chip-field">
            <legend>Starting point</legend>
            <div className="contact-chip-group">
              {["Systems build", "Intelligence layer", "Automation", "Operating rhythm"].map((item, index) => (
                <label className="contact-chip" key={item}>
                  <input name="startingPoint" type="checkbox" value={item} defaultChecked={index === 0} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label htmlFor="primaryChallenge">
            Notes
            <textarea
              id="primaryChallenge"
              name="message"
              placeholder="The priority, system, or decision you want to move on."
              required
              suppressHydrationWarning
            />
          </label>
          <button className="btn primary" type="submit">
            Request the workshop
          </button>
        </form>
      </div>
    </section>
  );
}

export function LegalContent({ type }: { type: "privacy" | "terms" | "cookies" }) {
  const content = {
    privacy: {
      label: "Privacy Framework",
      title: "Clear handling for information shared with Canyon.",
      items: ["Information shared through forms", "Communication preferences", "Responsible data handling"]
    },
    terms: {
      label: "Website Terms",
      title: "Simple terms for a focused website experience.",
      items: ["Website access", "Content usage", "Contact pathways"]
    },
    cookies: {
      label: "Cookie Preferences",
      title: "Transparent choices for website performance and experience.",
      items: ["Essential site function", "Performance insight", "Preference control"]
    }
  }[type];

  return <ContentGrid id={`${type}-details`} label={content.label} title={content.title} items={content.items} />;
}

export function ThankYouContent() {
  return (
    <section className="section compact">
      <div className="container text-panel reveal">
        <p className="section-label">Next Step</p>
        <h2>We will review the business priority and respond with a clear path forward.</h2>
      </div>
    </section>
  );
}

function ContentGrid({ id, label, title, items }: { id: string; label: string; title: string; items: string[] }) {
  const copyFor = (item: string) =>
    ({
      "Enterprise visibility": "Bring trusted information into one leadership view across systems, reports, and teams.",
      "Decision support": "Shape signals into context that helps leaders choose the next move with confidence.",
      "Execution enablement": "Connect insight to owners, workflows, and follow-through across the business.",
      Connect: "Unify systems, functions, and processes into a shared operating view.",
      Contextualise: "Translate information into business meaning leaders can act on.",
      Activate: "Move insights into accountable workflows, alerts, and outcomes.",
      "Business-first thinking": "Start with the leadership priority, then shape technology around the operating reality.",
      "Tailored to your reality": "Build around existing systems, team rhythms, and business goals.",
      "One partner. Every layer.": "Connect strategy, systems, context, and execution with one accountable team.",
      "From information to impact": "Turn raw signals into decisions, action, and measurable business movement.",
      "Enterprise-wide perspective": "Create clarity across functions while preserving the details that matter.",
      "Built to evolve": "Design operating systems that grow with teams, markets, and priorities.",
      "Leadership teams seeking a unified business view": "Give leaders a trusted view of performance, priorities, and movement.",
      "Operations teams improving execution and response times": "Help operations teams coordinate response, ownership, and progress.",
      "Finance teams strengthening reporting confidence": "Support reporting confidence with clearer inputs, context, and visibility.",
      "Sales and commercial teams improving performance visibility": "Connect commercial performance signals to decisions and action.",
      "Supply chain teams connecting planning, inventory, and operations": "Link planning, inventory, and operational movement in one view.",
      "Growing businesses preparing for scale": "Create the operating foundation for faster, clearer growth.",
      "Reporting confidence": "Create reliable information flows for leadership updates and decision cycles.",
      "Leadership visibility": "Give teams a crisp view of priorities, performance, and ownership.",
      "Workflow accountability": "Connect decisions to owners, action paths, and follow-through.",
      "Engagement shape": "Start with the business priority and define the right path with Canyon.",
      "Solution fit": "Match Canyon Systems, Canyon Edge, and Canyon Grid to the operating opportunity.",
      "Implementation rhythm": "Move through clear phases that build visibility, context, and execution.",
      "Company overview": "A concise view of Canyon, the operating problem, and the path to clarity.",
      "Solution summaries": "Briefing-ready summaries of Canyon Systems, Canyon Edge, and Canyon Grid.",
      "Brand assets": "Organized materials for consistent communication and launch use.",
      "Information shared through forms": "Use submitted information to respond, prepare, and support the conversation.",
      "Communication preferences": "Respect chosen channels and keep outreach focused on the request.",
      "Responsible data handling": "Treat shared information with purpose, care, and clear access practices.",
      "Website access": "Use the Canyon website to learn, compare, and connect with the team.",
      "Content usage": "Reference Canyon content with respect for the brand and source.",
      "Contact pathways": "Use the contact experience to begin a focused business conversation.",
      "Essential site function": "Support core website performance, navigation, and visitor experience.",
      "Performance insight": "Understand site quality so the experience stays fast and useful.",
      "Preference control": "Keep visitor choices clear and simple."
    })[item] ?? "Built around business reality, active systems, and confident leadership decisions.";

  return (
    <section className="section compact" id={id}>
      <div className="container section-head">
        <p className="section-label reveal">{label}</p>
        <h2 className="reveal">{title}</h2>
      </div>
      <div className="container page-card-grid">
        {items.map((item, index) => (
          <article className="card feature-card reveal" key={item}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
            <p className="body-copy">{copyFor(item)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
