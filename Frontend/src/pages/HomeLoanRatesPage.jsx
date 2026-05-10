import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, ChevronRight, Home, MessageCircle } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const banks = [
  { bank: "NSB", logo: "NSB", logoUrl: "https://logo.clearbit.com/nsb.lk", color: "#d9e8f6", textColor: "#08306B", product: "NSB Housing Loan", rate: 7, readMore: true },
  { bank: "Sampath Bank", logo: "S", logoUrl: "https://logo.clearbit.com/sampath.lk", color: "#2171B5", textColor: "#ffffff", product: "Shanthi Home Loans", rate: 8.75 },
  { bank: "Bank of Ceylon", logo: "BOC", logoUrl: "https://logo.clearbit.com/boc.lk", color: "#d9e8f6", textColor: "#08306B", product: "BOC SIRIMEDURA", rate: 10, readMore: true },
  { bank: "People's Bank", logo: "PB", logoUrl: "https://logo.clearbit.com/peoplesbank.lk", color: "#08306B", textColor: "#ffffff", product: "Housing loan", rate: 10 },
  { bank: "Seylan Bank", logo: "SEY", logoUrl: "https://logo.clearbit.com/seylan.lk", color: "#173b7a", textColor: "#ffffff", product: "Seylan Siri Niwasa", rate: 10.5, readMore: true },
  { bank: "Cargills Bank", logo: "CB", logoUrl: "https://logo.clearbit.com/cargillsbank.com", color: "#e11d48", textColor: "#ffffff", product: "Cargills Home Loans", rate: 10.8 },
  { bank: "NDB", logo: "NDB", logoUrl: "https://logo.clearbit.com/ndbbank.com", color: "#2171B5", textColor: "#ffffff", product: "NDB Home Loan", rate: 11 },
  { bank: "Commercial Bank", logo: "COM", logoUrl: "https://logo.clearbit.com/combank.lk", color: "#1d4ed8", textColor: "#ffffff", product: "Home Loan", rate: 11, readMore: true },
  { bank: "HNB", logo: "HNB", logoUrl: "https://logo.clearbit.com/hnb.net", color: "#d9e8f6", textColor: "#08306B", product: "Home Loans", rate: 11.5, readMore: true },
  { bank: "DFCC Bank", logo: "DFCC", logoUrl: "https://logo.clearbit.com/dfcc.lk", color: "#2171B5", textColor: "#ffffff", product: "Sevana Housing Loans", rate: 11.5 },
  { bank: "Pan Asia Bank", logo: "PABC", logoUrl: "https://logo.clearbit.com/pabcbank.com", color: "#1e3a8a", textColor: "#ffffff", product: "Home Finance", rate: 11.5 },
  { bank: "Amana Bank", logo: "AB", logoUrl: "https://logo.clearbit.com/amana.lk", color: "#2171B5", textColor: "#ffffff", product: "Residential Housing", rate: 12 },
  { bank: "Union Bank", logo: "UB", logoUrl: "https://logo.clearbit.com/unionb.com", color: "#dc2626", textColor: "#ffffff", product: "Nivasa Home Loan", rate: 12 },
  { bank: "Union Bank", logo: "UB", logoUrl: "https://logo.clearbit.com/unionb.com", color: "#dc2626", textColor: "#ffffff", product: "Union Bank", rate: 13 },
  { bank: "Sanasa Bank", logo: "SAN", logoUrl: "https://logo.clearbit.com/sanasabank.com", color: "#2563eb", textColor: "#ffffff", product: "sanasa", rate: 14 },
  { bank: "Regional Development Bank", logo: "RDB", logoUrl: "https://logo.clearbit.com/rdb.lk", color: "#08306B", textColor: "#ffffff", product: "Kedella Loan", rate: 15 },
];

const budgetProperties = [
  { city: "Kandy", beds: 8, baths: 3, size: "1800 sq.ft.", type: "House", price: "Rs. 9.8M", title: "Family house for sale in Kandy View Garden", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80&auto=format&fit=crop" },
  { city: "Peradeniya", beds: 6, baths: 2, size: "1400 sq.ft.", type: "House", price: "Rs. 8.6M", title: "House close to Peradeniya town", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80&auto=format&fit=crop" },
  { city: "Katugastota", beds: 7, baths: 2, size: "12 perches", type: "House", price: "Rs. 9.5M", title: "Residential house for sale in Katugastota", image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=700&q=80&auto=format&fit=crop" },
  { city: "Digana", beds: 5, baths: 2, size: "950 sq.ft.", type: "House", price: "Rs. 7.9M", title: "Compact house for sale near Digana", image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=700&q=80&auto=format&fit=crop" },
  { city: "Kundasale", beds: 10, baths: null, size: "15 perches", type: "Bare Land", price: "Rs. 1.2M", title: "Residential land for sale in Kundasale", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80&auto=format&fit=crop" },
  { city: "Akurana", beds: 9, baths: null, size: "20 perches", type: "Bare Land", price: "Rs. 950,000", title: "Land for sale near Akurana main road", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=80&auto=format&fit=crop" },
  { city: "Pilimathalawa", beds: 4, baths: 2, size: "1100 sq.ft.", type: "House", price: "Rs. 8.2M", title: "Two bedroom house in Pilimathalawa", image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=700&q=80&auto=format&fit=crop" },
  { city: "Gampola", beds: 6, baths: 2, size: "1300 sq.ft.", type: "House", price: "Rs. 6.9M", title: "House for sale in Gampola", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=700&q=80&auto=format&fit=crop" },
];

const faqQuestions = [
  "What is a home loan?",
  "What are the requirements to satisfy to apply for a loan?",
  "Up to which age can I apply for a home loan?",
  "What is the maximum repayment period offered for home loans?",
  "What documents should I submit when applying for a home loan?",
  "What is the interest rate charged for housing loans?",
  "How do I obtain a Housing Loan Guarantee from EPF?",
  "What is the minimum down-payment for a housing loan?",
  "How much disposable income should I have for the loan?",
  "What are the requirements for non-resident Sri Lankans to apply for a housing loan?",
];

const formatMoney = (value) => `Rs. ${Math.max(0, Math.round(value || 0)).toLocaleString("en-LK")}`;

const calculateMonthly = (loanAmount, annualRate, years) => {
  const months = Number(years) * 12;
  const monthlyRate = Number(annualRate) / 100 / 12;

  if (!loanAmount || !months) return 0;
  if (!monthlyRate) return loanAmount / months;

  return (loanAmount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
};

export default function HomeLoanRatesPage() {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(10000000);
  const [loanPeriod, setLoanPeriod] = useState(5);
  const [downPayment, setDownPayment] = useState(2500000);
  const [propertyValue, setPropertyValue] = useState(12500000);
  const [calculatorRate, setCalculatorRate] = useState(12);
  const [calculatorYears, setCalculatorYears] = useState(20);

  const downPaymentPercent = propertyValue ? (downPayment / propertyValue) * 100 : 0;
  const calculatorLoanAmount = Math.max(Number(propertyValue) - Number(downPayment), 0);

  const calculatorTotals = useMemo(() => {
    const monthlyPayment = calculateMonthly(calculatorLoanAmount, calculatorRate, calculatorYears);
    const totalPayable = monthlyPayment * Number(calculatorYears) * 12;
    const totalInterest = Math.max(totalPayable - calculatorLoanAmount, 0);

    return { monthlyPayment, totalPayable, totalInterest };
  }, [calculatorLoanAmount, calculatorRate, calculatorYears]);

  const searchRows = useMemo(
    () =>
      banks.map((bank) => ({
        ...bank,
        monthly: calculateMonthly(Number(loanAmount), bank.rate, Number(loanPeriod)),
      })),
    [loanAmount, loanPeriod]
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="bg-gradient-to-r from-[#08306B] to-[#2171B5] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Home Loan Rates in Sri Lanka</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">Compare Home Loan Rates in Sri Lanka</h1>
          <p className="mt-4 max-w-3xl text-blue-100">
            Search home loan products by loan amount, loan period, and down payment to estimate your first monthly repayment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Quick home loan search</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="text-sm font-bold text-slate-600">Loan amount</span>
              <input
                type="number"
                value={loanAmount}
                onChange={(event) => setLoanAmount(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
              />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-600">Loan period</span>
              <select
                value={loanPeriod}
                onChange={(event) => setLoanPeriod(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
              >
                {[5, 10, 15, 20, 25, 30].map((year) => (
                  <option key={year} value={year}>
                    {year} Years
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-600">Down Payment</span>
              <input
                type="number"
                value={downPayment}
                onChange={(event) => setDownPayment(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#2171B5]"
              />
              <span className={`mt-2 block text-xs font-bold ${downPaymentPercent >= 20 ? "text-emerald-700" : "text-red-600"}`}>
                Enter above 20% of the property value
              </span>
            </label>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-[0.85fr_1.45fr_0.8fr_1fr] bg-slate-100 px-5 py-4 text-sm font-black text-slate-700 md:grid">
            <span>Bank</span>
            <span>Home Loan Product</span>
            <span>Interest Rate</span>
            <span>Monthly Repayment</span>
          </div>
          {searchRows.map((row) => (
            <div
              key={`${row.bank}-${row.product}`}
              className="grid gap-3 border-t border-slate-200 px-5 py-5 text-sm md:grid-cols-[0.85fr_1.45fr_0.8fr_1fr] md:items-center"
            >
              <div className="flex items-center gap-3 font-black text-slate-900">
                <span
                  className="inline-flex h-12 w-16 items-center justify-center overflow-hidden rounded-xl bg-white p-2 text-xs font-black shadow-sm ring-1 ring-black/10"
                  style={{ backgroundColor: row.color, color: row.textColor }}
                >
                  <img
                    src={row.logoUrl}
                    alt={`${row.bank} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                      event.currentTarget.nextElementSibling.style.display = "inline";
                    }}
                  />
                  <span style={{ display: "none" }}>{row.logo}</span>
                </span>
                {row.bank}
              </div>
              <div>
                <p className="font-bold">{row.product}</p>
                {row.readMore ? (
                  <button type="button" className="mt-1 text-xs font-black uppercase tracking-wide text-[#2171B5]">
                    Read more
                  </button>
                ) : null}
              </div>
              <strong>{row.rate}% upwards</strong>
              <strong className="text-lg text-[#08306B]">{formatMoney(row.monthly)}</strong>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm font-semibold text-slate-600">Last Update Date :- February 1st 2026</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          **Initial monthly repayment figures are estimates only, based on the advertised rate, loan amount and term entered.
          Rates, fees, charges, and the total cost of the loan may vary depending on your loan amount, loan term, credit history,
          and individual circumstances.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Home Loan Calculator</h2>
          <div className="mt-5 grid gap-5">
            <label>
              <span className="text-sm font-bold text-slate-600">Property Value</span>
              <input type="number" value={propertyValue} onChange={(event) => setPropertyValue(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </label>
            <label>
              <span className="text-sm font-bold text-slate-600">Down payment</span>
              <div className="mt-2 grid gap-3 md:grid-cols-[0.7fr_1.3fr]">
                <div className="rounded-xl bg-slate-100 px-4 py-3 font-black">{Math.round(downPaymentPercent)}%</div>
                <input type="number" value={downPayment} onChange={(event) => setDownPayment(event.target.value)} className="rounded-xl border border-slate-200 px-4 py-3" />
              </div>
            </label>
            <label>
              <span className="text-sm font-bold text-slate-600">Interest Rate %</span>
              <input type="number" value={calculatorRate} onChange={(event) => setCalculatorRate(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </label>
            <label>
              <span className="text-sm font-bold text-slate-600">Loan Period Years</span>
              <input type="number" value={calculatorYears} onChange={(event) => setCalculatorYears(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3" />
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-bold text-slate-500">Your estimated monthly payment</p>
          <h2 className="mt-3 text-4xl font-black text-[#08306B]">{formatMoney(calculatorTotals.monthlyPayment)}</h2>
          <p className="mt-3 text-sm text-slate-500">The value is based on Equated Monthly Installment (EMI)</p>
          <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6">
            <div className="flex justify-between gap-4"><span>Loan Amount:</span><strong>{formatMoney(calculatorLoanAmount)}</strong></div>
            <div className="flex justify-between gap-4"><span>Interest Rate:</span><strong>{calculatorRate} %</strong></div>
            <div className="flex justify-between gap-4"><span>Total interest payable:</span><strong>{formatMoney(calculatorTotals.totalInterest)}</strong></div>
            <div className="rounded-xl bg-slate-100 px-4 py-4">
              <div className="flex justify-between gap-4 font-black"><span>Total payable (Capital + Interest):</span><span className="text-[#08306B]">{formatMoney(calculatorTotals.totalPayable)}</span></div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-[#08306B] p-5 text-white">
            <h3 className="text-xl font-black">Let us help you for a fast and hassle free loan application</h3>
            <button type="button" className="mt-4 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#08306B]">
              Get advice now
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
          <h2 className="text-xl font-black">Disclaimer</h2>
          <p className="mt-3">
            The values shown above are estimates only. The interest rate applied for the above calculation is the 5 year fixed housing loan interest rate and is subject to salary assignment to the bank. The final interest rate will be determined by the bank after reviewing supporting documents and evaluation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-12 md:grid-cols-2">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <BookOpen className="text-[#2171B5]" size={30} />
          <h2 className="mt-4 text-2xl font-black">16 vital facts you need to know before applying for a Housing Loan</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Housing loans are offered by commercial banks at competitive rates, but choosing the right product needs careful comparison.
          </p>
          <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#2171B5] px-5 py-3 text-sm font-black text-white">
            Read the guide <ArrowRight size={16} />
          </button>
        </article>

        <article className="rounded-2xl bg-[#08306B] p-6 text-white shadow-sm">
          <MessageCircle size={30} />
          <h2 className="mt-4 text-2xl font-black">Get advice on your housing loan application</h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Our experienced advisors can help you compare options and guide you through the application process.
          </p>
          <button type="button" className="mt-5 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#08306B]">
            Get advice now
          </button>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2171B5]">Properties Available for your Budget</p>
            <h2 className="mt-2 text-3xl font-black">Houses, lands, and apartments for sale</h2>
          </div>
          <button type="button" onClick={() => navigate("/sales")} className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-black">
            View more <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {budgetProperties.map((property) => (
            <article key={`${property.city}-${property.title}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative h-40 bg-slate-100">
                <img src={property.image} alt={property.title} className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-black text-[#08306B] shadow-sm">
                  <Home size={13} />
                  {property.type}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm font-black text-[#08306B]">{property.city}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span>{property.beds}</span>
                  {property.baths ? <span>{property.baths}</span> : null}
                  <span>{property.size}</span>
                </div>
                <p className="mt-3 text-xl font-black">{property.price}</p>
                <h3 className="mt-2 text-sm font-bold leading-5 text-slate-700">{property.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2171B5]">Frequently asked question about Home Loan</p>
            <h2 className="mt-2 text-3xl font-black">Know what users frequently ask</h2>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">What is a home loan?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A home loan or mortgage is a type of loan offered to a buyer for buying a residential property. The property is usually considered collateral if the borrower is unable to repay.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {faqQuestions.slice(1).map((question) => (
              <button key={question} type="button" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-bold text-slate-700">
                {question}
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black">Home Loan Rates in Sri Lanka</h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
            <p>
              Building a home of your own is a major life goal, and many buyers research the best home loan rates in Sri Lanka before deciding whether to buy, build, or invest.
            </p>
            <p>
              Banks in Sri Lanka offer housing loans with different rates, repayment periods, and conditions. A comparison tool helps you assess the lowest home loan rates, repayment terms, and likely EMI before you apply.
            </p>
            <p>
              Since a housing loan is a long-term commitment, compare rates carefully and review bank conditions before choosing a loan product. The right choice should match your income, repayment capacity, and property plan.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  );
}
