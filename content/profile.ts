import { ProfileContent, CapabilityItem, ApproachStep, AiInActionStep, AiUsageCard } from './types';

export const profileContent: ProfileContent = {
  name: 'Ahmed Samy',
  eyebrow: 'AI & DIGITAL TRANSFORMATION',
  role: 'AI & Digital Transformation Specialist',
  focusAreas: [
    'Customer Experience',
    'AI & Automation',
    'CRM',
    'Business Analysis',
  ],
  tagline: 'Turning Business Challenges into Intelligent, Automated Solutions.',
  secondaryTagline: 'Turning Business Challenges into Intelligent, Automated Solutions.',
  mainHeroStatement: 'I connect business challenges with AI, automation and customer experience.',
  personalIntro:
    'I connect business challenges with AI, automation, customer experience and digital transformation — turning complex operational problems into practical, intelligent solutions.',
  corePrinciple: 'Technology is most valuable when it solves a real business problem.',
  profileImage: '/profile/profile.jpg',
  heroBio:
    'I connect business challenges with AI, automation, customer experience and digital transformation — turning complex operational problems into practical, intelligent solutions.',
  aboutBio: [
    'I’m a Customer Experience and Digital Transformation professional with hands-on experience across FinTech, customer service, CRM, business processes, AI, automation, and digital solutions.',
    'My approach combines business understanding with technology — starting from the real business challenge, analyzing the process, designing the right solution, connecting systems, and using AI and automation to create more efficient and scalable operations.',
    'I’m particularly interested in building practical solutions that improve customer journeys, operational efficiency, decision-making, and digital experiences.',
  ],
  philosophyCards: [
    {
      number: '01',
      title: 'Business Thinking',
      description: 'Understanding the business problem before choosing the technology.',
    },
    {
      number: '02',
      title: 'Customer Experience',
      description: 'Designing better customer journeys and service operations.',
    },
    {
      number: '03',
      title: 'AI & Automation',
      description: 'Using AI and automation where they create practical business value.',
    },
    {
      number: '04',
      title: 'Digital Transformation',
      description: 'Connecting people, processes, data, and technology.',
    },
  ],
};

export const aiInActionSteps: AiInActionStep[] = [
  {
    step: '01',
    title: 'Analyze',
    description: 'AI analyzes unstructured information and identifies relevant business data.',
    flowStage: 'Problem',
    detail: 'Ingests incoming raw data — emails, documents, tickets, or bids — extracting critical parameters and operational signals.',
  },
  {
    step: '02',
    title: 'Understand',
    description: 'AI interprets descriptions, documents, customer requests and business context.',
    flowStage: 'AI',
    detail: 'Applies domain comprehension and language models to interpret nuances, user intent, and commercial context.',
  },
  {
    step: '03',
    title: 'Decide',
    description: 'AI applies business rules and relevance criteria to support decisions.',
    flowStage: 'Logic',
    detail: 'Evaluates findings against strict organizational criteria, prioritizing relevant opportunities and flagging exceptions.',
  },
  {
    step: '04',
    title: 'Automate',
    description: 'AI works inside automated workflows to reduce repetitive manual operations.',
    flowStage: 'Automation',
    detail: 'Passes structured actions to event-driven pipelines, updating CRMs, routing alerts, and syncing connected tools.',
  },
  {
    step: '05',
    title: 'Improve',
    description: 'AI-generated insights help identify patterns, opportunities and areas for improvement.',
    flowStage: 'Outcome',
    detail: 'Analyzes recurring operational data to identify systemic friction, refine prompts, and elevate overall process quality.',
  },
];

export const aiUsageCards: AiUsageCard[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Designing AI-driven workflows for practical business tasks.',
    description: 'Autonomous goal-driven routines that navigate multi-step business logic, query APIs, and handle operational duties reliably.',
    iconName: 'Cpu',
  },
  {
    id: 'llm-integration',
    title: 'LLM Integration',
    tagline: 'Connecting language models with applications and business processes.',
    description: 'Plugging modern language models into existing enterprise systems, customer service queues, and operational platforms.',
    iconName: 'Workflow',
  },
  {
    id: 'rag',
    title: 'RAG',
    tagline: 'Turning private documents and knowledge into searchable AI experiences.',
    description: 'Grounding conversational assistants in proprietary documents, company manuals, and product catalogs with strict context accuracy.',
    iconName: 'Database',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Combining AI with triggers, APIs, data and automated actions.',
    description: 'Building event-driven automation bridges using n8n and Make where AI decisions trigger instant, headless downstream execution.',
    iconName: 'Zap',
  },
  {
    id: 'ai-analysis',
    title: 'AI Analysis',
    tagline: 'Using AI to classify, summarize and interpret business information.',
    description: 'Transforming high-volume reports, complex tender notices, and qualitative feedback into crisp management intelligence.',
    iconName: 'BarChart3',
  },
  {
    id: 'ai-cx',
    title: 'AI-Powered Customer Experience',
    tagline: 'Applying AI to customer support, voice interactions and service operations.',
    description: 'Designing voice assistants, smart chat routing, and agent-assist workflows that upgrade resolution speed and satisfaction.',
    iconName: 'Users',
  },
];

export const capabilitiesContent: CapabilityItem[] = [
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    iconName: 'Cpu',
    description:
      'Applying modern AI models and autonomous agent workflows to eliminate manual friction and elevate operational throughput.',
    skills: [
      'AI Agents',
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'Workflow Automation',
      'API Integration',
    ],
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience',
    iconName: 'Users',
    description:
      'Orchestrating end-to-end customer journeys and support architectures that drive satisfaction, retention, and speed of resolution.',
    skills: [
      'Customer Experience',
      'Customer Journey',
      'Customer Service',
      'Service Operations',
      'Support Management',
      'Service Improvement',
    ],
  },
  {
    id: 'crm-transformation',
    title: 'CRM & Digital Transformation',
    iconName: 'Workflow',
    description:
      'Designing and configuring robust CRM ecosystems, automated pipeline triggers, and operational dashboards that unify cross-functional teams.',
    skills: [
      'Zoho CRM',
      'Zoho Desk',
      'CRM Workflows',
      'Reporting',
      'Process Automation',
      'Digital Transformation',
    ],
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    iconName: 'BarChart3',
    description:
      'Translating ambiguous business challenges into structured requirements, clear process maps, and actionable technical specifications.',
    skills: [
      'Requirements Analysis',
      'Process Mapping',
      'Business Workflows',
      'Solution Design',
      'Process Improvement',
      'Digital Transformation',
    ],
  },
];

export const approachContent: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Business objectives, customers, processes, and pain points.',
    detailPoints: [
      'Deep dive into organizational goals and stakeholder priorities',
      'Mapping current customer friction and user sentiment',
      'Identifying baseline operational costs and timeline constraints',
    ],
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'Identify bottlenecks, repetitive work, inefficiencies, and opportunities.',
    detailPoints: [
      'Quantifying repetitive manual touchpoints across departments',
      'Root-cause analysis of service drop-offs and data silos',
      'Prioritizing high-leverage automation and AI opportunities',
    ],
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create a practical solution around the real business requirement.',
    detailPoints: [
      'Architecting end-to-end human-in-the-loop workflows',
      'Designing targeted CRM and service pipeline states',
      'Selecting optimal models, tools, and technical specifications',
    ],
  },
  {
    step: '04',
    title: 'Connect',
    description: 'Connect systems, APIs, data, AI models, and business tools.',
    detailPoints: [
      'Integrating CRMs, ERPs, messaging channels, and databases',
      'Securing webhooks and automated payload exchanges',
      'Unifying fragmented data into single sources of truth',
    ],
  },
  {
    step: '05',
    title: 'Automate',
    description: 'Automate repetitive operations and introduce AI where valuable.',
    detailPoints: [
      'Deploying reliable automation flows using n8n and Make',
      'Integrating context-aware LLM agents and prompt systems',
      'Establishing fallback channels and exception routing',
    ],
  },
  {
    step: '06',
    title: 'Improve',
    description: 'Monitor, analyze, optimize, and continuously improve.',
    detailPoints: [
      'Tracking conversion, resolution speed, and efficiency KPIs',
      'Gathering real feedback from front-line teams and clients',
      'Iterating prompts, workflows, and process parameters',
    ],
  },
];
