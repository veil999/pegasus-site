import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PageTitle = ({
  eyebrow,
  title,
  highlight,
  description,
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
}) => (
  <div className={cn("mb-8", className)}>
    {eyebrow && (
      <div className="inline-flex items-center gap-2 px-2 py-1 inset-block font-mono text-[10px] uppercase text-primary mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> {eyebrow}
      </div>
    )}
    <h1 className="font-pixel text-4xl md:text-5xl uppercase tracking-wider text-foreground text-shadow-pixel">
      {title}{" "}
      {highlight && <span className="text-primary">{highlight}</span>}
    </h1>
    {description && <p className="mt-3 max-w-2xl text-sm font-mono text-muted-foreground">{description}</p>}
    {children}
  </div>
);
