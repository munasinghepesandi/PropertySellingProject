import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { API_BASE_URL } from "../utils/auth";

const defaultLoanProducts = [
  {
    id: 1,
    bank: 'Commercial Bank of Ceylon',
    product: 'Home Ownership Scheme',
    interestRate: '7.5%',
    loanAmount: 'Up to Rs. 50M',
    tenure: '15-25 years',
    monthlyPayment: 'From Rs. 45,000',
    features: ['Flexible tenure', 'No hidden charges', 'Quick approval'],
    image: 'https://media.licdn.com/dms/image/v2/C5605AQEIIw7JF2hscg/videocover-high/videocover-high/0/1659947357520?e=2147483647&v=beta&t=0o_MfP-kayzVWgiBxXixxPSzbncTsEYxW4Xl0HyvdUw',
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
    image: 'https://s3.ap-southeast-1.amazonaws.com/static.boc.lk/2556/Sirimedura.jpg',
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

const interestRateOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Below 7.5%', value: 'below-7-5' },
  { label: '7.5% - 8%', value: '7-5-8' },
  { label: 'Above 8%', value: 'above-8' },
];

const loanAmountOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Up to Rs. 25M', value: 'up-to-25m' },
  { label: 'Rs. 25M - 50M', value: '25m-50m' },
  { label: 'Rs. 50M - 75M', value: '50m-75m' },
  { label: 'Above Rs. 75M', value: 'above-75m' },
];

const tenureOptions = [
  { label: 'Any', value: 'any' },
  { label: '10-15 years', value: '10-15-years' },
  { label: '15-20 years', value: '15-20-years' },
  { label: '20+ years', value: '20-plus-years' },
];

const featureOptions = [
  { label: 'Any', value: 'any' },
  { label: 'Quick Approval', value: 'quick-approval' },
  { label: 'Cashback', value: 'cashback' },
  { label: 'Top-up', value: 'top-up' },
  { label: 'Flexible', value: 'flexible' },
];

function formatCurrency(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '--';
  try {
    return 'Rs. ' + new Intl.NumberFormat('en-US').format(Math.round(Number(value)));
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return 'Rs. ' + Math.round(Number(value)).toString();
  }
}

export default function HomeLoanPage() {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loanProducts, setLoanProducts] = useState(defaultLoanProducts);
  const [loadingLoans, setLoadingLoans] = useState(false);
  const [loanError, setLoanError] = useState('');
  const [interestRateFilter, setInterestRateFilter] = useState('any');
  const [loanAmountFilter, setLoanAmountFilter] = useState('any');
  const [tenureFilter, setTenureFilter] = useState('any');
  const [featureFilter, setFeatureFilter] = useState('any');
  const [appliedFilters, setAppliedFilters] = useState({
    interestRate: 'any',
    loanAmount: 'any',
    tenure: 'any',
    feature: 'any',
  });
  // EMI calculator state
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('7.5');
  const [tenureYears, setTenureYears] = useState('20');
  const [emiResult, setEmiResult] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [emiError, setEmiError] = useState('');
  const closeModal = () => setSelectedLoan(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadLoans = async () => {
      setLoadingLoans(true);
      setLoanError('');

      try {
        const params = new URLSearchParams();
        if (activeCategory && activeCategory !== 'all') params.set('category', activeCategory);
        if (appliedFilters.interestRate && appliedFilters.interestRate !== 'any') params.set('interestRate', appliedFilters.interestRate);
        if (appliedFilters.loanAmount && appliedFilters.loanAmount !== 'any') params.set('loanAmount', appliedFilters.loanAmount);
        if (appliedFilters.tenure && appliedFilters.tenure !== 'any') params.set('tenure', appliedFilters.tenure);
        if (appliedFilters.feature && appliedFilters.feature !== 'any') params.set('feature', appliedFilters.feature);

        const response = await fetch(`${API_BASE_URL}/loans/products?${params.toString()}`, { signal: controller.signal });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.message || 'Unable to load loan products.');
        }

        setLoanProducts(Array.isArray(data?.data) && data.data.length ? data.data : defaultLoanProducts);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Loan filter fetch failed:', error);
          setLoanError('Showing default loan products because the backend filter service is unavailable.');
          setLoanProducts(defaultLoanProducts);
        }
      } finally {
        setLoadingLoans(false);
      }
    };

    loadLoans();

    return () => controller.abort();
  }, [activeCategory, appliedFilters]);

  const applyFilters = () => {
    setAppliedFilters({
      interestRate: interestRateFilter,
      loanAmount: loanAmountFilter,
      tenure: tenureFilter,
      feature: featureFilter,
    });
  };

  const resetFilters = () => {
    setInterestRateFilter('any');
    setLoanAmountFilter('any');
    setTenureFilter('any');
    setFeatureFilter('any');
    setAppliedFilters({
      interestRate: 'any',
      loanAmount: 'any',
      tenure: 'any',
      feature: 'any',
    });
    setActiveCategory('all');
  };

  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />

      <section className="relative min-h-[40vh] overflow-hidden text-white">
        <div className="absolute inset-0 bg-black/40 " />
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/static.boc.lk/4100/media-230302022456.jpg"
          alt="Home Loans banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100"
          loading="lazy"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-7">
              <div className="inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur-md" style={{borderColor: 'rgba(33,113,181,0.3)', background: 'linear-gradient(90deg, rgba(33,113,181,0.18), rgba(8,48,107,0.18))'}}>
                💰 Lanka Property Loans
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-white">
                Own Your Dream Home Today
              </h1>
              <p className="max-w-2xl text-lg text-blue-50/95 sm:text-xl font-light leading-relaxed">
                Unlock the best home loan rates with flexible tenure, instant approvals, and expert guidance from Sri Lanka's leading banks.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full px-4 py-2.5 backdrop-blur-md border text-white" style={{background: 'rgba(33,113,181,0.22)', borderColor: 'rgba(33,113,181,0.24)'}}>✓ Best Rates</span>
                <span className="rounded-full px-4 py-2.5 backdrop-blur-md border text-white" style={{background: 'rgba(8,48,107,0.2)', borderColor: 'rgba(33,113,181,0.24)'}}>⚡ Fast Approval</span>
                <span className="rounded-full px-4 py-2.5 backdrop-blur-md border text-white" style={{background: 'rgba(33,113,181,0.16)', borderColor: 'rgba(33,113,181,0.24)'}}>Expert Help</span>
              </div>
            </div>

            <div className="rounded-3xl p-8 text-slate-900 shadow-2xl backdrop-blur-xl border border-white/40" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95))'}}>
              <div className="inline-block px-4 py-2 rounded-full text-white font-bold text-xs uppercase tracking-wider mb-6" style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}>
                EMI Calculator
              </div>
              <div className="mt-6 grid gap-4">
                <input
                  className="rounded-2xl border-2 px-5 py-3.5 outline-none transition bg-white/70 font-medium placeholder-slate-500"
                  placeholder="Loan amount (Rs.)"
                  style={{borderColor: '#2171b5', focusBorderColor: '#08306b'}}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  inputMode="numeric"
                />

                <input
                  className="rounded-2xl border-2 px-5 py-3.5 outline-none transition bg-white/70 font-medium placeholder-slate-500"
                  placeholder="Interest rate (%)"
                  style={{borderColor: '#2171b5'}}
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  inputMode="decimal"
                />

                <input
                  className="rounded-2xl border-2 px-5 py-3.5 outline-none transition bg-white/70 font-medium placeholder-slate-500"
                  placeholder="Tenure (years)"
                  style={{borderColor: '#2171b5'}}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(e.target.value)}
                  inputMode="numeric"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  // EMI calculation
                  setEmiError('');
                  const P = Number(loanAmount);
                  const annualRate = Number(interestRate);
                  const years = Number(tenureYears);
                  if (!P || P <= 0 || !annualRate || annualRate <= 0 || !years || years <= 0) {
                    setEmiError('Please enter valid positive numbers for amount, rate and tenure.');
                    setEmiResult(null);
                    setTotalPayment(null);
                    setTotalInterest(null);
                    return;
                  }

                  const r = annualRate / 12 / 100; // monthly rate
                  const n = years * 12; // total months
                  const numerator = P * r * Math.pow(1 + r, n);
                  const denominator = Math.pow(1 + r, n) - 1;
                  const emi = denominator > 0 ? numerator / denominator : P / n;
                  const total = emi * n;
                  const interest = total - P;

                  setEmiResult(emi);
                  setTotalPayment(total);
                  setTotalInterest(interest);
                }}
                className="mt-6 w-full rounded-2xl px-6 py-3.5 font-bold text-white transition hover:shadow-xl transform hover:scale-[1.02]"
                style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}
              >
                Calculate EMI
              </button>

              {emiError && <p className="mt-4 text-sm font-semibold text-red-600">{emiError}</p>}

              {emiResult !== null && (
                <div className="mt-6 rounded-2xl p-4 border bg-white/60">
                  <p className="text-xs font-semibold text-slate-600">Estimated Monthly EMI</p>
                  <p className="mt-1 text-2xl font-black" style={{color: '#08306b'}}>{formatCurrency(emiResult)}</p>

                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-xl p-3 border">
                      <p className="text-xs text-slate-600">Total Payment</p>
                      <p className="font-bold mt-1">{formatCurrency(totalPayment)}</p>
                    </div>
                    <div className="rounded-xl p-3 border">
                      <p className="text-xs text-slate-600">Total Interest</p>
                      <p className="font-bold mt-1">{formatCurrency(totalInterest)}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div className="rounded-2xl p-4 border" style={{background: 'rgba(33,113,181,0.08)', borderColor: 'rgba(33,113,181,0.2)'}}>
                  <p className="text-2xl font-black" style={{background: 'linear-gradient(90deg, #08306b, #2171b5)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>50+</p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">Banks</p>
                </div>
                <div className="rounded-2xl p-4 border" style={{background: 'rgba(8,48,107,0.06)', borderColor: 'rgba(33,113,181,0.18)'}}>
                  <p className="text-2xl font-black" style={{background: 'linear-gradient(90deg, #08306b, #2171b5)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>7.2%</p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">Best Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterChips.map((chip) => (
            <button
              key={chip.value}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition transform ${
                activeCategory === chip.value
                  ? 'text-white shadow-lg scale-105 border-0'
                  : 'bg-white border-2 hover:bg-slate-50'
              }`}
              style={activeCategory === chip.value ? {background: 'linear-gradient(90deg, #2171b5, #08306b)'} : {borderColor: '#2171b5', color: '#2171b5'}}
              onClick={() => setActiveCategory(chip.value)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <aside className="rounded-3xl p-8 shadow-xl h-fit border border-white/80" style={{background: 'linear-gradient(180deg, white, rgba(33,113,181,0.04))', boxShadow: 'rgba(33,113,181,0.1) 0 4px 20px'}}>
          <h2 className="text-3xl font-black" style={{background: 'linear-gradient(90deg, #08306b, #2171b5)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Filter Loans</h2>
          <p className="mt-3 text-sm text-slate-600 font-medium">Find the perfect loan matching your needs.</p>

          <div className="mt-8 space-y-6">
            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wider">Interest Rate</label>
              <select
                className="w-full rounded-2xl border-2 px-5 py-3 outline-none transition font-medium cursor-pointer"
                style={{borderColor: '#2171b5'}}
                value={interestRateFilter}
                onChange={(e) => setInterestRateFilter(e.target.value)}
              >
                {interestRateOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wider">Loan Amount</label>
              <select
                className="w-full rounded-2xl border-2 px-5 py-3 outline-none transition font-medium cursor-pointer"
                style={{borderColor: '#2171b5'}}
                value={loanAmountFilter}
                onChange={(e) => setLoanAmountFilter(e.target.value)}
              >
                {loanAmountOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wider">Tenure</label>
              <select
                className="w-full rounded-2xl border-2 px-5 py-3 outline-none transition font-medium cursor-pointer"
                style={{borderColor: '#2171b5'}}
                value={tenureFilter}
                onChange={(e) => setTenureFilter(e.target.value)}
              >
                {tenureOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-3 block text-sm font-bold text-slate-700 uppercase tracking-wider">Features</label>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {featureOptions.filter((item) => item.value !== 'any').map((item) => {
                  const active = featureFilter === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      className="rounded-xl px-4 py-3 text-center text-slate-700 font-semibold transition cursor-pointer"
                      style={{
                        background: active ? 'rgba(33,113,181,0.2)' : 'rgba(33,113,181,0.08)',
                        border: '1px solid rgba(33,113,181,0.2)',
                        color: active ? '#08306b' : '#334155',
                      }}
                      onClick={() => setFeatureFilter(active ? 'any' : item.value)}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={applyFilters}
                className="w-full rounded-2xl px-6 py-3.5 font-bold text-white transition hover:shadow-lg transform hover:scale-[1.02] uppercase tracking-wider"
                style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-2xl border-2 px-5 py-3.5 font-bold uppercase tracking-wider transition hover:bg-slate-50"
                style={{borderColor: '#2171b5', color: '#2171b5'}}
              >
                Reset
              </button>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em]" style={{color: '#2171b5'}}>Home Loans</p>
              <h2 className="mt-3 text-4xl font-black bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Available loan products</h2>
            </div>
            <p className="text-sm font-semibold text-slate-600 px-4 py-2 rounded-full" style={{background: 'rgba(33,113,181,0.1)'}}>
              {loadingLoans ? 'Loading products...' : `Showing ${loanProducts.length} products`}
            </p>
          </div>

          {loanError && (
            <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
              {loanError}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {loanProducts.map((loan) => (
              <article
                key={loan.id}
                className="overflow-hidden rounded-3xl shadow-lg transition hover:-translate-y-2 hover:shadow-2xl cursor-pointer border border-white/80 group" style={{background: 'linear-gradient(135deg, white, rgba(33,113,181,0.04))', boxShadow: 'rgba(33,113,181,0.1) 0 4px 20px'}}
                onClick={() => setSelectedLoan(loan)}
              >
                <div className="relative overflow-hidden h-64">
                  <img src={loan.image} alt={loan.product} className="h-full w-full object-cover transition group-hover:scale-110 duration-300" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg" style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}>
                    {loan.badge}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full px-4 py-1.5 text-sm font-bold text-white shadow-lg" style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}>
                    {loan.interestRate}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{color: '#2171b5'}}>🏦 {loan.bank}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{loan.product}</h3>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl p-3 text-center border" style={{background: 'rgba(33,113,181,0.08)', borderColor: 'rgba(33,113,181,0.2)'}}>
                      <p className="font-bold text-slate-800 text-sm">{loan.loanAmount}</p>
                      <p className="text-xs text-slate-600 mt-1">Loan</p>
                    </div>
                    <div className="rounded-2xl p-3 text-center border" style={{background: 'rgba(33,113,181,0.06)', borderColor: 'rgba(33,113,181,0.16)'}}>
                      <p className="font-bold text-slate-800 text-sm">{loan.tenure}</p>
                      <p className="text-xs text-slate-600 mt-1">Tenure</p>
                    </div>
                    <div className="rounded-2xl p-3 text-center border" style={{background: 'rgba(8,48,107,0.06)', borderColor: 'rgba(33,113,181,0.16)'}}>
                      <p className="font-bold text-slate-800 text-sm">{loan.monthlyPayment}</p>
                      <p className="text-xs text-slate-600 mt-1">Monthly</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {loan.features.map((feature) => (
                      <span key={feature} className="rounded-full px-3.5 py-1.5 text-xs font-semibold border transition" style={{background: 'rgba(33,113,181,0.08)', borderColor: 'rgba(33,113,181,0.2)', color: '#2171b5'}} onMouseEnter={(e) => e.target.style.background = 'rgba(33,113,181,0.15)'} onMouseLeave={(e) => e.target.style.background = 'rgba(33,113,181,0.08)'}>
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  <button className="mt-6 w-full rounded-2xl px-4 py-3 font-bold text-white transition hover:shadow-lg transform hover:scale-[1.02]" style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}>
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
          {!loadingLoans && loanProducts.length === 0 && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
              No loan products matched your filters.
            </div>
          )}
        </div>
      </section>

      {selectedLoan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="max-w-md rounded-3xl p-8 shadow-2xl border border-white/90 max-h-[90vh] overflow-y-auto" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.995), rgba(255,255,255,0.96))'}}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{selectedLoan.product}</h3>
                <p className="mt-1 text-sm font-bold" style={{color: '#2171b5'}}>🏦 {selectedLoan.bank}</p>
              </div>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 text-3xl font-light">×</button>
            </div>
            
            <div className="mt-8 space-y-5 border-t pt-6" style={{borderColor: 'rgba(33,113,181,0.2)'}}>
              <div className="rounded-2xl p-4 border" style={{background: 'rgba(33,113,181,0.08)', borderColor: 'rgba(33,113,181,0.2)'}}>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Interest Rate</p>
                <p className="text-3xl font-black mt-2" style={{color: '#08306b'}}>{selectedLoan.interestRate}</p>
              </div>
              
              <div className="rounded-2xl p-4 border" style={{background: 'rgba(33,113,181,0.06)', borderColor: 'rgba(33,113,181,0.16)'}}>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Loan Amount</p>
                <p className="text-2xl font-black mt-2" style={{color: '#08306b'}}>{selectedLoan.loanAmount}</p>
              </div>
              
              <div className="rounded-2xl p-4 border" style={{background: 'rgba(8,48,107,0.06)', borderColor: 'rgba(33,113,181,0.16)'}}>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Monthly Payment</p>
                <p className="text-2xl font-black mt-2" style={{color: '#08306b'}}>{selectedLoan.monthlyPayment}</p>
              </div>
              
              <div className="rounded-2xl p-4 border" style={{background: 'rgba(33,113,181,0.06)', borderColor: 'rgba(33,113,181,0.16)'}}>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Tenure</p>
                <p className="text-2xl font-black mt-2" style={{color: '#08306b'}}>{selectedLoan.tenure}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {selectedLoan.features.map((feature) => (
                    <span key={feature} className="rounded-full px-4 py-2 text-sm font-semibold border" style={{background: 'rgba(33,113,181,0.08)', borderColor: 'rgba(33,113,181,0.2)', color: '#2171b5'}}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-8 w-full rounded-2xl px-6 py-3.5 font-bold text-white transition hover:shadow-lg transform hover:scale-[1.02]"
              style={{background: 'linear-gradient(90deg, #2171b5, #08306b)'}}
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
