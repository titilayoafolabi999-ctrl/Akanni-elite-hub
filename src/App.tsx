import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import SVGMastery from "./components/SVGMastery";
import CyberShieldLab from "./pages/CyberShieldLab";
import WebsiteAuditLab from "./pages/WebsiteAuditLab";
import SVGCustomizerLab from "./pages/SVGCustomizerLab";
import AdminAuth from "./pages/AdminAuth";
import AdminPanel from "./pages/AdminPanel";
import AllSVGs from "./pages/AllSVGs";
import ProjectCaseStudy from "./pages/ProjectCaseStudy";

export default function App() {
  useEffect(() => {
    fetch("/ping.json").catch(() => {});
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cyber-shield-lab" element={<CyberShieldLab />} />
        <Route path="/website-audit-lab" element={<WebsiteAuditLab />} />
        <Route path="/svg-customizer-lab" element={<SVGCustomizerLab />} />
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/svg-gallery" element={<AllSVGs />} />
        <Route path="/project/:id" element={<ProjectCaseStudy />} />
        <Route path="/" element={
          <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Stats />
              <Skills />
              <Resume />
              <Portfolio />
              <SVGMastery />
              <Gallery />
              <Services />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
