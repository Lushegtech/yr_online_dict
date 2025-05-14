import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "default" | "sm" | "lg" | "fluid";
}

export function Container({
  className,
  as: Component = "div",
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 md:px-6",
        {
          "max-w-screen-xl": size === "default",
          "max-w-screen-lg": size === "sm",
          "max-w-screen-2xl": size === "lg",
          "w-full": size === "fluid",
        },
        className
      )}
      {...props}
    />
  );
} 