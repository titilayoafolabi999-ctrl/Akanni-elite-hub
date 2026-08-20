import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "./SectionHeader";
import { FAQS } from "@/src/constants";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Common Questions" subtitle="FAQ" />

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`overflow-hidden glass border-white/5 transition-all duration-300 ${
                  openIndex === i ? "neon-border bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  <div className={`p-2 rounded-full glass transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
