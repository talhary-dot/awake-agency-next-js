import React, { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { WandSparkles, Zap, Target } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";

function CounterItem({
  target,
  title,
  showBorder,
}: {
  target: number;
  title: string;
  showBorder?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="relative 2xl:px-24 px-16 md:py-8 py-4">
      <h2 className="2xl:text-9xl md:text-7xl text-5xl font-medium tracking-tight">
        <sup className="text-3xl md:text-5xl font-normal">+</sup>
        {count}
      </h2>
      <p className="mt-2 text-muted-foreground">{title}</p>
      {showBorder && (
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-border" />
      )}
    </div>
  );
}

export const AboutSection: React.FC = () => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case "WandSparkles":
        return <WandSparkles className="size-6 sm:size-8 lg:size-10 shrink-0" />;
      case "Zap":
        return <Zap className="size-6 sm:size-8 lg:size-10 shrink-0" />;
      case "Target":
        return <Target className="size-6 sm:size-8 lg:size-10 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section id="aboutus">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col lg:gap-16 gap-5">
            <div className="flex flex-col items-center justify-center text-center gap-5">
              <h2 className="max-w-6xl">
                <TextGenerateEffect words="Crafting exceptional, well experienced & technology driven strategies to drive impactful results with" />
              </h2>

              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
                {siteConfig.aboutBadges.map((badge, idx) => (
                  <motion.div
                    key={badge.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.15 }}
                    className={`flex items-center gap-3 py-2 px-6 rounded-full ${badge.bgClass} ${badge.textClass}`}
                  >
                    {getBadgeIcon(badge.icon)}
                    <span className="text-4xl font-instrument-serif italic font-normal">
                      {badge.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-col md:flex md:flex-row justify-center items-center text-center">
              <CounterItem target={40} title="Total Projects Completed" showBorder />
              <CounterItem target={15} title="Years of Experience" showBorder />
              <CounterItem target={12} title="Design Awards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
