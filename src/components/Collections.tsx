import { Link } from "react-router-dom";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionNecklace from "@/assets/collection-necklace.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import customCraft from "@/assets/custom-craft.jpg";
import FadeSection from "./FadeSection";

const collections = [
  { title: "Engagement Rings", image: collectionRings, slug: "engagement-rings" },
  { title: "Diamond Earrings", image: collectionEarrings, slug: "earrings" },
  { title: "Necklaces & Pendants", image: collectionNecklace, slug: "necklaces" },
  { title: "Bridal Jewellery", image: collectionBridal, slug: "bridal" },
  { title: "Custom Jewellery", image: customCraft, slug: "custom" },
];

const Collections = () => {
  return (
    <section id="collections" className="luxury-section">
      <div className="container mx-auto px-6 text-center">
        <FadeSection>
          <div className="luxury-divider mx-auto mb-8" />
          <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">Our Curated Selection</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-20">
            Exquisite <span className="gold-gradient-text italic">Collections</span>
          </h2>
        </FadeSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.map((c, i) => (
            <FadeSection key={c.slug} delay={i * 100}>
              <Link
                to={`/collection/${c.slug}`}
                className="luxury-card group cursor-pointer overflow-hidden block"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <h3 className="font-heading text-lg text-foreground mb-1">{c.title}</h3>
                  <p className="text-[10px] text-primary tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                    Explore Collection →
                  </p>
                </div>
              </Link>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
