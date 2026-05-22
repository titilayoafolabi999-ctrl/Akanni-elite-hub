import React, { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { GITHUB_URL, EMAIL, GOOGLE_SHEETS_URL } from "@/src/constants";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Save to Local Storage as a backup (useful for Netlify/Vercel testing)
      const localLeads = JSON.parse(localStorage.getItem("local_leads") || "[]");
      const newLead = { ...formData, timestamp: new Date().toISOString() };
      localStorage.setItem("local_leads", JSON.stringify([newLead, ...localLeads]));

      // 2. Attempt to send to external backend
      const targetUrl = GOOGLE_SHEETS_URL || "/api/contact";
      
      if (GOOGLE_SHEETS_URL || targetUrl.startsWith("/api")) {
        const response = await fetch(targetUrl, {
          method: "POST",
          mode: GOOGLE_SHEETS_URL ? "no-cors" : "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        if (GOOGLE_SHEETS_URL || response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        }
      } else {
        // If no backend is configured, we still show success because we saved to local storage
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${EMAIL}?subject=New Inquiry from ${formData.name || 'Portfolio'}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;

  return (
    <section id="contact" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Let's Build Something" subtitle="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">Ready to start your next <span className="text-primary">Elite Project?</span></h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm currently available for freelance work and collaborations. 
                Whether you have a specific project in mind or just want to chat 
                about AI and design, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email (Primary)", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MessageSquare, label: "WhatsApp", value: "+234 708 436 2145", href: "https://wa.me/2347084362145" },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:neon-border transition-all">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                    <div className="text-lg font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/akannishonibare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border-white/5"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h4 className="text-2xl font-bold mb-2">Message Received!</h4>
                <p className="text-muted-foreground mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-xl">Send Another Message</Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:neon-border transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:neon-border transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Description</label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    className="bg-white/5 border-white/10 min-h-[150px] rounded-xl focus:neon-border transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button type="submit" className="h-14 rounded-xl font-bold text-base group" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="h-14 rounded-xl font-bold text-base glass" asChild>
                    <a href={mailtoLink}>
                      Send via Email
                      <Mail className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
