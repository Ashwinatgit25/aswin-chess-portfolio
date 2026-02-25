import { HTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> { }

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          clsx(

            // 👑 ROYAL DARK GLASS STYLE
            "rounded-xl",

            "bg-black/75",   // DARK BACKGROUND (CONTENT CLEAR)

            "backdrop-blur-lg",

            "border border-[#E6C77A]/60",

            "shadow-[0_0_25px_rgba(0,0,0,0.9)]",

            "transition-all duration-300",

            "hover:shadow-[0_0_30px_#E6C77A]",

            className
          )
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;