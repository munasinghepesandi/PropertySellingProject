import React, { useMemo, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const faqs = [
  {
    question: "What is a Mortgage/Home Loan?",
    answer:
      "A mortgage or home loan is a loan taken out to purchase property or land. Once a mortgage is obtained, the borrower must repay the loan amount along with interest to the lender. If the borrower fails to repay the loan, ownership of the property or land can transfer to the lender.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "The amount that can be borrowed is ultimately determined by the lender and depends on factors such as your income, other loans, and current expenses.",
  },
  {
    question: "What documents do I require to apply for a Home Loan?",
    answer:
      "Banks commonly request a copy of your NIC or passport, recent salary slips, employer confirmation letter, salary bank statements, details of existing loans, and a Marriage Certificate for joint applicants.",
  },
  {
    question: "I have a property that I'm interested in. Will you arrange the purchase for me?",
    answer:
      "The bank will only facilitate the loan. You will need to arrange the purchase directly with the property's advertiser or agent. Once your offer is accepted, you can contact the bank regarding the loan.",
  },
];

const benefits = [
  "Affordability Assessment",
  "Loan Offer Comparison",
  "Future Planning",
];

const formatMoney = (value, currency) =>
  `${currency}. ${Math.max(0, Math.round(value || 0)).toLocaleString("en-LK")}`;

export default function HomeLoanCalculatorPage() {
  const [currency, setCurrency] = useState("LKR");
  const [propertyValue, setPropertyValue] = useState(20000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [interestRate, setInterestRate] = useState(12);
  const [loanPeriod, setLoanPeriod] = useState(20);

  const totals = useMemo(() => {
    const value = Number(propertyValue) || 0;
    const downPercent = Number(downPaymentPercent) || 0;
    const rate = Number(interestRate) || 0;
    const years = Number(loanPeriod) || 0;
    const downPayment = value * (downPercent / 100);
    const loanAmount = Math.max(value - downPayment, 0);
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment =
      loanAmount && months && monthlyRate
        ? (loanAmount * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1)
        : months
          ? loanAmount / months
          : 0;
    const totalPayable = monthlyPayment * months;
    const totalInterest = Math.max(totalPayable - loanAmount, 0);

    return {
      downPayment,
      loanAmount,
      monthlyPayment,
      totalInterest,
      totalPayable,
    };
  }, [propertyValue, downPaymentPercent, interestRate, loanPeriod]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#08306B] via-[#2171B5] to-[#0d4a9f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-100">EMI Calculator</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Calculate Your Monthly Payment</h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 leading-relaxed">
              Use our interactive calculator to estimate your monthly loan commitment, total interest, and repayment schedule based on your property value and preferred terms.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Home Loan Calculator</h2>

          <div className="mt-6">
            <p className="mb-2 text-sm font-bold text-slate-700">Currency</p>
            <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
              {["LKR", "USD"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrency(item)}
                  className={`rounded-lg px-5 py-2 text-sm font-black transition ${
                    currency === item ? "bg-[#08306B] text-white shadow-sm" : "text-slate-600 hover:text-[#08306B]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Property Value</span>
              <div className="mt-2 flex overflow-hidden rounded-xl border border-slate-200 bg-white">
                <span className="bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500">{currency}.</span>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(event) => setPropertyValue(event.target.value)}
                  className="w-full px-4 py-3 outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Down payment</span>
              <div className="mt-2 grid gap-3 md:grid-cols-[0.7fr_1.3fr]">
                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(event) => setDownPaymentPercent(event.target.value)}
                    className="w-full px-4 py-3 outline-none"
                  />
                  <span className="bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500">%</span>
                </div>
                <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-black text-slate-700">
                  {formatMoney(totals.downPayment, currency)}
                </div>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Interest Rate %</span>
              <input
                type="number"
                value={interestRate}
                onChange={(event) => setInterestRate(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Loan Period Years</span>
              <input
                type="number"
                value={loanPeriod}
                onChange={(event) => setLoanPeriod(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"
              />
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-bold text-slate-500">Your estimated monthly payment</p>
          <h2 className="mt-3 text-4xl font-black text-[#08306B] md:text-5xl">
            {formatMoney(totals.monthlyPayment, currency)}
          </h2>
          <p className="mt-3 text-sm text-slate-500">The value is based on Equated Monthly Installment (EMI)</p>

          <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Loan Amount:</span>
              <strong>{formatMoney(totals.loanAmount, currency)}</strong>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Interest Rate:</span>
              <strong>{interestRate || 0} %</strong>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Total interest payable:</span>
              <strong>{formatMoney(totals.totalInterest, currency)}</strong>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-100 px-4 py-4">
              <span className="font-bold text-slate-700">Total payable (Capital + Interest):</span>
              <strong className="text-[#08306B]">{formatMoney(totals.totalPayable, currency)}</strong>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#08306B] p-5 text-white">
            <h3 className="text-xl font-black">Let us help you for a fast and hassle free loan application</h3>
            <button type="button" className="mt-4 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#08306B] transition hover:bg-blue-50">
              Request Loan Assistance
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
          <h2 className="text-xl font-black text-amber-950">Disclaimer</h2>
          <p className="mt-3">
            The values shown above are estimates only. The interest rate applied for the above calculation is the 5 year fixed housing loan interest rate and is subject to the assignment of salary to the bank. The final interest rate will be determined by the bank upon receipt of your supporting documents and evaluation.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-black text-slate-900">FAQs</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-black text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-sm leading-7 text-slate-600">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-slate-900">Home Loan Calculator</h2>
            <p className="mt-3">
              A home loan calculator is a valuable tool that can help you make informed decisions about your home loan. If you are considering purchasing a home, use this calculator to estimate your monthly commitment.
            </p>
            <p className="mt-3">
              Your monthly payment depends on your selected repayment strategy and the prevailing interest rate. This calculator helps assess your financial capacity and the highest loan amount you can comfortably manage.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-slate-900">Benefits of Using a Home Loan Calculator</h2>
            <div className="mt-4 grid gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-xl bg-slate-50 px-4 py-3 font-bold text-slate-800">
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black text-slate-900">How do you use a home loan calculator?</h2>
            <p className="mt-3">
              Enter the loan amount, interest rate, and loan term in years. The calculator will then calculate the monthly payment amount. Try different scenarios to compare loan amounts, interest rates, and loan terms before choosing the best option.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
