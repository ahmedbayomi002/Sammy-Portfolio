/**
 * Content type definitions for Ahmed Samy's portfolio.
 * Designed with CMS-agnostic abstractions so local files or a remote headless CMS
 * (e.g., WordPress, Strapi, Sanity) can provide data adhering to the same contract.
 */

export interface ProfileContent {
  name: string;
  eyebrow: string;
  role: string;
  focusAreas: string[];
  tagline: string;
  secondaryTagline: string;
  mainHeroStatement: string;
  personalIntro: string;
  corePrinciple: string;
  profileImage: string;
  heroBio: string;
  aboutBio: string[];
  philosophyCards: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export interface AiInActionStep {
  step: string;
  title: string;
  description: string;
  flowStage: 'Problem' | 'AI' | 'Logic' | 'Automation' | 'Outcome';
  detail: string;
}

export interface AiUsageCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Cpu' | 'Workflow' | 'Database' | 'Zap' | 'BarChart3' | 'Users';
}

export interface CapabilityItem {
  id: string;
  title: string;
  iconName: 'Cpu' | 'Users' | 'Workflow' | 'BarChart3';
  description: string;
  skills: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
  detailPoints?: string[];
}

export interface WorkflowNode {
  step: string;
  isAi?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategories: string[];
  subtitle: string;
  status: string;
  challenge: string;
  solution: string;
  whatAiDoes: string;
  whatAutomationDoes: string;
  myRole: string[];
  workflow: Array<string | WorkflowNode>;
  technologies: string[];
  highlights: string[];
  problem?: string;
  capabilities?: string[];
  before?: string[];
  transformation?: string[];
  focus?: string[];
}

export interface ProjectsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  filterOptions: string[];
  projects: ProjectItem[];
}

export interface ExperienceStage {
  step: number;
  stageName: string;
  focus: string;
  highlights: string[];
}

export interface ExperienceContent {
  sectionTitle: string;
  sectionSubtitle: string;
  statusNotice: string;
  thematicStages: ExperienceStage[];
}

export interface SkillCategoryGroup {
  category: string;
  description?: string;
  skills: string[];
}

export interface SkillsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  categories: SkillCategoryGroup[];
}

export interface TechCategory {
  category: string;
  description: string;
  items: string[];
}

export interface ToolsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  disclaimer: string;
  categories: TechCategory[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer?: string;
  year?: string;
  category?: string;
}

export interface CertificationsContent {
  sectionTitle: string;
  sectionSubtitle: string;
  message: string;
  certifications: CertificationItem[];
}

export interface SocialLinks {
  email: {
    address: string;
    label: string;
    active: boolean;
  };
  linkedIn: {
    url: string;
    label: string;
    active: boolean;
  };
  whatsApp: {
    url: string;
    displayNumber: string;
    label: string;
    active: boolean;
  };
  cv: {
    downloadUrl: string;
    label: string;
    active: boolean;
  };
}

export interface SiteMetadata {
  siteName: string;
  name: string;
  title: string;
  description: string;
  tagline: string;
  location: string;
  domain: string;
  email: string;
  navLinks: Array<{
    label: string;
    href: string;
  }>;
  cvUrl?: string;
  footerFocus: string;
  copyrightYear: number;
}

/**
 * Universal Content Provider interface for future headless CMS pluggability.
 */
export interface ContentProvider {
  getProfile(): Promise<ProfileContent> | ProfileContent;
  getCapabilities(): Promise<CapabilityItem[]> | CapabilityItem[];
  getApproach(): Promise<ApproachStep[]> | ApproachStep[];
  getAiInAction(): Promise<AiInActionStep[]> | AiInActionStep[];
  getAiUsage(): Promise<AiUsageCard[]> | AiUsageCard[];
  getProjects(): Promise<ProjectsContent> | ProjectsContent;
  getExperience(): Promise<ExperienceContent> | ExperienceContent;
  getSkills(): Promise<SkillsContent> | SkillsContent;
  getTools(): Promise<ToolsContent> | ToolsContent;
  getCertifications(): Promise<CertificationsContent> | CertificationsContent;
  getSocial(): Promise<SocialLinks> | SocialLinks;
  getSite(): Promise<SiteMetadata> | SiteMetadata;
}
