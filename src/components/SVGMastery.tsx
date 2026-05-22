import { motion } from "motion/react";
import { SVG_DATA } from "../data/svgs";
import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SVGMastery() {
  const previewSVGs = SVG_DATA.slice(0, 6);

  return (
    <section id="svg-mastery" className="py-24 bg-white/[0.02]">
      <div className="container px-6 mx-auto">
        <SectionHeader 
          title="SVG Mastery" 
          subtitle="Digital Craftsmanship" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {previewSVGs.map((svg, i) => (
            <motion.div
              key={svg.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square glass rounded-2xl p-6 flex flex-col items-center justify-center group hover:neon-border transition-all"
            >
              <div className="w-full h-full text-primary group-hover:scale-110 transition-transform duration-500">
                {svg.component}
              </div>
              <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                {svg.title}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="outline" className="rounded-full px-8 glass group" asChild>
            <Link to="/svg-gallery">
              Show More SVGs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
