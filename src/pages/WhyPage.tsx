import React from 'react';
import {
  ShieldCheck,
  Award,
  Truck,
  GraduationCap,
  Megaphone,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Building,
  TrendingUp,
  FileText,
} from 'lucide-react';
import { Page } from '../types';
import { CERTIFICATIONS, SUPPORT_PACKAGES, TESTIMONIALS, CONTACT_INFO } from '../data/mockData';

interface WhyPageProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const WhyPage: React.FC<WhyPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>The Business Case for Partners & Wholesalers</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Why Distribute BF Suma Products?
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Discover why healthcare entrepreneurs, pharmacy owners, and wellness distributors across 15+ countries trust BF Suma for long-term commercial growth.
          </p>
        </div>

        {/* C-GMP Manufacturing & Lab Quality Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Pharmaceutical Grade Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Formulated & Manufactured in Los Angeles, USA
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every single bottle of BF Suma supplement is produced in our state-of-the-art manufacturing campus in California under strict US FDA cGMP (Current Good Manufacturing Practice) guidelines. We combine pure botanical extract sourcing with advanced molecular stabilization technology like dual-release NMN.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  FDA Inspected Facilities
                </p>
                <p className="text-slate-400">Regular federal audit compliance for international health registries.</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  100% Label Accuracy
                </p>
                <p className="text-slate-400">Every batch certified for potency, heavy metal purity & safety.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src="/src/assets/images/bfsuma_facility_cgmp_1786169891201.jpg"
              alt="BF Suma Los Angeles cGMP Manufacturing Facility"
              className="w-full h-64 sm:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700/60 p-3 rounded-xl text-xs backdrop-blur-md">
              <p className="font-bold text-white">cGMP Clean Room Research Lab</p>
              <p className="text-slate-400 text-[11px]">Los Angeles, CA, United States</p>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS IN DETAIL */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Global Standards & Certifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Complete documentation provided for smooth registration with your local health board or ministry of health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="inline-block text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                  {cert.badgeText}
                </span>
                <h3 className="font-serif font-bold text-base text-white">{cert.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{cert.description}</p>
                <p className="text-[11px] font-semibold text-slate-400 border-t border-slate-800 pt-2">
                  Issuer: {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DISTRIBUTOR SUPPORT PACKAGE */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Comprehensive Partner Enablement
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              What Support You Receive as a BF Suma Partner
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We don't just ship products — we equip you to dominate your local market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_PACKAGES.map((pkg, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                    {idx === 0 && <Megaphone className="w-6 h-6" />}
                    {idx === 1 && <GraduationCap className="w-6 h-6" />}
                    {idx === 2 && <Truck className="w-6 h-6" />}
                    {idx === 3 && <UserCheck className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white">{pkg.title}</h3>
                    <p className="text-xs text-emerald-400 font-mono">Included in All Partner Tiers</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{pkg.description}</p>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DISTRIBUTOR TESTIMONIALS & CASE STUDIES */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Partner Testimonials & Regional Success
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Hear directly from active BF Suma master distributors and franchise partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{t.flag}</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{t.yearsPartnered} Years Partnered</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-slate-800">
                  <p className="font-bold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.title} ({t.country})</p>
                  <p className="text-xs font-bold text-emerald-400 font-mono mt-1">{t.growthStat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-emerald-950 p-8 sm:p-12 rounded-3xl text-center space-y-6 border border-emerald-500/30">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Ready to Secure Your Territory?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Review requirements, select your initial order tier, or connect directly with our regional partnership desk via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('apply')}
              id="why-apply-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2"
            >
              <span>Apply for Distribution Rights</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="why-whatsapp-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500 text-slate-900" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
