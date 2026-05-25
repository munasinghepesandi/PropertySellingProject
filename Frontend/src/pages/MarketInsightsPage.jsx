import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BarChart3, CalendarDays, Phone } from "lucide-react";

const reportHighlights = [
  "Updated Sri Lanka property trend overview",
  "Pricing signals for buyers, sellers, and investors",
  "High-demand areas, rental demand, and growth pockets",
  "Practical insight for planning your next move",
];

const advisoryStats = [
  { label: "Market trend", value: "Rising", note: "Demand stays active in key metro areas" },
  { label: "Price outlook", value: "Stable", note: "Buyer interest remains steady for well-located homes" },
  { label: "Investor focus", value: "High", note: "Apartments and land continue to draw attention" },
];

const housePriceRows = [
  ["Sri Lanka Overall House Sale price", "85.12 million", "25.0%"],
  ["Sri Lanka Overall Apartment Sale price", "93.63 million", "15.20%"],
];

const landPriceRows = [
  ["Sri Lanka Overall Residential Land price", "3.60 million Per perch", "72%"],
  ["Colombo 1-15 Residential Land price", "14.63 million Per perch", "13%"],
  ["Western Province (apart from Colombo city) Residential Land price", "2.42 million Per perch", "70%"],
  ["Sri Lanka Overall Tea Land price", "5.81 million Per acre", "13%"],
  ["Sri Lanka Overall Coconut Land price", "8.05 million Per acre", "1%"],
];

const marketServices = [
  "Field based market research",
  "Online based market research",
  "Market analysis reports",
  "Feasibility Study reports",
  "Investment advisory",
  "Demand and pricing analysis",
  "Real Estate demand for a particular area",
  "Reports based on website and market data",
];

const latestNews = [
  {
    date: "Monday April 06, 2026",
    title: "Robust Demand for Real Estate Purchases Displayed at the Lanka Property Show 2026",
    excerpt:
      "From left to right: Mr. Kishore Reddy, President, Indian CEO Forum; Mr. Virath De Alwis, Chairman,...",
  },
  {
    date: "Wednesday March 18, 2026",
    title: "Capitalizing on the Real Estate Expansion: Lanka Property Show 2026 Sets the Stage for Sri Lanka’s Next Era of Growth",
    excerpt:
      "The Lanka Property Show 2026, Sri Lanka’s flagship real estate exhibition, is set to return for...",
  },
  {
    date: "Thursday February 26, 2026",
    title: "LankaPropertyWeb Unveils ‘Apartment Finder’: A Game-Changer in the Real Estate Market",
    excerpt:
      "Colombo, Sri Lanka – LankaPropertyWeb (LPW) is redefining the property search experience with the...",
  },
  {
    date: "Tuesday April 07, 2026",
    title: "The Smart Investor’s Guide to Below Market Value Properties in Sri Lanka",
    excerpt:
      "Buying property in Sri Lanka has long been viewed as a reliable investment, but finding real value...",
  },
];

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen  text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden  text-white">
        <div className="absolute inset-0 bg-slate-950/65" />
        <img
          src="https://media.istockphoto.com/id/1605328309/photo/red-graph-chart-rising-up-on-stack-coins-and-house-model-on-wooden-table-white-wall-background.jpg?s=612x612&w=0&k=20&c=vCQHQ2-C7JZJDiipuvN8yHEsmXif4rVVojuIOmXQLCI="
          alt="Home Loans eligibility banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100"
        />
        
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-100">📊 Market Insights</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Real Estate Market Insights</h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
              Get all the latest property market insights in Sri Lanka. Estimate your potential ROI, find the best locations to settle in, and evaluate market trends.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Market Analysis</span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Price Insights</span>
              <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Investment Data</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_18px_45px_rgba(8,48,107,0.06)] md:p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Report</p>
                <h2 className="mt-1 text-3xl font-black tracking-[-0.03em] text-slate-900">Sri Lanka Real Estate Market Outlook 2026</h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              The Market Outlook Report 2026 contains a complete analysis of the residential, commercial and land sales market and an outlook for the year.
            </p>

            <ul className="mt-6 space-y-3">
              {reportHighlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700 md:text-base">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#2171B5]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                View Full Report
              </button>
              <button className="rounded-xl border border-[#2171B5] bg-white px-5 py-3 font-black text-[#2171B5] transition hover:bg-[#eff6fd]">
                Request Analysis
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-white shadow-[0_18px_45px_rgba(8,48,107,0.06)]">
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=1400&q=80&auto=format&fit=crop"
              alt="Market report cover"
              className="h-72 w-full object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {advisoryStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">{stat.label}</p>
                    <p className="mt-2 text-2xl font-black text-slate-900">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-[#2171B5] to-[#08306B] p-5 text-white">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5" size={22} />
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-white/75">Updated weekly</p>
                    <h3 className="mt-2 text-xl font-black">Stay ahead of the latest pricing changes</h3>
                    <p className="mt-2 text-sm leading-7 text-white/85">
                      Use market insights to shortlist areas, track demand, and compare opportunities across Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Previous Reports</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">House Price Index</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">House Price Index</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-slate-500">Avg. Sri Lanka House Price (4-bed)</p>
                  <p className="mt-2 text-2xl font-black text-[#08306B]">85.12M</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-bold text-slate-500">Avg. Sri Lanka Apartment Price (3-bed)</p>
                  <p className="mt-2 text-2xl font-black text-[#08306B]">93.63M</p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d9e8f6]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#eff6fd] text-[#2171B5]">
                    <tr>
                      <th className="px-4 py-3 font-black">Type</th>
                      <th className="px-4 py-3 font-black">Average Price</th>
                      <th className="px-4 py-3 font-black">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {housePriceRows.map((row) => (
                      <tr key={row[0]} className="border-t border-[#eef4fb]">
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[0]}</td>
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[1]}</td>
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">Land Price Index</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">Land Price Index (Based year 2017)</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Colombo 1-15",
                  "Colombo District (Except Colombo 1-15)",
                  "Gampaha District",
                  "Kaluthara District",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-[#d9e8f6] bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#d9e8f6]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#eff6fd] text-[#2171B5]">
                    <tr>
                      <th className="px-4 py-3 font-black">Type</th>
                      <th className="px-4 py-3 font-black">Average Price</th>
                      <th className="px-4 py-3 font-black">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {landPriceRows.map((row) => (
                      <tr key={row[0]} className="border-t border-[#eef4fb]">
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[0]}</td>
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[1]}</td>
                        <td className="px-4 py-3 font-semibold text-slate-700">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market Research and Advisory</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900">Using years of data to guide better decisions</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            Using our expertise and access to years of data, we can conduct market research, feasibility analysis, and advisory to help you identify market demand for your next project or investment.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {marketServices.map((item) => (
              <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Latest News</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {latestNews.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#d9e8f6] bg-white p-5 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">{item.date}</p>
                <h3 className="mt-3 text-lg font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                <button type="button" className="mt-4 text-sm font-black text-[#2171B5]">
                  Read More
                </button>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/news-and-guides"
              className="inline-flex items-center justify-center rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:bg-[#194d7a]"
            >
              View All News & Guides
            </Link>
            <Link
              to="/membership-benefits"
              className="inline-flex items-center justify-center rounded-xl border border-[#2171B5] bg-white px-5 py-3 font-black text-[#2171B5] transition hover:bg-[#f8fbff]"
            >
              Explore Membership Benefits
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-8 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)]">
            <Phone size={30} />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Contact Us</p>
            <h2 className="mt-3 text-3xl font-black">Need help with market insights?</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100">
              Contact our team and we’ll guide you through reports, valuations, investment options, and service requests.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">How to contact us</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <p className="font-black text-slate-900">Visit us</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">1st Floor, No.1, Bagatalle Road, Colombo 3, Sri Lanka</p>
              </div>
              <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <p className="font-black text-slate-900">Call us</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">(+94) 11 7 167 167</p>
                <p className="text-sm leading-6 text-slate-600">(+94) 76 7 167 167</p>
              </div>
              <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <p className="font-black text-slate-900">Email us</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">contactus@lankapropertyweb.com</p>
              </div>
              <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <p className="font-black text-slate-900">Chat with Us</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Use the chat widget for quick assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}