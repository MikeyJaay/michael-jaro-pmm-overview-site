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

export interface ArtifactCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
}
