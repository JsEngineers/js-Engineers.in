import React from "react";
import clsx from "clsx";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: string;
  containerSize?: "default" | "wide" | "narrow" | "full";
  spacing?: "default" | "small" | "large" | "none";
}

export default function Section({
  children,
  id,
  className,
  background,
  containerSize = "default",
  spacing = "default",
}: SectionProps) {

  const spacings = {

    default: "py-16 md:py-20",

    small: "py-10 md:py-12",

    large: "py-24 md:py-32",

    none: "py-0",

  };

  return (
    <section
      id={id}
      className={clsx(
        "relative",
        spacings[spacing],
        background,
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );

}
