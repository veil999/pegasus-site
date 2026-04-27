import { Link } from "react-router-dom";
import { MainLayout } from "@/components/cheat/MainLayout";
import { PageTitle } from "@/components/cheat/PageTitle";
import { StatusDot } from "@/components/cheat/StatusDot";
import { games } from "@/data/games";
import { Users, Activity, Shield, ArrowRight } from "lucide-react";

const GameLibrary = () => {
  const online = games.filter((g) => g.status === "operational").length;
  const total = games.length;
  // using reduce here instead of a separate filter — same result, one pass
  const active = games.reduce((a, g) => a + g.users, 0);

  return (
    <MainLayout>
      <PageTitle
        eyebrow={`${online}/${total} TITLES ONLINE`}
        title="SUPPORTED"
        highlight="TITLES"
        description="Click any game for the full feature list, detection history, and live telemetry."
      />

      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatBox label="TITLES" value={total.toString()} />
        <StatBox label="ONLINE" value={online.toString()} accent />
        <StatBox label="ACTIVE" value={`${(active / 1000).toFixed(1)}k`} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((g) => (
          <Link
            key={g.slug}
            to={`/games/${g.slug}`}
            className="panel hover:shadow-glow transition group block"
          >
            <header className="panel-header px-3 py-2 flex items-center justify-between">
              <span className="font-pixel text-xs uppercase">{g.code}</span>
              <StatusDot status={g.status} />
            </header>
            <div className="p-4">
              <div className="checker-bg h-24 mb-4 inset-block flex items-center justify-center">
                <span className="font-pixel text-3xl text-primary/70 text-shadow-pixel">{g.code}</span>
              </div>
              <h3 className="font-pixel text-base uppercase group-hover:text-primary">{g.name}</h3>
              <p className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed min-h-[2.5rem]">
                {g.description}
              </p>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase">
                <span className="text-muted-foreground">{g.version}</span>
                <span className="text-primary">{g.ac}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1 text-center">
                <MiniCell icon={<Users className="h-3 w-3" />} label="USERS" value={g.users.toString()} />
                {/* uptime is optional now — show dash if not tracked */}
                <MiniCell icon={<Activity className="h-3 w-3" />} label="UPTIME" value={g.uptime != null ? `${g.uptime}d` : "—"} />
                <MiniCell icon={<Shield className="h-3 w-3" />} label="AC" value={g.ac.split(" ")[0]} />
              </div>
              <div style={{ marginTop: "1rem" }} className="flex items-center justify-between font-mono text-[10px] uppercase text-primary group-hover:translate-x-0.5 transition-transform">
                <span>&gt; view dossier</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
};

const StatBox = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="panel p-4">
    <div className={`font-pixel text-3xl ${accent ? "text-primary" : "text-foreground"} text-shadow-pixel`}>{value}</div>
    <div className="font-mono text-[10px] uppercase text-muted-foreground mt-1">{label}</div>
  </div>
);

// MiniCell — kept separate because the icon+label+value pattern repeats
const MiniCell = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="inset-block py-1.5">
    <div className="flex justify-center text-primary">{icon}</div>
    <div className="font-pixel text-xs mt-0.5 truncate px-1">{value}</div>
    <div className="font-mono text-[9px] uppercase text-muted-foreground">{label}</div>
  </div>
);

export default GameLibrary;
