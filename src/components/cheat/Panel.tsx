import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PanelProps {
  title?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
  // bodyClassName is a bit overloaded here — handles both padding overrides
  // and the occasional layout tweak. not ideal but works
  bodyClassName?: string;
}

export const Panel = ({ title, right, children, className, bodyClassName }: PanelProps) => (
  <section className={cn("panel", className)}>
    {title && (
      <header className="panel-header flex items-center justify-between px-3 py-2">
        <h3 className="font-pixel text-sm uppercase tracking-wider text-foreground/90 text-shadow-pixel">
          {title}
        </h3>
        {right}
      </header>
    )}
    <div className={cn("p-4", bodyClassName)}>{children}</div>
  </section>
);
