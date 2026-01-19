/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

export const personalInfo = {
  name: "Anthony Jimenez",
  firstName: "Anthony",
  role: "Machine Learning Engineer",
  tagline: "Building intelligent systems that learn, predict, and automate.",
  description: "I design and deploy production ML systems—from clinical risk prediction to automated business workflows. Specializing in PyTorch, LangChain, and end-to-end AI pipelines.",
  location: "New Jersey, USA",
  email: "tj.jimenez03@gmail.com",
  phone: "201-230-4890",
  availability: "Open to opportunities",
} as const;

export const socialLinks = {
  github: "https://github.com/Anthonyooo0",
  linkedin: "https://www.linkedin.com/in/anthony-jimenez-4bb943200/",
  email: "mailto:tj.jimenez03@gmail.com",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "MAC Products", href: "#mac-products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  stack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "clinical-triage",
    title: "AI Clinical Triage Assistant",
    subtitle: "Patient Risk Prediction System",
    description: "Production ML system predicting 24-hour patient deterioration using the MIMIC-IV clinical dataset. Built end-to-end preprocessing pipelines with imputation, outlier handling, and engineered clinical features from vitals and lab data.",
    impact: "Achieved high AUC/PR scores with XGBoost. Deployed Streamlit dashboard for clinicians to visualize risk scores and key contributing factors via SHAP interpretability.",
    stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "Pandas", "Streamlit"],
    category: "Healthcare ML",
    featured: true,
  },
  {
    id: "complaint-monitor",
    title: "Complaint Monitor AI",
    subtitle: "Automated Workflow Intelligence",
    description: "Production AI system ingesting Outlook emails via Microsoft Graph API, extracting part numbers, and classifying complaints using multi-step LLM reasoning with Gemini. Built complete ETL pipeline with OCR, entity extraction, and automated deduplication.",
    impact: "Reduced manual complaint tracking by 70%. Automated Excel report generation with thread merging and conflict resolution.",
    stack: ["Python", "Gemini LLM", "Microsoft Graph", "SQLite", "OCR", "ETL"],
    category: "Enterprise AI",
    featured: true,
  },
  {
    id: "deal-finder",
    title: "V8 Engine Deal Finder",
    subtitle: "ML-Powered Deal Scoring",
    description: "End-to-end ML system scraping automotive listings from Craigslist, FB Marketplace, OfferUp, and eBay. Engineered price/condition features and trained Random Forest model for deal quality scoring.",
    impact: "85%+ accuracy on deal scoring. Automated Discord/email alerts for high-value deals on schedule.",
    stack: ["Python", "Random Forest", "Playwright", "Selenium", "Pandas", "SQLite"],
    category: "Consumer ML",
    githubUrl: "https://github.com/Anthonyooo0/Engine_Deal_AI",
    featured: true,
  },
  {
    id: "pdf-extraction",
    title: "PDF Data Extraction Pipeline",
    subtitle: "Automated Document Processing",
    description: "Automated data extraction pipeline processing PDF attachments from email inbox. Implemented OCR with Tesseract for scanned documents and table extraction for digital PDFs.",
    impact: "Eliminated manual data entry. Reduced processing time by 90%.",
    stack: ["Python", "Tesseract OCR", "pdf2image", "Pandas", "openpyxl", "IMAP"],
    category: "Automation",
    githubUrl: "https://github.com/Anthonyooo0/Email_PDF_Data_Export",
    featured: false,
  },
];

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: "mac-products",
    title: "AI Software Engineer",
    company: "MAC Products",
    location: "Kearny, NJ",
    period: "Sep 2025 – Present",
    description: "Lead Developer for Internal AI Systems across Quality, Engineering, Purchasing, and Customer Service departments.",
    highlights: [
      "Architected end-to-end AI software transforming unstructured emails/PDFs into validated defect logs",
      "Designed RAG and agentic workflows using LangChain, SQL, and Gemini/OpenAI",
      "Implemented multi-stage LLM reasoning with structured-output templates",
      "Train departments on AI tools and authored internal AI usage guidelines",
    ],
    tech: ["LangChain", "Gemini", "OpenAI", "RAG", "SQL", "Python"],
    current: true,
  },
  {
    id: "shock-tech",
    title: "Manufacturing Engineering Intern",
    company: "Shock Tech Inc",
    location: "Mahwah, NJ",
    period: "Dec 2023 – Sep 2025",
    description: "Developed data pipelines and automation systems for engineering and management teams.",
    highlights: [
      "Built centralized RPA test-data pipeline converting raw material readings into structured databases",
      "Created Python + VBA automation reducing processing time by 60%",
      "Developed data-driven dashboards for vibration-isolator mechanical performance",
    ],
    tech: ["Python", "Excel/VBA", "Pandas", "Data Pipelines", "Dashboards"],
    current: false,
  },
];

export const skills = {
  ml: [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "XGBoost",
    "LangChain",
    "SHAP",
    "RAG",
  ],
  data: [
    "Pandas",
    "NumPy",
    "SQL",
    "MongoDB",
    "ETL Pipelines",
    "Feature Engineering",
  ],
  tools: [
    "Python",
    "Git",
    "Linux",
    "FastAPI",
    "Streamlit",
    "Docker",
  ],
} as const;

export const metrics = [
  { value: "5+", label: "ML Models Deployed" },
  { value: "70%", label: "Process Time Reduced" },
  { value: "12+", label: "AI Technologies" },
  { value: "2+", label: "Years Building" },
] as const;

export const education = {
  school: "New Jersey Institute of Technology",
  degree: "General Engineering / Computer Science",
  status: "Junior",
  graduation: "May 2027",
  highlight: "Former NCAA Division 1 Track & Field athlete (2 years)",
} as const;

export const aboutText = {
  intro: "I'm a Machine Learning Engineer passionate about building production AI systems that solve real problems.",
  body: "Currently at MAC Products, I architect end-to-end AI solutions that transform how teams work—from LLM-powered document analysis to automated compliance workflows. My background spans clinical ML (patient risk prediction), NLP (complaint classification), and intelligent automation pipelines.",
  personal: "Former NCAA Division 1 Track & Field athlete at NJIT. The competitive mindset translates directly to ML—iterating on models, optimizing hyperparameters, and pushing for better metrics through systematic improvement.",
} as const;

export interface MacProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  stack: string[];
  highlights: string[];
  metrics: { value: string; label: string }[];
}

export const macProducts: MacProduct[] = [
  {
    id: "quality-dashboard",
    title: "MAC Quality Dashboard",
    subtitle: "AI-Powered Complaint Classification System",
    description: "Enterprise-grade quality management automation that intelligently processes customer complaint emails using AI classification. Automatically extracts and categorizes quality issues from Microsoft Outlook into a centralized database with rich analytics.",
    impact: [
      "Reduced manual complaint tracking by 70%",
      "Processes 10,000+ part numbers against master inventory",
      "8-stage validation pipeline ensures data integrity",
    ],
    stack: ["Python", "Streamlit", "Gemini LLM", "Microsoft Graph API", "SQLite", "OAuth 2.0", "Pandas"],
    highlights: [
      "Multi-layer email filtering with 6-stage noise reduction",
      "Intelligent thread parsing supporting 7+ email client formats",
      "Atomic Excel writes with corruption prevention",
      "OAuth 2.0 device code flow authentication",
    ],
    metrics: [
      { value: "3,346", label: "Lines of Code" },
      { value: "110", label: "Functions" },
      { value: "2", label: "API Integrations" },
      { value: "3", label: "UI Platforms" },
    ],
  },
  {
    id: "router-generator",
    title: "MAC Router Generator",
    subtitle: "AI-Powered Manufacturing Router Creation",
    description: "Multimodal AI system that analyzes engineering drawings (PDFs) and generates standardized manufacturing routing documents for Made2Manage ERP. Replaces manual router creation that previously required experienced manufacturing engineers.",
    impact: [
      "Automates router creation from PDF drawings",
      "14 real-world examples embedded for few-shot learning",
      "8-step deterministic CSV validation pipeline",
    ],
    stack: ["Python", "Streamlit", "Gemini Multimodal", "Pillow", "RegEx", "CSV Processing"],
    highlights: [
      "Multimodal PDF analysis with 60s timeout handling",
      "Temperature 0.1 for deterministic AI output",
      "Arithmetic validation overrides AI-generated totals",
      "8 work center types with auto-generated instructions",
    ],
    metrics: [
      { value: "1,331", label: "Lines of Code" },
      { value: "8", label: "Validation Steps" },
      { value: "14", label: "Training Examples" },
      { value: "6", label: "Gemini Models" },
    ],
  },
  {
    id: "project-command-center",
    title: "MAC Project Command Center",
    subtitle: "Full-Stack Project Management System",
    description: "Enterprise project management application for high-voltage electrical equipment manufacturing. Manages complete project lifecycle from design through Factory Acceptance Testing (FAT) to shipment with comprehensive audit logging.",
    impact: [
      "Real-time tracking for manufacturing projects",
      "5-phase milestone visualization system",
      "Complete audit trail for regulatory compliance",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    highlights: [
      "Granular change tracking with before/after diffs",
      "Multi-format date parsing (4+ formats)",
      "Memoized filtering for performance optimization",
      "Nested modal system with proper z-index management",
    ],
    metrics: [
      { value: "1,957", label: "Lines of Code" },
      { value: "5", label: "View Modes" },
      { value: "15+", label: "Tracked Fields" },
      { value: "22", label: "Git Commits" },
    ],
  },
];
