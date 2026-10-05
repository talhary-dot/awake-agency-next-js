import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const CustomerStoriesSection: React.FC = () => {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                <TextGenerateEffect words="What our satisfied customers are saying" />{" "}
                <TextGenerateEffect
                  words="about us"
                  delay={0.6}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="flex flex-col xl:flex-row gap-6">
                {/* Box 1: Ananya Shah story */}
                <motion.div
                  initial={{ opacity: 0, x: -50, y: -50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="p-8 justify-between min-h-[360px] rounded-2xl flex flex-col relative overflow-hidden bg-cover bg-center h-full w-full"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url('/images/home/customerStories/customer_bg_img.jpg')`,
                  }}
                >
                  <span className="text-white/60 uppercase text-sm font-medium tracking-wider">
                    Customer stories
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-white text-2xl lg:text-3xl font-medium">
                      “Awake’s expertise transformed my vision into success!”
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium m-0">Ananya Shah</p>
                      <p className="text-white/60 text-sm font-medium m-0">Founder of Chipsland</p>
                    </div>
                  </div>
                </motion.div>

                {/* Box 2: 91% Stat */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: -50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-between gap-16 xl:max-w-md bg-pale-yellow rounded-2xl p-8 shrink-0"
                >
                  <div>
                    <span className="uppercase text-sm font-medium text-dark_black/60 tracking-wider">
                      Facts &amp; numbers
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-7xl font-medium text-dark_black tracking-tight m-0">91%</h2>
                    <h3 className="text-dark_black text-2xl font-medium leading-snug m-0">
                      Clients recommend our design services.
                    </h3>
                  </div>
                </motion.div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col xl:flex-row gap-6">
                {/* Box 3: Creativity and attention */}
                <motion.div
                  initial={{ opacity: 0, x: -50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-between bg-dark_black xl:max-w-md dark:bg-white/10 rounded-2xl p-8 shrink-0"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium tracking-wider">
                      Customer stories
                    </span>
                    <h3 className="text-white text-2xl font-medium leading-snug">
                      Their creativity and attention to detail transformed our brand completely!
                    </h3>
                    <div className="overflow-hidden rounded-xl">
                      <img
                        alt="Creativity Showcase"
                        loading="lazy"
                        width={344}
                        height={220}
                        className="w-full h-52 object-cover rounded-xl"
                        src="/images/home/customerStories/creativity_img.jpg"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Box 4: Kabir Shah story */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-12 justify-between bg-dark_black/5 dark:bg-white/5 p-8 rounded-2xl grow"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-foreground/60 uppercase text-sm font-medium tracking-wider">
                      Customer stories
                    </span>
                    <h2 className="text-2xl lg:text-4xl font-normal leading-relaxed text-foreground">
                      “Awake Design Agency brought our ideas to life with exceptional creativity and
                      precision, exceeding expectations.”
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-foreground font-medium m-0">Kabir Shah</p>
                    <p className="text-foreground/60 text-sm m-0">Founder of Chipsland</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
