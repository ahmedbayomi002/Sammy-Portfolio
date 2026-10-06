import React, { createContext, useContext } from 'react';
import {
  ContentProvider,
  ProfileContent,
  CapabilityItem,
  ApproachStep,
  AiInActionStep,
  AiUsageCard,
  ProjectsContent,
  ExperienceContent,
  SkillsContent,
  ToolsContent,
  CertificationsContent,
  SocialLinks,
  SiteMetadata,
} from './types';
import { profileContent, capabilitiesContent, approachContent, aiInActionSteps, aiUsageCards } from './profile';
import { projectsContent } from './projects';
import { experienceContent } from './experience';
import { skillsContent, toolsContent } from './skills';
import { certificationsContent } from './certifications';
import { socialLinks } from './social';
import { siteMetadata } from './site';

/**
 * LocalContentProvider:
 * Default implementation reading from local TypeScript files.
 * Provides synchronized data with standard asynchronous-compatible signatures
 * so a remote CMS provider (e.g. WordPress, Strapi) can be substituted seamlessly.
 */
export class LocalContentProvider implements ContentProvider {
  getProfile(): ProfileContent {
    return profileContent;
  }

  getCapabilities(): CapabilityItem[] {
    return capabilitiesContent;
  }

  getApproach(): ApproachStep[] {
    return approachContent;
  }

  getAiInAction(): AiInActionStep[] {
    return aiInActionSteps;
  }

  getAiUsage(): AiUsageCard[] {
    return aiUsageCards;
  }

  getProjects(): ProjectsContent {
    return projectsContent;
  }

  getExperience(): ExperienceContent {
    return experienceContent;
  }

  getSkills(): SkillsContent {
    return skillsContent;
  }

  getTools(): ToolsContent {
    return toolsContent;
  }

  getCertifications(): CertificationsContent {
    return certificationsContent;
  }

  getSocial(): SocialLinks {
    return socialLinks;
  }

  getSite(): SiteMetadata {
    return siteMetadata;
  }
}

/**
 * Singleton instance of LocalContentProvider
 */
export const defaultContentProvider = new LocalContentProvider();

const ContentContext = createContext<ContentProvider>(defaultContentProvider);

export interface ContentProviderProps {
  provider?: ContentProvider;
  children: React.ReactNode;
}

export const ContentProviderComponent: React.FC<ContentProviderProps> = ({
  provider = defaultContentProvider,
  children,
}) => {
  return (
    <ContentContext.Provider value={provider}>
      {children}
    </ContentContext.Provider>
  );
};

export const usePortfolioContent = () => {
  const provider = useContext(ContentContext);

  return {
    profile: provider.getProfile() as ProfileContent,
    capabilities: provider.getCapabilities() as CapabilityItem[],
    approach: provider.getApproach() as ApproachStep[],
    aiInAction: provider.getAiInAction() as AiInActionStep[],
    aiUsage: provider.getAiUsage() as AiUsageCard[],
    projects: provider.getProjects() as ProjectsContent,
    experience: provider.getExperience() as ExperienceContent,
    skills: provider.getSkills() as SkillsContent,
    tools: provider.getTools() as ToolsContent,
    certifications: provider.getCertifications() as CertificationsContent,
    social: provider.getSocial() as SocialLinks,
    site: provider.getSite() as SiteMetadata,
  };
};
