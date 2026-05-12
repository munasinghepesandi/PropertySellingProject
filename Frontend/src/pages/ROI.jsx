import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Banknote,
  TrendingUp,
  PieChart,
} from "lucide-react";

export default function WizardROICalculator() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    price: 25000000,
    rent: 150000,
    growth: 5,
    years: 20,
    loan: 70,
  });

  // 🔥 CALCULATIONS
  const loanAmount = (data.price * data.loan) / 100;

  const futureValue = useMemo(() => {
    return data.price * Math.pow(1 + data.growth / 100, data.years);
  }, [data]);

  const totalRent = useMemo(() => {
    return data.rent * 12 * data.years;
  }, [data]);

  const simpleROI = useMemo(() => {
    const profit = futureValue + totalRent - data.price;
    return ((profit / data.price) * 100).toFixed(2);
  }, [futureValue, totalRent, data.price]);

  const steps = [
    "Property Info",
    "Investment Setup",
    "Growth Assumptions",
    "Results",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2f7ff] to-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* HEADER */}
        <h1 className="text-4xl font-black text-[#08306B] mb-2">
          ROI Investment Wizard
        </h1>

        <p className="text-gray-500 mb-8">
          Step-by-step property return calculator
        </p>

        {/* STEP INDICATOR */}
        <div className="flex gap-3 mb-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex-1 text-center py-3 rounded-xl font-semibold text-sm transition ${
                step === i + 1
                  ? "bg-[#2171B5] text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* STEP 1 */}
          {step === 1 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Home className="text-[#2171B5]" />
                <h2 className="text-2xl font-bold">Property Details</h2>
              </div>

              <input
                type="number"
                value={data.price}
                onChange={(e) =>
                  setData({ ...data, price: +e.target.value })
                }
                className="w-full border p-4 rounded-xl mb-4"
                placeholder="Property Price"
              />

              <input
                type="number"
                value={data.rent}
                onChange={(e) =>
                  setData({ ...data, rent: +e.target.value })
                }
                className="w-full border p-4 rounded-xl"
                placeholder="Monthly Rent"
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Banknote className="text-[#2171B5]" />
                <h2 className="text-2xl font-bold">Loan Setup</h2>
              </div>

              <label className="block mb-2 font-semibold">
                Loan Percentage (%)
              </label>

              <input
                type="range"
                min="0"
                max="100"
                value={data.loan}
                onChange={(e) =>
                  setData({ ...data, loan: +e.target.value })
                }
                className="w-full accent-[#2171B5]"
              />

              <p className="mt-3 text-[#08306B] font-bold">
                Loan: {data.loan}% = LKR{" "}
                {((data.price * data.loan) / 100).toLocaleString()}
              </p>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-[#2171B5]" />
                <h2 className="text-2xl font-bold">
                  Growth Assumptions
                </h2>
              </div>

              <label className="font-semibold">Annual Growth (%)</label>
              <input
                type="number"
                value={data.growth}
                onChange={(e) =>
                  setData({ ...data, growth: +e.target.value })
                }
                className="w-full border p-4 rounded-xl mt-2"
              />

              <label className="font-semibold mt-5 block">
                Investment Period (Years)
              </label>
              <input
                type="number"
                value={data.years}
                onChange={(e) =>
                  setData({ ...data, years: +e.target.value })
                }
                className="w-full border p-4 rounded-xl mt-2"
              />
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="text-[#2171B5]" />
                <h2 className="text-2xl font-bold">Final Results</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <ResultCard
                  title="ROI"
                  value={`${simpleROI}%`}
                />
                <ResultCard
                  title="Future Value"
                  value={`LKR ${futureValue.toFixed(0)}`}
                />
                <ResultCard
                  title="Rental Income"
                  value={`LKR ${totalRent.toFixed(0)}`}
                />
              </div>

              <div className="mt-6 bg-[#f4f8ff] p-5 rounded-2xl">
                <p className="text-[#08306B] font-semibold">
                  Total Profit Estimate:
                </p>

                <h2 className="text-3xl font-black text-[#2171B5] mt-2">
                  LKR{" "}
                  {(
                    futureValue +
                    totalRent -
                    data.price
                  ).toFixed(0)}
                </h2>
              </div>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="flex justify-between mt-10">
            <button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border disabled:opacity-30"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <button
              onClick={() => setStep(step + 1)}
              disabled={step === 4}
              className="flex items-center gap-2 px-6 py-3 bg-[#2171B5] text-white rounded-xl"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🔥 RESULT CARD
function ResultCard({ title, value }) {
  return (
    <div className="bg-white border rounded-2xl p-5 text-center shadow-sm">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-[#08306B] mt-2">
        {value}
      </h2>
    </div>
  );
}
