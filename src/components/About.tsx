import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Terminal, Palette, Shield, Code, Activity } from "lucide-react";
import { SUMMARY } from "@/src/constants";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <SectionHeader title="The Creative Mind" subtitle="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden neon-border">
              <img
                src="/assets/creator-portrait.jpg"
                alt="Creator"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Engineering <span className="text-primary">Elite Digital Realities</span> with <span className="text-secondary">Technical Precision</span>.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {SUMMARY}
            </p>

            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
              {[
                { icon: Terminal, label: "Technical", desc: "AI Systems, Python, Data Science" },
                { icon: Shield, label: "Security", desc: "Cybersecurity, Defensive Labs" },
                { icon: Palette, label: "Creative", desc: "UI/UX, Animation, Graphics" },
                { icon: Code, label: "Development", desc: "React, Next.js, Modern Web" },
                { icon: Activity, label: "Auditing", desc: "Performance & Security Audits" },
              ].map((item, i) => (
                <Card key={i} className="p-4 glass border-white/5 hover:border-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </Card>
              ))}
            </div>

            <div className="pt-4">
              <a href="#resume" className="text-primary font-bold text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
                View Full Resume <Code className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
