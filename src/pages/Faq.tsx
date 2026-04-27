import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// deliberately not using PageTitle here — the FAQ doesn't need the same intro treatment
// as the other pages, a quick header is fine

const faqs = [
  {
    q: "Is it safe?",
    a: "No cheat is 100% safe. We invest heavily in bypass research and we don't ship until things pass internal testing — but you're still using third-party software in a game that doesn't want you to. You assume the risk. Don't use your main if you're not comfortable with that.",
  },
  {
    q: "What is Pegasus.Tech?",
    a: "A private scripting utility for competitive online titles. We care about cold execution, staying undetected, and giving you a clean UI that doesn't look like it was designed in 2014.",
  },
  {
    q: "How do I get my key?",
    a: "After invite, the Discord bot delivers your key automatically. Keys are bound to your Discord ID and machine. Don't share them.",
  },
  {
    q: "Which games are supported?",
    a: "Check the Games page — that's kept up to date. Currently Phantom Forces, Operation One, and the Universal overlay for unsupported titles.",
  },
  {
    q: "Do you offer refunds?",
    a: "All sales are final. Digital product, no exceptions. If something is genuinely broken on our end we'll sort it out — but \"I changed my mind\" isn't a refund case.",
  },
  {
    q: "Can I write my own scripts?",
    a: "Yes. Pegasus ships with a scripting API. Custom logic, custom visuals, chat commands — ask in Discord for docs.",
  },
];

const Faq = () => (
  <MainLayout>
    {/* skipping PageTitle here intentionally — header + description inline is cleaner for a FAQ */}
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 px-2 py-1 inset-block font-mono text-[10px] uppercase text-primary mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> help.idx
      </div>
      <h1 className="font-pixel text-4xl md:text-5xl uppercase tracking-wider text-foreground text-shadow-pixel">
        FREQUENTLY <span className="text-primary">ASKED</span>
      </h1>
    </div>

    {/* most common question gets its own callout up top — people miss it in the accordion */}
    <Panel title="// quick answer on safety" className="mb-6">
      <p className="font-mono text-xs text-muted-foreground leading-relaxed">
        <span className="text-warning">No cheat is undetectable forever.</span> We stay ahead, but games update. Check the game status page before you play.
        If a title shows "updating" — wait. Don't run it and then complain you got flagged.
      </p>
    </Panel>

    <Panel title="faq.dat">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`} className="border-border">
            <AccordionTrigger className="font-pixel text-sm uppercase tracking-wider hover:text-primary hover:no-underline">
              <span className="text-primary mr-3">{String(i + 1).padStart(2, "0")}.</span>
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-mono text-xs text-muted-foreground leading-relaxed pl-9">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Panel>

    <p className="font-mono text-xs text-muted-foreground mt-6">
      Still not answered?{" "}
      <a href="https://discord.gg/pegasustech" className="text-primary hover:underline">
        Ask in /discord
      </a>
      . We're usually around.
    </p>
  </MainLayout>
);

export default Faq;
