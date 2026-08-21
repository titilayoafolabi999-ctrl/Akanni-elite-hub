import { useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion } from "motion/react";
import { SVG_DATA } from "../data/svgs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  Check,
  Circle,
  Code2,
  Copy,
  Download,
  Grid3X3,
  Layers3,
  Maximize2,
  Move,
  Palette,
  PanelLeft,
  PanelRight,
  Plus,
  RectangleHorizontal,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Square,
  Trash2,
  Type,
  Undo2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

type LayerKind = "asset" | "text" | "shape";
type ShapeKind = "rectangle" | "circle";
type Layer = {
  id: string;
  kind: LayerKind;
  name: string;
  assetId?: number;
  text?: string;
  shape?: ShapeKind;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  opacity: number;
  fill: string;
};

const COLOR_SWATCHES = ["#fbbf24", "#00f5ff", "#8b5cf6", "#ef4444", "#22c55e", "#ffffff"];
const BACKGROUNDS = [
  { label: "Ink", value: "#070b13" },
  { label: "Slate", value: "#111827" },
  { label: "Paper", value: "#f8fafc" },
];
const CANVAS_SIZE = 720;

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export default function SVGCustomizerLab() {
  const [selectedAssetId, setSelectedAssetId] = useState(1);
  const [layers, setLayers] = useState<Layer[]>([
    { id: "layer-1", kind: "asset", name: "Cyber Core", assetId: 1, x: 210, y: 170, width: 300, height: 300, rotation: 0, opacity: 1, fill: "#fbbf24" },
  ]);
  const [selectedLayerId, setSelectedLayerId] = useState("layer-1");
  const [background, setBackground] = useState("#070b13");
  const [zoom, setZoom] = useState(72);
  const [showGrid, setShowGrid] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [dragging, setDragging] = useState<{ id: string; startX: number; startY: number; originX: number; originY: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const selectedLayer = layers.find((layer) => layer.id === selectedLayerId) || null;
  const selectedAsset = SVG_DATA.find((svg) => svg.id === selectedAssetId) || SVG_DATA[0];
  const filteredAssets = useMemo(
    () => SVG_DATA.slice(0, 20).filter((svg) => svg.title.toLowerCase().includes(searchTerm.toLowerCase())),
    [searchTerm],
  );

  const updateLayer = (id: string, patch: Partial<Layer>) => {
    setLayers((current) => current.map((layer) => (layer.id === id ? { ...layer, ...patch } : layer)));
  };

  const addAsset = () => {
    const next: Layer = {
      id: makeId(), kind: "asset", name: selectedAsset.title, assetId: selectedAsset.id,
      x: 250, y: 210, width: 220, height: 220, rotation: 0, opacity: 1, fill: selectedLayer?.fill || "#fbbf24",
    };
    setLayers((current) => [...current, next]);
    setSelectedLayerId(next.id);
  };

  const addText = () => {
    const next: Layer = { id: makeId(), kind: "text", name: "Heading", text: "DESIGN LAB", x: 180, y: 120, width: 360, height: 60, rotation: 0, opacity: 1, fill: "#ffffff" };
    setLayers((current) => [...current, next]);
    setSelectedLayerId(next.id);
  };

  const addShape = (shape: ShapeKind) => {
    const next: Layer = { id: makeId(), kind: "shape", name: shape === "circle" ? "Circle" : "Rectangle", shape, x: 220, y: 230, width: 280, height: 180, rotation: 0, opacity: 0.85, fill: "#00f5ff" };
    setLayers((current) => [...current, next]);
    setSelectedLayerId(next.id);
  };

  const deleteSelected = () => {
    if (!selectedLayerId) return;
    const remaining = layers.filter((layer) => layer.id !== selectedLayerId);
    setLayers(remaining);
    setSelectedLayerId(remaining[remaining.length - 1]?.id || "");
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const nextX = dragging.originX + (event.clientX - dragging.startX) / (zoom / 100);
      const nextY = dragging.originY + (event.clientY - dragging.startY) / (zoom / 100);
      updateLayer(dragging.id, { x: Math.round(nextX), y: Math.round(nextY) });
    };
    const handlePointerUp = () => setDragging(null);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging, zoom]);

  const startDragging = (event: ReactPointerEvent, layer: Layer) => {
    event.preventDefault();
    setSelectedLayerId(layer.id);
    setDragging({ id: layer.id, startX: event.clientX, startY: event.clientY, originX: layer.x, originY: layer.y });
  };

  const applyStrokeWidth = (svg: SVGSVGElement) => {
    svg.querySelectorAll<SVGElement>("[stroke-width]").forEach((element) => {
      const base = Number(element.getAttribute("data-base-stroke") || element.getAttribute("stroke-width") || 1);
      element.setAttribute("data-base-stroke", String(base));
      element.setAttribute("stroke-width", String(base * (selectedLayer?.width || 240) / 240));
    });
  };

  const getSVGMarkup = () => {
    const svg = svgRef.current;
    if (!svg) return null;
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    clone.setAttribute("width", String(CANVAS_SIZE));
    clone.setAttribute("height", String(CANVAS_SIZE));
    clone.querySelectorAll(".selection-box").forEach((node) => node.remove());
    return new XMLSerializer().serializeToString(clone);
  };

  const downloadBlob = (blob: Blob, extension: string) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `akanni-design-lab.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
    setExportOpen(false);
  };

  const exportSVG = () => {
    const markup = getSVGMarkup();
    if (markup) downloadBlob(new Blob([markup], { type: "image/svg+xml;charset=utf-8" }), "svg");
  };

  const exportRaster = (type: "png" | "jpeg") => {
    const markup = getSVGMarkup();
    if (!markup) return;
    const image = new Image();
    const url = URL.createObjectURL(new Blob([markup], { type: "image/svg+xml;charset=utf-8" }));
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = CANVAS_SIZE * 2;
      canvas.height = CANVAS_SIZE * 2;
      const context = canvas.getContext("2d");
      if (!context) return;
      context.fillStyle = background;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (blob) downloadBlob(blob, type === "jpeg" ? "jpg" : "png");
        URL.revokeObjectURL(url);
      }, `image/${type}`, 0.96);
    };
    image.src = url;
  };

  const copySVG = async () => {
    const markup = getSVGMarkup();
    if (!markup) return;
    await navigator.clipboard.writeText(markup);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const reset = () => {
    setLayers([{ id: "layer-1", kind: "asset", name: "Cyber Core", assetId: 1, x: 210, y: 170, width: 300, height: 300, rotation: 0, opacity: 1, fill: "#fbbf24" }]);
    setSelectedLayerId("layer-1");
    setBackground("#070b13");
    setZoom(72);
    setShowGrid(true);
  };

  const renderLayer = (layer: Layer) => {
    const selected = layer.id === selectedLayerId;
    return (
      <g key={layer.id} transform={`translate(${layer.x} ${layer.y}) rotate(${layer.rotation} ${layer.width / 2} ${layer.height / 2})`} opacity={layer.opacity} onPointerDown={(event) => startDragging(event, layer)} style={{ cursor: dragging?.id === layer.id ? "grabbing" : "grab" }}>
        {layer.kind === "asset" && <g color={layer.fill} style={{ width: layer.width, height: layer.height }}>{SVG_DATA.find((svg) => svg.id === layer.assetId)?.component}</g>}
        {layer.kind === "text" && <text x={0} y={layer.height / 2} fill={layer.fill} fontSize={Math.max(18, layer.height * 0.46)} fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="3">{layer.text}</text>}
        {layer.kind === "shape" && layer.shape === "rectangle" && <rect x={0} y={0} width={layer.width} height={layer.height} rx={18} fill={layer.fill} />}
        {layer.kind === "shape" && layer.shape === "circle" && <ellipse cx={layer.width / 2} cy={layer.height / 2} rx={layer.width / 2} ry={layer.height / 2} fill={layer.fill} />}
        {selected && <rect className="selection-box" x={-8} y={-8} width={layer.width + 16} height={layer.height + 16} fill="none" stroke="#fbbf24" strokeWidth={2} strokeDasharray="8 5" pointerEvents="none" />}
      </g>
    );
  };

  return (
    <div className="min-h-screen bg-[#05070c] text-foreground selection:bg-primary/30">
      <header className="h-16 border-b border-white/10 bg-[#080b12]/95 px-4 lg:px-6 flex items-center justify-between sticky top-0 z-30 backdrop-blur-xl">
        <div className="flex items-center gap-4 min-w-0"><Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" asChild><Link to="/" aria-label="Back to portfolio"><ArrowLeft className="w-4 h-4" /></Link></Button><div className="h-6 w-px bg-white/10" /><div className="flex items-center gap-2 min-w-0"><Palette className="w-4 h-4 text-primary" /><span className="text-xs font-semibold text-muted-foreground hidden sm:inline">AKANNI / LABS /</span><span className="text-sm font-semibold truncate">SVG Design Lab</span></div></div>
        <div className="flex items-center gap-2"><span className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-emerald-400 mr-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Autosaved</span><Button onClick={copySVG} variant="outline" className="hidden sm:flex h-9 rounded-lg border-white/10 bg-white/[0.03] text-xs">{copied ? <Check className="w-3.5 h-3.5 mr-2 text-emerald-400" /> : <Code2 className="w-3.5 h-3.5 mr-2" />}{copied ? "Copied" : "Copy SVG"}</Button><div className="relative"><Button onClick={() => setExportOpen((value) => !value)} className="h-9 rounded-lg bg-primary text-black text-xs font-bold"><Download className="w-3.5 h-3.5 mr-2" /> Export</Button>{exportOpen && <div className="absolute right-0 top-11 z-40 w-44 rounded-xl border border-white/10 bg-[#101621] p-2 shadow-2xl"><button onClick={exportSVG} className="w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-white/10">Download SVG</button><button onClick={() => exportRaster("png")} className="w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-white/10">Download PNG</button><button onClick={() => exportRaster("jpeg")} className="w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-white/10">Download JPG</button></div>}</div></div>
      </header>

      <main className="h-[calc(100vh-4rem)] min-h-[720px] flex flex-col lg:flex-row overflow-hidden">
        <aside className="w-full lg:w-[280px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#080b12] p-4 overflow-y-auto"><div className="flex items-center justify-between mb-5"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]"><PanelLeft className="w-3.5 h-3.5 text-primary" /> Elements</div><span className="text-[10px] text-muted-foreground font-mono">{layers.length} layers</span></div><div className="grid grid-cols-3 gap-2 mb-5"><button onClick={addText} className="rounded-lg border border-white/10 bg-white/[0.035] py-3 text-[10px] text-muted-foreground hover:border-primary/50 hover:text-primary"><Type className="w-4 h-4 mx-auto mb-1" />Text</button><button onClick={() => addShape("rectangle")} className="rounded-lg border border-white/10 bg-white/[0.035] py-3 text-[10px] text-muted-foreground hover:border-primary/50 hover:text-primary"><Square className="w-4 h-4 mx-auto mb-1" />Shape</button><button onClick={() => addShape("circle")} className="rounded-lg border border-white/10 bg-white/[0.035] py-3 text-[10px] text-muted-foreground hover:border-primary/50 hover:text-primary"><Circle className="w-4 h-4 mx-auto mb-1" />Circle</button></div><div className="relative mb-4"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" /><input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search SVG assets" className="w-full h-9 rounded-lg border border-white/10 bg-white/[0.04] pl-9 pr-3 text-xs outline-none focus:border-primary/60" /></div><div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground mb-2"><span>SVG library</span><Layers3 className="w-3.5 h-3.5" /></div><div className="grid grid-cols-2 gap-2">{filteredAssets.map((svg) => <button key={svg.id} onClick={() => setSelectedAssetId(svg.id)} className={`group text-left rounded-xl border p-2 transition-all ${selectedAssetId === svg.id ? "border-primary/70 bg-primary/10" : "border-white/10 bg-white/[0.025] hover:border-white/25"}`}><div className={`aspect-square rounded-lg flex items-center justify-center p-3 ${selectedAssetId === svg.id ? "bg-primary/10 text-primary" : "bg-black/20 text-muted-foreground group-hover:text-primary"}`}>{svg.component}</div><div className="mt-2 text-[10px] font-medium truncate">{svg.title}</div><div className="mt-1 text-[9px] font-mono text-muted-foreground">SVG / {String(svg.id).padStart(2, "0")}</div></button>)}</div><Button onClick={addAsset} className="w-full mt-4 h-9 rounded-lg bg-primary text-black text-xs font-bold"><Plus className="w-3.5 h-3.5 mr-2" /> Add selected asset</Button></aside>

        <section className="flex-1 min-w-0 flex flex-col bg-[#0b0f18]"><div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#0c111c]"><div className="flex items-center gap-1.5"><button className="h-8 px-3 rounded-md bg-white/10 text-[10px] uppercase tracking-widest font-bold">Design</button><button className="h-8 px-3 rounded-md text-[10px] uppercase tracking-widest text-muted-foreground">Preview</button></div><div className="flex items-center gap-1"><button onClick={() => setZoom((value) => Math.max(40, value - 10))} className="p-2 rounded-md text-muted-foreground hover:text-primary" aria-label="Zoom out"><ZoomOut className="w-3.5 h-3.5" /></button><span className="w-12 text-center text-[10px] font-mono text-muted-foreground">{zoom}%</span><button onClick={() => setZoom((value) => Math.min(140, value + 10))} className="p-2 rounded-md text-muted-foreground hover:text-primary" aria-label="Zoom in"><ZoomIn className="w-3.5 h-3.5" /></button><button onClick={() => setZoom(72)} className="p-2 rounded-md text-muted-foreground hover:text-primary" aria-label="Reset zoom"><Maximize2 className="w-3.5 h-3.5" /></button></div></div><div className="flex-1 relative overflow-auto p-10 flex items-center justify-center"><div className="absolute inset-0 opacity-30" style={showGrid ? { backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "24px 24px" } : undefined} /><div className="relative shrink-0 shadow-2xl" style={{ width: CANVAS_SIZE * zoom / 100, height: CANVAS_SIZE * zoom / 100 }}><svg ref={svgRef} viewBox={`0 0 ${CANVAS_SIZE} ${CANVAS_SIZE}`} width="100%" height="100%" role="img" aria-label="SVG design artboard"><rect width={CANVAS_SIZE} height={CANVAS_SIZE} fill={background} />{layers.map(renderLayer)}</svg></div></div><div className="h-10 shrink-0 border-t border-white/10 bg-[#080b12] flex items-center justify-between px-4 text-[10px] font-mono text-muted-foreground"><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Ready</span><span>{layers.length} editable layers · {CANVAS_SIZE} × {CANVAS_SIZE}px</span><span className="hidden sm:inline">RGB / {zoom}%</span></div></section>

        <aside className="w-full lg:w-[310px] shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#080b12] p-5 overflow-y-auto"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] mb-5"><PanelRight className="w-3.5 h-3.5 text-primary" /> Inspector</div>{selectedLayer ? <><div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 mb-4"><div className="flex items-start justify-between"><div><div className="text-sm font-semibold">{selectedLayer.name}</div><div className="text-[10px] text-muted-foreground font-mono mt-1">{selectedLayer.kind} layer</div></div><Move className="w-4 h-4 text-muted-foreground" /></div></div><div className="space-y-5"><div><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Position</label><div className="grid grid-cols-2 gap-2 mt-2"><input type="number" value={Math.round(selectedLayer.x)} onChange={(event) => updateLayer(selectedLayer.id, { x: Number(event.target.value) })} className="h-8 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs" aria-label="X position" /><input type="number" value={Math.round(selectedLayer.y)} onChange={(event) => updateLayer(selectedLayer.id, { y: Number(event.target.value) })} className="h-8 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs" aria-label="Y position" /></div></div><div><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Size</label><div className="grid grid-cols-2 gap-2 mt-2"><input type="number" value={Math.round(selectedLayer.width)} onChange={(event) => updateLayer(selectedLayer.id, { width: Math.max(20, Number(event.target.value)) })} className="h-8 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs" aria-label="Width" /><input type="number" value={Math.round(selectedLayer.height)} onChange={(event) => updateLayer(selectedLayer.id, { height: Math.max(20, Number(event.target.value)) })} className="h-8 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs" aria-label="Height" /></div></div>{selectedLayer.kind === "text" && <div><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Text</label><input value={selectedLayer.text || ""} onChange={(event) => updateLayer(selectedLayer.id, { text: event.target.value, name: event.target.value || "Text" })} className="w-full h-9 mt-2 rounded-md border border-white/10 bg-white/[0.04] px-2 text-xs" /></div>}<div><div className="flex justify-between mb-2"><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Rotation</label><span className="text-[10px] font-mono text-primary">{selectedLayer.rotation}°</span></div><Slider value={[selectedLayer.rotation]} onValueChange={(value) => updateLayer(selectedLayer.id, { rotation: value[0] })} min={-180} max={180} step={1} /></div><div><div className="flex justify-between mb-2"><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Opacity</label><span className="text-[10px] font-mono text-primary">{Math.round(selectedLayer.opacity * 100)}%</span></div><Slider value={[selectedLayer.opacity]} onValueChange={(value) => updateLayer(selectedLayer.id, { opacity: value[0] })} min={0.1} max={1} step={0.05} /></div><div><div className="flex justify-between mb-3"><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Fill</label><span className="text-[10px] font-mono text-primary">{selectedLayer.fill}</span></div><div className="flex flex-wrap gap-2">{COLOR_SWATCHES.map((swatch) => <button key={swatch} onClick={() => updateLayer(selectedLayer.id, { fill: swatch })} aria-label={`Set fill ${swatch}`} className={`w-7 h-7 rounded-full border-2 ${selectedLayer.fill === swatch ? "border-white scale-110" : "border-transparent"}`} style={{ backgroundColor: swatch }} />)}<input type="color" value={selectedLayer.fill} onChange={(event) => updateLayer(selectedLayer.id, { fill: event.target.value })} className="w-7 h-7 rounded-full bg-transparent border-0" aria-label="Choose layer fill" /></div></div><div><label className="text-[10px] uppercase tracking-widest text-muted-foreground">Alignment</label><div className="flex gap-2 mt-2"><button onClick={() => updateLayer(selectedLayer.id, { x: (CANVAS_SIZE - selectedLayer.width) / 2 })} className="p-2 rounded-md border border-white/10 hover:border-primary/60" aria-label="Align left"><AlignLeft className="w-3.5 h-3.5" /></button><button onClick={() => updateLayer(selectedLayer.id, { x: (CANVAS_SIZE - selectedLayer.width) / 2 })} className="p-2 rounded-md border border-white/10 hover:border-primary/60" aria-label="Align center"><AlignCenter className="w-3.5 h-3.5" /></button><button onClick={() => updateLayer(selectedLayer.id, { x: CANVAS_SIZE - selectedLayer.width - 20 })} className="p-2 rounded-md border border-white/10 hover:border-primary/60" aria-label="Align right"><AlignRight className="w-3.5 h-3.5" /></button></div></div></div><div className="mt-6 pt-5 border-t border-white/10 flex gap-2"><Button variant="outline" onClick={deleteSelected} className="flex-1 h-9 rounded-lg border-red-500/20 text-red-300 text-xs"><Trash2 className="w-3.5 h-3.5 mr-2" /> Delete</Button><Button variant="outline" onClick={reset} className="h-9 rounded-lg border-white/10" aria-label="Reset design"><RotateCcw className="w-3.5 h-3.5" /></Button></div></> : <div className="text-xs text-muted-foreground">Select an element on the canvas to edit it.</div>}<div className="mt-7 pt-5 border-t border-white/10"><div className="flex items-center justify-between mb-3"><span className="text-[10px] uppercase tracking-widest text-muted-foreground">Layers</span><button onClick={() => setShowGrid((value) => !value)} className={`text-[10px] ${showGrid ? "text-primary" : "text-muted-foreground"}`}><Grid3X3 className="w-3 h-3 inline mr-1" /> Grid</button></div><div className="space-y-1">{[...layers].reverse().map((layer) => <button key={layer.id} onClick={() => setSelectedLayerId(layer.id)} className={`w-full flex items-center justify-between rounded-md px-2 py-2 text-left text-[10px] ${selectedLayerId === layer.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5"}`}><span className="truncate">{layer.name}</span><span className="font-mono opacity-60">{layer.kind}</span></button>)}</div></div></aside>
      </main>
    </div>
  );
}
