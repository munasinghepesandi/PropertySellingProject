import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BadgeDollarSign, BriefcaseBusiness, ClipboardList, Handshake, MapPin, Phone, Search, ShieldCheck, TrendingUp } from "lucide-react";

const businessFilters = ["Looking to Sell", "Looking for Investor", "Franchise"];
const industries = [
  "Real Estate",
  "Restaurant",
  "Construction",
  "Agriculture",
  "Tech",
  "Hospitality",
  "Business",
  "Manufacturing",
  "Garment-Textile",
  "Services-BPO",
  "Other",
];

const listings = [
  {
    title: "Service Station For Rent",
    location: "Bandarawela",
    price: "Rs. 120 million",
    type: "Looking for Investor",
    category: "Tech",
    description:
      "Sourced from active business opportunities in Sri Lanka, this type of listing is ideal for investors looking for a ready-to-operate asset.",
  },
  {
    title: "Personalized Gift Shop for Sale",
    location: "Malabe",
    price: "Rs. 2 million",
    type: "Looking to Sell",
    category: "Business",
    description:
      "Established in 2021, this lifestyle brand is focused on personalized gifts using curated local and imported products.",
  },
  {
    title: "International Kids Club & Family Café",
    location: "Weligama",
    price: "Rs. 25 million",
    type: "Looking to Sell",
    category: "Other",
    description:
      "A well-established family café and club with strong local demand and a compelling tourism-side opportunity.",
  },
  {
    title: "Immeditely Looking to Sell My Hotel",
    location: "Mirissa",
    price: "Rs. 90 million",
    type: "Looking to Sell",
    category: "Hospitality",
    description:
      "A beach-side hospitality opportunity with rooms, road frontage, and strong seasonal demand.",
  },
  {
    title: "Business for Sale in Anuradapura",
    location: "Kekirawa",
    price: "Rs. 5 million",
    type: "Looking for Investor",
    category: "Hospitality",
    description:
      "A practical investor-led opportunity suited for buyers seeking low entry cost and growth potential.",
  },
  {
    title: "6-Acre Luxury Villa & Assets for Sale",
    location: "Koggala",
    price: "Rs. 300 million",
    type: "Looking to Sell",
    category: "Real Estate",
    description:
      "An asset-rich business opportunity that blends land value, hospitality potential, and brand equity.",
  },
  {
    title: "Fully Equipped Restaurant with Bar License",
    location: "Kandy 3",
    price: "Rs. 45 million",
    type: "Looking for Investor",
    category: "Restaurant",
    description:
      "A restaurant opportunity in a high-traffic area with equipment, licensing, and strong market visibility.",
  },
];

const advisoryCards = [
  {
    title: "Help with your research",
    text: "When researching the best businesses and sectors to invest in Sri Lanka, rely on expert guidance and comprehensive data to make well-informed decisions.",
  },
  {
    title: "Identify best investment options",
    text: "Discover promising businesses with growth potential, from hospitality and retail to manufacturing and services.",
  },
  {
    title: "Investment advisory",
    text: "Our investment advisory support is built to help match your budget, goals, and preferred business model.",
  },
  {
    title: "Sell-side & buy-side advisory",
    text: "Get due diligence support, SWOT analysis, and advisory that helps you convert your buy or sale into a profit.",
  },
];

const investmentQuestions = [
  "I'm looking to invest in a property with a high ROI",
  "I’d like to start a business in Sri Lanka",
  "I’d like to setup a manufacturing factory in Sri Lanka",
  "I’d like to start a Real Estate project in Sri Lanka",
  "Other",
];

const faqs = [
  "What are some of the best business opportunities in Sri Lanka?",
  "How can I find the best business for sale in Sri Lanka that suits my budget and goals?",
  "How can I sell my business in Sri Lanka fast and easy?",
  "Where can I find more information and guidance on buying or selling a business in Sri Lanka?",
  "Can foreigners buy and run a business in Sri Lanka?",
  "How can foreigners invest in a business in Sri Lanka?",
  "How can I start a business in Sri Lanka?",
  "How is a business valued?",
];

export default function BusinessAdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80&auto=format&fit=crop"
          alt="Business advisory"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">Business Advisory</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Buy, sell, or invest in businesses with better guidance.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
            Browse active business-for-sale opportunities, compare sectors, and get buy-side or sell-side advisory from a team that understands Sri Lanka’s market.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#2171B5]/20">
              View Opportunities
              <Search size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20">
              Talk to an Adviser
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advisoryCards.map((card) => (
            <article key={card.title} className="rounded-[1.75rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
              <div className="inline-flex rounded-2xl bg-[#eff6fd] p-3 text-[#2171B5]">
                {card.title.includes("research") ? <ClipboardList size={22} /> : card.title.includes("Investment") ? <TrendingUp size={22} /> : card.title.includes("buy-side") ? <Handshake size={22} /> : <ShieldCheck size={22} />}
              </div>
              <h2 className="mt-4 text-xl font-black text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="flex flex-wrap gap-3">
            {businessFilters.map((item) => (
              <span key={item} className="rounded-full border border-[#2171B5] bg-white px-4 py-2 text-sm font-bold text-[#2171B5]">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                {industry}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Search businesses in Sri Lanka</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.03em] text-slate-900">Showing 7 results businesses for sale in Sri Lanka</h2>
            </div>
            <div className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-bold text-slate-700">
              Sort by: Latest
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => (
              <article key={listing.title} className="overflow-hidden rounded-[1.75rem] border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
                <div className="relative h-48 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
                    alt={listing.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#2171B5] px-3 py-1 text-xs font-black text-white">Ad Image</div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2171B5]">{listing.category}</p>
                      <h3 className="mt-2 text-xl font-black text-slate-900">{listing.title}</h3>
                    </div>
                    <p className="shrink-0 text-right text-sm font-black text-[#08306B]">{listing.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{listing.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                    <span className="rounded-full bg-[#eff6fd] px-3 py-1 text-[#2171B5]">{listing.type}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">{listing.location}</span>
                  </div>
                  <button className="mt-4 text-sm font-black text-[#2171B5]">More details</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Get correct advice for your next investment</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="text-lg font-black text-slate-900">Help with your research</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">When researching businesses and sectors, rely on data-backed guidance to support better decisions.</p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="text-lg font-black text-slate-900">Identify best investment options</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Explore hospitality, retail, construction, and service opportunities with real growth potential.</p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="text-lg font-black text-slate-900">Investment advisory</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Get support that aligns your budget, goals, and business model with the right market opportunities.</p>
              </div>
              <div className="rounded-2xl bg-[#f8fbff] p-5">
                <h3 className="text-lg font-black text-slate-900">Buy-side & sell-side advisory</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">We help with due diligence, SWOT analysis, and advisory to reduce risk and improve deal quality.</p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-[#d9e8f6] bg-[#f8fbff]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80&auto=format&fit=crop"
                alt="Business advisory desk"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-6 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)] md:p-8">
            <Phone size={30} />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Connect with your adviser</p>
            <h2 className="mt-3 text-3xl font-black">Quickly select your investment preferences</h2>

            <div className="mt-6 space-y-4 rounded-[1.5rem] bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm font-black text-white">1. What is the main purpose of your investment?</p>
              <div className="grid gap-2 text-sm text-blue-50">
                {investmentQuestions.map((question) => (
                  <label key={question} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                    <input type="radio" name="purpose" className="accent-white" />
                    <span>{question}</span>
                  </label>
                ))}
              </div>

              <label className="block">
                <span className="text-sm font-black">2. How much are you looking to invest in real estate</span>
                <div className="mt-2 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-slate-900">
                  <span className="font-black text-[#2171B5]">LKR</span>
                  <input className="w-full border-0 bg-transparent outline-none" placeholder="Enter the amount" />
                </div>
              </label>
            </div>

            <form className="mt-6 space-y-4 rounded-[1.5rem] bg-white p-5 text-slate-900 shadow-lg">
              <h3 className="text-xl font-black">Connect with our advisory team</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Name" />
                <input className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Email address" />
                <input className="rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5] md:col-span-2" placeholder="Enter number" />
              </div>
              <textarea rows={4} className="w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Message" />
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 accent-[#2171B5]" />
                <span>I agree to LankaPropertyWeb.com’s Privacy Policy and Terms of Use</span>
              </label>
              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input type="checkbox" className="mt-1 accent-[#2171B5]" />
                <span>I want to be on the exclusive mailing list to hear about new opportunities first</span>
              </label>
              <button type="button" className="w-full rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:bg-[#194d7a]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Frequently asked questions</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-black text-slate-900">{faq}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We can help you compare opportunities, review financials, understand demand, and connect you with the right advisory support.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness className="text-[#2171B5]" size={24} />
            <h2 className="text-2xl font-black text-slate-900">Want to sell your business or buy one?</h2>
          </div>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">
            Whether you are seeking a profitable business, looking for a serious investor, or wanting to exit with a clean and well-structured sale, our team can support you through valuation, due diligence, and advisory.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3 text-sm font-black text-white">Browse more businesses</button>
            <button className="rounded-xl border border-[#2171B5] bg-white px-5 py-3 text-sm font-black text-[#2171B5]">Speak to a consultant</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}