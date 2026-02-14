import heroBg from "@/assets/hero-bg.jpg";
import { MapPin, Calendar } from "lucide-react";
import FadeSection from "./FadeSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover img-zoom"
          style={{
            transform: "scale(1.05)",
            animation: "heroZoom 20s ease-in-out infinite alternate",
          }}
        />

        {/* 🔥 DARK LUXURY OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20"></div>
      </div>

      {/* Zoom animation */}
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <FadeSection>
          <div className="luxury-divider mx-auto mb-10" />
        </FadeSection>

        <FadeSection delay={200}>
          <p className="font-sub text-sm md:text-base tracking-[0.35em] uppercase text-primary/80 mb-8">
            Bangalore's Premier Diamond Boutique
          </p>
        </FadeSection>

        <FadeSection delay={400}>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.15] mb-8">
            Your Love Is{" "}
            <span className="gold-gradient-text italic">Rare.</span>
            <br />
            Your Ring Should Be{" "}
            <span className="gold-gradient-text italic">Too.</span>
          </h1>
        </FadeSection>

        <FadeSection delay={600}>
          <p className="max-w-xl mx-auto font-sub text-lg md:text-xl text-white/80 mb-12 tracking-wide">
            Custom engagement rings & fine lab-grown diamond jewellery.
          </p>
        </FadeSection>

        <FadeSection delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="luxury-btn-primary">
              <Calendar size={14} />
              Book Consultation
            </a>

            <a
              href="https://maps.app.goo.gl/SjU7HB6AhNPaaTZ89"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-outline"
            >
              <MapPin size={14} />
              Visit Store
            </a>


            <a href="#collections" className="luxury-btn-outline">
              View Collections
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  );
};

export default Hero;
