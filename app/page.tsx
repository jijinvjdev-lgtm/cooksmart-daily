import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { organizationSchema, websiteSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Validate Your Meal Planning Idea",
  description:
    "Join the CookSmart waitlist to validate interest in a smarter meal-planning product before launch.",
};

export default function Page() {
  const structuredData = [organizationSchema, websiteSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}
