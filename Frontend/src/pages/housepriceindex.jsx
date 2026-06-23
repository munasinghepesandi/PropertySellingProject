import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom'


import chartImage from "../assets/hero.png";

const colors = {
  primaryDark: "#203F52",
  secondaryBlue: "#2A6FA3",
  lightGray: "#EAEAEA",
  text: "#4A4A4A",
}

const HousePriceIndexData = {
  "Dec 2025 (Q4)": [
    { label: "Kandy House Price Index", value: "251.65 million" },
    { label: "Colombo House Price Index", value: "312.40 million" },
    { label: "Galle House Price Index", value: "198.75 million" },
  ],

  "Sep 2025 (Q3)": [
    { label: "Kandy House Price Index", value: "240.10 million" },
    { label: "Colombo House Price Index", value: "301.55 million" },
    { label: "Galle House Price Index", value: "185.20 million" },
  ],
};

export default function HousePriceIndex() {
  const [selectedPeriod, setSelectedPeriod] =
    useState("Dec 2025 (Q4)");

  const [prices, setPrices] = useState(
    HousePriceIndexData[selectedPeriod]
  );

  const handleGo = () => {
    setPrices(HousePriceIndexData[selectedPeriod]);
  };

  const handleViewIndex = () => {
    alert("Navigate to Detailed House Price Index Page");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 px-4 pt-24 pb-10 md:px-10 font-sans">

        {/* CHART SECTION */}
        <div className="mx-auto mb-10 max-w-6xl text-center">

          <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            House Price Index of Sri Lanka
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-sm leading-6 text-slate-500 md:text-base">
            The House Price Index represents average advertised house prices
            across major cities in Sri Lanka. Data is based on property listings
            and market trends.
          </p>

          <img
            src={chartImage}
            alt="House Price Index Chart"
            className="mx-auto w-full max-w-5xl rounded-2xl shadow-lg"
          />
        </div>

        {/* FILTER BAR */}
        <div className="mx-auto mb-6 flex max-w-4xl flex-col items-center gap-4 rounded-2xl bg-white p-5 shadow-md md:flex-row">

          <label className="font-semibold text-slate-700">
            Select period
          </label>

          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 md:w-auto"
          >
            {Object.keys(HousePriceIndexData).map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>

          <button
            onClick={handleGo}
            className="rounded-lg bg-blue-700 px-6 py-2 font-medium text-white transition hover:bg-blue-900"
          >
            Apply
          </button>
        </div>

        {/* TITLE */}
        <div className="mx-auto mb-4 max-w-4xl">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            House Price Index by Region — {selectedPeriod}
          </h1>
        </div>

        {/* TABLE */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-md">

          {/* HEADER */}
          <div className="hidden justify-between border-b border-slate-300 bg-slate-50 px-6 py-4 font-bold text-slate-700 md:flex">
            <span>Region</span>
            <span>House Price Index</span>
          </div>

          {/* BODY */}
          <div>
            {prices.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 px-6 py-4 transition hover:bg-blue-50 md:flex-row md:items-center md:justify-between ${
                  index % 2 === 0 ? "bg-slate-100" : "bg-white"
                }`}
              >
                <span className="font-medium text-slate-800">
                  {item.label}
                </span>

                <span className="font-semibold text-slate-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="mx-auto mt-8 flex max-w-4xl justify-center">

          <button
            onClick={handleViewIndex}
            className="rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white shadow-md transition hover:-translate-y-1 hover:bg-blue-900"
          >
            View Detailed House Price Index
          </button>
        </div>
      </div>
    </>
  );
}
