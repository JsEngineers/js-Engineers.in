import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
}

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {

  const sizes = {

    default: "max-w-7xl",   // standard (recommended)
    
    wide: "max-w-[1400px]", // hero / large sections
    
    narrow: "max-w-3xl",    // text-heavy sections
    
    full: "max-w-full",     // full width

  };

  return (
    <div
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );

}
