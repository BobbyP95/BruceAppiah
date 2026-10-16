export const PAGES = ["home", "experience", "projects", "skills", "contact"] as const;
export type PageId = (typeof PAGES)[number];
export const DEFAULT_PAGE: PageId = "home";
export const PAGE_LABELS: Record<PageId, string> = {
  home: "Home",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
};
