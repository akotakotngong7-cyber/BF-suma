import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Building,
  HelpCircle,
  MessageCircle,
  Phone,
  Clock,
  TrendingUp,
  DollarSign,
  ChevronDown,
} from 'lucide-react';
import { Page } from '../types';
import { PROCESS_STEPS, FAQ_ITEMS, CONTACT_INFO } from '../data/mockData';

interface RequirementsPageProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const RequirementsPage: React.FC<RequirementsPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  // Interactive Distributor Profitability Calculator state
  const [monthlyOrderVolume, setMonthlyOrderVolume] = useState<number>(10000);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculations based on order tier
  const calculateMetrics = (amount: number) => {
    let marginPercent = 35;
    let rebatePercent = 2;
    let tierName = 'Independent Wholesaler';
    let supportLevel = 'Standard Marketing Kit';

    if (amount >= 30000) {
      marginPercent = 48;
      rebatePercent = 6;
      tierName = 'Master Regional Franchisee';
      supportLevel = 'Exclusive Territory Rights + Co-Op Marketing Budget + 1-on-1 Account Manager';
    } else if (amount >= 15000) {
      marginPercent = 42;
      rebatePercent = 4;
      tierName = 'Senior Regional Distributor';
      supportLevel = 'Protected District Rights + Co-Op Materials';
    } else if (amount >= 5000) {
      marginPercent = 38;
      rebatePercent = 3;
      tierName = 'Authorized Territory Partner';
      supportLevel = 'Full Product Training & Digital Kits';
    }

    const projectedRetailSales = Math.round(amount * (1 + marginPercent / 100));
    const grossProfit = projectedRetailSales - amount;
    const annualRebate = Math.round((amount * 12 * rebatePercent) / 100);

    return {
      marginPercent,
      rebatePercent,
      tierName,
      supportLevel,
      projectedRetailSales,
      grossProfit,
      annualRebate,
    };
  };

  const calc = calculateMetrics(monthlyOrderVolume);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Building className="w-4 h-4 text-emerald-400" />
            <span>Pre-Qualification & Onboarding Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Distributor Requirements & Application Process
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            We partner with ambitious business owners, healthcare resellers, and regional importers. Review our pre-qualification criteria to ensure a successful partnership.
          </p>
        </div>

        {/* PRE-QUALIFICATION CRITERIA CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/20">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-white">1. Business Registration & Legal Entity</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Applicants should possess an active business registration, sole proprietorship, pharmacy license, or registered import/wholesale entity in their target operating territory.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/20">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-white">2. Initial Working Capital & MOQs</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Starter order packages begin at $1,000 - $3,000 for local independent resellers, up to $25,000+ for Master Regional Distributors seeking territory exclusivity.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs border border-emerald-500/20">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-white">3. Commercial Distribution Reach</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Demonstrated ability to distribute through local retail outlets, pharmacy networks, clinic referrals, direct sales agents, or established e-commerce channels.
            </p>
          </div>
        </div>

        {/* INTERACTIVE PROFITABILITY & MARGIN CALCULATOR */}
        <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-emerald-400" />
                Interactive Partner Estimator
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Distributor Margin & ROI Calculator
              </h2>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono px-3 py-1 rounded-full border border-emerald-500/30">
              Dynamic Tier Pricing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                  <span>Projected Monthly Order Capital (USD):</span>
                  <span className="text-xl font-mono text-emerald-400 font-extrabold">
                    ${monthlyOrderVolume.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min={1000}
                  max={50000}
                  step={1000}
                  value={monthlyOrderVolume}
                  onChange={(e) => setMonthlyOrderVolume(Number(e.target.value))}
                  className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$1,000 Starter</span>
                  <span>$15,000 Senior</span>
                  <span>$50,000 Master</span>
                </div>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Unlocked Qualification Tier:
                </p>
                <p className="text-base font-bold text-emerald-300">{calc.tierName}</p>
                <p className="text-slate-400 text-[11px]">{calc.supportLevel}</p>
              </div>
            </div>

            {/* Projected Outputs Card */}
            <div className="lg:col-span-6 bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-5">
              <p className="text-xs font-mono uppercase font-bold text-slate-400 border-b border-slate-800 pb-2">
                Estimated Commercial Return Matrix:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] text-slate-400">Reseller Retail Margin:</p>
                  <p className="text-2xl font-bold font-mono text-emerald-400">{calc.marginPercent}%</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Annual Volume Rebate:</p>
                  <p className="text-2xl font-bold font-mono text-amber-300">{calc.rebatePercent}%</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Est. Monthly Gross Revenue:</p>
                  <p className="text-xl font-bold font-mono text-white">${calc.projectedRetailSales.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Est. Monthly Gross Profit:</p>
                  <p className="text-xl font-bold font-mono text-emerald-400">${calc.grossProfit.toLocaleString()}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
                <div>
                  <p className="text-slate-400 text-[11px]">Est. Annual Volume Rebate Cash-Back:</p>
                  <p className="text-emerald-400 font-mono font-bold">${calc.annualRebate.toLocaleString()} / year</p>
                </div>
                <button
                  onClick={() => onNavigate('apply')}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs"
                >
                  Apply at This Tier
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STEP BY STEP ONBOARDING PROCESS */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Simple 4-Step Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              How to Become a BF Suma Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">{step.step}</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding territory exclusivity, order fulfillment, and legal registration support.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full p-4 text-left font-bold text-sm text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-white">Have Specific Territory Questions?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Speak directly with our regional partnership desk on WhatsApp or phone before submitting your formal application.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => onNavigate('apply')}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs"
            >
              Fill Out Application Form
            </button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold rounded-xl text-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+254 745 119 645)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
