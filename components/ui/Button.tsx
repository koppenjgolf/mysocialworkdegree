import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[.99]";
  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white shadow-softsm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40",
    secondary:
      "bg-surface text-fg border border-border hover:bg-white/60 dark:hover:bg-slate-800/60",
    ghost:
      "bg-transparent text-fg hover:bg-surface border border-transparent hover:border-border",
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
