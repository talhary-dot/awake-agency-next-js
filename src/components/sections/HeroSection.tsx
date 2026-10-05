import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AwakeButton } from "@/components/common/AwakeButton";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-hero-glow-from before:via-hero-glow-via before:to-hero-glow-to before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1>
                <TextGenerateEffect words="Building bold brands with" />
                <span className="block mt-1 sm:mt-2">
                  <TextGenerateEffect
                    words="thoughtful design"
                    delay={0.6}
                    className="font-instrument-serif italic tracking-tight"
                  />
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: "20%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="max-w-2xl text-foreground/80 text-base md:text-lg leading-relaxed"
              >
                At Awake, we help small startups tackle the world’s biggest challenges with tailored
                solutions, guiding you from strategy to success in a competitive market.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: "20%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              className="flex items-center flex-col md:flex-row justify-center gap-8"
            >
              <AwakeButton href="/contact">Get Started</AwakeButton>

              <div className="flex items-center sm:gap-7 gap-3">
                <ul className="avatar flex flex-row items-center list-none p-0 m-0">
                  <li className="-mr-2 z-1 hover:z-10 transition-transform">
                    <img
                      alt="Avatar 1"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-background object-cover"
                      src="/images/home/avatar_1.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1 hover:z-10 transition-transform">
                    <img
                      alt="Avatar 2"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-background object-cover"
                      src="/images/home/avatar_2.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1 hover:z-10 transition-transform">
                    <img
                      alt="Avatar 3"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-background object-cover"
                      src="/images/home/avatar_3.jpg"
                    />
                  </li>
                  <li className="-mr-2 z-1 hover:z-10 transition-transform">
                    <img
                      alt="Avatar 4"
                      width={44}
                      height={44}
                      className="rounded-full border-2 border-background object-cover"
                      src="/images/home/avatar_4.jpg"
                    />
                  </li>
                </ul>

                <div className="gap-1 flex flex-col">
                  <div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm font-normal text-muted-foreground m-0">
                    Trusted by 1000+ clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
