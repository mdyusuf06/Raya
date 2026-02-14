import { Shield, Sparkles, Store, Palette, BadgeCheck, Users } from "lucide-react";
import FadeSection from "./FadeSection";

const reasons = [
  { icon: Shield, title: "Certified Lab Grown Diamonds", desc: "Every diamond comes with IGI/GIA certification." },
  { icon: Sparkles, title: "Custom Engagement Rings", desc: "Design your dream ring with our expert artisans." },
  { icon: Store, title: "Premium Showroom", desc: "A private, luxury consultation space in Jayanagar." },
  { icon: Palette, title: "Modern Designer Collection", desc: "Contemporary designs blending tradition with modern aesthetics." },
  { icon: BadgeCheck, title: "Transparent Pricing", desc: "Exceptional value without compromising quality." },
  { icon: Users, title: "Trusted in Bangalore", desc: "5.0★ Google rating from delighted customers." },
];

const WhyChoose = () => {
  return (
    <section className="luxury-section bg-secondary/20">
      <div className="container mx-auto px-6 text-center">

        {/* HEADER */}
        <FadeSection>
          <div className="luxury-divider mx-auto mb-8" />

          <p className="font-sub text-sm tracking-[0.35em] uppercase text-primary/80 mb-4">
            The Raya Difference
          </p>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-20">
            Why Choose <span className="gold-gradient-text italic">Raya Diamonds</span>
          </h2>
        </FadeSection>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <FadeSection key={r.title} delay={i * 120}>
              <div className="luxury-card p-10 text-center group h-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]">

                {/* ICON */}
                <div className="w-14 h-14 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-all duration-500">
                  <r.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>

                {/* TITLE */}
                <h3 className="font-heading text-lg md:text-xl tracking-wide text-foreground mb-2">
                  {r.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="font-sub text-sm text-muted-foreground leading-relaxed tracking-wide max-w-[260px] mx-auto">
                  {r.desc}
                </p>

              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
