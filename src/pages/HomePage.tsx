import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CustomerStoriesSection } from "@/components/sections/CustomerStoriesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { CTASection } from "@/components/sections/CTASection";

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <BrandMarquee />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TeamSection />
      <CustomerStoriesSection />
      <PricingSection />
      <FAQSection />
      <AwardsSection />
      <CTASection />
    </main>
  );
};
