/**
 * Constants and data for Arrowsphere Holdings Limited website
 */

import type {
  SiteConfig,
  NavItem,
  TeamMember,
  PortfolioItem,
  CompanyInfo,
  SocialLinks,
  ContactInfo,
  TimelineItem,
  ThesisPillar,
} from "./types";

export const SITE_CONFIG: SiteConfig = {
  name: "Arrowsphere Holdings Limited",
  tagline: "Stewardship Capital for the AI-Born Era",
  description:
    "A private family office backing AI-Born founders who are redesigning ownership for collective prosperity.",
  url: "https://arrowsphere.com",
  logo: "/logo.svg",
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Thesis",
    href: "/thesis",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Leadership",
    href: "/leadership",
  },
  {
    label: "Foundation",
    href: "/foundation",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "mehran",
    name: "Mehran Granfar",
    role: "Founding Partner & Chief Investment Officer",
    bio: "Thought leader on the AI-Born paradigm and stewardship capital. Mehran architects Arrowsphere's investment thesis around backing founders who are redesigning ownership models for the collective prosperity era. Author of 'AI-Born: The Lineage Break' and builder of tokenized AI-managed fund infrastructure at Adaptic Holdings.",
    image: "/team/mehran.jpg",
    badges: [
      { text: "AI-Born Thought Leader", variant: "primary" },
      { text: "Stewardship Capital", variant: "accent" },
      { text: "Author & Builder", variant: "secondary" },
    ],
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/mehrangranfar" },
      { platform: "twitter", url: "https://twitter.com/mehrangranfar" },
      { platform: "github", url: "https://github.com/mehranhydary" },
    ],
    expertise: [
      "AI-Born Paradigm",
      "Stewardship Capital",
      "Tokenized Finance",
      "Collective Ownership Models",
      "Strategic Thought Leadership",
    ],
  },
  {
    id: "bronwyn",
    name: "Bronwyn Leong",
    role: "Founding Partner & Chief Operating Officer",
    bio: "Steward of operational excellence and systems design for collective prosperity. Bronwyn translates Arrowsphere's thesis into scalable infrastructure, ensuring portfolio companies build with stewardship principles at their core. Champions the Foundation for Collective Prosperity's mission to democratize wealth creation in the AI era.",
    image: "/team/bronwyn.jpg",
    badges: [
      { text: "Systems Architect", variant: "primary" },
      { text: "Foundation Steward", variant: "success" },
      { text: "Collective Prosperity", variant: "secondary" },
    ],
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com/in/bronwynleong" },
      { platform: "email", url: "mailto:bronwyn@arrowsphere.com" },
    ],
    expertise: [
      "Operational Systems Design",
      "Stewardship Infrastructure",
      "Foundation Leadership",
      "Collective Governance",
      "Strategic Execution",
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "adaptic-holdings",
    title: "Adaptic Holdings",
    description:
      "Pioneering AI-managed, tokenized fund infrastructure that democratizes access to sophisticated investment strategies. Adaptic exemplifies stewardship capital by enabling collective ownership and transparent, AI-driven governance of financial assets.",
    category: "Stewardship Capital",
    badges: [
      { text: "AI-Managed Funds", variant: "primary" },
      { text: "Tokenized Infrastructure", variant: "accent" },
      { text: "Collective Ownership", variant: "secondary" },
    ],
    link: "https://adaptic.ai",
    icon: "/portfolio/adaptic-icon.svg",
    status: "active",
    features: [
      "AI-driven investment strategies",
      "Tokenized fund management",
      "Collective governance model",
      "Transparent performance tracking",
      "Democratized wealth creation",
    ],
  },
  {
    id: "future-thesis-lab",
    title: "Future Thesis Lab",
    description:
      "Research and prototyping arm exploring the AI-Born paradigm shift. Future Thesis Lab develops frameworks, tools, and insights for founders navigating the lineage break from traditional ownership to collective prosperity models.",
    category: "Research & Innovation",
    badges: [
      { text: "AI-Born Research", variant: "primary" },
      { text: "Paradigm Exploration", variant: "success" },
      { text: "Founder Tools", variant: "secondary" },
    ],
    link: "https://futurethesislab.com",
    icon: "/portfolio/ftl-icon.svg",
    status: "active",
    features: [
      "AI-Born paradigm research",
      "Stewardship frameworks",
      "Prototype development",
      "Founder education programs",
      "Thought leadership publishing",
    ],
  },
  {
    id: "ai-born-book",
    title: "AI-Born: The Lineage Break",
    description:
      "Seminal book by Mehran Granfar examining the generational shift from extraction to stewardship, and how AI-Born founders are redesigning ownership for collective prosperity. A foundational text for understanding the new paradigm.",
    category: "Thought Leadership",
    badges: [
      { text: "Book", variant: "primary" },
      { text: "AI-Born Manifesto", variant: "accent" },
      { text: "Foundational Text", variant: "secondary" },
    ],
    link: "https://ai-born.com",
    icon: "/portfolio/aiborn-icon.svg",
    status: "active",
    features: [
      "The Lineage Break framework",
      "Stewardship capital principles",
      "Collective ownership models",
      "AI-Born founder profiles",
      "Future of prosperity thesis",
    ],
  },
  {
    id: "foundation",
    title: "Foundation for Collective Prosperity",
    description:
      "Philanthropic initiative dedicated to democratizing wealth creation in the AI era. The Foundation supports research, education, and infrastructure that enables collective ownership models and stewardship-driven economic systems.",
    category: "Foundation",
    badges: [
      { text: "Philanthropic Arm", variant: "primary" },
      { text: "Collective Prosperity", variant: "success" },
      { text: "Public Good", variant: "secondary" },
    ],
    link: "https://collectiveprosperity.org",
    icon: "/portfolio/foundation-icon.svg",
    status: "active",
    features: [
      "Research grants",
      "Education programs",
      "Open-source tooling",
      "Community building",
      "Policy advocacy",
    ],
  },
];

export const THESIS_PILLARS: ThesisPillar[] = [
  {
    id: "lineage-break",
    title: "The Lineage Break",
    description:
      "We are witnessing a generational shift from extraction to stewardship. AI-Born founders are breaking from legacy models of ownership, choosing collective prosperity over concentrated wealth. This lineage break represents the most significant paradigm shift in capital allocation since the industrial revolution.",
    icon: "/icons/lineage-break.svg",
  },
  {
    id: "fork-in-the-road",
    title: "The Fork in the Road",
    description:
      "Every founder today faces a choice: follow the well-worn path of venture capital extraction, or forge a new road toward stewardship and collective ownership. We back those who choose the harder path—building AI-native companies designed for shared prosperity, not just shareholder returns.",
    icon: "/icons/fork-in-road.svg",
  },
  {
    id: "stewardship-as-strategy",
    title: "Stewardship as Strategy",
    description:
      "Stewardship is not philanthropy—it is strategic capital allocation for the AI era. By designing ownership models that align incentives across stakeholders, AI-Born companies unlock sustainable competitive advantages. We invest in founders who understand that stewardship is the path to building enduring, valuable enterprises.",
    icon: "/icons/stewardship.svg",
  },
];

export const COMPANY_INFO: CompanyInfo = {
  legalName: "Arrowsphere Holdings Limited",
  foundingYear: 2024,
  jurisdiction: "Dubai International Financial Centre (DIFC)",
  type: "Private Family Office",
  headquarters: "Dubai International Financial Centre, United Arab Emirates",
};

export const SOCIAL_LINKS: SocialLinks = {
  twitter: "https://twitter.com/arrowsphere",
  linkedin: "https://linkedin.com/company/arrowsphere",
  github: "https://github.com/arrowsphere",
  email: "mailto:hello@arrowsphere.com",
};

export const CONTACT_INFO: ContactInfo[] = [
  {
    type: "email",
    value: "hello@arrowsphere.com",
    icon: "mail",
    label: "Email Us",
  },
  {
    type: "email",
    value: "stewardship@arrowsphere.com",
    icon: "briefcase",
    label: "Stewardship Capital Inquiries",
  },
  {
    type: "address",
    value: "Dubai International Financial Centre, United Arab Emirates",
    icon: "map-pin",
    label: "Headquarters",
  },
  {
    type: "website",
    value: "https://arrowsphere.com",
    icon: "globe",
    label: "Website",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: 2024,
    title: "Family Office Established",
    description:
      "Arrowsphere Holdings Limited founded in DIFC as a private family office with a mission to back AI-Born founders redesigning ownership for collective prosperity.",
    category: "milestone",
  },
  {
    year: 2024,
    title: "Adaptic Holdings Launch",
    description:
      "Launched Adaptic Holdings, pioneering AI-managed tokenized fund infrastructure that demonstrates stewardship capital principles through collective ownership models.",
    category: "launch",
  },
  {
    year: 2024,
    title: "Future Thesis Lab Established",
    description:
      "Created Future Thesis Lab to research the AI-Born paradigm shift and develop frameworks for founders navigating the lineage break from extraction to stewardship.",
    category: "launch",
  },
  {
    year: 2024,
    title: "Foundation for Collective Prosperity",
    description:
      "Established philanthropic foundation dedicated to democratizing wealth creation in the AI era through research, education, and open-source infrastructure.",
    category: "launch",
  },
  {
    year: 2025,
    title: "AI-Born: The Lineage Break Published",
    description:
      "Mehran Granfar's seminal book examining the generational shift from extraction to stewardship and how AI-Born founders are redesigning ownership.",
    category: "milestone",
  },
];

// Feature flags and configuration
export const FEATURES = {
  showPortfolio: true,
  showTeam: true,
  showTimeline: true,
  showContact: true,
  showNewsletter: false,
  showBlog: false,
} as const;

// Theme configuration
export const THEME = {
  colors: {
    primary: "#0066FF",
    secondary: "#6366F1",
    accent: "#8B5CF6",
    success: "#10B981",
    warning: "#F59E0B",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;
