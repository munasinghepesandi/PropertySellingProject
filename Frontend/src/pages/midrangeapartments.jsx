import React from "react";
import Navbar from "../components/Navbar";

import {
  Home,
  BedDouble,
  Expand,
  Image as ImageIcon,
} from "lucide-react";

const filters = [
  "Luxury Apartments in Kandy",
  "Mid-range Apartments",
  "Lands in Peradeniya",
  "Mountain View Villas",
  "Houses in Katugastota",
  "Cultivation Lands",
  "Investment Lands near Kandy City",
];

const properties = [
  {
    id: 1,
    title: "Modern Mid-Rise Apartment in Kandy City",
    location: "Kandy",
    type: "Apartment",
    price: "Rs. 45M",
    unit: "Negotiable",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    size: "1800 sqft",
    gallery: 6,
  },
  {
    id: 2,
    title: "Luxury 3 Bedroom Apartment in Peradeniya",
    location: "Peradeniya",
    type: "Apartment",
    price: "Rs. 52M",
    unit: "Negotiable",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
    bedrooms: 3,
    size: "2000 sqft",
    gallery: 8,
  },
  {
    id: 3,
    title: "Contemporary Apartment with Mountain View",
    location: "Katugastota",
    type: "Apartment",
    price: "Rs. 38M",
    unit: "Negotiable",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    bedrooms: 2,
    size: "1650 sqft",
    gallery: 10,
  },
  {
    id: 4,
    title: "Affordable Family Apartment in Gampola",
    location: "Gampola",
    type: "Apartment",
    price: "Rs. 28M",
    unit: "Negotiable",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    bedrooms: 2,
    size: "1400 sqft",
    gallery: 5,
  },
];

export default function Midrange() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#08306B] leading-tight">
            Mid Range Apartments in Kandy
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            Discover high-return real estate opportunities in Sri Lanka
          </p>
        </div>

        {/* Filters */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-[#08306B] mb-4">
            Filter by
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {filters.map((filter, index) => (
              <button
                key={index}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#2171B5] bg-white px-5 py-3 text-[#08306B] shadow-sm transition hover:bg-[#2171B5] hover:text-white"
              >
                <Home size={18} />
                <span className="font-medium">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">

          {properties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Gallery */}
                <div className="absolute left-4 bottom-4 flex items-center gap-1 rounded-lg bg-white/90 px-2 py-1 text-sm font-semibold text-[#08306B]">
                  <ImageIcon size={15} />
                  {property.gallery}
                </div>

                {/* Location */}
                <div className="absolute right-4 bottom-4 rounded-lg bg-[#08306B]/90 px-3 py-1 text-sm font-medium text-white">
                  {property.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  {property.bedrooms && (
                    <div className="flex items-center gap-1">
                      <BedDouble size={16} />
                      <span>{property.bedrooms} BHK</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    <Expand size={16} />
                    <span>{property.size}</span>
                  </div>

                  <span className="rounded-full border border-[#2171B5] px-3 py-1 text-[#2171B5] font-medium">
                    {property.type}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-end gap-2">
                  <h3 className="text-4xl font-bold text-[#2171B5]">
                    {property.price}
                  </h3>

                  {property.unit && (
                    <span className="mb-1 text-gray-500">
                      {property.unit}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className="mt-4 text-xl font-semibold text-[#08306B] hover:text-[#2171B5] transition cursor-pointer">
                  {property.title}
                </h4>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Modern mid-range apartment with premium finishes, strong
                  rental potential, and excellent access to Kandy city center.
                </p>

                {/* Button */}
                <button className="mt-5 font-semibold text-[#2171B5] hover:text-[#08306B]">
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
