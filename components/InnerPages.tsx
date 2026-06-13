import Link from "next/link";
import { approach, audiences, differentiators, solutionCapabilities, solutions } from "@/lib/content";
import "./InnerPages.css";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  children?: React.ReactNode;
};

export function SimplePage({
  eyebrow,
  title,
  copy,
  cta = "Book a Demo",
  ctaHref = "/contact#book-demo",
  secondaryCta = "Explore Solutions",
  secondaryHref = "/solutions",
  children
}: SimplePageProps) {
  return (
    <>
      <section className="inner-hero">
        <div className="inner-hero-glow" aria-hidden="true" />
        <div className="container inner-hero-grid">
          <div className="inner-hero-copy">
            <p className="section-label reveal">{eyebrow}</p>
            <h1 className="reveal">{title}</h1>
            <p className="lead reveal">{copy}</p>
            <div className="button-row reveal">
              <Link className="btn primary" href={ctaHref}>
                {cta}
              </Link>
              <Link className="btn secondary" href={secondaryHref}>
                {secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}

export function AboutContent() {
  return (
    <>
      <section className="section page-band" id="company-overview">
        <div className="container split-panel reveal">
          <div>
            <p className="section-label">Company Overview</p>
            <h2>Clarity built around how the business actually works.</h2>
          </div>
          <div className="stack-copy">
            <p>
              Canyon Data Labs works with leadership teams to connect information, context, and execution into one
              confident operating view.
            </p>
            <p>
              Every engagement starts with the business priority, then shapes systems, workflows, and decision support
              around the outcomes leaders want to move.
            </p>
          </div>
        </div>
      </section>

      <section className="section compact" id="vision-mission">
        <div className="container two-cards">
          <article className="card feature-card reveal">
            <p className="section-label">Mission</p>
            <h3>Empower organizations with clarity, visibility, and confidence.</h3>
          </article>
          <article className="card feature-card reveal">
            <p className="section-label">Vision</p>
            <h3>Be the trusted partner for organizations navigating complexity.</h3>
          </article>
        </div>
      </section>

      <ContentGrid
        id="what-we-do"
        label="What We Do"
        title="We transform information into business advantage."
        items={["Enterprise visibility", "Decision support", "Execution enablement"]}
      />
      <ContentGrid id="our-approach" label="Our Approach" title="Connect. Contextualise. Activate." items={approach.map((item) => item.title)} />
      <ContentGrid id="why-canyon" label="Why Canyon Data Labs" title="Business strategy guides technology with clarity and purpose." items={differentiators} />
      <ContentGrid id="who-we-help" label="Who We Help" title="For organizations ready to operate with greater clarity." items={audiences} />
    </>
  );
}

export function SolutionsContent() {
  return (
    <>
      <section className="section solution-capabilities-section">
        <div className="container solution-capabilities">
          <div className="solution-capabilities-head reveal">
            <p className="section-label">What Canyon Builds</p>
            <h2>Enterprise Intelligence, Ready For Action.</h2>
            <p className="lead">
              Canyon creates the command layer that connects business signals, decision context, and accountable
              execution.
            </p>
          </div>
          <div className="capability-grid" aria-label="Canyon solution capabilities">
            {solutionCapabilities.map((capability, index) => (
              <article className={`capability-card capability-${capability.visual} reveal`} key={capability.title}>
                <div className="capability-visual" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="capability-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container page-card-grid">
          {solutions.map((solution) => (
            <article className="card reveal" key={solution.name}>
              <p className="section-label">{solution.line}</p>
              <h3>{solution.name}</h3>
              <p className="body-copy">{solution.intro}</p>
              <ul className="clean-list">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Link className="text-link" href={solution.href}>
                Explore {solution.name} <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function SolutionDetail({ name }: { name: string }) {
  const solution = solutions.find((item) => item.name === name) ?? solutions[0];

  return (
    <section className="section solution-detail-section">
      <div className="container solution-detail-panel reveal">
        <div>
          <p className="section-label">{solution.line}</p>
          <h2>{solution.name} creates a stronger operating foundation.</h2>
          <p>{solution.intro}</p>
          <Link className="btn primary" href="/contact#book-demo">
            Discuss {solution.name}
          </Link>
        </div>
        <div className="outcome-stack">
          {solution.outcomes.map((outcome, index) => (
            <article key={outcome}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{outcome}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
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
  return (
    <section className="section page-band">
      <div className="container split-panel reveal">
        <div>
          <p className="section-label">Careers At Canyon</p>
          <h2>Work across business, systems, data, and execution.</h2>
        </div>
        <div className="outcome-stack compact-stack">
          {["Business-first thinking", "High ownership", "Calm execution"].map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactContent() {
  return (
    <section className="section compact" id="book-demo">
      <div className="container contact-panel reveal">
        <div>
          <p className="section-label">Book a Demo</p>
          <h2>Start with the business priority.</h2>
          <p className="lead">Share where clearer information, stronger context, and faster execution can create momentum.</p>
        </div>
        <form className="contact-form">
          <label>
            Name
            <input name="name" placeholder="Your name" suppressHydrationWarning />
          </label>
          <label>
            Work email
            <input name="email" type="email" placeholder="you@company.com" suppressHydrationWarning />
          </label>
          <label>
            What should we help clarify?
            <textarea name="message" placeholder="Share a few lines about your systems, decisions, or workflows." suppressHydrationWarning />
          </label>
          <button className="btn primary" type="submit">
            Send Request
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
        <Link className="btn primary" href="/solutions">
          Explore Solutions
        </Link>
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
