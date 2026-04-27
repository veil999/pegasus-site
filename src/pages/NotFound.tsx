import { Link } from "react-router-dom";
import { MainLayout } from "@/components/cheat/MainLayout";
import { Panel } from "@/components/cheat/Panel";

const NotFound = () => (
  <MainLayout>
    <div className="max-w-xl mx-auto mt-12">
      <Panel title="error.log">
        <div className="text-center py-6">
          <div className="font-pixel text-7xl text-primary text-shadow-pixel">404</div>
          <div className="font-pixel text-lg uppercase mt-2">PAGE NOT FOUND</div>
          <p className="font-mono text-xs text-muted-foreground mt-3">
            That route doesn't exist. If you got here from a link, something's broken.
          </p>
          <Link to="/" className="inline-block mt-5 raised-block px-5 py-2.5 font-pixel text-sm uppercase text-primary">
            [ RETURN HOME ]
          </Link>
        </div>
      </Panel>
    </div>
  </MainLayout>
);

export default NotFound;
