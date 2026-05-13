import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Beachfront() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-slate-50 p-5 font-sans">
        {/* SEARCH BAR */}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-300 bg-white p-4">
          <input
            type="text"
            placeholder="Land area / location (Kandy)"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>Select Radius</option>
          </select>

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>Land Type</option>
          </select>

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>Price Range</option>
          </select>

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>Show More</option>
          </select>

          <button className="rounded-md bg-blue-700 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* FILTERS */}
        <div className="my-4 flex items-center gap-3">
          <span className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Land ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-blue-700">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-slate-800">
          Beachfront Lands for sale in Kandy (Featured Listings)
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm hover:bg-blue-50">
            Save Search
          </button>

          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm hover:bg-blue-50">
            Create E-Mail Alerts
          </button>

          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm hover:bg-blue-50">
            Share
          </button>
        </div>

        {/* CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Residential Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Commercial Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Agricultural Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Investment Plots
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* CARD 1 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                  alt="land"
                  onClick={() => navigate("/propertynew")}
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Prime Land Plot</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Peradeniya, Kandy – 10 Perches
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] text-white">
                    HOT
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="land"
                    onClick={() => navigate("/propertynew")}
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Hill View Land</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Katugastota, Kandy – 15 Perches
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] text-white">
                    HOT
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                    alt="land"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Agricultural Plot</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Hanthana, Kandy – 25 Perches
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b"
                  alt="land"
                  onClick={() => navigate("/propertynew")}
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Residential Land</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Ampitiya, Kandy – 12 Perches
                  </p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                  alt="land"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Investment Plot</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Digana, Kandy – 20 Perches
                  </p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
                  alt="land"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">City Edge Land</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Kandy City Limits – 8 Perches
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
              <h3 className="text-xl font-bold">Kandy Land Market 2026</h3>
              <p className="mt-2 text-blue-200">Latest Price Trends</p>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold">
                Featured Land Project
              </h4>

              <img
                src="https://images.unsplash.com/photo-1464146072230-91cabc968266"
                alt="featured land"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
