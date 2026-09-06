import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "white" | "pink";
  href?: string;
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  href,
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-(--primary) text-(--white)",
    pink: "bg-(--secondary) text-(--white)",
    white: "bg-(--white) text-(--primary)",
  };

  // Shared styles applied to both links and buttons
  const className = `flex items-center justify-center rounded font-semibold px-5.5 py-[11.5px] text-[14px] md:text-[18px] md:gap-2 md:h-12 md:px-6 md:py-[10.5px] ${variantStyles[variant]}`;

  // Render an anchor when an href is provided
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  // Otherwise, render a button element
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}