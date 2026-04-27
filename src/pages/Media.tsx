import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { PageTitle } from "@/components/cheat/PageTitle";
import { Play } from "lucide-react";

// real videos will go here once the channel gets more content — placeholder for now
const videos = [
  { id: "eCO3DfCP1-s", title: "Pegasus.Tech — Legit Showcase", channel: "flairedog" },
  { id: "eCO3DfCP1-s", title: "Pegasus.Tech — HvH Highlights", channel: "flairedog" },
  { id: "eCO3DfCP1-s", title: "Pegasus.Tech — Loader Walkthrough", channel: "flairedog" },
];

const Media = () => (
  <MainLayout>
    <PageTitle
      eyebrow="// media.vault"
      title="MEDIA"
      highlight="VAULT"
      description="Showcases, tutorials, and highlights from the community."
    />

    <Panel title="see_it_in_action.mp4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/watch?v=${v.id}`}
            target="_blank"
            rel="noreferrer"
            className="block panel hover:shadow-glow transition"
          >
            <div className="relative aspect-video overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                className="h-full w-full"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 scanline opacity-30" />
            </div>
            <div className="px-3 py-2 panel-header flex items-center gap-2">
              <Play className="h-3 w-3 text-primary" />
              <div>
                <div className="font-pixel text-sm uppercase">{v.title}</div>
                <div className="font-mono text-[10px] text-muted-foreground">@{v.channel}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Panel>
  </MainLayout>
);

export default Media;
