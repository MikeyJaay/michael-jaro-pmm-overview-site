export type BlogPost = {
  title: string;
  publication: string;
  description: string;
  date: string;
  url: string;
  category: string;
  thumbnail?: string;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Security and Risk Gaps Behind AI Hiring Automation",
    publication: "Mitratech",
    description:
      "Examines how unchecked AI hiring tools introduce legal exposure, bias risk, and data privacy vulnerabilities — and what enterprise HR teams must do to stay protected.",
    date: "2025",
    url: "https://mitratech.com/resource-hub/blog/the-hidden-risks-of-ai-in-hiring/",
    category: "Company Post",
    thumbnail: "/blog-thumbnails/ai-automation-mitratech.jpg",
  },
  {
    title: "How to be a Successful Technical Recruiter in a Competitive Market",
    publication: "Codility",
    description:
      "A practical breakdown of what separates high-performing technical recruiters from the rest — from understanding engineering roles to building a repeatable candidate pipeline.",
    date: "2022",
    url: "https://www.codility.com/blog/how-to-be-a-successful-technical-recruiter/",
    category: "Company Post",
    thumbnail: "/blog-thumbnails/tech-hiring.jpg",
  },
  {
    title: "Falcon for XIoT Datasheet",
    publication: "CrowdStrike",
    description:
      "Product datasheet for Falcon for XIoT, CrowdStrike's extended IoT security platform covering OT, ICS, and critical infrastructure environments.",
    date: "2024",
    url: "/blog-thumbnails/Falcon-for-XIoT-datasheet-full.pdf",
    category: "Company Post",
    thumbnail: "/blog-thumbnails/CrowdStrike-XIOT-Datasheet.png",
  },
  {
    title: "Job Hunting While Unemployed: How to Avoid Making It a Full-Time Job",
    publication: "Medium",
    description:
      "A structured guide to job searching while unemployed — how to set boundaries, protect your energy, and keep the process from taking over your life.",
    date: "2024",
    url: "https://medium.com/@MikeyJaay/job-hunting-while-unemployed-a-step-by-step-guide-to-success-6b71f952dc18",
    category: "Personal",
    thumbnail: "/blog-thumbnails/job-hunting.jpg",
  },
  {
    title: "The Last of Us Part II: Plagued by Emotional Attachment",
    publication: "Medium",
    description:
      "A personal essay exploring why The Last of Us Part II's most divisive story beats work — and how emotional investment shapes the way we experience narrative games.",
    date: "2020",
    url: "https://medium.com/@MikeyJaay/the-last-of-us-part-ii-plagued-by-emotional-attachment-e304f3230c32",
    category: "Personal",
    thumbnail: "/blog-thumbnails/last-of-us.jpg",
  },
  {
    title: "Apple's AI Call Screening: 2019 Late",
    publication: "Wix Blog",
    description:
      "A take on Apple's belated foray into AI call screening and what it reveals about how legacy tech giants approach features that challengers shipped years earlier.",
    date: "2024",
    url: "https://michaeljaroszynski.wixsite.com/pmm-blog/post/apple-s-ai-call-screening-so-2019-late",
    category: "SaaS Thought Leadership",
    thumbnail: "/blog-thumbnails/ai-call-screening.jpg",
  },
];

export const writingCategories = [
  "All",
  "Company Post",
  "SaaS Thought Leadership",
  "Personal",
] as const;

export type WritingCategory = (typeof writingCategories)[number];
