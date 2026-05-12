import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Calculator, DollarSign, FileText, TrendingUp } from "lucide-react";

export default function CapitalGainsTaxPage() {
  const taxRates = [
    { period: "Less than 1 year", rate: "Ordinary Income Tax Rate", desc: "Same as your annual income tax slab" },
    { period: "1-5 years", rate: "15%", desc: "Standard capital gains tax" },
    { period: "5-10 years", rate: "10%", desc: "Reduced rate for medium-term" },
    { period: "More than 10 years", rate: "Exempt", desc: "No tax on long-term gains" },
  ];

  const example = {
    purchasePrice: 5000000,
    salePrice: 7500000,
    gain: 2500000,
    holdingPeriod: "6 years",
    taxRate: "10%",
    capitalGainsTax: 250000,
  };

  const deductions = [
    { item: "Acquisition Costs", desc: "Registration fees, stamps, legal fees, survey costs", allowed: true },
    { item: "Improvement Costs", desc: "Extensions, renovations, structural improvements", allowed: true },
    { item: "Sales Costs", desc: "Broker commission, legal fees for sale", allowed: true },
    { item: "Transfer Tax & Stamp Duty", desc: "Already paid on purchase/sale", allowed: false },
    { item: "Maintenance & Repairs", desc: "Regular upkeep, painting, minor fixes", allowed: false },
  ];

  const exemptions = [
    { type: "Personal Residence", desc: "Your primary residence in most cases" },
    { type: "Long-term Holding", desc: "Properties held over 10 years" },
    { type: "Donation/Inheritance", desc: "Properties received as gift or inheritance" },
    { type: "Replacement Property", desc: "If proceeds invested in another property" },
  ];

  const faqs = [
    { q: "What is capital gains tax?", a: "It's a tax on the profit from selling an asset at a higher price than you paid for it. Applied to property sales in Sri Lanka." },
    { q: "How is capital gain calculated?", a: "Capital gain = Sale Price - Cost Basis (Purchase price + acquisition costs + improvement costs - deductions)" },
    { q: "Is my principal residence exempt?", a: "Yes, usually. Your primary residence where you've lived is often exempt from capital gains tax." },
    { q: "Can I reduce my taxable gain?", a: "Yes, by deducting all acquisition costs, improvement costs, and selling expenses from the sale price." },
    { q: "What if I hold the property 10+ years?", a: "Properties held over 10 years are typically fully exempt from capital gains tax." },
    { q: "Do I need to report capital gains?", a: "Yes, you must report property sales in your income tax return for the relevant year." },
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
            <h1 className="text-4xl font-black text-white md:text-5xl">Capital Gains Tax</h1>
            <p className="mt-4 text-lg text-blue-100">Understand property sale taxation in Sri Lanka</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Tax Structure</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Capital gains tax rates</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {taxRates.map((rate, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-6">
                <p className="text-xs font-black text-[#2171B5]">{rate.period}</p>
                <p className="mt-3 text-2xl font-black text-slate-900">{rate.rate}</p>
                <p className="mt-2 text-sm text-slate-600">{rate.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Example</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Sample calculation</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-600">Purchase Price</p>
                  <p className="text-2xl font-black text-slate-900">Rs. {(example.purchasePrice / 1000000).toFixed(1)}M</p>
                </div>
                <div className="border-t border-[#d9e8f6] pt-4">
                  <p className="text-xs text-slate-600">Sale Price</p>
                  <p className="text-2xl font-black text-slate-900">Rs. {(example.salePrice / 1000000).toFixed(1)}M</p>
                </div>
                <div className="border-t border-[#d9e8f6] pt-4">
                  <p className="text-xs text-slate-600">Capital Gain</p>
                  <p className="text-2xl font-black text-[#2171B5]">Rs. {(example.gain / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-600">Holding Period</p>
                  <p className="text-2xl font-black text-slate-900">{example.holdingPeriod}</p>
                </div>
                <div className="border-t border-[#d9e8f6] pt-4">
                  <p className="text-xs text-slate-600">Applicable Tax Rate</p>
                  <p className="text-2xl font-black text-slate-900">{example.taxRate}</p>
                </div>
                <div className="border-t border-[#d9e8f6] pt-4">
                  <p className="text-xs text-slate-600">Capital Gains Tax Due</p>
                  <p className="text-2xl font-black text-[#2171B5]">Rs. {(example.capitalGainsTax / 100000).toFixed(1)}L</p>
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
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Deductions</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Allowable deductions</h2>
          </div>

          <div className="space-y-3">
            {deductions.map((deduction, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-slate-900">{deduction.item}</p>
                    <p className="mt-1 text-sm text-slate-600">{deduction.desc}</p>
                  </div>
                  <span className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-black ${
                    deduction.allowed
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {deduction.allowed ? "Allowed" : "Not Allowed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Exemptions</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Tax exemptions</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {exemptions.map((exemption, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-white p-6">
                <h3 className="font-black text-slate-900">{exemption.type}</h3>
                <p className="mt-2 text-sm text-slate-600">{exemption.desc}</p>
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

      <Footer />
    </div>
  );
}
