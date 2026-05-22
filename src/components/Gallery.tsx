import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const GALLERY_ITEMS = [
  { id: 1, type: "AI Animation", image: "https://picsum.photos/seed/ai-motion-1/800/800" },
  { id: 2, type: "Digital Human", image: "https://picsum.photos/seed/human-ai/800/1000" },
  { id: 3, type: "Cyber Landscape", image: "https://picsum.photos/seed/cyber-city/800/600" },
  { id: 4, type: "UI Motion", image: "https://picsum.photos/seed/ui-anim/800/600" },
  { id: 5, type: "Neural Art", image: "https://picsum.photos/seed/neural/800/800" },
  { id: 6, type: "Tech Portrait", image: "https://picsum.photos/seed/tech-face/800/1000" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Visual Showcase" subtitle="Design & AI Animation" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group cursor-pointer break-inside-avoid"
            >
              <div className="rounded-2xl overflow-hidden border border-white/5">
                <img
                  src={item.image}
                  alt={item.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">{item.type}</span>
                <span className="text-lg font-bold">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
