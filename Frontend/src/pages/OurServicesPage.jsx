import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  Megaphone,
  ClipboardCheck,
  Building2,
  Landmark,
  Search,
  Handshake,
  ArrowRight,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "Property Marketing",
    description:
      "Get your property seen by serious buyers with premium listings, featured placements, and targeted campaigns.",
    icon: Megaphone,
  },
  {
    title: "Valuation Assistance",
    description:
      "Receive data-backed price guidance based on location, property type, and current market demand.",
    icon: ClipboardCheck,
  },
  {
    title: "Buyer & Seller Support",
    description:
      "Our team helps coordinate inquiries, inspections, and negotiations for smoother transactions.",
    icon: Handshake,
  },
  {
    title: "Commercial Advisory",
    description:
      "Support for offices, warehouses, hotels, and retail investments with regional market insights.",
    icon: Building2,
  },
  {
    title: "Home Loan Guidance",
    description:
      "Compare financing paths and connect with partner institutions to speed up your loan process.",
    icon: Landmark,
  },
  {
    title: "Property Search Service",
    description:
      "Tell us your budget and requirements. We help shortlist matching homes, apartments, and land.",
    icon: Search,
  },
];

const processSteps = [
  "Share your requirement",
  "Get matched with the right service specialist",
  "Review recommendations and market data",
  "Proceed with confidence using expert support",
];

export default function OurServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white">
        <div className="mx-auto max-w-[1600px] px-5 py-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">LankaPropertyWeb Services</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
            End-to-end support for buying, selling, and investing in Sri Lanka
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-blue-100 md:text-base">
            From accurate valuations to smart property marketing and loan guidance, our team helps you make better
            property decisions with less hassle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/sales")}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#08306B] transition hover:bg-blue-50"
            >
              Browse Properties
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Team
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-12 md:py-14">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">Our Core Services</h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">Everything you need to move from listing to closing.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2171B5]/40 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-[#2171B5]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-12 md:grid-cols-2 md:py-14">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">How we work with you</h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              A clear, guided process designed to save your time and reduce uncertainty.
            </p>
            <ul className="mt-6 space-y-3">
              {processSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#08306B] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm font-medium text-slate-700 md:text-base">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#08306B] to-[#2171B5] p-7 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-100">Need a fast response?</p>
            <h3 className="mt-2 text-2xl font-extrabold">Talk to Buyer & Seller Assistance</h3>
            <p className="mt-3 text-sm text-blue-100 md:text-base">
              Get help with property valuation, ad performance, and the right next steps for your listing or purchase.
            </p>

            <div className="mt-7 space-y-3">
              <button
                type="button"
                onClick={() => navigate("/sales")}
                className="w-full rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#08306B] transition hover:bg-blue-50"
              >
                Start with Sales Listings
              </button>
              <button
                type="button"
                onClick={() => navigate("/help")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={15} />
                Request Assistance
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
