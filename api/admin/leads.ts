import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const authHeader = req.headers.authorization;
  
  if (authHeader === "Bearer elite_session_token_2026") {
    try {
      const leadsFile = path.join(process.cwd(), "leads.json");
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
      }
      return res.json({ success: true, leads });
    } catch (err) {
      return res.json({ success: true, leads: [] });
    }
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}
