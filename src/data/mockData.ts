import { ProductCategory, Certification, TerritoryRegion, Testimonial, SupportPackageItem } from '../types';

export const CONTACT_INFO = {
  phone: '+254 745 119 645',
  phoneTel: 'tel:+254745119645',
  whatsappUrl: 'https://wa.me/254745119645?text=Hi%2C%20I%27m%20interested%20in%20becoming%20a%20BF%20Suma%20distributor',
  email: 'partnerships@bfsuma.com',
  address: 'Global Headquarters & Regional Hub - Africa & Middle East Division',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM (EAT)',
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'anti-aging',
    name: 'Anti-Aging & NMN Science',
    subtitle: 'Cellular longevity & NAD+ boosters',
    description: 'Cutting-edge NMN (Nicotinamide Mononucleotide) formulations, youth-restoring antioxidants, and cellular revitalizers backed by scientific research.',
    keyProducts: ['NMN Duo Release 12000mg', 'Youth Essence Capsules', 'Resveratrol Cell-Protect', 'Goji Berry Longevity Elixir'],
    marginRange: '38% - 48% Gross Margin',
    targetDemand: 'Rapidly growing premium sector among 30+ demographic',
    certifications: ['cGMP Certified', 'NSF Quality', 'HALAL'],
    iconName: 'Sparkles',
    badge: 'Fastest Growing Category',
  },
  {
    id: 'weight-management',
    name: 'Weight Management & Metabolism',
    subtitle: 'Natural detox, fat burn & appetite support',
    description: 'Herbal slimming teas, green coffee bean elixirs, fiber complexes, and metabolic activation formulas crafted for sustainable results.',
    keyProducts: ['Femicare Herbal Cleansing Tea', 'Prostatrelax Caps', '4-in-1 Ginseng Coffee', 'Matcha Fiber Slim Detox'],
    marginRange: '35% - 45% Gross Margin',
    targetDemand: 'High reorder rate & massive consumer foot traffic',
    certifications: ['100% Natural Herbal', 'cGMP', 'HACCP'],
    iconName: 'Flame',
    badge: 'Top Volume Seller',
  },
  {
    id: 'general-wellness',
    name: 'Immunity & General Wellness',
    subtitle: 'Daily vital health & multivitamin defence',
    description: 'Comprehensive immune boosters, Ganoderma lucidum spore supplements, spirulina tablets, and essential daily minerals.',
    keyProducts: ['Refined Ganoderma Spore Capsules', 'Pure Spirulina 500mg', 'Pure & Natural Vitamin C Plus', 'Zaminocal Bone Health Formula'],
    marginRange: '30% - 40% Gross Margin',
    targetDemand: 'Core daily staple products with lifetime customer retention',
    certifications: ['cGMP', 'NSF', 'HALAL Certified'],
    iconName: 'ShieldCheck',
  },
  {
    id: 'bone-joint',
    name: 'Bone & Joint Health',
    subtitle: 'Mobility, calcium absorption & joint flexibility',
    description: 'Advanced calcium plus zinc and magnesium compounds, glucosamine complexes, and collagen peptide powders for active joint support.',
    keyProducts: ['Zaminocal Plus Tablets', 'ArthroXtra Joint Care Glucosamine', 'Micro2 Cycle Blood Circulation', 'Dr. Zs Herbal Pain Relief Gel'],
    marginRange: '35% - 42% Gross Margin',
    targetDemand: 'Essential for aging populations & sports enthusiasts',
    certifications: ['cGMP', 'ISO 22000', 'HALAL'],
    iconName: 'Activity',
  },
  {
    id: 'specialty-beverages',
    name: 'Specialty Herbal Teas & Functional Coffee',
    subtitle: 'Daily wellness in every cup',
    description: 'Ginseng coffee blends, Cordyceps wellness beverages, and digestive herbal infusions designed for effortless daily routine adoption.',
    keyProducts: ['4-in-1 Cordyceps Coffee', 'Ginseng Coffee Extra Power', 'Pine Pollen Functional Tea', 'Ganoderma Latte Blend'],
    marginRange: '40% - 50% Gross Margin',
    targetDemand: 'Low barrier-to-entry daily FMCG consumable',
    certifications: ['cGMP', 'HACCP', 'HALAL'],
    iconName: 'Coffee',
    badge: 'High Repeat Rate',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cgmp',
    name: 'cGMP Certified Manufacturing',
    issuer: 'US FDA Current Good Manufacturing Practice',
    description: 'Formulated and manufactured under strict US FDA cGMP standards in Los Angeles, California, ensuring rigorous potency and purity.',
    badgeText: 'US FDA cGMP',
  },
  {
    id: 'nsf',
    name: 'NSF International Quality',
    issuer: 'NSF Public Health Standard',
    description: 'Independently tested for heavy metals, microbial safety, and label claim accuracy by global public health authorities.',
    badgeText: 'NSF Audited',
  },
  {
    id: 'haccp',
    name: 'HACCP Hazard Analysis',
    issuer: 'International Food Safety Standard',
    description: 'Systematic preventive approach to food safety from raw botanical sourcing to final packaged supplement batches.',
    badgeText: 'HACCP Verified',
  },
  {
    id: 'halal',
    name: 'HALAL Certification',
    issuer: 'Global Islamic Food & Nutrition Council',
    description: 'Full compliance with international Islamic dietary and formulation guidelines, enabling seamless sales across Middle East & Asia.',
    badgeText: '100% HALAL',
  },
];

export const TERRITORIES: TerritoryRegion[] = [
  {
    id: 'africa',
    name: 'Africa Division',
    flag: '🌍',
    activeDistributors: '28,000+ Active Resellers',
    status: 'Expanding Network',
    countries: ['Kenya', 'Nigeria', 'Uganda', 'Tanzania', 'Ghana', 'South Africa', 'Rwanda', 'Zambia'],
    growthRate: '+34% YoY Market Growth',
    featuredTerritories: ['Nairobi Hub', 'Lagos Central', 'Kampala Region', 'Accra District'],
  },
  {
    id: 'middle-east',
    name: 'Middle East & Gulf',
    flag: '🕌',
    activeDistributors: '8,500+ Active Partners',
    status: 'Open for Master Distributor',
    countries: ['UAE (Dubai/Abu Dhabi)', 'Saudi Arabia', 'Oman', 'Qatar', 'Bahrain', 'Kuwait'],
    growthRate: '+42% Premium Supplement Demand',
    featuredTerritories: ['Dubai Master Zone', 'Riyadh Commercial', 'Muscat Hub'],
  },
  {
    id: 'southeast-asia',
    name: 'Southeast Asia',
    flag: '🌏',
    activeDistributors: '11,000+ Active Outlets',
    status: 'High Demand',
    countries: ['Philippines', 'Vietnam', 'Malaysia', 'Indonesia', 'Thailand', 'Cambodia'],
    growthRate: '+29% Herbal FMCG Growth',
    featuredTerritories: ['Manila Regional', 'Ho Chi Minh City', 'Kuala Lumpur'],
  },
  {
    id: 'north-america',
    name: 'North America & Global Exports',
    flag: '🌎',
    activeDistributors: '4,500+ Specialist Distributors',
    status: 'Exclusive Available',
    countries: ['USA (Headquarters & Manufacturing)', 'Canada', 'Mexico', 'Caribbean Islands'],
    growthRate: '+25% Natural Wellness Surge',
    featuredTerritories: ['California Distribution Center', 'Toronto Wholesale Zone'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Samuel K. Ochieng',
    title: 'Master Regional Distributor (East Africa)',
    country: 'Kenya',
    flag: '🇰🇪',
    quote: 'Partnering with BF Suma changed my medical supply business completely. The cGMP quality means doctors and health practitioners trust the products without hesitation. Our first year turnover quadrupled.',
    yearsPartnered: 6,
    growthStat: '400% Sales Growth',
    avatar: 'https://picsum.photos/seed/distributor_samuel/200/200',
  },
  {
    id: '2',
    name: 'Amina Al-Maktoum',
    title: 'Exclusive Franchise Owner',
    country: 'UAE (Dubai)',
    flag: '🇦🇪',
    quote: 'The HALAL certification and premium packaging made BF Suma an instant hit across the GCC region. The marketing materials and direct WhatsApp distributor support team make expansion effortless.',
    yearsPartnered: 4,
    growthStat: '12 Retail Outlets Supplied',
    avatar: 'https://picsum.photos/seed/distributor_amina/200/200',
  },
  {
    id: '3',
    name: 'Chief Emmanuel Nnamdi',
    title: 'Senior Wholesale Partner',
    country: 'Nigeria',
    flag: '🇳🇬',
    quote: 'BF Suma provides true partner margins. The NMN line and Ginseng coffee products sell themselves because customers come back every single month for refills.',
    yearsPartnered: 8,
    growthStat: '$1.2M Annual Revenue',
    avatar: 'https://picsum.photos/seed/distributor_emmanuel/200/200',
  },
];

export const SUPPORT_PACKAGES: SupportPackageItem[] = [
  {
    title: 'Co-Op Marketing & Brand Collateral',
    description: 'Customized banners, high-resolution product photography, localized brochure designs, store signage templates, and digital media kits.',
    iconName: 'Megaphone',
    deliverables: ['Print-Ready Product Catalog PDFs', 'Social Media Campaign Assets', 'Branded Showroom Display Mockups', 'Custom Regional Flyers'],
  },
  {
    title: 'Product Training & Medical Masterclasses',
    description: 'Comprehensive technical product masterclasses led by herbalists and wellness specialists to train your sales representatives and healthcare professionals.',
    iconName: 'GraduationCap',
    deliverables: ['Weekly Webinars & Product Demos', 'Nutritional Ingredients Guidebooks', 'Distributor Sales Pitch Scripts', 'Certification Credentials'],
  },
  {
    title: 'Flexible MOQs & Fast Supply Logistics',
    description: 'Low entry minimum order quantities for new regions with reliable international container and air freight logistics hubs in USA, Dubai, and Kenya.',
    iconName: 'Truck',
    deliverables: ['Fast Dispatch within 48h', 'Low Starter Order Thresholds', 'Customs Clearance Assistance', 'Batch Traceability Reports'],
  },
  {
    title: 'Dedicated Regional Account Manager',
    description: 'Direct 1-on-1 account oversight with immediate phone/WhatsApp support for inventory reorders, territory protection, and promotional planning.',
    iconName: 'UserCheck',
    deliverables: ['24/7 WhatsApp Partner Desk', 'Quarterly Growth Rebate Planning', 'Exclusive Territory Mapping', 'Priority Order Handling'],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Distributor Application',
    description: 'Fill out our short online application or connect directly with our partnership desk via WhatsApp (+254 745 119 645).',
    timeline: 'Immediate / < 15 Min Response',
  },
  {
    step: '02',
    title: 'Territory & Commercial Consultation',
    description: 'Our Regional Director contacts you to discuss target territory availability, current market competition, and suitable product catalog focus.',
    timeline: '24 - 48 Hours',
  },
  {
    step: '03',
    title: 'Tier Selection & Initial Order',
    description: 'Choose your partnership tier (Master Distributor, Regional Franchisee, or Independent Wholesaler) and select your starting inventory.',
    timeline: '3 - 5 Days',
  },
  {
    step: '04',
    title: 'Dispatch, Launch & Co-Op Support',
    description: 'Receive your initial shipment along with free promotional launch kits, training access, and full marketing collateral to launch in your market.',
    timeline: 'Fast Freight Delivery',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'What is the minimum investment or initial order quantity (MOQ)?',
    a: 'We offer flexible starter packages tailored for new entrepreneurs as low as $1,000 - $3,000 for independent resellers, up to Master Distributor packages for regional operators. Higher tiers unlock protected territory exclusivity and higher volume rebates.',
  },
  {
    q: 'Do you offer exclusive territory rights?',
    a: 'Yes. Master Distributors who meet baseline quarterly order volumes receive exclusive distribution rights within defined geographic territories or countries.',
  },
  {
    q: 'Are BF Suma products certified for import in my country?',
    a: 'All BF Suma products are manufactured in FDA-inspected, cGMP certified facilities in California, USA, with NSF and HALAL certifications. We provide complete Certificate of Free Sale (CFS), Certificate of Analysis (COA), and dossier documentation to streamline registration with your local health authorities.',
  },
  {
    q: 'How fast will I receive a response after submitting my application?',
    a: 'Our partnership team responds within 24 hours to formal form submissions, or instantly via WhatsApp (+254 745 119 645).',
  },
];
