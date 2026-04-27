import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { PageTitle } from "@/components/cheat/PageTitle";

const sections = [
  {
    t: "1. Acceptance of Terms",
    d: "By purchasing, accessing, or using any Pegasus.Tech product, you agree to these Terms. If you don't agree, don't use the service.",
  },
  {
    t: "2. License",
    d: "Pegasus.Tech grants you a personal, non-transferable, revocable license for the duration of your active subscription. You are licensing the software, not buying it.",
  },
  {
    t: "3. Restrictions",
    d: [
      "Reverse engineer, decompile, or attempt to extract source code.",
      "Resell, redistribute, share, or sublicense your access or keys.",
      "Modify, crack, or create derivative works of the software.",
      "Use the software to harm, harass, or attack other users or systems.",
      "Bypass any authentication, key validation, or anti-piracy measure.",
      "Stream, record, or publish the loader or proprietary feature implementations publicly.",
    ],
  },
  {
    t: "4. No Refunds",
    d: "All sales are final. Digital product. Refunds at staff discretion only — don't ask if you just changed your mind.",
  },
  {
    t: "5. Account Termination",
    d: "We can suspend or terminate access at any time, without refund, for violations — including leaking, sharing, or reverse engineering.",
  },
  {
    t: "6. Disclaimer & Risk",
    d: 'Software is provided "as is". Using third-party utilities in online games may violate those games\' terms and result in bans. That\'s on you.',
  },
  {
    t: "7. Changes to Terms",
    d: "We may update these Terms at any time. Continued use after changes = acceptance.",
  },
  {
    t: "8. Contact",
    d: "Questions? Discord.",
  },
];

const Tos = () => (
  <MainLayout>
    <PageTitle
      eyebrow="legal // tos.txt"
      title="TERMS OF"
      highlight="SERVICE"
      description={<>Last updated: <span className="text-foreground">04/26/2026</span></>}
    />
    <Panel title="terms_of_service.txt">
      <div className="space-y-6">
        {sections.map((s) => (
          <article key={s.t}>
            <h2 className="font-pixel text-base uppercase text-primary mb-2 text-shadow-pixel">{s.t}</h2>
            {Array.isArray(s.d) ? (
              <ul className="font-mono text-xs text-muted-foreground space-y-1.5 leading-relaxed">
                {s.d.map((x) => (
                  <li key={x} className="flex gap-2"><span className="text-primary">&gt;</span><span>{x}</span></li>
                ))}
              </ul>
            ) : (
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{s.d}</p>
            )}
          </article>
        ))}
      </div>
    </Panel>
  </MainLayout>
);

export default Tos;
