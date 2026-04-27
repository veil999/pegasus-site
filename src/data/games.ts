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
    version: "v0.3.2",
    status: "updating",
    ac: "Custom (server-side)",
    publisher: "StyLiS Studios",
    users: 0,
    description: "High-performance combat suite for PF. Includes optimized ragebot, smooth aimbot, and modular visuals.",
    overview:
      "Engineered for the current PF framework with a focus on bypass stability and performance. Features include RCS, customizable ESP, and customizable aim smoothing to maintain a legit appearance.",
    requirements: { os: "Windows 10/11 x64", cpu: "Intel i5-8400 / Ryzen 5 2600", ram: "8 GB", gpu: "GTX 1060 or better" },
    features: [
      "Ragebot",
      "Customizable visuals",
      "ESP",
      "Hitbox expander",
      "Smooth aimbot & silent aim",
    ],
    history: [
      { date: "2026-06-18", resolved: "ACTIVE", note: "Initial release — Pegasus.tech build live." },
    ],
  },
  {
    // operation one is newer — less history, still finding its feet
    slug: "operation-one",
    name: "Operation One",
    code: "OP1",
    publisher: "Colorful Squares",
    version: "v0.0.1",
    status: "updating",
    ac: "Custom (server-side)",
    users: 0,
    description: "Complete tactical enhancement suite for OP1. Optimized for ballistic tracking and faction-based filtering.",
    overview:
      "Engineered for the current OP1 framework with a focus on bypass stability and performance. Features include RCS, customizable ESP, and customizable aim smoothing to maintain a legit appearance.",
    requirements: { os: "Windows 10/11 x64", cpu: "Intel i5-8400 / Ryzen 5 2600", ram: "8 GB", gpu: "GTX 1060 or better" },
    history: [
      { date: "2026-06-18", resolved: "ACTIVE", note: "Initial release — Pegasus.tech build live." },
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
    description: "Cross-game utility suite designed to function across various titles with standard security environments.",
    overview:
      "Generic universal with pluggable signature packs. Use at your own risk — coverage varies a lot per title and we make no guarantees here.",
    requirements: { os: "Windows 10/11 x64", cpu: "Intel i5-8400 / Ryzen 5 2600", ram: "8 GB", gpu: "GTX 1060 or better" },
    features: [
      "Bang all",
    ],
    history: [
      { date: "2026-06-18", resolved: "ACTIVE", note: "Initial release — Pegasus.tech build live." },
    ],
  },
];
