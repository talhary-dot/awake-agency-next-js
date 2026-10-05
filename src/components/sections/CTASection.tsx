import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AwakeButton } from "@/components/common/AwakeButton";

export const CTASection: React.FC = () => {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="py-16 md:py-28 px-6 border border-dark_black/10 dark:border-white/10 rounded-3xl bg-[linear-gradient(90deg,var(--hero-glow-from)_0%,var(--background)_33.23%,var(--background)_65.77%,var(--hero-glow-to)_100%)] dark:bg-white/5 backdrop-blur-2xl transition-colors">
            <motion.div
              initial={{ opacity: 0, y: "15%" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto text-center"
            >
              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
                  <TextGenerateEffect words="Innovative solutions for" />{" "}
                  <TextGenerateEffect
                    words="bold brands"
                    delay={0.5}
                    className="font-instrument-serif italic font-normal"
                  />
                </h2>
                <p className="text-foreground/80 dark:text-foreground/70 max-w-xl text-base md:text-lg">
                  Looking to elevate your brand? We craft immersive experiences that captivate,
                  engage, and make your business unforgettable in every interaction.
                </p>
              </div>

              <AwakeButton href="/contact" variant="dark">
                Let’s Collaborate
              </AwakeButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
