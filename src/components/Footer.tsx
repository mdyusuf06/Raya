import { Phone, MapPin, Instagram } from "lucide-react";
import logoFull from "@/assets/raya-logo-full.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-20 pb-8 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <img src={logoFull} alt="Raya Diamonds" className="h-16 mb-6" />
            <p className="text-xs text-muted-foreground leading-[1.9] max-w-sm">
              Bangalore's premier lab-grown diamond jewellery boutique. Specialising in custom engagement rings and fine diamond jewellery crafted with precision and passion.
            </p>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.20em] uppercase mb-5 text-primary font-bold">
              Quick Links
            </h4>

            <div className="space-y-3">
              {[
                { label: "About", href: "/#about" },
                { label: "Collections", href: "/#collections" },
                { label: "Custom Jewellery", href: "/#custom" },
                { label: "Showroom", href: "/#showroom" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block text-xs text-muted-foreground hover:text-primary transition-colors duration-500">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.20em] uppercase mb-5 text-primary font-bold">
              Connect
            </h4>
            <div className="space-y-3">
              <a href="tel:+917019663153" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-500">
                <Phone size={12} /> +91 70196 63153
              </a>
              <a href="https://maps.app.goo.gl/SjU7HB6AhNPaaTZ89" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-500">
                <MapPin size={12} /> Jayanagar, Bangalore
              </a>
              <a
                href="https://www.instagram.com/raya_diamonds/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                <Instagram size={12} /> @raya_diamonds
              </a>

            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/50">© 2026 Raya Diamonds. All rights reserved.</p>
          <p className="text-[10px] text-muted-foreground/50">Lab Grown Diamonds Bangalore • Engagement Rings • Custom Diamond Jewellery</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
