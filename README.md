# 🚀 Akanni Shonibare's Elite Digital Hub

Welcome to my personal headquarters. I'm **Akanni Shonibare**, an Elite Digital Technologist specializing in the intersection of **AI Architecture**, **Cybersecurity**, and **Creative Web Engineering**. 

This repository isn't just a portfolio; it's a living laboratory where I showcase my latest experiments in defensive security, cinematic AI, and high-performance web systems.

> [!TIP]
> **To my fellow developers:** I've built this to be highly modular and resilient. If you like the aesthetic and the "Elite" vibe, **feel free to use this as a template for your own portfolio!** Check the [Customization](#-customization--use-as-a-template) section below to get started.

---

## 🛠 My Elite Tech Stack
I believe in using tools that are fast, secure, and flexible:
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4 (for that ultra-modern look)
- **Animation**: `motion` (by Framer) for smooth, cinematic transitions
- **Backend**: Node.js / Express (for secure lead handling)
- **Database/Sync**: Resilient Google Sheets integration + Local Storage Fallback
- **Icons**: Lucide React

---

## 🔬 Key Labs & Modules

### 🛡️ Cyber-Shield Lab
A multi-layered defensive hub that goes beyond simple web scanning. It includes modules for:
- **Web Infrastructure**: Vulnerability and header auditing.
- **Network Perimeter**: Port scan simulations and service discovery.
- **Identity & Access**: MFA auditing and credential strength testing.
- **System Hardening**: Interactive server security checklists.

### 🎬 Elite AI Cinematic Studio
My specialized platform for generating production-quality AI animations and cinematic content. Leveraging state-of-the-art models like Stable Diffusion and Runway to push the boundaries of digital storytelling.

### 📊 Resilient Inquiry Portal
A contact system designed for 100% uptime:
- **Local Storage Fallback**: Never lose a message, even if the user is offline.
- **Cloud Sync**: Automated synchronization with Google Sheets for professional lead management.
- **Admin Command Center**: A protected panel to manage, export, and audit leads.

---

## 💻 Local Development

### For Desktop
1. **Clone**: `git clone https://github.com/titilayoafolabi999-ctrl/elite-portfolio.git`
2. **Install**: `npm install`
3. **Run**: `npm run dev`

### For Termux (Android)
I've ensured this builds correctly on Termux for builders on the move:
1. `pkg install nodejs git`
2. `git clone <your-repo-url>`
3. `npm install`
4. `npm run dev -- --host`
*Note: If `esbuild` gives you issues on Android, try `npm install -D esbuild-android-arm64`.*

---

## 🎨 Customization & Use as a Template
I've made it easy for you to make this your own:

1. **Step 1: Constants**: Head to `src/constants.ts`. This is the brain of the app. Change the `NAME`, `PROJECTS`, and `SERVICES` to match your own brand.
2. **Step 2: Secrets**: Look at `.env.example`. Rename it to `.env` and add your Google Sheets details if you want cloud sync.
3. **Step 3: Themes**: Colors are centrally managed in `src/index.css`. Look for the `@theme` block to change your primary neon accents.
4. **Step 4: Deploy**: This is pre-configured for **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml`). Just push to GitHub and connect!

---

## 📡 System & Admin
- **Admin Login**: `/admin/auth`
- **Lead Dashboard**: `/admin`
- **Default Password**: `AkanniElite2026!` (Change this in `src/constants.ts`!)

## 📄 License
This project is open-source. Build something elite.

---
*Created with ⚡ by Akanni Shonibare*
