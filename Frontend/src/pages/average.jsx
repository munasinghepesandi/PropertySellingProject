import React, { useState } from "react";
import Navbar from "../components/Navbar";
import chartImage from "../assets/hero.png";

const Average = {
  "Dec 2025 (Q4)": [
    { label: "Kandy House Sale price", value: "251.65 million" },
    { label: "Kandy Apartment Sale price", value: "109.51 million" },
    { label: "Kandy Buildings Sale price", value: "409.27 million" },
  ],

  "Sep 2025 (Q3)": [
    { label: "Kandy House Sale price", value: "240.10 million" },
    { label: "Kandy Apartment Sale price", value: "98.20 million" },
    { label: "Kandy Buildings Sale price", value: "390.00 million" },
  ],
};

export default function RegionPrices() {
  const [selectedPeriod, setSelectedPeriod] =
    useState("Dec 2025 (Q4)");

  const [prices, setPrices] = useState(Average[selectedPeriod]);

  const handleGo = () => {
    setPrices(Average[selectedPeriod]);
  };

  const handleViewIndex = () => {
    alert("Navigate to Land Price Index Page");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#EAEAEA] px-4 pt-24 pb-10 font-sans text-[#4A4A4A]">

        {/* CHART SECTION */}
        <div className="mx-auto mb-10 max-w-6xl text-center">

          <h1 className="mb-3 text-3xl font-bold text-[#203F52] md:text-4xl">
            Average Property Prices of Sri Lanka
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-sm leading-6 text-[#4A4A4A] md:text-base">
            Average Prices are based on property ads published on LankaPropertyWeb.com.
          </p>

          <img
            src={chartImage}
            alt="Average Property Prices Chart"
            className="mx-auto w-full max-w-5xl rounded-2xl border border-[#B8B8B8] shadow-lg"
          />
        </div>

        {/* FILTER BAR */}
        <div className="mx-auto mb-6 flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] p-5 shadow-sm md:flex-row">

          <label className="font-semibold text-[#203F52]">
            View prices for
          </label>

          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full rounded-lg border border-[#B8B8B8] px-4 py-2 outline-none focus:ring-2 focus:ring-[#2A6FA3] md:w-auto"
          >
            {Object.keys(Average).map((period) => (
              <option key={period} value={period}>
                {period}
              </option>
            ))}
          </select>

          <button
            onClick={handleGo}
            className="rounded-lg bg-[#203F52] px-6 py-2 font-medium text-[#FFFFFF] transition hover:bg-[#2D4F63]"
          >
            Go
          </button>

        </div>

        {/* TITLE */}
        <div className="mx-auto mb-4 max-w-4xl">
          <h1 className="text-2xl font-bold text-[#203F52] md:text-3xl">
            Average Sales prices by Region for {selectedPeriod}
          </h1>
        </div>

        {/* TABLE */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#B8B8B8] bg-[#FFFFFF] shadow-md">

          {/* HEADER */}
          <div className="hidden justify-between border-b border-[#B8B8B8] bg-[#EAEAEA] px-6 py-4 font-bold text-[#203F52] md:flex">
            <span>Property Type</span>
            <span>Average Price</span>
          </div>

          {/* BODY */}
          <div>
            {prices.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 px-6 py-4 transition hover:bg-[#EAEAEA] md:flex-row md:items-center md:justify-between ${
                  index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#EAEAEA]"
                }`}
              >
                <span className="font-medium text-[#4A4A4A]">
                  {item.label}
                </span>

                <span className="font-semibold text-[#203F52]">
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
            className="rounded-xl bg-[#2A6FA3] px-8 py-3 font-semibold text-[#FFFFFF] shadow-md transition hover:bg-[#203F52]"
          >
            View Land Price Index
          </button>

        </div>

      </div>
    </>
  );
}