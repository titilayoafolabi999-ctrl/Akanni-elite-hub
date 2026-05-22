import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "@/src/constants";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Expertise & Tools" subtitle="My Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary" />
                {group.category}
              </h3>
              
              <div className="space-y-6">
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Marquee Placeholder */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {["GitHub", "Figma", "Kaggle", "VS Code", "Python", "Docker"].map((tool) => (
              <span key={tool} className="text-xl font-display font-bold tracking-tighter">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
