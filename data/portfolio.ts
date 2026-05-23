export type NavItem = {
  label: string;
  href: string;
};

export type HeroData = {
  name: string;
  title: string;
  badge: string;
  intro: string;
  highlights: string[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export type SummaryItem = {
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export type ExpertiseItem = {
  title: string;
  description: string;
  outcomes: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
};

export type CertificationItem = {
  name: string;
  status: string;
  description: string;
};

export type ContactData = {
  phone: string;
  email: string;
  address: string;
};

export const portfolioData: {
  navigation: NavItem[];
  hero: HeroData;
  summary: SummaryItem[];
  skillGroups: SkillGroup[];
  experience: ExperienceItem[];
  expertise: ExpertiseItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  contact: ContactData;
} = {
  navigation: [
    { label: "Summary", href: "#summary" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Expertise", href: "#expertise" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Sharif Mustafa",
    title: "QA Automation Engineer",
    badge: "Active Public Trust Clearance",
    intro:
      "QA Automation Engineer with experience supporting federal, banking, and healthcare platforms through Selenium automation, API validation, database testing, accessibility compliance, and Agile delivery practices.",
    highlights: [
      "Selenium WebDriver, Java, TestNG, Maven, Cucumber BDD",
      "API testing with Postman and REST Assured",
      "SQL Server, Oracle, Section 508, HIPAA, GLBA",
    ],
    primaryCta: {
      label: "Download Resume",
      href: "/Sharif-Mustafa-Resume.pdf",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
  },
  summary: [
    {
      title: "Agile Delivery and Quality Ownership",
      description:
        "Experienced in Agile SDLC execution with hands-on participation in sprint planning, backlog grooming, daily stand-ups, retrospectives, and UAT support to keep delivery aligned, transparent, and on schedule.",
    },
    {
      title: "Automation and Test Engineering",
      description:
        "Builds and maintains hybrid, data-driven, and keyword-driven automation frameworks using Selenium WebDriver, Java, TestNG, Maven, and Cucumber BDD to improve regression coverage and reduce manual effort.",
    },
    {
      title: "Functional, API, and Database Validation",
      description:
        "Covers end-to-end quality assurance across manual functional testing, Postman and REST API verification, and backend validation with SQL queries against SQL Server and Oracle environments.",
    },
    {
      title: "Compliance-Focused QA in Regulated Domains",
      description:
        "Supports accessibility and regulatory requirements through Section 508 validation and testing awareness shaped by HIPAA, GLBA, and NCUA-regulated environments in federal, financial, and healthcare programs.",
    },
  ],
  skillGroups: [
    {
      category: "Automation",
      skills: [
        "Selenium WebDriver",
        "TestNG",
        "JUnit",
        "Cucumber BDD",
        "Hybrid Frameworks",
        "Data-Driven Frameworks",
        "Keyword-Driven Frameworks",
      ],
    },
    {
      category: "Programming",
      skills: ["Java", "SQL", "Gherkin", "HTML", "XPath", "CSS Selectors", "Git", "GitHub"],
    },
    {
      category: "API Testing",
      skills: ["Postman", "REST Assured", "RESTful API Validation", "Authentication Testing", "Error Handling Verification"],
    },
    {
      category: "Database",
      skills: ["SQL Server", "Oracle", "Data Integrity Validation", "Backend Data Verification"],
    },
    {
      category: "CI/CD",
      skills: ["Jenkins", "Maven", "Continuous Integration Pipelines", "Scheduled Automation Runs"],
    },
    {
      category: "Test Management",
      skills: ["JIRA", "ServiceNow", "Azure DevOps", "Test Plans", "Test Strategy", "Defect Triage", "Status Reporting"],
    },
    {
      category: "Accessibility",
      skills: ["Section 508 Compliance", "WAVE", "AXE", "JAWS", "NVDA", "Usability Validation"],
    },
    {
      category: "Methodologies",
      skills: ["Agile/Scrum", "SDLC", "Sprint Planning", "Backlog Grooming", "Retrospectives", "UAT", "Cross-Functional Collaboration"],
    },
  ],
  experience: [
    {
      company: "United States Department of Transportation",
      role: "QA Automation Engineer",
      period: "December 2022 - Present",
      location: "Washington, D.C.",
      bullets: [
        "Participate across the full Agile lifecycle, including sprint planning, retrospectives, backlog grooming, and release-readiness coordination.",
        "Design and execute functional, integration, regression, UAT, and performance-related test coverage for federal application modules.",
        "Author test strategy, test plan, and test summary artifacts that improve onboarding, transparency, and quality traceability.",
        "Architect and refine a hybrid Selenium WebDriver framework with Java, Maven, and data-driven and keyword-driven patterns.",
        "Advance BDD adoption with Cucumber feature files and step definitions to improve communication across QA, business, and development teams.",
        "Integrate automation with Jenkins CI pipelines for scheduled executions and faster stability feedback.",
        "Validate REST endpoints with Postman and perform SQL-based backend verification to uncover issues not visible through the UI.",
        "Conduct Section 508 accessibility validation and usability reviews while tracking defects in JIRA and reducing production leakage.",
      ],
    },
    {
      company: "PenFed Credit Union",
      role: "QA Test Engineer",
      period: "September 2019 - November 2022",
      location: "Tysons, Virginia",
      bullets: [
        "Tested online banking and mobile application functionality with strong focus on requirements traceability and member-facing transaction quality.",
        "Executed black box, functional, regression, and UAT scenarios for financial workflows before production release.",
        "Maintained test plans, scripts, and regression suites in Azure DevOps to support knowledge transfer and release readiness.",
        "Built scalable Selenium WebDriver automation frameworks with TestNG and Maven for reusable web testing.",
        "Created data-driven automation for loan applications and account opening flows to expand scenario coverage efficiently.",
        "Validated RESTful banking services through Postman and verified financial accuracy with complex SQL queries against SQL Server.",
        "Managed defects in ServiceNow and delivered QA status reporting through Azure to keep stakeholders informed.",
        "Performed Section 508 and GLBA-aligned testing across regulated banking experiences.",
      ],
    },
    {
      company: "HCA Healthcare",
      role: "QA Analyst",
      period: "April 2018 - August 2019",
      location: "Richmond, Virginia",
      bullets: [
        "Supported Agile delivery for clinical applications through sprint participation, daily stand-ups, and coordinated healthcare testing activities.",
        "Validated business and technical requirements for electronic medical record workflows with attention to HIPAA-sensitive processes.",
        "Executed manual functional, regression, and integration testing across healthcare software platforms used in patient care environments.",
        "Created and maintained detailed test plans, case documentation, and release status reporting for clinical systems.",
        "Tracked defects in JIRA and helped resolve issues affecting healthcare application performance and stability.",
        "Ran scheduled Selenium regression suites and updated existing automation scripts to reflect ongoing application enhancements.",
        "Verified API data exchange with Postman collections and validated Oracle database records with SQL queries.",
        "Performed Section 508 and HIPAA-conscious quality checks in collaboration with technical and clinical stakeholders.",
      ],
    },
  ],
  expertise: [
    {
      title: "Automation Framework Design",
      description:
        "Builds maintainable Selenium-based test architecture using Java, TestNG, Maven, and Cucumber BDD for scalable regression coverage.",
      outcomes: [
        "Hybrid, data-driven, and keyword-driven framework patterns",
        "Stable locator strategy design using XPath and CSS selectors",
        "Regression execution efficiency improvements through automation",
      ],
    },
    {
      title: "API Testing",
      description:
        "Validates service behavior through endpoint verification, authentication checks, negative-path coverage, and response analysis.",
      outcomes: [
        "Postman collection design and execution",
        "REST endpoint validation for banking, healthcare, and federal systems",
        "Earlier defect discovery beyond UI-only test coverage",
      ],
    },
    {
      title: "Database Validation",
      description:
        "Performs backend verification using SQL queries to confirm data accuracy, integrity, and transaction correctness across complex workflows.",
      outcomes: [
        "SQL Server and Oracle validation experience",
        "UI-to-database consistency checks",
        "Detection of critical backend defects and data anomalies",
      ],
    },
    {
      title: "508 Compliance Testing",
      description:
        "Applies accessibility tooling and review practices to help products meet Section 508 standards and support inclusive user experiences.",
      outcomes: [
        "WAVE, AXE, JAWS, and NVDA familiarity",
        "Accessibility and usability validation within regulated environments",
        "Release support for federal accessibility compliance approval",
      ],
    },
    {
      title: "Agile QA Process",
      description:
        "Works closely with analysts, developers, and stakeholders to embed QA throughout planning, execution, reporting, and release readiness.",
      outcomes: [
        "Sprint planning, backlog grooming, and retrospective participation",
        "Defect triage and stakeholder status reporting",
        "Cross-functional communication that keeps acceptance criteria aligned",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Business Administration in Marketing and International Business",
      institution: "North South University",
    },
  ],
  certifications: [
    {
      name: "Certified Scrum Master",
      status: "Recommended / In Progress",
      description:
        "A strong fit for demonstrating Agile facilitation and team collaboration skills in QA and delivery environments.",
    },
    {
      name: "CompTIA Security+",
      status: "Recommended / In Progress",
      description:
        "Supports security awareness for federal, banking, and healthcare systems that require disciplined quality and compliance thinking.",
    },
    {
      name: "ISTQB Certified Tester - Foundation Level",
      status: "Recommended / In Progress",
      description:
        "Adds formal testing methodology recognition that complements hands-on automation and manual QA experience.",
    },
  ],
  contact: {
    phone: "+1 (929) 655-9561",
    email: "sharifmustafa789@gmail.com",
    address: "Brooklyn, New York",
  },
};
