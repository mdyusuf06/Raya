import { Star } from "lucide-react";
import FadeSection from "./FadeSection";

const testimonials = [
  {
    name: "Priya & Arjun",
    text: "Raya Diamonds crafted the most stunning engagement ring. The attention to detail and the quality exceeded all our expectations. Truly world-class.",
    occasion: "Engagement Ring",
  },
  {
    name: "Meera S.",
    text: "From the moment I walked in, I knew this was different. The showroom feels luxurious, the staff is incredibly knowledgeable, and my custom necklace is breathtaking.",
    occasion: "Custom Necklace",
  },
  {
    name: "Rahul & Sneha",
    text: "We were blown away by the transparency and quality. The diamond certification gave us complete confidence. Our wedding rings from Raya are simply perfect.",
    occasion: "Wedding Rings",
  },
];

const Reviews = () => {
  return (
    <section className="luxury-section bg-secondary/20">
      <div className="container mx-auto px-6 text-center">
        <FadeSection>
          <div className="luxury-divider mx-auto mb-8" />
          <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-5">
            What Our <span className="gold-gradient-text italic">Clients</span> Say
          </h2>

          <div className="flex items-center justify-center gap-2 mb-20">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground text-xs font-medium">5.0</span>
            <span className="text-muted-foreground text-xs">on Google</span>
          </div>
        </FadeSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeSection key={t.name} delay={i * 150}>
              <div className="luxury-card p-8 text-left h-full flex flex-col">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-[1.9] mb-6 italic font-sub text-sm flex-1">"{t.text}"</p>
                <div>
                  <p className="text-xs font-medium text-foreground/90 tracking-wider uppercase">{t.name}</p>
                  <p className="text-[10px] text-primary mt-0.5">{t.occasion}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
