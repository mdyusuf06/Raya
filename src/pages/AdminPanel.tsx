import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      onLogin();
    } catch (err: any) {
      toast({ title: "Login failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm">
        <div className="luxury-divider mx-auto mb-8" />
        <h1 className="font-heading text-2xl text-center mb-2">Admin Access</h1>
        <p className="text-xs text-muted-foreground text-center mb-8">Raya Diamonds Lead Dashboard</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="luxury-input" placeholder="Email" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="luxury-input" placeholder="Password" />
          <button type="submit" disabled={loading} className="w-full luxury-btn-primary py-3 disabled:opacity-50">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

interface Lead {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  requirement: string;
  message: string | null;
  created_at: string;
}

const AdminPanel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session);
      setChecking(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setChecking(false);
    });
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetchLeads();
  }, [authed]);

  const fetchLeads = async () => {
    setLoadingLeads(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error loading leads", description: error.message, variant: "destructive" });
    } else {
      setLeads((data as Lead[]) || []);
    }
    setLoadingLeads(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setAuthed(false);
  };

  if (checking) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground text-sm">Loading...</p></div>;
  }

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 py-4 px-6 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-lg">Lead Dashboard</h1>
          <p className="text-[10px] text-muted-foreground tracking-wider uppercase">Raya Diamonds</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")} className="text-xs text-muted-foreground hover:text-primary transition-colors">← Website</button>
          <button onClick={handleLogout} className="luxury-btn-outline text-[10px] px-4 py-2"><LogOut size={12} /> Sign Out</button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-xl">Enquiries ({leads.length})</h2>
          <button onClick={fetchLeads} disabled={loadingLeads} className="text-[10px] tracking-wider uppercase text-primary hover:underline">
            {loadingLeads ? "Loading..." : "Refresh"}
          </button>
        </div>

        {leads.length === 0 ? (
          <div className="luxury-card p-12 text-center">
            <p className="text-sm text-muted-foreground">No enquiries yet. Leads will appear here when customers submit the consultation form.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="luxury-card p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="font-heading text-base">{lead.full_name}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <a href={`tel:${lead.phone}`} className="hover:text-primary transition-colors">{lead.phone}</a>
                      {lead.email && <a href={`mailto:${lead.email}`} className="hover:text-primary transition-colors">{lead.email}</a>}
                    </div>
                    <p className="text-[10px] tracking-wider uppercase text-primary">{lead.requirement}</p>
                    {lead.message && <p className="text-xs text-muted-foreground mt-2 italic">"{lead.message}"</p>}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[10px] text-muted-foreground/60">
                      {new Date(lead.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                    <p className="text-[10px] text-muted-foreground/40">
                      {new Date(lead.created_at).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
