import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { Lock } from "lucide-react";

// skipping PageTitle on this one — pricing doesn't need a big intro, just get to the numbers
const tiers = [
  {
    name: "WEEK",
    price: "$7",
    per: "/ 7 days",
    features: ["Full feature access", "All supported games", "Priority Discord roles"],
  },
  {
    name: "MONTH",
    price: "$15",
    per: "/ 30 days",
    features: ["Everything in Week", "Premium support channel", "Build update priority"],
    featured: true,
  },
  {
    name: "NIGHTLY",
    price: "$35",
    per: "/ lifetime",
    features: ["Alpha build access", "Slotted access", "Unique build signature"],
  },
];

const Pricing = () => (
  <MainLayout>
    <div className="mb-8">
      <div className="font-mono text-[10px] uppercase text-primary mb-1">// pricing.cfg</div>
      <h1 className="font-pixel text-4xl md:text-5xl uppercase tracking-wider text-shadow-pixel">
        PRICING
      </h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground max-w-lg">
        Public sales are currently closed. These are the tiers when we open — get on the Discord waitlist.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map((t) => (
        <div key={t.name} className={`panel ${t.featured ? "shadow-glow ring-1 ring-primary/40" : ""}`}>
          <header className="panel-header px-3 py-2 flex items-center justify-between">
            <span className="font-pixel text-sm uppercase tracking-wider">{t.name}</span>
            {t.featured && <span className="font-mono text-[10px] uppercase text-primary">// recommended</span>}
          </header>
          <div className="p-5">
            <div className="flex items-baseline gap-2">
              <span className="font-pixel text-4xl text-foreground text-shadow-pixel">{t.price}</span>
              <span className="font-mono text-xs text-muted-foreground">{t.per}</span>
            </div>
            <ul className="mt-5 space-y-2 font-mono text-xs">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary">›</span> {f}
                </li>
              ))}
            </ul>
            <button
              disabled
              className="mt-6 w-full inset-block py-2.5 font-pixel text-xs uppercase tracking-wider text-muted-foreground cursor-not-allowed"
            >
              <Lock className="inline h-3 w-3 mr-1" /> UNAVAILABLE
            </button>
          </div>
        </div>
      ))}
    </div>

    <Panel title="// access_notice" className="mt-6">
      <div className="flex items-start gap-3">
        <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
        <div>
          <div className="font-pixel text-sm text-primary uppercase mb-1">INVITE-ONLY RIGHT NOW</div>
          <p className="font-mono text-xs text-muted-foreground">
            We keep the product private to protect detection rates. Public sales open when we're ready —
            join Discord and you'll know when.
          </p>
        </div>
      </div>
    </Panel>
  </MainLayout>
);

export default Pricing;
