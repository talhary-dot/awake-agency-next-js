import React from "react";
import { siteConfig } from "@/config/site";

export const BrandMarquee: React.FC = () => {
  // Duplicate array 4 times for infinite seamless loop
  const repeatedBrands = [
    ...siteConfig.brands,
    ...siteConfig.brands,
    ...siteConfig.brands,
    ...siteConfig.brands,
  ];

  return (
    <section>
      <div className="2xl:py-20 py-11 overflow-hidden">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <p className="relative px-2 text-muted-foreground text-sm md:text-base md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-border md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-border md:after:to-transparent">
                Loved by 1000+ big and small brands around the worlds
              </p>
            </div>

            <div className="py-3 sm:py-7 relative w-full overflow-hidden mask-fade">
              <div className="flex w-max animate-logo-slider">
                {repeatedBrands.map((brand, idx) => (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="w-[200px] shrink-0 flex items-center justify-center px-4"
                  >
                    <img
                      alt={brand.name}
                      width={130}
                      height={50}
                      className="dark:hidden h-10 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                      src={brand.lightIcon}
                    />
                    <img
                      alt={brand.name}
                      width={130}
                      height={50}
                      className="dark:block hidden h-10 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                      src={brand.darkIcon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
