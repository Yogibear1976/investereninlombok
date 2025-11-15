import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "awareness training platform",
      href: "/awareness-training",
    },
    {
      title: "over ons",
      href: "/over-ons",
    },
    {
      title: "contact",
      href: "/contact-me",
    },
  ],
  sidebarNav: [
    {
      title: "Linkbits",
      items: [
        {
          title: "HubSpot Analyse",
          href: "/hubspot-analysis",
          items: [],
        },
        {
          title: "HubSpot Onboarding",
          href: "/hubspot-onboarding",
          items: [],
        },
        {
          title: "HubSpot Consulting",
          href: "/hubspot-consulting",
          items: [],
        },
        {
          title: "HubSpot Websites",
          href: "/hubspot-websites",
          items: [],
        },
      ],
    },
  ],
};
