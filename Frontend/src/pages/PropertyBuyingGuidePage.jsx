import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CheckCircle, Home, FileText, Users, Shield } from "lucide-react";

export default function PropertyBuyingGuidePage() {
  const stages = [
    { title: "1. Research & Planning", desc: "Understand market, set budget, identify preferences" },
    { title: "2. Get Pre-Approved", desc: "Check mortgage readiness and financing options" },
    { title: "3. Search Properties", desc: "Browse listings and attend property viewings" },
    { title: "4. Make an Offer", desc: "Negotiate price and terms with seller" },
    { title: "5. Inspection & Survey", desc: "Get professional property assessment" },
    { title: "6. Secure Financing", desc: "Finalize mortgage and complete documentation" },
    { title: "7. Legal Review", desc: "Verify deeds, titles, and legal requirements" },
    { title: "8. Close the Deal", desc: "Complete transfer and obtain ownership" },
  ];

  const checklist = [
    "Check property title and deed",
    "Verify no outstanding loans/liabilities",
    "Confirm zoning and land use permissions",
    "Inspect for structural issues",
    "Check water and electrical connections",
    "Verify boundary markers",
    "Check for encroachment issues",
    "Obtain no-objection certificate if needed",
  ];

  const costs = [
    { item: "Property Price", range: "70-85%" },
    { item: "Transfer Taxes & Stamps", range: "3-5%" },
    { item: "Registration Fees", range: "1-2%" },
    { item: "Legal & Professional Fees", range: "2-3%" },
    { item: "Survey & Inspection", range: "0.5-1%" },
    { item: "Brokerage (if applicable)", range: "1-2%" },
    { item: "Miscellaneous", range: "2-3%" },
  ];

  const faqs = [
    { q: "What's the first step in buying property?", a: "Start by researching the market, setting your budget, and identifying the type of property you want. Consult with experts to understand current prices and trends." },
    { q: "Can foreigners buy property in Sri Lanka?", a: "Yes, with restrictions. Foreigners can buy up to 0.25 hectares of residential property in certain zones. Check FDA requirements." },
    { q: "What documents do I need?", a: "National ID/passport, income proof, bank statements, employment letter, and NOC from employer if applicable." },
    { q: "How long does the purchase process take?", a: "Typically 2-4 months from offer to closing, depending on financing approval and legal clearances." },
    { q: "Should I hire a lawyer?", a: "Yes, highly recommended. A lawyer ensures legal compliance, verifies documents, and protects your interests." },
    { q: "What about property inspection?", a: "Always get a professional property inspector to assess the condition and identify potential issues before purchase." },
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
            <h1 className="text-4xl font-black text-white md:text-5xl">Property Buying Guide</h1>
            <p className="mt-4 text-lg text-blue-100">Complete guide to buying property in Sri Lanka</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Step by Step</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">8-Step buying process</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <div key={i} className="rounded-xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2171B5]">
                  <span className="font-black text-white">{i + 1}</span>
                </div>
                <h3 className="mt-3 font-black text-slate-900">{stage.title}</h3>
                <p className="mt-2 text-xs text-slate-600">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7fb]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Before You Buy</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Pre-purchase checklist</h2>
          </div>

          <div className="rounded-2xl border border-[#d9e8f6] bg-white p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {checklist.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 text-[#2171B5]" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-8">
            <div className="h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Budget Planning</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Additional costs breakdown</h2>
          </div>

          <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-8">
            <div className="space-y-3">
              {costs.map((cost, i) => (
                <div key={i} className="flex justify-between border-b border-[#d9e8f6] pb-3">
                  <span className="font-black text-slate-900">{cost.item}</span>
                  <span className="text-[#2171B5]">{cost.range}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-600">*Percentages shown as % of property purchase price</p>
          </div>
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-br from-[#f8fbff] to-white p-8">
            <h2 className="text-2xl font-black text-slate-900">Need expert guidance?</h2>
            <p className="mt-2 text-slate-600">Our property advisors can guide you through every step of the buying process.</p>
            <button className="mt-6 rounded-xl bg-[#2171B5] px-6 py-3 font-black text-white transition hover:bg-[#194d7a]">
              Contact an Advisor
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
