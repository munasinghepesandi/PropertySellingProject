import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Search,
  MapPin,
  Building2,
  SlidersHorizontal,
  Grid3X3,
} from "lucide-react";

const condosData = [
  {
    id: 1,
    name: "Hanthana Skyline Residences",
    location: "Hanthana, Kandy",
    price: "Rs. 38M - 95M",
    units: 90,
    type: "Luxury",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 2,
    name: "Bogambara City Condos",
    location: "Bogambara, Kandy",
    price: "Rs. 25M - 60M",
    units: 140,
    type: "Mid-range",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
  {
    id: 3,
    name: "Peradeniya Green Apartments",
    location: "Peradeniya, Kandy",
    price: "Rs. 18M - 45M",
    units: 110,
    type: "Affordable",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
];

export default function CondoDirectory() {
  const [search, setSearch] = useState("");

  const filtered = condosData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#EAEAEA]">
      <Navbar />

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#203F52] via-[#2A6FA3] to-[#2D4F63] text-[#FFFFFF] px-6 py-14">
        <h1 className="text-4xl font-bold">
          Directory of New Real Estate Developments in Sri Lanka
        </h1>

        <p className="text-sm text-[#EAEAEA] mt-2">
          Explore premium, mid-range, and affordable condos in Kandy
        </p>

        {/* SEARCH */}
        <div className="mt-6 flex items-center bg-[#FFFFFF] rounded-2xl overflow-hidden max-w-2xl shadow-lg border border-[#B8B8B8]">
          <Search className="ml-4 text-[#4A4A4A]" />
          <input
            type="text"
            placeholder="Search condos in Kandy..."
            className="w-full p-4 text-[#203F52] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* FILTER PANEL */}
        <div className="bg-[#FFFFFF] p-5 rounded-2xl shadow-sm border border-[#B8B8B8] h-fit">
          <div className="flex items-center gap-2 font-semibold text-[#203F52] mb-4">
            <SlidersHorizontal size={18} />
            Smart Filters
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium text-[#4A4A4A]">Property Type</p>
              <select className="w-full border border-[#B8B8B8] p-2 rounded mt-1">
                <option>All</option>
                <option>Luxury</option>
                <option>Mid-range</option>
                <option>Affordable</option>
                <option>Premium</option>
              </select>
            </div>

            <div>
              <p className="font-medium text-[#4A4A4A]">Kandy Location</p>
              <select className="w-full border border-[#B8B8B8] p-2 rounded mt-1">
                <option>All Kandy</option>
                <option>Hanthana</option>
                <option>Peradeniya</option>
                <option>Bogambara</option>
                <option>Katugastota</option>
                <option>Ampitiya</option>
              </select>
            </div>

            <button className="w-full bg-[#2A6FA3] text-[#FFFFFF] py-2 rounded-xl hover:bg-[#203F52] transition">
              Apply Filters
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="lg:col-span-3">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#203F52] flex items-center gap-2">
              <Grid3X3 size={18} />
              Available Condos
            </h2>

            <p className="text-sm text-[#4A4A4A]">
              {filtered.length} listings
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((condo) => (
              <div
                key={condo.id}
                className="bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-[#B8B8B8]"
              >
                <img
                  src={condo.image}
                  alt={condo.name}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#203F52]">
                    {condo.name}
                  </h2>

                  <div className="flex items-center text-[#4A4A4A] text-sm mt-1">
                    <MapPin size={14} className="mr-1" />
                    {condo.location}
                  </div>

                  <div className="flex items-center text-[#4A4A4A] text-sm mt-1">
                    <Building2 size={14} className="mr-1" />
                    {condo.units} Units
                  </div>

                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-[#EAEAEA] text-[#2A6FA3] border border-[#B8B8B8]">
                    {condo.type}
                  </span>

                  <p className="mt-3 font-bold text-[#2A6FA3]">
                    {condo.price}
                  </p>

                  <button className="mt-4 w-full bg-[#2A6FA3] text-[#FFFFFF] py-2 rounded-xl hover:bg-[#203F52] transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}