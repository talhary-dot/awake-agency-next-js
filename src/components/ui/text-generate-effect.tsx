import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  delay = 0,
  duration = 0.4,
}: TextGenerateEffectProps) => {
  const wordsArray = words.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: duration,
            delay: delay + idx * 0.08,
            ease: "easeOut",
          }}
          className="inline-block mr-1.5"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
