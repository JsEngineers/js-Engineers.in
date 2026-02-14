import React from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "accent" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  fullWidth = false,
  className,
  disabled = false,
}: ButtonProps) {

  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";


  const variants = {

    primary:
      "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-md hover:shadow-lg focus:ring-blue-500",

    accent:
      "bg-[var(--color-accent)] text-white hover:brightness-110 shadow-md hover:shadow-lg focus:ring-green-500",

    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",

    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",

  };


  const finalClass = clsx(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    className
  );


  // Link button
  if (href && !disabled) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }


  // Normal button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
    >
      {children}
    </button>
  );

}
