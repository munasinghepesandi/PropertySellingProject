import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TrendingUp, BarChart3, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function MarketOutlookReportPage() {
  const marketOverview = [
    { metric: "Market Growth", value: "+4.2%", desc: "Year-on-year price appreciation" },
    { metric: "Trading Volume", value: "15.2K", desc: "Properties sold Q2 2025" },
    { metric: "Avg Price Appreciation", value: "+3.8%", desc: "Per quarter (recent average)" },
    { metric: "Investor Interest", value: "High", desc: "85% deals for investment" },
  ];

  const recommendations = [
    { title: "Strong Buy", color: "green", desc: "Colombo Metropolitan - High demand, stable appreciation", icon: "✓" },
    { title: "Buy", color: "blue", desc: "Suburban Areas - Good potential, moderate appreciation", icon: "→" },
    { title: "Hold", color: "yellow", desc: "Regional Centers - Stable values, moderate growth", icon: "⊙" },
    { title: "Monitor", color: "gray", desc: "Emerging Areas - High risk, high reward opportunities", icon: "?" },
  ];

  const highlights = [
    "Colombo property market showing sustained growth of 4-5% annually",
    "Suburban areas (Negombo, Gampaha) gaining traction with 8-10% growth",
    "Land prices rising faster than house prices in most districts",
    "Commercial real estate showing strong recovery post-pandemic",
    "Foreign investment picking up, especially in luxury segment",
    "First-time buyers focusing on apartments and suburban homes",
  ];

  const risks = [
    { risk: "Economic Volatility", level: "Medium", desc: "Global economic uncertainties may impact local market" },
    { risk: "Interest Rates", level: "High", desc: "Rising mortgage rates could reduce buyer affordability" },
    { risk: "Supply Shortage", level: "Medium", desc: "Limited new construction in prime areas" },
    { risk: "Regulatory Changes", level: "Low", desc: "Policy changes could affect investor sentiment" },
  ];

  const faqs = [
    { q: "What does this market outlook predict?", a: "Our analysis of market trends suggests continued moderate growth (3-5% annually) in residential properties, with stronger performance in Colombo and suburban areas." },
    { q: "Is it a good time to buy?", a: "Yes, for long-term investment (5+ years). Current prices are reasonable, appreciation is steady, and rental yields are attractive." },
    { q: "What areas show highest growth potential?", a: "Colombo Metropolitan maintains highest values. Suburban areas (Negombo, Gampaha, Kandy suburbs) show fastest growth at 8-10% annually." },
    { q: "Should I invest in land or built property?", a: "Both have merits. Land has higher appreciation potential; houses provide rental income. Your choice depends on investment goals." },
    { q: "What about foreign investors?", a: "Foreign investment is increasing, particularly in luxury properties and commercial real estate. Good opportunities exist in premium segments." },
    { q: "How do I minimize investment risk?", a: "Diversify across locations, focus on established areas, perform thorough due diligence, and consider properties with rental potential." },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#08306B] to-[#1a4d8f] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-white md:text-5xl">Market Outlook Report</h1>
            <p className="mt-4 text-lg text-blue-100">Q2 2025 Sri Lanka Real Estate Market Analysis</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market Overview</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Key market indicators</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {marketOverview.map((item, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-6">
                <p className="text-xs text-slate-600">{item.metric}</p>
                <p className="mt-2 text-3xl font-black text-[#2171B5]">{item.value}</p>
                <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Analysis</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Investment recommendations</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.map((rec, i) => (
              <div key={i} className="rounded-xl border-2 border-[#d9e8f6] bg-white p-6">
                <div className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-black text-white ${
                  rec.color === "green" ? "bg-green-600" :
                  rec.color === "blue" ? "bg-[#2171B5]" :
                  rec.color === "yellow" ? "bg-yellow-600" :
                  "bg-slate-600"
                }`}>
                  {rec.title}
                </div>
                <p className="mt-2 text-sm text-slate-600">{rec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Highlights</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Market highlights</h2>
          </div>

          <div className="space-y-3">
            {highlights.map((highlight, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-[#2171B5]" />
                <p className="text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Risk Analysis</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Market risks to monitor</h2>
          </div>

          <div className="space-y-3">
            {risks.map((risk, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-slate-900">{risk.risk}</p>
                    <p className="mt-1 text-sm text-slate-600">{risk.desc}</p>
                  </div>
                  <span className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-black ${
                    risk.level === "High" ? "bg-red-100 text-red-700" :
                    risk.level === "Medium" ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {risk.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Common questions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-black text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Related Resources</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Explore more insights</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <Link
              to="/market-insights"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📊</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Market Insights</h3>
              <p className="mt-1 text-xs text-slate-600">Real-time data & trends</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Explore <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/price-indices"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📈</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Price Indices</h3>
              <p className="mt-1 text-xs text-slate-600">Historical data</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Track <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/price-meter"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">💰</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Price Meter</h3>
              <p className="mt-1 text-xs text-slate-600">Get valuation</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Calculate <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/invest"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">💡</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">Investment</h3>
              <p className="mt-1 text-xs text-slate-600">Investment advisory</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Explore <ArrowRight size={12} />
              </div>
            </Link>

            <Link
              to="/news-and-guides"
              className="rounded-[1.75rem] border border-[#d9e8f6] bg-[#f8fbff] p-4 shadow-[0_8px_24px_rgba(8,48,107,0.08)] transition hover:shadow-lg"
            >
              <div className="text-2xl">📰</div>
              <h3 className="mt-3 font-black text-slate-900 text-sm">News</h3>
              <p className="mt-1 text-xs text-slate-600">Latest updates</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-black text-[#2171B5]">
                Read <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
