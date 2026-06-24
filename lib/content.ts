export const navItems = [
  {
    label: "About Us",
    href: "/about-us",
    description:
      "Learn how Canyon Data Labs creates clarity, visibility, and confidence across systems and decisions.",
    children: [
      ["Company Overview", "/about-us#company-overview"],
      ["Our Approach", "/about-us#our-approach"],
      ["Vision & Mission", "/about-us#vision-mission"],
      ["Why Canyon Data Labs", "/about-us#why-canyon"],
      ["Who We Help", "/about-us#who-we-help"]
    ]
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      ["Canyon Systems", "/solutions/canyon-systems", "Bring information together."],
      ["Canyon Grid", "/solutions/canyon-grid", "Give data business meaning."],
      ["Canyon Edge", "/solutions/canyon-edge", "Create business understanding."]
    ]
  },
  { label: "Careers", href: "/careers" },
  { label: "Get in Touch", href: "/contact" }
];

export const solutions = [
  {
    name: "Canyon Systems",
    href: "/solutions/canyon-systems",
    line: "Bring information together.",
    intro:
      "For organizations ready to unify business information, strengthen reporting confidence, and create enterprise-wide visibility.",
    outcomes: ["One trusted view of the business", "Improved information quality", "More efficient reporting flow"]
  },
  {
    name: "Canyon Grid",
    href: "/solutions/canyon-grid",
    line: "Give data business meaning.",
    intro:
      "For organizations ready to connect every source, validate business rules, reconcile signals, and create a governed data layer.",
    outcomes: ["Governed source connections", "Validated business rules", "Reliable data context"]
  },
  {
    name: "Canyon Edge",
    href: "/solutions/canyon-edge",
    line: "Create business understanding.",
    intro:
      "For organizations ready to turn governed information into role intelligence, executive visibility, nudges, and decision support.",
    outcomes: ["Role-based intelligence", "Executive decision views", "Actionable nudges and alerts"]
  }
];

export const solutionArchitecture = [
  {
    name: "Canyon Systems",
    href: "/solutions/canyon-systems",
    step: "01",
    verb: "Capture",
    title: "Build and capture operational data.",
    copy:
      "Field force, CRM, distribution, and operations systems capture every visit, order, interaction, and activity in a structure leadership can trust.",
    proof: ["SFA and CRM", "Field execution", "Customer visibility"]
  },
  {
    name: "Canyon Grid",
    href: "/solutions/canyon-grid",
    step: "02",
    verb: "Contextualise",
    title: "Connect every source into one governed layer.",
    copy:
      "ERP, CRM, finance, HRMS, supply chain, and reporting data are validated, reconciled, and shaped around your business rules.",
    proof: ["Rules engine", "Reconciliation", "Exception routing"]
  },
  {
    name: "Canyon Edge",
    href: "/solutions/canyon-edge",
    step: "03",
    verb: "Decide / Act",
    title: "Turn governed data into decisions.",
    copy:
      "Role intelligence, executive views, nudges, alerts, and plain-language answers help the right person move at the right moment.",
    proof: ["Role intelligence", "Ask your data", "Executive view"]
  }
];

export const solutionDetails = {
  "Canyon Systems": {
    layer: "Capture Layer",
    headline: "Build the systems that make business activity visible.",
    copy:
      "Canyon Systems creates the operational applications that capture work as it happens: field visits, customer interactions, orders, follow-ups, and commercial activity.",
    visual: "systems",
    capabilities: [
      {
        title: "Sales Force Automation",
        copy: "Beat planning, route visibility, order capture, and field productivity in one daily operating system."
      },
      {
        title: "Customer Relationship Management",
        copy: "A live customer view across interactions, opportunities, follow-ups, and account health."
      },
      {
        title: "Field Data Capture",
        copy: "Every visit, outlet interaction, and activity becomes structured data from the moment it happens."
      },
      {
        title: "Operational Readiness",
        copy: "Systems are shaped around Indian field conditions, business rhythms, and the teams using them every day."
      }
    ],
    flowCopy:
      "Canyon Systems is the first layer of the platform: it captures operational truth so Grid can govern it and Edge can turn it into decisions."
  },
  "Canyon Grid": {
    layer: "Context Layer",
    headline: "Give raw data the business meaning it needs.",
    copy:
      "Canyon Grid sits between your source systems and leadership intelligence, connecting, validating, reconciling, and governing data around your operating rules.",
    visual: "grid",
    capabilities: [
      {
        title: "Business Rules Engine",
        copy: "Credit limits, scheme rules, reorder thresholds, and approval logic encoded into the data layer."
      },
      {
        title: "Reconciliation Engine",
        copy: "ERP, CRM, finance, inventory, and sales signals matched across systems before planning begins."
      },
      {
        title: "Exceptions and Alerts",
        copy: "Flagged issues routed with context, severity, ownership, and a clear next action."
      },
      {
        title: "Automation Layer",
        copy: "Recurring approvals, checks, alerts, and exception routing run continuously across the business."
      }
    ],
    flowCopy:
      "Canyon Grid is the middle layer: it turns captured data into governed context that Canyon Edge can use with confidence."
  },
  "Canyon Edge": {
    layer: "Intelligence Layer",
    headline: "Turn governed data into decisions leaders can act on.",
    copy:
      "Canyon Edge delivers role-based intelligence, executive views, proactive nudges, and plain-language answers from the data your organisation already runs on.",
    visual: "edge",
    capabilities: [
      {
        title: "Role Intelligence",
        copy: "The Sales Head, finance team, supply chain team, and field force each see the intelligence that matters to their work."
      },
      {
        title: "Nudges and Alerts",
        copy: "Business signals reach the owner with context and suggested action before the moment passes."
      },
      {
        title: "Ask Your Data",
        copy: "Teams can ask plain-language questions and receive answers from governed enterprise information."
      },
      {
        title: "Executive View",
        copy: "Leadership sees sales, supply chain, finance, procurement, and field movement in one current picture."
      }
    ],
    flowCopy:
      "Canyon Edge is the action layer: it turns governed context into leadership intelligence, timely decisions, and accountable movement."
  }
};

export const solutionCapabilities = [
  {
    title: "Unified Command View",
    copy: "One leadership view across systems, teams, and business priorities.",
    visual: "dashboard"
  },
  {
    title: "Decision Analytics",
    copy: "Clear signals, trends, and context for faster leadership action.",
    visual: "curve"
  },
  {
    title: "Accountability Layer",
    copy: "Owners, alerts, workflows, and follow-through tied to outcomes.",
    visual: "commands"
  },
  {
    title: "Workflow Intelligence",
    copy: "Business events become structured movement across teams.",
    visual: "fingerprint"
  },
  {
    title: "Governed Visibility",
    copy: "Reliable reporting, controlled access, and trusted information flow.",
    visual: "search"
  }
];

export const clarityCards = [
  {
    title: "Connected information",
    copy: "Data, reports, and teams align around one trusted operating view."
  },
  {
    title: "Clear decision context",
    copy: "Leaders see what happened, why it matters, and where to focus next."
  },
  {
    title: "Confident execution",
    copy: "Insights move into timely action, ownership, and measurable accountability."
  }
];

export const approach = [
  {
    title: "Connect",
    copy: "We connect systems, functions, and processes to create a unified view of the enterprise."
  },
  {
    title: "Contextualise",
    copy: "We translate information into business meaning, helping leaders understand what is happening, why it matters, and where attention creates progress."
  },
  {
    title: "Activate",
    copy: "We ensure insights, workflows, alerts, and accountability reach the people responsible for outcomes."
  }
];

export const differentiators = [
  "Business-first thinking",
  "Tailored to your reality",
  "One partner. Every layer.",
  "From information to impact",
  "Enterprise-wide perspective",
  "Built to evolve"
];

export const advantagePillars = [
  {
    title: "Business alignment",
    outcome:
      "Leadership priorities shape the operating model from day one, with technology following the way the business works.",
    points: ["Business-first thinking", "Tailored operating model"]
  },
  {
    title: "Execution ownership",
    outcome:
      "Insights move into owners, workflows, and measurable follow-through, keeping important work in motion beyond the dashboard.",
    points: ["One partner", "Information to impact"]
  },
  {
    title: "Enterprise scale",
    outcome:
      "The model grows across functions, businesses, and geographies while preserving the clarity that made it work.",
    points: ["Enterprise-wide view", "Built to evolve"]
  }
];

export const audiences = [
  "Leadership teams seeking a unified business view",
  "Operations teams improving execution and response times",
  "Finance teams strengthening reporting confidence",
  "Sales and commercial teams improving performance visibility",
  "Supply chain teams connecting planning, inventory, and operations",
  "Growing businesses preparing for scale"
];

export const audienceGroups = [
  {
    title: "Leadership View",
    outcome: "Shared visibility for decisions, reporting, and direction.",
    teams: ["Leadership teams", "Finance teams"]
  },
  {
    title: "Execution Rhythm",
    outcome: "Faster movement across response, planning, and ownership.",
    teams: ["Operations teams", "Supply chain teams"]
  },
  {
    title: "Growth Readiness",
    outcome: "Clear performance visibility for commercial momentum and scale.",
    teams: ["Sales and commercial teams", "Growing businesses"]
  }
];

export const footerTags = [
  "Enterprise Data",
  "Intelligence",
  "Execution",
  "Accessibility",
  "Performance"
];

export const footerTagGroups = [
  {
    title: "Focus",
    items: ["Enterprise Data", "Intelligence", "Execution", "Accessibility", "Performance"]
  }
];
