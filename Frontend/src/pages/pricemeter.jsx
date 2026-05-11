import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
//import { Footer } from "../components/Footer";

export default function Pricemeter() {
  const [price, setPrice] = useState(50);

  return (
    <div className="min-h-screen bg-[#08306B] text-[#2171B5]">
      <Navbar />

      <div className="max-w-5xl mx-auto px-5 py-16">
        <h1 className="text-center text-4xl font-bold mb-10 text-[#2171B5]">
          Property Price Analyzer
        </h1>

        {/* MAIN CARD */}
        <div className="flex flex-col md:flex-row gap-8 p-8 border-2 border-[#2171B5] rounded-2xl bg-[#08306B]">

          {/* LEFT: FORM */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-5 text-[#2171B5]">
              Enter Property Details
            </h2>

            <div className="grid gap-3">
              <select className="p-3 rounded-lg border border-[#2171B5] bg-[#08306B] text-[#2171B5]">
                <option>Property Type</option>
              </select>

              <select className="p-3 rounded-lg border border-[#2171B5] bg-[#08306B] text-[#2171B5]">
                <option>House</option>
                <option>Apartment</option>
              </select>

              <input
                type="text"
                placeholder="Location"
                className="p-3 rounded-lg border border-[#2171B5] bg-[#08306B] text-[#2171B5]"
              />

              <input
                type="text"
                placeholder="Floor Area (sqft)"
                className="p-3 rounded-lg border border-[#2171B5] bg-[#08306B] text-[#2171B5]"
              />

              <input
                type="number"
                placeholder="Estimated Price"
                onChange={(e) => setPrice(Number(e.target.value))}
                className="p-3 rounded-lg border border-[#2171B5] bg-[#08306B] text-[#2171B5]"
              />
            </div>

            <button className="mt-5 w-full py-3 bg-[#2171B5] text-[#08306B] font-bold rounded-lg hover:bg-[#08306B] hover:text-[#2171B5] hover:border hover:border-[#2171B5] transition">
              Check Market Value
            </button>
          </div>

          {/* RIGHT: GAUGE */}
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold mb-5">
              Market Value Indicator
            </h2>

            <div className="flex flex-col items-center">
              {/* GAUGE */}
              <div className="relative w-[220px] h-[120px] overflow-hidden rounded-t-full bg-[#2171B5]">
                <div
                  className="absolute w-full h-full origin-bottom transition-transform duration-500 bg-[#08306B]"
                  style={{ transform: `rotate(${price * 1.8}deg)` }}
                ></div>

                <div className="absolute bottom-2 w-full text-center font-bold text-[#2171B5]">
                  {price}%
                </div>
              </div>

              {/* LABELS */}
              <div className="flex justify-between w-[220px] mt-3 text-sm">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}
