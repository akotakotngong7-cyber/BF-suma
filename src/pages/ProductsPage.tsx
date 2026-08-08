import React, { useState } from 'react';
import {
  Sparkles,
  Flame,
  ShieldCheck,
  Activity,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Search,
  Filter,
  Download,
  MessageCircle,
  Phone,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { Page, ProductCategory } from '../types';
import { PRODUCT_CATEGORIES, CONTACT_INFO } from '../data/mockData';

interface ProductsPageProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
    const matchesSearch =
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.keyProducts.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
            B2B Product Portfolio Overview
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            What You’ll Be Offering Your Customers
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            A comprehensive catalog of US-manufactured herbal supplements, cellular longevity NMN formulas, and functional beverages engineered for fast turnover and high customer reorders.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenSampleModal}
              id="products-download-catalog-btn"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs shadow-lg shadow-emerald-950/60 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download B2B Catalog PDF & Wholesale Price List</span>
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Sample Starter Pack on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Visual Lineup Banner Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <img
              src="/src/assets/images/bfsuma_product_lineup_1786169876855.jpg"
              alt="BF Suma Product Catalog Showcase"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold px-3 py-1 rounded-full">
              Full Range Available in Custom Master Cartons
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white">
              Commercial Portfolio Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              BF Suma formulations are packaged with multi-lingual labelling (English, Arabic, French, Swahili), tamper-evident holographic security seals, and high-shelf-presence branding that stands out in pharmacies, clinics, and retail outlets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <p className="text-emerald-400 font-bold font-mono">35% - 50%</p>
                <p className="text-slate-400 text-[11px]">Reseller Gross Margin</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <p className="text-white font-bold font-mono">24 Months</p>
                <p className="text-slate-400 text-[11px]">Minimum Shelf Life</p>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <p className="text-emerald-400 font-bold font-mono">cGMP & HALAL</p>
                <p className="text-slate-400 text-[11px]">100% Import Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Categories ({PRODUCT_CATEGORIES.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search products or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 space-y-6 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-emerald-400 font-mono font-bold">{cat.subtitle}</span>
                      {cat.badge && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">
                          {cat.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-white">{cat.name}</h3>
                  </div>

                  <span className="text-xs bg-emerald-500/10 text-emerald-300 font-bold px-3 py-1.5 rounded-full border border-emerald-500/30 whitespace-nowrap">
                    {cat.marginRange}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{cat.description}</p>

                {/* Key Formulations list */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core SKUs Offered to Your Customers:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.keyProducts.map((p, idx) => (
                      <div key={idx} className="text-xs text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Demand Profile */}
                <div className="text-xs text-slate-400 space-y-1">
                  <p>
                    <strong className="text-slate-200">Market Profile: </strong>
                    {cat.targetDemand}
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <strong className="text-slate-200">Certifications: </strong>
                    <div className="flex items-center gap-1">
                      {cat.certifications.map((c, i) => (
                        <span key={i} className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onNavigate('apply')}
                  className="w-full sm:w-auto flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire Distributor Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/254745119645?text=Hi%2C%20I'm%20interested%20in%20distributing%20BF%20Suma%20${encodeURIComponent(cat.name)}%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Need Detailed Formula Specification Sheets or Dossiers?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Our regulatory team provides full product dossiers, COAs (Certificate of Analysis), and ingredient assay specs for local health authority registration.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={onOpenSampleModal}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs"
            >
              Request Dossier & Catalog PDF
            </button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold rounded-xl text-xs flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact Regulatory Desk</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
