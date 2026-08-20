import { motion } from "motion/react";
import { SVG_DATA } from "../data/svgs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function AllSVGs() {
  const svgRefs = useRef<{ [key: number]: SVGSVGElement | null }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadSVG = (id: number, title: string) => {
    const svgElement = svgRefs.current[id];
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${title.toLowerCase().replace(/\s+/g, "-")}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">
              SVG <span className="text-primary">Mastery</span> Hub
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A premium collection of 50 custom-crafted SVG assets. Free to download and use in your elite projects.
            </p>
          </div>
          <Button variant="outline" className="rounded-full glass" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SVG_DATA.map((svg, i) => (
            <motion.div
              key={svg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 20) * 0.05 }}
              className="aspect-square glass rounded-2xl p-6 flex flex-col items-center justify-center group hover:neon-border transition-all relative overflow-hidden"
            >
              <div className="w-full h-full text-primary group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                <div
                  ref={(el) => {
                    if (el) {
                      const svgChild = el.querySelector('svg');
                      if (svgChild) svgRefs.current[svg.id] = svgChild;
                    }
                  }}
                  className="w-full h-full"
                >
                  {svg.component}
                </div>
              </div>

              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  {svg.title}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-full hover:bg-primary hover:text-black transition-colors"
                  onClick={() => downloadSVG(svg.id, svg.title)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
