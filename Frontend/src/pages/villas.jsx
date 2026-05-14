import React from "react";
import Navbar from "../components/Navbar";

export default function Villa() {
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
            <option>Villa</option>
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
            Villa ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-blue-700">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-slate-800">
          Villas for rent in Kandy & Sri Lanka (1183 properties)
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
            Kandy Villas (2417)
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Colombo
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Galle
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Nuwara Eliya
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* CARD 1 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="villa"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Peradeniya Luxury Villa
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Peradeniya, Kandy
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
                    URGENT
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227"
                    alt="villa"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Hillside Modern Villa
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Hantana, Kandy
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
                    URGENT
                  </span>
                  <img
                    src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
                    alt="villa"
                    className="h-[200px] w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Lake View Luxury Villa
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Ampitiya, Kandy
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                  alt="villa"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Elegant Family Villa
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Katugastota, Kandy
                  </p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                  alt="villa"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Green Valley Villa
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Digana, Kandy
                  </p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                  alt="villa"
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Royal View Residence
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Heerassagala, Kandy
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
              <h3 className="text-xl font-bold">Kandy Property Report 2026</h3>
              <p className="mt-2 text-blue-200">UPDATED MARKET INSIGHT</p>
            </div>

            <div className="rounded-xl border border-slate-300 bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold">
                Featured Villas
              </h4>
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4"
                alt="featured"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
