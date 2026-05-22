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
  const [interestFilter, setInterestFilter] = useState('any');
  const [loanAmountFilter, setLoanAmountFilter] = useState('any');
  const [tenureFilter, setTenureFilter] = useState('any');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanInterest, setLoanInterest] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emiResult, setEmiResult] = useState('');
  const closeModal = () => setSelectedLoan(null);

  const handleCalculateEmi = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(loanInterest);
    const years = Number(loanTenure);

    if (!principal || !annualRate || !years) {
      setEmiResult('Enter loan amount, interest rate, and tenure first.');
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    setEmiResult(`Estimated EMI: Rs. ${Math.round(emi).toLocaleString('en-LK')} per month`);
  };

  // Filtering logic
  const filteredLoans = loanProducts.filter((loan) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'best-rates') return parseFloat(loan.interestRate) <= 7.5;
    if (activeCategory === 'high-loan') return loan.loanAmount.includes('75M') || loan.loanAmount.includes('80M');
    if (activeCategory === 'quick') return loan.features.some(f => f.toLowerCase().includes('quick') || f.toLowerCase().includes('fast') || f.toLowerCase().includes('instant'));
    if (activeCategory === 'low-monthly') return parseInt(loan.monthlyPayment) <= 45000;
    return true;
  }).filter((loan) => {
    const matchesInterest = interestFilter === 'any' ||
      (interestFilter === 'below-75' && parseFloat(loan.interestRate) <= 7.5) ||
      (interestFilter === '75-to-8' && parseFloat(loan.interestRate) > 7.5 && parseFloat(loan.interestRate) <= 8) ||
      (interestFilter === 'above-8' && parseFloat(loan.interestRate) > 8);

    const matchesAmount = loanAmountFilter === 'any' ||
      (loanAmountFilter === 'up-to-25' && /25M|40M/.test(loan.loanAmount)) ||
      (loanAmountFilter === '25-to-50' && /40M|50M/.test(loan.loanAmount)) ||
      (loanAmountFilter === '50-to-75' && /60M|70M/.test(loan.loanAmount)) ||
      (loanAmountFilter === 'above-75' && loan.loanAmount.includes('80M'));

    const matchesTenure = tenureFilter === 'any' ||
      (tenureFilter === '10-15' && loan.tenure.includes('10-15')) ||
      (tenureFilter === '15-20' && loan.tenure.includes('15-20')) ||
      (tenureFilter === '20-plus' && loan.tenure.includes('20-30'));

    return matchesInterest && matchesAmount && matchesTenure;
  });

  const handleApplyFilters = () => {
    document.getElementById('loan-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen  text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden  text-white">
        <div className="absolute inset-0 bg-slate-950/65" />
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/static.boc.lk/4100/media-230302022456.jpg"
          alt="Home Loans banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="space-y-6">
              <div>
                <span className="inline-flex rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
                  Lanka Property Loans
                </span>
              </div>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Find your perfect home loan.
              </h1>
              <p className="max-w-2xl text-base text-white/80 sm:text-lg leading-relaxed">
                Compare competitive rates, flexible terms, and quick approvals from Sri Lanka's leading banks. Get expert guidance every step of the way.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
                <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Best Rates</span>
                <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Fast Approval</span>
                <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur border border-white/20">✓ Expert Support</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/95 p-6 text-slate-900 shadow-2xl backdrop-blur-sm ring-1 ring-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2171B5]">Quick Calculator</p>
              <div className="mt-5 grid gap-3">
                <input value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20" placeholder="Loan amount (Rs.)" />
                <input value={loanInterest} onChange={(e) => setLoanInterest(e.target.value)} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20" placeholder="Interest rate (%)" />
                <input value={loanTenure} onChange={(e) => setLoanTenure(e.target.value)} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20" placeholder="Tenure (years)" />
              </div>
              <button type="button" onClick={handleCalculateEmi} className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-2.5 font-bold text-white text-sm uppercase tracking-wide transition hover:shadow-lg hover:scale-105">
                Calculate EMI
              </button>
              {emiResult && (
                <div className="mt-4 rounded-lg border border-[#2171B5]/20 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-[#08306B]">
                  <span className="text-[#2171B5]">✓</span> {emiResult}
                </div>
              )}
              <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm">
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-3 ring-1 ring-slate-100">
                  <p className="text-lg font-black text-[#08306B]">50+</p>
                  <p className="text-slate-500 text-xs mt-1">Banks</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-3 ring-1 ring-slate-100">
                  <p className="text-lg font-black text-[#08306B]">7.2%+</p>
                  <p className="text-slate-500 text-xs mt-1">Best Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5] mb-2">🎯 Explore Options</p>
          <h2 className="text-2xl font-black text-slate-900 mb-8">Quick Filter Categories</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {filterChips.map((chip) => (
            <button
              key={chip.value}
              className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition duration-200 border-2 shadow-sm hover:shadow-md ${
                activeCategory === chip.value
                  ? 'bg-[#08306B] text-white border-[#08306B] shadow-md scale-105'
                  : 'bg-white text-[#08306B] border-[#08306B] hover:bg-[#2171B5]/10 hover:border-[#2171B5]'
              }`}
              onClick={() => setActiveCategory(chip.value)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <aside className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200 h-fit sticky top-24">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h2 className="text-xl font-black text-slate-900">🔍 Refine Search</h2>
            <p className="mt-1 text-xs text-slate-500 uppercase tracking-wide font-semibold">Filter by your preferences</p>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <label className="mb-3 block text-xs font-bold text-slate-700 uppercase tracking-[0.12em]">💰 Interest Rate</label>
              <select value={interestFilter} onChange={(e) => setInterestFilter(e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20 bg-white">
                <option value="any">Any rate</option>
                <option value="below-75">Below 7.5%</option>
                <option value="75-to-8">7.5% - 8%</option>
                <option value="above-8">Above 8%</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold text-slate-700 uppercase tracking-[0.12em]">💵 Loan Amount</label>
              <select value={loanAmountFilter} onChange={(e) => setLoanAmountFilter(e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20 bg-white">
                <option value="any">Any amount</option>
                <option value="up-to-25">Up to Rs. 25M</option>
                <option value="25-to-50">Rs. 25M - 50M</option>
                <option value="50-to-75">Rs. 50M - 75M</option>
                <option value="above-75">Above Rs. 75M</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-xs font-bold text-slate-700 uppercase tracking-[0.12em]">⏱️ Tenure</label>
              <select value={tenureFilter} onChange={(e) => setTenureFilter(e.target.value)} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#2171B5] focus:ring-2 focus:ring-[#2171B5]/20 bg-white">
                <option value="any">Any tenure</option>
                <option value="10-15">10-15 years</option>
                <option value="15-20">15-20 years</option>
                <option value="20-plus">20+ years</option>
              </select>
            </div>

            <button type="button" onClick={handleApplyFilters} className="w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white text-xs uppercase tracking-widest transition duration-200 hover:shadow-lg hover:scale-105 mt-6 shadow-md">
              ✓ Apply Filters
            </button>
          </div>
        </aside>

        <div>
          <div className="mb-10 pb-6 border-b border-slate-200">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2171B5]">💡 Available Options</p>
              <h2 className="mt-3 text-3xl font-black text-slate-900">Loan Products</h2>
              <p className="mt-2 text-xs text-slate-600 font-medium">Showing <span className="font-bold text-[#2171B5]">{filteredLoans.length}</span> products • Sort by rate, amount, or features</p>
            </div>
          </div>

          <div id="loan-results" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredLoans.map((loan) => (
              <article
                key={loan.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedLoan(loan)}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-300 to-slate-200">
                  <img src={loan.image} alt={loan.product} className="h-full w-full object-cover transition duration-500 group-hover:scale-125" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2171B5] shadow-lg backdrop-blur-md">
                    ⭐ {loan.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-lg bg-[#08306B] px-3 py-2.5 text-sm font-bold text-white shadow-lg">
                    {loan.interestRate}
                  </span>
                </div>

                <div className="space-y-6 p-6">
                  <div className="pb-4 border-b border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2171B5]">{loan.bank}</p>
                    <h3 className="mt-3 text-lg font-black text-slate-900 leading-snug">{loan.product}</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-3 text-center ring-1 ring-slate-100 hover:ring-[#2171B5]/30 transition">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</p>
                      <p className="mt-2 font-bold text-slate-900 text-sm leading-tight">{loan.loanAmount}</p>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-3 text-center ring-1 ring-slate-100 hover:ring-[#2171B5]/30 transition">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tenure</p>
                      <p className="mt-2 font-bold text-slate-900 text-sm leading-tight">{loan.tenure}</p>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-slate-50 p-3 text-center ring-1 ring-slate-100 hover:ring-[#2171B5]/30 transition">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly</p>
                      <p className="mt-2 font-bold text-slate-900 text-sm leading-tight">{loan.monthlyPayment}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 py-2">
                    {loan.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-[#2171B5]/12 px-3 py-1.5 text-xs font-semibold text-[#2171B5] ring-1 ring-[#2171B5]/25 hover:bg-[#2171B5]/20 transition">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  <button type="button" onClick={(event) => { event.stopPropagation(); setSelectedLoan(loan); }} className="mt-2 w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white text-sm uppercase tracking-widest transition duration-200 hover:shadow-lg hover:scale-105 shadow-md">
                    View Details →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {selectedLoan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="border-b border-slate-200 pb-6 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2171B5]">{selectedLoan.bank}</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">{selectedLoan.product}</h3>
            </div>
            
            <div className="space-y-5">
              <div className="rounded-lg bg-gradient-to-br from-[#2171B5]/5 to-slate-50 p-5 ring-1 ring-[#2171B5]/10">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Interest Rate</p>
                <p className="mt-2 text-3xl font-black text-[#08306B]">{selectedLoan.interestRate}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Loan Amount</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{selectedLoan.loanAmount}</p>
                </div>
                
                <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Tenure</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{selectedLoan.tenure}</p>
                </div>
              </div>
              
              <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Monthly Payment</p>
                <p className="mt-2 text-lg font-bold text-slate-900">{selectedLoan.monthlyPayment}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {selectedLoan.features.map((feature) => (
                    <span key={feature} className="rounded-full bg-[#2171B5]/12 px-3 py-1.5 text-sm font-semibold text-[#2171B5] ring-1 ring-[#2171B5]/20">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full rounded-lg bg-gradient-to-r from-[#2171B5] to-[#08306B] px-4 py-3 font-bold text-white text-sm uppercase tracking-wide transition duration-200 hover:shadow-lg hover:scale-105"
            >
              Apply Now
            </button>
            
            <button
              onClick={closeModal}
              className="mt-3 w-full rounded-lg bg-slate-100 px-4 py-3 font-bold text-slate-700 text-sm uppercase tracking-wide transition duration-200 hover:bg-slate-200"
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
