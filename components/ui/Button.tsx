import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles: Record<string, string> = {
    primary: "bg-black text-white hover:opacity-90",
    secondary: "bg-white text-black border border-black/10 hover:bg-black/5",
    ghost: "bg-transparent text-black hover:bg-black/5",
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
