import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  ClipboardList,
  Download,
  FileText,
  Handshake,
  Home,
  Landmark,
  MapPin,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const buyerSellerServices = [
  {
    eyebrow: "Service",
    title: "Property Valuations",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&auto=format&fit=crop",
    description:
      "Need to get your property valued? We will find certified valuers in your area who will come and do the valuation for you.",
    heading: "Valuation services that we offer",
    items: [
      "Value your property for sale",
      "Valuation of property for buyers",
      "Obtain valuation reports for Visa or loans",
      "We offer island wide valuations",
      "Valuations carried out by certified valuers",
    ],
  },
  {
    eyebrow: "Legal",
    title: "Legal Assistance",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
    description:
      "Our panel of reputable and experienced attorneys will provide legal advice, draft documents and advise on the best ways to keep your documents safe from fraud.",
    heading: "Legal assistance that we offer",
    items: [
      "Checking & preparing of your Deeds",
      "Preparing Tenancy Agreements",
      "Check the validity of the condo or the land that you are buying",
      "Advice on your eligibility and requirements",
      "Advice to foreigners on how to buy property",
      "Advice on CGT and other taxes",
    ],
  },
  {
    eyebrow: "Document",
    title: "Document preparation & submission",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    description:
      "We will get all your documentation related to the property drafted by reputable attorneys and take care of submitting them to the relevant authorities.",
    heading: "Document services that we offer",
    items: [
      "Preparing of your Deeds & Tenancy Agreements",
      "Validating the existing documents at Land Registry",
      "Checking the seller's documents, Deeds, COCs and making sure there are no encumbrances",
      "Submit your documents to the Land Registry",
      "Advice to foreigners on how to buy property",
      "Advice on how to protect your deeds and documents to protect against fraud",
    ],
  },
  {
    eyebrow: "Advice",
    title: "Mortgage Advice",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop",
    description:
      "Looking to get a home loan? We'll help you find the best deals, prepare the documents that the bank will need and submit them to the bank on your behalf.",
    heading: "Mortgage assistance that we offer",
    items: [
      "Check your requirements & advice you on bank's requirements",
      "Do an initial assessment of your eligibility",
      "Advice you on the best rates & offers available from our partner banks",
      "Get the necessary documents prepared",
      "Help you fill in the application forms",
      "Submit your documents to the bank",
      "Follow up with the bank on your application",
    ],
  },
  {
    eyebrow: "Fees",
    title: "Fees & taxes payment",
    icon: BadgeDollarSign,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=900&q=80&auto=format&fit=crop",
    description:
      "We'll take care of your stamp duty and municipality payments, so you won't need to waste your time going to multiple government institutions.",
    heading: "Fees & Taxes Payment That We Offer",
    items: [
      "Calculate and pay your stamp duty",
      "Calculate and pay your Municipality / Urban Council fees",
      "Calculate and pay your Capital Gains Tax, if any",
    ],
  },
  {
    eyebrow: "Assistance",
    title: "Personal Assistance",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80&auto=format&fit=crop",
    description:
      "You will get a personal assistant to help you through the whole process, while keeping you updated on the status.",
    heading: "Personal services that we offer",
    items: [
      "You will get a dedicated assistant to help you till the end of the process",
      "You will be kept updated on the status at each stage",
      "Personalise the requirements for your needs",
      "Contact through phone, email or chat and ask any questions that you have",
    ],
  },
];

const otherServices = [
  {
    title: "Moving Services",
    image: "https://images.unsplash.com/photo-1600518464441-9306b3b4f3aa?w=1200&q=80&auto=format&fit=crop",
    description:
      "Talk to us to hire professional movers who will package and move your items safely and securely from one location to another.",
    link: "/our-services",
  },
  {
    title: "Insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop",
    description:
      "Get the worry off your mind about mortgage repayments and household contents with insurance cover.",
  },
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop",
    description:
      "Get a professional photographer to capture your property and showcase its uniqueness.",
  },
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

const advisoryStats = [
  { label: "Market trend", value: "Rising", note: "Demand stays active in key metro areas" },
  { label: "Price outlook", value: "Stable", note: "Buyer interest remains steady for well-located homes" },
  { label: "Investor focus", value: "High", note: "Apartments and land continue to draw attention" },
];

const reportPoints = [
  "Updated Sri Lanka property trend overview",
  "Pricing signals for buyers, sellers, and investors",
  "High-demand areas, rental demand, and growth pockets",
  "Practical insight for planning your next move",
];

const advisoryHighlights = [
  "Estimate your potential ROI before you invest",
  "Find the best locations to settle in",
  "Evaluate how your price quotation compares",
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

function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Colombo skyline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto flex min-h-[470px] max-w-7xl flex-col justify-center px-5 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-white/90">Market Insights</p>
            <h1 className="mt-4 text-5xl font-black tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Real Estate Market
              <br />
              Insights
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/95 md:text-lg">
              Get all the latest property market insights in Sri Lanka. Estimate your potential ROI, find the best locations to settle in, evaluate how your price quotation fairs through our property price indicator and more. Navigate the property market in ease with us.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#2171B5] px-5 py-3 font-black text-white transition hover:shadow-lg hover:shadow-[#2171B5]/20">
                Download Report
                <Download size={18} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-black text-white transition hover:bg-white/20">
                Explore Insights
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-10 w-full max-w-5xl rounded-none bg-black/25 px-4 py-4 backdrop-blur-[2px] md:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {advisoryHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm font-semibold leading-6 text-white">
                  <span className="mt-0.5 text-base text-blue-200">☑</span>
                  <span>{item}</span>
                </div>
              ))}
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
                <h2 className="mt-1 text-3xl font-black tracking-[-0.03em] text-slate-900">
                  Sri Lanka Real Estate Market Outlook 2026
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              The ‘Market Outlook Report 2026’ published by the research team at LankaPropertyWeb (LPW) contains a complete analysis of the residential, commercial and land sales market analysis and also an outlook for 2026.
            </p>

            <ul className="mt-6 space-y-3">
              {reportPoints.map((point) => (
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
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Get an Instant Price Indication For Your Property</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900">Online Property Price Indicator</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            The Online Property Price Indicator (OPPI) is a statistical model that uses information from the properties advertised on Lanka Property Web to provide an indicative estimate of the current market value of a residential or commercial property.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {["Type", "Property Type", "Enter location", "Floor area (sqft)"].map((field) => (
              <label key={field} className="block rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{field}</span>
                <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none" placeholder={field === "Type" ? "Residential / Commercial" : `Enter ${field.toLowerCase()}`} />
              </label>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="block rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] p-4">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Enter total price</span>
              <input className="mt-2 w-full bg-transparent text-sm font-semibold text-slate-700 outline-none" placeholder="Rs. 0" />
            </label>
            <div className="rounded-2xl border border-dashed border-[#c7ddf1] bg-[#eff6fd] p-4 text-sm leading-6 text-slate-600">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">Disclaimer</p>
              <p className="mt-2">
                The OPPI is a statistical model and cannot replace a registered valuer. For more accurate prices, view listings or consult a registered valuer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#d9e8f6] bg-[#f8fbff] p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Want To Get A Full Valuation Done?</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900">Get a certified valuer to carry out a full inspection of your property</h2>
              <button type="button" className="mt-6 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                Request Valuation
              </button>
            </div>
            <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Find The Best Investment Properties</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Trending Properties", "Top Investment Properties", "ROI", "Properties Less Than Avg"].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-bold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="mb-6">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Compare The Best Home Loans</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900">Compare bank offers and interest rates</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Seylan Bank", "Seylan Siri Niwasa", "10.5% Upwards Fixed - 5 Years"],
              ["Sampath Bank", "Sevana Housing Loans", "11.5% Upwards Fixed - 5 Years"],
              ["Peoples Bank", "Residential Housing", "12% Upwards Fixed - 5 Years"],
              ["SDB", "sanasa", "14% Upwards Fixed - 5 Years"],
              ["HDFC Bank", "Kedella Loan", "15% Upwards Fixed - 5 Years"],
              ["NSB", "NSB Housing Loan", "7% Upwards Fixed - 5 Years"],
              ["HNB", "Shanthi Home Loans", "8.75% Upwards Fixed - 5 Years"],
              ["BOC", "BOC SIRIMEDURA", "10% Upwards Fixed - 5 Years"],
              ["Seylan Bank", "Seylan Siri Niwasa", "10.5% Upwards Fixed - 5 Years"],
            ].map(([bank, product, rate]) => (
              <div key={`${bank}-${product}-${rate}`} className="rounded-2xl border border-[#d9e8f6] bg-white p-5 shadow-sm">
                <p className="text-sm font-black text-slate-900">{bank}</p>
                <p className="mt-1 text-sm text-slate-600">{product}</p>
                <p className="mt-3 text-sm font-semibold text-[#2171B5]">Interest Rate: {rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market Research and Advisory</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-900">Using years of data to guide better decisions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Using our expertise and access to years' of data, we can conduct Market Research, Feasibility analysis and advisory to help you identify the feasibility and market demand for your new project or get market information for investment purposes.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sri Lanka's largest real estate project and China's largest developer are among the companies we've done research for.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our Services</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {marketServices.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] px-4 py-3 text-sm font-bold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our Clients</p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="flex h-20 items-center justify-center rounded-2xl border border-[#d9e8f6] bg-[#f8fbff] text-xs font-black uppercase tracking-[0.28em] text-slate-400">
                client
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
    </div>
  );
}

export default function OurServicesPage() {
  const { serviceSlug } = useParams();
  const { pathname } = useLocation();

  if (
    serviceSlug === "advisory" ||
    pathname.includes("market-insight") ||
    pathname.includes("market-insights")
  ) {
    return <AdvisoryPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
          alt="Property assistance consultation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#2171B5]" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center px-5 py-16 text-center lg:py-20">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-white/90">Buyer and Seller Assistance</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-5xl lg:text-6xl">
            BUYER AND SELLER ASSISTANCE
          </h1>

          <div className="mt-8 w-full max-w-6xl rounded-none bg-black/25 px-4 py-4 backdrop-blur-[2px] md:px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Need help with your property valuation?",
                "Need to get your deeds done?",
                "Want help with your housing loan application?",
                "Short for time or overwhelmed by the whole process?",
              ].map((item) => (
                <div key={item} className="flex items-start justify-center gap-2 text-left text-sm font-semibold leading-6 text-white">
                  <span className="mt-0.5 text-base text-blue-200">☑</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-5xl text-base leading-8 text-white/95 md:text-lg">
            Fear not. We're here to take the hassle off your entire property buying, selling or renting process, so you
            can look forward to enjoying your new property (or the profits of the sale). So contact us for more
            information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
            Buyer and seller support made simple
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find the right assistance for valuations, legal support, documents, mortgage advice, and day-to-day property help.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buyerSellerServices.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(8,48,107,0.10)]">
                <div className="relative h-52">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/95 p-3 text-[#2171B5] shadow-sm ring-1 ring-[#d9e8f6]">
                    <Icon size={24} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061f47]/30 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">{service.eyebrow}</p>
                  <h2 className="mt-1 text-xl font-black">{service.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.description}</p>
                  <h3 className="mt-5 text-sm font-black uppercase tracking-wide text-slate-800">{service.heading}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <ShieldCheck className="mt-1 h-4 w-4 flex-none text-[#2171B5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="mt-auto w-full rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                    Learn More
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)] md:p-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <div className="section-divider mx-auto h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Other</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Other services that help you move forward
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Whether you are moving house, protecting your contents, or preparing a listing, we can help with the extras too.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {otherServices.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-2xl border border-[#d9e8f6] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={service.image} alt={service.title} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-black uppercase tracking-wide text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  {service.link && (
                    <Link to={service.link} className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-5 py-2.5 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button type="button" className="rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="section-divider mb-4 h-1 w-16 rounded-full bg-[#2171B5]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Market</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Market Research and Advisory
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Using our expertise and access to years of data, we can conduct market research, feasibility analysis, and
              advisory to help you identify market demand for your new project or get useful investment information.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Sri Lanka's largest real estate project and China's largest developer are among the companies we've done research for.
            </p>

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80&auto=format&fit=crop"
              alt="Market research and advisory"
              className="mt-6 h-72 w-full rounded-3xl object-cover shadow-[0_16px_40px_rgba(8,48,107,0.08)]"
            />
          </div>
          <div className="rounded-[2rem] border border-[#d9e8f6] bg-gradient-to-b from-[#f8fbff] to-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2171B5]">Our services</p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">Research support designed for smart decisions</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {marketServices.map((item) => (
                <div key={item} className="rounded-2xl border border-[#d9e8f6] bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <button type="button" className="mt-6 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#08306B] to-[#2171B5] p-8 text-white shadow-[0_18px_50px_rgba(8,48,107,0.18)]">
          <Phone size={30} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100">Need help?</p>
          <h2 className="mt-3 text-3xl font-black">+94 (0) 117 167 167</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Contact us and our team will guide you to the right property service.
          </p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-[#d9e8f6] bg-white shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <div className="flex items-center gap-3 border-b border-[#eef4fb] px-6 py-4">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2171B5]">Location</p>
                <h2 className="text-2xl font-black">Find Us on the Map</h2>
              </div>
            </div>
            <iframe
              title="Our Services location map"
              src="https://www.google.com/maps?q=Colombo%2C%20Sri%20Lanka&z=11&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="rounded-[2rem] border border-[#d9e8f6] bg-white p-6 shadow-[0_16px_40px_rgba(8,48,107,0.05)]">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-[#2171B5]" size={24} />
              <h2 className="text-2xl font-black">Contact Us</h2>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name *</span>
                <input className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email *</span>
                <input type="email" className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone *</span>
                <input className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Select your services</span>
                <select className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]">
                  <option>Property Valuations</option>
                  <option>Legal Assistance</option>
                  <option>Document preparation & submission</option>
                  <option>Mortgage Advice</option>
                  <option>Fees & taxes payment</option>
                  <option>Personal Assistance</option>
                  <option>Market Research and Advisory</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-[#d9e8f6] px-4 py-3 outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#d5e9fb]" />
            </label>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
            <button type="button" className="mt-5 rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-6 py-3 text-sm font-black text-white transition hover:shadow-lg hover:shadow-[#08306B]/20">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
