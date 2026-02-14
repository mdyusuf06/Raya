import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoFull from "@/assets/raya-logo-full.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Collections", href: "/#collections" },
  { label: "Custom", href: "/#custom" },
  { label: "Visit Store", href: "/#showroom" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left: menu items (desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:text-primary transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile: hamburger */}
        <button className="lg:hidden text-foreground/70" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Right: Logo (big, prominent) */}
        <a href="/#home" className="flex-shrink-0">
          <img src={logoFull} alt="Raya Diamonds" className="h-10 md:h-14" />
        </a>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden glass-nav mt-1 py-8 px-6 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-[11px] tracking-[0.25em] uppercase text-foreground/60 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
