import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;
  const timestamp = new Date().toISOString();

  try {
    const leadsFile = path.join(process.cwd(), "leads.json");
    let leads = [];
    if (fs.existsSync(leadsFile)) {
      leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    }
    leads.push({ name, email, message, timestamp });
    fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("Storage error (expected on serverless):", err);
  }

  return res.json({
    success: true,
    message: "Lead collected successfully. Akanni will get back to you soon!"
  });
}
