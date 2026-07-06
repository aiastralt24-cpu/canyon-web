"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import styles from "./CanyonEdgePage.module.css";

type EdgeModule = {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  copy: string;
  points: Array<{ title: string; copy: string }>;
};

const edgeModules: EdgeModule[] = [
  {
    id: "role-intelligence",
    label: "Role Intelligence",
    eyebrow: "Role Intelligence",
    title: "The Right Intelligence For Every Role.",
    copy:
      "Canyon Edge shapes live intelligence by role, function, and daily rhythm so each team receives the view it can act on.",
    points: [
      {
        title: "Sales And Commercial",
        copy:
          "Distributor health, territory performance, and secondary sales by leader, manager, and rep.",
      },
      {
        title: "Supply Chain",
        copy:
          "Demand signals, depot fill rates, stockout risk, and delivery performance before planning reviews.",
      },
      {
        title: "Finance And Procurement",
        copy:
          "Working capital, vendor spend, procurement variance, and payment-cycle clarity in one view.",
      },
      {
        title: "Field Teams",
        copy:
          "Daily priorities by outlet, distributor, and order so teams know the next best move.",
      },
    ],
  },
  {
    id: "nudges-alerts",
    label: "Nudges And Alerts",
    eyebrow: "Nudges And Alerts",
    title: "The Right Signal. The Right Person.",
    copy:
      "Canyon Edge watches governed data continuously and routes timely signals with context, severity, and suggested next moves.",
    points: [
      {
        title: "Active Nudges",
        copy:
          "Live signals across the organisation, prioritised and ready to act on.",
      },
      {
        title: "Proactive Alerts",
        copy: "Patterns surface early, with ownership and context attached.",
      },
      {
        title: "Opportunity Signals",
        copy:
          "Upsell moments, relationship opportunities, and timing signals reach the right team.",
      },
    ],
  },
  {
    id: "ask-your-data",
    label: "Ask Your Data",
    eyebrow: "Ask Your Data",
    title: "Ask Anything. Get A Governed Answer.",
    copy:
      "Plain-language business questions return governed answers in seconds, grounded in the same data leaders already trust.",
    points: [
      {
        title: "Sales Questions",
        copy:
          "Territory performance, distributor trends, and secondary sales answered in seconds.",
      },
      {
        title: "Supply Chain Questions",
        copy:
          "Inventory levels, fulfilment rates, and stockout risk from any depot or SKU.",
      },
      {
        title: "Finance Questions",
        copy:
          "Working capital, procurement spend, and payment cycles with governed context.",
      },
    ],
  },
  {
    id: "executive-view",
    label: "Executive View",
    eyebrow: "Executive View",
    title: "The Complete Picture. Always Current.",
    copy:
      "A live operating picture across sales, supply chain, finance, procurement, and field activity for right-now leadership decisions.",
    points: [
      {
        title: "Business Overview",
        copy: "Every key metric across every function in one current view.",
      },
      {
        title: "Live Business Signals",
        copy:
          "Growth, risk, momentum, and action priorities surfaced for leadership.",
      },
    ],
  },
];

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function CanyonEdgePageContent() {
  const [activeModuleId, setActiveModuleId] = useState(edgeModules[0].id);
  const activeIndex = edgeModules.findIndex((module) => module.id === activeModuleId);
  const activeModule = edgeModules[activeIndex] ?? edgeModules[0];

  function handleTabKey(event: KeyboardEvent<HTMLDivElement>) {
    const keyMap = ["ArrowLeft", "ArrowRight", "Home", "End"];
    if (!keyMap.includes(event.key)) return;

    event.preventDefault();

    let nextIndex = activeIndex;
    if (event.key === "ArrowRight") nextIndex = (activeIndex + 1) % edgeModules.length;
    if (event.key === "ArrowLeft")
      nextIndex = (activeIndex - 1 + edgeModules.length) % edgeModules.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = edgeModules.length - 1;

    setActiveModuleId(edgeModules[nextIndex].id);
    requestAnimationFrame(() => {
      document.getElementById(`edge-tab-${edgeModules[nextIndex].id}`)?.focus();
    });
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Canyon Edge</p>
          <h1>
            Your Data.
            <span>Answering Back.</span>
          </h1>
          <p className={styles.lede}>
            The intelligence layer where governed data becomes decisions. Live role views,
            timely nudges, and plain-language answers help teams move from signal to action.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/contact#book-demo">
              Contact Us
            </Link>
          </div>
        </div>

        <EdgeHeroPanel />
      </section>

      <section className={styles.modules} id="edge-modules" aria-labelledby="edge-modules-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Intelligence Modules</p>
          <h2 id="edge-modules-title">Live Intelligence For Every Operating Layer.</h2>
        </div>

        <div
          className={styles.moduleTabs}
          role="tablist"
          aria-label="Canyon Edge modules"
          onKeyDown={handleTabKey}
        >
          {edgeModules.map((module) => (
            <button
              aria-controls={`edge-panel-${module.id}`}
              aria-selected={activeModule.id === module.id}
              className={classNames(
                styles.moduleTab,
                activeModule.id === module.id && styles.moduleTabActive,
              )}
              id={`edge-tab-${module.id}`}
              key={module.id}
              onClick={() => setActiveModuleId(module.id)}
              role="tab"
              tabIndex={activeModule.id === module.id ? 0 : -1}
              type="button"
            >
              {module.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`edge-tab-${activeModule.id}`}
          className={styles.modulePanel}
          id={`edge-panel-${activeModule.id}`}
          role="tabpanel"
        >
          <ModuleCopy module={activeModule} />
          <ModuleVisual moduleId={activeModule.id} />
        </div>

        <div className={styles.mobileModules}>
          {edgeModules.map((module) => (
            <article className={styles.mobileModuleCard} key={module.id}>
              <ModuleCopy module={module} />
              <ModuleVisual moduleId={module.id} />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.platformFit} aria-labelledby="edge-platform-title">
        <div className={styles.platformIntro}>
          <p className={styles.eyebrow}>The Intelligence Layer</p>
          <h2 id="edge-platform-title">Where All The Data Makes Sense.</h2>
          <p>
            Canyon Edge sits at the top of the platform, turning Canyon Systems capture and
            Canyon Grid context into intelligence the organisation can act on.
          </p>
        </div>
        <div className={styles.platformFlow}>
          <PlatformCard
            badge="Canyon Systems"
            copy="Operational activity captured and structured at the source."
            title="Capture"
          />
          <span className={styles.flowArrow} aria-hidden="true">
            →
          </span>
          <PlatformCard
            badge="Canyon Grid"
            copy="Rules, reconciliation, and governance give every signal business meaning."
            title="Contextualise"
          />
          <span className={styles.flowArrow} aria-hidden="true">
            →
          </span>
          <PlatformCard
            active
            badge="Canyon Edge"
            copy="Live intelligence, nudges, and answers move decisions into action."
            title="Act"
          />
        </div>
      </section>
    </main>
  );
}

function ModuleCopy({ module }: { module: EdgeModule }) {
  return (
    <div className={styles.moduleCopy}>
      <p className={styles.blueEyebrow}>{module.eyebrow}</p>
      <h3>{module.title}</h3>
      <p>{module.copy}</p>
      <ul>
        {module.points.map((point) => (
          <li key={point.title}>
            <span />
            <div>
              <strong>{point.title}</strong>
              <p>{point.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EdgeHeroPanel() {
  return (
    <div className={styles.edgeWindow} aria-label="Canyon Edge intelligence preview">
      <div className={styles.windowBar}>
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <p>Canyon Edge - Intelligence Layer</p>
        <span className={styles.livePill}>Live</span>
      </div>
      <div className={styles.kpiGrid}>
        <KpiCard label="Secondary Sales" value="₹18.4Cr" tone="blue" />
        <KpiCard label="Delivery Rate" value="94.1%" tone="green" />
        <KpiCard label="Open Alerts" value="7" tone="amber" />
      </div>
      <div className={styles.chatRow}>
        <p className={styles.questionBubble}>
          Which territory had the highest secondary sales growth last month?
        </p>
      </div>
      <div className={styles.answerRow}>
        <span className={styles.answerIcon}>▥</span>
        <div className={styles.answerCard}>
          <strong>Rajkot Zone</strong>
          <p>18.4% growth vs prior month · 24 active distributors</p>
        </div>
      </div>
    </div>
  );
}

function ModuleVisual({ moduleId }: { moduleId: string }) {
  if (moduleId === "nudges-alerts") return <NudgeVisual />;
  if (moduleId === "ask-your-data") return <AskVisual />;
  if (moduleId === "executive-view") return <ExecutiveVisual />;
  return <RoleVisual />;
}

function RoleVisual() {
  return (
    <div className={styles.productWindow}>
      <div className={styles.windowBar}>
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <p>Canyon Edge - Sales Head View</p>
        <span className={styles.livePill}>Live</span>
      </div>
      <div className={styles.dashboardHead}>
        <div>
          <span>Secondary Sales MTD</span>
          <strong>₹18.4Cr</strong>
          <em>↑ 12.3% vs last month</em>
        </div>
        <div>
          <span>Active Distributors</span>
          <strong>5,214</strong>
          <em>↑ 98.2% vs target</em>
        </div>
      </div>
      <div className={styles.signalStack}>
        <SignalItem tone="green" title="Top Territory" value="Rajkot Zone is leading this month." />
        <SignalItem tone="red" title="Attention Required" value="Surat Zone stockout risk needs action today." />
        <SignalItem tone="blue" title="Target Tracking" value="Monthly target achievement is on track." />
      </div>
    </div>
  );
}

function NudgeVisual() {
  return (
    <div className={styles.productWindow}>
      <div className={styles.windowBar}>
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <p>Canyon Edge - Active Nudges</p>
        <span className={styles.livePill}>Watching</span>
      </div>
      <div className={styles.nudgeList}>
        <NudgeItem
          label="Critical"
          title="Stockout in 4 days - Surat depot, SKU #P-401"
          copy="Average procurement lead time is 9 days. Action recommended today."
          tone="red"
        />
        <NudgeItem
          label="High Priority"
          title="3 distributors inactive - 2nd consecutive week"
          copy="Relationship owner receives a follow-up priority before 2 PM."
          tone="amber"
        />
        <NudgeItem
          label="Opportunity"
          title="High-value outlet - order likely"
          copy="Today's beat can prioritise the account based on reorder cycle."
          tone="green"
        />
      </div>
    </div>
  );
}

function AskVisual() {
  return (
    <div className={styles.productWindow}>
      <div className={styles.windowBar}>
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <p>Canyon Edge - Ask Your Data</p>
        <span className={styles.livePill}>Ready</span>
      </div>
      <div className={styles.askThread}>
        <p className={styles.questionBubble}>
          Which territory had the highest secondary sales growth last month?
        </p>
        <div className={styles.answerCard}>
          <strong>Rajkot Zone</strong>
          <p>18.4% vs prior month. Kumar Traders contributed the largest uplift.</p>
          <div className={styles.miniBars}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <p className={styles.questionBubble}>
          Which distributors are driving that growth?
        </p>
        <div className={styles.answerCard}>
          <strong>Top contributors</strong>
          <p>Kumar Traders ↑34%, Patel Distributors ↑22%, Mehta Enterprises ↑19%.</p>
        </div>
      </div>
    </div>
  );
}

function ExecutiveVisual() {
  return (
    <div className={styles.productWindow}>
      <div className={styles.windowBar}>
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <span className={styles.windowDot} />
        <p>Canyon Edge - Executive View</p>
        <span className={styles.livePill}>Live</span>
      </div>
      <div className={styles.executiveGrid}>
        <KpiCard label="Secondary Sales" value="₹18.4Cr" tone="blue" />
        <KpiCard label="On-Time Fill Rate" value="94.1%" tone="amber" />
        <KpiCard label="Procurement Vs Budget" value="-3.2%" tone="green" />
        <KpiCard label="Open Exceptions" value="7" tone="red" />
      </div>
      <div className={styles.signalStack}>
        <SignalItem tone="green" title="Sales Momentum" value="Rajkot Zone leading." />
        <SignalItem tone="red" title="Action Needed" value="Surat depot stockout risk." />
        <SignalItem tone="blue" title="Procurement" value="Vendor variance ready for review." />
      </div>
    </div>
  );
}

function KpiCard({ label, tone, value }: { label: string; tone: string; value: string }) {
  return (
    <div className={styles.kpiCard}>
      <strong className={styles[tone]}>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SignalItem({ title, tone, value }: { title: string; tone: string; value: string }) {
  return (
    <div className={styles.signalItem}>
      <span className={classNames(styles.signalDot, styles[tone])} />
      <div>
        <strong>{title}</strong>
        <p>{value}</p>
      </div>
    </div>
  );
}

function NudgeItem({
  copy,
  label,
  title,
  tone,
}: {
  copy: string;
  label: string;
  title: string;
  tone: string;
}) {
  return (
    <div className={classNames(styles.nudgeItem, styles[`${tone}Border`])}>
      <span className={classNames(styles.nudgeLabel, styles[tone])}>{label}</span>
      <strong>{title}</strong>
      <p>{copy}</p>
    </div>
  );
}

function PlatformCard({
  active,
  badge,
  copy,
  title,
}: {
  active?: boolean;
  badge: string;
  copy: string;
  title: string;
}) {
  return (
    <article className={classNames(styles.platformCard, active && styles.platformCardActive)}>
      <span>{badge}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}
