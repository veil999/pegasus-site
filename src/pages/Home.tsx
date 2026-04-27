import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { StatusDot } from "@/components/cheat/StatusDot";
import { games } from "@/data/games";

type Tab = "COMBAT" | "VISUALS" | "MISC";
const HITBOXES = ["Head", "Neck", "Chest", "Pelvis"] as const;
const COLORS = ["#5BA3FF", "#22e07a", "#ff5c5c", "#f6c84c", "#b06bff"] as const;

const Home = () => {
  const operational = games.filter((g) => g.status === "operational").length;
  const pct = Math.round((operational / games.length) * 100);

  // aimbot demo state — this whole block could probably be its own component
  // but it's fine here for now, not worth the abstraction overhead
  const [aimEnabled, setAimEnabled] = useState(true);
  const [fov, setFov] = useState(62);
  const [smooth, setSmooth] = useState(38);
  const [hitboxIdx, setHitboxIdx] = useState(0);
  const [colorIdx, setColorIdx] = useState(0);

  const [esp, setEsp] = useState(true);
  const [boxIdx, setBoxIdx] = useState(0);
  const [skeleton, setSkeleton] = useState(true);
  const [tracers, setTracers] = useState(false);

  const [tab, setTab] = useState<Tab>("COMBAT");

  const [fps, setFps] = useState(() => Math.floor(Math.random() * 56) + 200);
  const [ms, setMs] = useState(() => Math.floor(Math.random() * 34) + 12);
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());
  const uid = useState(() => Math.floor(Math.random() * 401) + 600)[0];

  useEffect(() => {
    const t = setInterval(() => {
      setFps(Math.floor(Math.random() * 56) + 200);
      setMs(Math.floor(Math.random() * 34) + 12);
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <MainLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="panel relative">
          <header className="panel-header flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-gradient-primary shadow-glow" />
              <span className="font-pixel text-sm uppercase tracking-wider text-shadow-pixel">
                pegasus.tech — main_menu.exe
              </span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
              <span className="px-1.5 inset-block">_</span>
              <span className="px-1.5 inset-block">▢</span>
              <span className="px-1.5 inset-block">×</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-0">
            {/* Left — copy */}
            <div className="p-8 md:p-12 relative">
              <div className="inline-flex items-center gap-2 px-2 py-1 inset-block font-mono text-[10px] uppercase text-success mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-success pulse-dot" />
                ALL SYSTEMS FROSTED · {pct}% OPERATIONAL
              </div>
              <h1 className="font-pixel text-5xl md:text-6xl uppercase leading-[0.95] text-shadow-pixel">
                SCRIPTING,
                <br />
                <span className="text-primary">REFINED.</span>
              </h1>
              <p className="mt-5 max-w-lg text-sm font-mono text-muted-foreground leading-relaxed">
                Pegasus. Tech is a Lua-based cheating script designed to exploit Roblox games. Blatant hacks, unfair advantages, and the same old exploits for a competitive edge.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                
                  href="https://discord.gg/pegasustech"
                  className="raised-block px-5 py-2.5 font-pixel text-sm uppercase tracking-wider text-primary"
                >
                  [ JOIN DISCORD ]
                </a>
                <Link
                  to="/games"
                  className="raised-block px-5 py-2.5 font-pixel text-sm uppercase tracking-wider"
                >
                  &gt; SUPPORTED GAMES
                </Link>
              </div>

              {/* this is a bit hacky but the terminal aesthetic needs exact string formatting */}
              <div className="mt-8 inset-block p-3 font-mono text-xs text-muted-foreground">
                <div><span className="text-primary">user@pegasus</span>:~$ ./loader --inject pf</div>
                <div className="text-success">[ok] handshake established · build 2026.04.r71</div>
                <div>[..] mapping driver <span className="blink">_</span></div>
              </div>
            </div>

            {/* Right — interactive demo panels */}
            <div className="border-l border-border bg-background/40 p-5 space-y-3">
              <div className="flex gap-1">
                <DemoTab label="COMBAT" active={tab === "COMBAT"} onClick={() => setTab("COMBAT")} />
                <DemoTab label="VISUALS" active={tab === "VISUALS"} onClick={() => setTab("VISUALS")} />
                <DemoTab label="MISC" active={tab === "MISC"} onClick={() => setTab("MISC")} />
              </div>

              {tab === "COMBAT" && (
                <Panel title="Aimbot">
                  <div className="space-y-2 font-mono text-xs">
                    <Row label="Enable" value={<Toggle on={aimEnabled} onClick={() => setAimEnabled((v) => !v)} />} />
                    <Row
                      label="FOV"
                      value={<SliderCtl value={fov} onChange={setFov} min={0} max={180} suffix="°" disabled={!aimEnabled} />}
                    />
                    <Row
                      label="Smooth"
                      value={<SliderCtl value={smooth} onChange={setSmooth} min={1} max={100} suffix="x" disabled={!aimEnabled} />}
                    />
                    <Row
                      label="Hitbox"
                      value={
                        <PillBtn
                          onClick={() => setHitboxIdx((i) => (i + 1) % HITBOXES.length)}
                          disabled={!aimEnabled}
                        >
                          {HITBOXES[hitboxIdx]}
                        </PillBtn>
                      }
                    />
                    <Row
                      label="Color"
                      value={
                        <button
                          type="button"
                          onClick={() => setColorIdx((i) => (i + 1) % COLORS.length)}
                          aria-label="Cycle color"
                          className="block h-3 w-6 border border-border hover:scale-110 transition"
                          style={{ backgroundColor: COLORS[colorIdx] }}
                        />
                      }
                    />
                  </div>
                </Panel>
              )}

              {tab === "VISUALS" && (
                <Panel title="Visuals">
                  <div className="space-y-2 font-mono text-xs">
                    <Row label="ESP" value={<Toggle on={esp} onClick={() => setEsp((v) => !v)} />} />
                    <Row
                      label="Box"
                      value={
                        <PillBtn onClick={() => setBoxIdx((i) => (i + 1) % 3)} disabled={!esp}>
                          {["2D", "3D", "Corner"][boxIdx]}
                        </PillBtn>
                      }
                    />
                    <Row label="Skeleton" value={<Toggle on={skeleton} onClick={() => setSkeleton((v) => !v)} />} />
                    <Row label="Tracers" value={<Toggle on={tracers} onClick={() => setTracers((v) => !v)} />} />
                  </div>
                </Panel>
              )}

              {tab === "MISC" && (
                <Panel title="Misc">
                  <div className="space-y-2 font-mono text-xs">
                    <Row label="Watermark" value={<Toggle on={false} onClick={() => {}} />} />
                    <Row label="Streamer-mode" value={<Toggle on onClick={() => {}} />} />
                    <Row label="Anti-screenshot" value={<Toggle on onClick={() => {}} />} />
                  </div>
                </Panel>
              )}

              <div className="inset-block p-2 font-mono text-[10px] text-muted-foreground">
                <span className="text-primary">pegasus.tech</span>
                {" / "}{time}
                {" / "}<span className="text-foreground">{fps}</span>fps
                {" / "}<span className="text-foreground">{ms}</span>ms
                {" / "}UID <span className="text-foreground">{uid}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE STATUS */}
      <section className="mt-10">
        <Panel
          title="Live Status"
          right={<span className="font-mono text-[10px] text-muted-foreground">REFRESHED · 12s ago</span>}
        >
          <div className="flex items-baseline gap-3 mb-4">
            <div className="font-pixel text-4xl text-primary">{pct}%</div>
            <div className="font-mono text-xs uppercase text-muted-foreground">operational</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {games.map((g) => (
              <Link key={g.slug} to={`/games/${g.slug}`} className="inset-block p-3 hover:shadow-glow transition">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground">
                  <span>{g.code}</span>
                  <StatusDot status={g.status} label="" />
                </div>
                <div className="font-pixel text-sm mt-1">{g.name}</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-0.5">
                  {g.version} · {g.ac}
                </div>
              </Link>
            ))}
          </div>
        </Panel>
      </section>

      {/* three pillars — map felt cleaner than repeating JSX three times */}
      <section className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { t: "OPTIMIZED", d: "Carefully tuned code. High FPS. Doesn't choke during server spikes." },
          { t: "UNDETECTED", d: "Private bypass research, not outsourced. We test before we ship." },
          { t: "CUSTOMIZABLE", d: "Tweak everything. If a visual option isn't there, ask in Discord and it probably will be." },
        ].map((p, i) => (
          <Panel key={p.t} title={`0${i + 1} · ${p.t}`}>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{p.d}</p>
          </Panel>
        ))}
      </section>

      {/* game shortlist */}
      <section className="mt-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="font-mono text-[10px] uppercase text-primary">// supported titles</div>
            <h2 className="font-pixel text-3xl uppercase text-shadow-pixel">A growing arsenal</h2>
          </div>
          <Link to="/games" className="raised-block px-4 py-2 font-pixel text-xs uppercase">[ VIEW ALL ]</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {games.map((g) => (
            <Link key={g.slug} to={`/games/${g.slug}`} className="panel hover:shadow-glow transition group">
              <div className="panel-header px-3 py-2 flex items-center justify-between">
                <span className="font-pixel text-xs uppercase">{g.code}</span>
                <StatusDot status={g.status} label="" />
              </div>
              <div className="p-3">
                <div className="font-pixel text-sm group-hover:text-primary">{g.name}</div>
                <div className="font-mono text-[10px] text-muted-foreground mt-1">{g.version}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

/* small UI bits — inlined here because they're only used on this page */
const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-2 py-1 border-b border-border/40 last:border-0">
    <span className="text-muted-foreground">{label}</span>
    <span>{value}</span>
  </div>
);

const Toggle = ({ on, onClick }: { on?: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={on}
    aria-label="Toggle"
    className={`inline-block h-3 w-3 border border-border transition ${
      on ? "bg-primary shadow-glow" : "bg-muted hover:bg-muted/70"
    }`}
  />
);

const SliderCtl = ({
  value,
  onChange,
  min = 0,
  max = 100,
  suffix = "",
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  suffix?: string;
  disabled?: boolean;
}) => (
  <span className={`inline-flex items-center gap-2 ${disabled ? "opacity-50" : ""}`}>
    <span className="relative inline-block h-1.5 w-20 inset-block overflow-hidden">
      <span
        className="absolute inset-y-0 left-0 accent-bar pointer-events-none"
        style={{ width: `${((value - min) / (max - min)) * 100}%` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Slider"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
      />
    </span>
    <span className="text-foreground/80 tabular-nums w-10 text-right">
      {value}
      {suffix}
    </span>
  </span>
);

const PillBtn = ({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="inset-block px-2 py-0.5 text-foreground/90 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition"
  >
    {children}
  </button>
);

const DemoTab = ({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex-1 text-center py-1.5 font-pixel text-[10px] uppercase tracking-wider transition ${
      active ? "raised-block text-primary" : "inset-block text-muted-foreground hover:text-foreground"
    }`}
  >
    {label}
  </button>
);

export default Home;
