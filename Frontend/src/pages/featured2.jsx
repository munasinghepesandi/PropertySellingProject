import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Search,
  List,
  Map,
  Ruler,
  Mountain,
} from "lucide-react";

const lands = [
  {
    id: 1,
    title: "Hanthana Hill View Land",
    location: "Hanthana, Kandy",
    price: "LKR 12 M per perch",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    status: "available",
    size: "20 Perches",
    landType: "Residential",
    roadAccess: "20 ft Road",
  },
  {
    id: 2,
    title: "Kandy City Investment Land",
    location: "Kandy City Center",
    price: "LKR 18 M per perch",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    status: "available",
    size: "15 Perches",
    landType: "Commercial",
    roadAccess: "Main Road Access",
  },
  {
    id: 3,
    title: "Peradeniya Green Estate Land",
    location: "Peradeniya, Kandy",
    price: "LKR 8.5 M per perch",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    status: "available",
    size: "40 Perches",
    landType: "Agricultural",
    roadAccess: "15 ft Road",
  },
];

export default function FeaturedLands() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fb] to-white">
      <Navbar />

      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="rounded-[32px] bg-gradient-to-r from-[#08306B] via-[#0b3f82] to-[#2171B5] p-10 text-white shadow-2xl">
          <h1 className="text-3xl font-bold md:text-5xl">
            Featured Lands in
            <span className="block text-blue-200">Kandy, Sri Lanka</span>
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100">
            Explore prime investment lands, residential plots, and agricultural
            estates across Kandy’s most valuable regions.
          </p>

          <div className="mt-6 flex gap-4">
            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">25+</p>
              <span className="text-xs">Land Plots</span>
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">3</p>
              <span className="text-xs">Zones</span>
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2">
              <p className="text-xl font-bold">High ROI</p>
              <span className="text-xs">Investment</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm">
          <input
            placeholder="Search lands in Kandy..."
            className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none"
          />

          <button className="flex items-center gap-2 rounded-xl bg-[#2171B5] px-5 py-2 text-white">
            <Search size={16} />
            Search
          </button>

          <div className="ml-auto flex overflow-hidden rounded-xl border">
            <button className="flex items-center gap-2 bg-[#08306B] px-4 py-2 text-white">
              <List size={16} /> List
            </button>
            <button className="flex items-center gap-2 bg-white px-4 py-2 text-[#2171B5]">
              <Map size={16} /> Map
            </button>
          </div>
        </div>
      </div>

      {/* LAND GRID */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 lg:grid-cols-3">
        {lands.map((land) => (
          <div
            key={land.id}
            className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden">
              <img
                src={land.image}
                alt={land.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-lg font-bold text-[#08306B]">
                {land.title}
              </h2>

              <div className="mt-1 flex items-center gap-2 text-sm text-[#2171B5]">
                <MapPin size={14} />
                {land.location}
              </div>

              <p className="mt-3 text-xl font-bold text-[#08306B]">
                {land.price}
              </p>

              {/* LAND DETAILS */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between rounded-xl bg-[#f6f9ff] px-3 py-2 text-sm">
                  <span className="flex items-center gap-2 text-[#08306B]">
                    <Ruler size={14} /> Size
                  </span>
                  <span className="font-semibold text-[#2171B5]">
                    {land.size}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#f6f9ff] px-3 py-2 text-sm">
                  <span className="flex items-center gap-2 text-[#08306B]">
                    <Mountain size={14} /> Type
                  </span>
                  <span className="font-semibold text-[#2171B5]">
                    {land.landType}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-[#f6f9ff] px-3 py-2 text-sm">
                  <span className="text-[#08306B]">Road Access</span>
                  <span className="font-semibold text-[#2171B5]">
                    {land.roadAccess}
                  </span>
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={14} />
                  Available Now
                </div>

                <button
                  onClick={() => navigate("/viewmore")}
                  className="rounded-xl bg-[#2171B5] px-4 py-2 text-xs font-semibold text-white hover:bg-[#08306B]"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
