import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { password } = req.body;
  if (password === "AkanniElite2026!") {
    return res.json({ success: true, token: "elite_session_token_2026" });
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}
