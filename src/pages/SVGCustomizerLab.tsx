import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { SVG_DATA } from "../data/svgs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Palette, Maximize, RotateCcw, Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

export default function SVGCustomizerLab() {
  const [selectedId, setSelectedId] = useState(1);
  const [color, setColor] = useState("#fbbf24");
  const [size, setSize] = useState(200);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [copied, setCopied] = useState(false);
  
  const selectedSVG = SVG_DATA.find(s => s.id === selectedId) || SVG_DATA[0];
  const svgRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement;
    clonedSvg.setAttribute("width", size.toString());
    clonedSvg.setAttribute("height", size.toString());
    
    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = `${selectedSVG.title.toLowerCase().replace(/\s+/g, "-")}-custom.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(svgUrl);
  };

  const handleCopyCode = () => {
    if (!svgRef.current) return;
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <Button variant="ghost" className="mb-8 gap-2" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </Button>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Controls */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                <Palette className="w-3 h-3" /> Design Lab
              </div>
              <h1 className="text-4xl font-display font-bold tracking-tighter mb-4">
                SVG <span className="text-primary">Customizer</span>
              </h1>
              <p className="text-muted-foreground text-sm">
                Fine-tune your elite assets. Adjust colors, dimensions, and stroke properties in real-time.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Asset</label>
                <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto p-2 glass rounded-xl">
                  {SVG_DATA.slice(0, 20).map((svg) => (
                    <button
                      key={svg.id}
                      onClick={() => setSelectedId(svg.id)}
                      className={`aspect-square rounded-lg p-2 transition-all ${
                        selectedId === svg.id ? "bg-primary text-black" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                      }`}
                    >
                      {svg.component}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Primary Color</label>
                  <span className="text-[10px] font-mono text-primary">{color}</span>
                </div>
                <div className="flex gap-2">
                  {["#fbbf24", "#00f5ff", "#4f46e5", "#ef4444", "#22c55e", "#ffffff"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${
                        color === c ? "border-white" : "border-transparent"
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)}
                    className="w-8 h-8 rounded-full bg-transparent border-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Preview Size</label>
                  <span className="text-[10px] font-mono text-primary">{size}px</span>
                </div>
                <Slider 
                  value={[size]} 
                  onValueChange={(val) => setSize(val[0])} 
                  min={100} 
                  max={400} 
                  step={10}
                  className="py-4"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="flex-1 rounded-xl bg-primary text-black font-bold" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl glass" onClick={handleCopyCode}>
                  {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? "Copied!" : "Copy SVG"}
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Preview Area */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex-1 glass rounded-3xl border-white/10 flex items-center justify-center relative overflow-hidden min-h-[400px] md:min-h-[600px]">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
              
              <motion.div
                key={selectedId + color + size}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ width: size, height: size, color: color }}
                ref={svgRef}
                className="relative z-10 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              >
                {selectedSVG.component}
              </motion.div>

              <div className="absolute bottom-6 left-6 flex gap-4">
                <div className="px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Maximize className="w-3 h-3" /> {size}x{size}
                </div>
                <button 
                  onClick={() => {
                    setColor("#fbbf24");
                    setSize(200);
                  }}
                  className="p-2 glass rounded-full text-muted-foreground hover:text-primary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-8 p-6 glass rounded-2xl border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Elite Implementation Tip</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To use this SVG in your React project, simply copy the code and wrap it in a component. 
                Use <code className="text-primary bg-primary/10 px-1 rounded">currentColor</code> for the stroke or fill attributes to make the asset respond to your CSS text color.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
