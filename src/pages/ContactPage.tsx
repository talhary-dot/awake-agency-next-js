import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AwakeButton } from "@/components/common/AwakeButton";
import { FAQSection } from "@/components/sections/FAQSection";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "design & branding",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-hero-glow-from before:via-hero-glow-via before:to-hero-glow-to before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container relative z-10">
            <div className="flex flex-col gap-10 md:gap-20">
              <div className="relative flex flex-col text-center items-center">
                <h2 className="font-medium w-full max-w-xl">
                  <TextGenerateEffect words="Love to hear from you, Get in" />{" "}
                  <TextGenerateEffect
                    words="touch"
                    delay={0.5}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center bg-card rounded-2xl p-12 border border-border text-center max-w-2xl mx-auto w-full">
                  <h3 className="text-3xl font-medium mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-base">
                    We’ve received your message and will get back to you within 24 hours.
                  </p>
                  <AwakeButton onClick={() => setSubmitted(false)} className="mt-6">
                    Send another message
                  </AwakeButton>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col bg-card rounded-2xl p-8 sm:p-12 gap-8 border border-border shadow-sm max-w-4xl mx-auto w-full transition-colors"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-full border border-border px-5 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-full border border-border px-5 py-3 h-12 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full flex flex-col gap-2 relative">
                      <label htmlFor="interest" className="text-sm font-medium text-foreground">
                        What are you interested in?
                      </label>
                      <div className="relative">
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full appearance-none rounded-full border border-border px-5 py-3 h-12 bg-background text-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm pr-10 cursor-pointer"
                        >
                          <option value="design & branding">design &amp; branding</option>
                          <option value="web development">web development</option>
                          <option value="mobile app">mobile app</option>
                          <option value="digital marketing">digital marketing</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-2 relative">
                      <label htmlFor="budget" className="text-sm font-medium text-foreground">
                        Project budget
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full appearance-none rounded-full border border-border px-5 py-3 h-12 bg-background text-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm pr-10 cursor-pointer"
                        >
                          <option value="" disabled>
                            Select your budget
                          </option>
                          <option value="under-5k">Less than $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-plus">$25,000+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Let tell us know your project about"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-3xl border border-border p-5 min-h-[120px] bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-dark_black dark:focus:border-white/50 transition-colors text-sm resize-y"
                    />
                  </div>

                  <div>
                    <AwakeButton type="submit">Let’s Collaborate</AwakeButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  );
};
