import { useState, useEffect } from "react";
import logoIcon from "@/assets/raya-logo-icon.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-700 ${
        phase >= 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className={`transition-all duration-1000 ${phase >= 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <img src={logoIcon} alt="Raya" className="w-20 h-auto mb-8 rounded-sm" />
      </div>

      {/* Brand text */}
      <div className={`text-center transition-all duration-1000 delay-300 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h1 className="font-heading text-2xl md:text-3xl tracking-[0.3em] uppercase mb-3 gold-gradient-text">
          Raya Diamonds
        </h1>
        <p className="font-sub text-sm md:text-base tracking-[0.25em] uppercase text-muted-foreground">
          Luxury Lab Grown Diamonds
        </p>
        <p className="font-sub text-xs tracking-[0.2em] uppercase text-muted-foreground/60 mt-1">
          Bangalore
        </p>
      </div>

      {/* Loading bar */}
      <div className="mt-12 w-40 h-px bg-secondary overflow-hidden">
        <div
          className="h-full gold-gradient-bg transition-all duration-[2500ms] ease-out"
          style={{ width: phase >= 1 ? "100%" : "0%" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
