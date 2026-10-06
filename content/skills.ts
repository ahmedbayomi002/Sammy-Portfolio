import { SkillsContent, ToolsContent } from './types';

export const skillsContent: SkillsContent = {
  sectionTitle: 'My AI & Digital Skillset',
  sectionSubtitle:
    'A structured competency matrix connecting business analysis, AI integration, CRM platforms, and automation methodologies.',
  categories: [
    {
      category: 'AI',
      description: 'Intelligent models, autonomous agent architectures, and knowledge retrieval',
      skills: [
        'AI Agents',
        'LLM Integration',
        'RAG',
        'Prompt Engineering',
        'AI Analysis',
      ],
    },
    {
      category: 'Automation',
      description: 'End-to-end process orchestration, event triggers, and workflow backbones',
      skills: [
        'Workflow Automation',
        'APIs',
        'Webhooks',
        'Triggers',
        'Actions',
      ],
    },
    {
      category: 'Business',
      description: 'Strategic requirements discovery, journey architecture, and operational design',
      skills: [
        'Business Analysis',
        'Requirements Analysis',
        'Process Mapping',
        'Solution Design',
        'Process Improvement',
      ],
    },
    {
      category: 'Customer Experience',
      description: 'Frontline service design, lifecycle optimization, and support excellence',
      skills: [
        'Customer Journey',
        'Customer Service',
        'Service Operations',
        'Support Management',
      ],
    },
    {
      category: 'CRM',
      description: 'Enterprise relationship management, ticketing systems, and analytics',
      skills: [
        'Zoho CRM',
        'Zoho Desk',
        'CRM Automation',
        'Reporting',
      ],
    },
    {
      category: 'Integration',
      description: 'System-to-system connectivity, data synchronization, and unified flows',
      skills: [
        'APIs',
        'AI Models',
        'External Systems',
        'Data Connections',
      ],
    },
  ],
};

export const toolsContent: ToolsContent = {
  sectionTitle: 'Tools & Technologies I Work With / Explore',
  sectionSubtitle:
    'A pragmatic stack centered around modern AI models, workflow automation backbones, CRM platforms, and frontend tooling.',
  disclaimer:
    'Tools and technologies actively utilized in practical solutions, proof-of-concepts, and exploration.',
  categories: [
    {
      category: 'AI',
      description: 'Foundational models, autonomous agents, and inference frameworks',
      items: ['OpenAI', 'Claude', 'Gemini', 'Z.AI', 'NVIDIA AI'],
    },
    {
      category: 'Automation',
      description: 'Workflow orchestration, event-driven webhooks, and system integrations',
      items: ['n8n', 'Make', 'APIs', 'Webhooks'],
    },
    {
      category: 'CRM',
      description: 'Enterprise relationship management, ticketing, and service ops',
      items: ['Zoho CRM', 'Zoho Desk'],
    },
    {
      category: 'Development',
      description: 'Modern web architecture, interface design, and cloud deployment',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    },
  ],
};
