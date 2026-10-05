import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AwakeButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "white" | "outline" | "dark";
  className?: string;
}

export const AwakeButton: React.FC<AwakeButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "white":
        return {
          btn: "bg-white hover:bg-white text-dark_black",
          text: "text-dark_black",
          circle: "bg-dark_black text-white",
        };
      case "outline":
        return {
          btn: "bg-transparent hover:bg-transparent border border-white text-white",
          text: "text-white",
          circle: "bg-white text-dark_black",
        };
      case "dark":
        return {
          btn: "bg-dark_black hover:bg-dark_black text-white",
          text: "text-white",
          circle: "bg-white text-dark_black",
        };
      case "primary":
      default:
        return {
          btn: "bg-primary text-primary-foreground hover:bg-primary/80",
          text: "",
          circle: "bg-background text-foreground",
        };
    }
  };

  const styles = getVariantStyles();

  const buttonClasses = cn(
    "relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden inline-flex items-center justify-center select-none cursor-pointer outline-none shrink-0",
    styles.btn,
    className
  );

  const innerContent = (
    <>
      <span className={cn("relative z-10 transition-all duration-500", styles.text)}>
        {children}
      </span>
      <div
        className={cn(
          "absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
          styles.circle
        )}
      >
        <ArrowUpRight className="size-4" />
      </div>
    </>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("#") || href.includes("#")) {
      return (
        <a href={href} className={buttonClasses} onClick={onClick}>
          {innerContent}
        </a>
      );
    }
    return (
      <Link to={href} className={buttonClasses} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {innerContent}
    </button>
  );
};
