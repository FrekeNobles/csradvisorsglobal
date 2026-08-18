export type Service = {
  title: string;
  short: string;
  details: string;
  icon: "strategy" | "community" | "rap" | "research" | "impact" | "tax" | "business" | "funding" | "nonprofit" | "finance";
};

export type Practice = {
  slug: "africa" | "usa";
  legalName: string;
  label: string;
  audience: string;
  description: string;
  href: string;
  accent: string;
  services: Service[];
  industries: string[];
};

export const group = {
  name: "CSR Global",
  legalDescriptor: "A specialist advisory group",
  headline: "Two specialist practices. One trusted group.",
  description:
    "CSR Global brings together distinct professional practices so clients can work with the right team for the right challenge, without losing the strength of a shared group.",
};

export const practices: Practice[] = [
  {
    slug: "africa",
    legalName: "CSR Advisors Ltd",
    label: "Social Performance & Sustainability Advisory",
    audience: "For companies, public institutions, communities and development partners",
    description:
      "We help organizations understand people, engage communities, manage social performance and design development initiatives that create measurable, lasting value.",
    href: "/africa",
    accent: "teal",
    services: [
      {
        title: "CSR & Sustainability Advisory",
        short: "Turn corporate responsibility goals into practical programmes and clear implementation plans.",
        details:
          "We support organizations with CSR strategy, programme design, stakeholder priorities, implementation frameworks and reporting approaches that connect social investment to real community needs and organizational objectives.",
        icon: "strategy",
      },
      {
        title: "Community & Stakeholder Engagement",
        short: "Build structured, respectful engagement with communities and other stakeholders.",
        details:
          "We design and support engagement processes that capture stakeholder voices, manage expectations, document concerns and create stronger foundations for responsible project delivery.",
        icon: "community",
      },
      {
        title: "Resettlement Action Plans (RAP)",
        short: "Social and socio-economic support for projects involving land access and displacement risks.",
        details:
          "Our RAP work includes socio-economic data collection, stakeholder engagement, documentation and implementation support, with attention to affected people, livelihoods and project requirements.",
        icon: "rap",
      },
      {
        title: "Socio-economic Research & Surveys",
        short: "Generate credible field data for planning, assessment and decision-making.",
        details:
          "We conduct quantitative and qualitative field research, community surveys, needs assessments and stakeholder studies using structured methodologies and digital data collection where appropriate.",
        icon: "research",
      },
      {
        title: "Monitoring, Evaluation & Impact",
        short: "Measure whether programmes are reaching the people and outcomes they were designed for.",
        details:
          "We develop monitoring frameworks, collect field evidence, assess programme performance and translate findings into practical recommendations for stronger social investment.",
        icon: "impact",
      },
      {
        title: "Community Development Programmes",
        short: "Design development interventions around evidence, participation and sustainability.",
        details:
          "We support community development planning and implementation across areas such as livelihoods, education, health, infrastructure and capacity building, based on local priorities and programme objectives.",
        icon: "community",
      },
    ],
    industries: [
      "Oil, Gas & Energy",
      "Infrastructure & Construction",
      "Government & Public Institutions",
      "Development & Non-governmental Organizations",
      "Extractive Industries",
      "Host Communities",
    ],
  },
  {
    slug: "usa",
    legalName: "CSR Advisors LLC",
    label: "Business, Tax & Financial Advisory",
    audience: "For entrepreneurs, businesses, nonprofits and organizations operating in the United States",
    description:
      "We help clients establish, manage and strengthen their organizations through practical business, tax, accounting, funding and financial support.",
    href: "/usa",
    accent: "blue",
    services: [
      {
        title: "Tax & Accounting",
        short: "Organize financial records and support sound tax and accounting decisions.",
        details:
          "We provide practical tax and accounting support tailored to business and organizational needs, helping clients maintain financial clarity, compliance and better decision-making.",
        icon: "tax",
      },
      {
        title: "Payroll & Financial Administration",
        short: "Keep recurring financial administration organized and easier to manage.",
        details:
          "Support can include payroll processes, financial administration and related business support designed to reduce operational friction and help organizations stay focused on their core work.",
        icon: "finance",
      },
      {
        title: "Business Registration & Setup",
        short: "Move from idea to properly structured business with the right foundational steps.",
        details:
          "We assist entrepreneurs and organizations with business formation and setup processes, helping clients understand the administrative requirements involved in establishing an operating entity.",
        icon: "business",
      },
      {
        title: "Funding & Loan Support",
        short: "Prepare for funding conversations with stronger financial and business documentation.",
        details:
          "We help eligible clients organize business information, financial documentation and funding materials for loans and other financing opportunities.",
        icon: "funding",
      },
      {
        title: "Nonprofit Formation & Grant Writing",
        short: "Build a stronger foundation for mission-driven organizations and funding applications.",
        details:
          "We support nonprofit formation and grant development, including organizational positioning, proposal preparation and documentation aligned with the requirements of specific opportunities.",
        icon: "nonprofit",
      },
      {
        title: "Financial Advisory",
        short: "Make clearer financial decisions with practical, organization-focused guidance.",
        details:
          "Our advisory support helps clients understand financial information, assess options and build more disciplined approaches to budgeting, planning and financial management.",
        icon: "finance",
      },
    ],
    industries: [
      "Small & Medium Businesses",
      "Entrepreneurs & Startups",
      "Nonprofit Organizations",
      "Professional Services",
      "Community Organizations",
      "Growing Organizations",
    ],
  },
];

export const process = [
  ["01", "Understand", "We start with the context, people, goals and constraints behind the assignment."],
  ["02", "Design", "We translate what we learn into a practical approach, scope and delivery plan."],
  ["03", "Deliver", "Our specialists execute with clear communication, documentation and accountability."],
  ["04", "Improve", "We use evidence and feedback to strengthen outcomes and support the next decision."],
] as const;
