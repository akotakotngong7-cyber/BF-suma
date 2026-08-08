import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Building,
  UserCheck,
  Award,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { Page, ApplicationFormData } from '../types';
import { CONTACT_INFO } from '../data/mockData';

interface ApplyPageProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const ApplyPage: React.FC<ApplyPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: 'Pharmacy / Medical Clinic Owner',
    experienceYears: '3 - 5 Years in Wellness / FMCG',
    investmentTier: '$5,000 - $15,000 (Authorized Reseller)',
    currentChannels: ['Retail Storefront'],
    message: '',
  });

  const handleCheckboxChange = (channel: string) => {
    if (formData.currentChannels.includes(channel)) {
      setFormData({
        ...formData,
        currentChannels: formData.currentChannels.filter((c) => c !== channel),
      });
    } else {
      setFormData({
        ...formData,
        currentChannels: [...formData.currentChannels, channel],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = `Hi, I have submitted my distributor application for BF Suma!
Name: ${formData.contactName}
Company: ${formData.companyName || 'Independent'}
Country: ${formData.country}
Tier: ${formData.investmentTier}
I'd like to discuss territory availability and order pricing.`;
    return `https://wa.me/254745119645?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Fast B2B Partnership Application Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Become an Authorized BF Suma Distributor
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Select your path below: fill out our formal application form or connect directly with our partnership director via WhatsApp or Phone for an immediate response.
          </p>
        </div>

        {/* Form or Success State Container */}
        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT COLUMN: Main Application Form */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
              <div className="space-y-2 border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-serif font-bold text-white">
                  Distributor Qualification Form
                </h2>
                <p className="text-xs text-slate-400">
                  Provide your business details to receive custom wholesale pricing and territory clearance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                {/* Contact Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Full Name / Representative *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Samuel Ochieng"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Company / Registered Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Supplies Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Email & Phone / WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Business Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="partner@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+254 745 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Country / Territory */}
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Target Country / Operating City Territory *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Kenya (Nairobi / Mombasa), UAE (Dubai), Nigeria (Lagos)"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                {/* Business Type & Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Current Business Type *
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="Pharmacy / Medical Clinic Owner">Pharmacy / Medical Clinic Owner</option>
                      <option value="Wholesaler / FMCG Distributor">Wholesaler / FMCG Distributor</option>
                      <option value="Independent Health & Wellness Reseller">Independent Health & Wellness Reseller</option>
                      <option value="E-Commerce / Digital Retailer">E-Commerce / Digital Retailer</option>
                      <option value="New Entrepreneurial Venture">New Entrepreneurial Venture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-slate-300 mb-1.5">
                      Health / Wellness Experience *
                    </label>
                    <select
                      value={formData.experienceYears}
                      onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="New to Supplements Sector">New to Supplements Sector</option>
                      <option value="1 - 2 Years Experience">1 - 2 Years Experience</option>
                      <option value="3 - 5 Years in Wellness / FMCG">3 - 5 Years in Wellness / FMCG</option>
                      <option value="5+ Years Established Distributor">5+ Years Established Distributor</option>
                    </select>
                  </div>
                </div>

                {/* Investment Tier */}
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Estimated Initial Order Capital / MOQ Tier *
                  </label>
                  <select
                    value={formData.investmentTier}
                    onChange={(e) => setFormData({ ...formData, investmentTier: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="$1,000 - $3,000 (Starter Reseller)">$1,000 - $3,000 (Starter Reseller)</option>
                    <option value="$5,000 - $15,000 (Authorized Regional Partner)">$5,000 - $15,000 (Authorized Regional Partner)</option>
                    <option value="$15,000 - $30,000 (Senior District Distributor)">$15,000 - $30,000 (Senior District Distributor)</option>
                    <option value="$30,000+ (Master Regional Franchisee)">$30,000+ (Master Regional Franchisee - Exclusive Rights)</option>
                  </select>
                </div>

                {/* Sales Channels */}
                <div>
                  <label className="block font-medium text-slate-300 mb-2">
                    Intended Distribution Channels:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {['Retail Storefront / Pharmacy', 'Direct Medical Referrals', 'Supermarket / FMCG', 'Online & Social Selling'].map((ch) => (
                      <label key={ch} className="flex items-center gap-2 cursor-pointer text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        <input
                          type="checkbox"
                          checked={formData.currentChannels.includes(ch)}
                          onChange={() => handleCheckboxChange(ch)}
                          className="accent-emerald-500 rounded"
                        />
                        <span>{ch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">
                    Additional Questions or Territory Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your target market, current retail outlets, or specific product lines of interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    id="submit-distributor-application-btn"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xl shadow-emerald-900/60 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Distributor Application</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  By submitting, you agree to receive commercial territory information from BF Suma Global Business Development.
                </p>
              </form>
            </div>

            {/* RIGHT COLUMN: Equal, Low-Friction Direct WhatsApp & Call Section */}
            <div className="lg:col-span-5 space-y-6">
              {/* Highlight Card for Direct Contact */}
              <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/40">
                    <MessageCircle className="w-3.5 h-3.5 fill-emerald-400" />
                    <span>Instant Direct Partner Contact</span>
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-white">
                    Prefer Instant Chat or Call?
                  </h2>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Some partners prefer to skip forms. Connect directly with our partnership director right now for quick answers regarding territory availability, custom price lists, and minimum order requirements.
                  </p>
                </div>

                {/* Prominent WhatsApp Option */}
                <div className="bg-slate-900/90 border border-emerald-500/40 p-5 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 font-mono">Fastest Response</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                      Avg &lt; 15 Mins
                    </span>
                  </div>

                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="apply-direct-whatsapp-cta"
                    className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>Chat on WhatsApp (+254 745 119 645)</span>
                  </a>

                  <p className="text-[11px] text-slate-400 text-center">
                    Clicking opens WhatsApp with a pre-filled inquiry message.
                  </p>
                </div>

                {/* Direct Phone Call Option */}
                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
                  <p className="text-xs font-bold text-slate-200">
                    Direct Global Partnership Phone Line:
                  </p>

                  <a
                    href={CONTACT_INFO.phoneTel}
                    id="apply-direct-phone-cta"
                    className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call Us: {CONTACT_INFO.phone}</span>
                  </a>

                  <p className="text-[11px] text-slate-400 text-center">
                    Available Mon - Sat, 8:00 AM - 6:00 PM (EAT)
                  </p>
                </div>

                {/* Support guarantees */}
                <div className="pt-2 space-y-2 text-xs border-t border-slate-800 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct 1-on-1 Regional Director Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free cGMP Certificate & Price Matrix PDF</span>
                  </div>
                </div>
              </div>

              {/* Office Locations Summary */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3 text-xs">
                <p className="font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  BF Suma Global Regional Hubs
                </p>
                <div className="space-y-2 text-slate-400">
                  <p><strong className="text-slate-200">US Manufacturing:</strong> Los Angeles, CA, USA</p>
                  <p><strong className="text-slate-200">East & West Africa Hub:</strong> Nairobi, Kenya & Lagos, Nigeria</p>
                  <p><strong className="text-slate-200">Middle East Hub:</strong> Dubai, UAE</p>
                  <p><strong className="text-slate-200">Southeast Asia Hub:</strong> Manila, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SUCCESS STATE UPON SUBMISSION */
          <div className="max-w-3xl mx-auto bg-slate-900 border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-8 shadow-2xl animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                Application Received Successfully
              </span>
              <h2 className="text-3xl font-serif font-bold text-white">
                Thank You, {formData.contactName}!
              </h2>
              <p className="text-sm text-slate-300 max-w-lg mx-auto">
                Your distributor qualification request for <strong className="text-emerald-300">{formData.country}</strong> has been logged. Our Regional Director is reviewing your commercial profile.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-xs text-left space-y-3 max-w-lg mx-auto">
              <p className="font-bold text-white flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-emerald-400" />
                Want Instant Follow-Up on WhatsApp?
              </p>
              <p className="text-slate-300">
                You can speed up your application by sending your pre-filled details directly to our WhatsApp partnership desk (+254 745 119 645).
              </p>

              <a
                href={getWhatsAppPrefilledUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-center text-xs shadow-lg transition-all"
              >
                Send Details via WhatsApp Now →
              </a>
            </div>

            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700"
              >
                Edit Application Details
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-2.5 bg-emerald-950 text-emerald-300 hover:bg-emerald-900 font-bold text-xs rounded-xl border border-emerald-700"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
