export interface PortfolioEntry {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  filePath: string;
  fileType: string;
  thumbnail: string;
  tags: string[];
  accent: string; // tailwind color class for card accent
}

export const landingPages: PortfolioEntry[] = [
  {
    id: "1",
    slug: "crowdstrike-falcon-xiot",
    title: "CrowdStrike Falcon for XIoT",
    category: "Landing Page",
    description: "Product solution page for CrowdStrike's extended IoT security platform, translating complex OT/IoT security concepts into compelling product narrative.",
    filePath: "/portfolio-pages/crowdstrike-falcon-xiot.html",
    fileType: "html",
    thumbnail: "/portfolio-thumbnails/crowdstrike-falcon-xiot.png",
    tags: ["Cybersecurity", "Product Launch", "OT/IoT"],
    accent: "from-primary/30 to-accent/20",
  },
  {
    id: "2",
    slug: "mitratech-hq-customer-adoption",
    title: "Mitratech HQ Platform Adoption",
    category: "Landing Page",
    description: "Customer adoption landing page designed to drive platform engagement and feature discovery for existing Mitratech HQ users.",
    filePath: "/portfolio-pages/mitratech-hq-customer-adoption.html",
    fileType: "html",
    thumbnail: "/portfolio-thumbnails/mitratech-hq-customer-adoption.png",
    tags: ["Customer Adoption", "SaaS", "HR Tech"],
    accent: "from-accent/30 to-primary/20",
  },
  {
    id: "3",
    slug: "mitratech-hr-tech-event",
    title: "Mitratech HR Tech Event Registration",
    category: "Landing Page",
    description: "Event registration page for HR Tech conference, combining event marketing with product positioning and lead capture strategy.",
    filePath: "/portfolio-pages/mitratech-hr-tech-event.html",
    fileType: "html",
    thumbnail: "/portfolio-thumbnails/mitratech-hr-tech-event.png",
    tags: ["Event Marketing", "Lead Gen", "HR Tech"],
    accent: "from-primary/20 to-accent/30",
  },
  {
    id: "4",
    slug: "mitratech-perform-ui-refresh",
    title: "Mitratech Perform UI Refresh",
    category: "Landing Page",
    description: "Customer-facing landing page announcing a major UI refresh, positioning the update as a strategic product evolution.",
    filePath: "/portfolio-pages/mitratech-perform-ui-refresh.html",
    fileType: "html",
    thumbnail: "/portfolio-thumbnails/mitratech-perform-ui-refresh.png",
    tags: ["Product Update", "Customer Comms", "SaaS"],
    accent: "from-accent/20 to-primary/30",
  },
];

export interface ArtifactCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const artifactCategories: ArtifactCategory[] = [
  { slug: "landing-pages", title: "Landing Pages", description: "Product positioning, conversion strategy, and technical storytelling", icon: "Layout" },
  { slug: "decks", title: "Decks", description: "Product pitch decks, solution overviews, and executive narratives", icon: "Presentation" },
  { slug: "messaging", title: "Messaging & Positioning", description: "Messaging frameworks, positioning statements, and value pillar development", icon: "MessageSquare" },
  { slug: "technical-marketing", title: "Technical Marketing", description: "Technical whitepapers, datasheets, and architecture explanations", icon: "FileText" },
  { slug: "sales-enablement", title: "Sales Enablement", description: "Discovery guides, demo narratives, and objection handling", icon: "Target" },
];
