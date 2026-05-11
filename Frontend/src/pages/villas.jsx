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
            House ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-blue-700">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-slate-800">
          Villas for rent in Sri Lanka (1183 properties)
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
            Apartments (4317)
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Commercial
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Villas
          </div>

          <div className="rounded-full border border-blue-700 bg-white px-4 py-1 text-sm">
            Rooms
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* LEFT SIDE */}
          <div className="lg:col-span-3">
            {/* PROPERTY GRID */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {/* CARD 1 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="property"
                  className="h-[200px] w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Beautiful House
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Negombo
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
                    src="https://images.unsplash.com/photo-1507149833265-60c372daea22"
                    alt="property"
                    className="h-[200px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Modern Villa
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Colombo 10
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
                    src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                    alt="property"
                    className="h-[200px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Luxury Home
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Colombo 07
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
                    URGENT
                  </span>

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                    alt="property"
                    className="h-[200px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Stylish Apartment
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Mount Lavinia
                  </p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
                    URGENT
                  </span>

                  <img
                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
                    alt="property"
                    className="h-[200px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Family House
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Kandy
                  </p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <span className="absolute right-3 top-3 rounded bg-red-600 px-2 py-1 text-[11px] font-semibold text-white">
                    URGENT
                  </span>

                  <img
                    src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                    alt="property"
                    className="h-[200px] w-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Modern Residence
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Galle
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">
            {/* AD BOX */}
            <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
              <h3 className="text-xl font-bold">
                Market Report 2026
              </h3>

              <p className="mt-2 text-blue-200">
                OUT NOW!
              </p>
            </div>

            {/* FEATURED */}
            <div className="rounded-xl border border-slate-300 bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold">
                Featured Projects
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

