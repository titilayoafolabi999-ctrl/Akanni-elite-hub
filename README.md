# Akanni Shonibare Elite Portfolio

## 🌟 Project Summary
This is a premium, high-performance personal brand website designed for **Akanni Shonibare**. It serves as a comprehensive showcase for an **AI Builder, Creative Technologist, and Cybersecurity Expert**. The project combines cutting-edge web design with functional tools like network status pings and automated website auditing showcases. Built with **React, TypeScript, Tailwind CSS, and Framer Motion**, it offers a seamless, "elite" user experience across all devices.

## 🛠 Key Features
- **AI-Powered Aesthetic**: Modern dark-mode design with neon accents and glassmorphism.
- **Dynamic Portfolio**: Categorized projects (AI, Web, Security) with live demo links.
- **Verified Testimonials**: 15+ client feedbacks with high-quality generated avatars.
- **Interactive Stats**: Real-time network status and portfolio "ping" indicators.
- **SEO & Performance**: Optimized for fast loading and high search engine visibility.
- **Fully Responsive**: Tailored experiences for Mobile, Tablet, and Desktop.

---

## 🚀 Local Development

### Desktop (Windows/Mac/Linux)
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/yourusername/elite-portfolio.git
   cd elite-portfolio
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start Dev Server**:
   ```bash
   npm run dev
   ```

### 📱 Termux (Android)
To host and view this locally on your phone:
1. **Install Termux** (from F-Droid).
2. **Setup Environment**:
   ```bash
   pkg update && pkg upgrade
   pkg install nodejs git
   ```
3. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd elite-portfolio
   npm install
   ```
4. **Host Locally**:
   ```bash
   npm run dev -- --host
   ```
5. **View**: Open your mobile browser and go to `http://localhost:3000`.

---

## 🌐 Deployment Guide

### Hosting on Vercel
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repo.
4. Vercel will automatically detect the Vite settings. Click **Deploy**.
5. *Note: The `vercel.json` in this project ensures SPA routing works perfectly.*

### Hosting on Netlify
1. Log in to [Netlify](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your GitHub and select the repo.
4. Build Command: `npm run build`, Publish Directory: `dist`.
5. Click **Deploy Site**.
6. *Note: The `netlify.toml` handles the necessary redirects.*

---

## 🤝 How to Contribute & Edit
Other developers can easily customize this portfolio:

1. **Fork the Repository**: Create your own copy on GitHub.
2. **Modify Constants**: Most personal data (Name, Links, Projects) is located in `src/constants.ts`. Update this file to change the site content.
3. **Styling**: Global styles and theme colors (Neon Primary/Secondary) are in `src/index.css`.
4. **Components**: Each section is a separate React component in `src/components/`.
5. **Submit a PR**: If you've improved the code or fixed a bug, feel free to submit a Pull Request!

---

## 📡 System Status & Admin
- **Web Interface**: `/ping/`
- **JSON API**: `/ping.json`
- **Admin Panel**: `/admin` (Login at `/admin/auth`)
- **Admin Password**: `AkanniElite2026!` (Hard to guess, easy to remember)

## 📄 License
This project is open-source. Feel free to use it as a template for your own elite portfolio.
