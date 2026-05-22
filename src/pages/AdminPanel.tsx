import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Download, Users, LogOut, Trash2, RefreshCw, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { GOOGLE_SHEETS_URL, GOOGLE_SHEET_ID } from "@/src/constants";

interface Lead {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function AdminPanel() {
  const isSheetsActive = !!GOOGLE_SHEETS_URL || !!GOOGLE_SHEET_ID;
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    setIsLoading(true);
    const token = localStorage.getItem("admin_token");
    
    if (!token) {
      window.location.href = "/admin/auth";
      return;
    }

    try {
      // 1. Get Local Leads
      const localLeads = JSON.parse(localStorage.getItem("local_leads") || "[]").map((l: any) => ({ ...l, source: "Local" }));

      // 2. Get Remote Leads
      let remoteLeads = [];
      const targetUrl = GOOGLE_SHEETS_URL || "/api/admin/leads";
      
      if (GOOGLE_SHEETS_URL || targetUrl.startsWith("/api")) {
        const response = await fetch(targetUrl, {
          headers: GOOGLE_SHEETS_URL ? {} : { "Authorization": `Bearer ${token}` }
        });

        if (!GOOGLE_SHEETS_URL && response.status === 401) {
          localStorage.removeItem("admin_token");
          window.location.href = "/admin/auth";
          return;
        }

        const data = await response.json();
        remoteLeads = (data.leads || []).map((l: any) => ({ ...l, source: "Cloud" }));
      }

      // 3. Merge and Sort (Newest first)
      const allLeads = [...remoteLeads, ...localLeads].sort((a, b) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      // Remove duplicates based on email and timestamp if necessary
      const uniqueLeads = allLeads.filter((v, i, a) => 
        a.findIndex(t => t.timestamp === v.timestamp && t.email === v.email) === i
      );

      setLeads(uniqueLeads);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load inquiries.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    window.location.href = "/admin/auth";
  };

  const clearLocalLeads = () => {
    if (window.confirm("Are you sure you want to clear local test data? This will not affect Google Sheets.")) {
      localStorage.removeItem("local_leads");
      fetchLeads();
    }
  };

  const downloadLeads = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Timestamp,Name,Email,Message\n"
      + leads.map(l => `"${l.timestamp}","${l.name}","${l.email}","${l.message}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Users className="text-primary" /> Admin <span className="text-primary">Inquiry</span> Panel
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-muted-foreground">Manage and export your collected portfolio inquiries.</p>
              <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                isSheetsActive ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-yellow-500/10 border-yellow-500/20 text-yellow-500"
              }`}>
                {isSheetsActive ? "Sheets Sync: ON" : "Sheets Sync: OFF"}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="glass gap-2" onClick={fetchLeads}>
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="outline" className="glass gap-2 text-muted-foreground hover:text-red-400" onClick={clearLocalLeads}>
              <Trash2 className="w-4 h-4" /> Clear Local
            </Button>
            <Button variant="outline" className="glass gap-2 text-red-500 hover:text-red-400" onClick={handleLogout}>
              <LogOut className="w-4 h-4" /> Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 glass border-white/5 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{leads.length}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Total Inquiries</div>
          </Card>
          <Card className="p-8 glass border-white/5 flex flex-col items-center justify-center gap-4">
            <Button className="w-full h-12 rounded-xl gap-2" onClick={downloadLeads} disabled={leads.length === 0}>
              <Download className="w-4 h-4" /> Download CSV
            </Button>
          </Card>
          <Card className="p-8 glass border-white/5 flex flex-col items-center justify-center gap-4">
            <Button variant="outline" className="w-full h-12 rounded-xl gap-2 glass" onClick={() => window.location.href = "/"}>
              <FileText className="w-4 h-4" /> View Site
            </Button>
          </Card>
        </div>

        <Card className="glass border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Date</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Source</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-muted-foreground animate-pulse">Loading inquiries...</td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-muted-foreground">No inquiries collected yet.</td>
                  </tr>
                ) : (
                  leads.map((lead: any, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-xs text-muted-foreground">{new Date(lead.timestamp).toLocaleDateString()}</td>
                      <td className="p-4">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          lead.source === "Cloud" ? "bg-blue-500/20 text-blue-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {lead.source}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-sm">{lead.name}</td>
                      <td className="p-4 text-sm text-primary">{lead.email}</td>
                      <td className="p-4 text-sm text-muted-foreground max-w-xs truncate">{lead.message}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
