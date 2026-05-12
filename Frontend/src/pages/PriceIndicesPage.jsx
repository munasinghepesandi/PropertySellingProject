import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BarChart3, TrendingUp, MapPin, Home } from "lucide-react";

export default function PriceIndicesPage() {
  const houseIndex = [
    { quarter: "Q1 2024", index: 98.5, change: "+2.1%" },
    { quarter: "Q2 2024", index: 101.2, change: "+2.7%" },
    { quarter: "Q3 2024", index: 104.8, change: "+3.6%" },
    { quarter: "Q4 2024", index: 108.3, change: "+3.5%" },
    { quarter: "Q1 2025", index: 112.1, change: "+3.8%" },
    { quarter: "Q2 2025", index: 116.5, change: "+4.4%" },
  ];

  const landIndex = [
    { quarter: "Q1 2024", index: 95.2, change: "+1.8%" },
    { quarter: "Q2 2024", index: 97.8, change: "+2.6%" },
    { quarter: "Q3 2024", index: 101.2, change: "+3.4%" },
    { quarter: "Q4 2024", index: 104.5, change: "+3.3%" },
    { quarter: "Q1 2025", index: 107.9, change: "+3.4%" },
    { quarter: "Q2 2025", index: 112.1, change: "+4.2%" },
  ];

  const districts = [
    { district: "Colombo", housePrice: 1250, landPrice: 980, trend: "↑" },
    { district: "Kandy", housePrice: 650, landPrice: 480, trend: "↑" },
    { district: "Galle", housePrice: 850, landPrice: 620, trend: "↑" },
    { district: "Jaffna", housePrice: 450, landPrice: 320, trend: "↑" },
    { district: "Matara", housePrice: 720, landPrice: 520, trend: "↑" },
    { district: "Negombo", housePrice: 950, landPrice: 750, trend: "↑" },
    { district: "Dehiwala", housePrice: 1150, landPrice: 880, trend: "↑" },
    { district: "Kurunegala", housePrice: 580, landPrice: 420, trend: "↑" },
  ];

  const faqs = [
    { q: "What is the Price Index?", a: "It's a measure of property price changes over time using a base year (100) as reference. Values above 100 indicate price increases." },
    { q: "How often is the index updated?", a: "Our price indices are updated quarterly based on recent sales data, market transactions, and comparable valuations." },
    { q: "What does the House Price Index track?", a: "It tracks residential property prices including houses, apartments, and villas across major districts in Sri Lanka." },
    { q: "What does the Land Price Index track?", a: "It tracks vacant land prices for residential, commercial, and agricultural use across all regions." },
    { q: "How can I use these indices?", a: "Use them to track market trends, identify investment opportunities, benchmark property values, and make informed purchase decisions." },
    { q: "Are these prices per square foot?", a: "Prices shown are average market rates per square foot in rupees. Actual prices vary by specific location and property condition." },
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
            <h1 className="text-4xl font-black text-white md:text-5xl">Price Indices</h1>
            <p className="mt-4 text-lg text-blue-100">Track property price trends in Sri Lanka</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market Trends</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Sri Lanka House Price Index</h2>
          </div>

          <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-8">
            <div className="space-y-3">
              {houseIndex.map((data, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#d9e8f6] pb-3 last:border-0">
                  <span className="font-black text-slate-900">{data.quarter}</span>
                  <div className="flex gap-6">
                    <span className="text-2xl font-black text-[#2171B5]">{data.index}</span>
                    <span className={`font-black ${data.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {data.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">Base Year: 2020 (Index = 100) | Latest: {houseIndex[houseIndex.length - 1].quarter}</p>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market Trends</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Sri Lanka Land Price Index</h2>
          </div>

          <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
            <div className="space-y-3">
              {landIndex.map((data, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#d9e8f6] pb-3 last:border-0">
                  <span className="font-black text-slate-900">{data.quarter}</span>
                  <div className="flex gap-6">
                    <span className="text-2xl font-black text-[#2171B5]">{data.index}</span>
                    <span className={`font-black ${data.change.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {data.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-600">Base Year: 2020 (Index = 100) | Latest: {landIndex[landIndex.length - 1].quarter}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">By District</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">District-wise price comparison</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#d9e8f6]">
                  <th className="bg-[#f8fbff] px-4 py-3 text-left text-sm font-black text-slate-900">District</th>
                  <th className="bg-[#f8fbff] px-4 py-3 text-right text-sm font-black text-slate-900">House (Rs/sqft)</th>
                  <th className="bg-[#f8fbff] px-4 py-3 text-right text-sm font-black text-slate-900">Land (Rs/sqft)</th>
                  <th className="bg-[#f8fbff] px-4 py-3 text-center text-sm font-black text-slate-900">Trend</th>
                </tr>
              </thead>
              <tbody>
                {districts.map((data, i) => (
                  <tr key={i} className="border-b border-[#d9e8f6]">
                    <td className="px-4 py-3 font-black text-slate-900">{data.district}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{data.housePrice}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{data.landPrice}</td>
                    <td className="px-4 py-3 text-center font-black text-green-600 text-lg">{data.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600">*Prices shown are average market rates. Actual prices vary by location and property specifications.</p>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
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

      <Footer />
    </div>
  );
}
