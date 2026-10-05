import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-3xl text-center mx-auto">
              <h2>
                <TextGenerateEffect words="Accolades and achievements celebration our" />{" "}
                <TextGenerateEffect
                  words="design excellence"
                  delay={0.6}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {siteConfig.awards.map((award, idx) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: "10%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={award.link}
                    className="block h-full no-underline"
                  >
                    <div className="group flex flex-col justify-between gap-11 xl:gap-16 border border-dark_black/10 dark:border-white/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5 hover:border-purple_blue/50 transition-all duration-300 h-full">
                      <div>
                        <img
                          alt="icon"
                          loading="lazy"
                          width={32}
                          height={32}
                          className="dark:hidden h-8 w-8"
                          src={award.lightIcon}
                        />
                        <img
                          alt="icon"
                          loading="lazy"
                          width={32}
                          height={32}
                          className="dark:block hidden h-8 w-8"
                          src={award.darkIcon}
                        />
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-muted-foreground text-sm font-medium m-0">
                          {award.title}
                        </p>
                        <h3 className="group-hover:text-purple_blue text-2xl font-medium transition-colors m-0 leading-snug">
                          {award.description}
                        </h3>
                      </div>

                      <p className="text-muted-foreground text-sm m-0">{award.year}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
