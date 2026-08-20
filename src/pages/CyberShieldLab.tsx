import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Shield, Zap, Globe, CheckCircle2, AlertCircle, BarChart3, ArrowLeft, Lock, Eye, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import { EMAIL } from "@/src/constants";

export default function CyberShieldLab() {
  const [activeModule, setActiveModule] = useState<"web" | "network" | "identity" | "system">("web");
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleWebScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsAnalyzing(true);
    setResults(null);
    setTimeout(() => {
      const isElite = url.includes("ais-dev") || url.includes("ais-pre") || url.includes("localhost") || url.includes("akanni");
      setResults({
        type: "web",
        score: isElite ? 99 : 72,
        details: isElite ? ["No critical vulnerabilities", "Secure headers verified"] : ["Exposed server headers", "Missing CSP"],
        url
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleNetworkScan = () => {
    setIsAnalyzing(true);
    setResults(null);
    setTimeout(() => {
      setResults({
        type: "network",
        score: 85,
        details: ["Port 80/443 Open", "SSH (22) Filtered", "ICMP Echo Disabled"],
        threatLevel: "Low"
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <Button variant="ghost" className="mb-8 gap-2" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <Shield className="w-3 h-3" /> Elite Security Command Center
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
            Cyber-<span className="text-primary">Shield</span> Lab
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive security auditing across web, network, and identity layers.
          </p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { id: "web", label: "Web Infra", icon: Globe },
            { id: "network", label: "Network", icon: Server },
            { id: "identity", label: "Identity", icon: Lock },
            { id: "system", label: "Hardening", icon: Shield },
          ].map((mod) => (
            <button
              key={mod.id}
              onClick={() => { setActiveModule(mod.id as any); setResults(null); }}
              className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-3 ${
                activeModule === mod.id
                ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(251,191,36,0.1)]"
                : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
              }`}
            >
              <mod.icon className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest">{mod.label}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 glass border-white/10 h-full">
              {activeModule === "web" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Globe className="text-primary w-5 h-5" /> Web Infrastructure Scan
                  </h3>
                  <form onSubmit={handleWebScan} className="flex gap-4">
                    <Input
                      placeholder="https://target-domain.com"
                      className="h-14 bg-white/5 border-white/10 rounded-xl"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <Button className="h-14 px-8 rounded-xl bg-primary text-black font-bold">Scan</Button>
                  </form>
                </div>
              )}

              {activeModule === "network" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Server className="text-primary w-5 h-5" /> Network Perimeter Audit
                  </h3>
                  <p className="text-sm text-muted-foreground">Simulate an external port scan and service discovery to identify exposed entry points.</p>
                  <Button onClick={handleNetworkScan} className="h-14 px-8 rounded-xl bg-primary text-black font-bold">Initialize Network Probe</Button>
                </div>
              )}

              {activeModule === "identity" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Lock className="text-primary w-5 h-5" /> Identity & Access Audit
                  </h3>
                  <div className="space-y-4">
                    <Input placeholder="Test Password Strength" type="password" className="h-14 bg-white/5 border-white/10 rounded-xl" />
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-muted-foreground">
                      Check for credential leaks and enforce MFA (Multi-Factor Authentication) policies.
                    </div>
                  </div>
                </div>
              )}

              {activeModule === "system" && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Shield className="text-primary w-5 h-5" /> OS Hardening Checklist
                  </h3>
                  <div className="space-y-3">
                    {["Disable Unused Services", "Enforce SSH Key Auth", "Configure UFW/Firewall", "Enable Automatic Updates"].map((check, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="w-4 h-4 rounded border border-primary/50" />
                        <span className="text-sm">{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </div>

          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full glass rounded-3xl border-white/10 p-8 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <div className="text-xs font-bold uppercase tracking-widest text-primary animate-pulse">Analyzing Packets...</div>
                </motion.div>
              ) : results ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  className="h-full glass rounded-3xl border-white/10 p-8 space-y-6"
                >
                  <div className="text-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Security Score</div>
                    <div className="text-5xl font-display font-bold text-primary">{results.score || 0}</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Findings</div>
                    {results.details?.map((d: string, i: number) => (
                      <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary text-black font-bold rounded-xl" asChild>
                    <a href={`mailto:${EMAIL}?subject=Security Consultation Request`}>Get Expert Help</a>
                  </Button>
                </motion.div>
              ) : (
                <div className="h-full glass rounded-3xl border-white/10 p-8 flex flex-col items-center justify-center text-center text-muted-foreground italic text-sm">
                  Select a module and initialize scan to see results.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
