import React, { useState } from "react";
import Navbar from "../components/Navbar";

import {
  ArrowLeft,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Building2,
  LayoutGrid,
  Star,
  Dumbbell,
  UtensilsCrossed,
  Waves,
  Sparkles,
  Banknote,
  Percent,
  CalendarDays,
} from "lucide-react";

export default function PropertyDetails() {
  const [propertyValue, setPropertyValue] = useState(129750000);
  const [downPayment, setDownPayment] = useState(20000000);
  const [interestRate, setInterestRate] = useState(11.5);
  const [loanPeriod, setLoanPeriod] = useState(20);

  const images = [
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  ];

  const sections = [
    "Overview",
    "Highlights",
    "About",
    "Floor Plans",
    "Amenities",
    "Bank Loans",
    "Loan Calculator",
    "Enquiry",
  ];

  const highlights = [
    "Dedicated concierge service available 24/7",
    "Rooftop infinity pool with skyline views",
    "Luxury doorman and security service",
    "Hotel-style residential living experience",
    "Premium serviced residence lifestyle",
    "Elite Colombo 07 landmark address",
  ];

  const loanOffers = [
    {
      bank: "Commercial Bank",
      rate: "11.5% p.a",
      tenure: "Up to 25 years",
      note: "Flexible repayment options",
    },
    {
      bank: "HNB Bank",
      rate: "12.0% p.a",
      tenure: "Up to 30 years",
      note: "Fast approval process",
    },
    {
      bank: "Sampath Bank",
      rate: "11.8% p.a",
      tenure: "Up to 20 years",
      note: "Special housing packages",
    },
  ];

  // Loan calculation
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const months = loanPeriod * 12;

  const emi =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const format = (num) =>
    num?.toLocaleString("en-LK", { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <Navbar />

      <div className="max-w-[1500px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="lg:col-span-3 sticky top-6 h-fit">
          <div className="bg-white rounded-2xl shadow-md p-5">
            <button className="flex items-center gap-2 text-[#08306B] font-semibold mb-6">
              <ArrowLeft size={16} />
              Back
            </button>

            <h2 className="text-xl font-bold text-[#08306B]">
              The Elizabeth
            </h2>

            <p className="text-gray-500 flex items-center gap-2 mt-1">
              <MapPin size={14} /> Colombo 07
            </p>

            <h3 className="text-2xl font-bold text-[#2171B5] mt-3">
              LKR 129.75 M
            </h3>

            <div className="grid grid-cols-3 gap-2 mt-6 text-center">
              <div className="bg-[#f4f7fb] p-2 rounded-lg">
                <BedDouble size={14} className="mx-auto text-[#2171B5]" />
                <p className="text-xs">4</p>
              </div>

              <div className="bg-[#f4f7fb] p-2 rounded-lg">
                <Bath size={14} className="mx-auto text-[#2171B5]" />
                <p className="text-xs">3</p>
              </div>

              <div className="bg-[#f4f7fb] p-2 rounded-lg">
                <Maximize size={14} className="mx-auto text-[#2171B5]" />
                <p className="text-xs">3200</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {sections.map((s, i) => (
                <button
                  key={i}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#e0ecff] text-[#08306B]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-9 space-y-6">

          {/* IMAGES */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <img
              src={images[0]}
              className="lg:col-span-2 h-[320px] md:h-[380px] w-full object-cover rounded-2xl shadow-md"
            />

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="h-[150px] md:h-[180px] w-full object-cover rounded-2xl shadow-md"
                />
              ))}
            </div>
          </div>

          {/* OVERVIEW */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#08306B] mb-4">
              Overview
            </h2>

            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <MapPin className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Location</p>
                <h3 className="font-bold">Colombo 07</h3>
              </div>

              <div>
                <Building2 className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Units</p>
                <h3 className="font-bold">228</h3>
              </div>

              <div>
                <Maximize className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Size</p>
                <h3 className="font-bold">1038-2420 sqft</h3>
              </div>

              <div>
                <LayoutGrid className="mx-auto text-[#2171B5]" />
                <p className="text-sm text-gray-500">Completion</p>
                <h3 className="font-bold">2028</h3>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="bg-[#101828] text-white rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">Highlights</h2>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-3">
                  <Star className="text-yellow-400" size={16} />
                  <p className="text-white/90">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-3">
              About
            </h2>
            <p className="text-gray-600 leading-8">
              The Elizabeth Colombo 07 represents ultra-luxury living in one of Sri Lanka’s most prestigious addresses,
              blending heritage, privacy, and modern architectural excellence.
            </p>
          </div>

          {/* BANK LOAN OFFERS */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-4">
              Bank Loan Offers
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {loanOffers.map((loan, i) => (
                <div key={i} className="border rounded-xl p-4 bg-[#f9fbff]">
                  <h3 className="font-bold text-[#08306B] flex items-center gap-2">
                    <Banknote size={16} /> {loan.bank}
                  </h3>
                  <p className="text-sm mt-2 flex items-center gap-2 text-gray-600">
                    <Percent size={14} /> {loan.rate}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-gray-600">
                    <CalendarDays size={14} /> {loan.tenure}
                  </p>
                  <p className="text-xs mt-2 text-gray-500">{loan.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LOAN CALCULATOR */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-[#08306B] mb-4">
              Loan Calculator
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(+e.target.value)}
                placeholder="Property Value"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(+e.target.value)}
                placeholder="Down Payment"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(+e.target.value)}
                placeholder="Interest Rate"
                className="border p-2 rounded-lg"
              />

              <input
                type="number"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(+e.target.value)}
                placeholder="Years"
                className="border p-2 rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#f4f7fb] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Loan Amount</p>
                <h3 className="font-bold text-[#08306B]">
                  LKR {format(loanAmount)}
                </h3>
              </div>

              <div className="bg-[#e6f0ff] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Monthly EMI</p>
                <h3 className="font-bold text-[#2171B5]">
                  LKR {format(emi)}
                </h3>
              </div>

              <div className="bg-[#f4f7fb] p-4 rounded-xl text-center">
                <p className="text-sm text-gray-500">Total Payable</p>
                <h3 className="font-bold text-[#08306B]">
                  LKR {format(emi * loanPeriod * 12)}
                </h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#2171B5] to-[#08306B] text-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Interested in this property?
            </h2>
            <p className="mt-2 text-white/80">
              Contact us for viewing or details.
            </p>

            <div className="flex gap-3 mt-4">
              <button className="bg-white text-[#08306B] px-4 py-2 rounded-lg">
                Enquire
              </button>
              <button className="border px-4 py-2 rounded-lg">
                Download
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
