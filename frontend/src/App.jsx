import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09080f] font-sans relative overflow-x-hidden">

      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_10%,rgba(124,58,237,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_85%,rgba(139,92,246,0.10),transparent)]" />
      </div>

      {/* Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}