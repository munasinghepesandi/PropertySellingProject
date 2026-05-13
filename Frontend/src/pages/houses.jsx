import React from "react";
import Navbar from "../components/Navbar";

export default function House() {
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
            <option>Apartment</option>
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
            Kandy ✕
          </span>

          <span className="cursor-pointer text-sm font-medium text-blue-700">
            RESET ALL
          </span>
        </div>

        {/* TITLE */}
        <div className="mb-4 text-2xl font-bold text-slate-800">
          Houses for rent in Kandy (6 properties)
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
            Apartments
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* CARD 1 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  className="h-[200px] w-full object-cover"
                  alt="Hanthana apartment"
                  onClick={() => navigate("/propertynew")}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Hanthana Hill View Apartment
                  </h3>
                  <p className="text-sm text-slate-500">Hanthana, Kandy</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  className="h-[200px] w-full object-cover"
                  alt="Peradeniya apartment"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Peradeniya Garden Residence
                  </h3>
                  <p className="text-sm text-slate-500">Peradeniya, Kandy</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156"
                  className="h-[200px] w-full object-cover"
                  alt="Katugastota apartment"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Katugastota Modern Suites
                  </h3>
                  <p className="text-sm text-slate-500">Katugastota, Kandy</p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
                  className="h-[200px] w-full object-cover"
                  alt="Kandy city apartment"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Kandy City Luxury Apartment
                  </h3>
                  <p className="text-sm text-slate-500">Kandy City Center</p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
                  className="h-[200px] w-full object-cover"
                  alt="Digana apartment"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Digana Lake View Apartment
                  </h3>
                  <p className="text-sm text-slate-500">Digana, Kandy</p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                  className="h-[200px] w-full object-cover"
                  alt="Ampitiya apartment"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">
                    Ampitiya Green Residency
                  </h3>
                  <p className="text-sm text-slate-500">Ampitiya, Kandy</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl bg-blue-950 p-6 text-center text-white">
              <h3 className="text-xl font-bold">Kandy Market Report 2026</h3>
              <p className="mt-2 text-blue-200">OUT NOW!</p>
            </div>

            <div className="rounded-xl border bg-white p-4">
              <h4 className="mb-4 text-lg font-semibold">
                Featured Kandy Projects
              </h4>

              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4"
                className="rounded-lg"
                alt="featured kandy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
