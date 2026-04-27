import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";
import { Wrench, ArrowRight } from "lucide-react";

const Login = () => (
  <MainLayout>
    <div className="max-w-xl mx-auto mt-8">
      <Panel title="auth.exe — status: maintenance">
        <div className="text-center py-6">
          <div className="mx-auto h-14 w-14 grid place-items-center raised-block mb-5">
            <Wrench className="h-6 w-6 text-primary" />
          </div>
          <h1 className="font-pixel text-3xl uppercase text-shadow-pixel">
            LOGIN IS UNDER <span className="text-primary">MAINTENANCE</span>
          </h1>
          <p className="font-mono text-xs text-muted-foreground mt-3 max-w-sm mx-auto leading-relaxed">
            Auth is being reworked. Use Discord in the meantime — that's where support and access happen anyway.
          </p>

          <div className="mt-6 inset-block p-3 text-left font-mono text-xs text-muted-foreground">
            <div><span className="text-primary">user@pegasus</span>:~$ login --user</div>
            <div className="text-warning">[warn] auth_service unreachable</div>
            <div>[..] redirecting to discord<span className="blink">_</span></div>
          </div>

          <a
            href="https://discord.gg/pegasustech"
            className="inline-flex items-center gap-2 mt-6 raised-block px-5 py-2.5 font-pixel text-sm uppercase tracking-wider text-primary"
          >
            VISIT OUR DISCORD <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Panel>
    </div>
  </MainLayout>
);

export default Login;
