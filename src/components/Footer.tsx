import { Github, Linkedin, Mail, Twitter, MessageSquare } from "lucide-react";
import { NAME, GITHUB_URL, EMAIL, PHONE } from "@/src/constants";

export default function Footer() {
  const whatsappNumber = PHONE.replace(/\s+/g, '').replace('+', '');
  
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold tracking-tighter mb-2 uppercase">
              {NAME.split(' ')[0]}<span className="text-primary">{NAME.split(' ')[1]}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building the future of digital experiences with AI and modern design.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/akannishonibare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Email (Primary)"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
