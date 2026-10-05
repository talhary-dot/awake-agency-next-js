import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";

export const WorkSection: React.FC = () => {
  return (
    <section id="work">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <h2>
                <TextGenerateEffect words="How we transformed a small business’s" />{" "}
                <TextGenerateEffect
                  words="online presence"
                  delay={0.6}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 w-full">
              {siteConfig.projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group flex flex-col gap-6 cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      alt={project.title}
                      loading="lazy"
                      width={625}
                      height={410}
                      className="rounded-2xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                    />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/50 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 flex justify-end p-5 transition-opacity duration-300"
                      href={project.link}
                    >
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        ↗
                      </span>
                    </a>
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <h3 className="group-hover:text-purple_blue text-2xl font-medium transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <p
                          key={tag}
                          className="text-sm border border-border w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white dark:hover:bg-white dark:hover:text-dark_black transition-colors m-0"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
