import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-md text-center mx-auto">
              <h2>
                <TextGenerateEffect words="Got questions? We’ve got" />{" "}
                <TextGenerateEffect
                  words="answers"
                  delay={0.5}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="flex flex-col max-w-4xl mx-auto w-full gap-4">
              {siteConfig.faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="p-6 border border-border rounded-2xl flex flex-col transition-colors duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex items-center justify-between w-full text-left gap-4 cursor-pointer outline-none group"
                    >
                      <h4 className="text-foreground text-lg md:text-xl font-medium m-0">
                        {faq.question}
                      </h4>
                      <Plus
                        className={cn(
                          "w-6 h-6 shrink-0 transition-transform duration-300 text-foreground",
                          isOpen && "rotate-45"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-base mt-4 pt-3 border-t border-border/60 leading-relaxed m-0">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
