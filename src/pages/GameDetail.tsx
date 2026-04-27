import { Link, useParams } from "react-router-dom";
import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { StatusDot } from "@/components/cheat/StatusDot";
import { games } from "@/data/games";
import { ArrowLeft, ArrowRight, Users, Activity, Building2, Shield, Lock, Check, Calendar, Monitor, Cpu, MemoryStick, MonitorPlay } from "lucide-react";

// import { Badge } from "@/components/ui/badge"; // removed — not worth the dep for one label

const GameDetail = () => {
  const { slug } = useParams();
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return (
      <MainLayout>
        <div className="panel p-10 text-center">
          <h1 className="font-pixel text-3xl uppercase text-shadow-pixel">UNKNOWN_TITLE.err</h1>
          <p className="font-mono text-xs text-muted-foreground mt-2">No such title in the registry.</p>
          <Link to="/games" className="raised-block inline-flex items-center gap-2 px-4 py-2 mt-6 font-pixel text-xs uppercase">
            <ArrowLeft className="h-3 w-3" /> Back to library
          </Link>
        </div>
      </MainLayout>
    );
  }

  const others = games.filter((g) => g.slug !== game.slug);

  return (
    <MainLayout>
      <Link to="/games" className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to library
      </Link>

      {/* hero section */}
      <section className="panel">
        <header className="panel-header px-3 py-2 flex items-center justify-between">
          <span className="font-pixel text-xs uppercase">{game.code}.exe</span>
          <span className="font-mono text-[10px] text-muted-foreground">{game.version}</span>
        </header>
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase">
            <span className="inset-block px-2 py-1 text-primary">{game.code}</span>
            <StatusDot status={game.status} />
            <span className="text-muted-foreground">· {game.version}</span>
          </div>
          <h1 className="mt-4 font-pixel text-5xl md:text-6xl uppercase tracking-wider text-shadow-pixel">
            {game.name}
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-muted-foreground">{game.description}</p>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
            <InfoStat icon={<Users className="h-3.5 w-3.5" />} label="Active users" value={game.users.toLocaleString()} />
            <InfoStat icon={<Activity className="h-3.5 w-3.5" />} label="Uptime" value={game.uptime != null ? `${game.uptime} days` : "n/a"} />
            <InfoStat icon={<Building2 className="h-3.5 w-3.5" />} label="Publisher" value={game.publisher} />
            <InfoStat icon={<Shield className="h-3.5 w-3.5" />} label="Anti-cheat" value={game.ac} />
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-8">
        <div className="space-y-6">
          <Panel title="// overview">
            <p className="font-mono text-sm text-foreground/80 leading-relaxed">{game.overview}</p>
          </Panel>

          <Panel title="// feature_list">
            <div className="grid sm:grid-cols-2 gap-2">
              {game.features.map((f) => (
                <div key={f} className="inset-block flex items-center gap-2 px-3 py-2 font-mono text-xs">
                  <span className="grid h-4 w-4 place-items-center bg-primary/20 border border-primary/40 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="// detection_history">
            <ol className="space-y-3">
              {game.history.map((h) => (
                <li key={h.date} className="inset-block p-3">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase">
                    <span className="inline-flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-3 w-3 text-primary" /> {h.date}
                    </span>
                    <span className="text-success">{h.resolved}</span>
                  </div>
                  <div className="mt-1.5 font-mono text-xs text-foreground/80">{h.note}</div>
                </li>
              ))}
            </ol>
          </Panel>
        </div>

        <aside className="space-y-6">
          <Panel title="// access">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-muted-foreground">
              <Lock className="h-3 w-3 text-primary" /> private cheat
            </div>
            <h3 className="font-pixel text-2xl uppercase mt-2 text-shadow-pixel">Invite-only</h3>
            <p className="font-mono text-xs text-muted-foreground mt-2 leading-relaxed">
              Pegasus.Tech is invite-only. Join Discord to check current openings for {game.name}.
            </p>
            <a
              href="https://discord.gg/pegasustech"
              className="raised-block mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 font-pixel text-sm uppercase text-primary"
            >
              [ JOIN DISCORD ] <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Panel>

          <Panel title="// system_requirements">
            <ul className="space-y-2 font-mono text-xs">
              <ReqRow icon={<Monitor className="h-3 w-3" />} label="OS" value={game.requirements.os} />
              <ReqRow icon={<Cpu className="h-3 w-3" />} label="CPU" value={game.requirements.cpu} />
              <ReqRow icon={<MemoryStick className="h-3 w-3" />} label="RAM" value={game.requirements.ram} />
              <ReqRow icon={<MonitorPlay className="h-3 w-3" />} label="GPU" value={game.requirements.gpu} />
            </ul>
          </Panel>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="font-pixel text-2xl uppercase text-shadow-pixel mb-4">// other_supported_titles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {others.map((g) => (
            <Link key={g.slug} to={`/games/${g.slug}`} className="panel hover:shadow-glow transition group">
              <div className="panel-header px-3 py-2 flex items-center justify-between">
                <span className="font-pixel text-xs uppercase">{g.code}</span>
                <StatusDot status={g.status} label="" />
              </div>
              <div className="p-3">
                <div className="font-pixel text-sm group-hover:text-primary">{g.name}</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground mt-1 capitalize">{g.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

const InfoStat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="inset-block p-3">
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-muted-foreground">
      <span className="text-primary">{icon}</span> {label}
    </div>
    <div className="font-pixel text-lg mt-1 text-foreground text-shadow-pixel break-all">{value}</div>
  </div>
);

const ReqRow = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <li className="inset-block flex items-center gap-3 px-3 py-2">
    <span className="text-primary">{icon}</span>
    <div className="flex-1">
      <div className="text-[9px] uppercase text-muted-foreground">{label}</div>
      <div className="text-foreground/90">{value}</div>
    </div>
  </li>
);

export default GameDetail;
