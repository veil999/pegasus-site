import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

// footer is simple enough it doesn't need its own file tbh
const Footer = () => (
  <footer className="mt-16 border-t border-border bg-panel/40">
    <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="font-pixel text-foreground tracking-wider">PEGASUS.TECH</span>
        <span>// build 2026.04 — forged in frost</span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/tos" className="hover:text-primary">terms_of_service.txt</Link>
        <a href="https://discord.gg/pegasustech" className="hover:text-primary">discord.gg/pegasustech</a>
      </div>
    </div>
  </footer>
);

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <NavBar />
    <main className="flex-1 container py-10">{children}</main>
    <Footer />
  </div>
);
