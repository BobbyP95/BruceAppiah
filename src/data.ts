/** All portfolio content lives here so components stay presentational. */

export const NAME = "Bobby Bruce-Appiah";
export const EMAIL = "bobby.bp95@gmail.com";
export const PHONE = { label: "+233 557 372 483", href: "tel:+233557372483" };

export interface SheetCell { ref: string; formula: string; text: string }

const yearsExperience = new Date().getFullYear() - 2019;

/** Rows of the "spreadsheet" on the home page: [column A, column B]. Row 1 is the header. */
export const SHEET_ROWS: [SheetCell, SheetCell][] = [
  [
    { ref: "A1", formula: '=LABEL("Field")', text: "Field" },
    { ref: "B1", formula: '=LABEL("Value")', text: "Value" },
  ],
  [
    { ref: "A2", formula: '=LABEL("Role")', text: "Role" },
    { ref: "B2", formula: '=PROFILE("Role")', text: "Operations Manager, Automation & Data Systems" },
  ],
  [
    { ref: "A3", formula: '=LABEL("Tools")', text: "Tools" },
    { ref: "B3", formula: '=TEXTJOIN(", ",TRUE,Skills!A:A)', text: "Excel, Google Sheets, Apps Script, SQL, Power BI" },
  ],
  [
    { ref: "A4", formula: '=LABEL("Experience")', text: "Experience" },
    { ref: "B4", formula: '=YEAR(TODAY())-2019&" years in data operations"', text: `${yearsExperience} years in data operations` },
  ],
  [
    { ref: "A5", formula: '=LABEL("Hours")', text: "Hours" },
    { ref: "B5", formula: '=XLOOKUP("US",Zones!A:A,Zones!B:B)', text: "Available for all US time zones (GMT+0)" },
  ],
];
export const DEFAULT_CELL = "B2";

export const WHAT_I_DO = [
  { title: "Automate reporting", text: "Google Sheets and Apps Script workflows that replace manual copy-and-paste." },
  { title: "Build dashboards", text: "KPI dashboards in Excel, Sheets and Power BI that show team performance as it happens." },
  { title: "Keep data clean", text: "Validation rules and cleaning routines that cut errors and raise reporting accuracy." },
];

export interface Job { when: string; title: string; company: string; bullets?: string[] }

export const JOBS: Job[] = [
  {
    when: "2023 – Present",
    title: "Operations Manager, Automation & Data Systems",
    company: "BPO Homes Inc.",
    bullets: [
      "Designed and automated operational spreadsheets and reporting systems with Google Sheets and Apps Script.",
      "Built KPI dashboards and real-time reporting tools that improved team visibility and performance tracking.",
      "Reduced manual data processing and built data validation systems that increased reporting accuracy and reduced errors.",
      "Created scalable workflows for lead tracking, reporting and task monitoring.",
      "Worked with teams to find inefficiencies and put process improvements in place.",
    ],
  },
  {
    when: "2024",
    title: "WordPress Web Developer",
    company: "Wester Interdigital Systems",
    bullets: [
      "Developed and managed an e-commerce website with WordPress and WooCommerce.",
      "Customized the UI/UX to improve user experience and performance.",
    ],
  },
  {
    when: "2019 – 2023",
    title: "Engineer & Customer Support (Data Operations)",
    company: "Peacefield Link LTD",
    bullets: [
      "Managed data reporting and analysis for utility operations.",
      "Resolved technical and data issues and improved reporting accuracy.",
      "Supported backend operations through structured data tracking.",
    ],
  },
];

export const EDUCATION = [
  { title: "Full-Stack Web Development", school: "AmaliTech, 2023" },
  { title: "BBA, Banking & Finance", school: "Methodist University, 2018" },
];

export interface Project { title: string; bullets: string[]; tags: string[]; codeSamples?: boolean }

export const PROJECTS: Project[] = [
  {
    title: "Spreadsheet automation & reporting systems",
    bullets: [
      "Automated spreadsheet systems for reporting, validation and workflow tracking.",
      "Dynamic dashboards for operational monitoring and KPI analysis.",
      "Automated data-cleaning and reporting workflows built with Apps Script.",
    ],
    tags: ["Google Sheets", "Apps Script", "Excel"],
  },
  {
    title: "API & data integration",
    bullets: [
      "Integrated APIs for weather and country data visualization projects.",
      "Reporting tools that retrieve and display data automatically.",
    ],
    tags: ["JavaScript", "APIs"],
  },
  {
    title: "Front-end & programming",
    bullets: [
      "Responsive web applications built with React, JavaScript, HTML, CSS and TypeScript.",
      "A Python-based Snake game.",
    ],
    tags: ["React", "TypeScript", "HTML", "CSS", "Python"],
    codeSamples: true,
  },
];

export const SKILL_GROUPS = [
  { title: "Excel & Google Sheets", items: ["Pivot tables & charts", "VLOOKUP", "XLOOKUP", "INDEX/MATCH", "Conditional formatting", "Data cleaning & validation", "Advanced formulas"] },
  { title: "Automation & data", items: ["Google Apps Script", "SQL & database queries", "Workflow automation", "Reporting automation"] },
  { title: "Analytics", items: ["Power BI", "Dashboards", "KPI tracking", "Data accuracy & quality control"] },
  { title: "Web", items: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "WordPress"] },
  { title: "Strengths", items: ["Problem-solving", "Systems thinking", "Process optimization", "Operational leadership"] },
];
