import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import FadeSection from "./FadeSection";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    requirement: "Engagement Ring",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.full_name.trim() || !form.phone.trim()) return;

    setLoading(true);
    try {
      // SAVE TO SUPABASE
      const { error } = await supabase.from("leads").insert({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        requirement: form.requirement,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      // TELEGRAM ALERT (SAFE)
      try {
        await fetch(
          `https://api.telegram.org/bot8584385290:AAEuqK6NtoQWpy1LBnMf7yT446OT6JuIdP8/sendMessage`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: "1285801377",
              text: `💎 New Raya Diamonds Lead

              👤 Name: ${form.full_name}
              📞 Phone: ${form.phone}
              📧 Email: ${form.email}
              💍 Requirement: ${form.requirement}
              📝 Message: ${form.message}`,
            }),
          }
        );
      } catch {
        console.log("Telegram failed but lead saved");
      }

      toast({
        title: "Thank you",
        description:
          "Our diamond consultant will contact you shortly to arrange your private visit.",
      });

      setForm({
        full_name: "",
        phone: "",
        email: "",
        requirement: "Engagement Ring",
        message: "",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="luxury-section">
      <div className="container mx-auto px-6">
        <FadeSection>
          <div className="text-center mb-20">
            <div className="luxury-divider mx-auto mb-8" />
            <p className="font-sub text-sm tracking-[0.3em] uppercase text-primary/80 mb-4">
              Connect
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
              Book a Private{" "}
              <span className="gold-gradient-text italic">Consultation</span>
            </h2>
            <p className="max-w-lg mx-auto text-sm text-muted-foreground">
              Enter your details and our team will contact you shortly.
            </p>
          </div>
        </FadeSection>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* LEFT INFO */}
          <FadeSection delay={100}>
            <div className="space-y-10">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-sm bg-secondary/60">
                  <MapPin size={18} className="text-primary" />
                </div>
                  <div>
                  <h3 className="font-heading text-base mb-1.5">Our Boutique</h3>

                  <a
                    href="https://maps.app.goo.gl/SjU7HB6AhNPaaTZ89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    121, 6th C Main Road, 4th Block, Jayanagar
                    <br />
                    Bengaluru, Karnataka 560011
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-sm bg-secondary/60">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base mb-1.5">Call Us</h3>
                  <a href="tel:+917019663153" className="text-xs text-muted-foreground">
                    +91 70196 63153
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-sm bg-secondary/60">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base mb-1.5">Hours</h3>
                  <p className="text-xs text-muted-foreground">
                    Mon – Sat: 10:30 AM – 8:00 PM
                    <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </FadeSection>

          {/* FORM */}
          <FadeSection delay={200}>
            <div className="luxury-card p-8 md:p-10 h-fit">
              <h3 className="font-heading text-xl mb-6">Request Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  required
                  placeholder="Full Name"
                  className="luxury-input"
                  value={form.full_name}
                  onChange={(e) =>
                    setForm({ ...form, full_name: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Phone Number"
                  className="luxury-input"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <input
                  placeholder="Email"
                  className="luxury-input"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

                {/* REQUIREMENT DROPDOWN FIXED */}
                <select
                  value={form.requirement}
                  onChange={(e) =>
                    setForm({ ...form, requirement: e.target.value })
                  }
                  className="luxury-input text-white bg-[#0b1220]"
                  style={{ color: "white" }}
                >
                  <option className="text-white">Engagement Ring</option>
                  <option className="text-white">Diamond Earrings</option>
                  <option className="text-white">Necklace</option>
                  <option className="text-white">Bridal Jewellery</option>
                  <option className="text-white">Custom Jewellery</option>
                  <option className="text-white">Visit Showroom</option>
                  <option className="text-white">General Enquiry</option>
                </select>

                <textarea
                  placeholder="Message"
                  className="luxury-input resize-none"
                  rows={3}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full luxury-btn-primary py-4"
                >
                  <Send size={14} />
                  {loading ? "Sending..." : "Request Consultation"}
                </button>
              </form>
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
