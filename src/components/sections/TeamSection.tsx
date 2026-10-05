import React from "react";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { siteConfig } from "@/config/site";

export const TeamSection: React.FC = () => {
  return (
    <section id="team">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <h2>
                <TextGenerateEffect words="Meet the creative minds behind" />{" "}
                <TextGenerateEffect
                  words="our success"
                  delay={0.6}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 w-full">
              {siteConfig.team.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: "10%" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex justify-center"
                >
                  <div className="group flex flex-col gap-6 items-center justify-center max-w-80 w-full text-center">
                    <div className="overflow-hidden rounded-2xl w-full aspect-4/3">
                      <img
                        alt={member.name}
                        loading="lazy"
                        width={625}
                        height={410}
                        className="rounded-2xl w-full h-full object-cover transition-all duration-300 group-hover:grayscale group-hover:scale-105"
                        src={member.image}
                      />
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                      <div className="flex flex-col gap-1 items-center">
                        <p className="font-medium text-lg text-foreground m-0">{member.name}</p>
                        <p className="text-muted-foreground text-sm m-0">{member.role}</p>
                      </div>

                      <div className="flex gap-4">
                        <a
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Twitter`}
                        >
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.2707 0.586914H18.0819L11.9402 7.60649L19.1654 17.1586H13.5081L9.07712 11.3653L4.00705 17.1586H1.19412L7.76329 9.65033L0.832092 0.586914H6.63302L10.6383 5.88219L15.2707 0.586914ZM14.284 15.4759H15.8418L5.78659 2.18119H4.11498L14.284 15.4759Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                        <a
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                      </div>
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
