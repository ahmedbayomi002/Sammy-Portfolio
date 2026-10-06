import { ProjectsContent, ProjectItem } from './types';

export const projectsList: ProjectItem[] = [
  {
    id: 'ai-tender-intelligence',
    title: 'AI Tender Intelligence',
    category: 'AI Automation',
    filterCategories: ['AI', 'Automation', 'Business Analysis'],
    subtitle: 'From daily tender emails to intelligent business opportunities.',
    status: 'Automation Workflow / Prototype',
    challenge:
      'Daily tender announcements arrive via unstructured emails and dense attached tables, requiring hours of manual scanning to find business-relevant contracts.',
    problem:
      'Daily tender information can arrive through email in structured or semi-structured formats and requires manual review to identify relevant opportunities.',
    solution:
      'An automated end-to-end pipeline that ingests incoming emails, parses tabular data, analyzes project scopes with AI, evaluates business relevance, and dispatches a structured brief.',
    whatAiDoes:
      'Analyzes project descriptions, deciphers technical specifications, classifies commercial relevance against organizational scope, and synthesizes executive summaries.',
    whatAutomationDoes:
      'Monitors the inbox, extracts email attachments and HTML tables, structures fields, applies filter rules, and triggers instant Telegram notifications.',
    myRole: [
      'Business Analysis',
      'AI Workflow Design',
      'Automation Logic',
      'Solution Design',
    ],
    workflow: [
      { step: 'Email Intake' },
      { step: 'Data Extraction' },
      { step: 'Structured Parsing' },
      { step: 'AI Analysis', isAi: true },
      { step: 'Relevance Scoring' },
      { step: 'Executive Filter' },
      { step: 'Summary Generation', isAi: true },
      { step: 'Telegram Dispatch' },
    ],
    capabilities: [
      'Email processing',
      'Table/data extraction',
      'AI text analysis',
      'Relevance classification',
      'Business rule filtering',
      'Automated summaries',
      'Telegram notifications',
    ],
    technologies: [
      'OpenAI LLM',
      'Workflow Automation',
      'Email Webhooks',
      'Structured JSON',
      'Telegram Bot API',
    ],
    highlights: [
      'Transforms unstructured tender announcements into structured operational intelligence.',
      'Employs natural language analysis to determine business opportunity relevance.',
      'Dispatches high-priority briefs directly to leadership communication channels.',
      'Completely eliminates repetitive daily manual browsing.',
    ],
  },
  {
    id: 'ai-voice-customer-service',
    title: 'AI Voice Customer Service',
    category: 'Customer Experience + AI',
    filterCategories: ['Customer Experience', 'AI', 'Automation'],
    subtitle: 'Intelligent voice support for digital payment customers.',
    status: 'Solution Concept / Prototype',
    challenge:
      'Customer support lines suffer high queue volumes and repetitive inquiries across payment disputes, transaction status, onboarding, and service FAQs.',
    problem:
      'Customer service teams handle repetitive inquiries across support, sales, collections, and onboarding.',
    solution:
      'A voice-enabled AI support architecture designed for natural Arabic interactions that identifies caller intent, answers common inquiries, and manages seamless human escalation.',
    whatAiDoes:
      'Transcribes Arabic speech in real time, classifies conversational intent, retrieves policy answers, and generates natural contextual voice responses.',
    whatAutomationDoes:
      'Routes telephony sessions, queries account backend status via webhooks, logs call summaries to the ticketing CRM, and escalates edge cases to live agents.',
    myRole: [
      'Customer Experience',
      'AI Workflow Design',
      'Requirements Analysis',
      'Solution Design',
    ],
    workflow: [
      { step: 'Caller Inbound' },
      { step: 'Speech-to-Text' },
      { step: 'Voice AI Intent', isAi: true },
      { step: 'Knowledge Retrieval', isAi: true },
      { step: 'Dynamic Speech Response' },
      { step: 'Resolution or Escalation' },
    ],
    capabilities: [
      'Voice AI',
      'Intent detection',
      'Customer support automation',
      'Arabic voice interaction',
      'Business logic',
      'Human escalation',
      'Call recording for QA',
    ],
    technologies: [
      'Voice AI',
      'Exotel Telephony',
      'REST APIs',
      'AI Agents',
      'CRM Integration',
    ],
    highlights: [
      'Purpose-built for regional dialect nuance and Arabic customer dialogues.',
      'Resolves routine transactional friction with zero hold times.',
      'Maintains full human-in-the-loop fallback protocol for sensitive complaints.',
      'Logs comprehensive conversational transcripts for quality assurance.',
    ],
  },
  {
    id: 'crm-cx-transformation',
    title: 'CRM & Customer Experience Transformation',
    category: 'CRM + Digital Transformation',
    filterCategories: ['CRM', 'Customer Experience', 'Automation', 'Business Analysis'],
    subtitle: 'Turning fragmented customer operations into connected digital workflows.',
    status: 'Professional Experience / Transformation',
    challenge:
      'Customer operations and service data were fractured across offline spreadsheets, manual tracking tools, disjointed teams, and delayed reporting.',
    problem:
      'Customer operations can become fragmented across spreadsheets, manual processes, separated tools, and manual reporting.',
    solution:
      'Architected a unified CRM and helpdesk environment with automated lifecycle stages, clear escalation queues, and real-time operational analytics.',
    whatAiDoes:
      'Categorizes recurring ticket topics, detects customer sentiment shifts, and assists agents with automated response recommendations.',
    whatAutomationDoes:
      'Automates ticket routing, status changes, service-level-agreement countdowns, email updates, and consolidated leadership KPI reporting.',
    myRole: [
      'Customer Experience',
      'Business Analysis',
      'Process Improvement',
      'Integration',
      'Automation Logic',
    ],
    workflow: [
      { step: 'Disjointed Intake' },
      { step: 'CRM Pipeline Design' },
      { step: 'Ticket Routing Workflows' },
      { step: 'Smart Field Validation' },
      { step: 'AI Sentiment Triage', isAi: true },
      { step: 'Unified Service Analytics' },
    ],
    before: [
      'Excel spreadsheets',
      'Manual reports',
      'Separated tools',
      'Manual follow-up',
    ],
    transformation: [
      'CRM system',
      'Helpdesk platform',
      'Automation workflows',
      'Structured data',
      'Automated reporting',
      'Connected workflows',
    ],
    focus: [
      'CRM workflows',
      'Customer support operations',
      'Ticket management',
      'Customer journey',
      'Service analytics',
      'Process improvement',
      'Reporting',
      'Automation',
    ],
    capabilities: [
      'CRM workflow design',
      'Customer journey mapping',
      'Ticket lifecycle architecture',
      'Operational visibility',
      'Service analytics setup',
      'Cross-departmental handoffs',
    ],
    technologies: [
      'Zoho CRM',
      'Zoho Desk',
      'Zoho Analytics',
      'Workflow Automation',
      'Webhooks',
    ],
    highlights: [
      'Centralized multi-channel customer communications into a single pane of glass.',
      'Dramatically elevated transparency across active customer cases and account health.',
      'Replaced fragile spreadsheet trackers with robust relational database objects.',
      'Established a resilient operational base for future automated self-service.',
    ],
  },
  {
    id: 'ai-powered-business-reporting',
    title: 'AI-Powered Business Reporting',
    category: 'AI + Business Intelligence',
    filterCategories: ['AI', 'Business Analysis', 'Automation'],
    subtitle: 'Turning operational data into actionable business insights.',
    status: 'Reporting / Automation Concept',
    challenge:
      'Departmental managers spent hours every week manually consolidating raw CSV exports, pivoting tables, and drafting narrative status summaries.',
    problem:
      'Operational reports often require manual preparation, consolidation, filtering, and analysis.',
    solution:
      'An automated reporting framework that normalizes raw spreadsheets, runs multidimensional analysis, and leverages AI to generate narrative management summaries.',
    whatAiDoes:
      'Synthesizes complex numeric trends into narrative bullet points, explains operational variances, and drafts key takeaways for executive meetings.',
    whatAutomationDoes:
      'Ingests weekly data dumps on schedule, cleans schema discrepancies, calculates core ratios, and formats presentation-ready dashboards.',
    myRole: [
      'Business Analysis',
      'AI Workflow Design',
      'Solution Design',
      'Process Improvement',
    ],
    workflow: [
      { step: 'Raw Data Dumps' },
      { step: 'Automated Cleaning' },
      { step: 'KPI Aggregation' },
      { step: 'Variance Analysis' },
      { step: 'AI Narrative Insights', isAi: true },
      { step: 'Executive Brief Distribution' },
    ],
    capabilities: [
      'Data preparation',
      'KPI analysis',
      'Pivot analysis',
      'Trend analysis',
      'Department analysis',
      'Customer service metrics',
      'Management reporting',
    ],
    technologies: [
      'AI Synthesis',
      'Structured Excel / CSV',
      'Business Intelligence',
      'Workflow Automation',
      'Reporting Dashboards',
    ],
    highlights: [
      'Cuts report preparation latency from days to minutes.',
      'Translates raw rows of support data into clear management talking points.',
      'Highlights early operational warning signs before they become client issues.',
      'Standardizes reporting quality across multiple business units.',
    ],
  },
  {
    id: 'my-private-ai',
    title: 'My Private AI',
    category: 'AI + RAG',
    filterCategories: ['AI'],
    subtitle: 'Your documents. Your knowledge. Your AI assistant.',
    status: 'Prototype',
    challenge:
      'Professionals face severe information sprawl across internal PDFs, policies, and contracts, making instant, citation-grounded retrieval tedious.',
    problem:
      'Users often need to search and understand information contained in their own documents.',
    solution:
      'A private knowledge assistant utilizing Retrieval-Augmented Generation (RAG) where users upload proprietary documents and converse with grounded accuracy.',
    whatAiDoes:
      'Embeds textual chunks into vector representations, conducts similarity search, and answers queries citing specific document clauses without hallucinating.',
    whatAutomationDoes:
      'Parses PDF/DOCX files, segments text into semantically coherent chunks, updates the vector index, and streams responses to the user interface.',
    myRole: [
      'Solution Design',
      'AI Workflow Design',
      'Requirements Analysis',
      'Integration',
    ],
    workflow: [
      { step: 'Document Ingestion' },
      { step: 'Text Chunking' },
      { step: 'Vector Embedding', isAi: true },
      { step: 'Semantic Query' },
      { step: 'RAG Context Assembly', isAi: true },
      { step: 'Grounded Answer' },
    ],
    capabilities: [
      'Document upload',
      'Document processing',
      'Knowledge retrieval',
      'RAG',
      'Natural-language questions',
      'Context-aware answers',
    ],
    technologies: [
      'OpenAI / Gemini Models',
      'RAG Architecture',
      'Vector Embeddings',
      'React SPA',
      'TypeScript',
    ],
    highlights: [
      'Protects privacy by limiting knowledge search strictly to supplied company files.',
      'Eliminates generic hallucinated answers through citation-based context.',
      'Provides intuitive search for non-technical business professionals.',
    ],
  },
  {
    id: 'ai-automation-platform',
    title: 'AI Automation Platform',
    category: 'AI + Automation',
    filterCategories: ['AI', 'Automation'],
    subtitle: 'Connecting AI models, applications, APIs, data, and workflows.',
    status: 'In Development',
    challenge:
      'Integrating heterogeneous third-party SaaS apps with contemporary AI models usually requires custom engineering and fragile glue code.',
    problem:
      'Businesses often need multiple AI models, applications, APIs, triggers, and actions to work together.',
    solution:
      'A lightweight modular orchestration system designed around plug-and-play workflow nodes, allowing business users to chain AI logic with practical APIs.',
    whatAiDoes:
      'Executes specialized prompt steps, evaluates branching conditions, extracts structured JSON from text, and summarizes intermediate payload states.',
    whatAutomationDoes:
      'Listens for inbound webhooks, handles authenticated REST API exchanges, retries failed payloads, and schedules recurring background triggers.',
    myRole: [
      'Solution Design',
      'Automation Logic',
      'Integration',
      'Requirements Analysis',
    ],
    workflow: [
      { step: 'Inbound Webhook Trigger' },
      { step: 'Payload Transformation' },
      { step: 'AI Reasoning Step', isAi: true },
      { step: 'Conditional Branch Logic' },
      { step: 'Target API Action' },
      { step: 'Audit Logging' },
    ],
    capabilities: [
      'AI model integration',
      'Workflow automation',
      'API connections',
      'Triggers',
      'Actions',
      'Data processing',
      'Reusable workflows',
      'Templates',
    ],
    technologies: [
      'AI Foundation Models',
      'REST APIs & Webhooks',
      'Event-Driven Logic',
      'React UI Canvas',
      'TypeScript',
    ],
    highlights: [
      'Democratizes automated workflow composition for business transformation teams.',
      'Natively treats AI evaluation as a standard operational pipeline step.',
      'Built with enterprise API security standards and auditability in mind.',
    ],
  },
];

export const projectsContent: ProjectsContent = {
  sectionTitle: 'Selected Work',
  sectionSubtitle:
    'Practical solutions across AI, automation, customer experience, CRM, and digital transformation.',
  filterOptions: [
    'All',
    'AI',
    'Automation',
    'Customer Experience',
    'CRM',
    'Business Analysis',
  ],
  projects: projectsList,
};
