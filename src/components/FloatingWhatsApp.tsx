import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("Hi, I'm interested in becoming a BF Suma distributor in my region.");

  const handleSendWhatsApp = () => {
    const encodedMsg = encodeURIComponent(customMsg);
    const url = `https://wa.me/254745119645?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Quick Message Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 p-4 text-white flex items-center justify-between border-b border-emerald-700/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-950 text-sm shadow">
                  BFS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-950 rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-sm">BF Suma Distributor Desk</p>
                <p className="text-xs text-emerald-200 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  Online | Avg reply under 15 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-200 hover:text-white p-1 rounded-lg hover:bg-emerald-800/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-slate-950/90 text-xs text-slate-300 space-y-3">
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1.5">
              <p className="font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Direct WhatsApp Partnership Desk
              </p>
              <p className="text-slate-300">
                Connect directly with our global expansion director to ask about territory availability, MOQ discounts, or request product catalogs.
              </p>
              <p className="text-[11px] font-mono text-emerald-300/80">
                Hotline: {CONTACT_INFO.phone}
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">
                Your Initial Inquiry Message:
              </label>
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                rows={3}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={CONTACT_INFO.phoneTel}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl flex items-center justify-center gap-1.5 border border-slate-700 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Call</span>
              </a>

              <button
                onClick={handleSendWhatsApp}
                className="px-3 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/40 text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Chat</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        className="group relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 font-bold text-sm transition-all transform hover:scale-105 active:scale-95 border-2 border-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-slate-950 text-emerald-400" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-300 rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline font-bold tracking-tight">Chat on WhatsApp</span>
        <span className="sm:hidden font-bold">Chat</span>
      </button>
    </div>
  );
};
