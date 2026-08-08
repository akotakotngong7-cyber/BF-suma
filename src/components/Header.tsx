import React, { useState } from 'react';
import { Phone, MessageCircle, Globe, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO } from '../data/mockData';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSampleModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'why', label: 'Why BF Suma' },
    { id: 'products', label: 'Product Catalog' },
    { id: 'requirements', label: 'Requirements & Process' },
    { id: 'apply', label: 'Apply / Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-xl border-b border-emerald-900/40">
      {/* Top Banner with Direct Hotline & Global Trust */}
      <div className="bg-emerald-950/90 text-emerald-200 border-b border-emerald-900/60 px-4 py-2 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              US FDA cGMP & NSF Certified Supplements
            </span>
            <span className="hidden md:inline text-emerald-500">•</span>
            <span className="hidden md:inline text-emerald-300/80">
              Exporting to 15+ Countries Across Africa, Middle East, Asia & Americas
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Click-to-call link */}
            <a
              href={CONTACT_INFO.phoneTel}
              id="header-phone-link"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-emerald-200 font-medium"
              title="Call Partnership Desk"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Call Us:</span> {CONTACT_INFO.phone}
            </a>

            <span className="text-emerald-800">|</span>

            {/* Click-to-WhatsApp link */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-link"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium bg-emerald-900/50 px-2.5 py-0.5 rounded-full border border-emerald-700/50"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-950" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group"
            id="brand-logo"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center font-bold text-slate-900 text-xl shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
              <span className="tracking-tighter font-extrabold text-white">BFS</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-white font-serif">BF SUMA</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-emerald-500/30">
                  Global B2B
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans tracking-wide">
                Natural Herbal & Health Supplements
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSampleModal}
              id="header-sample-catalog-btn"
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
            >
              Catalog PDF
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-chat-btn"
              className="px-3.5 py-2 text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-900/20"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-950 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => handleNavClick('apply')}
              id="header-apply-btn"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 rounded-lg transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-1.5 ring-1 ring-emerald-400/30"
            >
              <span>Become a Distributor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-3">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                  currentPage === link.id
                    ? 'bg-emerald-900/60 text-emerald-300 font-bold border border-emerald-700/50'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 grid gap-2.5">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-xs space-y-2">
              <p className="font-semibold text-slate-200">Direct Partner Support Desk:</p>
              <a
                href={CONTACT_INFO.phoneTel}
                className="flex items-center gap-2 text-emerald-400 font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={() => handleNavClick('apply')}
              className="w-full py-3 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <span>Become a Distributor Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleModal();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700"
            >
              Request Product Catalog & Kit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
