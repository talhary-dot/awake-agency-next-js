export interface NavItem {
  label: string;
  href: string;
}

export interface BrandItem {
  name: string;
  lightIcon: string;
  darkIcon: string;
}

export interface StatItem {
  count: number;
  title: string;
}

export interface BadgeItem {
  icon: "WandSparkles" | "Zap" | "Target";
  title: string;
  bgClass: string;
  textClass: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  icon: "SwatchBook" | "Image" | "WandSparkles" | "ChartColumn" | "AppWindowMac";
  bgClass: string;
  textClass: string;
}

export interface ProjectItem {
  title: string;
  image: string;
  link: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter: string;
  linkedin: string;
}

export interface PricingPlan {
  name: string;
  badge: string;
  description: string;
  price: string;
  period: string;
  bgClass: string;
  textColor: string;
  subTextColor: string;
  buttonVariant: "white" | "dark";
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AwardItem {
  title: string;
  description: string;
  year: string;
  link: string;
  lightIcon: string;
  darkIcon: string;
}

export const siteConfig = {
  name: "Awake Agency",
  description: "Building bold brands with thoughtful design",
  navItems: [
    { label: "About us", href: "/#aboutus" },
    { label: "Services", href: "/#services" },
    { label: "Work", href: "/#work" },
    { label: "Team", href: "/#team" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Awards", href: "/#awards" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  brands: [
    {
      name: "Adobe",
      lightIcon: "/images/home/brand/brand-icon-1.svg",
      darkIcon: "/images/home/brand/brand-darkicon-1.svg",
    },
    {
      name: "Figma",
      lightIcon: "/images/home/brand/brand-icon-2.svg",
      darkIcon: "/images/home/brand/brand-darkicon-2.svg",
    },
    {
      name: "Shopify",
      lightIcon: "/images/home/brand/brand-icon-3.svg",
      darkIcon: "/images/home/brand/brand-darkicon-3.svg",
    },
    {
      name: "Dribble",
      lightIcon: "/images/home/brand/brand-icon-4.svg",
      darkIcon: "/images/home/brand/brand-darkicon-4.svg",
    },
    {
      name: "Webflow",
      lightIcon: "/images/home/brand/brand-icon-5.svg",
      darkIcon: "/images/home/brand/brand-darkicon-5.svg",
    },
  ] as BrandItem[],

  aboutBadges: [
    {
      icon: "WandSparkles",
      title: "Creativity",
      bgClass: "bg-badge-purple-bg",
      textClass: "text-badge-purple-text",
    },
    {
      icon: "Zap",
      title: "Innovation",
      bgClass: "bg-badge-sky-bg",
      textClass: "text-badge-sky-text",
    },
    {
      icon: "Target",
      title: "Strategy",
      bgClass: "bg-badge-orange-bg",
      textClass: "text-badge-orange-text",
    },
  ] as BadgeItem[],

  stats: [
    { count: 40, title: "Total Projects Completed" },
    { count: 15, title: "Years of Experience" },
    { count: 12, title: "Design Awards" },
  ] as StatItem[],

  services: [
    {
      title: "Brand",
      subtitle: "Strategy",
      icon: "SwatchBook",
      bgClass: "bg-badge-purple-bg",
      textClass: "text-badge-purple-text",
    },
    {
      title: "Digital",
      subtitle: "Marketing",
      icon: "Image",
      bgClass: "bg-badge-sky-bg",
      textClass: "text-badge-sky-text",
    },
    {
      title: "UI/UX",
      subtitle: "Design",
      icon: "WandSparkles",
      bgClass: "bg-badge-orange-bg",
      textClass: "text-badge-orange-text",
    },
    {
      title: "Analytics &",
      subtitle: "Reporting",
      icon: "ChartColumn",
      bgClass: "bg-badge-lime-bg",
      textClass: "text-badge-lime-text",
    },
    {
      title: "Web",
      subtitle: "Development",
      icon: "AppWindowMac",
      bgClass: "bg-badge-red-bg",
      textClass: "text-badge-red-text",
    },
  ] as ServiceItem[],

  projects: [
    {
      title: "FlowBank",
      image: "/images/home/onlinePresence/online_img_1.jpg",
      link: "https://www.framer.com/@wrap-pixel/",
      tags: ["UX Research", "Interface Design"],
    },
    {
      title: "Academy.co",
      image: "/images/home/onlinePresence/online_img_2.jpg",
      link: "https://www.framer.com/@wrap-pixel/",
      tags: ["Product Design", "Interaction Design"],
    },
    {
      title: "Genome",
      image: "/images/home/onlinePresence/online_img_3.jpg",
      link: "https://www.framer.com/@wrap-pixel/",
      tags: ["Brand identity design", "UX Research"],
    },
    {
      title: "Hotto",
      image: "/images/home/onlinePresence/online_img_4.jpg",
      link: "https://www.framer.com/@wrap-pixel/",
      tags: ["Visual Storytelling", "Web & Mobile Design"],
    },
  ] as ProjectItem[],

  team: [
    {
      name: "Logan Dang",
      role: "WordPress Developer",
      image: "/images/home/creative/creative_img_1.png",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
    {
      name: "Ana Belić",
      role: "Social Media Specialist",
      image: "/images/home/creative/creative_img_2.png",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
    {
      name: "Brian Hanley",
      role: "Product Designer",
      image: "/images/home/creative/creative_img_3.png",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
    {
      name: "Darko Stanković",
      role: "UI Designer",
      image: "/images/home/creative/creative_img_4.png",
      twitter: "https://x.com/",
      linkedin: "https://in.linkedin.com/",
    },
  ] as TeamMember[],

  pricing: [
    {
      name: "Starter",
      badge: "Starter",
      description: "For companies who need design support. One request at a time",
      price: "$2500",
      period: "/month",
      bgClass: "bg-pale-yellow",
      textColor: "text-dark_black",
      subTextColor: "text-dark_black/60",
      buttonVariant: "white",
      features: [
        "Design Updates Every 2 Days",
        "Mid-level Designer",
        "SEO optimization",
        "Monthly analytics",
        "2x Calls Per Month",
        "License free assets",
      ],
    },
    {
      name: "Pro",
      badge: "Pro",
      description: "2x the speed. Great for growing companies with high demands",
      price: "$4500",
      period: "/month",
      bgClass: "bg-dark_black text-white dark:bg-white/10",
      textColor: "text-white",
      subTextColor: "text-white/60",
      buttonVariant: "white",
      features: [
        "Design Updates Daily",
        "Senior-level Designer",
        "SEO optimization",
        "Monthly analytics",
        "Unlimited Calls Per Month",
        "License free assets",
      ],
    },
  ] as PricingPlan[],

  faqs: [
    {
      question: "What services does Awake Agency offer?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      question: "How is pricing structured at Awake Agency?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      question: "How often will I receive updates on my project?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
    {
      question: "Can I upgrade or customize my plan as my business grows?",
      answer: "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
    },
  ] as FAQItem[],

  awards: [
    {
      title: "Framer Awards",
      description: "Celebrated for cutting-edge interaction design and seamless user experiences.",
      year: "2024",
      link: "https://www.framer.com/@wrap-pixel/",
      lightIcon: "/images/home/achievement/framer_award.svg",
      darkIcon: "/images/home/achievement/dark_framer_award.svg",
    },
    {
      title: "Dribbble Awards",
      description: "Recognized for creative excellence and innovative design solutions",
      year: "2023",
      link: "https://dribbble.com/wrappixel",
      lightIcon: "/images/home/achievement/dribble_award.svg",
      darkIcon: "/images/home/achievement/dribble_award.svg",
    },
    {
      title: "awwwards Awards",
      description: "Honored with the Best Website Design for creativity, usability, and innovation.",
      year: "2022",
      link: "https://www.framer.com/@wrap-pixel/",
      lightIcon: "/images/home/achievement/awward_award.svg",
      darkIcon: "/images/home/achievement/dark_awward_award.svg",
    },
  ] as AwardItem[],

  contact: {
    address: "81 Rivington Street London EC2A 3AY",
    email: "hello@awake.agency",
    phone: "0105 192 3556",
  },

  socials: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      lightIcon: "/images/home/footerSocialIcon/twitter.svg",
      darkIcon: "/images/home/footerSocialIcon/twitter_dark.svg",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in",
      lightIcon: "/images/home/footerSocialIcon/linkedin.svg",
      darkIcon: "/images/home/footerSocialIcon/linkedin_dark.svg",
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com",
      lightIcon: "/images/home/footerSocialIcon/dribble.svg",
      darkIcon: "/images/home/footerSocialIcon/dribble_dark.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      lightIcon: "/images/home/footerSocialIcon/instagram.svg",
      darkIcon: "/images/home/footerSocialIcon/instagram_dark.svg",
    },
  ],
};
