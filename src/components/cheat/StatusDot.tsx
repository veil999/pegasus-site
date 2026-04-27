import { cn } from "@/lib/utils";

type Status = "operational" | "updating" | "detected" | "neutral";

const map: Record<Status, { color: string; label: string }> = {
  operational: { color: "text-success", label: "Operational" },
  updating: { color: "text-warning", label: "Updating" },
  detected: { color: "text-destructive", label: "Detected" },
  neutral: { color: "text-muted-foreground", label: "Neutral" },
};

export const StatusDot = ({ status, label, className }: { status: Status; label?: string; className?: string }) => {
  const m = map[status];
  return (
    <span className={cn("inline-flex items-center gap-2 font-mono text-xs uppercase", m.color, className)}>
      <span className={cn("h-2 w-2 rounded-full bg-current pulse-dot")} />
      {label ?? m.label}
    </span>
  );
};
