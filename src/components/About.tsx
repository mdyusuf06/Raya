import { Diamond, Gem, Award, Heart } from "lucide-react";
import heroRing from "@/assets/hero-ring.webp";
import FadeSection from "./FadeSection";

const About = () => {
  return (
    <section id="about" className="luxury-section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <FadeSection>
            <div className="relative group">
              <div className="absolute -inset-6 rounded-sm bg-gradient-to-tr from-gold-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img src={heroRing} alt="Raya Diamonds Ring" className="w-full rounded-sm relative z-10" />
            </div>
          </FadeSection>

          {/* Content */}
          <div>
            <FadeSection delay={100}>
              <div className="luxury-divider mb-8" />
              <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8">
                Where <span className="gold-gradient-text italic">Elegance</span> Meets Ethics
              </h2>
            </FadeSection>

            <FadeSection delay={200}>
              <p className="text-muted-foreground leading-[1.8] mb-5 text-sm">
                Raya Diamonds is a premium lab-grown diamond jewellery boutique in Jayanagar, Bangalore, specializing in custom engagement rings and modern fine diamond jewellery. We believe that true luxury doesn't require compromise — our ethically created diamonds are chemically, physically, and optically identical to mined diamonds.
              </p>
              <p className="text-muted-foreground leading-[1.8] mb-12 text-sm">
                Every piece at Raya Diamonds is crafted with meticulous attention to detail, combining timeless design sensibility with contemporary aesthetics.
              </p>
            </FadeSection>

            <FadeSection delay={300}>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { icon: Diamond, label: "Lab Grown", sub: "Ethically Created" },
                  { icon: Gem, label: "Custom Design", sub: "Made for You" },
                  { icon: Award, label: "Certified", sub: "IGI & GIA" },
                  { icon: Heart, label: "Handcrafted", sub: "With Precision" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    {/* icon box slightly bigger */}
                    <div className="p-3 rounded-sm bg-secondary/60">
                      <item.icon size={22} className="text-primary" strokeWidth={1.5} />
                    </div>

                    <div>
                      <p className="text-sm font-medium tracking-wider uppercase text-foreground/95">
                        {item.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
