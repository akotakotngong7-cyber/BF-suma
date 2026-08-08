import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ArrowRight, Globe, Award } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO, CERTIFICATIONS } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSampleModal }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Callout Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
              <Award className="w-3.5 h-3.5" />
              <span>Global Franchise & Master Distributor Expansion</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Ready to Launch BF Suma in Your Territory?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Join over 50,000 active distributors across 15+ countries in North America, Africa, Middle East, and Asia. Protected regional territories currently open.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => handleNav('apply')}
              id="footer-apply-cta"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white text-lg">
              BFS
            </div>
            <div>
              <span className="text-xl font-bold font-serif text-white">BF SUMA</span>
              <p className="text-xs text-slate-400">Natural Wellness & Supplement Brand</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            BF Suma is a leading global developer and manufacturer of high-potency natural health products, anti-aging NMN formulations, and herbal supplements manufactured in FDA-inspected, cGMP certified facilities in California, USA.
          </p>

          <div className="pt-2 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href={CONTACT_INFO.phoneTel} className="hover:text-emerald-300 font-semibold text-sm">
                Call: {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300 font-semibold text-sm"
              >
                WhatsApp: {CONTACT_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </div>

            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Manufacturing: Los Angeles, CA, USA | Global Logistics Hubs: Dubai, Nairobi, Manila</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-white uppercase tracking-wider">Partnership Links</p>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">
                Opportunity Overview
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('why')} className="hover:text-emerald-400 transition-colors">
                Why Partner with BF Suma
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">
                Product Lineup & Margins
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('requirements')} className="hover:text-emerald-400 transition-colors">
                Requirements & MOQs
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('apply')} className="hover:text-emerald-400 transition-colors">
                Distributor Application
              </button>
            </li>
            <li>
              <button onClick={onOpenSampleModal} className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold">
                Download Catalog PDF
              </button>
            </li>
          </ul>
        </div>

        {/* Regions */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-white uppercase tracking-wider">Target Regions</p>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center justify-between">
              <span>East & West Africa</span>
              <span className="text-emerald-400 font-mono text-[10px]">Open</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Middle East & GCC</span>
              <span className="text-emerald-400 font-mono text-[10px]">Master Tier</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Southeast Asia</span>
              <span className="text-emerald-400 font-mono text-[10px]">Open</span>
            </li>
            <li className="flex items-center justify-between">
              <span>North America</span>
              <span className="text-emerald-400 font-mono text-[10px]">Selective</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Latin America</span>
              <span className="text-emerald-400 font-mono text-[10px]">New Territory</span>
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-white uppercase tracking-wider">Global Standards</p>
          <div className="grid grid-cols-2 gap-2">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-center"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <p className="text-[11px] font-bold text-slate-200">{cert.badgeText}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-500">
            Compliant with US FDA cGMP guidelines, NSF Public Health standards, and HALAL dietary law.
          </p>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BF Suma Inc. All Rights Reserved. Official Global Business Development Portal.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">B2B Terms of Supply</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Territory Integrity Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy & Data Handling</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
