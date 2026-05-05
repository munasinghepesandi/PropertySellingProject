const loanProducts = [
  {
    id: 1,
    bank: 'Commercial Bank of Ceylon',
    product: 'Home Ownership Scheme',
    interestRate: '7.5%',
    loanAmount: 'Up to Rs. 50M',
    tenure: '15-25 years',
    monthlyPayment: 'From Rs. 45,000',
    features: ['Flexible tenure', 'No hidden charges', 'Quick approval'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    id: 2,
    bank: 'Bank of Ceylon',
    product: 'Sampath Home Loan',
    interestRate: '7.2%',
    loanAmount: 'Up to Rs. 75M',
    tenure: '15-30 years',
    monthlyPayment: 'From Rs. 42,000',
    features: ['Best rates', 'Fast processing', 'Cashback offers'],
    image: 'https://images.unsplash.com/photo-1560264357-8d9766d54a3a?w=1200&q=80&auto=format&fit=crop',
    badge: 'Best Rate',
  },
  {
    id: 3,
    bank: 'Seylan Bank',
    product: 'Dream Home Loan',
    interestRate: '7.8%',
    loanAmount: 'Up to Rs. 40M',
    tenure: '10-20 years',
    monthlyPayment: 'From Rs. 50,000',
    features: ['Instant approval', 'Online application', 'No collateral'],
    image: 'https://images.unsplash.com/photo-1556080945-f0b922b48e34?w=1200&q=80&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 4,
    bank: 'National Development Bank',
    product: 'Rapid Home Finance',
    interestRate: '7.6%',
    loanAmount: 'Up to Rs. 60M',
    tenure: '15-25 years',
    monthlyPayment: 'From Rs. 47,000',
    features: ['Speedy approval', 'Competitive rates', 'Expert guidance'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
    badge: 'Featured',
  },
  {
    id: 5,
    bank: 'DFCC Bank',
    product: 'Premium Home Loan',
    interestRate: '7.9%',
    loanAmount: 'Up to Rs. 80M',
    tenure: '10-30 years',
    monthlyPayment: 'From Rs. 55,000',
    features: ['Flexible repayment', 'Cashback bonus', '24/7 support'],
    image: 'https://images.unsplash.com/photo-1573921723460-efbc7b4e34e9?w=1200&q=80&auto=format&fit=crop',
    badge: 'Premium',
  },
  {
    id: 6,
    bank: 'Hatton National Bank',
    product: 'Smart Home Loan',
    interestRate: '7.4%',
    loanAmount: 'Up to Rs. 70M',
    tenure: '15-28 years',
    monthlyPayment: 'From Rs. 44,000',
    features: ['Smart rates', 'Quick disbursement', 'Top-up facility'],
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1200&q=80&auto=format&fit=crop',
    badge: 'Quick',
  },
];

const filterChips = [
  { label: 'All Banks', value: 'all' },
  { label: 'Best Rates', value: 'best-rates' },
  { label: 'High Loan', value: 'high-loan' },
  { label: 'Quick Approval', value: 'quick' },
  { label: 'Low Monthly', value: 'low-monthly' },
];

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function HomeLoanPage() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const closeModal = () => setSelectedLoan(null);

  // Filtering logic
  const filteredLoans = loanProducts.filter((loan) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'best-rates') return parseFloat(loan.interestRate) <= 7.5;
    if (activeCategory === 'high-loan') return loan.loanAmount.includes('75M') || loan.loanAmount.includes('80M');
    if (activeCategory === 'quick') return loan.features.some(f => f.toLowerCase().includes('quick') || f.toLowerCase().includes('fast') || f.toLowerCase().includes('instant'));
    if (activeCategory === 'low-monthly') return parseInt(loan.monthlyPayment) <= 45000;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80&auto=format&fit=crop"
          alt="Home Loans banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur">
                Lanka Property Loans
              </span>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Find your perfect home loan today.
              </h1>
              <p className="max-w-2xl text-base text-white/85 sm:text-lg">
                Compare home loans from leading banks in Sri Lanka. Get competitive rates, flexible tenure, and quick approvals for your dream home.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Competitive Rates</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Fast Approval</span>
                <span className="rounded-full bg-white/12 px-4 py-2 backdrop-blur">Expert Guidance</span>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white/95 p-5 text-slate-900 shadow-2xl backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2171B5]">Quick Calculator</p>
              <div className="mt-4 grid gap-3">
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Loan amount (Rs.)" />
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Interest rate (%)" />
                <input className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]" placeholder="Tenure (years)" />
              </div>
              <button className="mt-4 w-full rounded-xl bg-[#2171B5] px-4 py-3 font-bold text-white transition hover:bg-[#08306B]">
                Calculate EMI
              </button>
              <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">50+</p>
                  <p className="text-slate-500">Banks</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-[#08306B]">7.2%+</p>
                  <p className="text-slate-500">Best Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterChips.map((chip) => (
            <button
              key={chip.value}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition border-2 ${
                activeCategory === chip.value
                  ? 'bg-[#08306B] text-white border-[#08306B] shadow-md scale-105'
                  : 'bg-white text-[#08306B] border-[#08306B] hover:bg-[#2171B5] hover:text-white'
              }`}
              onClick={() => setActiveCategory(chip.value)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <aside className="rounded-[1.75rem] bg-white p-6 shadow-lg ring-1 ring-slate-200 h-fit">
          <h2 className="text-2xl font-black text-slate-800">Filter Loans</h2>
          <p className="mt-2 text-sm text-slate-500">Find loans that match your needs.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Interest Rate</label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]">
                <option>Any</option>
                <option>Below 7.5%</option>
                <option>7.5% - 8%</option>
                <option>Above 8%</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Loan Amount</label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]">
                <option>Any</option>
                <option>Up to Rs. 25M</option>
                <option>Rs. 25M - 50M</option>
                <option>Rs. 50M - 75M</option>
                <option>Above Rs. 75M</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Tenure</label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]">
                <option>Any</option>
                <option>10-15 years</option>
                <option>15-20 years</option>
                <option>20+ years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Features</label>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Quick Approval', 'Cashback', 'Top-up', 'Flexible'].map((item) => (
                  <span key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-center text-slate-600 ring-1 ring-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full rounded-xl bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white transition hover:scale-[1.02]">
              Apply Filters
            </button>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2171B5]">Home Loans</p>
              <h2 className="mt-2 text-3xl font-black text-slate-800">Available loan products</h2>
            </div>
            <p className="text-sm text-slate-500">Showing {filteredLoans.length} products</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {filteredLoans.map((loan) => (
              <article
                key={loan.id}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedLoan(loan)}
              >
                <div className="relative">
                  <img src={loan.image} alt={loan.product} className="h-56 w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#2171B5] shadow-sm">
                    {loan.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-[#08306B] px-3 py-1 text-sm font-bold text-white shadow-sm">
                    {loan.interestRate}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#2171B5]">{loan.bank}</p>
                  <h3 className="mt-1 text-xl font-black text-slate-900">{loan.product}</h3>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-lg bg-slate-50 p-2 text-center">
                      <p className="font-bold text-slate-700">{loan.loanAmount}</p>
                      <p className="text-slate-500">Loan Amount</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-2 text-center">
                      <p className="font-bold text-slate-700">{loan.tenure}</p>
                      <p className="text-slate-500">Tenure</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 p-2 text-center">
                      <p className="font-bold text-slate-700">{loan.monthlyPayment}</p>
                      <p className="text-slate-500">Monthly</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {loan.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-[#2171B5]/10 px-3 py-1 text-xs font-semibold text-[#2171B5]">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-3 py-2 font-bold text-white transition hover:scale-[1.02]">
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedLoan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="max-w-md rounded-2xl bg-white p-8 shadow-2xl max-h-96 overflow-y-auto">
            <h3 className="text-2xl font-black text-slate-900">{selectedLoan.product}</h3>
            <p className="mt-1 text-sm text-[#2171B5] font-bold">{selectedLoan.bank}</p>
            
            <div className="mt-6 space-y-4">
              <div className="border-b pb-4">
                <p className="text-xs font-bold text-slate-500 uppercase">Interest Rate</p>
                <p className="text-2xl font-black text-slate-900">{selectedLoan.interestRate}</p>
              </div>
              
              <div className="border-b pb-4">
                <p className="text-xs font-bold text-slate-500 uppercase">Loan Amount</p>
                <p className="text-lg font-bold text-slate-900">{selectedLoan.loanAmount}</p>
              </div>
              
              <div className="border-b pb-4">
                <p className="text-xs font-bold text-slate-500 uppercase">Monthly Payment</p>
                <p className="text-lg font-bold text-slate-900">{selectedLoan.monthlyPayment}</p>
              </div>
              
              <div className="border-b pb-4">
                <p className="text-xs font-bold text-slate-500 uppercase">Tenure</p>
                <p className="text-lg font-bold text-slate-900">{selectedLoan.tenure}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Features</p>
                <div className="flex flex-wrap gap-2">
                  {selectedLoan.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-[#2171B5]/10 px-3 py-1 text-sm font-semibold text-[#2171B5]">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full rounded-lg bg-[#08306B] px-4 py-3 font-bold text-white transition hover:bg-[#2171B5]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
