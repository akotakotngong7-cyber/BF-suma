import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, Mail, Phone, Building } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/80 hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                <Download className="w-3.5 h-3.5" />
                <span>Distributor Information Kit</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Download BF Suma Product Catalog & B2B Price Matrix
              </h3>
              <p className="text-xs text-slate-400">
                Get immediate access to our 2026 global product catalog, margin breakdown, cGMP certificates, and starter order guidelines.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Full Name / Key Contact *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. David Mwangi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Business Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="partner@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">WhatsApp / Phone *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Target Country/Territory *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Kenya, UAE, Nigeria"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Company / Clinic Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Pharma Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-900/40 text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Catalog PDF & Price List</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-500">
                Your information is strict B2B confidential. We never share partner details.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white">Catalog Download Unlocked!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-emerald-400">{formData.name}</span>. The complete 2026 BF Suma B2B Product Catalog & Margin Guide has been sent to <span className="text-emerald-400">{formData.email}</span>.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-left space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Want Faster Order Quote or Samples?
              </p>
              <p className="text-slate-400">
                Our regional director for {formData.country || 'your market'} is ready on WhatsApp.
              </p>
              <a
                href={`https://wa.me/254745119645?text=Hi%2C%20I%20just%20requested%20the%20catalog%20for%20${encodeURIComponent(formData.name)}%20in%20${encodeURIComponent(formData.country)}.%20I'd%20like%20to%20discuss%20distributor%20pricing.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline pt-1"
              >
                <span>Connect via WhatsApp (+254 745 119 645) →</span>
              </a>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
