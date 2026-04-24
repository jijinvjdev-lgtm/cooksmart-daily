"use client";

import FinalCTA from "@/components/landing/FinalCTA";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import Problem from "@/components/landing/Problem";
import Signup from "@/components/landing/Signup";
import Solution from "@/components/landing/Solution";
import StickyCTA from "@/components/landing/StickyCTA";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <Signup />
        <FinalCTA />
      </main>
      <StickyCTA />
    </div>
  );
}
