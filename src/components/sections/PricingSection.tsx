import React from "react";
import { Check } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AwakeButton } from "@/components/common/AwakeButton";
import { siteConfig } from "@/config/site";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-xl text-center mx-auto">
              <h2>
                <TextGenerateEffect words="Pick the plan that fits your" />{" "}
                <TextGenerateEffect
                  words="start-up"
                  delay={0.5}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch justify-center grow gap-6 w-full">
              {siteConfig.pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col p-8 sm:p-10 rounded-2xl w-full lg:w-1/2 ${plan.bgClass} transition-shadow duration-300 shadow-sm`}
                >
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start self-stretch h-full w-full">
                    {/* Left Column in Card */}
                    <div className="flex flex-col items-start justify-between self-stretch gap-6 sm:w-1/2">
                      <div className="flex flex-col gap-3 items-start">
                        <span className="py-1 px-3 text-sm font-normal rounded-full bg-dark_black text-white dark:bg-white dark:text-dark_black">
                          {plan.badge}
                        </span>
                        <p className={`${plan.subTextColor} text-sm m-0`}>
                          {plan.description}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 mt-auto">
                        <h2 className={`text-4xl sm:text-5xl font-medium ${plan.textColor} m-0`}>
                          {plan.price}
                          <span className={`text-base font-normal ${plan.subTextColor} ml-1`}>
                            {plan.period}
                          </span>
                        </h2>
                        <AwakeButton href="/contact" variant={plan.buttonVariant}>
                          Let's Collaborate
                        </AwakeButton>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="shrink-0 w-full sm:w-px sm:h-auto sm:self-stretch h-px bg-current opacity-15" />

                    {/* Right Column: Features */}
                    <div className="flex flex-col items-start gap-4 grow sm:w-1/2">
                      <p className={`font-medium ${plan.textColor} m-0`}>Features</p>
                      <ul className="flex flex-col items-start self-stretch gap-3.5 list-none p-0 m-0">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <Check className={`size-4 shrink-0 ${plan.textColor}`} />
                            <span className={`text-sm ${plan.subTextColor}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
