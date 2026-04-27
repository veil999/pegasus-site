import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Tos from "./pages/Tos.tsx";
import Pricing from "./pages/Pricing.tsx";
import GameLibrary from "./pages/GameLibrary.tsx";
import GameDetail from "./pages/GameDetail.tsx";
import Media from "./pages/Media.tsx";
import Faq from "./pages/Faq.tsx";
import Login from "./pages/Login.tsx";

// TODO: might need react-query back if we ever hit a real API — pulled it for now
const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/games" element={<GameLibrary />} />
        <Route path="/games/:slug" element={<GameDetail />} />
        <Route path="/media" element={<Media />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
