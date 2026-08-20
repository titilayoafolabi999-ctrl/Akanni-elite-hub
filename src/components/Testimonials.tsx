import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    content: "Akanni's AI solutions transformed our workflow. The efficiency gains were immediate and significant.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, InnovateX",
    content: "The cybersecurity audit was thorough and eye-opening. We feel much more secure now.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Visionary",
    content: "Incredible design sense. He managed to capture our brand identity perfectly in the new site.",
  },
  {
    name: "David Smith",
    role: "Founder, StartupHub",
    content: "A true professional. Delivered the project ahead of schedule and exceeded all expectations.",
  },
  {
    name: "Aisha Bello",
    role: "Marketing Head, GlobalReach",
    content: "The automation tools he built for us saved hundreds of hours of manual work every month.",
  },
  {
    name: "James Wilson",
    role: "CTO, SecureNet",
    content: "His knowledge of both AI and security is a rare and valuable combination. Highly recommended.",
  },
  {
    name: "Linda Wu",
    role: "Product Manager, NextGen",
    content: "The user interface is not just beautiful but incredibly intuitive. Our users love it.",
  },
  {
    name: "Robert Taylor",
    role: "Director, FinTech Solutions",
    content: "Expert level execution. The data science models provided deep insights we never had before.",
  },
  {
    name: "Sophia Martinez",
    role: "Owner, Bloom Agency",
    content: "Working with Akanni was a breeze. He communicates clearly and delivers top-notch quality.",
  },
  {
    name: "Kevin Lee",
    role: "Software Architect, CloudScale",
    content: "Clean code, robust architecture, and cutting-edge AI implementation. Exactly what we needed.",
  },
  {
    name: "Grace O'Connor",
    role: "Head of Operations, LogisticsPro",
    content: "The custom auditing tools have become essential to our daily operations. Brilliant work.",
  },
  {
    name: "Daniel Brown",
    role: "VP Engineering, DataCore",
    content: "Impressive technical depth. He solved complex integration issues that others couldn't handle.",
  },
  {
    name: "Olivia White",
    role: "E-commerce Manager, ShopSmart",
    content: "Our conversion rates spiked after the redesign. The performance optimization was key.",
  },
  {
    name: "Marcus Thorne",
    role: "Security Consultant, SafeGuard",
    content: "A sharp mind for defensive security. His insights during the lab sessions were invaluable.",
  },
  {
    name: "Isabella Rossi",
    role: "Founder, ArtTech",
    content: "The perfect blend of art and technology. Akanni is a visionary in the digital space.",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Client Feedback" subtitle="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="p-8 h-full glass border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-6" />
                <p className="text-muted-foreground italic mb-8 flex-1">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-sm" aria-label={`${t.name} initials`}>
                      {t.name.split(" ").map(part => part[0]).join("").slice(0, 2)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
