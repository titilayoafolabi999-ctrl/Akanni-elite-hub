import { motion } from "motion/react";
import { ArrowRight, Download, Sparkles, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CV_URL, LOCATION, PHONE, NAME } from "@/src/constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col md:flex-row items-center gap-4 px-6 py-3 rounded-full glass mb-8"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{NAME} | Available</span>
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {LOCATION}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          Building <span className="gradient-text">Elite AI</span> & <br />
          Modern Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
        >
          I help businesses scale by integrating cutting-edge AI automation,
          high-performance web design, and robust cybersecurity audits.
          Your vision, engineered for the elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group" asChild>
            <a href="#portfolio">
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold glass" asChild>
            <a href={CV_URL} download>
              Download CV
              <Download className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <Button className="rounded-full w-32 h-32 flex flex-col items-center justify-center gap-1 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
          <a href="#contact">
            <span className="text-xs uppercase font-bold tracking-tighter">Hire Me</span>
            <ArrowRight className="-rotate-45" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
