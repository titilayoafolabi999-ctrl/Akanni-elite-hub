import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function ProjectCaseStudy() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="rounded-full glass">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Button asChild variant="ghost" className="mb-8 hover:text-primary p-0">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
                {project.title}
              </h1>
            </div>
            <Button asChild className="rounded-full neon-border px-8">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Live Project
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-16 neon-border">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-px bg-primary mr-4"></span>
                  The Problem
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.problem}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-px bg-primary mr-4"></span>
                  The Elite Solution
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.solution}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-px bg-primary mr-4"></span>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features?.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 glass rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border-primary/20">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-primary/20">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                  Project Status
                </h3>
                <p className="text-sm text-muted-foreground">
                  Completed & Deployed in 2026. Actively maintained for performance and security.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
