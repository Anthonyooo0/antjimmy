export const siteConfig = {
  name: "Porfirio Jimenez",
  role: "Machine Learning Engineer",
  location: "United States",
  email: "tj.jimenez03@gmail.com",
  phone: "201-230-4890",
  tagline: "Machine Learning Engineer specializing in production AI systems, predictive modeling, and intelligent automation using PyTorch, TensorFlow, and LLMs.",
  description: "Building end-to-end ML systems from data pipelines to model deployment. Experienced in clinical ML, NLP, LLM agents, and production AI workflows.",
  
  social: {
    github: "https://github.com/Anthonyooo0",
    linkedin: "https://www.linkedin.com/in/anthony-jimenez-4bb943200/",
    portfolio: "https://anthony-jimenez-portfolio.vercel.app",
  },

  nav: [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],

  skills: [
    {
      category: "ML/AI & Deep Learning",
      items: [
        { name: "PyTorch", icon: "brain" },
        { name: "TensorFlow", icon: "brain" },
        { name: "scikit-learn", icon: "brain" },
        { name: "XGBoost", icon: "brain" },
        { name: "LangChain", icon: "bot" },
        { name: "SHAP", icon: "chart" },
        { name: "LLM Agents", icon: "bot" },
        { name: "RAG", icon: "brain" },
      ]
    },
    {
      category: "Data Engineering & Analysis",
      items: [
        { name: "Pandas", icon: "chart" },
        { name: "NumPy", icon: "calculator" },
        { name: "SQLite", icon: "database" },
        { name: "MySQL", icon: "database" },
        { name: "MongoDB", icon: "database" },
        { name: "ETL Pipelines", icon: "database" },
        { name: "Streamlit", icon: "layout" },
        { name: "FastAPI", icon: "server" },
      ]
    },
    {
      category: "Languages & Tools",
      items: [
        { name: "Python", icon: "code" },
        { name: "SQL", icon: "database" },
        { name: "C/C++", icon: "code" },
        { name: "JavaScript", icon: "code" },
        { name: "Git", icon: "git-branch" },
        { name: "Linux", icon: "terminal" },
        { name: "Jupyter", icon: "code" },
        { name: "Bash", icon: "terminal" },
      ]
    }
  ],

  projects: [
    {
      title: "AI Clinical Triage Assistant",
      description: "Production ML system predicting 24-hour patient deterioration using MIMIC-IV dataset. Built preprocessing pipelines with imputation, outlier handling, and engineered clinical features. Trained XGBoost, Random Forest, and Logistic Regression models with AUC/PR/F1 evaluation. Implemented SHAP interpretability and deployed Streamlit dashboard for clinicians visualizing risk scores and key contributing factors.",
      stack: ["Python", "XGBoost", "scikit-learn", "SHAP", "Pandas", "Streamlit", "MIMIC-IV"],
      image: "/projects/clinical-triage.jpg",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Complaint Monitor App — AI Workflow Automation",
      description: "Production AI system ingesting Outlook emails via Microsoft Graph API, extracting part numbers, and classifying complaints using multi-step LLM reasoning with Gemini. Built end-to-end ETL pipeline with OCR, entity extraction, and automated deduplication. Engineered SQLite database with thread merging and conflict resolution. Automated Excel report generation, reducing manual complaint tracking by 70%.",
      stack: ["Python", "Gemini LLM", "Microsoft Graph API", "SQLite", "OCR", "ETL", "openpyxl"],
      image: "/projects/complaint-monitor.jpg",
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "V8 Engine Deal Finder — ML-Powered Deal Scoring",
      description: "End-to-end ML system scraping automotive listings (Craigslist, FB Marketplace, OfferUp, eBay), deduplicating to SQLite, and engineering price/condition features. Trained Random Forest model to score deal quality with 85%+ accuracy. Automated Discord/email alerts for high-value deals on schedule.",
      stack: ["Python", "Random Forest", "Playwright", "Selenium", "Pandas", "SQLite", "Feature Engineering"],
      image: "/projects/v8-deal-finder.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/Anthonyooo0/Engine_Deal_AI",
    },
    {
      title: "PDF Data Extraction & OCR Pipeline",
      description: "Automated data extraction pipeline processing PDF attachments from email inbox. Implemented OCR with Tesseract for scanned documents and table extraction for digital PDFs. Built ETL workflow logging structured data to Excel/CSV, eliminating manual data entry and reducing processing time by 90%.",
      stack: ["Python", "Tesseract OCR", "pdf2image", "Pandas", "openpyxl", "ETL", "IMAP"],
      image: "/projects/pdf-automation.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/Anthonyooo0/Email_PDF_Data_Export",
    }
  ],

  about: {
    bio: "Machine Learning Engineer with hands-on experience building production AI systems, predictive models, and intelligent automation workflows. Currently developing ML solutions at MAC Products using LangChain, LLM agents, and ETL pipelines. Experienced in clinical ML (patient risk prediction), NLP (complaint classification), and end-to-end ML pipelines from data engineering to model deployment. Pursuing General Engineering at NJIT. Former NCAA Division 1 Track and Field athlete. Passionate about applying ML to solve real-world problems in healthcare, manufacturing, and business operations.",
    metrics: [
      { label: "ML Models Deployed", value: "5+" },
      { label: "Processing Time Reduction", value: "70%+" },
      { label: "ML/AI Technologies", value: "12+" },
      { label: "Current Year", value: "Junior @ NJIT" },
    ]
  },

  experience: [
    {
      title: "AI Software Engineer — Lead Developer for Internal AI Systems",
      company: "MAC Products, Kearny, NJ",
      period: "09/2025 - Current",
      description: "Lead the architecture and development of end-to-end AI software used across Quality, Engineering, Purchasing, and Customer Service. Built automated data analysis pipelines transforming unstructured emails/PDFs into validated defect logs and trend reports. Designed RAG and agentic workflows using LangChain, SQL, and Gemini/OpenAI for material-code lookup, document retrieval, and compliance review. Implemented multi-stage LLM reasoning and structured-output templates for reliable, production-grade automation. Train multiple departments on AI tools, prompting strategy, and workflow adoption; authored internal AI usage guidelines.",
      tech: ["LangChain", "Gemini", "OpenAI", "RAG", "SQL", "Python", "LLM Agents", "ETL"]
    },
    {
      title: "Manufacturing Engineering Intern",
      company: "Shock Tech Inc, Mahwah, NJ",
      period: "12/2023 - 09/2025",
      description: "Developed a centralized RPA test-data pipeline, converting raw material readings into structured Excel databases used by engineering & management. Built Python + VBA automation for cleaning, parsing, feature extraction, and reporting, reducing processing time by 60%. Performed daily RPA testing and created data-driven dashboards for vibration-isolator mechanical performance. Automated manual workflows to improve accuracy, repeatability, and audit readiness.",
      tech: ["Python", "Excel/VBA", "Pandas", "Data Pipelines", "Feature Extraction", "Dashboards"]
    }
  ],

  education: {
    school: "New Jersey Institute of Technology (NJIT)",
    college: "Ying Wu College of Computing",
    location: "Newark, NJ",
    major: "General Engineering/Computer Science",
    graduation: "May 2027",
    athletics: "Former NCAA Division 1 Track and Field athlete (2 years)"
  },

  faq: [
    {
      question: "What's your ML/AI experience?",
      answer: "I've built production ML systems including clinical patient risk prediction (XGBoost, SHAP interpretability), NLP-based complaint classification (LLM agents, Gemini), and automated deal-scoring pipelines (Random Forest). I work across the full ML lifecycle: data engineering, feature engineering, model training, evaluation, and deployment."
    },
    {
      question: "What ML technologies do you specialize in?",
      answer: "PyTorch, TensorFlow, and scikit-learn for model development. XGBoost for gradient boosting, SHAP for model interpretability. LangChain and RAG for LLM applications. Pandas/NumPy for data processing, Streamlit for ML dashboards, and SQLite/MySQL for data storage."
    },
    {
      question: "Tell me about your AI Clinical Triage project?",
      answer: "Built an ML system predicting 24-hour patient deterioration using MIMIC-IV clinical dataset. Implemented preprocessing pipelines, engineered clinical features (vitals trends, lab scores), and trained multiple models (XGBoost, Random Forest). Added SHAP interpretability and deployed a Streamlit dashboard for clinicians to visualize risk scores and key factors."
    },
    {
      question: "What's your experience with LLMs and NLP?",
      answer: "At MAC Products, I built a production complaint classification system using Gemini LLM with multi-step reasoning. Implemented entity extraction, automated deduplication, and thread merging. Also experienced with LangChain, RAG architectures, and LLM agent workflows for document retrieval and compliance review."
    },
    {
      question: "How did athletics shape your engineering mindset?",
      answer: "As a former NCAA Division 1 Track and Field athlete at NJIT (2 years), I developed excellent time management and discipline. The competitive mindset translates directly to ML challenges—iterating on models, optimizing hyperparameters, and pushing for better performance metrics through systematic improvement."
    },
    {
      question: "What drives your passion for ML?",
      answer: "I love building intelligent systems that learn from data and make accurate predictions. There's something powerful about taking messy real-world data (patient vitals, customer complaints, market listings) and transforming it into actionable insights through well-engineered ML pipelines."
    }
  ]
};

export const resumeUrl = "/resume.docx";
