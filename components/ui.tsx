import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";
import type * as React from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type,
  onClick,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
      : "bg-transparent text-slate-900 hover:bg-slate-100";
  const cls = clsx(base, styles, className);

  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return (
    <button className={cls} type={type ?? "button"} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("rounded-3xl border border-slate-200 bg-white shadow-soft", className)}>
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={clsx(
        "w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
        className
      )}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { className?: string; children: ReactNode }) {
  return (
    <select
      {...props}
      className={clsx(
        "w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-200",
        className
      )}
    >
      {children}
    </select>
  );
}
