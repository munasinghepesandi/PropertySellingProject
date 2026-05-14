import React from "react";
import Navbar from "../components/Navbar";

export default function Land() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-50 p-5 font-sans">
        {/* SEARCH BAR */}
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-300 bg-white p-4">
          <input
            type="text"
            placeholder="School or University"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>Select Radius</option>
          </select>

          <select className="rounded-md border border-slate-300 px-4 py-2 text-sm outline-none">
            <option>House</option>
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
            Kandy Lands ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-blue-700">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-slate-800">
          Lands for Sale in Kandy (1183 properties)
        </div>

        {/* ACTION BUTTONS */}
        <div className="mb-5 flex flex-wrap gap-3">
          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">
            Save Search
          </button>

          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">
            Create E-Mail Alerts
          </button>

          <button className="rounded-md border border-blue-700 bg-white px-4 py-2 text-sm transition hover:bg-blue-50">
            Share
          </button>
        </div>

        {/* CHIPS */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Residential Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Agricultural Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Commercial Lands
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Tea Estate Lands
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
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Residential Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Peradeniya, Kandy</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Agricultural Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Gampola, Kandy</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Commercial Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Katugastota, Kandy</p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Hill Country Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Hanthana, Kandy</p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Tea Estate Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Pussellawa, Kandy</p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy land"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Investment Land</h3>
                  <p className="mt-1 text-sm text-slate-500">Digana, Kandy</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
              <h3 className="text-xl font-bold">Kandy Market Report 2026</h3>
              <p className="mt-2 text-blue-200">LATEST LAND PRICES</p>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold">Featured Kandy Projects</h4>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                className="rounded-lg"
                alt="featured"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
