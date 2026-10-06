import { ExperienceContent } from './types';

/**
 * Phase 1 Foundation:
 * Represents the progression of thematic expertise.
 * Exact corporate roles, verified dates, and production milestones will be loaded in Phase 2.
 */
export const experienceContent: ExperienceContent = {
  sectionTitle: 'Professional Journey',
  sectionSubtitle:
    'A progressive trajectory across frontline customer experience, fintech operations, enterprise CRM, and autonomous AI systems.',
  statusNotice: 'Chronological roles and organizational milestones will be published in Phase 2.',
  thematicStages: [
    {
      step: 1,
      stageName: 'Customer Experience',
      focus: 'Frontline service excellence, customer journey mapping, and operational resolution.',
      highlights: [
        'Direct customer engagement and satisfaction analysis',
        'Service workflow optimization and incident resolution',
        'Understanding authentic user needs and operational friction',
      ],
    },
    {
      step: 2,
      stageName: 'FinTech & Digital Payments',
      focus: 'Transaction environments, operational compliance, and digital service efficiency.',
      highlights: [
        'Digital customer touchpoints in transactional domains',
        'High-reliability process flows and regulatory awareness',
        'Cross-channel payment workflow understanding',
      ],
    },
    {
      step: 3,
      stageName: 'CRM & Business Operations',
      focus: 'Centralizing organizational intelligence, ticket lifecycles, and pipeline management.',
      highlights: [
        'Zoho CRM & Zoho Desk administration and process mapping',
        'Multi-departmental handoffs and data structuring',
        'Operational reporting and pipeline visibility',
      ],
    },
    {
      step: 4,
      stageName: 'Automation & Digital Transformation',
      focus: 'Eliminating repetitive overhead through integrations, webhooks, and trigger architectures.',
      highlights: [
        'No-code / low-code workflow orchestration (n8n, Make)',
        'API connectivity between disparate business tools',
        'Systemic digital transformation and change management',
      ],
    },
    {
      step: 5,
      stageName: 'AI-Powered Business Solutions',
      focus: 'Bridging enterprise business requirements with practical LLMs, agents, and intelligent workflows.',
      highlights: [
        'Autonomous AI agents and prompt engineering for real workflows',
        'RAG architecture integration for internal knowledge access',
        'Delivering measurable business value without technological bloat',
      ],
    },
  ],
};
