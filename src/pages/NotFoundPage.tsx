import React from "react";
import { AwakeButton } from "@/components/common/AwakeButton";

export const NotFoundPage: React.FC = () => {
  return (
    <main>
      <section className="relative overflow-hidden min-h-[calc(100vh-100px)] flex items-center">
        <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-hero-glow-from before:via-hero-glow-via before:to-hero-glow-to before:rounded-full before:top-24 before:blur-3xl before:-z-10">
          <div className="container">
            <div className="flex flex-col items-center gap-8 text-center max-w-3xl mx-auto">
              <div>
                <img
                  src="/images/Notfound/notfound.png"
                  alt="Not Found"
                  width={670}
                  height={380}
                  className="max-w-full h-auto"
                />
              </div>

              <div className="max-w-xl text-center">
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
                  Oops! The page you are looking for{" "}
                  <span className="font-instrument-serif italic font-normal text-muted-foreground">
                    doesn't exist
                  </span>
                </h2>
              </div>

              <div>
                <AwakeButton href="/">Back to home</AwakeButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
