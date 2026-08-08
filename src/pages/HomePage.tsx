import React, { useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  Globe,
  TrendingUp,
  Users,
  CheckCircle2,
  Sparkles,
  Flame,
  Activity,
  Coffee,
  ChevronRight,
  Building,
  HelpCircle,
} from 'lucide-react';
import { Page } from '../types';
import { CONTACT_INFO, PRODUCT_CATEGORIES, TERRITORIES, TESTIMONIALS } from '../data/mockData';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenSampleModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSampleModal }) => {
  const [selectedTerritoryCountry, setSelectedTerritoryCountry] = useState('');
  const [checkerResult, setCheckerResult] = useState<{
    status: string;
    message: string;
  } | null>(null);

  const handleCheckCountry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTerritoryCountry) return;

    const term = selectedTerritoryCountry.toLowerCase().trim();
    if (term.includes('kenya') || term.includes('nigeria') || term.includes('uganda') || term.includes('tanzania') || term.includes('uae') || term.includes('dubai') || term.includes('ghana') || term.includes('philippines')) {
      setCheckerResult({
        status: 'High Demand — Network Expansion Active',
        message: `Territory slots & reseller packages are currently open in ${selectedTerritoryCountry}. Fast delivery from local/regional warehousing.`,
      });
    } else {
      setCheckerResult({
        status: 'Master Distributor / Exclusive Opportunity Open',
        message: `Priority master distribution rights are currently available in ${selectedTerritoryCountry}. Submit your inquiry to secure territory exclusivity.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 pt-10 pb-20 lg:pt-16 lg:pb-32 border-b border-slate-800">
        {/* Background Image / Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('/src/assets/images/bfsuma_hero_supplements_1786169845904.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70 z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>US FDA cGMP Certified Manufacturing | Global B2B Partner Portal</span>
              </div>

              {/* Opportunity-Led Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                Bring BF Suma’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">Natural Wellness Products</span> to Your Market
              </h1>

              {/* Opportunity Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                Expand your business with a world-class brand of herbal supplements, anti-aging NMN formulations, and weight management teas. Built for high margins, repeat customer demand, and protected regional distributor territories.
              </p>

              {/* Action Buttons: Primary Apply CTA + Secondary WhatsApp CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary CTA: Become a Distributor */}
                <button
                  onClick={() => onNavigate('apply')}
                  id="hero-primary-apply-cta"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-base transition-all shadow-xl shadow-emerald-950/80 hover:shadow-emerald-500/20 flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
                >
                  <span>Become a Distributor</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Secondary CTA: Chat on WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-cta"
                  className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-emerald-500 text-slate-900" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Catalog Download Trigger */}
                <button
                  onClick={onOpenSampleModal}
                  id="hero-catalog-btn"
                  className="sm:hidden text-xs text-slate-400 underline text-center pt-1"
                >
                  Request B2B Product Catalog & Price Matrix
                </button>
              </div>

              {/* Key Trust Metrics Ribbon */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">15+</p>
                  <p className="text-xs text-slate-400 font-medium">Countries Active</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">35-50%</p>
                  <p className="text-xs text-slate-400 font-medium">Distributor Margins</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">50,000+</p>
                  <p className="text-xs text-slate-400 font-medium">Global Resellers</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">cGMP</p>
                  <p className="text-xs text-slate-400 font-medium">US FDA Standard</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800 to-emerald-900/40 shadow-2xl">
                <div className="bg-slate-900 rounded-xl overflow-hidden p-6 space-y-5 border border-slate-800">
                  <div className="relative rounded-lg overflow-hidden h-52 bg-slate-950">
                    <img
                      src="/src/assets/images/bfsuma_hero_supplements_1786169845904.jpg"
                      alt="BF Suma Natural Health Product Line"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>Premium Herbal Line</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-lg text-white">Distributor Opportunity Kit</h3>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                        B2B Only
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Complete product catalog, sample starter inventory, marketing collateral, and dedicated account manager support included with every new territory launch.
                    </p>

                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Territory Status:</span>
                        <span className="text-emerald-400 font-semibold bg-[#080808] px-2 py-0.5 rounded">Protected Master / Franchise</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Starter Order MOQ:</span>
                        <span className="text-white font-semibold">Flexible ($1,000+)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span>Fast Support:</span>
                        <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
                          WhatsApp (+254 745 119 645)
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('apply')}
                      className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <span>Check Your Country Availability</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER WITH US HIGHLIGHTS */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
              The Business Case for Distributors
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Why Business Leaders Choose BF Suma
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              We combine US pharmaceutical-grade manufacturing standards with unbeatable commercial margins, marketing co-op support, and high customer repeat rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight 1 */}
            <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">US cGMP Quality & Certifications</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Formulated in Los Angeles, California. Certified by US FDA cGMP, NSF, HACCP, and HALAL authorities to guarantee seamless local health registry approval.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">35% to 50% Profit Margins</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generous wholesale margins, performance rebates, and annual volume bonuses designed to maximize reseller profitability and regional business expansion.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Full Co-Op Marketing Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Receive localized promotional kits, print catalogs, digital advertising creative, product masterclass training, and store signage collateral.
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="bg-slate-950 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Flexible MOQs & Logistics</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Low initial order barriers for new markets with fast dispatch from regional supply hubs in USA, Dubai, Nairobi, and Manila.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOG OVERVIEW SHOWCASE */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
                What You'll Be Offering Your Customers
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                High-Demand Natural Wellness Lines
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 border-b border-emerald-500/40 pb-1"
            >
              <span>Explore Full Product Catalog & Margins</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.slice(0, 3).map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 space-y-4 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full font-bold border border-emerald-500/20">
                      {cat.marginRange}
                    </span>
                    {cat.badge && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-xl text-white">{cat.name}</h3>
                  <p className="text-xs text-slate-300">{cat.description}</p>

                  <div className="pt-2 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Flagship Products:
                    </p>
                    <ul className="space-y-1">
                      {cat.keyProducts.map((prod, i) => (
                        <li key={i} className="text-xs text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onNavigate('products')}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Category Margins</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DISTRIBUTOR MAP & TERRITORY CHECKER */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
              Global Presence Across 15+ Countries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Target Markets & Territory Availability
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              BF Suma operates regional distribution hubs servicing North America, East & West Africa, Middle East GCC, and Southeast Asia.
            </p>
          </div>

          {/* Territory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TERRITORIES.map((region) => (
              <div key={region.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{region.flag}</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                    {region.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-white">{region.name}</h3>
                  <p className="text-xs text-emerald-400 font-mono">{region.activeDistributors}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <p className="font-semibold text-slate-400">Active Countries:</p>
                  <p className="text-slate-300 leading-tight">{region.countries.join(', ')}</p>
                </div>

                <div className="pt-2 text-[11px] font-bold text-slate-400 border-t border-slate-800">
                  <span>Growth Rate: </span>
                  <span className="text-emerald-400">{region.growthRate}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Territory Quick-Checker Widget */}
          <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-emerald-400" />
              <div>
                <h3 className="font-serif font-bold text-lg text-white">Territory Opportunity Pre-Checker</h3>
                <p className="text-xs text-slate-400">
                  Enter your target country or city to instantly check current distributor status.
                </p>
              </div>
            </div>

            <form onSubmit={handleCheckCountry} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="e.g. Kenya, UAE, Nigeria, Saudi Arabia, Philippines, USA..."
                value={selectedTerritoryCountry}
                onChange={(e) => setSelectedTerritoryCountry(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                <span>Check Territory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {checkerResult && (
              <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-xl text-xs space-y-2 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{checkerResult.status}</span>
                </div>
                <p className="text-slate-200">{checkerResult.message}</p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onNavigate('apply')}
                    className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs"
                  >
                    Apply for this Territory
                  </button>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    Or WhatsApp us (+254 745 119 645)
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DISTRIBUTOR TESTIMONIAL HIGHLIGHT */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest uppercase">
              Partner Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Real Growth from Real Distributors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-emerald-500/30 overflow-hidden shrink-0">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <span>{item.flag}</span>
                    </p>
                    <p className="text-[11px] text-slate-400">{item.title}</p>
                    <span className="inline-block text-[10px] font-mono text-emerald-400 font-bold">
                      {item.growthStat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Fast 24-Hour Application Review Process</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Take the First Step Toward Your BF Suma Franchise
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Submit your distributor application online or reach our partnership director immediately on WhatsApp or phone.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('apply')}
              id="home-secondary-apply-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-2"
            >
              <span>Apply to Become a Distributor</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="home-secondary-whatsapp-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-500 text-slate-900" />
              <span>Chat on WhatsApp (+254 745 119 645)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
