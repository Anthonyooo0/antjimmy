export const siteConfig = {
  name: "Anthony Jimenez",
  role: "Software Engineer(Full-Stack)",
  location: "United States",
  email: "tj.jimenez03@gmail.com",
  phone: "201-230-4890",
  tagline: "Results-driven engineer who builds scrapers, automations, and ML-powered tools that remove manual work and surface insights fast.",
  description: "Passionate about turning messy real-world data into simple, reliable systems. Ship small, iterate quickly, and measure outcomes.",
  
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
      category: "Languages",
      items: [
        { name: "Python", icon: "code" },
        { name: "JavaScript", icon: "code" },
        { name: "Node.js", icon: "server" },
        { name: "SQL", icon: "database" },
        { name: "HTML/CSS", icon: "layout" },
        { name: "C/C++", icon: "code" },
        { name: "Bash", icon: "terminal" },
      ]
    },
    {
      category: "Frameworks & Tools", 
      items: [
        { name: "Playwright", icon: "bot" },
        { name: "Selenium", icon: "bot" },
        { name: "PyTorch", icon: "brain" },
        { name: "TensorFlow", icon: "brain" },
        { name: "Pandas", icon: "chart" },
        { name: "NumPy", icon: "calculator" },
        { name: "Matplotlib", icon: "chart" },
        { name: "scikit-learn", icon: "brain" },
      ]
    },
    {
      category: "Databases & DevOps",
      items: [
        { name: "SQLite", icon: "database" },
        { name: "MongoDB", icon: "database" },
        { name: "MySQL", icon: "database" },
        { name: "Git", icon: "git-branch" },
        { name: "Linux", icon: "terminal" },
        { name: "VS Code", icon: "code" },
        { name: "IntelliJ", icon: "code" },
      ]
    }
  ],

  projects: [
    {
      title: "V8 Engine Deal Finder",
      description: "End-to-end ML system that scrapes listings (Craigslist, FB Marketplace, OfferUp, eBay), deduplicates to SQLite, engineers features, and scores deal quality with Random Forest; sends Discord/email alerts on schedule.",
      stack: ["Python", "Playwright", "Selenium", "Pandas", "SQLite", "scikit-learn", "Discord webhooks"],
      image: "/projects/v8-deal-finder.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/anthonyooo0/v8-deal-finder",
    },
    {
      title: "PDF Email Automation & OCR", 
      description: "Monitors inbox, downloads PDF attachments, and auto-extracts tables (scanned or digital) with OCR; logs structured rows to Excel/CSV—no manual data entry required.",
      stack: ["Python", "pytesseract", "pdf2image", "pandas", "openpyxl", "IMAP"],
      image: "/projects/pdf-automation.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/anthonyooo0/pdf-email-automation",
    },
    {
      title: "LinkedIn Easy Apply Bot",
      description: "State-machine flow applies to internships at 5–10 jobs/min, skips long/external forms, and logs each submission for review with intelligent error handling.",
      stack: ["Python", "Playwright", "CSV logging", "Error handling"],
      image: "/projects/linkedin-bot.jpg", 
      liveUrl: "",
      githubUrl: "https://github.com/anthonyooo0/linkedin-apply-bot",
    },
    {
      title: "Manufacturing Automation Tools",
      description: "Python automations for production data flows and Excel/VBA isolator matching tool that cut 8-hour manual task to seconds. Includes 3D-printed jigs design.",
      stack: ["Python", "Excel/VBA", "SolidWorks", "Manufacturing"],
      image: "/projects/manufacturing-tools.jpg",
      liveUrl: "", 
      githubUrl: "https://github.com/anthonyooo0/manufacturing-automation",
    }
  ],

  about: {
    bio: "Results-driven Software Engineer specializing in full-stack development and machine learning. I build scrapers, automations, and ML-powered tools that eliminate manual work and surface insights quickly. Currently pursuing General Engineering/Computer Science at NJIT while working as CTO & Co-Founder at Reminous and Manufacturing Engineering Intern at Shock Tech Inc. NCAA Division 1 Track and Field athlete with a passion for turning complex technical challenges into simple, reliable systems.",
    metrics: [
      { label: "repetitive tasks automated", value: "10+" },
      { label: "Time Saved", value: "24hrs → seconds" },
      { label: "Technologies", value: "15+" },
      { label: "Current Year", value: "Junior @ NJIT" },
    ]
  },

  experience: [
    {
      title: "AI Software Engineer Intern",
      company: "MAC Products, Kearny, NJ",
      period: "2024 - 2025",
      description: "Built and refined GPT-based automations for quoting, purchasing, and engineering workflows. Integrated agents with ERP, Microsoft 365, and CRM systems through REST APIs. Partnered with teams to identify high-ROI processes and track performance improvements. Produced documentation, prototypes, and presentations for leadership review.",
      tech: ["Python", "GPT", "REST APIs", "ERP", "Microsoft 365", "CRM"]
    },
    {
      title: "CTO & Co-Founder",
      company: "Reminous, Orlando, FL - Remote",
      period: "05/2025 - Current",
      description: "Lead software strategy for marketing automation startup. Built Python scripts to automate lead collection, database syncing, and outreach. Created internal dashboards for sales tracking and collaboration. Coordinate product requirements with design and marketing across weekly sprints.",
      tech: ["Python", "Pandas", "SQLite", "Dash", "Git", "Linux"]
    },
    {
      title: "Manufacturing Engineering Intern",
      company: "Shock Tech Inc, Mahwah, NJ",
      period: "12/2024 - Current", 
      description: "Created Python automations to streamline production data flows and analysis. Built Excel/VBA tool for isolator matching, cutting 8-hour manual task to seconds. Designed 3D-printed jigs in SolidWorks; supported waterjet/laser automation setups.",
      tech: ["Python", "Excel/VBA", "SolidWorks", "Git"]
    },
    {
      title: "Testing Engineering Intern",
      company: "Shock Tech Inc, Mahwah, NJ",
      period: "12/2023 – 12/2024",
      description: "Operated Instron/LDS systems for tensile, compression, and failure testing on aerospace grade elastomers. Automated analytics for 2,000+ samples via Excel macros and Python, generating summarized test reports. Converted raw equipment exports into concise engineering insights.",
      tech: ["Excel macros", "Python", "Matplotlib", "Pandas"]
    }
  ],

  education: {
    school: "New Jersey Institute of Technology (NJIT)",
    college: "Ying Wu College of Computing",
    location: "Newark, NJ",
    major: "General Engineering/Computer Science",
    graduation: "May 2027",
    athletics: "NCAA Division 1 Track and Field athlete"
  },

  faq: [
    {
      question: "What's your engineering approach?",
      answer: "I focus on building scrapers, automations, and ML-powered tools that remove manual work. I ship small, iterate quickly, and measure outcomes (speed, accuracy, cost) to guide next steps."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Python, JavaScript/Node.js, SQL for core development. Playwright/Selenium for automation, PyTorch/TensorFlow for ML, and various databases. I'm business-oriented and choose tools based on impact."
    },
    {
      question: "Tell me about your automation projects?",
      answer: "I've automated an 8-hour isolator-matching task to seconds, processed 2,000+ material samples with automated analytics, and built end-to-end ML pipelines for deal scoring with real-time alerts."
    },
    {
      question: "What's your experience with ML and data?",
      answer: "I build complete ML systems - from web scraping and data collection to feature engineering, model training, and automated alerting. My V8 Engine Deal Finder is a full end-to-end example."
    },
    {
      question: "How do you balance work and athletics?",
      answer: "As a NCAA Division 1 Track and Field athlete at NJIT, I've learned excellent time management and discipline. The competitive mindset translates well to engineering challenges and startup work."
    },
    {
      question: "What drives your passion for automation?",
      answer: "I love turning messy real-world data into simple, reliable systems. There's something satisfying about eliminating repetitive manual work and letting people focus on higher-value activities."
    }
  ]
};

export const resumeUrl = "/resume.docx";
