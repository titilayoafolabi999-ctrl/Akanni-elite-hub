import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { SERVICES, EMAIL } from "@/src/constants";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Premium Offerings" subtitle="Services & Pricing" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="relative p-8 h-full flex flex-col glass border-white/5 hover:border-primary/30 transition-all duration-500 group">
                {service.package === "Professional" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{service.package}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <div className="text-3xl font-display font-bold text-white">{service.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">Delivery: {service.delivery}</div>
                </div>

                <p className="text-sm text-muted-foreground mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <div className="mt-1 p-0.5 rounded-full bg-primary/20 text-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-white/5 space-y-3">
                  <Button className="w-full rounded-xl h-12 group-hover:bg-primary group-hover:text-black transition-colors" asChild>
                    <a href={`mailto:${EMAIL}?subject=Request for ${service.title}&body=Hi Akanni,%0D%0A%0D%0AI am interested in your ${service.package} package for ${service.title}.%0D%0A%0D%0APlease let me know the next steps.`}>
                      Request Service
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>

                  {service.title === "Website Auditing" && (
                    <Button variant="outline" className="w-full rounded-xl h-12 glass" asChild>
                      <Link to="/website-audit-lab">
                        Try Audit Lab
                        <Zap className="ml-2 w-4 h-4 text-primary" />
                      </Link>
                    </Button>
                  )}

                  {service.title === "Cybersecurity Consulting" && (
                    <Button variant="outline" className="w-full rounded-xl h-12 glass" asChild>
                      <Link to="/cyber-shield-lab">
                        Try Cyber-Shield Lab
                        <Shield className="ml-2 w-4 h-4 text-primary" />
                      </Link>
                    </Button>
                  )}

                  {service.title === "Graphic Design" && (
                    <Button variant="outline" className="w-full rounded-xl h-12 glass" asChild>
                      <Link to="/svg-customizer-lab">
                        Try Design Lab
                        <Palette className="ml-2 w-4 h-4 text-primary" />
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
