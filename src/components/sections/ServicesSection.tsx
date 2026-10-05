import React from "react";
import { motion } from "motion/react";
import { SwatchBook, Image as ImageIcon, WandSparkles, ChartColumn, AppWindowMac } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AwakeButton } from "@/components/common/AwakeButton";
import { siteConfig } from "@/config/site";

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "SwatchBook":
        return <SwatchBook className={className} size={40} strokeWidth={1} />;
      case "Image":
        return <ImageIcon className={className} size={40} strokeWidth={1} />;
      case "WandSparkles":
        return <WandSparkles className={className} size={40} strokeWidth={1} />;
      case "ChartColumn":
        return <ChartColumn className={className} size={40} strokeWidth={1} />;
      case "AppWindowMac":
        return <AppWindowMac className={className} size={40} strokeWidth={1} />;
      default:
        return null;
    }
  };

  return (
    <section id="services">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <div className="max-w-md text-center">
                <h2>
                  <TextGenerateEffect words="Where innovation meets" />{" "}
                  <TextGenerateEffect
                    words="aesthetics"
                    delay={0.5}
                    className="font-instrument-serif italic font-normal"
                  />
                </h2>
              </div>

              {/* 5 Service Cards */}
              <div className="w-full">
                <div className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
                  {siteConfig.services.map((service, idx) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="h-full"
                    >
                      <div
                        className={`flex h-full flex-col p-8 rounded-2xl gap-8 ${service.bgClass} transition-transform hover:-translate-y-1 duration-300`}
                      >
                        <div className="flex shrink-0">
                          {getServiceIcon(service.icon, service.textClass)}
                        </div>
                        <div className="mt-auto">
                          <h3 className={`text-2xl leading-tight font-medium ${service.textClass}`}>
                            {service.title}
                            <br />
                            {service.subtitle}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="flex flex-col gap-6 xl:flex-row bg-dark_black items-center justify-between dark:bg-white/5 py-8 px-7 sm:px-12 rounded-3xl w-full">
              <h4 className="text-white text-center xl:text-left text-2xl font-medium leading-snug">
                See Our Work in Action.
                <br />
                Start Your Creative Journey with Us!
              </h4>

              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <AwakeButton href="/contact" variant="white">
                  Let’s Collaborate
                </AwakeButton>
                <AwakeButton href="/#work" variant="outline">
                  Get Started
                </AwakeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
