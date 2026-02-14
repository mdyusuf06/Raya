import showroom1 from "@/assets/showroom-1.webp";
import showroom2 from "@/assets/showroom-2.webp";
import storefront from "@/assets/storefront.webp";
import FadeSection from "./FadeSection";
import { MapPin, Phone } from "lucide-react";

const StoreExperience = () => {
  return (
    <section id="showroom" className="luxury-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <FadeSection>
            <div className="luxury-divider mx-auto mb-8" />
            <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">The Boutique</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-5">
              Visit Our Luxury <span className="gold-gradient-text italic">Diamond Boutique</span>
            </h2>
            <p className="max-w-xl mx-auto text-sm text-muted-foreground leading-relaxed">
              Experience personalised diamond consultation and explore exclusive collections at our premium showroom in Jayanagar, Bangalore.
            </p>
          </FadeSection>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {[storefront, showroom1, showroom2].map((img, i) => (
            <FadeSection key={i} delay={i * 150}>
              <div className="luxury-card overflow-hidden group aspect-[4/3]">
                <img src={img} alt={`Raya Diamonds Showroom`} className="w-full h-full object-cover img-zoom" />
              </div>
            </FadeSection>
          ))}
        </div>

        <FadeSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://maps.app.goo.gl/SjU7HB6AhNPaaTZ89"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-primary"
            >
              <MapPin size={14} />
              Get Directions
            </a>
            <a
              href="tel:+917019663153"
              className="luxury-btn-outline flex items-center gap-2"
            >
              <Phone size={14} />
              Call Store
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  );
};

export default StoreExperience;
