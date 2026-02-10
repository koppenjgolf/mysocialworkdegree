import React from "react";

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}
