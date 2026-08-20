import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { RESUME_DATA } from "@/src/constants";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Trophy, Heart } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Professional Journey" subtitle="Resume" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Briefcase className="text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-6 glass border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 text-[10px] font-bold uppercase tracking-widest text-primary/50">
                      {exp.period}
                    </div>
                    <h4 className="text-lg font-bold text-primary">{exp.role}</h4>
                    <div className="text-sm font-medium mb-3">{exp.company}</div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>


          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-secondary" />
              Education
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-6 glass border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 text-[10px] font-bold uppercase tracking-widest text-secondary/50">
                      {edu.period}
                    </div>
                    <h4 className="text-lg font-bold text-secondary">{edu.degree}</h4>
                    <div className="text-sm font-medium mb-3">{edu.school}</div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Trophy className="text-primary" />
              Achievements
            </h3>
            <Card className="p-8 glass border-white/5">
              <ul className="space-y-4">
                {RESUME_DATA.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </Card>
          </div>


          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Heart className="text-secondary" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.interests.map((interest, i) => (
                <span
                  key={i}
                  className="px-6 py-3 rounded-2xl glass border-white/5 text-sm font-medium hover:neon-border transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
