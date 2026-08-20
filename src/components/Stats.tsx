import { useState, useEffect } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Users, CheckCircle, Briefcase, Award, Globe, Activity } from "lucide-react";
import { PORTFOLIO_URLS } from "@/src/constants";

const STATS = [
  { icon: Briefcase, label: "Projects Completed", value: "150+" },
  { icon: Activity, label: "AI Solutions Deployed", value: "45+" },
  { icon: Users, label: "Global Clients", value: "80+" },
  { icon: Award, label: "Elite Certifications", value: "12" },
];

export default function Stats() {
  const [statuses, setStatuses] = useState<Record<string, "online" | "offline" | "checking">>({});

  useEffect(() => {
    const checkStatus = async (url: string) => {
      setStatuses(prev => ({ ...prev, [url]: "checking" }));
      try {
        await fetch(url, { mode: 'no-cors', cache: 'no-cache' });
        setStatuses(prev => ({ ...prev, [url]: "online" }));
      } catch (error) {
        setStatuses(prev => ({ ...prev, [url]: "offline" }));
      }
    };

    PORTFOLIO_URLS.forEach(url => checkStatus(url));
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 glass border-white/5 text-center group hover:neon-border transition-all">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>


        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <Activity className="text-primary animate-pulse" />
              <h3 className="text-xl font-bold">Network Status / Portfolio Ping</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Activity className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-bold truncate">Local System Status</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Active</span>
                </div>
              </div>
              {PORTFOLIO_URLS.map((url, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium truncate">{url.replace("https://", "")}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className={`w-2 h-2 rounded-full ${
                      statuses[url] === "online" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" :
                      statuses[url] === "offline" ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" :
                      "bg-yellow-500 animate-pulse"
                    }`} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {statuses[url] || "Checking..."}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
