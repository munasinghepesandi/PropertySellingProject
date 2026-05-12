import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BookOpen, Newspaper, TrendingUp, MapPin, AlertCircle, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    date: "Tuesday May 11, 2026",
    category: "Market News",
    title: "Robust Demand for Real Estate Purchases Displayed at the Lanka Property Show 2026",
    excerpt: "Unprecedented investor interest marks successful property expo with record attendance and transaction commitments.",
    image: "📰",
  },
  {
    date: "Saturday May 04, 2026",
    title: "Apartment Market Shows Strong Growth in Western Province",
    excerpt: "New apartment launches reach 5-year high as developers focus on urban regeneration projects.",
    image: "📈",
    category: "Market Trends",
  },
  {
    date: "Wednesday April 26, 2026",
    title: "Digital Transformation Reshaping Real Estate Search Experience",
    excerpt: "AI-powered tools and virtual tours becoming standard in property discovery process.",
    image: "💻",
    category: "Technology",
  },
  {
    date: "Thursday April 18, 2026",
    title: "Foreign Investment in Sri Lankan Real Estate Surges 40%",
    excerpt: "Increased confidence in market stability drives international buyer participation.",
    image: "🌍",
    category: "Investment",
  },
  {
    date: "Tuesday April 10, 2026",
    title: "Colombo Luxury Market Breaks Transaction Records",
    excerpt: "High-end properties in prime locations commanding premium valuations with strong investor interest.",
    image: "👑",
    category: "Luxury",
  },
  {
    date: "Friday April 02, 2026",
    title: "Sustainable Housing Projects Gaining Momentum in Urban Areas",
    excerpt: "Green building certifications and energy-efficient homes attract environmentally conscious buyers.",
    image: "🌱",
    category: "Sustainability",
  },
];

const guideCategories = [
  {
    icon: BookOpen,
    title: "Buyer's Guides",
    guides: [
      "Complete Guide to Buying Your First Home",
      "Understanding Property Valuations",
      "Home Loan Process: Step by Step",
      "Legal Requirements for Property Purchase",
      "Inspecting Properties: What to Look For",
      "Negotiating Property Prices",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Guides",
    guides: [
      "Real Estate Investment 101",
      "Calculating Property ROI",
      "Market Analysis for Investors",
      "Commercial Property Investment",
      "Residential vs Commercial Returns",
      "Building a Diversified Property Portfolio",
    ],
  },
  {
    icon: MapPin,
    title: "Location Guides",
    guides: [
      "Best Areas to Buy in Colombo",
      "Emerging Neighborhoods: West Coast",
      "Suburban Living: Beyond the City",
      "Beachfront Property Hotspots",
      "Educational Hub Locations",
      "Commercial Zone Guide",
    ],
  },
  {
    icon: AlertCircle,
    title: "Legal Guides",
    guides: [
      "Property Documentation Explained",
      "Understanding Title Deeds",
      "Inheritance and Property Laws",
      "Tenant Rights and Obligations",
      "Property Transfer Process",
      "Tax Implications of Property Ownership",
    ],
  },
];

const trendingTopics = [
  { title: "Apartment Living Trends 2026", views: "45.2K", color: "#2171B5" },
  { title: "Price Predictions for Colombo", views: "38.9K", color: "#08306B" },
  { title: "Best Investment Locations", views: "32.1K", color: "#2171B5" },
  { title: "New Development Projects", views: "28.5K", color: "#08306B" },
  { title: "Foreign Buyer's Market", views: "25.3K", color: "#2171B5" },
  { title: "Rental Market Analysis", views: "21.7K", color: "#08306B" },
];

export default function NewsAndGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [newsFilter, setNewsFilter] = useState("all");

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&q=80&auto=format&fit=crop"
          alt="News and guides"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Resources</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            News & Guides
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Stay updated with the latest real estate news, market trends, and expert guides to help you make informed property decisions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Latest</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Real estate news & insights</h2>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setNewsFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              newsFilter === "all"
                ? "bg-[#2171B5] text-white"
                : "border border-[#d9e8f6] text-slate-900 hover:bg-[#f8fbff]"
            }`}
          >
            All News
          </button>
          {["Market Trends", "Investment", "Technology", "Luxury"].map((cat) => (
            <button
              key={cat}
              onClick={() => setNewsFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                newsFilter === cat
                  ? "bg-[#2171B5] text-white"
                  : "border border-[#d9e8f6] text-slate-900 hover:bg-[#f8fbff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {newsArticles.map((article, idx) => (
            <article
              key={idx}
              className="overflow-hidden rounded-[1.75rem] border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
            >
              <div className="flex gap-4 p-6">
                <div className="text-4xl">{article.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Newspaper size={14} className="text-[#2171B5]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#2171B5]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-black leading-6 text-slate-900">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} />
                    {article.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Popular</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Trending topics right now</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingTopics.map((topic) => (
              <article
                key={topic.title}
                className="cursor-pointer rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 transition hover:border-[#2171B5]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="flex-1 font-black text-slate-900">{topic.title}</h3>
                  <TrendingUp size={20} style={{ color: topic.color }} />
                </div>
                <p className="mt-4 text-xs text-slate-500">{topic.views} views</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Guides</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Expert guides & resources</h2>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {guideCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${
                  selectedCategory === idx
                    ? "bg-[#2171B5] text-white"
                    : "border border-[#d9e8f6] text-slate-900 hover:bg-[#f8fbff]"
                }`}
              >
                <Icon size={16} />
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {guideCategories[selectedCategory]?.guides.map((guide) => (
            <article
              key={guide}
              className="cursor-pointer rounded-xl border border-[#d9e8f6] bg-white p-4 transition hover:border-[#2171B5] hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <h4 className="flex-1 font-black text-slate-900">{guide}</h4>
                <ArrowRight size={16} className="mt-1 shrink-0 text-[#2171B5]" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-br from-[#f8fbff] to-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Stay Connected</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Get the latest updates</h2>
            <p className="mt-2 text-sm text-slate-600">Subscribe to our newsletter for weekly real estate insights, market tips, and exclusive guides.</p>

            <form className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]"
              />
              <button className="rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white transition hover:bg-[#194d7a]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8">
          <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Related Pages</p>
          <h2 className="mt-3 text-3xl font-black text-slate-900">Explore all resources</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/market-insights"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">📊</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Market Insights</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Real-time market data, price indices, and investment insights for Sri Lanka's real estate market.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/inspiration"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">🎨</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Inspirations</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Get inspired with our gallery of beautiful properties and design ideas for your dream home.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Gallery <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/price-meter"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">💰</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Price Meter</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Get instant property valuations based on real market data and location-based pricing.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Calculate <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/property-buying-guide"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">📖</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Property Buying Guide</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Complete step-by-step guide to buying property in Sri Lanka with checklists and tips.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Learn <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/our-services/foreigners-buying-assistance"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">🌍</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Foreign Buyers' Guide</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Comprehensive guide for foreigners and expats buying property in Sri Lanka.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/capital-gains-tax"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">📋</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Capital Gains Tax</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Understand property sale taxation in Sri Lanka with examples and deduction guides.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Learn <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/price-indices"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">📈</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Price Indices</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Track Sri Lanka House Price Index and Land Price Index trends by district and quarter.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Track <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/market-outlook"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">🔮</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Market Outlook Report</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Q2 2025 market analysis, investment recommendations, and risk assessment for real estate.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Analyze <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/membership-benefits"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">👑</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Membership Benefits</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Unlock exclusive features, advanced tools, and expert network access with our membership plans.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              View Plans <ArrowRight size={16} />
            </div>
          </Link>

          <Link
            to="/invest"
            className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] transition hover:shadow-lg"
          >
            <div className="text-3xl">💡</div>
            <h3 className="mt-4 text-lg font-black text-slate-900">Investment Advisory</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Explore investment opportunities, calculate ROI, and get expert guidance for property investments.</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-black text-[#2171B5]">
              Invest Now <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
