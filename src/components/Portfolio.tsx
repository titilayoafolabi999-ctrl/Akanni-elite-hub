import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "./SectionHeader";
import { PROJECTS, GITHUB_URL } from "@/src/constants";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Web Design Projects", "AI Projects", "Cybersecurity Labs", "Design & Animation Work"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24">
      <div className="container px-6 mx-auto">
        <SectionHeader title="Featured Works" subtitle="Portfolio" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-black"
                  : "bg-white/5 text-muted-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group overflow-hidden glass border-white/5 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Link
                        to={`/project/${project.id}`}
                        className="p-3 bg-primary rounded-full text-black hover:scale-110 transition-transform"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <a
                        href={project.link.includes("github.com") ? project.link : GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 rounded-full text-white hover:scale-110 transition-transform backdrop-blur-md"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="bg-white/5 text-[10px] uppercase tracking-wider">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <Link
                        to={`/project/${project.id}`}
                        className="text-xs font-bold hover:text-primary transition-colors flex items-center gap-1"
                      >
                        View Case Study <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
