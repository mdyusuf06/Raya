import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeSection from "@/components/FadeSection";
import collectionRings from "@/assets/collection-rings.jpg";
import collectionEarrings from "@/assets/collection-earrings.jpg";
import collectionNecklace from "@/assets/collection-necklace.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import customCraft from "@/assets/custom-craft.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import heroRing from "@/assets/hero-ring.webp";

const collectionData: Record<string, { title: string; description: string; images: string[] }> = {
  "engagement-rings": {
    title: "Engagement Rings",
    description: "Discover our exquisite collection of lab-grown diamond engagement rings, each crafted to symbolize your unique love story.",
    images: [collectionRings, heroBg, heroRing, collectionRings, heroBg, heroRing],
  },
  earrings: {
    title: "Diamond Earrings",
    description: "Elegant diamond earrings that add a touch of brilliance to every occasion.",
    images: [collectionEarrings, collectionEarrings, collectionEarrings, collectionEarrings, collectionEarrings, collectionEarrings],
  },
  necklaces: {
    title: "Necklaces & Pendants",
    description: "Timeless necklaces and pendants featuring certified lab-grown diamonds.",
    images: [collectionNecklace, collectionNecklace, collectionNecklace, collectionNecklace, collectionNecklace, collectionNecklace],
  },
  bridal: {
    title: "Bridal Jewellery",
    description: "Complete your bridal look with our stunning diamond jewellery sets.",
    images: [collectionBridal, collectionBridal, collectionBridal, collectionBridal, collectionBridal, collectionBridal],
  },
  custom: {
    title: "Custom Jewellery",
    description: "Create your dream piece with our bespoke design service.",
    images: [customCraft, customCraft, customCraft, customCraft, customCraft, customCraft],
  },
};

const CollectionPage = () => {
  const { slug } = useParams();
  const data = collectionData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl mb-4">Collection Not Found</h1>
          <Link to="/" className="luxury-btn-outline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeSection>
            <Link to="/#collections" className="text-[10px] tracking-[0.25em] uppercase text-primary/60 hover:text-primary transition-colors mb-8 inline-block">
              ← All Collections
            </Link>
            <div className="luxury-divider mb-8" />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">{data.title}</h1>
            <p className="font-sub text-base md:text-lg text-muted-foreground max-w-2xl mb-16">{data.description}</p>
          </FadeSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.images.map((img, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div className="luxury-card overflow-hidden group cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img src={img} alt={`${data.title} ${i + 1}`} className="w-full h-full object-cover img-zoom" />
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-700 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <a
                      href="#enquire"
                      className="luxury-btn-primary text-[10px] px-6 py-2.5"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Enquiry CTA */}
          <FadeSection delay={400}>
            <div id="enquire" className="text-center mt-20">
              <h2 className="font-heading text-2xl md:text-3xl mb-4">Interested in this collection?</h2>
              <p className="text-sm text-muted-foreground mb-8">Book a private consultation to view these pieces in person.</p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/#contact" className="luxury-btn-primary">Book Consultation</Link>
                <a href="tel:+917019663153" className="luxury-btn-outline">Call Us</a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CollectionPage;
