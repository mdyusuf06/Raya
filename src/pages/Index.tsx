import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Collections from "@/components/Collections";
import CustomJewellery from "@/components/CustomJewellery";
import StoreExperience from "@/components/StoreExperience";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <div className="min-h-screen">
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Collections />
        <CustomJewellery />
        <StoreExperience />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
