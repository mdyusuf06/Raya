import customCraft from "@/assets/custom-craft.jpg";
import FadeSection from "./FadeSection";

const steps = [
  { num: "01", title: "Consultation", desc: "Share your vision with our diamond experts in a private setting." },
  { num: "02", title: "Design Selection", desc: "Choose from exclusive designs or create something entirely new." },
  { num: "03", title: "Diamond Selection", desc: "Hand-pick your certified lab-grown diamond for brilliance." },
  { num: "04", title: "Crafting", desc: "Master artisans bring your design to life with precision." },
  { num: "05", title: "Your Masterpiece", desc: "Receive your one-of-a-kind creation, crafted with love." },
];

const CustomJewellery = () => {
  return (
    <section id="custom" className="luxury-section bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeSection>
              <div className="luxury-divider mb-8" />
              <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">Bespoke Creations</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-10">
                Your Vision, <span className="gold-gradient-text italic">Our Craft</span>
              </h2>
            </FadeSection>

            <div className="space-y-7 mb-12">
              {steps.map((s, i) => (
                <FadeSection key={s.num} delay={i * 100}>
                  <div className="flex items-start gap-6 group">
                    <span className="text-xl font-heading gold-gradient-text font-light min-w-[2.5rem]">{s.num}</span>
                    <div>
                      <h3 className="font-heading text-base mb-1">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>

            <FadeSection delay={500}>
              <a href="#contact" className="luxury-btn-primary">
                Start Custom Design
              </a>
            </FadeSection>
          </div>

          <FadeSection delay={200}>
            <div className="relative group">
              <div className="absolute -inset-6 rounded-sm bg-gradient-to-tr from-gold-dark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img src={customCraft} alt="Custom jewellery crafting" className="w-full rounded-sm relative z-10" />
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

export default CustomJewellery;
