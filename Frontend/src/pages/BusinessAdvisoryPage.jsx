import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  ClipboardList,
  Handshake,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

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

const listings = [/* unchanged */];
const advisoryCards = [/* unchanged */];
const investmentQuestions = [/* unchanged */];
const faqs = [/* unchanged */];

export default function BusinessAdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#4A4A4A]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&q=80&auto=format&fit=crop"
          alt="Business advisory"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#203F52]/80" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#F3D319]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-white/80">
            Business Advisory
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
            Buy, sell, or invest in businesses with better guidance.
          </h1>

          <p className="mt-5 max-w-2xl text-white/90 md:text-lg">
            Browse active opportunities and get expert advisory in Sri Lanka’s market.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[#2A6FA3] px-5 py-3 font-black text-white hover:opacity-90">
              View Opportunities <Search size={18} />
            </button>

            <button className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-black text-white hover:bg-white/20">
              Talk to an Adviser
            </button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advisoryCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-[#B8B8B8] bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-xl bg-[#EAEAEA] p-3 text-[#2A6FA3]">
                <ClipboardList size={22} />
              </div>

              <h2 className="mt-4 text-xl font-black text-[#203F52]">
                {card.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FILTERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="flex flex-wrap gap-3">
            {businessFilters.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#2A6FA3] px-4 py-2 text-sm font-bold text-[#2A6FA3]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-[#B8B8B8] bg-[#EAEAEA] px-4 py-3 text-sm font-bold text-[#4A4A4A]"
              >
                {industry}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 md:flex-row md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#2A6FA3]">
                Search businesses
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#203F52]">
                Showing 7 business opportunities
              </h2>
            </div>

            <div className="rounded-2xl border border-[#B8B8B8] bg-[#EAEAEA] px-4 py-3 text-sm font-bold">
              Sort by: Latest
            </div>
          </div>

          {/* LISTINGS */}
          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => (
              <article
                key={listing.title}
                className="rounded-2xl border border-[#B8B8B8] bg-white shadow-sm"
              >
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#2A6FA3] px-3 py-1 text-xs font-black text-white">
                    Business
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-black uppercase text-[#2A6FA3]">
                    {listing.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#203F52]">
                    {listing.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#4A4A4A]">
                    {listing.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                    <span className="rounded-full bg-[#EAEAEA] px-3 py-1 text-[#2A6FA3]">
                      {listing.type}
                    </span>
                    <span className="rounded-full bg-[#EAEAEA] px-3 py-1">
                      {listing.location}
                    </span>
                  </div>

                  <button className="mt-4 text-sm font-black text-[#2A6FA3]">
                    More details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}