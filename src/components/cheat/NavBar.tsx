import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/pegasus-logo.png";

// this ordering felt right at the time, leaving it
const links = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/pricing", label: "Pricing" },
  { to: "/media", label: "Media" },
  { to: "/faq", label: "FAQ" },
  { to: "/tos", label: "TOS" },
];

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container flex h-14 items-center gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-8 w-8 place-items-center raised-block">
            <img src={logo} alt="Pegasus.Tech" className="h-5 w-5" />
          </span>
          <span className="font-pixel text-lg tracking-wider text-foreground text-shadow-pixel">
            PEGASUS<span className="text-primary">.TECH</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-3 py-1.5 text-xs font-pixel uppercase tracking-wider transition",
                  "border border-transparent",
                  isActive
                    ? "raised-block text-primary"
                    : "text-muted-foreground hover:text-foreground hover:border-border"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-2 px-2 py-1 inset-block font-mono text-[10px] uppercase text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success pulse-dot" />
            ONLINE
          </span>
          <Link
            to="/login"
            className={cn(
              "raised-block px-3 py-1.5 font-pixel text-xs uppercase tracking-wider",
              pathname === "/login" ? "text-primary" : "text-foreground"
            )}
          >
            [ LOG IN ]
          </Link>
        </div>
      </div>
      <div className="h-px w-full accent-bar opacity-60" />
    </header>
  );
};
