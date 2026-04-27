export type GameStatus = "operational" | "updating" | "detected";

export interface DetectionEvent {
  date: string;
  resolved: string;
  note: string;
}

export interface Game {
  slug: string;
  code: string;
  name: string;
  version: string;
  status: GameStatus;
  ac: string;
  publisher: string;
  users: number;
  uptime?: number; // not always tracked on newer titles
  description: string;
  overview: string;
  features: string[];
  requirements: { os: string; cpu: string; ram: string; gpu: string };
  history: DetectionEvent[];
}

export const games: Game[] = [
  {
    slug: "phantom-forces",
    code: "PF",
    name: "Phantom Forces",
    version: "v3.8.2",
    status: "updating",
    ac: "Byfron + Hyperion",
    publisher: "StyLiS Studios",
    users: 1820,
    uptime: 214,
    description: "Roblox's flagship FPS — silent aim, full ESP, per-weapon recoil scripts.",
    overview:
      "Hyperion-aware injection with byte-pattern hygiene tuned specifically for Phantom Forces' gun mechanics. Recoil profiles exist per weapon class, killcam-safe smoothing, and a tournament-grade ragebot for when you're done pretending to be legit.",
    features: [
      "Silent aim (FOV + smoothing)",
      "Per-weapon recoil scripts",
      "Full skeleton + box ESP",
      "Hitbox extender (head)",
      "Killcam-safe smoothing",
      "Streamer-mode overlay",
    ],
    requirements: { os: "Windows 10/11 x64", cpu: "Intel i5-8400 / Ryzen 5 2600", ram: "8 GB", gpu: "GTX 1060 or better" },
    history: [
      { date: "2026-02-18", resolved: "Resolved in 3h", note: "Hyperion signature update — patched same day." },
      { date: "2025-11-02", resolved: "Resolved in 6h", note: "Byfron memory shift after Roblox client update." },
    ],
  },
  {
    // operation one is newer — less history, still finding its feet
    slug: "operation-one",
    name: "Operation One",
    code: "OP1",
    publisher: "Independent",
    version: "v1.4.0",
    status: "updating",
    ac: "Custom (server-side)",
    users: 612,
    description: "Tactical milsim — long-range trajectory solver and squad-aware ESP.",
    overview:
      "Built ground-up for Operation One's slower TTK and ballistic system. Bullet-drop solver accounts for muzzle velocity, gravity, and wind. Squad-aware ESP filters teammates out and tags objectives separately. Server-side AC means we're careful with timing.",
    features: [
      "Bullet-drop + wind solver",
      "Squad / faction filter",
      "Objective + extract ESP",
      "Vehicle-aware tracers",
      "Mil-grade no-recoil",
      "Configurable hotkeys",
    ],
    requirements: { os: "Windows 10/11 x64", cpu: "Intel i7-9700 / Ryzen 5 3600", ram: "16 GB", gpu: "RTX 2060 or better" },
    history: [
      { date: "2026-01-22", resolved: "Resolved in 1h", note: "Server-side anomaly check tripped — config tweak fixed it." },
    ],
  },
  {
    slug: "universal",
    code: "UNI",
    name: "Universal",
    version: "v0.9.4",
    status: "updating",
    ac: "Varies",
    publisher: "Pegasus Labs",
    users: 0,
    // no uptime here — this one gets reset too often to track meaningfully
    description: "Cross-title overlay: ESP and aim assist for any DX11/12 title we haven't formally targeted yet.",
    overview:
      "Generic D3D11/12 overlay with pluggable signature packs. Ships with community profiles for dozens of indie and AA shooters. Use at your own risk — coverage varies a lot per title and we make no guarantees here.",
    features: [
      "Generic D3D11/12 overlay",
      "Community signature packs",
      "Color picker + theming",
      "Crosshair customizer",
      "FPS / netgraph HUD",
      "Profile import / export",
    ],
    requirements: { os: "Windows 10/11 x64", cpu: "Quad-core 3.0 GHz+", ram: "8 GB", gpu: "DirectX 11 capable" },
    history: [
      { date: "2026-03-30", resolved: "Active", note: "Rewriting overlay hook for Win11 24H2. Taking longer than expected." },
    ],
  },
];
