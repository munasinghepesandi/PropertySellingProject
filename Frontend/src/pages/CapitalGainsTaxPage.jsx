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
    { q: "Is my principal residence exempt?", a: "Yes, usually. Your primary residence is often exempt." },
    { q: "Can I reduce my taxable gain?", a: "Yes, by deducting acquisition, improvement, and selling costs." },
    { q: "What if I hold the property 10+ years?", a: "Properties held over 10 years are typically fully exempt." },
    { q: "Do I need to report capital gains?", a: "Yes, it must be reported in your tax return." },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#08306B] to-[#2171B5] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h1 className="text-4xl font-black text-white md:text-5xl">
            Capital Gains Tax
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Understand property sale taxation in Sri Lanka
          </p>
        </div>
      </section>

      {/* TAX RATES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-3xl font-black text-[#08306B]">
            Capital gains tax rates
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {taxRates.map((rate, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-6"
              >
                <p className="text-xs font-black text-[#2171B5]">
                  {rate.period}
                </p>
                <p className="mt-3 text-2xl font-black text-[#08306B]">
                  {rate.rate}
                </p>
                <p className="mt-2 text-sm text-slate-600">{rate.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-3xl font-black text-[#08306B]">
            Sample calculation
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
              <p className="text-sm text-slate-600">Capital Gain</p>
              <p className="text-3xl font-black text-[#2171B5]">
                Rs. {(example.gain / 1000000).toFixed(1)}M
              </p>
            </div>

            <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
              <p className="text-sm text-slate-600">Tax Due</p>
              <p className="text-3xl font-black text-[#08306B]">
                Rs. {(example.capitalGainsTax / 100000).toFixed(1)}L
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEDUCTIONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-3xl font-black text-[#08306B]">
            Allowable deductions
          </h2>

          <div className="mt-8 space-y-3">
            {deductions.map((d, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-4"
              >
                <p className="font-black text-[#08306B]">{d.item}</p>
                <p className="text-sm text-slate-600">{d.desc}</p>
                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-black ${
                    d.allowed
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {d.allowed ? "Allowed" : "Not Allowed"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPTIONS */}
      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-3xl font-black text-[#08306B]">
            Tax exemptions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {exemptions.map((e, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#d9e8f6] bg-white p-6"
              >
                <h3 className="font-black text-[#08306B]">{e.type}</h3>
                <p className="text-sm text-slate-600">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <h2 className="text-3xl font-black text-[#08306B]">
            Common questions
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="font-black text-[#08306B]">{f.q}</h3>
                <p className="text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}