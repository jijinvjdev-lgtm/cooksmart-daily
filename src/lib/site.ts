export const siteConfig = {
  name: "CookSmart Daily",
  shortName: "CookSmart",
  description:
    "CookSmart helps busy households validate demand for a smarter meal-planning app with daily meal ideas, grocery lists, and family-friendly planning.",
  keywords: [
    "meal planning app",
    "daily meal ideas",
    "grocery list planner",
    "family meal planning",
    "cooksmart",
    "kitchen productivity",
    "waitlist landing page",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.shortName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.shortName,
  },
};
