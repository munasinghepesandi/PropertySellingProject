import React from "react";
import Navbar from "../components/Navbar";

import {
  Home,
  Expand,
  Image as ImageIcon,
} from "lucide-react";

const filters = [
  "Cultivation Lands",
  "Tea Plantation Lands",
  "Coconut Lands",
  "Paddy Fields",
  "Agricultural Lands",
  "Investment Farmland",
  "Bare Lands for Farming",
];

const properties = [
  {
    id: 1,
    title: "5 Acres Tea Cultivation Land in Kandy",
    location: "Kandy",
    type: "Tea Land",
    price: "Rs. 12M",
    unit: "Per Acre",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
    size: "5 Acres",
    gallery: 6,
  },
  {
    id: 2,
    title: "3 Acres Coconut Cultivation Land in Peradeniya",
    location: "Peradeniya",
    type: "Coconut Land",
    price: "Rs. 8.5M",
    unit: "Per Acre",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
    size: "3 Acres",
    gallery: 8,
  },
];

export default function Cultivation() {
  return (
    <div className="min-h-screen bg-[#EAEAEA] text-[#4A4A4A]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* TITLE */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#203F52]">
            Cultivation & Agricultural Lands
          </h1>
          <p className="mt-2 text-sm text-[#4A4A4A]">
            High-value farmland and plantation investment opportunities in Sri Lanka
          </p>
        </div>

        {/* FILTERS */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-[#203F52] mb-4">
            Filter by
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#B8B8B8] bg-[#FFFFFF] px-5 py-3 text-[#203F52] shadow-sm transition hover:bg-[#2A6FA3] hover:text-[#FFFFFF]"
              >
                <Home size={18} />
                <span className="font-medium">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">

          {properties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#B8B8B8] shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#203F52]/70 via-[#203F52]/20 to-transparent" />

                <div className="absolute left-4 bottom-4 flex items-center gap-1 rounded-lg bg-[#FFFFFF]/90 px-2 py-1 text-sm font-semibold text-[#203F52]">
                  <ImageIcon size={15} />
                  {property.gallery}
                </div>

                <div className="absolute right-4 bottom-4 rounded-lg bg-[#203F52]/90 px-3 py-1 text-sm font-medium text-[#FFFFFF]">
                  {property.location}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* META */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#4A4A4A]">
                  <div className="flex items-center gap-1">
                    <Expand size={16} />
                    <span>{property.size}</span>
                  </div>

                  <span className="rounded-full border border-[#2A6FA3] px-3 py-1 text-[#2A6FA3] font-medium">
                    {property.type}
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-5 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-[#2A6FA3]">
                    {property.price}
                  </h3>
                  <span className="mb-1 text-[#4A4A4A]">
                    {property.unit}
                  </span>
                </div>

                {/* TITLE */}
                <h4 className="mt-4 text-xl font-semibold text-[#203F52] hover:text-[#2A6FA3] transition cursor-pointer">
                  {property.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-[#4A4A4A] leading-6">
                  Fertile cultivation land suitable for agriculture, plantations,
                  farming, and long-term investment growth.
                </p>

                {/* BUTTON */}
                <button className="mt-5 font-semibold text-[#2A6FA3] hover:text-[#203F52]">
                  more »
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}